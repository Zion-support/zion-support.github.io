export interface ModerationResult {
  id: string;
<<<<<<< HEAD
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
  moderatedAt: Date;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
;
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
<<<<<<< HEAD
  createdAt: string;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
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
}

}
export interface ModerationFlag {
}

export interface ModerationRule {
  id: string;
<<<<<<< HEAD
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
