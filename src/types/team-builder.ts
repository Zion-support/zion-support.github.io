export interface ProjectBrief {
  projectName: string, goals: any
  timeline: string, budget: any
  techStack?: string[]
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }
