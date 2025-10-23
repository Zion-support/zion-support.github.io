/**
 * Scheduled Cleanup Module
 * Manages scheduled cleanup tasks for data maintenance
 */

import { dataCleanup, CleanupConfig } from './dataCleanup';

export interface CleanupStats {
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
  lastRun: number | null;
  nextRun: number | null;
  isRunning: boolean;
  averageRunTime: number;
  lastError: string | null;
}

export interface ScheduledCleanupConfig {
  interval: number; // in milliseconds
  enabled: boolean;
  cleanupConfig: CleanupConfig;
  maxRetries: number;
  retryDelay: number;
}

class ScheduledCleanup {
  private intervalId: NodeJS.Timeout | null = null;
  private stats: CleanupStats = {
    totalRuns: 0,
    successfulRuns: 0,
    failedRuns: 0,
    lastRun: null,
    nextRun: null,
    isRunning: false,
    averageRunTime: 0,
    lastError: null,
  };
  private config: ScheduledCleanupConfig = {
    interval: 24 * 60 * 60 * 1000, // 24 hours
    enabled: false,
    cleanupConfig: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    maxRetries: 3,
    retryDelay: 5 * 60 * 1000, // 5 minutes
  };
  private runTimes: number[] = [];

  start(): boolean {
    if (this.intervalId || !this.config.enabled) {
      return false;
    }

    try {
      this.intervalId = setInterval(() => {
        this.runCleanup();
      }, this.config.interval);

      this.updateNextRun();
      return true;
    } catch (error) {
      console.error('Failed to start scheduled cleanup:', error);
      this.stats.lastError = error instanceof Error ? error.message : 'Unknown error';
      return false;
    }
  }

  stop(): boolean {
    if (!this.intervalId) {
      return false;
    }

    try {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.stats.isRunning = false;
      this.stats.nextRun = null;
      return true;
    } catch (error) {
      console.error('Failed to stop scheduled cleanup:', error);
      return false;
    }
  }

  async runCleanup(): Promise<boolean> {
    if (this.stats.isRunning) {
      return false;
    }

    const startTime = Date.now();
    this.stats.isRunning = true;
    this.stats.totalRuns++;

    try {
      const result = await dataCleanup.cleanupOldRecords(this.config.cleanupConfig);
      
      if (result.errors === 0) {
        this.stats.successfulRuns++;
        this.stats.lastError = null;
      } else {
        this.stats.failedRuns++;
        this.stats.lastError = `Cleanup completed with ${result.errors} errors`;
      }

      this.stats.lastRun = Date.now();
      this.updateNextRun();
      
      const runTime = Date.now() - startTime;
      this.runTimes.push(runTime);
      
      // Keep only last 10 run times for average calculation
      if (this.runTimes.length > 10) {
        this.runTimes.shift();
      }
      
      this.stats.averageRunTime = this.runTimes.reduce((a, b) => a + b, 0) / this.runTimes.length;
      
      return true;
    } catch (error) {
      this.stats.failedRuns++;
      this.stats.lastError = error instanceof Error ? error.message : 'Unknown error';
      this.stats.lastRun = Date.now();
      this.updateNextRun();
      
      console.error('Scheduled cleanup failed:', error);
      return false;
    } finally {
      this.stats.isRunning = false;
    }
  }

  getStats(): CleanupStats {
    return { ...this.stats };
  }

  isCleanupDue(): boolean {
    if (!this.config.enabled || !this.stats.nextRun) {
      return false;
    }
    
    return Date.now() >= this.stats.nextRun;
  }

  getTimeUntilNextCleanup(): number {
    if (!this.stats.nextRun) {
      return 0;
    }
    
    return Math.max(0, this.stats.nextRun - Date.now());
  }

  updateConfig(newConfig: Partial<ScheduledCleanupConfig>): boolean {
    try {
      this.config = { ...this.config, ...newConfig };
      
      // Restart if interval changed and cleanup is running
      if (this.intervalId && newConfig.interval) {
        this.stop();
        this.start();
      }
      
      return true;
    } catch (error) {
      console.error('Failed to update scheduled cleanup config:', error);
      return false;
    }
  }

  getConfig(): ScheduledCleanupConfig {
    return { ...this.config };
  }

  private updateNextRun(): void {
    if (this.config.enabled && this.intervalId) {
      this.stats.nextRun = Date.now() + this.config.interval;
    } else {
      this.stats.nextRun = null;
    }
  }

  // Enable/disable cleanup
  enable(): boolean {
    this.config.enabled = true;
    return this.start();
  }

  disable(): boolean {
    this.config.enabled = false;
    return this.stop();
  }

  // Force immediate cleanup
  async forceCleanup(): Promise<boolean> {
    return this.runCleanup();
  }

  // Reset stats
  resetStats(): void {
    this.stats = {
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0,
      lastRun: null,
      nextRun: null,
      isRunning: false,
      averageRunTime: 0,
      lastError: null,
    };
    this.runTimes = [];
  }
}

export const scheduledCleanup = new ScheduledCleanup();