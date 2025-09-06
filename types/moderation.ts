
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
}

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

}

