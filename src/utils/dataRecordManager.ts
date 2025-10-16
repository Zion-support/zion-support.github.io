'use client';
/**
 * Data Record Manager
 * Provides utilities for creating, managing, and identifying data records
 */
import { logger } from './logger';

export interface DataRecordMetadata {
  id: string;
  timestamp: number;
  ttl?: number;
  category: string;
  type: string;
  version: string;
  size: number;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface DataRecord<T = unknown> {
  id: string;
  timestamp: number;
  ttl?: number;
  data: T;
  category: string;
  type: string;
  version: string;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface RecordQuery {
  category?: string;
  type?: string;
  tags?: string[];
  minAge?: number;
  maxAge?: number;
  limit?: number;
  offset?: number;
}

export interface RecordStats {
  total: number;
  byCategory: Record<string, number>;
  byType: Record<string, number>;
  byAge: {
    recent: number; // < 1 hour
    old: number; // 1 hour - 1 day
    veryOld: number; // 1 day - 1 week
    ancient: number; // > 1 week
  };
  totalSize: number;
  averageSize: number;
}

class DataRecordManager {
  private readonly PREFIX = 'data_record_';
  private readonly VERSION = '1.0.0';

  /**
   * Create a new data record
   */
  createRecord<T>(
    data: T,
    category: string,
    type: string,
    options: {
      ttl?: number;
      tags?: string[];
      metadata?: Record<string, unknown>;
      storage?: 'localStorage' | 'sessionStorage';
    } = {}
  ): DataRecord<T> {
    const id = this.generateId();
    const timestamp = Date.now();
    const size = this.calculateSize(data);

    const record: DataRecord<T> = {
      id,
      timestamp,
      ttl: options.ttl,
      data,
      category,
      type,
      version: this.VERSION,
      tags: options.tags,
      metadata: options.metadata
    };

    // Store the record
    this.storeRecord(record, options.storage || 'localStorage');

    logger.debug('Created data record', { id, category, type, size });
    return record;
  }

  /**
   * Get a data record by ID
   */
  getRecord<T>(id: string, storage: 'localStorage' | 'sessionStorage' = 'localStorage'): DataRecord<T> | null {
    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
      const key = this.getStorageKey(id);
      const item = storageObj.getItem(key);
      
      if (!item) {
        return null;
      }

      const record = JSON.parse(item) as DataRecord<T>;
      
      // Check if record is expired
      if (this.isRecordExpired(record)) {
        this.deleteRecord(id, storage);
        return null;
      }

      return record;
    } catch (error) {
      logger.error(`Failed to get record ${id}`, error as Error);
      return null;
    }
  }

  /**
   * Update a data record
   */
  updateRecord<T>(
    id: string,
    updates: Partial<Pick<DataRecord<T>, 'data' | 'ttl' | 'tags' | 'metadata'>>,
    storage: 'localStorage' | 'sessionStorage' = 'localStorage'
  ): DataRecord<T> | null {
    const existing = this.getRecord<T>(id, storage);
    if (!existing) {
      return null;
    }

    const updated: DataRecord<T> = {
      ...existing,
      ...updates,
      timestamp: Date.now() // Update timestamp on modification
    };

    this.storeRecord(updated, storage);
    logger.debug('Updated data record', { id });
    return updated;
  }

  /**
   * Delete a data record
   */
  deleteRecord(id: string, storage: 'localStorage' | 'sessionStorage' = 'localStorage'): boolean {
    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
      const key = this.getStorageKey(id);
      storageObj.removeItem(key);
      logger.debug('Deleted data record', { id });
      return true;
    } catch (error) {
      logger.error(`Failed to delete record ${id}`, error as Error);
      return false;
    }
  }

  /**
   * Query data records
   */
  queryRecords(query: RecordQuery = {}): DataRecord[] {
    const records: DataRecord[] = [];
    
    // Search localStorage
    records.push(...this.queryStorage('localStorage', query));
    
    // Search sessionStorage
    records.push(...this.queryStorage('sessionStorage', query));

    // Apply sorting and pagination
    records.sort((a, b) => b.timestamp - a.timestamp);

    if (query.offset) {
      records.splice(0, query.offset);
    }

    if (query.limit) {
      records.splice(query.limit);
    }

    return records;
  }

