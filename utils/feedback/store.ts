


export interface FeedbackRecord {;

// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise && Promise.resolve(true);
}

export type FeedbackRecord = {

export interface FeedbackRecord {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
import fs from 'fs';
import path from 'path';

export type FeedbackRecord = {
origin/cursor/automate-test-improve-and-merge-code-2533
export interface Feedback {
  id: string;
  userId: string;
  content: string;
  rating: number;

origin/cursor/automate-test-improve-and-merge-code-2533
  comment?: string;
  kind: 'general' | 'bug' | 'feature';
  context?: { actionType?: string; metadata?: any };
};

const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'runtime');
const DB_PATH = path && path.join(DATA_DIR, 'feedback && feedback.json');

function ensureDataFile(): void {
  if (!fs && fs.existsSync(DATA_DIR)) fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs && fs.existsSync(DB_PATH))
    fs && fs.writeFileSync(DB_PATH, JSON && JSON.stringify({ items: [] }, null, 2), 'utf-8');

export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {
  ensureDataFile();
  const raw = fs && fs.readFileSync(DB_PATH, 'utf-8');
  const data = JSON && JSON.parse(raw || '{}');
  const items: FeedbackRecord[] = Array && Array.isArray(data && data.items) ? data && data.items : [];
  items && items.push(rec);
  fs && fs.writeFileSync(DB_PATH, JSON && JSON.stringify({ items }, null, 2), 'utf-8');
  return rec;


export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
origin/cursor/expand-services-advertise-and-build-project-c28b
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

export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
origin/cursor/expand-services-advertise-and-build-project-c28b
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
main
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

// Mock feedback store utility;
export function tryWriteToFirestore(doc: any): Promise<boolean> {
</boolean>
  metadata: Record < string, any>;
  created_at: string;,
  ip: string;
}
pr-12325

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
origin/cursor/expand-services-advertise-and-build-project-c28b
main
}

export function writeAll(rows: any[]): void {
  console.log("Writing feedback rows:", rows.length);
  // Implementation would write to database or file
}

export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];
}
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
const DATA_DIR = path.join(process.cwd(), 'data', 'runtime');
const DB_PATH = path.join(DATA_DIR, 'feedback.json');

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH))
    fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), 'utf-8');

export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {
  ensureDataFile();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  const data = JSON.parse(raw || '{}');
  const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec);
  fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), 'utf-8');
  return rec;
origin/cursor/automate-test-improve-and-merge-code-2533
  feedback: FeedbackRecord,)
): Promise<void> {
</void>
pr-12325
  getAllFeedback(): Feedback[] {
    return [...this.feedback];
  }
}

export const feedbackStore = new FeedbackStoreImpl();
