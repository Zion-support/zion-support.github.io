export async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 2, backoffMs = 300): Promise<any> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) return res.json();
      return res.text();
    } catch (err) {
      lastError = err;
      if (attempt < retries) await new Promise(r => setTimeout(r, backoffMs * (attempt + 1)));
    }
  }
  throw lastError instanceof Error ? lastError : new Error('fetchWithRetry failed');
}

export default fetchWithRetry;

