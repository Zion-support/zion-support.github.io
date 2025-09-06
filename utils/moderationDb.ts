export interface ModerationFlag {
  id: string;
  contentId: string;
  contentType: string;
  reason: string;
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  reportedBy: string;
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
// Mock data storage - replace with actual database;
let flags: ModerationFlag[] = [];
}
export async function create_flag (data: Partial < ModerationFlag>): Promise < ModerationFlag> {
  const flag: ModerationFlag = {
  await upsertFlag(flag);
  return flag;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
