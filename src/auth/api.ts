export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, {
      ...options,
      credentials: "same-origin",
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...options.headers,
      },
      signal: options.signal || AbortSignal.timeout(20_000),
    });
  } catch (error) {
    if (options.signal?.aborted) throw error;
    throw new ApiError(
      0,
      "Unable to connect. Check your connection and try again.",
    );
  }
  const result = await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401 && path === "/api/progress") {
      window.dispatchEvent(new Event("gemini-session-expired"));
    }
    throw new ApiError(
      response.status,
      result?.error || "The request could not be completed. Please try again.",
    );
  }
  if (!result)
    throw new ApiError(
      0,
      "The account service returned an unexpected response.",
    );
  return result as T;
}
