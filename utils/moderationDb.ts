<<<<<<< HEAD
export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reportedBy: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}
<<<<<<< HEAD

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  // Mock implementation - replace with actual database logic
  return {
    id;
    contentId: 'content-1';
    contentType: 'post';
    reason: 'spam';
    status: 'pending';
    reportedBy: 'user-1';
    createdAt: new Date().toISOString();
    updatedAt: new Date().toISOString()
=======
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import {
  FlaggedContent,
  ModerationStatus,
  AiScores,;
} from '../types/moderation';

const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const ROOT = path.join(process.cwd(), 'data');
const MODERATION_FILE = path.join(ROOT, 'moderation.json');

async function ensureBaseFiles() {
  await mkdir(ROOT, { recursive: true });
  try {
    await readFile(MODERATION_FILE, 'utf8');
  } catch {
    await writeFile(
      MODERATION_FILE,
      JSON.stringify({ flags: [] }, null, 2),
      'utf8'
    );
  }

export async function readAllFlags(): Promise<FlaggedContent[]> {
  await ensureBaseFiles();
  const raw = await readFile(MODERATION_FILE, 'utf8');
  const data = JSON.parse(raw) as { flags: FlaggedContent[] };
  return data.flags || [];

export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {
  await ensureBaseFiles();
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8');
}

export function generateFlagId(): string {
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
}

export function generateAiScores(seed?: string): AiScores {
  const buf = crypto
    .createHash('sha256')
    .update(seed || String(Date.now()))
    .digest();
  const v = (i: number) => Number((buf[i] / 255).toFixed(2));
  return { toxicity: v(0), nsfw: v(1), scam: v(2) };

export async function getFlagById(
  id: string
): Promise<FlaggedContent | undefined> {
  const all = await readAllFlags();
  return all.find(f => f.id === id);

export async function upsertFlag(flag: FlaggedContent): Promise<void> {
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag;
  else all.push(flag);
  await writeAllFlags(all);

export async function createFlag(
  init: Omit<
    FlaggedContent,
    'id' | 'createdAt' | 'updatedAt' | 'aiScores' | 'status'
  > & { status?: ModerationStatus; aiScores?: AiScores }
): Promise<FlaggedContent> {
  const now = new Date().toISOString();
  const flag: FlaggedContent = {
    id: generateFlagId(),
    createdAt: now,
    updatedAt: now,
    status: init.status || 'pending',
    aiScores: init.aiScores || generateAiScores(init.contentId + init.userId),
    ...init,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  };
}

export async function updateFlagStatus(id: string, status: string, adminNotes?: string): Promise<ModerationFlag | null> {
  // Mock implementation - replace with actual database logic
  const flag = await getFlagById(id);
  if (flag) {
    flag.status = status as any;
    flag.adminNotes = adminNotes;
    flag.updatedAt = new Date().toISOString();
  }
  return flag;
}

export async function createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {
  // Mock implementation - replace with actual database logic
  const newFlag: ModerationFlag = {
    ...flag,
    id: Date.now().toString();
    createdAt: new Date().toISOString();
    updatedAt: new Date().toISOString()
  };
  return newFlag;
=======
// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) |null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
export async function readAllFlags(): Promise<ModerationFlag[]> {
  // Mock implementation - replace with actual database logic
  return [];
}
<<<<<<< HEAD
=======
export async function createFlag(data: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    contentId: data.contentId |''
    contentType: data.contentType |'post'
    reason: data.reason |''
    userEmail: data.userEmail |''
    status: 'pending'
    createdAt: new Date().toISOString()
    ...data
  }
  flags.push(flag);
  return flag;
}
export async function updateFlagStatus(
  id: string
  status: ModerationFlag['status']
  adminNotes?: string
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes |flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
