export type ModerationStatus =
  | "pending"
  | "approved"
  | "removed"
  | "warned"
  | "banned";



export interface ModerationAction {;


  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;

;
export interface ModerationAction {
  id: string;
  type: "approve" | "remove" | "warn" | "ban";
  targetId: string;
  targetType: "post" | "comment" | "user";
  adminId: string;
  reason?: string;
  createdAt: string;
}


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
