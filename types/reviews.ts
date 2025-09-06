<<<<<<< HEAD


<<<<<<< HEAD

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type ProjectStatus = 'InProgress' | 'Completed';
export type Project = {
  id: string;
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
  clientId: string, // slug for client/user;
  talentSlug: string, // slug from TALENT_PROFILES;
  title: string;
  status: ProjectStatus,;
  completedAt?: string, // ISO string;
};
export type ReviewRole = 'client' | 'talent';
export type ReviewCategoryScores = {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;
<<<<<<< HEAD


<<<<<<< HEAD

=======
},;
export type Review = {;
  id: string,;
  projectId: string,;
  fromRole: ReviewRole,;
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;


<<<<<<< HEAD
<<<<<<< HEAD
=======


=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  fromId: string, // clientId or talentSlug depending on fromRole;
  toRole: ReviewRole, // opposite of fromRole;
  toId: string, // target id (talentSlug or clientId);
  rating: number, // 1-5;
<<<<<<< HEAD
<<<<<<< HEAD


=======
  text: string,;
  categories?: ReviewCategoryScores,;
  anonymous?: boolean,;
  approved: boolean, // admin moderated visibility;
  reported: boolean,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  text: string;
  categories?: ReviewCategoryScores,;
  anonymous?: boolean,;
  approved: boolean, // admin moderated visibility;
  reported: boolean;
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  reports?: { reason: string, reportedAt: string }[],;
  removed?: boolean,;
  createdAt: string, // ISO;
},;

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export type PublicReview = Omit<Review 'fromId'> & { authorName: string },;
export type ReviewsSummary = {;
  averageRating: number,;
  totalReviews: number,;
  totalCompletedProjects: number,;
export type PublicReview = Omit<Review 'fromId'> & { authorName: string };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  mostRecent: PublicReview[];

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

  mostRecent: PublicReview[];

};

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
};
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
