export function showApiError(error: unknown): void {
  if (import.meta.env.DEV) {
    console.error('[API Error]', error);
  }
}
