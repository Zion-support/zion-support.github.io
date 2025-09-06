import fs from 'fs';
import path from 'path';

export interface ModerationFlag {
  id: string;
  type: string;
  targetId: string;
  targetType: string;
  reporterId: string;
  reason: string;
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

const DATA_DIR = path.join(process.cwd(), 'datamoderation');
const FILE = path.join(DATA_DIR, 'flags.json');

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

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  return flags.find(flag => flag.id === id) || null;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationStatus, 
  adminNotes?: string
): Promise<ModerationFlag | null> {
  const flags = loadFlags();
  const flagIndex = flags.findIndex(flag => flag.id === id);
  
  if (flagIndex === -1) return null;
  
  flags[flagIndex].status = status;
  flags[flagIndex].updatedAt = new Date().toISOString();
  if (adminNotes) {
    flags[flagIndex].adminNotes = adminNotes;
  }
  
  saveFlags(flags);
  return flags[flagIndex];
}

export async function getAllFlags(): Promise<ModerationFlag[]> {
  return loadFlags();
}

export async function createFlag(flagData: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<ModerationFlag> {
  const flags = loadFlags();
  const newFlag: ModerationFlag = {
    ...flagData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'pending'
  };
  
  flags.push(newFlag);
  saveFlags(flags);
  return newFlag;
}