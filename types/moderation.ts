id: string;

  id: string;

  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;

;

export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;

}

}
export interface ModerationFlag {

export interface ModerationFlag {;
  id: string;
  type: "spam" | "inappropriate" | "harassment" | "other";
  content: string;
  reporterId: string;
  targetId: string;
  targetType: "post" | "comment" | "user";
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;

export interface ModerationRule {};
  id: string;

}
export interface ModerationFlag {

export interface ModerationFlag {;
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;

  created_at: string;
  updated_at: string;
  admin_notes?: string,
}

}

export interface ModerationFlag {;

  id: string;

  name: string;
  pattern: string;'
  action: 'approve' | 'reject' | 'flag';'
  severity: 'low' | 'medium' | 'high';