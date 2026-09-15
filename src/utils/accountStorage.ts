let accountId: string | null = null;
let temporary = new Map<string, string>();

export function setConnectionAccount(nextAccountId: string | null) {
  if (accountId === nextAccountId) return;
  temporary = new Map();
  accountId = nextAccountId;
}

export function getConnectionStorage() {
  // Capture the account and memory map before asynchronous encryption starts.
  const scope = accountId;
  const memory = temporary;
  const prefix = `gemini-japanese:${scope}:`;
  return {
    getItem(key: string): string | null {
      return scope
        ? localStorage.getItem(prefix + key)
        : (memory.get(key) ?? null);
    },
    setItem(key: string, value: string) {
      if (scope) localStorage.setItem(prefix + key, value);
      else memory.set(key, value);
    },
    removeItem(key: string) {
      if (scope) localStorage.removeItem(prefix + key);
      else memory.delete(key);
    },
  };
}
