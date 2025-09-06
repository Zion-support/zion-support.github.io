<<<<<<< HEAD
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationAction {;
  id: string;
  type: 'approve' | 'remove' | 'warn' | 'ban';
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  adminId: string;
  reason?: string;
  createdAt: string,
}

export interface ModerationFlag {;
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporterId: string;
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string,
}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
