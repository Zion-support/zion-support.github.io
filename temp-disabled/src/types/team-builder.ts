:src_backup/types/team-builder.ts
}

  projectName: string, goals: string,
  timeline: string, budget: string,;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }

}

  projectName: string, goals: string,
  timeline: string, budget: string,;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }

export interface ProjectBrief {;
  projectNam: e: string,;
  goal: s: string,;
  timelin: e: string,;
  budge: t: string,;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean, regions?: string[] }

export interface ProjectRequirements {
  brief: ProjectBrief;
  teamSize: number;
  requiredSkills: string[];
  budget: {
    min: number;
    max: number;
  };
  timeline: {
    start: string;
    end: string;
  };
  deliverables: string[];
}
export interface ProjectRequirements  {brief: ProjectBrief;
  teamSize: number;
  requiredSkills: string[];
  budget: {min: number;}
    max: number;}
  }timeline: {start: string;}
    end: string;}
  }deliverables: string[];
}
