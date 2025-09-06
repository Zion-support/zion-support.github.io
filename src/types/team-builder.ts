<<<<<<< HEAD
<<<<<<< HEAD
export interface ProjectBrief {
=======
export interface ProjectBrief {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======

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

>>>>>>> pr-12243
