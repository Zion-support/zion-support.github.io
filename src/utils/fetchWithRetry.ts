export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit,
  retries = 2,
  backoffMs = 300
): Promise<Response> {
  let lastError: unknown = null
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(input, init)
      if (!res.ok && res.status >= 500 && attempt < retries) {
        await new Promise(r => setTimeout(r, backoffMs * (attempt + 1)))
        continue
      }
      return res
    } catch (err) {
      lastError = err
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, backoffMs * (attempt + 1)))
        continue
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error('fetchWithRetry failed')
}

