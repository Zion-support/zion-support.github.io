export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export interface AiScores {
  toxicity: number; // 0..1
  nsfw: number; // 0..1
  scam: number; // 0..1
}

export interface FlaggedContent {
  id: string;
  contentId: string;
  contentType: string; // e.g., 'postcomment', 'profile'
  reason: string;
  userId: string;
  userEmail?: string;
  status: ModerationStatus;
  aiScores: AiScores;
  adminNotes?: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}