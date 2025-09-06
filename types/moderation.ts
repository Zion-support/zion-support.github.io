<<<<<<< HEAD

=======



export interface ModerationAction {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
<<<<<<< HEAD
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
