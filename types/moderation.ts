<<<<<<< HEAD

export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



export interface ModerationAction {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  flagId: string;
  action: ModerationStatus;
  adminNotes?: string;
  adminId: string;
  reason?: string;
  createdAt: string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

;
export interface ModerationAction {
  id: string;
  type: 'approve' | 'remove' | 'warn' | 'ban';
  target_id: string;
  target_type: 'post' | 'comment' | 'user';
  admin_id: string;
  reason?: string;
  created_at: string,

}
<<<<<<< HEAD
=======
export interface ModerationFlag {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export interface ModerationFlag {

export interface ModerationFlag {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
