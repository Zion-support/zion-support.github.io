export function showApiError(error: unknown): void {
  if (process.env.NODE_ENV !== 'production') {
    // // console.error('[API Error]', error);
  }
}
