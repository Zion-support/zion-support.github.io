<<<<<<< HEAD
=======

;
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
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
  content_id: string;
  content_type: 'post' | 'comment' | 'user';
  reason: string;
  user_email: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  created_at: string;
  admin_notes?: string;
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[]  = [];export async function getFlagById (id: string): Promise < ModerationFlag | null> {return flags.find (flag => flag.id === id) || null;}
export async function readAllFlags (): Promise < ModerationFlag[]> {return [...flags];ursor/automate-test-improve-and-merge-code-646c;
export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find((flag) => flag.id === id) || null;export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find((flag) => flag.id === id) || null;}
export async function readAllFlags (): Promise < ModerationFlag[]> {return [...flags];export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find((flag) => flag.id === id) || null;
export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find((flag) => flag.id === id) || null;
  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString()await upsertFlag(flag)return flag;}// Moderation database utilities;
export interface ModerationFlag  {id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',content: string, reporterId: string,reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,updatedAt: Date, moderatorId?: string,notes?: string;
}// Mock data storage - replace with actual database;
let flags: ModerationFlag[]  = [];export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find(flag => flag.id === id) || null;export async function getFlagById(id: string): Promise<ModerationFlag | null> {// Mock implementation - replace with actual database logic;
  return {id;
    contentId: 'content-1';
    contentType: 'post';
    reason: 'spam';
    status: 'pending';
    reportedBy: 'user-1';
    createdAt: new Date().toISOString()updatedAt: new Date().toISOString()}}export async function updateFlagStatus(id: string, status: string, adminNotes?: string): Promise<ModerationFlag | null> {// Mock implementation - replace with actual database logic;
  const flag = await getFlagById(id)if (flag) {flag.status = status as any;
    flag.adminNotes = adminNotes;
    flag.updatedAt = new Date().toISOString()}
  return flag;
}export async function createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {// Mock implementation - replace with actual database logic;
  const newFlag: ModerationFlag = {...flag,id: Date.now().toString()createdAt: new Date().toISOString()updatedAt: new Date().toISOString()}return newFlag;
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {return flags.find(flag => flag.id === id) |null;}export async function readAllFlags(): Promise<ModerationFlag[]> {return [...flags];
}export async function createFlag(data: Partial<ModerationFlag>,): Promise<ModerationFlag> {const flag: ModerationFlag = {id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,contentId: data.contentId || "",contentType: data.contentType || "post",reason: data.reason || "",userEmail: data.userEmail || "",status: "pending",createdAt: new Date().toISOString(),...data;
  }flags.push(flag)contentId: data.contentId || '',contentType: data.contentType || 'post',...data;
  }flags.push(flag)contentId: data.contentId || '',contentType: data.contentType || 'post',id: `flag_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,content_id: data.content_id || '',content_type: data.content_type || 'post',reason: data.reason || '',user_email: data.user_email || '',status: 'pending',created_at: new Date ().toISOString (),...data;
  }flags.push (flag)...data;
  }flags.push(flag)return flag;
}export async function updateFlagStatus(id: string,status: ModerationFlag["status"],adminNotes?: string,): Promise<FlaggedContent | undefined> {const flag = await getFlagById(id)if (!flag) return undefined;status: ModerationFlag['status'],admin_notes?: string): Promise < FlaggedContent | undefined> {const flag = await getFlagById (id)// Check condition;
if (return undefined) {$2;
}
    reason: data.reason || '',userEmail: data.userEmail || '',status: 'pending',createdAt: new Date().toISOString(),...data;
  }flags.push(flag)return flag;
}export async function updateFlagStatus(id: string,status: ModerationFlag['status'],adminNotes?: string;
): Promise<FlaggedContent | undefined> {const flag = await getFlagById(id)if (!flag) return undefined;ursor/automate-test-improve-and-merge-code-646c;
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString()await upsertFlag(flag)return flag;
}
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;



// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
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
>>>>>>> origin/merge-pr-12271
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
