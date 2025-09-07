<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { FlaggedContent, ModerationStatus, AiScores } from '../types/moderation';

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
    await writeFile(MODERATION_FILE, JSON.stringify({ flags: [] }, null, 2), 'utf8');
  }
}

export async function readAllFlags(): Promise<FlaggedContent[]> {
  await ensureBaseFiles();
  const raw = await readFile(MODERATION_FILE, 'utf8');
  const data = JSON.parse(raw);
  return data.flags || [];
}

export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {
  await ensureBaseFiles();
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8');
}

export function generateFlagId(): string {
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
}

export function generateAiScores(seed?: string): AiScores {
  const buf = crypto.createHash('sha256').update(seed || String(Date.now())).digest();
  const v = buf.readUInt32BE(0) / 0xffffffff;
  return { toxicity: v, nsfw: v * 0.8, scam: v * 0.6 };
}

export async function getFlagById(id: string): Promise<FlaggedContent | undefined> {
  const all = await readAllFlags();
  return all.find(f => f.id === id);
}

export async function upsertFlag(flag: FlaggedContent): Promise<void> {
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag; else all.push(flag);
  await writeAllFlags(all);
}

export async function createFlag(init: Omit<FlaggedContent, 'id' | 'createdAt' | 'updatedAt' | 'aiScores' | 'status'> & { status?: ModerationStatus, aiScores?: AiScores }): Promise<FlaggedContent> {
  const now = new Date().toISOString();
  const flag: FlaggedContent = {
    id: generateFlagId(),
    createdAt: now,
    updatedAt: now,
    status: init.status || 'pending',
    aiScores: init.aiScores || generateAiScores(),
    ...init
  };
  const all = await readAllFlags();
  all.push(flag);
  await writeAllFlags(all);
  return flag;
}

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

  id: string;
  contentId: string;

  reason: string;
  userEmail: string;"
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;

export interface ModerationFlag {
  id: string;
  content_id: string;
  content_type: 'post' | 'comment' | 'user';
  reason: string;
  user_email: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  created_at: string;
  admin_notes?: string;
}

}

;

  return flags.find (flag => flag.id === id) || null;

}

}
export async function create_flag (data: Partial < ModerationFlag>): Promise < ModerationFlag> {
  const flag: ModerationFlag = {

}
export async function readAllFlags (): Promise < ModerationFlag[]> {};
  return [...flags];

  return flags.find((flag) => flag.id === id) || null;

  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;

main

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

}

}
;
export async function upsertFlag(flag: FlaggedContent): Promise<void> {;
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag, else all.push(flag);
  await writeAllFlags(all);
}

export async function createFlag(
  data: Partial<ModerationFlag>,

    contentId: data.contentId || "",

    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",

    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,;
  };

  flags.push(flag);

    contentId: data.contentId || '',
    contentType: data.contentType || 'post',

    content_id: data.content_id || '',
    content_type: data.content_type || 'post',
    reason: data.reason || '',
    user_email: data.user_email || '',
    status: 'pending',
    created_at: new Date ().toISOString (),
    ...data;
  }
;
  flags.push (flag);

  return flag;
}

  return flag;
}

export async function updateFlagStatus(

  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;

origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
