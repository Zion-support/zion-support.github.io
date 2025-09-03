
    writable: true});
  const result = await client.checkOnline();
  expect(result).toBe(false)});
// Test that checkOnline returns false when navigator is null;
it('
  'checkOnline returns false when navigator is null', async () => {
  const original = (global as any).navigator;

  const result = await client.checkOnline();
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



