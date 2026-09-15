import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  saveStoredApiKey,
  removeStoredApiKey,
  getStoredEndpoint,
  saveStoredEndpoint,
  getStoredModel,
  saveStoredModel,
  DEFAULT_ENDPOINT,
  DIRECT_OPENROUTER_ENDPOINT,
  hasStoredApiKey,
} from "../utils/crypto";
import { Icon } from "./StudyUI";

export function ApiKeyModal({
  onClose,
  signedIn,
}: {
  onClose: () => void;
  signedIn: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [key, setKey] = useState("");
  const [endpoint, setEndpoint] = useState(() => {
    try {
      return getStoredEndpoint();
    } catch {
      return DEFAULT_ENDPOINT;
    }
  });
  const [model, setModel] = useState(() => {
    try {
      return getStoredModel();
    } catch {
      return "";
    }
  });
  const [savedKey, setSavedKey] = useState(() => {
    try {
      return hasStoredApiKey();
    } catch {
      return false;
    }
  });
  const [showKey, setShowKey] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
      element?.close();
    };
  }, []);
  async function save(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (!model.trim()) throw new Error("Enter a model ID.");
      if (key.trim()) await saveStoredApiKey(key.trim());
      saveStoredEndpoint(endpoint.trim());
      saveStoredModel(model.trim());
      onClose();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Settings could not be saved.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <dialog
      className="settings-dialog"
      ref={dialog}
      aria-labelledby="settings-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onClose();
      }}
    >
      <form onSubmit={save}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR TRANSLATOR CONNECTION</p>
            <h2 id="settings-title">Translator settings</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            disabled={busy}
            aria-label="Close settings"
          >
            <Icon name="close" />
          </button>
        </div>
        <p className="settings-description">
          Practice exercises work without a key. For custom translations, use
          the server connection or add your own OpenRouter key.
        </p>
        <label htmlFor="api-key">
          OpenRouter API key <span className="helper-text">Optional</span>
        </label>
        <div className="key-input">
          <input
            id="api-key"
            type={showKey ? "text" : "password"}
            autoComplete="off"
            value={key}
            onChange={(event) => setKey(event.target.value)}
            placeholder={
              savedKey
                ? "A key is available. Enter a new one to replace it."
                : "sk-or-…"
            }
          />
          <button
            className="text-link"
            type="button"
            onClick={() => setShowKey((value) => !value)}
            aria-label={showKey ? "Hide API key" : "Show API key"}
          >
            {showKey ? "Hide" : "Show"}
          </button>
        </div>
        {savedKey && (
          <button
            type="button"
            className="text-link remove-key"
            onClick={() => {
              try {
                removeStoredApiKey();
                setSavedKey(false);
                setKey("");
              } catch {
                setError("The saved key could not be removed.");
              }
            }}
          >
            Remove key
          </button>
        )}
        <p className="helper-text">
          {signedIn
            ? "Your key is stored for your account on this device."
            : "Guest connection settings last for this visit only."}{" "}
          Leaving this field blank keeps an existing key.
        </p>
        <label htmlFor="api-endpoint">Connection endpoint</label>
        <input
          id="api-endpoint"
          value={endpoint}
          onChange={(event) => setEndpoint(event.target.value)}
          placeholder={DEFAULT_ENDPOINT}
        />
        <div className="settings-presets">
          <button
            type="button"
            className="text-link"
            onClick={() => setEndpoint(DEFAULT_ENDPOINT)}
          >
            Use server connection
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => setEndpoint(DIRECT_OPENROUTER_ENDPOINT)}
          >
            Use OpenRouter directly
          </button>
        </div>
        <label htmlFor="api-model">Model ID</label>
        <input
          id="api-model"
          required
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="provider/model-name"
        />
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="dialog-actions">
          <button
            type="button"
            className="button secondary"
            disabled={busy}
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="button primary" disabled={busy}>
            {busy
              ? "Applying…"
              : signedIn
                ? "Save settings"
                : "Apply for this visit"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
