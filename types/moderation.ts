
<<<<<<< HEAD
=======
export interface ModerationResult  {id: string;
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;moderatedBy?: string;
  moderatedAt: Date;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;export type ModerationStatus  = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';export interface ModerationAction  {id: string;

;
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
  createdAt: string;
  created_at: string;

}
}
export interface ModerationFlag  {export interface ModerationFlag  {id: string;
  type: "spam" | "inappropriate" | "harassment" | "other";
  content: string;
  reporterId: string;
  targetId: string;
  targetType: "post" | "comment" | "user";
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}}
export interface ModerationFlag  {}
export interface ModerationFlag {}export interface ModerationRule  {id: string;
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
}type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
>>>>>>> origin/merge-pr-12271