  /**
   * Get statistics about data records
   */
  getStats(): RecordStats {
    const records = this.queryRecords();
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * oneHour;
    const oneWeek = 7 * oneDay;

    const stats: RecordStats = {
      total: records.length,
      byCategory: {},
      byType: {},
      byAge: {
        recent: 0,
        old: 0,
        veryOld: 0,
        ancient: 0
      },
      totalSize: 0,
      averageSize: 0
    };

    records.forEach(record => {
      // Category stats
      stats.byCategory[record.category] = (stats.byCategory[record.category] || 0) + 1;
      
      // Type stats
      stats.byType[record.type] = (stats.byType[record.type] || 0) + 1;
      
      // Age stats
      const age = now - record.timestamp;
      if (age < oneHour) {
        stats.byAge.recent++;
      } else if (age < oneDay) {
        stats.byAge.old++;
      } else if (age < oneWeek) {
        stats.byAge.veryOld++;
      } else {
        stats.byAge.ancient++;
      }
      
      // Size stats
      const size = this.calculateSize(record);
      stats.totalSize += size;
    });

    stats.averageSize = stats.total > 0 ? stats.totalSize / stats.total : 0;

    return stats;
  }

  /**
   * Clean up expired records
   */
  cleanupExpired(storage: 'localStorage' | 'sessionStorage' = 'localStorage'): number {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const keysToDelete: string[] = [];

    for (let i = 0; i < storageObj.length; i++) {
      const key = storageObj.key(i);
      if (key && key.startsWith(this.PREFIX)) {
        try {
          const item = storageObj.getItem(key);
          if (item) {
            const record = JSON.parse(item) as DataRecord;
            if (this.isRecordExpired(record)) {
              keysToDelete.push(key);
            }
          }
        } catch (error) {
          // If we can't parse the record, consider it corrupted and delete it
          keysToDelete.push(key);
        }
      }
    }

    keysToDelete.forEach(key => storageObj.removeItem(key));
    
    logger.info(`Cleaned up ${keysToDelete.length} expired records from ${storage}`);
    return keysToDelete.length;
  }

  /**
   * Clean up old records by age
   */
  cleanupByAge(maxAge: number, storage: 'localStorage' | 'sessionStorage' = 'localStorage'): number {
    const records = this.queryStorage(storage);
    const now = Date.now();
    const oldRecords = records.filter(record => now - record.timestamp > maxAge);
    
    oldRecords.forEach(record => {
      this.deleteRecord(record.id, storage);
    });

    logger.info(`Cleaned up ${oldRecords.length} old records from ${storage}`);
    return oldRecords.length;
  }

  /**
   * Clean up records by category
   */
  cleanupByCategory(category: string, storage: 'localStorage' | 'sessionStorage' = 'localStorage'): number {
    const records = this.queryStorage(storage, { category });
    
    records.forEach(record => {
      this.deleteRecord(record.id, storage);
    });

    logger.info(`Cleaned up ${records.length} records from category '${category}' in ${storage}`);
    return records.length;
  }

  /**
   * Export records to JSON
   */
  exportRecords(query: RecordQuery = {}): string {
    const records = this.queryRecords(query);
    return JSON.stringify(records, null, 2);
  }

