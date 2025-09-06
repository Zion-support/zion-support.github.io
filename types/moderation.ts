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
  createdAt: string;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
<<<<<<< HEAD
  createdAt: string;
=======
  created_at: string,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

}
export interface ModerationFlag {
=======
}


export interface ModerationFlag {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  status: ModerationStatus;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
