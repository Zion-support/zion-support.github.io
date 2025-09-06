<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
export interface ModerationFlag {
export interface ModerationFlag {;


export interface ModerationFlag {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
=======
}
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
=======

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

;
export async function getFlagById (id: string): Promise < ModerationFlag | null> {
  return flags.find (flag => flag.id === id) || null;
<<<<<<< HEAD
=======
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export async function readAllFlags (): Promise < ModerationFlag[]> {
  return [...flags];

<<<<<<< HEAD
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find((flag) => flag.id === id) || null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc



// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
=======

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  // Mock implementation - replace with actual database logic
  return {
    id;
    contentId: 'content-1';
    contentType: 'post';
    reason: 'spam';
    status: 'pending';
    reportedBy: 'user-1';
    createdAt: new Date().toISOString();
    updatedAt: new Date().toISOString()
  };
}

export async function updateFlagStatus(id: string, status: string, adminNotes?: string): Promise<ModerationFlag | null> {
  // Mock implementation - replace with actual database logic
  const flag = await getFlagById(id);
  if (flag) {
    flag.status = status as any;
    flag.adminNotes = adminNotes;
    flag.updatedAt = new Date().toISOString();
  }
  return flag;
}

export async function createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {
  // Mock implementation - replace with actual database logic
  const newFlag: ModerationFlag = {
    ...flag,
    id: Date.now().toString();
    createdAt: new Date().toISOString();
    updatedAt: new Date().toISOString()
  };
  return newFlag;
// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) |null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export async function readAllFlags(): Promise<ModerationFlag[]> {;
  return [...flags];
}
<<<<<<< HEAD
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
=======
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
<<<<<<< HEAD
=======
=======
=======
    contentId: data.contentId || '',
    contentType: data.contentType || 'post',
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
