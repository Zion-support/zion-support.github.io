<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface ModerationFlag {
export interface ModerationFlag {;

export interface ModerationFlag {
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface ModerationFlag {
  // TODO: Implement
}
export interface ModerationFlag {;

export interface ModerationFlag {


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  contentId: string;

  reason: string;
  userEmail: string;"
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
=======


// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
main
export interface ModerationFlag {
  // TODO: Implement
}
export interface ModerationFlag {;


  // TODO: Implement
  id: string;,
  contentId: string;

  contentType: "post" | "comment" | "user";",
  reason: string;
  userEmail: string;,"
  status: "pending" | "approved" | "removed" | "warned" | "banned";"
  createdAt: string;,
  updatedAt: string;
  adminNotes?: string;
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
pr-12325

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;

main

}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {}
  return flags.find (flag => flag.id === id) || null;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
<<<<<<< HEAD

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
<<<<<<< HEAD
<<<<<<< HEAD
export async function readAllFlags(): Promise<FlaggedContent[]> {;
  await ensureBaseFiles();
  const raw = await readFile(MODERATION_FILE, 'utf8');
  const data = JSON.parse(raw) as { flags: FlaggedContent[] };
  return data.flags || [];
=======
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
<<<<<<< HEAD
=======
export async function getFlagById (id: string): Promise < ModerationFlag | null> {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return flags.find (flag => flag.id === id) || null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
export async function readAllFlags (): Promise < ModerationFlag[]> {};
  return [...flags];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return flags.find((flag) => flag.id === id) || null;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

<<<<<<< HEAD
=======
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


<<<<<<< HEAD
=======
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
<<<<<<< HEAD
// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) |null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export async function createFlag(
  data: Partial<ModerationFlag>,
<<<<<<< HEAD
): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    contentId: data.contentId || "",
=======
  return flags.find (flag => flag.id === id) || null;    contentId: data.contentId || "",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",
=======
): Promise<ModerationFlag> {}
  const flag: ModerationFlag = {}
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,"
    contentId: data.contentId || "","
    contentType: data.contentType || "post","
    reason: data.reason || "","
    userEmail: data.userEmail || "","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,;
  };

  flags.push(flag);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
<<<<<<< HEAD
    id: `flag_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  id: string,"
  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {};
  const flag = await getFlagById(id);
  if (!flag) return undefined;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
=======
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
=======

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
    ...data,
  };

  flags.push(flag);
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  return flag;
}

export async function updateFlagStatus(
<<<<<<< HEAD
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<FlaggedContent | undefined> {;
  const flag = await getFlagById(id);
  if (!flag) return undefined;

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  id: string,
  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
