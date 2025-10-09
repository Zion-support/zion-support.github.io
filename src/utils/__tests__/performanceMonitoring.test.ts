import {
      recordMetric,
  getMetrics,
  clearMetrics,
  measureFunction,
      measureAsyncFunction,
      getPerformanceScore,
      getRecommendations,
      MetricUnit

    
    } from '../performanceMonitoring';

describe('performanceMonitoring', () => {
  beforeEach(() => {
    clearMetrics();
  });
  
  describe('recordMetric', () => {
      it('should record metrics',
      () => {
      recordMetric('test-metric',
      100,
      MetricUnit.Milliseconds);
      const metrics = getMetrics();
      expect(metrics['test-metric']).toBeDefined();
      expect(metrics['test-metric'].values.length).toBe(1);
      expect(metrics['test-metric'].values[0]).toBe(100);
    
    });

    it('should accumulate multiple values for same metric', () => {
      recordMetric('test-metric',
      100);
      recordMetric('test-metric',
      200);
      recordMetric('test-metric',
      150);
      const metrics = getMetrics();
      expect(metrics['test-metric'].values.length).toBe(3);
      expect(metrics['test-metric'].average).toBe(150);
    
    });

    it('should calculate correct statistics', () => {
      recordMetric('test-metric',
      100);
      recordMetric('test-metric',
      200);
      recordMetric('test-metric',
      300);
      const metrics = getMetrics();
      const metric = metrics['test-metric'];
      expect(metric.count).toBe(3);
      expect(metric.average).toBe(200);
      expect(metric.min).toBe(100);
      expect(metric.max).toBe(300);
    
    });

    it('should support different units', () => {
      recordMetric('time', 100, MetricUnit.Milliseconds);
      recordMetric('size', 1024, MetricUnit.Bytes);
      recordMetric('count',
      5,
      MetricUnit.Count);
      recordMetric('percent',
      95,
      MetricUnit.Percentage);
      const metrics = getMetrics();
      expect(metrics['time'].unit).toBe(MetricUnit.Milliseconds);
      expect(metrics['size'].unit).toBe(MetricUnit.Bytes);
      expect(metrics['count'].unit).toBe(MetricUnit.Count);
      expect(metrics['percent'].unit).toBe(MetricUnit.Percentage);
    
    
    });
  });

  describe('getMetrics', () => {
    it('should return empty object when no metrics', () => {
      const metrics = getMetrics();
      expect(metrics).toEqual({});
    });

    it('should return all recorded metrics', () => {
      recordMetric('metric1', 100);
      recordMetric('metric2', 200);
      const metrics = getMetrics();
      expect(Object.keys(metrics)).toHaveLength(2);
      expect(metrics['metric1']).toBeDefined();
      expect(metrics['metric2']).toBeDefined();
    });
  });

  describe('clearMetrics', () => {
      it('should clear all metrics',
      () => {
      recordMetric('metric1',
      100);
      recordMetric('metric2',
      200);
      clearMetrics();
      const metrics = getMetrics();
      expect(metrics).toEqual({
    });
    });
  });

  describe('measureFunction', () => {
    it('should measure synchronous function execution time', () => {
      const testFn = () => {
        // Simulate some work
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
          sum += i;
        }
        return sum;
      };

      const result = measureFunction('test-sync', testFn);
      expect(result).toBe(499500);
      const metrics = getMetrics();
      expect(metrics['test-sync']).toBeDefined();
      expect(metrics['test-sync'].values.length).toBe(1);
    });

    it('should return function result', () => {
      const result = measureFunction('test', () => 'test-value');
      expect(result).toBe('test-value');
    });
  });

  describe('measureAsyncFunction', () => {
    it('should measure async function execution time', async () => {
      const asyncFn = async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return 'async-result';
      };

      const result = await measureAsyncFunction('test-async', asyncFn);
      expect(result).toBe('async-result');
      const metrics = getMetrics();
      expect(metrics['test-async']).toBeDefined();
    });

    it('should handle async function errors', async () => {
      const errorFn = async () => {
        throw new Error('Test error');
      };

      await expect(measureAsyncFunction('test-error', errorFn)).rejects.toThrow('Test error');
    });
  });

  describe('getPerformanceScore', () => {
      it('should calculate performance score', () => {
      recordMetric('FCP',
      1000); // First Contentful Paint
      recordMetric('LCP',
      2000); // Largest Contentful Paint
      recordMetric('FID',
      50);   // First Input Delay
      recordMetric('CLS',
      0.05); // Cumulative Layout Shift

      const score = getPerformanceScore();
      expect(score).toBeGreaterThan(0);
      expect(score).toBeLessThanOrEqual(100);
    
    
    });

    it('should return 0 when no metrics', () => {
      const score = getPerformanceScore();
      expect(score).toBe(0);
    });
  });

  describe('getRecommendations', () => {
      it('should return recommendations for poor metrics', () => {
      recordMetric('FCP',
      3000); // Poor
      recordMetric('LCP',
      4000); // Poor
      recordMetric('FID',
      200);  // Poor
      recordMetric('CLS',
      0.3);  // Poor

      const recommendations = getRecommendations();
      expect(recommendations).toBeDefined();
      expect(recommendations.length).toBeGreaterThan(0);
    
    
    });

    it('should return empty array for good metrics', () => {
      recordMetric('FCP',
      1000);
      recordMetric('LCP',
      2000);
      recordMetric('FID',
      50);
      recordMetric('CLS',
      0.05);

      const recommendations = getRecommendations();
      expect(recommendations).toEqual([]);
    
    
    });
  });
});