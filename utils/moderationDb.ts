
;

;
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {




origin/cursor/expand-services-advertise-and-build-project-c28b


  id: string;
  contentId: string;export interface ModerationFlag  {export interface ModerationFlag  {export interface ModerationFlag  {id: string;
  contentId: string;
  contentType: "post" | "comment" | "user";
  reason: string;
  userEmail: string;
  status: "pending" | "approved" | "removed" | "warned" | "banned";createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[]  = [];export async function getFlagById (id: string): Promise < ModerationFlag | null> {return flags.find (flag => flag.id === id) || null;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
export interface ModerationFlag  {id: string;
export interface ModerationFlag {
  id: string;
export interface ModerationFlag  {id: string;
  content_id: string;
  content_type: 'post' | 'comment' | 'user';
  reason: string;
  user_email: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  created_at: string;
  admin_notes?: string;
}

main


;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
main


}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
origin/cursor/expand-services-advertise-and-build-project-c28b


}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

}

// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}

origin/cursor/expand-services-advertise-and-build-project-c28b







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
// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) |null;
origin/cursor/automate-test-improve-and-merge-code-2533

}

export async function readAllFlags(): Promise<ModerationFlag[]> {;
  return [...flags];
}

export async function createFlag(
  data: Partial<ModerationFlag>,
): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentId: data.contentId || "",
    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data
  };

  flags.push(flag);
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',

    id: `flag_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
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

export async function updateFlagStatus(
  id: string,


  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
  status: ModerationFlag['status'],
  admin_notes?: string): Promise < FlaggedContent | undefined> {
  const flag = await getFlagById (id);
  // Check condition
if (return undefined) {
  $2
}
    reason: data.reason || '',
    userEmail: data.userEmail || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...data;
  };
  
  flags.push(flag);
  return flag;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<FlaggedContent | undefined> {;
  const flag = await getFlagById(id);
  if (!flag) return undefined;


origin/cursor/expand-services-advertise-and-build-project-c28b

main



  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533






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
    await readFile(MODERATION_FILE, 'utf8')
  } catch {
    await writeFile(MODERATION_FILE, JSON.stringify({ flags: [] }, null, 2), 'utf8')
  }
}

export async function readAllFlags(): Promise<FlaggedContent[]> {
  await ensureBaseFiles($2);
  const raw = await readFile($2);
  const data = $2;
  return data.flags || []
}

export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {
  await ensureBaseFiles($2);
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8')
}

export function generateFlagId(): string {
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`
}

export function generateAiScores(seed?: string): AiScores {
  const buf = crypto.createHash('sha256').update(seed || String(Date.now())).digest($2);
  const v = $2;
  return { toxicity: v(0), nsfw: v(1), scam: v(2) }
}

export async function getFlagById(id: string): Promise<FlaggedContent | undefined> {
  const all = await readAllFlags();
  return all.find(f => f.id === id)
}

export async function upsertFlag(flag: FlaggedContent): Promise<void> {
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag; else all.push(flag);
  await writeAllFlags(all)
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
  return flag
}

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag
}
