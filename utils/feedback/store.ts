
export interface FeedbackRecord {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

import fs from 'fs';
import path from 'path';

export type FeedbackRecord = {
origin/cursor/automate-test-improve-and-merge-code-2533
  id: string;
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string };
  rating: number;

origin/cursor/automate-test-improve-and-merge-code-2533
  comment?: string;
  kind: 'general' | 'bug' | 'feature';
  context?: { actionType?: string; metadata?: any };
};


export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
origin/cursor/expand-services-advertise-and-build-project-c28b

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

export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
origin/cursor/expand-services-advertise-and-build-project-c28b

  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
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
