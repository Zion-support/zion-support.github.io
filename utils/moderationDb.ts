import fs from 'fs';
import path from 'path';

export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  userEmail: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  createdAt: string;
  adminNotes?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'moderation-flags.json');

function load(): ModerationFlag[] {
  try {
    if (!fs.existsSync(FILE)) return [];
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function save(flags: ModerationFlag[]): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(flags, null, 2));
}

export async function createFlag(init: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flags = load();
  const flag: ModerationFlag = {
    id: init.id || Date.now().toString(),
    contentId: init.contentId || '',
    contentType: init.contentType || 'unknown',
    reason: init.reason || '',
    userEmail: init.userEmail || '',
    status: init.status || 'pending',
    createdAt: init.createdAt || new Date().toISOString(),
    adminNotes: init.adminNotes
  };
  flags.push(flag);
  save(flags);
  return flag;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return load();
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  const flags = load();
  return flags.find(f => f.id === id) || null;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<ModerationFlag | null> {
  const flags = load();
  const flagIndex = flags.findIndex(f => f.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex].status = status;
  if (adminNotes) {
    flags[flagIndex].adminNotes = adminNotes;
  }
  
  save(flags);
  return flags[flagIndex];
}