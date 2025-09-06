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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
}
=======
<<<<<<< HEAD
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
}
=======
  talentFilters?: { 
    verifiedOnly?: boolean; 
    regions?: string[] 
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  experience: number;
  hourlyRate: number;
  availability: string;
  verified: boolean;
  region: string;
  portfolio?: string;
  rating?: number;
}

export interface ProjectTeam {
  id: string;
  projectId: string;
  members: TeamMember[];
  totalCost: number;
  estimatedDuration: string;
  status: 'draft' | 'pending' | 'approved' | 'active' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface TalentSearchFilters {
  skills?: string[];
  experience?: {
    min?: number;
    max?: number;
  };
  hourlyRate?: {
    min?: number;
    max?: number;
  };
  regions?: string[];
  verifiedOnly?: boolean;
  availability?: string;
  rating?: {
    min?: number;
  };
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
