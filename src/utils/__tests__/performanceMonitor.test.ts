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

describe('performanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.getEntriesByType.mockReturnValue([]);
    mockPerformance.getEntriesByName.mockReturnValue([]);
  });

  it('should start and end measures correctly', () => {
    performanceMonitor.startMeasure('test-measure');
    performanceMonitor.endMeasure('test-measure');
    
    expect(mockPerformance.mark).toHaveBeenCalledWith('test-measure-start');
    expect(mockPerformance.mark).toHaveBeenCalledWith('test-measure-end');
    expect(mockPerformance.measure).toHaveBeenCalledWith('test-measure', 'test-measure-start', 'test-measure-end');
  });

  it('should handle missing performance API gracefully', () => {
    // @ts-expect-error - Performance API is being deleted for testing
    delete window.performance;
    
    expect(() => {
      performanceMonitor.startMeasure('test');
      performanceMonitor.endMeasure('test');
    }).not.toThrow();
  });

  it('should report core web vitals', () => {
    const mockObserver = {
      observe: jest.fn(),
      disconnect: jest.fn(),
    };
    
    // Mock ResizeObserver
    global.ResizeObserver = jest.fn().mockImplementation(() => mockObserver);
    
    performanceMonitor.reportCoreWebVitals();
    
    expect(mockObserver.observe).toHaveBeenCalled();
  });

  it('should cleanup properly', () => {
    performanceMonitor.startMeasure('test');
    performanceMonitor.cleanup();
    
    expect(mockPerformance.clearMarks).toHaveBeenCalled();
    expect(mockPerformance.clearMeasures).toHaveBeenCalled();
  });
});