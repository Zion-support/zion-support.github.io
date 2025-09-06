export interface ModerationFlag {
export interface ModerationFlag {;
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

// Mock data storage - replace with actual database
let flags: ModerationFlag[] = [];
export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) |null;

}
export async function readAllFlags(): Promise<ModerationFlag[]> {
  // Mock implementation - replace with actual database logic
  return [];
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


=======



export interface ModerationAction {
  id: string, flagId: string,
  action: 'warn' | 'suspend' | 'ban' | 'dismiss', moderatorId: string,
  reason: string, createdAt: Date,
}

// Mock database - in production, this would connect to a real database
const flags: ModerationFlag[] = []; const actions: ModerationAction[] = [];

export async function createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {
  const newFlag: ModerationFlag = {
    ...flag,
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  flags.push(newFlag);
  return newFlag;
}

export async function getFlag(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) || null;
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

export async function createAction(action: Omit<ModerationAction, 'id' | 'createdAt'>): Promise<ModerationAction> {
  const newAction: ModerationAction = {
    ...action,
    id: `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  };
  actions.push(newAction);
  return newAction;
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
