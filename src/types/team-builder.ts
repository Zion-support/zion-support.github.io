  matchedTalent: TalentProfile[]; // Talent profiles matching this role
}
;
export interface TeamRecommendation {

  id?: string; // Optional: if we save recommendations
  projectBriefId?: string; // Link to the project brief"
  recommendationSummary: string; // e.g., "1 Product Manager, 2 Fullstack Engineers, 1 DevOps, 1 QA"
  roles: RecommendedRole[];
  totalEstimatedRate: {

    // Sum of (hourlyRateRange.avg * weeklyHours) for all roles;
    min: number;
    max: number};
  totalWeeklyBurn: {

    // Sum of (hourlyRateRange.avg * weeklyHours) for all roles - same as totalEstimatedRate for now
    min: number;
    max: number};
  totalProjectEstimate: {

    // Based on timeline from brief and weekly burn
    min: number;
    max: number};
  createdAt?: string}
"// Optional: For "Invite to Team"
export interface TeamInvite {

  id?: string;
  teamRecommendationId?: string;
  talentId: string;
  role: string; // The role they are being invited for'
  status: 'pending' | 'accepted' | 'declined';
  createdAt?: string;
  updatedAt?: string}
'"