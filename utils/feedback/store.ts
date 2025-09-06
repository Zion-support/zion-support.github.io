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
  context?: Record<string, any>;
}

class FeedbackStore {
  private feedback: FeedbackRecord[] = [];

  save(feedback: FeedbackRecord): void {
    this.feedback.push(feedback);
  }

  getAll(): FeedbackRecord[] {
    return [...this.feedback];
  }

  getByKind(kind: FeedbackRecord['kind']): FeedbackRecord[] {
    return this.feedback.filter(f => f.kind === kind);
  }

  getByRating(minRating: number, maxRating: number = 5): FeedbackRecord[] {
    return this.feedback.filter(f => f.rating >= minRating && f.rating <= maxRating);
  }

  getStats(): {
    total: number;
    averageRating: number;
    byKind: Record<string, number>;
    byRating: Record<number, number>;
  } {
    const total = this.feedback.length;
    const averageRating = total > 0 
      ? this.feedback.reduce((sum, f) => sum + f.rating, 0) / total 
      : 0;
    
    const byKind = this.feedback.reduce((acc, f) => {
      acc[f.kind] = (acc[f.kind] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const byRating = this.feedback.reduce((acc, f) => {
      acc[f.rating] = (acc[f.rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    
    return {
      total,
      averageRating,
      byKind,
      byRating
    };
  }
}

let feedbackStoreInstance: FeedbackStore | null = null;

export function getFeedbackStore(): FeedbackStore {
  if (!feedbackStoreInstance) {
    feedbackStoreInstance = new FeedbackStore();
  }
  return feedbackStoreInstance;
}

export function saveFeedbackFallback(feedback: FeedbackRecord): void {
  const store = getFeedbackStore();
  store.save(feedback);
}