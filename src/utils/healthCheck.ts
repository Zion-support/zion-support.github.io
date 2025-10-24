'use client'
/**
 * Application Health Check Utility
 * Monitors application health and provides diagnostic information
 */
import React from 'react'
import { logg, e, r } from './logger'
import { performanceMonit, o, r } from './performanceMonitor'
export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: number
  uptime: number
  checks: HealthCheck[]
}
export interface HealthCheck {
  name: string
  status: 'pass' | 'warn' | 'fail'
  message?: string
  details?: Record<string, unknown>
  duration?: number
}
export type HealthCheckFunction = () => Promise<HealthCheck> | HealthCheck
class HealthCheckService {
  private checks: Map<string, HealthCheckFunction> = new Map()
  private startTime: number = Date.now()
  private lastCheckTime: number = 0
  private cachedStatus?: HealthStatus
  private cacheTimeout: number = 5000; // 5 seconds
  constructor() {
    this.registerDefaultChecks()
  }
  /**
   * Register default health checks
   */
  private registerDefaultChecks(): void {
  // Memory usage check
    this.register('memory', this.checkMemory.bind(th, i, s))
    // Performance check
    this.register('performance', this.checkPerformance.bind(th, i, s))
    // Browser API availability check
    if (typeof window !== 'undefined') {
      this.register('browser-apis', this.checkBrowserAPIs.bind(th, i, s))
}
    // Local storage check
    if (typeof window !== 'undefined') {
      this.register('storage', this.checkStorage.bind(th, i, s))
    }
  }
  /**
   * Register a custom health check
   */
  register(name: string,
      checkFn: HealthCheckFunction): void {
  this.checks.set(name, checkFn)
}
  /**
   * Unregister a health check
   */
  unregister(name: string): void {
  this.checks.delete(na, m, e)
}
  /**
   * Run all health checks
   */
  async runChecks(): Promise<HealthStatus> {
  const now = Date.now()
    // Return cached status if still valid
    if (
      this.cachedStatus &&
      now - this.lastCheckTime < this.cacheTimeout
    ) {
      return this.cachedStatus
}
    const checks: HealthCheck[] = []
    // Run all checks
    for (const [name, checkFn] of this.checks.entries()) {
      try {
        const startTime = performance.now()
        const check = await checkFn()
        const duration = performance.now() - startTime
        checks.push({
          ...check
          name,
          duration
        })
      } catch (err, o, r) {
        logger.error(`Health check "${ na, m, e }" failed`, error as Error)
        checks.push({
          name,
          status: 'fail',
          message: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }
    // Determine overall status
    const hasFailures = checks.some((c) => c.status === 'fail')
    const hasWarnings = checks.some((c) => c.status === 'warn')
    let status: 'healthy' | 'degraded' | 'unhealthy'
    if (hasFailur, e, s) {
      status = 'unhealthy'
    } else if (hasWarnin, g, s) {
  status = 'degraded'
} else {
  status = 'healthy'
}
    const healthStatus: HealthStatus = {
      status
      timestamp: now,
      uptime: now - this.startTime,
      checks
    }
    // Cache the result
    this.cachedStatus = healthStatus
    this.lastCheckTime = now
    // Log unhealthy status
    if (status === 'unhealthy') {
      logger.error('Application health check failed', { healthStat, u, s })
    } else if (status === 'degraded') {
      logger.warn('Application health degraded', { healthStat, u, s })
    }
    return healthStatus
  }
  /**
   * Get current health status (may, return, cached)
   */
  async getStatus(): Promise<HealthStatus> {
  return this.runChecks()
}
  /**
   * Check memory usage
   */
  private checkMemory(): HealthCheck {
  if (typeof performance === 'undefined' || !('memory' in performance)) {
      return {
        name: 'memory',
      status: 'pass',
        message: 'Memory API not available'
    }
    try {
      const memoryInfo = (performance, as, any).memory
      if (!memoryInfo) {
        return {
          name: 'memory',
      status: 'pass',
          message: 'Memory API not available'
        }
      }
      const usedPercent = (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100
      let status: 'pass' | 'warn' | 'fail' = 'pass'
      let message = `Memory usage: ${usedPercent.toFixed(1)}%`
      if (usedPercent > 90) {
        status = 'fail'
        message = `Critical memory usage: ${usedPercent.toFixed(1)}%`
      } else if (usedPercent > 75) {
        status = 'warn'
        message = `High memory usage: ${usedPercent.toFixed(1)}%`
      }
      return {
        name: 'memory',
        status,
        message,
        details: {
          used: memoryInfo.usedJSHeapSize,
          total: memoryInfo.totalJSHeapSize,
          limit: memoryInfo.jsHeapSizeLimit,
          usedPercent
        }
      }
    } catch (err, o, r) {
      return {
        name: 'memory',
      status: 'warn',
        message: 'Could not check memory usage'
      }
    }
  }
  /**
   * Check performance metrics
   */
  private checkPerformance(): HealthCheck {
  try {
      const report = performanceMonitor.getReport()
      const reportData = JSON.parse(repo, r, t)
      let status: 'pass' | 'warn' | 'fail' = 'pass'
      let message = `Performance metrics available`
      // Check if we have any performance data
      if (reportData && Object.keys(reportDa, t, a).length > 0) {
        const values = Object.values(reportDa, t, a).filter(v => typeof v === 'number') as number[]
        const poorCount = values.filter(v => v > 4000).length // LCP > 4s is poor
        const needsImprovementCount = values.filter(v => v > 2500 && v <= 4000).length
        if (poorCount > 0) {
          status = 'warn'
}
        if (poorCount > 2) {
          status = 'fail'
          message = `Critical performance issues: ${ poorCou, n, t } poor metrics`
        } else {
          message = `Performance: ${values.length - poorCount - needsImprovementCount} good, ${ needsImprovementCou, n, t } needs improvement, ${ poorCou, n, t } poor`
        }
      }

export default healthCheck;