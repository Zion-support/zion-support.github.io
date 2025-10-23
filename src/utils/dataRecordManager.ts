/**
 * Data Record Manager
 * Manages data records in localStorage with TTL support
 */

export interface DataRecord {
  id: string;
  timestamp: number;
  data: any;
  category: string;
  type: string;
  version: string;
  ttl?: number;
}

export interface RecordQuery {
  category?: string;
  type?: string;
  minAge?: number;
  maxAge?: number;
}

export interface RecordStats {
  total: number;
  byCategory: Record<string, number>;
  byType: Record<string, number>;
  byAge: {
    recent: number;
    old: number;
    veryOld: number;
  };
}

class DataRecordManager {
  private readonly PREFIX = 'data_record_';

  createRecord(
    data: any,
    category: string,
    type: string,
    options: { ttl?: number } = {}
  ): DataRecord {
    const id = `${this.PREFIX}${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const record: DataRecord = {
      id,
      timestamp: Date.now(),
      data,
      category,
      type,
      version: '1.0.0',
      ttl: options.ttl,
    };

    try {
      localStorage.setItem(id, JSON.stringify(record));
      return record;
    } catch (error) {
      console.error('Failed to create data record:', error);
      throw error;
    }
  }

  getRecord(id: string): DataRecord | null {
    try {
      const key = id.startsWith(this.PREFIX) ? id : `${this.PREFIX}${id}`;
      const recordData = localStorage.getItem(key);
      
      if (!recordData) {
        return null;
      }

      const record: DataRecord = JSON.parse(recordData);
      
      // Check TTL
      if (record.ttl && Date.now() - record.timestamp > record.ttl) {
        this.deleteRecord(id);
        return null;
      }

      return record;
    } catch (error) {
      console.error('Failed to get data record:', error);
      return null;
    }
  }

  queryRecords(query: RecordQuery): DataRecord[] {
    const records: DataRecord[] = [];
    const now = Date.now();

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.PREFIX)) {
          const recordData = localStorage.getItem(key);
          if (recordData) {
            const record: DataRecord = JSON.parse(recordData);
            
            // Check TTL
            if (record.ttl && now - record.timestamp > record.ttl) {
              this.deleteRecord(record.id);
              continue;
            }

            // Apply filters
            if (query.category && record.category !== query.category) {
              continue;
            }
            if (query.type && record.type !== query.type) {
              continue;
            }
            if (query.minAge && now - record.timestamp < query.minAge) {
              continue;
            }
            if (query.maxAge && now - record.timestamp > query.maxAge) {
              continue;
            }

            records.push(record);
          }
        }
      }
    } catch (error) {
      console.error('Failed to query data records:', error);
    }

    return records;
  }

  deleteRecord(id: string): boolean {
    try {
      const key = id.startsWith(this.PREFIX) ? id : `${this.PREFIX}${id}`;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Failed to delete data record:', error);
      return false;
    }
  }

  getStats(): RecordStats {
    const stats: RecordStats = {
      total: 0,
      byCategory: {},
      byType: {},
      byAge: {
        recent: 0,
        old: 0,
        veryOld: 0,
      },
    };

    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.PREFIX)) {
          const recordData = localStorage.getItem(key);
          if (recordData) {
            const record: DataRecord = JSON.parse(recordData);
            
            // Check TTL
            if (record.ttl && now - record.timestamp > record.ttl) {
              this.deleteRecord(record.id);
              continue;
            }

            stats.total++;
            
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
            } else {
              stats.byAge.veryOld++;
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to get data record stats:', error);
    }

    return stats;
  }

  clearExpired(): number {
    let cleared = 0;
    const now = Date.now();

    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.PREFIX)) {
          const recordData = localStorage.getItem(key);
          if (recordData) {
            const record: DataRecord = JSON.parse(recordData);
            
            if (record.ttl && now - record.timestamp > record.ttl) {
              localStorage.removeItem(key);
              cleared++;
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to clear expired records:', error);
    }

    return cleared;
  }
}

export const dataRecordManager = new DataRecordManager();