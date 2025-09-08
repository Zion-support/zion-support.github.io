export interface ModerationFlag {
  id: string;
  type: 'content' | 'user' | 'spam';
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  content: string;
  reportedBy: string;
  reportedAt: string;
  adminNotes?: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

// In-memory storage for demo purposes
const flags: Record<string, ModerationFlag> = {};

export function getFlagById(id: string): ModerationFlag | null {
  return flags[id] || null;
}

export function getAllFlags(): ModerationFlag[] {
  return Object.values(flags);
}

export function createFlag(flag: Omit<ModerationFlag, 'id' | 'reportedAt'>): ModerationFlag {
  const id = Math.random().toString(36).substr(2, 9);
  const newFlag: ModerationFlag = {
    ...flag,
    id,
    reportedAt: new Date().toISOString()
  };
  flags[id] = newFlag;
  return newFlag;
}

export function updateFlagStatus(
  id: string, 
  status: ModerationStatus, 
  adminNotes?: string
): ModerationFlag | null {
  const flag = flags[id];
  if (!flag) {
    return null;
  }
  
  flag.status = status;
  flag.adminNotes = adminNotes;
  flag.resolvedAt = new Date().toISOString();
  flag.resolvedBy = 'admin'; // In production, this would be the actual admin user ID
  
  return flag;
}

export function deleteFlag(id: string): boolean {
  if (flags[id]) {
    delete flags[id];
    return true;
  }
  return false;
}