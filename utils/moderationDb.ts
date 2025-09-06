

  id: string;
  contentId: string;
  contentType: "post" | "comment" | "user";
  reason: string;
  userEmail: string;
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
=======
export interface ModerationFlag {
  id: string;
  content_id: string;
  content_type: 'post' | 'comment' | 'user';
  reason: string;
  user_email: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  created_at: string;
  admin_notes?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
}

export async function updateFlag(id: string, updates: Partial<ModerationFlag>): Promise<ModerationFlag | null> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex] = {
    ...flags[flagIndex],
    ...updates,
    updatedAt: new Date(),
  };
  return flags[flagIndex];
}

export async function getAllFlags(): Promise<ModerationFlag[]> {
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
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
