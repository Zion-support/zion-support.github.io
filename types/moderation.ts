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
  createdAt: string;
  updatedAt: string;
  adminNotes?: string
ursor/fix-syntax-push-and-merge-to-main-7db5
}

