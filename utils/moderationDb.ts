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
  adminNotes?: string;
  updatedAt?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const FLAGS_FILE = path.join(DATA_DIR, 'moderation-flags.json');

function loadFlags(): ModerationFlag[] {
  try {
    if (!fs.existsSync(FLAGS_FILE)) return [];
    const raw = fs.readFileSync(FLAGS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveFlags(flags: ModerationFlag[]): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FLAGS_FILE, JSON.stringify(flags, null, 2));
}

export async function createFlag(data: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flags = loadFlags();
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentType: data.contentType || 'post',
    contentId: data.contentId || '',
    reason: data.reason || '',
    userEmail: data.userEmail || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...data
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

export async function updateFlagStatus(
  id: string, 
  status: ModerationStatus, 
  adminNotes?: string
): Promise<ModerationFlag | null> {
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