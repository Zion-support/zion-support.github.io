'use client';
/**
 * Data Cleanup Utility
 * Provides comprehensive cleanup of old data records from various storage mechanisms
 */
import { logger } from './logger';
import { performanceMonitoring } from './performanceMonitoring';

export interface DataRecord {
  id: string;
  timestamp: number;
  ttl?: number;
  data: unknown;
  type?: string;
  category?: string;
}

export interface CleanupConfig {
  maxAge?: number; // Maximum age in milliseconds (default: 7 days)
  storageTypes?: ('localStorage' | 'sessionStorage' | 'memory')[];
  dryRun?: boolean; // If true, only log what would be deleted
  batchSize?: number; // Number of records to process at once
  preservePatterns?: RegExp[]; // Patterns to preserve even if old
  categories?: string[]; // Specific categories to clean up
}

export interface CleanupStats {
  totalRecords: number;
  deletedRecords: number;
  preservedRecords: number;
  errors: number;
  storageBreakdown: {
    localStorage: { total: number; deleted: number };
    sessionStorage: { total: number; deleted: number };
    memory: { total: number; deleted: number };
  };
  categories: Record<string, { total: number; deleted: number }>;
  executionTime: number;
}

export interface DataCleanupService {
  cleanup(config?: CleanupConfig): Promise<CleanupStats>;
  cleanupByCategory(category: string, config?: CleanupConfig): Promise<CleanupStats>;
  cleanupByAge(maxAge: number, config?: CleanupConfig): Promise<CleanupStats>;
  getStorageStats(): Promise<{
    localStorage: { size: number; records: number };
    sessionStorage: { size: number; records: number };
    memory: { size: number; records: number };
  }>;
  identifyOldRecords(config?: CleanupConfig): Promise<DataRecord[]>;
}