  /**
   * Import records from JSON
   */
  importRecords(jsonData: string, storage: 'localStorage' | 'sessionStorage' = 'localStorage'): number {
    try {
      const records = JSON.parse(jsonData) as DataRecord[];
      let imported = 0;

      records.forEach(record => {
        if (this.isValidRecord(record)) {
          this.storeRecord(record, storage);
          imported++;
        }
      });

      logger.info(`Imported ${imported} records to ${storage}`);
      return imported;
    } catch (error) {
      logger.error('Failed to import records', error as Error);
      throw error;
    }
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return `${this.PREFIX}${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get storage key for a record ID
   */
  private getStorageKey(id: string): string {
    return id.startsWith(this.PREFIX) ? id : `${this.PREFIX}${id}`;
  }

  /**
   * Store a record in storage
   */
  private storeRecord(record: DataRecord, storage: 'localStorage' | 'sessionStorage'): void {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const key = this.getStorageKey(record.id);
    storageObj.setItem(key, JSON.stringify(record));
  }

  /**
   * Query records from a specific storage
   */
  private queryStorage(
    storage: 'localStorage' | 'sessionStorage',
    query: RecordQuery = {}
  ): DataRecord[] {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const records: DataRecord[] = [];

    for (let i = 0; i < storageObj.length; i++) {
      const key = storageObj.key(i);
      if (key && key.startsWith(this.PREFIX)) {
        try {
          const item = storageObj.getItem(key);
          if (item) {
            const record = JSON.parse(item) as DataRecord;
            
            // Skip expired records
            if (this.isRecordExpired(record)) {
              continue;
            }

            // Apply filters
            if (query.category && record.category !== query.category) {
              continue;
            }
            if (query.type && record.type !== query.type) {
              continue;
            }
            if (query.tags && (!record.tags || !query.tags.some(tag => record.tags!.includes(tag)))) {
              continue;
            }
            if (query.minAge && Date.now() - record.timestamp < query.minAge) {
              continue;
            }
            if (query.maxAge && Date.now() - record.timestamp > query.maxAge) {
              continue;
            }

            records.push(record);
          }
        } catch (error) {
          // Skip corrupted records
          continue;
        }
      }
    }

    return records;
  }

  /**
   * Check if a record is expired
   */
  private isRecordExpired(record: DataRecord): boolean {
    if (!record.ttl) {
      return false;
    }
    return Date.now() - record.timestamp > record.ttl;
  }

  /**
   * Calculate the size of data in bytes
   */
  private calculateSize(data: unknown): number {
    try {
      return new Blob([JSON.stringify(data)]).size;
    } catch {
      return 0;
    }
  }

  /**
   * Validate a record structure
   */
  private isValidRecord(record: any): record is DataRecord {
    return (
      record &&
      typeof record.id === 'string' &&
      typeof record.timestamp === 'number' &&
      typeof record.category === 'string' &&
      typeof record.type === 'string' &&
      typeof record.version === 'string' &&
      record.data !== undefined
    );
  }
}

// Export singleton instance
export const dataRecordManager = new DataRecordManager();

// Export convenience functions
export const createDataRecord = <T>(
  data: T,
  category: string,
  type: string,
  options?: Parameters<typeof dataRecordManager.createRecord>[3]
) => dataRecordManager.createRecord(data, category, type, options);

export const getDataRecord = <T>(id: string, storage?: 'localStorage' | 'sessionStorage') =>
  dataRecordManager.getRecord<T>(id, storage);

export const updateDataRecord = <T>(
  id: string,
  updates: Parameters<typeof dataRecordManager.updateRecord>[1],
  storage?: 'localStorage' | 'sessionStorage'
) => dataRecordManager.updateRecord(id, updates, storage);

export const deleteDataRecord = (id: string, storage?: 'localStorage' | 'sessionStorage') =>
  dataRecordManager.deleteRecord(id, storage);

export const queryDataRecords = (query?: RecordQuery) => dataRecordManager.queryRecords(query);
export const getDataRecordStats = () => dataRecordManager.getStats();
export const cleanupExpiredRecords = (storage?: 'localStorage' | 'sessionStorage') =>
  dataRecordManager.cleanupExpired(storage);
export const cleanupOldRecords = (maxAge: number, storage?: 'localStorage' | 'sessionStorage') =>
  dataRecordManager.cleanupByAge(maxAge, storage);
export const cleanupRecordsByCategory = (category: string, storage?: 'localStorage' | 'sessionStorage') =>
  dataRecordManager.cleanupByCategory(category, storage);

export default dataRecordManager;