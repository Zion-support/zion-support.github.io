export interface ModerationFlag {
export interface ModerationFlag {;

export interface ModerationFlag {

  id: string;
  contentId: string;
  contentType: "post" | "comment" | "user";
  reason: string;
  userEmail: string;
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}



;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;

}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

}


// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}






// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;


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
contentId: data.contentId || '',
    contentType: data.contentType || 'post',

  return flag;
}

export async function updateFlagStatus(
  id: string,

  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
status: ModerationFlag['status'],
  admin_notes?: string): Promise < FlaggedContent | undefined> {
  const flag = await getFlagById (id);
  // Check condition
if (return undefined) {
  $2
}

    reason: data.reason || '',
    userEmail: data.userEmail || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...data;
  };
  
  flags.push(flag);
  return flag;
}

export async function updateFlagStatus(
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<FlaggedContent | undefined> {;
  const flag = await getFlagById(id);
  if (!flag) return undefined;





  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
