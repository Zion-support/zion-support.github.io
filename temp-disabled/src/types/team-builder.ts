:src_backup/types/team-builder.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

  projectName: string, goals: string,
  timeline: string, budget: string,;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
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
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface ProjectRequirements  {brief: ProjectBrief;
  teamSize: number;
  requiredSkills: string[];
  budget: {min: number;}
    max: number;}
  }timeline: {start: string;}
    end: string;}
  }deliverables: string[];
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/types/team-builder.ts
