export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
;
export interface ModerationAction {
  id: string;
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,
}
export interface ModerationFlag {
}


export interface ModerationFlag {;

  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;
}
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
