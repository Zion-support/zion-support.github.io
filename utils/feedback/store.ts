

<<<<<<< HEAD
export interface FeedbackRecord {;

export interface FeedbackRecord {
export interface FeedbackRecord {;
=======
=======

export interface FeedbackRecord {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  type: string;
  message: string;
  rating: number;
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
=======
=======
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
}
export function write_all (rows: any[]): void {
  console.log ('Writing feedback rows:', rows.length);
  // Implementation would write to database or file;
}
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
<<<<<<< HEAD

}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
