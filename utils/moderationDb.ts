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

}





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

export async function getActionsForFlag(flagId: string): Promise<ModerationAction[]> {
  return actions.filter(action => action.flagId === flagId);
}
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
export async function updateFlagStatus (
  id: string,
  status: ModerationFlag['status'],
  admin_notes?: string): Promise < FlaggedContent | undefined> {
  const flag = await getFlagById (id);
  // Check condition
if (return undefined) {
  $2
}
  flag.status = status;
  flag.admin_notes = admin_notes || flag.admin_notes;
  flag.updated_at = new Date ().toISOString ();
  await upsert_flag (flag);
  return flag;
}
