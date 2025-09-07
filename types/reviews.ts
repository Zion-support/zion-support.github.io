export type ProjectStatus = $2;
export type Project = $2;
  clientId: string, // slug for client/user
  talentSlug: string, // slug from TALENT_PROFILES
  title: string,
  status: ProjectStatus,
  completedAt?: string, // ISO string
},

export type ReviewRole = $2;
export type ReviewCategoryScores = {
  communication?: number, // 1-5 optional
  qualityOfWork?: number, // 1-5 optional
  timeliness?: number, // 1-5 optional
  wouldWorkWithAgain?: boolean, // optional
},

export type Review = $2;
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
  reports?: { reason: string, reportedAt: string}[],
  removed?: boolean,
  createdAt: string, // ISO
},

export type PublicReview = Omit<Review, 'fromId'> & { authorName: string},

export type ReviewsSummary = $2;
  totalReviews: number,
  totalCompletedProjects: number,
  mostRecent: PublicReview[]
},