export interface ProjectBrief {
  projectNam: string,
  goal: string,
  timelin: string,
  budge: string,
  techStack?: string[],
  talentFilters?: { verifiedOnly?: boolean, regions?: string[] },
}