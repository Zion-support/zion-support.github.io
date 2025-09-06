

export interface ModerationAction {;

  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
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
  adminNotes?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
