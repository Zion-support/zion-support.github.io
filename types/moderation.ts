export type ModerationStatus = 'pending' | 'approved' | 'rejected' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  user_id: string;
  content_type: string;
  content_id: string;
  reason: string;
  status: ModerationStatus;
  created_at: string;
  updated_at: string;
}

export interface ModerationAction {
  id: string;
  flag_id: string;
  moderator_id: string;
  action: 'approve' | 'reject' | 'escalate';
  notes?: string;
  created_at: string;
}