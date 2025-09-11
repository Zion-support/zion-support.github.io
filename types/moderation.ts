


export interface ModerationAction {;


export interface ModerationAction {;
=======  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;


export interface ModerationFlag {;

  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
export type ContentType = 'listing' | 'message' | 'cv' | 'job',;
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned',;
;
export type AiScores = {;
  toxicity: number, // 0-1;
  nsfw: number, // 0-1;
  scam: number, // 0-1;
};
export type FlaggedContent = {;
=======  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
export interface ModerationFlag {
=======
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

}
export interface ModerationFlag {
=======
}


export interface ModerationFlag {;
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
