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

export type ProjectStatus = 'InProgress' | 'Completed';

  id: string;
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string;
  status: ProjectStatus;
  completedAt?: string, // ISO string;
};
export type ReviewRole = 'client' | 'talent';

  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;

export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;

  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;

  text: string;
  categories?: ReviewCategoryScores;
  anonymous?: boolean;
  approved: boolean, // admin moderated visibility;
  reported: boolean;

  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;

export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;

export type ProjectStatus = 'InProgress' | 'Completed',
export type Project = {

  mostRecent: PublicReview[];

};

  id: string;

  userId: string;
  serviceId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Project = {;
  id: string;
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string;
  status: ProjectStatus;
  completedAt?: string, // ISO string;
};
export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {;
  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;

},;
export type Review = {;
  id: string,;
  projectId: string,;
  fromRole: ReviewRole,;
};

export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;

    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}