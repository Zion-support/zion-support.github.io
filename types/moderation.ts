<<<<<<< HEAD








export interface ModerationAction {;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;

  createdAt: string;
  updatedAt: string;
  adminNotes?: string

ursor/fix-syntax-push-and-merge-to-main-7db5
}





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
export type ContentType = 'listing' | 'message' | 'cv' | 'job';
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export type AiScores = {
  toxicity: number; // 0-1
  nsfw: number; // 0-1
  scam: number; // 0-1
};

export type FlaggedContent = {
  id: string;
  contentType: ContentType;
  contentId: string;
  userId: string;
  userEmail: string;
  reason: string;
  status: ModerationStatus;
  snippet: string; // small preview of content
  metadata?: Record<string, any>;
  aiScores: AiScores;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
};
>>>>>>> origin/auto/autonomy-17186719616
