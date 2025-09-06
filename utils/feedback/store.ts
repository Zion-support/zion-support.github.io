

<<<<<<< HEAD
=======
<<<<<<< HEAD

export interface FeedbackRecord {;

// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise && Promise.resolve(true);
}

export type FeedbackRecord = {
<<<<<<< HEAD
=======
=======
=======

export interface FeedbackRecord {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  type: string;
  message: string;
  rating: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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

=======

export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
}

export function writeAll(rows: any[]): void {
  console.log("Writing feedback rows:", rows.length);
  // Implementation would write to database or file
}
<<<<<<< HEAD
=======

export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
