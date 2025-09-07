<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


export interface FeedbackRecord {;

// Mock feedback store utility
export function tryWriteToFirestore(doc: any): Promise<boolean> {
  // Mock implementation - in a real app, this would write to Firestore
  return Promise.resolve(true);
}

export type FeedbackRecord = {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
import fs from "fs";
import path from "path";
export type FeedbackRecord = {;
=======

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export type FeedbackRecord = {
<<<<<<< HEAD
=======
=======

export interface FeedbackRecord {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  id: string;
  createdAtIso: string;
  user: { id?: string, role?: string, talentSlug?: string };
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import fs from 'fs';
import path from 'path';

origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
export type FeedbackRecord = {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  id: string;
<<<<<<< HEAD
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  type: string;
  message: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  rating: number;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
export interface Feedback {
  id: string;
  userId: string;
  content: string;
  rating: number;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
  id: string;
  type: string;
  message: string;
  rating: number;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export interface FeedbackStats {};
  total: number;
  averageRating: number;
  byKind: {}
    bug: number;
    feature: number;
<<<<<<< HEAD
    general: number
};
  byRating: {
    [rating: number]: number
};
  recent: FeedbackRecord[];
}

<<<<<<< HEAD
=======
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
    general: number;
  };
  byRating: {}
    [rating: number]: number;
  };
  recent: FeedbackRecord[];
}

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {};
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
origin/cursor/expand-services-advertise-and-build-project-c28b

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);



origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function writeAll(rows: any[]): void {";
  console.log("Writing feedback rows:", rows.length);
<<<<<<< HEAD
  // Implementation would write to database or file
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
  // Implementation would write to database or file;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

export function getAllFeedback(): FeedbackRecord[] {};
  return [...feedbackData];
}
<<<<<<< HEAD
<<<<<<< HEAD
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const DATA_DIR = path.join(process.cwd(), 'data', 'runtime');
const DB_PATH = path.join(DATA_DIR, 'feedback.json');

function ensureDataFile(): void {
=======
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
import fs from "fs";
import path from "path";
export type FeedbackRecord = {;
  id: string;
  createdAtIso: string;
  user: { id?: string, role?: string, talentSlug?: string };
  rating: number;
  comment?: string;
  kind: "general" | "bug" | "feature";
  context?: { actionType?: string, metadata?: any }
};
const DATA_DIR = path.join(process.cwd(), "data", "runtime");
const DB_PATH = path.join(DATA_DIR, "feedback.json");
function ensureDataFile(): void {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
