'use client';
/**
 * Data Record Manager
 * Manages data records with TTL, categorization, and storage options
 */
import { logger } from '../../utils/logger';

export interface DataRecord {
  id: string;
  timestamp: number;
  ttl?: number;
  data: unknown;
  type?: string;
  category?: string;
  version?: string;
  metadata?: Record<string, unknown>;
}

export interface RecordQuery {
  category?: string;
  type?: string;
  minAge?: number;
  maxAge?: number;
  limit?: number;
}

export interface RecordStats {
  total: number;
  byCategory: Record<string, number>;
  byType: Record<string, number>;
  byAge: {
    recent: number; // < 1 hour
    old: number; // 1 hour - 1 day
    veryOld: number; // > 1 day
  };
  storageBreakdown: {
    localStorage: number;
    sessionStorage: number;
    memory: number;
  };
}

export interface DataRecordManager {
  createRecord(
    data: unknown,
    category?: string,
    type?: string,
    options?: { ttl?: number; storage?: 'localStorage' | 'sessionStorage' | 'memory' }
  ): DataRecord;
  getRecord(id: string): DataRecord | null;
  updateRecord(id: string, updates: Partial<DataRecord>): boolean;
  deleteRecord(id: string): boolean;
  queryRecords(query: RecordQuery): DataRecord[];
  getStats(): RecordStats;
  exportRecords(query?: RecordQuery): DataRecord[];
  importRecords(records: DataRecord[], storage?: 'localStorage' | 'sessionStorage' | 'memory'): number;
  cleanup(): { deleted: number; errors: number };
}

class DataRecordManagerImpl implements DataRecordManager {
  private readonly prefix = 'data_record_';
  private readonly version = '1.0.0';

  /**
   * Create a new data record
   */
  createRecord(
    data: unknown,
    category?: string,
    type?: string,
    options: { ttl?: number; storage?: 'localStorage' | 'sessionStorage' | 'memory' } = {}
  ): DataRecord {
    const id = this.generateId();
    const timestamp = Date.now();
    const record: DataRecord = {
      id,
      timestamp,
      data,
      category,
      type,
      version: this.version,
      ttl: options.ttl
    };

    // Store the record
    this.storeRecord(record, options.storage || 'localStorage');
    
    logger.debug('Created data record', { id, category, type });
    return record;
  }

  /**
   * Get a data record by ID
   */
  getRecord(id: string): DataRecord | null {
    try {
      // Try localStorage first
      const localRecord = this.getRecordFromStorage(id, 'localStorage');
      if (localRecord) return localRecord;

      // Try sessionStorage
      const sessionRecord = this.getRecordFromStorage(id, 'sessionStorage');
      if (sessionRecord) return sessionRecord;

      // Try memory (placeholder)
      const memoryRecord = this.getRecordFromMemory(id);
      if (memoryRecord) return memoryRecord;

      return null;
    } catch (error) {
      logger.error('Failed to get record', error as Error, { id });
      return null;
    }
  }

  /**
   * Update a data record
   */
  updateRecord(id: string, updates: Partial<DataRecord>): boolean {
    try {
      const record = this.getRecord(id);
      if (!record) return false;

      const updatedRecord = { ...record, ...updates, id, timestamp: record.timestamp };
      
      // Update in storage
      this.storeRecord(updatedRecord, this.getRecordStorage(id));
      
      logger.debug('Updated data record', { id, updates });
      return true;
    } catch (error) {
      logger.error('Failed to update record', error as Error, { id });
      return false;
    }
  }

  /**
   * Delete a data record
   */
  deleteRecord(id: string): boolean {
    try {
      const storage = this.getRecordStorage(id);
      if (!storage) return false;

      if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(id);
      } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(id);
      } else if (storage === 'memory') {
        this.deleteRecordFromMemory(id);
      }

