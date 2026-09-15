import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const derive = promisify(scrypt);
const options = { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };

export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function normalizedEmail(value) {
  if (
    typeof value !== "string" ||
    value.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  ) {
    throw new HttpError(400, "Enter a valid email address.");
  }
  return value.trim().toLowerCase();
}

export function validatePassword(password) {
  if (
    typeof password !== "string" ||
    password.length < 10 ||
    password.length > 128
  ) {
    throw new HttpError(400, "Use a password between 10 and 128 characters.");
  }
  return password;
}

export async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const key = await derive(password, salt, 64, options);
  return `scrypt$${salt}$${key.toString("hex")}`;
}

export async function verifyPassword(password, encoded) {
  if (typeof password !== "string" || password.length > 128) return false;
  // Missing accounts still perform the same expensive password derivation.
  const [, salt, expected] = (
    encoded || `scrypt$${"0".repeat(32)}$${"0".repeat(128)}`
  ).split("$");
  const key = await derive(password, salt, 64, options);
  const stored = Buffer.from(expected, "hex");
  return (
    key.length === stored.length &&
    timingSafeEqual(key, stored) &&
    Boolean(encoded)
  );
}

export const newToken = () => randomBytes(32).toString("base64url");
export const tokenHash = (token) =>
  createHash("sha256").update(token).digest("hex");

export function validRecoveryCode(code, expected) {
  if (typeof code !== "string" || code.trim().length > 128) return false;
  const actual = Buffer.from(tokenHash(code.trim()), "hex");
  const stored = Buffer.from(expected || "0".repeat(64), "hex");
  return (
    actual.length === stored.length &&
    timingSafeEqual(actual, stored) &&
    Boolean(expected)
  );
}

export function assertSameOrigin(req) {
  let origin;
  try {
    origin = new URL(req.headers.origin);
  } catch {
    /* Rejected below. */
  }
  if (
    !origin ||
    !["http:", "https:"].includes(origin.protocol) ||
    origin.host !== req.headers.host ||
    req.headers["sec-fetch-site"] === "cross-site"
  ) {
    throw new HttpError(
      403,
      "Please submit this request from Gemini Japanese.",
    );
  }
  if (
    !req.headers["content-type"]?.toLowerCase().startsWith("application/json")
  ) {
    throw new HttpError(415, "This request must contain JSON.");
  }
}

export function createRateLimiter() {
  const attempts = new Map();
  return (key, limit, windowMs = 15 * 60 * 1000) => {
    const now = Date.now();
    if (attempts.size > 5000) {
      for (const [entry, state] of attempts)
        if (state.until <= now) attempts.delete(entry);
      if (attempts.size > 10000)
        throw new HttpError(429, "Too many requests. Please try again later.");
    }
    const state = attempts.get(key);
    if (!state || state.until <= now)
      attempts.set(key, { count: 1, until: now + windowMs });
    else if (++state.count > limit)
      throw new HttpError(
        429,
        "Too many attempts. Please try again in 15 minutes.",
      );
  };
}
