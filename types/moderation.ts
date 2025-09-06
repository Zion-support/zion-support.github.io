export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface ModerationFlag {
  id: string;
  contentType: 'post' | 'comment' | 'user';
  contentId: string;
  reason: string;
  userEmail: string;
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}