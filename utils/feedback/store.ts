
export interface FeedbackRecord {;
  id: string;
  type: string;
  message: string;
  rating: number;
  metadata: Record<string, any>;
  createdAt: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];
export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}
export function writeAll(rows: any[]): void {
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}
export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];
}
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

export interface FeedbackStats {
  total: number;
  averageRating: number;
  byKind: {
    bug: number;
    feature: number;
    general: number;
  };
  byRating: {
    [rating: number]: number;
  };
  recent: FeedbackRecord[];
}

class FeedbackStore {
  private feedback: FeedbackRecord[] = [];
  private maxRecords = 10000; // Limit to prevent memory issues

  async addFeedback(feedback: FeedbackRecord): Promise<boolean> {
    try {
      this.feedback.push(feedback);
      
      // Keep only the most recent records
      if (this.feedback.length > this.maxRecords) {
        this.feedback = this.feedback.slice(-this.maxRecords);
      }
      
      return true;
    } catch (error) {
      console.error('Error adding feedback:', error);
      return false;
    }
  }

  async getFeedback(limit: number = 100, offset: number = 0): Promise<FeedbackRecord[]> {
    return this.feedback
      .sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime())
      .slice(offset, offset + limit);
  }

  async getFeedbackById(id: string): Promise<FeedbackRecord | null> {
    return this.feedback.find(f => f.id === id) || null;
  }

  async getFeedbackByUser(userId: string): Promise<FeedbackRecord[]> {
    return this.feedback.filter(f => f.user?.id === userId);
  }

  async getFeedbackByKind(kind: FeedbackRecord['kind']): Promise<FeedbackRecord[]> {
    return this.feedback.filter(f => f.kind === kind);
  }

  async getFeedbackByRating(rating: number): Promise<FeedbackRecord[]> {
    return this.feedback.filter(f => f.rating === rating);
  }

  async getStats(): Promise<FeedbackStats> {
    const total = this.feedback.length;
    
    if (total === 0) {
      return {
        total: 0,
        averageRating: 0,
        byKind: { bug: 0, feature: 0, general: 0 },
        byRating: {},
        recent: []
      };
    }

    const averageRating = this.feedback.reduce((sum, f) => sum + f.rating, 0) / total;
    
    const byKind = {
      bug: this.feedback.filter(f => f.kind === 'bug').length,
      feature: this.feedback.filter(f => f.kind === 'feature').length,
      general: this.feedback.filter(f => f.kind === 'general').length
    };

    const byRating: { [rating: number]: number } = {};
    for (let i = 1; i <= 5; i++) {
      byRating[i] = this.feedback.filter(f => f.rating === i).length;
    }

    const recent = this.feedback
      .sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime())
      .slice(0, 10);

    return {
      total,
      averageRating: Math.round(averageRating * 100) / 100,
      byKind,
      byRating,
      recent
    };
  }

  async searchFeedback(query: string): Promise<FeedbackRecord[]> {
    const lowercaseQuery = query.toLowerCase();
    return this.feedback.filter(f => 
      f.comment?.toLowerCase().includes(lowercaseQuery) ||
      f.context?.toLowerCase().includes(lowercaseQuery) ||
      f.user?.talentSlug?.toLowerCase().includes(lowercaseQuery)
    );
  }

  async deleteFeedback(id: string): Promise<boolean> {
    const index = this.feedback.findIndex(f => f.id === id);
    if (index === -1) return false;
    
    this.feedback.splice(index, 1);
    return true;
  }

  async clearFeedback(): Promise<void> {
    this.feedback = [];
  }

  async exportFeedback(format: 'json' | 'csv' = 'json'): Promise<string> {
    if (format === 'csv') {
      const headers = ['id', 'createdAtIso', 'userId', 'role', 'talentSlug', 'rating', 'comment', 'kind', 'context'];
      const rows = this.feedback.map(f => [
        f.id,
        f.createdAtIso,
        f.user?.id || '',
        f.user?.role || '',
        f.user?.talentSlug || '',
        f.rating,
        f.comment || '',
        f.kind,
        f.context || ''
      ]);
      
      return [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    }
    
    return JSON.stringify(this.feedback, null, 2);
  }

  // Utility methods
  getFeedbackCount(): number {
    return this.feedback.length;
  }

  getRecentFeedback(count: number = 5): FeedbackRecord[] {
    return this.feedback
      .sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime())
      .slice(0, count);
  }
}

// Singleton instance
export const feedbackStore = new FeedbackStore();

// Utility functions
export function createFeedbackRecord(
  rating: number,
  comment?: string,
  kind: FeedbackRecord['kind'] = 'general',
  context?: string,
  user?: FeedbackRecord['user']
): FeedbackRecord {
  return {
    id: `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAtIso: new Date().toISOString(),
    user,
    rating,
    comment,
    kind,
    context
  };
}

export function validateFeedbackRecord(feedback: any): feedback is FeedbackRecord {
  return (
    typeof feedback === 'object' &&
    typeof feedback.id === 'string' &&
    typeof feedback.createdAtIso === 'string' &&
    typeof feedback.rating === 'number' &&
    feedback.rating >= 1 &&
    feedback.rating <= 5 &&
    typeof feedback.kind === 'string' &&
    ['bug', 'feature', 'general'].includes(feedback.kind)
  );
}

export function generateFeedbackId(): string {
  return `feedback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];


export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}

export function writeAll(rows: any[]): void {;
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}

export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];

}
