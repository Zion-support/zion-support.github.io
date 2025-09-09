export interface JobMatch {
  id: string;
  jobId: string;
  talentId: string;
  matchPercentage: number;
  job: {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
    salary: {
      min: number;
      max: number;
      currency: string;
    };
    type: 'full-time' | 'part-time' | 'contract' | 'freelance';
    remote: boolean;
    company: {
      id: string;
      name: string;
      logo?: string;
    };
    postedAt: string;
    deadline: string;
  };
  talent: {
    id: string;
    name: string;
    title: string;
    skills: string[];
    experience: number;
    location: string;
    hourlyRate: number;
    profilePicture?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  talentId: string;
  coverLetter: string;
  resume?: string;
  portfolio?: string[];
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'accepted';
  appliedAt: string;
  reviewedAt?: string;
  notes?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  remote: boolean;
  companyId: string;
  company: {
    id: string;
    name: string;
    logo?: string;
    description?: string;
  };
  skills: string[];
  experience: {
    min: number;
    max: number;
  };
  postedAt: string;
  deadline: string;
  status: 'active' | 'paused' | 'closed' | 'draft';
  applicationsCount: number;
  viewsCount: number;
}