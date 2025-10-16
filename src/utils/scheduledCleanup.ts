'use client';
/**
 * Scheduled Data Cleanup Service
 * Provides automatic cleanup of old data records on a schedule
 */
import { logger } from './logger';
import { performanceMonitoring } from './performanceMonitoring';
import { dataCleanup, CleanupConfig, CleanupStats } from './dataCleanup';

export interface ScheduleConfig {
  interval?: number; // Cleanup interval in milliseconds (default: 24 hours)
  enabled?: boolean; // Whether scheduled cleanup is enabled
  maxExecutionTime?: number; // Maximum execution time in milliseconds
  retryAttempts?: number; // Number of retry attempts on failure
  retryDelay?: number; // Delay between retry attempts in milliseconds
  cleanupConfig?: CleanupConfig; // Configuration for the cleanup process
}

export interface ScheduleStats {
  lastRun: number | null;
  nextRun: number | null;
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
  averageExecutionTime: number;
  lastCleanupStats: CleanupStats | null;
  isRunning: boolean;
  errors: string[];
}

class ScheduledCleanupService {
  private intervalId: NodeJS.Timeout | null = null;
  private config: Required<ScheduleConfig>;
  private stats: ScheduleStats;
  private isRunning = false;

  constructor(config: ScheduleConfig = {}) {
    this.config = {
      interval: config.interval || 24 * 60 * 60 * 1000, // 24 hours
      enabled: config.enabled ?? true,
      maxExecutionTime: config.maxExecutionTime || 5 * 60 * 1000, // 5 minutes
      retryAttempts: config.retryAttempts || 3,
      retryDelay: config.retryDelay || 30 * 1000, // 30 seconds
      cleanupConfig: config.cleanupConfig || {}
    };

    this.stats = {
      lastRun: null,
      nextRun: null,
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0,
      averageExecutionTime: 0,
      lastCleanupStats: null,
      isRunning: false,
      errors: []
    };

    // Start scheduled cleanup if enabled
    if (this.config.enabled) {
      this.start();
    }
  }

  /**
   * Start the scheduled cleanup service
   */
  start(): void {
    if (this.intervalId) {
      logger.warn('Scheduled cleanup is already running');
      return;
    }

    if (!this.config.enabled) {
      logger.info('Scheduled cleanup is disabled');
      return;
    }

    logger.info('Starting scheduled data cleanup', {
      interval: this.config.interval,
      nextRun: new Date(Date.now() + this.config.interval).toISOString()
    });

    // Schedule the first run
    this.scheduleNextRun();

    // Set up interval for subsequent runs
    this.intervalId = setInterval(() => {
      this.runCleanup();
    }, this.config.interval);
  }

