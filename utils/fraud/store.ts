// Fraud detection store utilities
import fs from 'fs';
import path from 'path';

export interface FraudEvent {
  source: string;
  userId?: string;
  content: string;
  metadata: Record<string, any>;
  timestamp: string;
}

export interface HeuristicAnalysis {
  severity: 'low' | 'medium' | 'high';
  reasons: string[];
  confidence: number;
}

export interface GPTAnalysis {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  reasoning: string;
  confidence: number;
}

export interface StoredFraudRecord extends FraudEvent {
  id: string;
  heuristic: HeuristicAnalysis;
  gpt?: GPTAnalysis;
  autoHidden: boolean;
  status: 'PENDING' | 'REVIEWED' | 'RESOLVED';
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FraudFilter {
  source?: string;
  userId?: string;
  status?: string;
  label?: string;
}

class FraudStore {
  private dataDir: string;
  private dataFile: string;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'data', 'fraud');
    this.dataFile = path.join(this.dataDir, 'records.json');
    this.ensureDirectoryExists();
  }

  private ensureDirectoryExists(): void {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private readRecords(): StoredFraudRecord[] {
    try {
      if (!fs.existsSync(this.dataFile)) {
        return [];
      }
      const data = fs.readFileSync(this.dataFile, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to read fraud records:', error);
      return [];
    }
  }

  private writeRecords(records: StoredFraudRecord[]): void {
    try {
      fs.writeFileSync(this.dataFile, JSON.stringify(records, null, 2));
    } catch (error) {
      console.error('Failed to write fraud records:', error);
    }
  }

  async saveEvent(event: Omit<StoredFraudRecord, 'id'>): Promise<StoredFraudRecord> {
    const records = this.readRecords();
    const newRecord: StoredFraudRecord = {
      ...event,
      id: `fraud_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    records.push(newRecord);
    this.writeRecords(records);
    return newRecord;
  }

  async getRecord(id: string): Promise<StoredFraudRecord | null> {
    const records = this.readRecords();
    return records.find(r => r.id === id) || null;
  }

  async updateRecord(id: string, updates: Partial<StoredFraudRecord>): Promise<StoredFraudRecord | null> {
    const records = this.readRecords();
    const index = records.findIndex(r => r.id === id);
    if (index === -1) return null;

    records[index] = {
      ...records[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.writeRecords(records);
    return records[index];
  }

  async listFlagged(limit: number = 50, offset: number = 0, filter: FraudFilter = {}): Promise<StoredFraudRecord[]> {
    let records = this.readRecords();

    // Apply filters
    if (filter.source) {
      records = records.filter(r => r.source === filter.source);
    }
    if (filter.userId) {
      records = records.filter(r => r.userId === filter.userId);
    }
    if (filter.status) {
      records = records.filter(r => r.status === filter.status);
    }
    if (filter.label) {
      records = records.filter(r => r.gpt?.label === filter.label);
    }

    // Sort by creation date (newest first)
    records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Apply pagination
    return records.slice(offset, offset + limit);
  }

  async getStats(): Promise<{
    total: number;
    byStatus: Record<string, number>;
    bySource: Record<string, number>;
    byLabel: Record<string, number>;
    recent: number;
  }> {
    const records = this.readRecords();
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const stats = {
      total: records.length,
      byStatus: {} as Record<string, number>,
      bySource: {} as Record<string, number>,
      byLabel: {} as Record<string, number>,
      recent: 0
    };

    records.forEach(record => {
      // Status counts
      stats.byStatus[record.status] = (stats.byStatus[record.status] || 0) + 1;
      
      // Source counts
      stats.bySource[record.source] = (stats.bySource[record.source] || 0) + 1;
      
      // Label counts
      const label = record.gpt?.label || 'UNKNOWN';
      stats.byLabel[label] = (stats.byLabel[label] || 0) + 1;
      
      // Recent counts
      if (new Date(record.createdAt) > oneDayAgo) {
        stats.recent++;
      }
    });

    return stats;
  }

  async deleteRecord(id: string): Promise<boolean> {
    const records = this.readRecords();
    const filtered = records.filter(r => r.id !== id);
    if (filtered.length === records.length) return false;
    
    this.writeRecords(filtered);
    return true;
  }

  async clearOldRecords(daysOld: number = 30): Promise<number> {
    const records = this.readRecords();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const filtered = records.filter(r => new Date(r.createdAt) > cutoffDate);
    const deletedCount = records.length - filtered.length;
    
    this.writeRecords(filtered);
    return deletedCount;
  }
}

let fraudStoreInstance: FraudStore | null = null;

export function getFraudStore(): FraudStore {
  if (!fraudStoreInstance) {
    fraudStoreInstance = new FraudStore();
  }
  return fraudStoreInstance;
}