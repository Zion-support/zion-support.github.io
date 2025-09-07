id: string;
  createdAtIso: string;
  user: { id?: string, role?: string, talentSlug?: string };

import fs from 'fs';
import path from 'path';

origin/cursor/automate-test-improve-and-merge-code-2533

  id: string;

  rating: number;

  comment?: string;
  kind: "general" | "bug" | "feature";
  context?: { actionType?: string, metadata?: any }
};

}

export interface FeedbackStats {};
  total: number;
  averageRating: number;
  byKind: {}
    bug: number;
    feature: number;

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

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);

}

export function writeAll(rows: any[]): void {";
  console.log("Writing feedback rows:", rows.length);

}

export function getAllFeedback(): FeedbackRecord[] {};
  return [...feedbackData];
}

const DATA_DIR = path.join(process.cwd(), 'data', 'runtime');
const DB_PATH = path.join(DATA_DIR, 'feedback.json');

function ensureDataFile(): void {

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