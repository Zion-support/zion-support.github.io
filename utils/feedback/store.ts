// Feedback store utilities
import fs from 'fs';
import path from 'path';

export interface FeedbackRecord {
  id: string;
  createdAtIso: string;
  user?: {
    id?: string;
    role?: string;
    talentSlug?: string;
  };
  rating: number;
  comment?: string;
  kind: 'bug' | 'feature' | 'general';
  context?: string;
}

export interface FeedbackStats {
  total: number;
  averageRating: number;
  byKind: Record<string, number>;
  byRating: Record<number, number>;
  recent: number;
}

class FeedbackStore {
  private dataDir: string;
  private dataFile: string;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'data', 'feedback');
    this.dataFile = path.join(this.dataDir, 'records.json');
    this.ensureDirectoryExists();
  }

  private ensureDirectoryExists(): void {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private readRecords(): FeedbackRecord[] {
    try {
      if (!fs.existsSync(this.dataFile)) {
        return [];
      }
      const data = fs.readFileSync(this.dataFile, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to read feedback records:', error);
      return [];
    }
  }

  private writeRecords(records: FeedbackRecord[]): void {
    try {
      fs.writeFileSync(this.dataFile, JSON.stringify(records, null, 2));
    } catch (error) {
      console.error('Failed to write feedback records:', error);
    }
  }

  async saveFeedback(feedback: FeedbackRecord): Promise<FeedbackRecord> {
    const records = this.readRecords();
    records.push(feedback);
    this.writeRecords(records);
    return feedback;
  }

  async getFeedback(limit: number = 50, offset: number = 0): Promise<FeedbackRecord[]> {
    const records = this.readRecords();
    return records
      .sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime())
      .slice(offset, offset + limit);
  }

  async getFeedbackById(id: string): Promise<FeedbackRecord | null> {
    const records = this.readRecords();
    return records.find(r => r.id === id) || null;
  }

  async getStats(): Promise<FeedbackStats> {
    const records = this.readRecords();
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const stats: FeedbackStats = {
      total: records.length,
      averageRating: 0,
      byKind: {},
      byRating: {},
      recent: 0
    };

    if (records.length > 0) {
      const totalRating = records.reduce((sum, r) => sum + r.rating, 0);
      stats.averageRating = totalRating / records.length;

      records.forEach(record => {
        // By kind
        stats.byKind[record.kind] = (stats.byKind[record.kind] || 0) + 1;
        
        // By rating
        stats.byRating[record.rating] = (stats.byRating[record.rating] || 0) + 1;
        
        // Recent
        if (new Date(record.createdAtIso) > oneDayAgo) {
          stats.recent++;
        }
      });
    }

    return stats;
  }

  async searchFeedback(query: string): Promise<FeedbackRecord[]> {
    const records = this.readRecords();
    const lowercaseQuery = query.toLowerCase();
    
    return records.filter(record => 
      record.comment?.toLowerCase().includes(lowercaseQuery) ||
      record.context?.toLowerCase().includes(lowercaseQuery) ||
      record.kind.toLowerCase().includes(lowercaseQuery)
    );
  }

  async getFeedbackByUser(userId: string): Promise<FeedbackRecord[]> {
    const records = this.readRecords();
    return records.filter(r => r.user?.id === userId);
  }

  async deleteFeedback(id: string): Promise<boolean> {
    const records = this.readRecords();
    const filtered = records.filter(r => r.id !== id);
    if (filtered.length === records.length) return false;
    
    this.writeRecords(filtered);
    return true;
  }

  async exportFeedback(): Promise<string> {
    const records = this.readRecords();
    return JSON.stringify(records, null, 2);
  }

  async clearOldFeedback(daysOld: number = 90): Promise<number> {
    const records = this.readRecords();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const filtered = records.filter(r => new Date(r.createdAtIso) > cutoffDate);
    const deletedCount = records.length - filtered.length;
    
    this.writeRecords(filtered);
    return deletedCount;
  }
}

let feedbackStoreInstance: FeedbackStore | null = null;

export function getFeedbackStore(): FeedbackStore {
  if (!feedbackStoreInstance) {
    feedbackStoreInstance = new FeedbackStore();
  }
  return feedbackStoreInstance;
}