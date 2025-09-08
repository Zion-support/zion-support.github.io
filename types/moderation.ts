export type ModerationStatus =
  | "pending"
  | "approved"
  | "removed"
  | "warned"
  | "banned";



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
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  moderatedBy?: string;
<<<<<<< HEAD
  moderatedAt: Date;;
=======
  moderatedAt: Date;
;
>>>>>>> origin/main
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
<<<<<<< HEAD
  createdAt: string;}
=======
  createdAt: string;
}
>>>>>>> origin/main
}
export interface ModerationFlag {

export interface ModerationFlag {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
=======

}
export interface ModerationFlag {
}
>>>>>>> origin/main

export interface ModerationRule {
  id: string;
  name: string;
  pattern: string;
  action: 'approve' | 'reject' | 'flag';
  severity: 'low' | 'medium' | 'high';
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
