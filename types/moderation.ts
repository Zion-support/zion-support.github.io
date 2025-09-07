<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export type AiScores = {;
  toxicity: number, // 0-1;
  nsfw: number, // 0-1;
  scam: number, // 0-1;
};
export type FlaggedContent = {;
=======
export interface ModerationResult {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
<<<<<<< HEAD
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
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  moderatedAt: Date;;
=======
  moderatedAt: Date;
=======
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
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



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  moderatedAt: Date;
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  createdAt: string;}
=======
  createdAt: string;
=======
created_at: string,

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  createdAt: string;
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
export interface ModerationFlag {
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface ModerationRule {};
  id: string;
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
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
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

}
export interface ModerationFlag {
=======
=======

}
export interface ModerationFlag {
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
}


export interface ModerationFlag {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
<<<<<<< HEAD
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  name: string;
  pattern: string;'
  action: 'approve' | 'reject' | 'flag';'
  severity: 'low' | 'medium' | 'high';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======





}
export interface ModerationFlag {


export interface ModerationResult {
  id: string;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
