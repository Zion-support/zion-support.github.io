import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { SupabaseSafeFetch } from '../src/lib/supabaseSafeFetch'

describe('SupabaseSafeFetch', () => {
  let client: SupabaseSafeFetch

  beforeEach(() => {
    client = new SupabaseSafeFetch()
  })

  it('checkOnline returns false when navigator is offline', async () => {
    Object.defineProperty(global, 'navigator', {
      value: { onLine: false },
      configurable: true,
      writable: true,
    })
    const result = await client.checkOnline()
    expect(result).toBe(false)
  })

  it('checkOnline returns false when navigator is undefined', async () => {
    const original = (global as any).navigator
    Object.defineProperty(global, 'navigator', { value: undefined, configurable: true, writable: true })
    const result = await client.checkOnline()
    expect(result).toBe(false)
    Object.defineProperty(global, 'navigator', { value: original, configurable: true, writable: true })
  })

  it('safeFetch throws when fetch rejects', async () => {
    Object.defineProperty(global, 'navigator', {
      value: { onLine: true },
      configurable: true,
      writable: true,
    })
    vi.spyOn(client, 'checkOnline').mockResolvedValue(true)
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'))
    await expect(client.safeFetch('https://example.com')).rejects.toThrow('Network error')
  })

  it('safeFetch preserves Headers object values', async () => {
    Object.defineProperty(global, 'navigator', {
      value: { onLine: true },
      configurable: true,
      writable: true,
    })
    const headers = new Headers({ apikey: 'test-key' })
    const fetchSpy = vi.fn().mockResolvedValue({ ok: true, status: 200, json: () => Promise.resolve({}) })
    vi.spyOn(client, 'checkOnline').mockResolvedValue(true)
    ;(global as any).fetch = fetchSpy

    await client.safeFetch('https://example.com', { headers })

    expect(fetchSpy).toHaveBeenCalledWith('https://example.com', {
      headers: expect.any(Headers),
    })
    const callArgs = fetchSpy.mock.calls[0][1]
    expect(callArgs.headers.get('apikey')).toBe('test-key')
  })
})
