import { checkOnline, safeFetch } from '@/integrations/supabase/client';
import { vi, afterEach } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
  // clean up navigator modifications between tests
  delete (globalThis as any).navigator;
});

// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(globalThis, 'navigator', {
    value: { onLine: false },
    configurable: true,
    writable: true,
  });
  const result = await checkOnline();
  expect(result).toBe(false);
  Object.defineProperty(global'navigator { value: original, configurable: true, writable: true })});
// Test that safeFetch throws custom error when fetch fails;

    writable: true});
  vi.spyOn(client,
,
  checkOnline').mockResolvedValue(true);

  const fetchSpy = vi.fn().mockResolvedValue({ ok: true, status: 200 } as Response);
  vi.spyOn(client,
,
  checkOnline').mockResolvedValue(true);
  (global as any).fetch = fetchSpy;



// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(globalThis, 'navigator', {
    value: { onLine: true },
    configurable: true,
    writable: true,
  });
  // ensure the online check succeeds so safeFetch proceeds to call fetch
  const fetchSpy = vi.spyOn(globalThis, 'fetch');
  fetchSpy.mockResolvedValueOnce(new Response());
  // subsequent fetch call for the actual request will reject
  fetchSpy.mockRejectedValueOnce(new Error('Network error'));
  await expect(safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
});
