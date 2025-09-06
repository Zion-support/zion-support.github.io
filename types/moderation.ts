







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


