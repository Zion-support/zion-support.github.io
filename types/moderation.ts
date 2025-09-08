export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  type: string;
  targetId: string;
  targetType: string;
  reporterId: string;
  reason: string;
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

export interface ModerationAction {
  action: 'approve' | 'remove' | 'warn' | 'ban';
  adminNotes?: string;
}