export interface Application {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  remote: boolean;
  createdAtIso: string;
  updatedAtIso: string;
}

export interface Talent {
  id: string;
  name: string;
  slug: string;
  title: string;
  skills: string[];
  experience: number;
  location: string;
  availability: 'available' | 'busy' | 'unavailable';
  rate?: number;
  currency?: string;
  portfolio?: string;
  linkedin?: string;
  github?: string;
  createdAtIso: string;
  updatedAtIso: string;
}