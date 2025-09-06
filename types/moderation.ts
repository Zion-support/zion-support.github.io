export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
<<<<<<< HEAD
export interface ModerationAction {
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
=======
;
export interface ModerationAction {
  id: string;
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ModerationFlag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;
<<<<<<< HEAD
  createdAt: string;
  updatedAt: string;
  adminNotes?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
=======
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
