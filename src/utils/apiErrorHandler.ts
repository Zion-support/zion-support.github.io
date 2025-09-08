export function showApiError(error: unknown): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.error("API Error:", error);
  }
}

