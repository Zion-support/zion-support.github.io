import fs from 'fs';
import path from 'path';

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  type: 'content' | 'user' | 'spam' | 'inappropriate';
  status: ModerationStatus;
  reportedBy: string;
  reportedAt: string;
  content: string;
  reason: string;
  adminNotes?: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

const DATA_DIR = path.join(process.cwd(), 'datamoderation');
const FILE = path.join(DATA_DIR, 'flags.json');

function loadFlags(): Record<string, ModerationFlag> {
  try {
    if (!fs.existsSync(FILE)) return {};
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveFlags(flags: Record<string, ModerationFlag>): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(flags, null, 2));
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  return flags[id] || null;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationStatus, 
  adminNotes?: string
): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  const flag = flags[id];
  
  if (!flag) return null;
  
  flag.status = status;
  flag.resolvedAt = new Date().toISOString();
  flag.resolvedBy = 'admin';
  if (adminNotes) {
    flag.adminNotes = adminNotes;
  }
  
  flags[id] = flag;
  saveFlags(flags);
  
  return flag;
}

export async function getAllFlags(): Promise<ModerationFlag[]> {
  const flags = loadFlags();
  return Object.values(flags);
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return getAllFlags();
}

export async function createFlag(init: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flags = loadFlags();
  const id = `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const flag: ModerationFlag = {
    id,
    type: init.type || 'content',
    status: 'pending',
    reportedBy: init.reportedBy || 'system',
    reportedAt: new Date().toISOString(),
    content: init.content || '',
    reason: init.reason || '',
    ...init
  };
  
  flags[id] = flag;
  saveFlags(flags);
  
  return flag;
}