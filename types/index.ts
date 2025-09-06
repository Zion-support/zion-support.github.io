// Type definitions index;
export interface ContactInfo {};
  phone: string;
  email: string;
  address: string;
  site: string;
}

export interface AnimationState {};
  isLoaded: boolean;
  hasError: boolean;
}

export interface ProjectBrief {};
  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
}
