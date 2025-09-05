export type ProjectStatus = 'InProgress' | 'Completed',

<<<<<<< HEAD
export type Project = {
  id: string,
  clientId: string, // slug for client/user
  talentSlug: string, // slug from TALENT_PROFILES
  title: string,
  status: ProjectStatus,
  completedAt?: string, // ISO string
},
=======
export type Project = {_id: string;
  clientId: string; // slug for client/user
  talentSlug: string; // slug from TALENT_PROFILES
  title: string;
  status: ProjectStatus;
  completedAt?: string; // ISO string};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type ReviewRole = 'client' | 'talent',

<<<<<<< HEAD
export type ReviewCategoryScores = {
  communication?: number, // 1-5 optional
  qualityOfWork?: number, // 1-5 optional
  timeliness?: number, // 1-5 optional
  wouldWorkWithAgain?: boolean, // optional
},

export type Review = {
  id: string,
  projectId: string,
  fromRole: ReviewRole,
  fromId: string, // clientId or talentSlug depending on fromRole
  toRole: ReviewRole, // opposite of fromRole
  toId: string, // target id (talentSlug or clientId)
  rating: number, // 1-5
  text: string,
  categories?: ReviewCategoryScores,
  anonymous?: boolean,
  approved: boolean, // admin moderated visibility
  reported: boolean,
  reports?: { reason: string, reportedAt: string }[],
  removed?: boolean,
  createdAt: string, // ISO
},

export type PublicReview = Omit<Review 'fromId'> & { authorName: string },

export type ReviewsSummary = {
  averageRating: number,
  totalReviews: number,
  totalCompletedProjects: number,
  mostRecent: PublicReview[]
},
=======
export type ReviewCategoryScores = {_communication?: number; // 1-5 optional
  qualityOfWork?: number; // 1-5 optional
  timeliness?: number; // 1-5 optional
  wouldWorkWithAgain?: boolean; // optional};

export type Review = {_id: string;
  projectId: string;
  fromRole: ReviewRole;
  fromId: string; // clientId or talentSlug depending on fromRole
  toRole: ReviewRole; // opposite of fromRole
  toId: string; // target id (talentSlug or clientId)
  rating: number; // 1-5
  text: string;
  categories?: ReviewCategoryScores;
  anonymous?: boolean;
  approved: boolean; // admin moderated visibility
  reported: boolean;
  reports?: { reason: string; reportedAt: string}[];
  removed?: boolean;
  createdAt: string; // ISO
};

export type PublicReview = Omit<Review, 'fromId'> & {_authorName: string};

export type ReviewsSummary = {_averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
  mostRecent: PublicReview[];};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
