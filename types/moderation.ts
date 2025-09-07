id: string;

  id: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface ModerationResult {
  id: string;
=======


export interface ModerationAction {;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {

export interface ModerationAction {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface ModerationResult {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  id: string;
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  moderatedAt: Date;;
=======
>>>>>>> main
  moderatedAt: Date;
=======
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {

export interface ModerationAction {;






  id: string;
<<<<<<< HEAD
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
=======
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
>>>>>>> main
  adminId: string;
  reason?: string;
  createdAt: string;

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

;

export interface ModerationAction {
  id: string;
<<<<<<< HEAD
=======
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;

}

}
export interface ModerationFlag {

export interface ModerationFlag {;
  id: string;
>>>>>>> main
  type: "spam" | "inappropriate" | "harassment" | "other";
  content: string;
  reporterId: string;
  targetId: string;
  targetType: "post" | "comment" | "user";
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
<<<<<<< HEAD

export interface ModerationRule {};
  id: string;
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main

}
export interface ModerationFlag {
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface ModerationRule {};
  id: string;
<<<<<<< HEAD
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

}
export interface ModerationFlag {

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
}
export interface ModerationFlag {

export interface ModerationFlag {;
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
ursor/fix-syntax-push-and-merge-to-main-7db5
>>>>>>> main
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

}

export interface ModerationFlag {;

  id: string;

  name: string;
  pattern: string;'
  action: 'approve' | 'reject' | 'flag';'
  severity: 'low' | 'medium' | 'high';