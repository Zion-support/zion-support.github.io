export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {
=======
=======


  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export type Review = {
  id: string;
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
  reports?: { reason: string; reportedAt: string }[];
  removed?: boolean;
  createdAt: string; // ISO
}
export type PublicReview = Omit<Review, 'fromId'> & { authorName: string }
=======
=======

=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
}};

<<<<<<< HEAD
}
export type ProjectStatus = 'InProgress' | 'Completed',;
;
export type Project = {;
  id:string,;
  clientId:string, // slug for client/user;
  talentSlug:string, // slug from TALENT_PROFILES;
  title:string,;
  status:ProjectStatus,;
  completedAt?:string, // ISO string;
},;
;
export type ReviewRole = 'client' | 'talent',;
;
export type ReviewCategoryScores = {;
  communication?:number, // 1-5 optional;
  qualityOfWork?:number, // 1-5 optional;
  timeliness?:number, // 1-5 optional;
  wouldWorkWithAgain?:boolean, // optional;
},;
;
export type Review = {;
  id:string,;
  projectId:string,;
  fromRole:ReviewRole,;
  fromId:string, // clientId or talentSlug depending on fromRole;
  toRole:ReviewRole, // opposite of fromRole;
  toId:string, // target id (talentSlug or clientId);
  rating:number, // 1-5;
  text:string,;
  categories?:ReviewCategoryScores,;
  anonymous?:boolean,;
  approved:boolean, // admin moderated visibility;
  reported:boolean,;
  reports?:{ reason:string, reportedAt:string }[],;
  removed?:boolean,;
  createdAt:string, // ISO;
},;
;
export type PublicReview = Omit<Review 'fromId'> & { authorName:string },;
;
export type ReviewsSummary = {;
  averageRating:number,;
  totalReviews:number,;
  totalCompletedProjects:number,;
  mostRecent:PublicReview[];},
export type ProjectStatus = 'InProgress' | 'Completed';
export type ReviewRole = 'client' | 'talent';
  mostRecent: PublicReview[];
}
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
