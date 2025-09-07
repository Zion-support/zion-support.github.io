export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
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
export interface ModerationResult {
  id: string;
export interface ModerationResult {
  id: string;
  content: string;
  status: 'approved' | 'rejected' | 'pending';
  reason?: string;
  moderatedBy?: string;
  moderatedAt: Date;;
  moderatedAt: Date;
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
export interface ModerationAction {

export interface ModerationAction {;






  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
  createdAt: string;
}
export interface ModerationFlag {

;
  moderatedAt: Date;
;
export interface ModerationAction {
  id: string;
  createdAt: string;}

}
  createdAt: string;
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
}

}
export interface ModerationFlag {
}

export interface ModerationRule {};
  id: string;
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,

}
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




}
  created_at: string;
  updated_at: string;
  admin_notes?: string,
}
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
}
}


}
export interface ModerationFlag {

}
export interface ModerationFlag {
}


export interface ModerationFlag {;

  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


  name: string;
  pattern: string;'
  action: 'approve' | 'reject' | 'flag';'
  severity: 'low' | 'medium' | 'high';
}
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


}
}
}'





}
export interface ModerationFlag {


export interface ModerationResult {
  id: string;


