export interface TalentProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: number;
  location: string;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  profilePicture?: string;
  portfolio?: string[];
  certifications?: string[];
  languages?: string[];
  rating?: number;
  reviews?: number;
  completedProjects?: number;
  responseTime?: string;
  verified?: boolean;
  createdAt: string;
  updatedAt: string;
  fullName?: string;
  professionalTitle?: string;
  key_projects?: string[];
  full_name?: string;
}

export interface TalentFilter {
  skills?: string[];
  location?: string;
  minRate?: number;
  maxRate?: number;
  availability?: string;
  experience?: number;
  rating?: number;
}

export interface TalentSearchResult {
  profiles: TalentProfile[];
  total: number;
  page: number;
  limit: number;
}