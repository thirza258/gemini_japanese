import { DatabaseSync } from "node:sqlite";
import { chmodSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

export function openDatabase(filename) {
  if (filename !== ":memory:")
    mkdirSync(dirname(filename), { recursive: true, mode: 0o700 });
  const db = new DatabaseSync(filename);
  if (filename !== ":memory:") chmodSync(filename, 0o600);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      recovery_hash TEXT NOT NULL,
      created_at INTEGER NOT NULL
    ) STRICT;
    CREATE TABLE IF NOT EXISTS sessions (
      token_hash TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at INTEGER NOT NULL
    ) STRICT;
    CREATE INDEX IF NOT EXISTS session_expiry ON sessions(expires_at);
    CREATE TABLE IF NOT EXISTS learning_profiles (
      user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      data TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    ) STRICT;
  `);
  return db;
}
