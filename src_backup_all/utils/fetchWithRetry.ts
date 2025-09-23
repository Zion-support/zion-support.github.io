export type FetchWithRetryOptions = {
  retries?: number;
  retryDelayMs?: number;
  fetchInit?: RequestInit;
};

export async function fetchWithRetry(url: string, options: FetchWithRetryOptions = {}) {
  const { retries = 2, retryDelayMs = 300, fetchInit } = options;
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const res = await fetch(url, fetchInit);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, retryDelayMs));
        continue;
      }
    }
  }
  throw lastError;
}

export default fetchWithRetry;

