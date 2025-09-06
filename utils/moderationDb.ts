export interface ModerationFlag {
  id: string;
  type: 'content' | 'user' | 'comment' | 'post';
  reason: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected' | 'resolved';
  reportedBy: string;
  reportedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  targetId: string;
  targetType: string;
  metadata?: Record<string, any>;
}

// In-memory storage for demo purposes
// In production, this should use a real database
const flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function createFlag(flagData: Omit<ModerationFlag, 'id' | 'reportedAt'>): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    ...flagData,
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    reportedAt: new Date().toISOString()
  };
  
  flags.push(flag);
  return flag;
}

export async function updateFlag(id: string, updates: Partial<ModerationFlag>): Promise<ModerationFlag | null> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex] = { ...flags[flagIndex], ...updates };
  return flags[flagIndex];
}

export async function getAllFlags(): Promise<ModerationFlag[]> {
  return [...flags];
}

export async function getFlagsByStatus(status: ModerationFlag['status']): Promise<ModerationFlag[]> {
  return flags.filter(flag => flag.status === status);
}

export type ModerationStatus = 'pending' | 'approved' | 'rejected' | 'resolved' | 'removed' | 'warned' | 'banned';

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<ModerationFlag | null> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex] = { 
    ...flags[flagIndex], 
    status: status as ModerationFlag['status'],
    reviewedBy: 'admin',
    reviewedAt: new Date().toISOString(),
    ...(adminNotes && { metadata: { ...flags[flagIndex].metadata, adminNotes } })
  };
  
  return flags[flagIndex];
}