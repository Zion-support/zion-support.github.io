import { describe, it, expect, beforeEach } from '@jest/globals';

describe('performanceMonitoring', () => {
import {< 1000; i++) {< 1800 = good;
      recordMetric('LCP', 2000); < 2500 = good;
      recordMetric('FID', 50);   < 100 = good;
      recordMetric('CLS', 0.05); < 0.1 = good;
const score = getPerformanceScore();
      expect(score).toBeGreaterThan(80);
    });
    it('should return 100 for perfect metrics', () => {
}}}