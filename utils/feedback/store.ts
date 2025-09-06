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

class FeedbackStore {
  private records: FeedbackRecord[] = [];

  async save(record: FeedbackRecord): Promise<void> {
    this.records.push(record);
  }

  async getAll(): Promise<FeedbackRecord[]> {
    return this.records;
  }

  async getById(id: string): Promise<FeedbackRecord | null> {
    return this.records.find(r => r.id === id) || null;
  }

  async getByRating(minRating: number, maxRating: number): Promise<FeedbackRecord[]> {
    return this.records.filter(r => r.rating >= minRating && r.rating <= maxRating);
  }

  async getByKind(kind: FeedbackRecord['kind']): Promise<FeedbackRecord[]> {
    return this.records.filter(r => r.kind === kind);
  }

  async getStats(): Promise<{
    total: number;
    averageRating: number;
    byKind: Record<string, number>;
    byRating: Record<number, number>;
  }> {
    const total = this.records.length;
    const averageRating = total > 0 ? this.records.reduce((sum, r) => sum + r.rating, 0) / total : 0;
    
    const byKind = this.records.reduce((acc, r) => {
      acc[r.kind] = (acc[r.kind] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byRating = this.records.reduce((acc, r) => {
      acc[r.rating] = (acc[r.rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    return {
      total,
      averageRating: Math.round(averageRating * 100) / 100,
      byKind,
      byRating
    };
  }
}

const feedbackStore = new FeedbackStore();

export function getFeedbackStore(): FeedbackStore {
  return feedbackStore;
}

export function saveFeedbackFallback(record: FeedbackRecord): void {
  // In a real app, this would save to a file or database
  console.log('Saving feedback fallback:', record);
  feedbackStore.save(record);
}