import fs from 'fs';
import path from 'path';

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  contentType: 'post' | 'comment' | 'user';
  contentId: string;
  reason: string;
  userEmail: string;
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'moderation-flags.json');

function loadFlags(): ModerationFlag[] {
  try {
    if (!fs.existsSync(FILE)) return [];
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveFlags(flags: ModerationFlag[]): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(flags, null, 2));
}

export async function createFlag(init: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flags = loadFlags();
  const flag: ModerationFlag = {
    id: init.id || `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentType: init.contentType || 'post',
    contentId: init.contentId || '',
    reason: init.reason || '',
    userEmail: init.userEmail || '',
    status: init.status || 'pending',
    createdAt: init.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    adminNotes: init.adminNotes
  };
  
  flags.push(flag);
  saveFlags(flags);
  return flag;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return loadFlags();
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  return flags.find(f => f.id === id) || null;
}

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  const flagIndex = flags.findIndex(f => f.id === id);
  
  if (flagIndex === -1) return null;
  
  flags[flagIndex].status = status;
  flags[flagIndex].updatedAt = new Date().toISOString();
  if (adminNotes) {
    flags[flagIndex].adminNotes = adminNotes;
  }
  
  saveFlags(flags);
  return flags[flagIndex];
}