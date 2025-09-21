export interface JobApplication {
  id: string;
  talent_id: string;
  job_id: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  match_score: number | null;
  notes?: string;
  created_at: string;
  updated_at: string;
  talent_profile?: {
    full_name?: string;
    professional_title?: string;
    profile_picture_url?: string;
  };
  resume?: {
    file_url?: string;
  };
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  currency?: string;
  employment_type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  experience_level: 'entry' | 'mid' | 'senior' | 'lead';
  skills_required: string[];
  created_at: string;
  updated_at: string;
  applications?: JobApplication[];
}

export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  profile_picture_url?: string;
  bio?: string;
  skills: string[];
  experience_years: number;
  location?: string;
  availability: 'available' | 'busy' | 'unavailable';
  hourly_rate_min?: number;
  hourly_rate_max?: number;
  currency?: string;
  created_at: string;
  updated_at: string;
}