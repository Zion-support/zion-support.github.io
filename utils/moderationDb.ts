<<<<<<< HEAD
export interface ModerationFlag {
export interface ModerationFlag {;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reportedBy: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
<<<<<<< HEAD
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

}
export async function create_flag (data: Partial < ModerationFlag>): Promise < ModerationFlag> {
  const flag: ModerationFlag = {

  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

}

<<<<<<< HEAD
=======
=======
// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======



// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
}

export async function readAllFlags(): Promise<ModerationFlag[]> {;
  return [...flags];
}

export async function createFlag(data: Partial<ModerationFlag>): Promise<ModerationFlag> {
  const flag: ModerationFlag = {
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
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
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;

}
