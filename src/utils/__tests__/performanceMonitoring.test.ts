// PerformanceMonitoring.test utility
// This file contains utility functions and configurations

import { performanceMonitoringTest } from '../performanceMonitoring';

describe('PerformanceMonitoring', () => {
  test('should initialize correctly', () => {
    expect(() => {
      performanceMonitoringTest.init();
    }).not.toThrow();
  });
});