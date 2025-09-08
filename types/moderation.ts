export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  type: 'content' | 'user' | 'spam' | 'inappropriate';
  status: ModerationStatus;
  reportedBy: string;
  reportedAt: string;
  content: string;
  reason: string;
  adminNotes?: string;
  resolvedAt?: string;
  resolvedBy?: string;
}