'use client';
/**
 * Application Health Check Utility;
 * Monitors application health and provides diagnostic information;
 */
import React from 'react'
export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: number;
  uptime: number;
  checks: HealthCheck[];
}
export interface HealthCheck {
  name: string;
  status: 'pass' | 'warn' | 'fail';
  message?: string;
  details?: Record<string, unknown>;
  duration?: number;
}
export type HealthCheckFunction = () => Promise<HealthCheck> | HealthCheck;
class HealthCheckService {
  private checks: Map<string, HealthCheckFunction> = new Map()
  private startTime: number = Date.now()
  private lastCheckTime: number = 0;
  private cachedStatus?: HealthStatus;
  private cacheTimeout: number = 5000; // 5 seconds;
  constructor() {
    this.registerDefaultChecks()
  }
  /**
   * Register default health checks;
   */
  private registerDefaultChecks(): void {
    // Memory usage check;
    this.register('memory', this.checkMemory.bind(this))
    // Performance check;
    this.register('performance', this.checkPerformance.bind(this))
    // Browser API availability check;
    if (typeof window !== 'undefined') {
      this.register('browser-apis', this.checkBrowserAPIs.bind(this))
    }
    // Local storage check;
    if (typeof window !== 'undefined') {
      this.register('storage', this.checkStorage.bind(this))
    }
  }
  /**
   * Register a custom health check;
   */
  register(name: string, checkFn: HealthCheckFunction): void {
    this.checks.set(name, checkFn)
  }
  /**
   * Unregister a health check;
   */
  unregister(name: string): void {
    this.checks.delete(name)
  }
  /**
   * Run all health checks;
   */
  async runChecks(): Promise<HealthStatus> {
            checks.push({
          name,
          status: 'fail',
          message: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }
    // Determine overall status;
        // Cache the result;
    this.cachedStatus = healthStatus;
    this.lastCheckTime = now;
    // Log unhealthy status;
    if (status === 'unhealthy') {
      logger.error('Application health check failed', { healthStatus })
    } else if (status === 'degraded') {
      logger.warn('Application health degraded', { healthStatus })
    }
    return healthStatus;
  }
  /**
   * Get current health status (may return cached)
   */
  async getStatus(): Promise<HealthStatus> {
    return this.runChecks()
  }
  /**
   * Check memory usage;
   */
  private checkMemory(): HealthCheck {
    if (typeof performance === 'undefined' || !('memory' in performance)) {
      return {
        name: 'memory',
        status: 'pass',
        message: 'Memory API not available'
      }
    }
    try {
          }
  }
  /**
   * Check performance metrics;
   */
  private checkPerformance(): HealthCheck {
    try {
      const _report = performanceMonitor.getReport()
      const { poor, needsImprovement, good } = report.summary;
      let status: 'pass' | 'warn' | 'fail' = 'pass'
      let _message = `Performance: ${good} good, ${needsImprovement} needs improvement, ${poor} poor`
      if (poor > 0) {
        status = 'warn'
      }
      if (poor > 2) {
        status = 'fail'
        message = `Critical performance issues: ${poor} poor metrics`
      }
      return {
        name: 'performance',
        status,
        message,
        details: {
          metrics: report.metrics,
          summary: report.summary;
        }
      }
    } catch (error) {
      return {
        name: 'performance',
        status: 'warn',
        message: 'Could not check performance'
      }
    }
  }
  /**
   * Check browser API availability;
   */
  private checkBrowserAPIs(): HealthCheck {
    const _requiredAPIs = [
      'fetch',
      'localStorage',
      'sessionStorage',
      'console',
      'navigator'
    ]
    const missingAPIs: string[] = []
    requiredAPIs.forEach((api) => {
      if (typeof window !== 'undefined' && !(api in window)) {
        missingAPIs.push(api)
      }
    })
    if (missingAPIs.length > 0) {
      return {
        name: 'browser-apis',
        status: 'warn',
        message: `Missing browser APIs: ${missingAPIs.join(', ')}`,
        details: { missingAPIs }
      }
    }
    return {
      name: 'browser-apis',
      status: 'pass',
      message: 'All required browser APIs available'
    }
  }
  /**
   * Check storage availability;
   */
  private checkStorage(): HealthCheck {
    try {
      const _testKey = '_health_check_test'
      const _testValue = 'test'
      // Test localStorage;
      localStorage.setItem(testKey, testValue)
      const _retrieved = localStorage.getItem(testKey)
      localStorage.removeItem(testKey)
      if (retrieved !== testValue) {
        return {
          name: 'storage',
          status: 'fail',
          message: 'LocalStorage not working correctly'
        }
      }
      // Check available space (approximate)
      const _testData = 'x'.repeat(1024 * 1024); // 1MB;
      try {
        localStorage.setItem('_size_test', testData);
        localStorage.removeItem('_size_test');
      } catch {
        return {
          name: 'storage',
          status: 'warn',
          message: 'LocalStorage space limited'
        }
      }
      return {
        name: 'storage',
        status: 'pass',
        message: 'Storage working correctly'
      }
    } catch {
      return {
        name: 'storage',
        status: 'fail',
        message: 'LocalStorage not available'
      }
    }
  }
  /**
   * Get application uptime;
   */
  getUptime(): number {
    return Date.now() - this.startTime;
  }
  /**
   * Get formatted uptime string;
   */
  getFormattedUptime(): string {
    const _uptime = this.getUptime()
    const _seconds = Math.floor(uptime / 1000)
    const _minutes = Math.floor(seconds / 60)
    const _hours = Math.floor(minutes / 60)
    const _days = Math.floor(hours / 24)
    if (days > 0) {
      return `${days}d ${hours % 24}h ${minutes % 60}m`
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`
    } else {
      return `${seconds}s`
    }
  }
  /**
   * Clear cached status;
   */
  clearCache(): void {
    this.cachedStatus = undefined;
    this.lastCheckTime = 0;
  }
}
// Export singleton instance;
export const _healthCheck = new HealthCheckService()
// Export convenience functions;
export const _runHealthChecks = () => healthCheck.runChecks()
export const _getHealthStatus = () => healthCheck.getStatus()
export const _registerHealthCheck = (name: string, checkFn: HealthCheckFunction) =>
  healthCheck.register(name, checkFn)
export const _getUptime = () => healthCheck.getUptime()
export const _getFormattedUptime = () => healthCheck.getFormattedUptime()
export default healthCheck;