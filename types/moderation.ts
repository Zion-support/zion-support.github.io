export type ContentType = $2;
export type ModerationStatus = $2;
export type AiScores = {
  toxicity: number, // 0-1
  nsfw: number, // 0-1
  scam: number, // 0-1
},


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
export type FlaggedContent = $2;
  contentType: ContentType,
  contentId: string,
  userId: string,
  userEmail: string,
  reason: string,
  status: ModerationStatus,
  snippet: string, // small preview of content
  metadata?: Record<string, any>,
  aiScores: AiScores,
  createdAt: string,
  updatedAt: string,
  adminNotes?: string
},