      logger.debug('Deleted data record', { id });
      return true;
    } catch (error) {
      logger.error('Failed to delete record', error as Error, { id });
      return false;
    }
  }

  /**
   * Query data records
   */
  queryRecords(query: RecordQuery): DataRecord[] {
    const records: DataRecord[] = [];
    const now = Date.now();

    // Get all records from all storage types
    const allRecords = this.getAllRecords();

    for (const record of allRecords) {
      // Apply filters
      if (query.category && record.category !== query.category) continue;
      if (query.type && record.type !== query.type) continue;

      // Age filters
      if (query.minAge !== undefined) {
        const age = now - record.timestamp;
        if (age < query.minAge) continue;
      }
      if (query.maxAge !== undefined) {
        const age = now - record.timestamp;
        if (age > query.maxAge) continue;
      }

      records.push(record);
    }

    // Sort by timestamp (newest first)
    records.sort((a, b) => b.timestamp - a.timestamp);

    // Apply limit
    if (query.limit !== undefined) {
      return records.slice(0, query.limit);
    }

    return records;
  }

  /**
   * Get statistics about data records
   */
  getStats(): RecordStats {
    const records = this.getAllRecords();
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * oneHour;

    const stats: RecordStats = {
      total: records.length,
      byCategory: {},
      byType: {},
      byAge: {
        recent: 0,
        old: 0,
        veryOld: 0
      },
      storageBreakdown: {
        localStorage: 0,
        sessionStorage: 0,
        memory: 0
      }
    };

    for (const record of records) {
      // Category stats
      if (record.category) {
        stats.byCategory[record.category] = (stats.byCategory[record.category] || 0) + 1;
      }

      // Type stats
      if (record.type) {
        stats.byType[record.type] = (stats.byType[record.type] || 0) + 1;
      }

      // Age stats
      const age = now - record.timestamp;
      if (age < oneHour) {
        stats.byAge.recent++;
      } else if (age < oneDay) {
        stats.byAge.old++;
      } else {
        stats.byAge.veryOld++;
      }

      // Storage breakdown
      const storage = this.getRecordStorage(record.id);
      if (storage) {
        stats.storageBreakdown[storage]++;
      }
    }

    return stats;
  }

  /**
   * Export records
   */
  exportRecords(query?: RecordQuery): DataRecord[] {
    if (query) {
      return this.queryRecords(query);
    }
    return this.getAllRecords();
  }

  /**
   * Import records
   */
  importRecords(records: DataRecord[], storage: 'localStorage' | 'sessionStorage' | 'memory' = 'localStorage'): number {
    let imported = 0;

    for (const record of records) {
      try {
        this.storeRecord(record, storage);
        imported++;
      } catch (error) {
        logger.error('Failed to import record', error as Error, { id: record.id });
      }
    }

    logger.info('Imported records', { imported, total: records.length });
    return imported;
  }

  /**
   * Clean up expired records
   */
  cleanup(): { deleted: number; errors: number } {
    const records = this.getAllRecords();
    const now = Date.now();
    let deleted = 0;
    let errors = 0;

    for (const record of records) {
      try {
        // Check if record is expired
        const age = now - record.timestamp;
        const isExpired = record.ttl ? age > record.ttl : false;

        if (isExpired) {
          if (this.deleteRecord(record.id)) {
            deleted++;
          } else {
            errors++;
          }
        }
      } catch (error) {
        logger.error('Failed to cleanup record', error as Error, { id: record.id });
        errors++;
      }
    }

    logger.info('Cleanup completed', { deleted, errors });
    return { deleted, errors };
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return `${this.prefix}${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Store a record in the specified storage
   */
  private storeRecord(record: DataRecord, storage: 'localStorage' | 'sessionStorage' | 'memory'): void {
    if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(record.id, JSON.stringify(record));
    } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(record.id, JSON.stringify(record));
    } else if (storage === 'memory') {
      this.storeRecordInMemory(record);
    }
  }

  /**
   * Get a record from specific storage
   */
  private getRecordFromStorage(id: string, storage: 'localStorage' | 'sessionStorage'): DataRecord | null {
    try {
      if (storage === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
        const value = window.localStorage.getItem(id);
        return value ? JSON.parse(value) : null;
      } else if (storage === 'sessionStorage' && typeof window !== 'undefined' && window.sessionStorage) {
        const value = window.sessionStorage.getItem(id);
        return value ? JSON.parse(value) : null;
      }
      return null;
    } catch (error) {
      logger.warn('Failed to parse record from storage', { id, storage, error: (error as Error).message });
      return null;
    }
  }

  /**
   * Get a record from memory (placeholder)
   */
  private getRecordFromMemory(id: string): DataRecord | null {
    // Placeholder implementation
    return null;
  }

  /**
   * Store a record in memory (placeholder)
   */
  private storeRecordInMemory(record: DataRecord): void {
    // Placeholder implementation
    logger.debug('Storing record in memory', { id: record.id });
  }

  /**
   * Delete a record from memory (placeholder)
   */
  private deleteRecordFromMemory(id: string): void {
    // Placeholder implementation
    logger.debug('Deleting record from memory', { id });
  }

  /**
   * Get all records from all storage types
   */
  private getAllRecords(): DataRecord[] {
    const records: DataRecord[] = [];

    // Get from localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          const record = this.getRecordFromStorage(key, 'localStorage');
          if (record) records.push(record);
        }
      }
    }

    // Get from sessionStorage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          const record = this.getRecordFromStorage(key, 'sessionStorage');
          if (record) records.push(record);
        }
      }
    }

    // Get from memory (placeholder)
    // records.push(...this.getMemoryRecords());

    return records;
  }

  /**
   * Determine which storage contains a record
   */
  private getRecordStorage(id: string): 'localStorage' | 'sessionStorage' | 'memory' | null {
    if (typeof window !== 'undefined') {
      if (window.localStorage && window.localStorage.getItem(id)) {
        return 'localStorage';
      }
      if (window.sessionStorage && window.sessionStorage.getItem(id)) {
        return 'sessionStorage';
      }
    }
    return null; // or 'memory' if implemented
  }
}

// Export singleton instance
export const dataRecordManager = new DataRecordManagerImpl();

};

export default dataRecordManager;