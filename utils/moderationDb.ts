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
async function ensureBaseFiles() {;
  await mkdir(ROOT, { recursive: true });
  try {;
    await readFile(MODERATION_FILE, 'utf8');
  } catch {;
    await writeFile(MODERATION_FILE, JSON.stringify({ flags: [] }, null, 2), 'utf8');
  }
}
=======
<<<<<<< HEAD
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  contentId: string;
  contentType: "post" | "comment" | "user";
  reason: string;
  userEmail: string;
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
export async function readAllFlags(): Promise<FlaggedContent[]> {;
  await ensureBaseFiles();
  const raw = await readFile(MODERATION_FILE, 'utf8');
  const data = JSON.parse(raw) as { flags: FlaggedContent[] };
  return data.flags || [];
=======
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}
<<<<<<< HEAD
;
export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {;
  await ensureBaseFiles();
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8');
}
;
export function generateFlagId(): string {;
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
}
;
export function generateAiScores(seed?: string): AiScores {;
  const buf = crypto.createHash('sha256').update(seed || String(Date.now())).digest();
  const v = (i: number) => Number((buf[i] / 255).toFixed(2));
  return { toxicity: v(0), nsfw: v(1), scam: v(2) }
}
;
export async function getFlagById(id: string): Promise<FlaggedContent | undefined> {;
  const all = await readAllFlags();
  return all.find(f => f.id === id);
=======
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export async function create_flag (data: Partial < ModerationFlag>): Promise < ModerationFlag> {
  const flag: ModerationFlag = {

<<<<<<< HEAD
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

<<<<<<< HEAD
=======
}

=======
// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}

=======
// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
;
export async function upsertFlag(flag: FlaggedContent): Promise<void> {;
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag, else all.push(flag);
  await writeAllFlags(all);
}
<<<<<<< HEAD
;
export async function createFlag(init: Omit<FlaggedContent 'id' | 'createdAt' | 'updatedAt' | 'aiScores' | 'status'> & { status?: ModerationStatus, aiScores?: AiScores }): Promise<FlaggedContent> {;
  const now = new Date().toISOString();
  const flag: FlaggedContent = {;
    id: generateFlagId();
    createdAt: now;
    updatedAt: now;
    status: init.status || 'pending';
    aiScores: init.aiScores || generateAiScores(init.contentId + init.userId);
    ...init};
  const all = await readAllFlags();
  all.push(flag);
  await writeAllFlags(all);
=======

export async function createFlag(
  data: Partial<ModerationFlag>,
): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    contentId: data.contentId || "",
    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,
  };

  flags.push(flag);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
=======
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
<<<<<<< HEAD
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return flag;
}
<<<<<<< HEAD
;
export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<FlaggedContent | undefined> {;
  const flag = await getFlagById(id);
  if (!flag) return undefined;
<<<<<<< HEAD
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export async function updateFlagStatus(
  id: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
  status: ModerationFlag['status'],
  admin_notes?: string): Promise < FlaggedContent | undefined> {
  const flag = await getFlagById (id);
  // Check condition
if (return undefined) {
  $2
}
=======
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
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
