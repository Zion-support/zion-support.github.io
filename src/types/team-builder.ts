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
