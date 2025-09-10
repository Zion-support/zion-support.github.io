// Simple cache utility test
describe('Cache', () => {
  it('should work correctly', () => {
    const cache = new Map();
    cache.set('key', 'value');
    expect(cache.get('key')).toBe('value');
  });
});