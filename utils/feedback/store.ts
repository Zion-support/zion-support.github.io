<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

;
  id: string;
  type: string;
  message: string;
  rating: number;export interface FeedbackRecord  {// Mock feedback store utility;
export function tryWriteToFirestore(doc: any): Promise<boolean> {// Mock implementation - in a real app, this would write to Firestore;
  return Promise && Promise.resolve(true)}export type FeedbackRecord = {export interface FeedbackRecord  {ursor/fix-website-loading-errors-and-merge-6662;
import fs from 'fs';
import path from 'path';
export type FeedbackRecord = {id: string;
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string }rating: number;comment?: string;
  kind: 'general' | 'bug' | 'feature';
  context?: { actionType?: string; metadata?: any }}}export function getAllFeedback(): FeedbackRecord[] {return [...feedbackData];const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'runtime')const DB_PATH  = path && path.join(DATA_DIR, 'feedback && feedback.json')function ensureDataFile(): void {if (!fs && fs.existsSync(DATA_DIR)) fs && fs.mkdirSync(DATA_DIR, { recursive: true })if (!fs && fs.existsSync(DB_PATH))fs && fs.writeFileSync(DB_PATH, JSON && JSON.stringify({ items: [] }, null, 2), 'utf-8')export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {ensureDataFile()const raw = fs && fs.readFileSync(DB_PATH, 'utf-8')const data = JSON && JSON.parse(raw || '{}')const items: FeedbackRecord[] = Array && Array.isArray(data && data.items) ? data && data.items : [];
  items && items.push(rec)fs && fs.writeFileSync(DB_PATH, JSON && JSON.stringify({ items }, null, 2), 'utf-8')return rec;export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {feedbackData.push(feedback)console.log('Feedback saved:', feedback.id)}export interface FeedbackStats  {total: number;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

export interface FeedbackRecord {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
export type FeedbackRecord = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import fs from 'fs';
import path from 'path';

export type FeedbackRecord = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  id: string;
  type: string;
  message: string;
  rating: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  comment?: string;
  kind: 'general' | 'bug' | 'feature';
  context?: { actionType?: string; metadata?: any };
};

<<<<<<< HEAD

export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}

export interface FeedbackStats {
  total: number;
  averageRating: number;
  byKind: {bug: number;
    feature: number;
    general: number;
  }byRating: {[rating: number]: number;
  }recent: FeedbackRecord[];
}export function getAllFeedback(): FeedbackRecord[] {return [...feedbackData];metadata: Record < string, any>;
  };
  byRating: {
    [rating: number]: number;
  };
  recent: FeedbackRecord[];
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}ursor/automate-test-improve-and-merge-code-646c;
const feedbackData: FeedbackRecord[]  = [];export async function saveFeedbackFallback(feedback: FeedbackRecord,): Promise<void> {feedbackData.push(feedback)console.log("Feedback saved:", feedback.id)const feedback_data: FeedbackRecord[]  = [];export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {feedback_data.push (feedback)console.log ('Feedback saved:', feedback.id)}
ursor/automate-test-improve-and-merge-code-646c;
}}export function writeAll(rows: any[]): void {console.log("Writing feedback rows:", rows.length)// Implementation would write to database or file;
}export function getAllFeedback(): FeedbackRecord[] {return [...feedbackData];
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function getAllFeedback (): FeedbackRecord[] {return [...feedback_data];
}const DATA_DIR = path.join(process.cwd(), 'data', 'runtime')const DB_PATH  = path.join(DATA_DIR, 'feedback.json')function ensureDataFile(): void {if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })if (!fs.existsSync(DB_PATH))fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), 'utf-8')export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {ensureDataFile()const raw = fs.readFileSync(DB_PATH, 'utf-8')const data = JSON.parse(raw || '{}')const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec)fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), 'utf-8')return rec;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
export function getAllFeedback (): FeedbackRecord[] {return [...feedback_data];
}const DATA_DIR = path.join(process.cwd(), 'data', 'runtime')const DB_PATH  = path.join(DATA_DIR, 'feedback.json')function ensureDataFile(): void {if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })if (!fs.existsSync(DB_PATH))fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), 'utf-8')export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {ensureDataFile()const raw = fs.readFileSync(DB_PATH, 'utf-8')const data = JSON.parse(raw || '{}')const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec)fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), 'utf-8')return rec;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

const feedbackData: FeedbackRecord[] = [];

export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
<<<<<<< HEAD
<<<<<<< HEAD
=======
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
origin/cursor/expand-services-advertise-and-build-project-c28b

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}

export function writeAll(rows: any[]): void {
  console.log("Writing feedback rows:", rows.length);
  // Implementation would write to database or file
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
