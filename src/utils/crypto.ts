/**
 * Secure Web Crypto API Utility for API Key Encryption and Storage
 * Uses AES-GCM 256-bit encryption with PBKDF2 key derivation (100,000 iterations)
 * and cryptographically secure random salt and IV.
 */

export const STORAGE_KEY_ENC = 'nevatal_openrouter_key_enc';
export const STORAGE_KEY_LEGACY = 'nevatal_openrouter_key';
export const STORAGE_ENDPOINT = 'nevatal_openrouter_endpoint';
export const STORAGE_MODEL = 'nevatal_openrouter_model';

export const DEFAULT_ENDPOINT = '/api/openrouter/chat/completions';
export const DIRECT_OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
export const DEFAULT_MODEL = 'google/gemma-4-26b-a4b-it';
export const ENCRYPTED_PREFIX = 'enc:v1:';

// Fallback pepper derived for local device-bound encryption when no user passphrase is provided
const DEVICE_SALT_STORAGE = 'nevatal_device_salt';

function getCrypto(): Crypto | undefined {
  if (typeof window !== 'undefined' && window.crypto) {
    return window.crypto;
  }
  if (typeof globalThis !== 'undefined' && (globalThis as unknown as { crypto?: Crypto }).crypto) {
    return (globalThis as unknown as { crypto: Crypto }).crypto;
  }
  return undefined;
}

function getOrCreateDeviceSalt(): string {
  if (typeof window === 'undefined') return 'nevatal-default-server-salt';
  let salt = localStorage.getItem(DEVICE_SALT_STORAGE);
  if (!salt) {
    const cryptoInstance = getCrypto();
    const randomBytes = new Uint8Array(16);
    if (cryptoInstance && cryptoInstance.getRandomValues) {
      cryptoInstance.getRandomValues(randomBytes);
    } else {
      for (let i = 0; i < 16; i++) randomBytes[i] = Math.floor(Math.random() * 256);
    }
    salt = Array.from(randomBytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    try {
      localStorage.setItem(DEVICE_SALT_STORAGE, salt);
    } catch {
      // Ignore storage errors
    }
  }
  return salt;
}

function bufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToBuffer(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function deriveCryptoKey(
  passphrase: string,
  salt: Uint8Array
): Promise<CryptoKey> {
  const cryptoInstance = getCrypto();
  if (!cryptoInstance || !cryptoInstance.subtle) {
    throw new Error('Web Crypto API is not available.');
  }

  const encoder = new TextEncoder();
  const keyMaterial = await cryptoInstance.subtle.importKey(
    'raw',
    encoder.encode(passphrase),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return cryptoInstance.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}


/**
 * Checks if a string is in the encrypted format: enc:v1:<salt>:<iv>:<ciphertext>
 */
export function isEncrypted(data: string): boolean {
  return typeof data === 'string' && data.startsWith(ENCRYPTED_PREFIX);
}

/**
 * Encrypts an API key using AES-GCM 256-bit with PBKDF2 key derivation.
 */
export async function encryptApiKey(
  plainKey: string,
  customPassphrase?: string
): Promise<string> {
  const trimmed = plainKey.trim();
  if (!trimmed) return '';

  const cryptoInstance = getCrypto();
  if (!cryptoInstance || !cryptoInstance.subtle) {
    // Fallback base64 obfuscation if Web Crypto is unavailable
    return `${ENCRYPTED_PREFIX}raw::${btoa(encodeURIComponent(trimmed))}`;
  }

  const salt = new Uint8Array(16);
  cryptoInstance.getRandomValues(salt);

  const iv = new Uint8Array(12);
  cryptoInstance.getRandomValues(iv);

  const effectivePassphrase =
    customPassphrase && customPassphrase.trim().length > 0
      ? customPassphrase.trim()
      : `nevatal_secure_${getOrCreateDeviceSalt()}_${typeof window !== 'undefined' ? window.location?.origin || '' : ''}`;

  const cryptoKey = await deriveCryptoKey(effectivePassphrase, salt);
  const encoder = new TextEncoder();
  const encodedText = encoder.encode(trimmed);

  const encryptedBuffer = await cryptoInstance.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    cryptoKey,
    encodedText
  );

  const saltB64 = bufferToBase64(salt);
  const ivB64 = bufferToBase64(iv);
  const cipherB64 = bufferToBase64(new Uint8Array(encryptedBuffer));

  return `${ENCRYPTED_PREFIX}${saltB64}:${ivB64}:${cipherB64}`;
}

/**
 * Decrypts an encrypted API key back to plaintext.
 * Seamlessly handles legacy plaintext keys and custom passphrases.
 */
export async function decryptApiKey(
  encryptedData: string,
  customPassphrase?: string
): Promise<string> {
  const trimmed = encryptedData.trim();
  if (!trimmed) return '';

  // If not encrypted with our prefix, return as-is (backward compatibility)
  if (!isEncrypted(trimmed)) {
    return trimmed;
  }

  const payload = trimmed.slice(ENCRYPTED_PREFIX.length);
  const parts = payload.split(':');

  if (parts.length === 3 && parts[0] === 'raw') {
    // Obfuscation fallback decode
    try {
      return decodeURIComponent(atob(parts[2]));
    } catch {
      return '';
    }
  }

  if (parts.length !== 3) {
    throw new Error('Invalid encrypted API key format.');
  }

  const [saltB64, ivB64, cipherB64] = parts;
  const cryptoInstance = getCrypto();

  if (!cryptoInstance || !cryptoInstance.subtle) {
    throw new Error('Web Crypto API is not supported in this environment.');
  }

  const salt = base64ToBuffer(saltB64);
  const iv = base64ToBuffer(ivB64);
  const cipher = base64ToBuffer(cipherB64);

  const effectivePassphrase =
    customPassphrase && customPassphrase.trim().length > 0
      ? customPassphrase.trim()
      : `nevatal_secure_${getOrCreateDeviceSalt()}_${typeof window !== 'undefined' ? window.location?.origin || '' : ''}`;

  const cryptoKey = await deriveCryptoKey(effectivePassphrase, salt);

  try {
    const decryptedBuffer = await cryptoInstance.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      cryptoKey,
      cipher
    );


    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch {
    throw new Error('Failed to decrypt API key. Passphrase or storage mismatch.');
  }
}

/**
 * Checks if a custom user API key is stored in localStorage.
 */
export function hasStoredApiKey(): boolean {
  if (typeof window === 'undefined') return false;
  const encKey = localStorage.getItem(STORAGE_KEY_ENC);
  const legacyKey = localStorage.getItem(STORAGE_KEY_LEGACY);
  return Boolean((encKey && encKey.trim()) || (legacyKey && legacyKey.trim()));
}

/**
 * Retrieves the custom user API key from encrypted storage if present.
 * Does NOT fallback to environment variables to prevent leaking server keys to client headers.
 */
export async function getStoredApiKey(customPassphrase?: string): Promise<string> {
  if (typeof window === 'undefined') {
    return '';
  }

  try {
    const encKey = localStorage.getItem(STORAGE_KEY_ENC);
    if (encKey && encKey.trim()) {
      return await decryptApiKey(encKey, customPassphrase);
    }

    // Check legacy unencrypted storage and auto-migrate
    const legacyKey = localStorage.getItem(STORAGE_KEY_LEGACY);
    if (legacyKey && legacyKey.trim()) {
      const plain = legacyKey.trim();
      // Auto-encrypt for future security
      try {
        const encrypted = await encryptApiKey(plain, customPassphrase);
        localStorage.setItem(STORAGE_KEY_ENC, encrypted);
        localStorage.removeItem(STORAGE_KEY_LEGACY);
      } catch {
        // Migration error ignored
      }
      return plain;
    }
  } catch (e) {
    console.error('Error reading stored API key:', e);
  }

  return '';
}

/**
 * Encrypts and securely saves the API key to localStorage.
 */
export async function saveStoredApiKey(
  apiKey: string,
  customPassphrase?: string
): Promise<void> {
  if (typeof window === 'undefined') return;

  const trimmed = apiKey.trim();
  if (!trimmed) {
    removeStoredApiKey();
    return;
  }

  const encrypted = await encryptApiKey(trimmed, customPassphrase);
  localStorage.setItem(STORAGE_KEY_ENC, encrypted);
  // Clean up any legacy plaintext key
  localStorage.removeItem(STORAGE_KEY_LEGACY);
}

/**
 * Removes the stored API key from localStorage.
 */
export function removeStoredApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_ENC);
  localStorage.removeItem(STORAGE_KEY_LEGACY);
}

