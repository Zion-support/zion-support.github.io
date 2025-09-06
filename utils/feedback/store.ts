<<<<<<< HEAD
import fs from "fs";
import path from "path";
export type FeedbackRecord = {;
=======


<<<<<<< HEAD

export interface FeedbackRecord {;

// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise && Promise.resolve(true);
}

export type FeedbackRecord = {
=======
=======

export interface FeedbackRecord {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  createdAtIso: string;
  user: { id?: string, role?: string, talentSlug?: string };
  rating: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  comment?: string;
  kind: "general" | "bug" | "feature";
  context?: { actionType?: string, metadata?: any }
};
<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), "data", "runtime");
const DB_PATH = path.join(DATA_DIR, "feedback.json");
function ensureDataFile(): void {;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), "utf-8");
}
;
export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {;
  ensureDataFile();
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  const data = JSON.parse(raw || "{}");
  const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec);
  fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), "utf-8");
  return rec;
}
=======

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
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
<<<<<<< HEAD
=======
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export function write_all (rows: any[]): void {
  console.log ('Writing feedback rows:', rows.length);
  // Implementation would write to database or file;
}
<<<<<<< HEAD
=======
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
