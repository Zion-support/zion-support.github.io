
export type ProjectStatus = 'InProgress' | 'Completed';
export type Project = {
  id: string;

  communication?: number, // 1-5 optional;
  qualityOfWork?: number, // 1-5 optional;
  timeliness?: number, // 1-5 optional;
  wouldWorkWithAgain?: boolean, // optional;

};

export type Review = {
  id: string;
  projectId: string;
  fromRole: ReviewRole;

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ReviewsSummary = {
  averageRating: number;
  totalReviews: number;
  totalCompletedProjects: number;

  mostRecent: PublicReview[];
  mostRecent: PublicReview[];

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
