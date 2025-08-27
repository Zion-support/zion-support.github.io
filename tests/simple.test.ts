import { describe, it, expect } from 'vitest'

describe('Simple Test Suite', () => {
  it('should pass basic arithmetic', () => {
    expect(2 + 2).toBe(4)
  })

  it('should handle strings', () => {
    expect('hello').toBe('hello')
  })

  it('should work with arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr[0]).toBe(1)
  })
})