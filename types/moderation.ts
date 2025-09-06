<<<<<<< HEAD
<<<<<<< HEAD
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
<<<<<<< HEAD
export interface ModerationAction {
=======

export interface ModerationAction {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



export interface ModerationAction {;


>>>>>>> main
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
<<<<<<< HEAD
}
<<<<<<< HEAD
export interface ModerationFlag {
=======

export interface ModerationFlag {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporterId: string;
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

}
export interface ModerationFlag {
=======
}


export interface ModerationFlag {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
