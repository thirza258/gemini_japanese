import { useEffect, useRef, useState, type FormEvent } from "react";
import type { AccountState } from "../auth/useAuth";
import type { SaveStatus } from "../data/studySession";
import { Icon } from "./StudyUI";

export function AccountDialog({
  account,
  saveStatus,
  onBeforeSignOut,
  onClose,
}: {
  account: AccountState;
  saveStatus: SaveStatus;
  onBeforeSignOut: () => Promise<void>;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousAccount = useRef(account.user?.id);
  const [mode, setMode] = useState<"login" | "register" | "recover">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [recoveryInput, setRecoveryInput] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [canDiscard, setCanDiscard] = useState(false);
  useEffect(() => {
    if (
      previousAccount.current &&
      previousAccount.current !== account.user?.id
    ) {
      // Another tab may sign out or switch accounts while this dialog is open.
      onClose();
    }
    previousAccount.current = account.user?.id;
  }, [account.user?.id, onClose]);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected)
        previousFocus.focus({ preventScroll: true });
    };
  }, []);

  function changeMode(next: typeof mode) {
    setMode(next);
    setError("");
    setPassword("");
    setConfirmation("");
    setRecoveryInput("");
  }
  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (mode !== "login" && password !== confirmation) {
      setError("The passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      const result = await account.authenticate(mode, {
        email,
        password,
        recoveryCode: recoveryInput,
      });
      setPassword("");
      setConfirmation("");
      setRecoveryInput("");
      if (result.recoveryCode) setRecoveryCode(result.recoveryCode);
      else onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }
  async function signOut(discard = false) {
    setError("");
    setBusy(true);
    try {
      if (!discard) {
        try {
          await onBeforeSignOut();
        } catch (error) {
          setCanDiscard(true);
          throw error;
        }
      }
      await account.signOut();
      onClose();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Sign out could not be completed.",
      );
    } finally {
      setBusy(false);
    }
  }
  async function regenerateCode(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const result = await account.newRecoveryCode(password);
      setPassword("");
      setShowRecoveryForm(false);
      setRecoveryCode(result.recoveryCode);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }
  const title = recoveryCode
    ? "Save your recovery code"
    : account.user
      ? "Your learning account"
      : mode === "recover"
        ? "Reset your password"
        : "A little progress, kept safe.";
  return (
    <dialog
      ref={dialog}
      className="account-dialog"
      aria-labelledby="account-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onClose();
      }}
    >
      <div className="account-dialog-content">
        <div className="account-dialog-heading">
          <span className="brand-mark">
            <Icon name="flower" size={25} />
          </span>
          <button
            className="icon-button"
            onClick={onClose}
            disabled={busy}
            aria-label="Close account dialog"
          >
            <Icon name="close" size={20} />
          </button>
        </div>
        <p className="eyebrow">GEMINI JAPANESE</p>
        <h2 id="account-title">{title}</h2>
        {error && (
          <p className="account-error" role="alert">
            {error}
          </p>
        )}
        {recoveryCode ? (
          <div className="recovery-confirmation">
            <p>
              Keep this code somewhere safe. You’ll need it if you forget your
              password. This code is only shown now.
            </p>
            <code>{recoveryCode}</code>
            <button
              className="button secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(recoveryCode);
                  setCopied(true);
                } catch {
                  setError("Select and copy the recovery code above.");
                }
              }}
            >
              {copied ? "Copied" : "Copy recovery code"}
            </button>
            <button className="button primary" onClick={onClose}>
              Continue learning <Icon name="arrow" size={17} />
            </button>
          </div>
        ) : account.user ? (
          <div className="account-details">
            <div className="account-identity">
              <Icon name="user" size={20} />
              <span>{account.user.email}</span>
            </div>
            <p>
              {saveStatus === "error"
                ? "Your latest changes still need to be saved."
                : saveStatus === "saving"
                  ? "Saving your latest practice…"
                  : saveStatus === "loading"
                    ? "Loading your saved progress…"
                    : "Your progress and recent translations are saved to your account."}
            </p>
            {showRecoveryForm ? (
              <form onSubmit={regenerateCode} className="account-form">
                <label htmlFor="recovery-password">Current password</label>
                <input
                  id="recovery-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  maxLength={128}
                  disabled={busy}
                />
                <p className="account-field-help">
                  Generating a new code replaces your previous recovery code.
                </p>
                <button className="button secondary" disabled={busy}>
                  {busy ? "Generating…" : "Generate recovery code"}
                </button>
              </form>
            ) : (
              <button
                className="text-link"
                onClick={() => {
                  setShowRecoveryForm(true);
                  setError("");
                }}
              >
                Get a new recovery code
              </button>
            )}
            <div className="account-actions">
              <button
                className="button primary"
                onClick={onClose}
                disabled={busy}
              >
                Continue learning
              </button>
              <button
                className="button secondary"
                onClick={() => void signOut()}
                disabled={busy}
              >
                {busy ? "Please wait…" : "Sign out"}
              </button>
              {canDiscard && (
                <button
                  className="text-link"
                  onClick={() => void signOut(true)}
                  disabled={busy}
                >
                  Sign out without saving
                </button>
              )}
            </div>
          </div>
        ) : (
          <>
            <p className="account-intro">
              {mode === "recover"
                ? "Enter the recovery code you saved when creating your account."
                : "Save your practice and recent translations. Every lesson is also open to guests."}
            </p>
            {mode !== "recover" && (
              <div className="account-tabs" aria-label="Choose account action">
                <button
                  aria-pressed={mode === "login"}
                  onClick={() => changeMode("login")}
                  disabled={busy}
                >
                  Sign in
                </button>
                <button
                  aria-pressed={mode === "register"}
                  onClick={() => changeMode("register")}
                  disabled={busy}
                >
                  Create account
                </button>
              </div>
            )}
            <form className="account-form" onSubmit={submit}>
              <label htmlFor="account-email">Email address</label>
              <input
                id="account-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                maxLength={254}
                disabled={busy}
              />
              {mode === "recover" && (
                <>
                  <label htmlFor="account-recovery">Recovery code</label>
                  <input
                    id="account-recovery"
                    name="recoveryCode"
                    autoComplete="off"
                    value={recoveryInput}
                    onChange={(event) => setRecoveryInput(event.target.value)}
                    required
                    maxLength={128}
                    disabled={busy}
                  />
                </>
              )}
              <label htmlFor="account-password">
                {mode === "recover" ? "New password" : "Password"}
              </label>
              <input
                id="account-password"
                name="password"
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={mode === "login" ? undefined : 10}
                maxLength={128}
                disabled={busy}
                aria-describedby={
                  mode !== "login" ? "password-help" : undefined
                }
              />
              {mode !== "login" && (
                <>
                  <p className="account-field-help" id="password-help">
                    Use at least 10 characters. A longer passphrase works well.
                  </p>
                  <label htmlFor="account-confirmation">Confirm password</label>
                  <input
                    id="account-confirmation"
                    name="passwordConfirmation"
                    type="password"
                    autoComplete="new-password"
                    value={confirmation}
                    onChange={(event) => setConfirmation(event.target.value)}
                    required
                    minLength={10}
                    maxLength={128}
                    disabled={busy}
                  />
                </>
              )}
              <button className="button primary account-submit" disabled={busy}>
                {busy
                  ? "Please wait…"
                  : mode === "login"
                    ? "Sign in"
                    : mode === "register"
                      ? "Create account"
                      : "Reset password"}
                <Icon name="arrow" size={17} />
              </button>
            </form>
            <div className="account-alternatives">
              <button
                className="text-link"
                onClick={() =>
                  changeMode(mode === "recover" ? "login" : "recover")
                }
                disabled={busy}
              >
                {mode === "recover" ? "Back to sign in" : "Forgot password?"}
              </button>
              <button className="text-link" onClick={onClose} disabled={busy}>
                Continue as a guest
              </button>
            </div>
            <p className="account-guest-note">
              Guest practice is temporary. Sign in to keep your future progress.
            </p>
          </>
        )}
      </div>
    </dialog>
  );
}
