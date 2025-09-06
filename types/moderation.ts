export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationAction {
  id: string;
  type: string;
  content: string;
  reason: string;
  status: ModerationStatus;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}