<<<<<<< HEAD



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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;
<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;
<<<<<<< HEAD


=======


=======
<<<<<<< HEAD
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
<<<<<<< HEAD

export type ProjectStatus = 'InProgress' | 'Completed',
export type Project = {
  id: string,
  client_id: string, // slug for client / user;
  talent_slug: string, // slug from TALENT_PROFILES;
  title: string,
  status: ProjectStatus,
  completed_at?: string, // ISO string;
},
export type ReviewRole = 'client' | 'talent',
export type ReviewCategoryScores = {
  communication?: number, // 1 - 5 optional;
  qualityOfWork?: number, // 1 - 5 optional;
  timeliness?: number, // 1 - 5 optional;
  wouldWorkWithAgain?: boolean, // optional;
},
export type Review = {
  id: string,
  project_id: string,
  from_role: ReviewRole,
  from_id: string, // client_id or talent_slug depending on from_role;
  to_role: ReviewRole, // opposite of from_role;
  to_id: string, // target id (talent_slug or client_id);
  rating: number, // 1 - 5;
  text: string,
  categories?: ReviewCategoryScores,
  anonymous?: boolean,
  approved: boolean, // admin moderated visibility;
  reported: boolean,
  reports?: { reason: string, reported_at: string }[],
  removed?: boolean,
  created_at: string, // ISO;
},
export type PublicReview = Omit < Review 'from_id'> & { author_name: string },
export type ReviewsSummary = {
  average_rating: number,
  total_reviews: number,
  totalCompletedProjects: number,
  most_recent: PublicReview[];

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  mostRecent: PublicReview[];
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  mostRecent: PublicReview[];

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
