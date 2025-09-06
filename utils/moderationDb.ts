export interface Flag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporterId: string;
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

// In-memory storage for development
const flags: Flag[] = [];

export async function getFlagById(id: string): Promise<Flag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function getAllFlags(): Promise<Flag[]> {
  return [...flags];
}

export async function createFlag(flagData: Omit<Flag, 'id' | 'createdAt' | 'updatedAt'>): Promise<Flag> {
  const flag: Flag = {
    ...flagData,
    id: `flag-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  flags.push(flag);
  return flag;
}

export async function updateFlag(id: string, updates: Partial<Pick<Flag, 'status' | 'adminNotes'>>): Promise<Flag | null> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex] = {
    ...flags[flagIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return flags[flagIndex];
}

export async function deleteFlag(id: string): Promise<boolean> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return false;
  
  flags.splice(flagIndex, 1);
  return true;
}

export async function updateFlagStatus(id: string, status: string, adminNotes?: string): Promise<Flag | null> {
  return updateFlag(id, { status: status as any, adminNotes });
}