export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
}
export interface ModerationFlag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;
}
=======
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
