export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reportedBy: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  return [...flags];
}

export async function createFlag(data: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const now = new Date().toISOString();
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
    reason: data.reason || '',
    status: 'pending',
    reportedBy: data.reportedBy || 'system',
    createdAt: now,
    updatedAt: now,
    adminNotes: data.adminNotes,
  };
  flags.push(flag);
  return flag;
}

export async function updateFlagStatus(
  id: string,
  status: ModerationFlag['status'],
  adminNotes?: string
): Promise<ModerationFlag | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  return flag;
}
