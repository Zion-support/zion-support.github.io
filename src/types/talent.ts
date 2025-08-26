export interface Talent {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  skills: string[];
  experience: number;
  hourlyRate: number;
  currency: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  availability: 'full-time' | 'part-time' | 'contract' | 'freelance';
  rating: number;
  reviewCount: number;
  portfolio: PortfolioItem[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  socialLinks: SocialLinks;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'inactive' | 'suspended';
  verified: boolean;
  featured: boolean;
}
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  technologies: string[];
  completedAt: Date;
}
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
}
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
}
export interface Language {
  name: string;
  proficiency: 'basic' | 'conversational' | 'fluent' | 'native';
}
export interface SocialLinks {
  linkedin?: string;
  github?: string;
  portfolio?: string;
  twitter?: string;
}
export interface TalentFilter {
  skills?: string[];
  experienceRange?: {
    min: number;
    max: number;
  };
  hourlyRateRange?: {
    min: number;
    max: number;
  };
  location?: string;
  availability?: string;
  rating?: number;
  verified?: boolean;
  featured?: boolean;
  sortBy?: 'rating' | 'experience' | 'hourlyRate' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}
export interface TalentSearchResult {
  talents: Talent[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
export interface TalentFormData {
  name: string;
  email: string;
  bio: string;
  skills: string[];
  experience: number;
  hourlyRate: number;
  currency: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  availability: string;
  portfolio: PortfolioItem[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  socialLinks: SocialLinks;
}
