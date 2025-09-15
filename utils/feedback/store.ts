






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



  id: string;
  type: string;
  message: string;
  rating: number;



  metadata: Record<string, any>;
  createdAt: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



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
}

export function writeAll(rows: any[]): void {;
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}

export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];
export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}

export function writeAll(rows: any[]): void {;
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}
export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];


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

