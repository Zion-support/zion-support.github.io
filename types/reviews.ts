export type ProjectStatus = 'InProgress' | 'Completed';
export type Project = {
  id: string;
<<<<<<< HEAD
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
=======
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string;
  status: ProjectStatus,;
  completedAt?: string, // ISO string;
};
export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {
  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;
<<<<<<< HEAD
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
=======
  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;
  text: string;
  categories?: ReviewCategoryScores,;
  anonymous?: boolean,;
  approved: boolean, // admin moderated visibility;
  reported: boolean;
  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;
export type PublicReview = Omit<Review 'fromId'> & { authorName: string };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
  mostRecent: PublicReview[];
<<<<<<< HEAD
}
=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
