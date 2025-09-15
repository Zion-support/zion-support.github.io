export async function fetchWithRetry(
	input: RequestInfo | URL,
	init?: RequestInit,
	retries: number = 2,
	backoffMs: number = 300
): Promise<Response> {
	let attempt = 0;
	let lastError: unknown = null;
	while (attempt <= retries) {
		try {
			const response = await fetch(input, init);
			if (!response.ok && attempt < retries) {
				await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
				attempt += 1;
				continue;
			}
			return response;
		} catch (error) {
			lastError = error;
			if (attempt < retries) {
				await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
				attempt += 1;
				continue;
			}
			throw error;
		}
	}
	throw lastError instanceof Error ? lastError : new Error('fetchWithRetry failed');
}

export default fetchWithRetry;

