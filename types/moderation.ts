export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
<<<<<<< HEAD
export interface ModerationAction {

export interface ModerationAction {;






  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';




;
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
created_at: string,


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
export interface ModerationFlag {


export interface ModerationResult {
  id: string;
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
  moderatedAt: Date;

}

export interface ModerationRule {
  id: string;
}

  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
}

=======
export type AiScores = {;
  toxicity: number, // 0-1;
  nsfw: number, // 0-1;
  scam: number, // 0-1;
};
export type FlaggedContent = {;
  id: string;
  contentType: ContentType;
  contentId: string;
  userId: string;
  userEmail: string;
  reason: string;
  status: ModerationStatus;
  snippet: string, // small preview of content;
  metadata?: Record<string, any>;
  aiScores: AiScores;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
