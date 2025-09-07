export interface Feedback {
  id: string;
  userId: string;
  content: string;
  rating: number;
  category: string;
  createdAt: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

export interface FeedbackStore {
  feedback: Feedback[];
  addFeedback: (feedback: Omit<Feedback, 'id' | 'createdAt'>) => void;
  updateFeedback: (id: string, updates: Partial<Feedback>) => void;
  getFeedback: (id: string) => Feedback | undefined;
  getAllFeedback: () => Feedback[];
}

class FeedbackStoreImpl implements FeedbackStore {
  feedback: Feedback[] = [];

  addFeedback(feedback: Omit<Feedback, 'id' | 'createdAt'>): void {
    const newFeedback: Feedback = {
      ...feedback,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    this.feedback.push(newFeedback);
  }

  updateFeedback(id: string, updates: Partial<Feedback>): void {
    const index = this.feedback.findIndex(f => f.id === id);
    if (index !== -1) {
      this.feedback[index] = { ...this.feedback[index], ...updates };
    }
  }

  getFeedback(id: string): Feedback | undefined {
    return this.feedback.find(f => f.id === id);
  }

  getAllFeedback(): Feedback[] {
    return [...this.feedback];
  }
}

export const feedbackStore = new FeedbackStoreImpl();