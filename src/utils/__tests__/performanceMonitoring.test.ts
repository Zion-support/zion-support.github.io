<<<<<<< HEAD
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
    it('should record metrics', () => {
      recordMetric('test-metric', 100, MetricUnit.Milliseconds);
      const metrics = getMetrics();
      expect(metrics['test-metric']).toBeDefined();
      expect(metrics['test-metric'].values.length).toBe(1);
      expect(metrics['test-metric'].values[0]).toBe(100);
    });
    it('should accumulate multiple values for same metric', () => {
      recordMetric('test-metric', 100);
      recordMetric('test-metric', 200);
      recordMetric('test-metric', 150);
      const metrics = getMetrics();
      expect(metrics['test-metric'].values.length).toBe(3);
      expect(metrics['test-metric'].average).toBe(150);
    });
    it('should calculate correct statistics', () => {
      recordMetric('test-metric', 100);
      recordMetric('test-metric', 200);
      recordMetric('test-metric', 300);
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
      recordMetric('count', 5, MetricUnit.Count);
      recordMetric('percent', 95, MetricUnit.Percentage);
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
      expect(Object.keys(metrics).length).toBe(0);
    });
    it('should return all recorded metrics', () => {
      recordMetric('metric1', 100);
      recordMetric('metric2', 200);
      recordMetric('metric3', 300);
      const metrics = getMetrics();
      expect(Object.keys(metrics).length).toBe(3);
      expect(metrics['metric1']).toBeDefined();
      expect(metrics['metric2']).toBeDefined();
      expect(metrics['metric3']).toBeDefined();
    });
  });
  describe('clearMetrics', () => {
    it('should clear all metrics', () => {
      recordMetric('metric1', 100);
      recordMetric('metric2', 200);
      expect(Object.keys(getMetrics()).length).toBe(2);
      clearMetrics();
      expect(Object.keys(getMetrics()).length).toBe(0);
    });
  });
  describe('measureFunction', () => {
    it('should measure synchronous function execution time', () => {
      const testFn = () => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
          sum += i;
        }
        return sum;
      };
      const result = measureFunction('test-function', testFn);
      expect(result).toBe(499500); // Sum of 0 to 999
      const metrics = getMetrics();
      expect(metrics['test-function']).toBeDefined();
      expect(metrics['test-function'].values.length).toBe(1);
      expect(metrics['test-function'].values[0]).toBeGreaterThan(0);
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
        return 'completed';
      };
      const result = await measureAsyncFunction('async-test', asyncFn);
      expect(result).toBe('completed');
      const metrics = getMetrics();
      expect(metrics['async-test']).toBeDefined();
      // Use >= 9 to account for timing variations in test environment
      expect(metrics['async-test'].values[0]).toBeGreaterThanOrEqual(9);
    });
    it('should handle async function errors', async () => {
      const errorFn = async () => {
        throw new Error('Test error');
      };
      await expect(measureAsyncFunction('error-test', errorFn)).rejects.toThrow('Test error');
    });
  });
  describe('getPerformanceScore', () => {
    it('should calculate performance score', () => {
      // Good performance metrics
      recordMetric('FCP', 1000); // < 1800 = good
      recordMetric('LCP', 2000); // < 2500 = good
      recordMetric('FID', 50);   // < 100 = good
      recordMetric('CLS', 0.05); // < 0.1 = good
      const score = getPerformanceScore();
      expect(score).toBeGreaterThan(80);
    });
    it('should return 100 for perfect metrics', () => {
      recordMetric('FCP', 1000);
      recordMetric('LCP', 1500);
      recordMetric('FID', 50);
      recordMetric('CLS', 0.01);
      recordMetric('TTFB', 100);
      const score = getPerformanceScore();
      expect(score).toBe(100);
    });
    it('should return 0 when no metrics', () => {
      const score = getPerformanceScore();
      expect(score).toBe(0);
    });
  });
  describe('getRecommendations', () => {
    it('should return recommendations for poor metrics', () => {
      recordMetric('FCP', 3000); // Poor
      recordMetric('LCP', 4000); // Poor
      const recommendations = getRecommendations();
      expect(recommendations.length).toBeGreaterThan(0);
      expect(recommendations.some(r => r.includes('FCP'))).toBe(true);
      expect(recommendations.some(r => r.includes('LCP'))).toBe(true);
    });
    it('should return empty array for good metrics', () => {
      recordMetric('FCP', 1000);
      recordMetric('LCP', 2000);
      recordMetric('FID', 50);
      recordMetric('CLS', 0.05);
      const recommendations = getRecommendations();
      expect(recommendations.length).toBe(0);
    });
    it('should provide specific recommendations', () => {
      recordMetric('FCP', 3000);
      const recommendations = getRecommendations();
      expect(recommendations.some(r => 
        r.includes('critical CSS') || 
        r.includes('render-blocking')
      )).toBe(true);
    });
  });
  describe('metric ratings', () => {
    it('should rate FCP correctly', () => {
      recordMetric('FCP', 1500); // Good
      const metrics = getMetrics();
      expect(metrics['FCP'].rating).toBe('good');
      clearMetrics();
      recordMetric('FCP', 2500); // Needs improvement
      expect(getMetrics()['FCP'].rating).toBe('needs-improvement');
      clearMetrics();
      recordMetric('FCP', 3500); // Poor
      expect(getMetrics()['FCP'].rating).toBe('poor');
    });
    it('should rate LCP correctly', () => {
      recordMetric('LCP', 2000); // Good
      expect(getMetrics()['LCP'].rating).toBe('good');
      clearMetrics();
      recordMetric('LCP', 3000); // Needs improvement
      expect(getMetrics()['LCP'].rating).toBe('needs-improvement');
      clearMetrics();
      recordMetric('LCP', 5000); // Poor
      expect(getMetrics()['LCP'].rating).toBe('poor');
    });
    it('should rate CLS correctly', () => {
      recordMetric('CLS', 0.05); // Good
      expect(getMetrics()['CLS'].rating).toBe('good');
      clearMetrics();
      recordMetric('CLS', 0.15); // Needs improvement
      expect(getMetrics()['CLS'].rating).toBe('needs-improvement');
      clearMetrics();
      recordMetric('CLS', 0.3); // Poor
      expect(getMetrics()['CLS'].rating).toBe('poor');
    });
  });
});
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
