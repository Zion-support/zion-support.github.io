export interface ModerationFlag {
  id: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reason: string;
  userEmail: string;
  contentType: string;
  contentId: string;
  createdAt: string;
  updatedAt: string;
}

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

// Mock database - in production, this would connect to a real database
const flags: ModerationFlag[] = [];

export async function createFlag(init: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: Math.random().toString(36).substr(2, 9),
    status: 'pending',
    reason: init.reason || '',
    userEmail: init.userEmail || '',
    contentType: init.contentType || '',
    contentId: init.contentId || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...init
  };
  
  flags.push(flag);
  return flag;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return [...flags];
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(f => f.id === id) || null;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationStatus, 
  adminNotes?: string
): Promise<ModerationFlag | null> {
  const flag = flags.find(f => f.id === id);
  if (!flag) return null;
  
  flag.status = status;
  flag.updatedAt = new Date().toISOString();
  
  return flag;
}