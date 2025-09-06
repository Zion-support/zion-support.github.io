export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {

export interface ModerationAction {;
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
}
export interface ModerationFlag {

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
ursor/fix-syntax-push-and-merge-to-main-7db5
}

