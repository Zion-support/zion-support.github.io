<<<<<<< HEAD


=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
}

  projectName: string, goals: string,
  timeline: string, budget: string,;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }
<<<<<<< HEAD

=======
export interface ProjectBrief {
  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
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


<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
