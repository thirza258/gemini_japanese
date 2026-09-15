import type { SaveStatus } from "../data/studySession";
import { Icon } from "./StudyUI";

export function SaveNotice({
  status,
  onSignIn,
  onRetry,
}: {
  status: SaveStatus;
  onSignIn: () => void;
  onRetry: () => Promise<void>;
}) {
  if (status === "saved") return null;
  return (
    <div
      className={`save-notice ${status === "error" ? "save-error" : ""}`}
      role="status"
    >
      <Icon name={status === "guest" ? "user" : "refresh"} size={17} />
      <span>
        {status === "guest"
          ? "Guest mode. Your practice is kept for this visit only."
          : status === "loading"
            ? "Loading your saved progress…"
            : status === "saving"
              ? "Saving your progress…"
              : "Your progress could not be synced. Your current practice is still here."}
      </span>
      {status === "guest" && (
        <button onClick={onSignIn}>Sign in to save</button>
      )}
      {status === "error" && (
        <button onClick={() => void onRetry().catch(() => undefined)}>
          Retry
        </button>
      )}
    </div>
  );
}
