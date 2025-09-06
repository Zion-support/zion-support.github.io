<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  contentId: string;
  contentType: "post" | "comment" | "user";
  reason: string;
  userEmail: string;
  status: "pending" | "approved" | "removed" | "warned" | "banned";
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
<<<<<<< HEAD
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
=======
}

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
=======
<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
=======
<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
=======
<<<<<<< HEAD
=======
  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

<<<<<<< HEAD
=======
  await upsertFlag(flag);
  return flag;

}

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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: `flag_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return flag;
}

export async function updateFlagStatus(
  id: string,
  status: ModerationFlag["status"],
  adminNotes?: string,
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  status: ModerationFlag['status'],
  admin_notes?: string): Promise < FlaggedContent | undefined> {
  const flag = await getFlagById (id);
  // Check condition
if (return undefined) {
  $2
}
=======
    reason: data.reason || '',
    userEmail: data.userEmail || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...data;
  };
  
  flags.push(flag);
  return flag;
}
<<<<<<< HEAD
=======

export async function updateFlagStatus(
  id: string, 
  status: ModerationFlag['status'], 
  adminNotes?: string
): Promise<FlaggedContent | undefined> {;
  const flag = await getFlagById(id);
  if (!flag) return undefined;
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
