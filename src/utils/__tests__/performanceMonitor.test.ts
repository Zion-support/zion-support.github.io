import { performanceMonitor } from '../performanceMonitor';

// Mock performance API
const mockPerformance = {
  getEntriesByType: jest.fn(),
  getEntriesByName: jest.fn(),
  now: jest.fn(() => Date.now()),
  mark: jest.fn(),
  measure: jest.fn(),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
};

Object.defineProperty(window, 'performance', {
  value: mockPerformance,
  writable: true,
});

Object.defineProperty(global, 'performance', {
  value: mockPerformance,
  writable: true,
});

describe('performanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.getEntriesByType.mockReturnValue([]);
    mockPerformance.getEntriesByName.mockReturnValue([]);
  });

  it('should measure custom metrics correctly', () => {
    const testFunction = () => {
      // Simulate some work
      return 'test result';
    };
    
    const duration = performanceMonitor.measureCustomMetric('test-measure', testFunction);
    
    expect(typeof duration).toBe('number');
    expect(duration).toBeGreaterThanOrEqual(0);
  });

  it('should handle missing performance API gracefully', () => {
    // @ts-expect-error - Testing behavior when performance API is not available
    delete window.performance;
    // @ts-expect-error - Testing behavior when performance API is not available
    delete global.performance;
    
    // This should throw since performance is not available
    expect(() => {
      performanceMonitor.measureCustomMetric('test', () => 'test');
    }).toThrow();
  });

  it('should get metrics correctly', () => {
    const metrics = performanceMonitor.getMetrics();
    
    expect(typeof metrics).toBe('object');
    // Check that metrics object has the expected structure
    expect(metrics).toHaveProperty('bundleSize');
    expect(typeof metrics.bundleSize).toBe('number');
  });

  it('should cleanup properly', () => {
    // Ensure window.performance is properly mocked
    Object.defineProperty(window, 'performance', {
      value: mockPerformance,
      writable: true,
    });
    
    performanceMonitor.destroy();
    
    // The destroy method should not throw
    expect(() => performanceMonitor.destroy()).not.toThrow();
  });
});