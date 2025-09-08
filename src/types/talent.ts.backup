<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface TalentProfile {
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

export interface WorkExperience {
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description: string;
  technologies: string[];
}

export interface TalentProfileWithSocial extends TalentProfile {
  social_links: {
    twitter?: string;
    website?: string;
    dribbble?: string;
    behance?: string;
  };
}

export const SAMPLE_TALENT_PROFILE: TalentProfileWithSocial = {
  id: '1',
  full_name: 'John Doe',
  bio: 'Experienced full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
  hourly_rate: 75,
  skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'],
  experience_years: 8,
  location: 'San Francisco, CA',
  avatar_url: '/avatars/john-doe.jpg',
  portfolio_url: 'https://johndoe.dev',
  linkedin_url: 'https://linkedin.com/in/johndoe',
  github_url: 'https://github.com/johndoe',
  rating: 4.9,
  review_count: 127,
  completed_projects: 45,
  availability: 'available',
  languages: ['English', 'Spanish'],
  certifications: ['AWS Certified Developer', 'Google Cloud Professional'],
  education: [
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      start_date: '2012-09-01',
      end_date: '2016-06-01',
      description: 'Focused on software engineering and algorithms',
    },
  ],
  work_history: [
    {
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      start_date: '2020-01-01',
      end_date: '2023-12-01',
      description: 'Led development of enterprise SaaS platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    },
  ],
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  social_links: {
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.dev',
    dribbble: 'https://dribbble.com/johndoe',
    behance: 'https://behance.net/johndoe',
  },
};
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
interface TalentProfile {
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
