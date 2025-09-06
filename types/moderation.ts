<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:types/moderation.ts

=======



export interface ModerationAction {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
<<<<<<< HEAD
export interface ModerationAction {
=======

export interface ModerationAction {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
<<<<<<< HEAD
<<<<<<< HEAD
}

=======

========
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/types/moderation.ts
;
export interface ModerationAction {
  id: string;
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,
<<<<<<<< HEAD:types/moderation.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/types/moderation.ts
}
export interface ModerationFlag {
=======
}


export interface ModerationFlag {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;
<<<<<<<< HEAD:types/moderation.ts
<<<<<<< HEAD
  createdAt: string;
  updatedAt: string;
  adminNotes?: string

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
=======
export type ContentType = 'listing' | 'message' | 'cv' | 'job',;
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned',;
;
export type AiScores = {;
  toxicity:number, // 0-1;
  nsfw:number, // 0-1;
  scam:number, // 0-1;
},;
;
export type FlaggedContent = {;
  id:string,;
  contentType:ContentType,;
  contentId:string,;
  userId:string,;
  userEmail:string,;
  reason:string,;
  status:ModerationStatus,;
  snippet:string, // small preview of content;
  metadata?:Record<string any>,;
  aiScores:AiScores,;
  createdAt:string,;
  updatedAt:string,;
  adminNotes?:string;
},
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/types/moderation.ts
=======
}
<<<<<<< HEAD
export interface ModerationFlag {
=======

export interface ModerationFlag {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporterId: string;
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
