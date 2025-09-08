export interface ModerationFlag {
export interface ModerationFlag {;

export interface ModerationFlag {
  id: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reason: string;
  userEmail: string;
  contentType: string;
  contentId: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
export interface ModerationFlag {
  id: string;
  content_id: string;
  content_type: 'post' | 'comment' | 'user';
  reason: string;
  user_email: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  created_at: string;
  admin_notes?: string;
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;    contentId: data.contentId || "",
    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",
    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,
  };

  flags.push(flag);
    content_id: data.content_id || '',
    content_type: data.content_type || 'post',
    reason: data.reason || '',
    user_email: data.user_email || '',
    status: 'pending',
    created_at: new Date ().toISOString (),
    ...data;
  }
;
  flags.push (flag);
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
