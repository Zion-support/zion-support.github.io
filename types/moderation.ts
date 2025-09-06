<<<<<<< HEAD
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {
=======
<<<<<<< HEAD
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
<<<<<<< HEAD
export interface ModerationAction {
=======

export interface ModerationAction {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
}
<<<<<<< HEAD
export interface ModerationFlag {
<<<<<<< HEAD
=======
=======
}


export interface ModerationFlag {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
