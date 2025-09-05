export interface ProjectBrief {_projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[]};
}