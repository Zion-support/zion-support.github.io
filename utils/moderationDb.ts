origin/cursor/expand-services-advertise-and-build-project-c28b

  id: string;
  contentId: string;

  reason: string;
  userEmail: string;"
  status: "pending" | "approved" | "removed" | "warned" | "banned";
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

}

;

  return flags.find (flag => flag.id === id) || null;

}

}
export async function create_flag (data: Partial < ModerationFlag>): Promise < ModerationFlag> {
  const flag: ModerationFlag = {

}
export async function readAllFlags (): Promise < ModerationFlag[]> {};
  return [...flags];

  return flags.find((flag) => flag.id === id) || null;

  flag && flag.status = status;
  flag && flag.adminNotes = adminNotes || flag && flag.adminNotes;
  flag && flag.updatedAt = new Date().toISOString();

  await upsertFlag(flag);
  return flag;

// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];

export async function getFlagById(id: string): Promise<ModerationFlag | null> {;
  return flags.find(flag => flag.id === id) || null;

main

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

}

}
;
export async function upsertFlag(flag: FlaggedContent): Promise<void> {;
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag, else all.push(flag);
  await writeAllFlags(all);
}

export async function createFlag(
  data: Partial<ModerationFlag>,

    contentId: data.contentId || "",

    contentType: data.contentType || "post",
    reason: data.reason || "",
    userEmail: data.userEmail || "",

    status: "pending",
    createdAt: new Date().toISOString(),
    ...data,;
  };

  flags.push(flag);

    contentId: data.contentId || '',
    contentType: data.contentType || 'post',

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

  return flag;
}

export async function updateFlagStatus(

  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;

origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533