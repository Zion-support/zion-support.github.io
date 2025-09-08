export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

// Mock database - in production, this would connect to a real database
const flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<ModerationFlag | null> {
  const flag = flags.find(f => f.id === id);
  if (!flag) return null;
  
  flag.status = status;
  flag.updatedAt = new Date().toISOString();
  if (adminNotes) {
    flag.adminNotes = adminNotes;
  }
  
  return flag;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return [...flags];
}

export async function createFlag(init: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: init.id || Math.random().toString(36).substr(2, 9),
    contentId: init.contentId || '',
    contentType: init.contentType || '',
    reason: init.reason || '',
    status: init.status || 'pending',
    createdAt: init.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    adminNotes: init.adminNotes
  };
  
  flags.push(flag);
  return flag;
}