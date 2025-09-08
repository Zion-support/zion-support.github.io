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

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {;
  return [...flags];
}

export async function createFlag(
  data: Partial<ModerationFlag>,
): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentId: data.contentId || "",
    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,
  };

  flags.push(flag);
  return flag;
}

export async function updateFlagStatus(
  id: string,
  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.updatedAt = new Date().toISOString();
  
  return flag;
}
