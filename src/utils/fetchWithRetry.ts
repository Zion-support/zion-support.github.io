export async function fetchWithRetry(input: RequestInfo | URL, init?: RequestInit, retries = 2, backoffMs = 300): Promise<Response> {
  let attempt = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const response = await fetch(input, init);
      if (!response.ok && attempt < retries) {
        await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
        attempt += 1;
        continue;
      }
      return response;
    } catch (error) {
      if (attempt >= retries) throw error;
      await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
      attempt += 1;
    }
  }
}

