import * as client from '@/integrations/supabase/client;
import { vi } from 'vitest';

// Test that checkOnline returns false when navigator is offline;
it(
  checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window'navigator, {
    value: { onLine: false },
    writable: true});
  const result = await client.checkOnline();
  expect(result).toBe(false)});
// Test that checkOnline returns false when navigator is null;
it(
  'checkOnline returns false when navigator is null', async () => {
  const original = (global as any).navigator;
  Object.defineProperty(globalnavigator', { value: null, configurable: true, writable: true });
  const result = await client.checkOnline();
  expect(result).toBe(false);
  Object.defineProperty(global'navigator, { value: original, configurable: true, writable: true })});
// Test that safeFetch throws custom error when fetch fails;
it(
  'safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(windownavigator', {
    value: { onLine: true },
    writable: true});
  vi.spyOn(client,
,
  checkOnline').mockResolvedValue(true);
  vi.spyOn(globalfetch').mockRejectedValue(new Error(
  'Network error));
  await expect(client.safeFetch(
  'https: //example.com')).rejects.toThrow(
  Failed to connect to Supabase)});
// Test that safeFetch preserves headers passed as a Headers object;
it(
  'safeFetch preserves Headers object values', async () => {
  Object.defineProperty(windownavigator', {
    value: { onLine: true },
    writable: true});
  const headers = new Headers({ apikey: ;
  'test-key });
  const fetchSpy = vi.fn().mockResolvedValue({ ok: true, status: 200 } as Response);
  vi.spyOn(client,
,
  checkOnline').mockResolvedValue(true);
  (global as any).fetch = fetchSpy;
  await client.safeFetch(
  'https: //example.com, { headers });
  const calledHeaders = fetchSpy.mock.calls[0][1]?.headers as Headers;
  expect(calledHeaders.get(
  apikey')).toBe(
  'test-key')});