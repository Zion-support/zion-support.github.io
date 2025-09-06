<<<<<<< HEAD
export type ProjectStatus = 'InProgress' | 'Completed';
export type Project = {
  id: string;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type ProjectStatus = 'InProgress' | 'Completed',;
export type Project = {;
  id: string,;
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string,;
  status: ProjectStatus,;
  completedAt?: string, // ISO string;
},;
export type ReviewRole = 'client' | 'talent',;
export type ReviewCategoryScores = {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type ProjectStatus = 'InProgress' | 'Completed';
export type Project = {
  id: string;
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  clientId: string; // slug for client/user
  talentSlug: string; // slug from TALENT_PROFILES
  title: string;
  status: ProjectStatus;
  completedAt?: string; // ISO string
}
export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {
  communication?: number; // 1-5 optional
  qualityOfWork?: number; // 1-5 optional
  timeliness?: number; // 1-5 optional
  wouldWorkWithAgain?: boolean; // optional
}
<<<<<<< HEAD
=======
=======
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string;
  status: ProjectStatus,;
  completedAt?: string, // ISO string;
};
export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;
<<<<<<< HEAD
=======
<<<<<<< HEAD
},;
export type Review = {;
  id: string,;
  projectId: string,;
  fromRole: ReviewRole,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  fromId: string; // clientId or talentSlug depending on fromRole
  toRole: ReviewRole; // opposite of fromRole
  toId: string; // target id (talentSlug or clientId)
  rating: number; // 1-5
  text: string;
  categories?: ReviewCategoryScores;
  anonymous?: boolean;
  approved: boolean; // admin moderated visibility
  reported: boolean;
  reports?: { reason: string; reportedAt: string }[];
  removed?: boolean;
  createdAt: string; // ISO
}
export type PublicReview = Omit<Review, 'fromId'> & { authorName: string }
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  text: string,;
  categories?: ReviewCategoryScores,;
  anonymous?: boolean,;
  approved: boolean, // admin moderated visibility;
  reported: boolean,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  text: string;
  categories?: ReviewCategoryScores,;
  anonymous?: boolean,;
  approved: boolean, // admin moderated visibility;
  reported: boolean;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type PublicReview = Omit<Review 'fromId'> & { authorName: string },;
export type ReviewsSummary = {;
  averageRating: number,;
  totalReviews: number,;
  totalCompletedProjects: number,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type PublicReview = Omit<Review 'fromId'> & { authorName: string };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  mostRecent: PublicReview[];
<<<<<<< HEAD
}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  mostRecent: PublicReview[];
}