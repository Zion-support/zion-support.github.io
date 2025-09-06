import { createFSDB } from './fsdb';

export interface FeedbackRecord {
  id: string;
  createdAtIso: string;
  user: {
    id?: string;
    role?: string;
    talentSlug?: string;
  };
  rating: number;
  comment?: string;
  kind: 'bug' | 'feature' | 'general';
  context?: string;
}

const feedbackDB = createFSDB('feedback');

export const feedbackStore = {
  async create(feedback: Omit<FeedbackRecord, 'id' | 'createdAtIso'>): Promise<FeedbackRecord> {
    const now = new Date().toISOString();
    return feedbackDB.create({
      ...feedback,
      createdAtIso: now
    });
  },

  async findById(id: string): Promise<FeedbackRecord | null> {
    return feedbackDB.findById(id);
  },

  async list(limit: number = 50, offset: number = 0): Promise<FeedbackRecord[]> {
    const all = await feedbackDB.find();
    return all.slice(offset, offset + limit);
  },

  async findByKind(kind: 'bug' | 'feature' | 'general'): Promise<FeedbackRecord[]> {
    return feedbackDB.find({ kind });
  },

  async findByRating(minRating: number): Promise<FeedbackRecord[]> {
    const all = await feedbackDB.find();
    return all.filter(feedback => feedback.rating >= minRating);
  }
};