  /**
   * Stop the scheduled cleanup service
   */
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      logger.info('Scheduled cleanup stopped');
    }
  }

  /**
   * Run cleanup immediately
   */
  async runNow(): Promise<CleanupStats> {
    if (this.isRunning) {
      throw new Error('Cleanup is already running');
    }

    return this.runCleanup();
  }

  /**
   * Get current schedule statistics
   */
  getStats(): ScheduleStats {
    return { ...this.stats };
  }

  /**
   * Update schedule configuration
   */
  updateConfig(newConfig: Partial<ScheduleConfig>): void {
    const wasRunning = this.intervalId !== null;
    
    if (wasRunning) {
      this.stop();
    }

    this.config = { ...this.config, ...newConfig };

    if (wasRunning || this.config.enabled) {
      this.start();
    }

    logger.info('Schedule configuration updated', { config: this.config });
  }

  /**
   * Check if cleanup is due
   */
  isCleanupDue(): boolean {
    if (!this.stats.nextRun) {
      return true;
    }
    return Date.now() >= this.stats.nextRun;
  }

  /**
   * Get time until next cleanup
   */
  getTimeUntilNextCleanup(): number {
    if (!this.stats.nextRun) {
      return 0;
    }
    return Math.max(0, this.stats.nextRun - Date.now());
  }

  /**
   * Run the cleanup process
   */
  private async runCleanup(): Promise<CleanupStats> {
    if (this.isRunning) {
      logger.warn('Cleanup already in progress, skipping');
      return this.stats.lastCleanupStats || {
        totalRecords: 0,
        deletedRecords: 0,
        preservedRecords: 0,
        errors: 0,
        storageBreakdown: {
          localStorage: { total: 0, deleted: 0 },
          sessionStorage: { total: 0, deleted: 0 },
          memory: { total: 0, deleted: 0 }
        },
        categories: {},
        executionTime: 0
      };
    }

    this.isRunning = true;
    this.stats.isRunning = true;
    this.stats.totalRuns++;

    const startTime = performance.now();
    let cleanupStats: CleanupStats | null = null;

    try {
      logger.info('Starting scheduled data cleanup');

      // Run cleanup with timeout
      cleanupStats = await this.runWithTimeout(
        () => dataCleanup.cleanup(this.config.cleanupConfig),
        this.config.maxExecutionTime
      );

      const executionTime = performance.now() - startTime;
      this.updateStats(true, executionTime, cleanupStats);

      logger.info('Scheduled cleanup completed successfully', {
        executionTime,
        stats: cleanupStats
      });

      performanceMonitoring.recordCustomMetric('scheduled_cleanup_success', 1, 'count');
      performanceMonitoring.recordCustomMetric('scheduled_cleanup_duration', executionTime, 'ms');

    } catch (error) {
      const executionTime = performance.now() - startTime;
      this.updateStats(false, executionTime, null, error as Error);

      logger.error('Scheduled cleanup failed', error as Error);
      performanceMonitoring.recordCustomMetric('scheduled_cleanup_failure', 1, 'count');

      // Retry if configured
      if (this.config.retryAttempts > 0) {
        await this.retryCleanup();
      }

      throw error;
    } finally {
      this.isRunning = false;
      this.stats.isRunning = false;
      this.scheduleNextRun();
    }

    return cleanupStats!;
  }

  /**
   * Run a function with timeout
   */
  private async runWithTimeout<T>(
    fn: () => Promise<T>,
    timeoutMs: number
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Cleanup timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      fn()
        .then(result => {
          clearTimeout(timeout);
          resolve(result);
        })
        .catch(error => {
          clearTimeout(timeout);
          reject(error);
        });
    });
  }

  /**
   * Retry cleanup on failure
   */
  private async retryCleanup(): Promise<void> {
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      try {
        logger.info(`Retrying cleanup (attempt ${attempt}/${this.config.retryAttempts})`);
        
        await this.delay(this.config.retryDelay);
        await dataCleanup.cleanup(this.config.cleanupConfig);
        
        logger.info(`Cleanup retry successful on attempt ${attempt}`);
        return;
      } catch (error) {
        logger.error(`Cleanup retry ${attempt} failed`, error as Error);
        
        if (attempt === this.config.retryAttempts) {
          throw new Error(`All ${this.config.retryAttempts} retry attempts failed`);
        }
      }
    }
  }

  /**
   * Update statistics
   */
  private updateStats(
    success: boolean,
    executionTime: number,
    cleanupStats: CleanupStats | null,
    error?: Error
  ): void {
    this.stats.lastRun = Date.now();
    this.stats.lastCleanupStats = cleanupStats;

    if (success) {
      this.stats.successfulRuns++;
    } else {
      this.stats.failedRuns++;
      if (error) {
        this.stats.errors.push(`${new Date().toISOString()}: ${error.message}`);
        // Keep only last 10 errors
        if (this.stats.errors.length > 10) {
          this.stats.errors = this.stats.errors.slice(-10);
        }
      }
    }

    // Update average execution time
    const totalRuns = this.stats.successfulRuns + this.stats.failedRuns;
    this.stats.averageExecutionTime = 
      (this.stats.averageExecutionTime * (totalRuns - 1) + executionTime) / totalRuns;
  }

  /**
   * Schedule the next cleanup run
   */
  private scheduleNextRun(): void {
    this.stats.nextRun = Date.now() + this.config.interval;
  }

  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export singleton instance
export const scheduledCleanup = new ScheduledCleanupService();

// Export convenience functions
export const startScheduledCleanup = (config?: ScheduleConfig) => {
  if (config) {
    scheduledCleanup.updateConfig(config);
  }
  scheduledCleanup.start();
};

export const stopScheduledCleanup = () => scheduledCleanup.stop();
export const runCleanupNow = () => scheduledCleanup.runNow();
export const getCleanupStats = () => scheduledCleanup.getStats();
export const isCleanupDue = () => scheduledCleanup.isCleanupDue();
export const getTimeUntilNextCleanup = () => scheduledCleanup.getTimeUntilNextCleanup();

export default scheduledCleanup;