/**
 * Normalizes an endpoint URL (ensures full chat/completions path).
 */
export function normalizeEndpoint(url: string): string {
  let clean = url.trim();
  if (!clean) return DEFAULT_ENDPOINT;

  // Remove trailing slash
  clean = clean.replace(/\/+$/, '');

  // If it's a base URL like https://openrouter.ai/api/v1 or /api/openrouter
  if (clean.endsWith('/chat/completions')) {
    return clean;
  }
  if (clean.endsWith('/api/v1') || clean.endsWith('/api/openrouter') || clean.endsWith('/v1')) {
    return `${clean}/chat/completions`;
  }

  return clean;
}

/**
 * Retrieves the configured OpenRouter router endpoint.
 */
export function getStoredEndpoint(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_ENDPOINT);
    if (saved && saved.trim().length > 0) {
      return normalizeEndpoint(saved.trim());
    }
  }

  const envEndpoint =
    import.meta.env.VITE_OPENROUTER_ENDPOINT ||
    import.meta.env.VITE_OPENROUTER_API_URL ||
    DEFAULT_ENDPOINT;

  return normalizeEndpoint(envEndpoint);
}

/**
 * Saves custom OpenRouter endpoint to localStorage.
 */
export function saveStoredEndpoint(endpoint: string): void {
  if (typeof window === 'undefined') return;
  const trimmed = endpoint.trim();
  if (trimmed && trimmed !== DEFAULT_ENDPOINT) {
    localStorage.setItem(STORAGE_ENDPOINT, normalizeEndpoint(trimmed));
  } else {
    localStorage.removeItem(STORAGE_ENDPOINT);
  }
}

/**
 * Retrieves the configured OpenRouter model.
 */
export function getStoredModel(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_MODEL);
    if (saved && saved.trim().length > 0) {
      return saved.trim();
    }
  }

  return import.meta.env.VITE_OPENROUTER_MODEL || DEFAULT_MODEL;
}

/**
 * Saves custom model to localStorage.
 */
export function saveStoredModel(model: string): void {
  if (typeof window === 'undefined') return;
  const trimmed = model.trim();
  if (trimmed) {
    localStorage.setItem(STORAGE_MODEL, trimmed);
  }
}
