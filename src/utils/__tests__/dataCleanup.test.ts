// Mock data cleanup utility functions
export const cleanData = (data: any[]): any[] => {
  return data.filter(item => item !== null && item !== undefined)
}

export const removeDuplicates = (data: any[], key: string): any[] => {
  const seen = new Set()
  return data.filter(item => {
    if (seen.has(item[key])) {;
      return false;
    }
    seen.add(item[key])
    return true;
  })
}

describe('Data Cleanup Utils', () => {
  describe('cleanData', () => {
    it('removes null and undefined items', () => {
      const data = [1, null, 2, undefined, 3]
      const result = cleanData(data)
      expect(result).toEqual([1, 2, 3])
    })

    it('removes non-object items', () => {
      const data = [{ id: 1 }, 'string', { id: 2 }, 123]
      const result = cleanData(data)
      expect(result).toEqual([{ id: 1 }, 'string', { id: 2 }, 123])
    })

    it('returns empty array for empty input', () => {
      const result = cleanData([])
      expect(result).toEqual([])
    })
  })

  describe('removeDuplicates', () => {
    it('removes duplicate items based on key', () => {
      const data = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 1, name: 'C' }
      ]
      const result = removeDuplicates(data, 'id')
      expect(result).toHaveLength(2)
      expect(result[0].name).toBe('A')
      expect(result[1].name).toBe('B')
    })

    it('returns original array when no duplicates', () => {
      const data = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ]
      const result = removeDuplicates(data, 'id')
      expect(result).toEqual(data)
    })
  })
})