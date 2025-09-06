// Feedback store utilities
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

// In-memory storage for development
const feedbackRecords: FeedbackRecord[] = [];

export class FeedbackStore {
  async save(record: FeedbackRecord): Promise<FeedbackRecord> {
    feedbackRecords.push(record);
    return record;
  }

  async getAll(): Promise<FeedbackRecord[]> {
    return [...feedbackRecords];
  }

  async getById(id: string): Promise<FeedbackRecord | null> {
    return feedbackRecords.find(r => r.id === id) || null;
  }

  async getByKind(kind: string): Promise<FeedbackRecord[]> {
    return feedbackRecords.filter(r => r.kind === kind);
  }

  async getByRating(minRating: number): Promise<FeedbackRecord[]> {
    return feedbackRecords.filter(r => r.rating >= minRating);
  }

  async getStats(): Promise<{
    total: number;
    byKind: Record<string, number>;
    byRating: Record<number, number>;
    averageRating: number;
  }> {
    const total = feedbackRecords.length;
    const byKind = feedbackRecords.reduce((acc, r) => {
      acc[r.kind] = (acc[r.kind] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const byRating = feedbackRecords.reduce((acc, r) => {
      acc[r.rating] = (acc[r.rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    
    const averageRating = total > 0 
      ? feedbackRecords.reduce((sum, r) => sum + r.rating, 0) / total 
      : 0;

    return {
      total,
      byKind,
      byRating,
      averageRating
    };
  }
}

// Default instance
export const feedbackStore = new FeedbackStore();