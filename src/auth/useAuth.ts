import { useCallback, useEffect, useRef, useState } from "react";
import { apiRequest } from "./api";
import { setConnectionAccount } from "../utils/accountStorage";

export interface AccountUser {
  id: string;
  email: string;
}
interface AuthResult {
  user: AccountUser;
  recoveryCode?: string;
}

export function useAuth() {
  const [user, setUser] = useState<AccountUser | null>(null);
  const [checking, setChecking] = useState(true);
  const generation = useRef({ value: 0 });
  const channel = useRef<BroadcastChannel | null>(null);
  const applyUser = useCallback((next: AccountUser | null) => {
    setConnectionAccount(next?.id || null);
    setUser(next);
    setChecking(false);
  }, []);
  const refresh = useCallback(async () => {
    const request = ++generation.current.value;
    try {
      const result = await apiRequest<{ user: AccountUser | null }>(
        "/api/auth/session",
      );
      if (request === generation.current.value) applyUser(result.user);
    } catch {
      if (request === generation.current.value) setChecking(false);
    }
  }, [applyUser]);

  useEffect(() => {
    const requestCounter = generation.current;
    void refresh();
    // A delayed request from a previous account must not clear a newer session.
    const expired = () => {
      void refresh();
    };
    const focused = () => {
      void refresh();
    };
    if (typeof BroadcastChannel !== "undefined") {
      channel.current = new BroadcastChannel("gemini-account");
      channel.current.onmessage = focused;
    }
    window.addEventListener("focus", focused);
    window.addEventListener("gemini-session-expired", expired);
    return () => {
      requestCounter.value++;
      channel.current?.close();
      window.removeEventListener("focus", focused);
      window.removeEventListener("gemini-session-expired", expired);
    };
  }, [refresh, applyUser]);

  async function authenticate(
    mode: "login" | "register" | "recover",
    values: { email: string; password: string; recoveryCode?: string },
  ) {
    const result = await apiRequest<AuthResult>(`/api/auth/${mode}`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    generation.current.value++;
    applyUser(result.user);
    channel.current?.postMessage("changed");
    return result;
  }

  return {
    user,
    checking,
    authenticate,
    signOut: async () => {
      await apiRequest("/api/auth/logout", { method: "POST", body: "{}" });
      generation.current.value++;
      applyUser(null);
      channel.current?.postMessage("changed");
    },
    newRecoveryCode: (password: string) =>
      apiRequest<{ recoveryCode: string }>("/api/auth/recovery-code", {
        method: "POST",
        body: JSON.stringify({ password }),
      }),
  };
}
export type AccountState = ReturnType<typeof useAuth>;