class DataCleanupManager implements DataCleanupService {
  private readonly defaultConfig: Required<CleanupConfig> = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    storageTypes: ['localStorage', 'sessionStorage', 'memory'],
    dryRun: false,
    batchSize: 100,
    preservePatterns: [
      /^user_/, // Preserve user-related data
      /^auth_/, // Preserve authentication data
      /^settings_/, // Preserve settings
      /^preferences_/, // Preserve preferences
    ],
    categories: []
  };

  /**
   * Main cleanup method
   */
  async cleanup(config: CleanupConfig = {}): Promise<CleanupStats> {
    const startTime = performance.now();
    const mergedConfig = { ...this.defaultConfig, ...config };
    
    logger.info('Starting data cleanup', { config: mergedConfig });
    
    const stats: CleanupStats = {
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

    try {
      // Clean up each storage type
      for (const storageType of mergedConfig.storageTypes) {
        const storageStats = await this.cleanupStorage(storageType, mergedConfig);
        
        stats.totalRecords += storageStats.total;
        stats.deletedRecords += storageStats.deleted;
        stats.preservedRecords += storageStats.preserved;
        stats.errors += storageStats.errors;
        stats.storageBreakdown[storageType] = {
          total: storageStats.total,
          deleted: storageStats.deleted
        };
        
        // Merge category stats
        Object.entries(storageStats.categories).forEach(([category, catStats]) => {
          if (!stats.categories[category]) {
            stats.categories[category] = { total: 0, deleted: 0 };
          }
          stats.categories[category].total += catStats.total;
          stats.categories[category].deleted += catStats.deleted;
        });
      }

      stats.executionTime = performance.now() - startTime;
      
      logger.info('Data cleanup completed', { stats });
      performanceMonitoring.recordCustomMetric('data_cleanup_completed', stats.executionTime, 'ms');
      performanceMonitoring.recordCustomMetric('data_cleanup_deleted', stats.deletedRecords, 'count');
      
      return stats;
    } catch (error) {
      logger.error('Data cleanup failed', error as Error, { error: (error as Error).message });
      stats.executionTime = performance.now() - startTime;
      throw error;
    }
  }

  /**
   * Clean up records by category
   */
  async cleanupByCategory(category: string, config: CleanupConfig = {}): Promise<CleanupStats> {
    const categoryConfig = { ...config, categories: [category] };
    return this.cleanup(categoryConfig);
  }

  /**
   * Clean up records by age
   */
  async cleanupByAge(maxAge: number, config: CleanupConfig = {}): Promise<CleanupStats> {
    const ageConfig = { ...config, maxAge };
    return this.cleanup(ageConfig);
  }

  /**
   * Get storage statistics
   */
  async getStorageStats(): Promise<{
    localStorage: { size: number; records: number };
    sessionStorage: { size: number; records: number };
    memory: { size: number; records: number };
  }> {
    const stats = {
      localStorage: { size: 0, records: 0 },
      sessionStorage: { size: 0, records: 0 },
      memory: { size: 0, records: 0 }
    };

    if (typeof window !== 'undefined') {
      // localStorage stats
      if (window.localStorage) {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && this.isDataRecord(key)) {
            const value = localStorage.getItem(key);
            if (value) {
              stats.localStorage.size += value.length;
              stats.localStorage.records++;
            }
          }
        }
      }

      // sessionStorage stats
      if (window.sessionStorage) {
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          if (key && this.isDataRecord(key)) {
            const value = sessionStorage.getItem(key);
            if (value) {
              stats.sessionStorage.size += value.length;
              stats.sessionStorage.records++;
            }
          }
        }
      }
    }

    // Memory stats (approximate)
    stats.memory.records = this.getMemoryRecordCount();
    stats.memory.size = this.getMemorySize();

    return stats;
  }

  /**
   * Identify old records without deleting them
   */
  async identifyOldRecords(config: CleanupConfig = {}): Promise<DataRecord[]> {
    const mergedConfig = { ...this.defaultConfig, ...config };
    const oldRecords: DataRecord[] = [];

    for (const storageType of mergedConfig.storageTypes) {
      const records = await this.getRecordsFromStorage(storageType);
      const filtered = this.filterOldRecords(records, mergedConfig);
      oldRecords.push(...filtered);
    }

    return oldRecords;
  }

  /**
   * Clean up a specific storage type
   */
  private async cleanupStorage(
    storageType: 'localStorage' | 'sessionStorage' | 'memory',
    config: Required<CleanupConfig>
  ): Promise<{
    total: number;
    deleted: number;
    preserved: number;
    errors: number;
    categories: Record<string, { total: number; deleted: number }>;
  }> {
    const stats = {
      total: 0,
      deleted: 0,
      preserved: 0,
      errors: 0,
      categories: {} as Record<string, { total: number; deleted: number }>
    };

    try {
      const records = await this.getRecordsFromStorage(storageType);
      stats.total = records.length;

      const oldRecords = this.filterOldRecords(records, config);
      
      // Process in batches
      for (let i = 0; i < oldRecords.length; i += config.batchSize) {
        const batch = oldRecords.slice(i, i + config.batchSize);
        
        for (const record of batch) {
          try {
            // Check if record should be preserved
            if (this.shouldPreserve(record, config)) {
              stats.preserved++;
              continue;
            }

            // Check category filter
            if (config.categories.length > 0 && record.category && !config.categories.includes(record.category)) {
              stats.preserved++;
              continue;
            }

            // Delete the record
            if (!config.dryRun) {
              await this.deleteRecord(record, storageType);
            }
            
            stats.deleted++;
            
            // Update category stats
            if (record.category) {
              if (!stats.categories[record.category]) {
                stats.categories[record.category] = { total: 0, deleted: 0 };
              }
              stats.categories[record.category].total++;
              stats.categories[record.category].deleted++;
            }
            
          } catch (error) {
            logger.error(`Failed to process record ${record.id}`, error as Error);
            stats.errors++;
          }
        }
      }
    } catch (error) {
      logger.error(`Failed to cleanup ${storageType}`, error as Error, { storageType });
      stats.errors++;
    }

    return stats;
  }

  /**
   * Get records from a specific storage type
   */
  private async getRecordsFromStorage(storageType: 'localStorage' | 'sessionStorage' | 'memory'): Promise<DataRecord[]> {
    const records: DataRecord[] = [];

    if (storageType === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && this.isDataRecord(key)) {
          try {
            const value = localStorage.getItem(key);
            if (value) {
              const record = JSON.parse(value) as DataRecord;
              records.push(record);
            }
          } catch (error) {
            logger.warn(`Failed to parse localStorage record: ${key}`, { error: (error as Error).message });
          }
        }
      }
    } else if (storageType === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && this.isDataRecord(key)) {
          try {
            const value = sessionStorage.getItem(key);
            if (value) {
              const record = JSON.parse(value) as DataRecord;
              records.push(record);
            }
          } catch (error) {
            logger.warn(`Failed to parse sessionStorage record: ${key}`, { error: (error as Error).message });
          }
        }
      }
    } else if (storageType === 'memory') {
      // Memory records would need to be tracked separately
      // This is a placeholder for memory-based records
      records.push(...this.getMemoryRecords());
    }

    return records;
  }

  /**
   * Filter records that are old based on configuration
   */
  private filterOldRecords(records: DataRecord[], config: Required<CleanupConfig>): DataRecord[] {
    const now = Date.now();
    return records.filter(record => {
      // Check if record is older than maxAge
      const age = now - record.timestamp;
      if (age > config.maxAge) {
        return true;
      }

      // Check if record has TTL and is expired
      if (record.ttl && age > record.ttl) {
        return true;
      }

      return false;
    });
  }

  /**
   * Check if a record should be preserved
   */
  private shouldPreserve(record: DataRecord, config: Required<CleanupConfig>): boolean {
    return config.preservePatterns.some(pattern => pattern.test(record.id));
  }

  /**
   * Delete a record from storage
   */
  private async deleteRecord(record: DataRecord, storageType: 'localStorage' | 'sessionStorage' | 'memory'): Promise<void> {
    if (storageType === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(record.id);
    } else if (storageType === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(record.id);
    } else if (storageType === 'memory') {
      this.deleteMemoryRecord(record.id);
    }
  }

  /**
   * Check if a key represents a data record
   */
  private isDataRecord(key: string): boolean {
    // Check if key follows data record pattern
    return key.startsWith('data_') || 
           key.startsWith('record_') || 
           key.startsWith('cache_') ||
           key.startsWith('temp_') ||
           key.startsWith('session_');
  }

  /**
   * Get memory records (placeholder implementation)
   */
  private getMemoryRecords(): DataRecord[] {
    // This would need to be implemented based on your memory storage system
    // For now, return empty array
    return [];
  }

  /**
   * Get memory record count
   */
  private getMemoryRecordCount(): number {
    // Placeholder implementation
    return 0;
  }

  /**
   * Get memory size
   */
  private getMemorySize(): number {
    // Placeholder implementation
    return 0;
  }

  /**
   * Delete memory record
   */
  private deleteMemoryRecord(id: string): void {
    // Placeholder implementation
    logger.debug(`Would delete memory record: ${id}`);
  }
}

// Export singleton instance
export const dataCleanup = new DataCleanupManager();

// Export convenience functions
export const cleanupOldData = (config?: CleanupConfig) => dataCleanup.cleanup(config);
export const cleanupByCategory = (category: string, config?: CleanupConfig) => 
  dataCleanup.cleanupByCategory(category, config);
export const cleanupByAge = (maxAge: number, config?: CleanupConfig) => 
  dataCleanup.cleanupByAge(maxAge, config);
export const getStorageStats = () => dataCleanup.getStorageStats();
export const identifyOldRecords = (config?: CleanupConfig) => dataCleanup.identifyOldRecords(config);

export default dataCleanup;