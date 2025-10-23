/**
 * Data Cleanup Module
 * Provides utilities for cleaning up old data and managing storage
 */

import { dataRecordManager, DataRecord } from './dataRecordManager';

export interface CleanupConfig {
  maxAge?: number;
  maxRecords?: number;
  categories?: string[];
  types?: string[];
  dryRun?: boolean;
}

export interface StorageStats {
  localStorage: {
    used: number;
    available: number;
    total: number;
    records: number;
  };
  sessionStorage: {
    used: number;
    available: number;
    total: number;
    records: number;
  };
  memory: {
    used: number;
    available: number;
    total: number;
  };
}

class DataCleanup {
  async identifyOldRecords(config: CleanupConfig): Promise<DataRecord[]> {
    const { maxAge = 7 * 24 * 60 * 60 * 1000 } = config; // Default 7 days
    const now = Date.now();
    const oldRecords: DataRecord[] = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('data_record_')) {
          const recordData = localStorage.getItem(key);
          if (recordData) {
            const record: DataRecord = JSON.parse(recordData);
            
            // Check if record is old enough
            if (now - record.timestamp > maxAge) {
              // Apply additional filters
              if (config.categories && !config.categories.includes(record.category)) {
                continue;
              }
              if (config.types && !config.types.includes(record.type)) {
                continue;
              }
              
              oldRecords.push(record);
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to identify old records:', error);
    }

    return oldRecords;
  }

  async cleanupOldRecords(config: CleanupConfig): Promise<{ cleaned: number; errors: number }> {
    const oldRecords = await this.identifyOldRecords(config);
    let cleaned = 0;
    let errors = 0;

    if (config.dryRun) {
      return { cleaned: oldRecords.length, errors: 0 };
    }

    for (const record of oldRecords) {
      try {
        if (dataRecordManager.deleteRecord(record.id)) {
          cleaned++;
        } else {
          errors++;
        }
      } catch (error) {
        console.error('Failed to delete record:', record.id, error);
        errors++;
      }
    }

    return { cleaned, errors };
  }

  async getStorageStats(): Promise<StorageStats> {
    const stats: StorageStats = {
      localStorage: {
        used: 0,
        available: 0,
        total: 0,
        records: 0,
      },
      sessionStorage: {
        used: 0,
        available: 0,
        total: 0,
        records: 0,
      },
      memory: {
        used: 0,
        available: 0,
        total: 0,
      },
    };

    try {
      // Calculate localStorage usage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          const value = localStorage.getItem(key);
          if (value) {
            stats.localStorage.used += key.length + value.length;
            if (key.startsWith('data_record_')) {
              stats.localStorage.records++;
            }
          }
        }
      }

      // Calculate sessionStorage usage
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key) {
          const value = sessionStorage.getItem(key);
          if (value) {
            stats.sessionStorage.used += key.length + value.length;
            if (key.startsWith('data_record_')) {
              stats.sessionStorage.records++;
            }
          }
        }
      }

      // Estimate available storage (5MB limit for most browsers)
      stats.localStorage.total = 5 * 1024 * 1024;
      stats.localStorage.available = stats.localStorage.total - stats.localStorage.used;
      
      stats.sessionStorage.total = 5 * 1024 * 1024;
      stats.sessionStorage.available = stats.sessionStorage.total - stats.sessionStorage.used;

      // Memory stats (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        stats.memory.used = memory.usedJSHeapSize;
        stats.memory.total = memory.totalJSHeapSize;
        stats.memory.available = memory.totalJSHeapSize - memory.usedJSHeapSize;
      }
    } catch (error) {
      console.error('Failed to get storage stats:', error);
    }

    return stats;
  }

  async optimizeStorage(): Promise<{ optimized: boolean; spaceSaved: number }> {
    const beforeStats = await this.getStorageStats();
    const beforeUsed = beforeStats.localStorage.used;

    try {
      // Clear expired records
      const expiredCleared = dataRecordManager.clearExpired();
      
      // Clean up old records (older than 30 days)
      const cleanupResult = await this.cleanupOldRecords({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        dryRun: false,
      });

      const afterStats = await this.getStorageStats();
      const afterUsed = afterStats.localStorage.used;
      const spaceSaved = beforeUsed - afterUsed;

      return {
        optimized: true,
        spaceSaved: Math.max(0, spaceSaved),
      };
    } catch (error) {
      console.error('Failed to optimize storage:', error);
      return { optimized: false, spaceSaved: 0 };
    }
  }

  async getCleanupRecommendations(): Promise<{
    shouldCleanup: boolean;
    reason: string;
    estimatedSpaceSaved: number;
  }> {
    const stats = await this.getStorageStats();
    const recordStats = dataRecordManager.getStats();
    
    const shouldCleanup = 
      stats.localStorage.used > stats.localStorage.total * 0.8 || // 80% full
      recordStats.byAge.veryOld > 100 || // More than 100 very old records
      recordStats.total > 1000; // More than 1000 total records

    let reason = '';
    if (stats.localStorage.used > stats.localStorage.total * 0.8) {
      reason = 'Storage is over 80% full';
    } else if (recordStats.byAge.veryOld > 100) {
      reason = 'Too many very old records';
    } else if (recordStats.total > 1000) {
      reason = 'Too many total records';
    }

    const estimatedSpaceSaved = recordStats.byAge.veryOld * 1000; // Rough estimate

    return {
      shouldCleanup,
      reason,
      estimatedSpaceSaved,
    };
  }
}

export const dataCleanup = new DataCleanup();