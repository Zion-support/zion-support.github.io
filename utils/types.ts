/**
 * Common types
 */

export interface Application {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped' | 'reviewed' | 'accepted' | 'rejected';
  createdAtIso: string;
  updatedAtIso?: string;
  notes?: string;
  score?: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  skills: string[];
  requirements: string[];
  benefits: string[];
  status: 'open' | 'closed' | 'paused';
  createdAtIso: string;
  updatedAtIso?: string;
  expiresAtIso?: string;
  applicationsCount?: number;
}

export interface Talent {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: number;
  location: string;
  availability: 'available' | 'busy' | 'unavailable';
  hourlyRate?: number;
  portfolio: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  createdAtIso: string;
  updatedAtIso?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'talent' | 'client' | 'admin';
  avatar?: string;
  createdAtIso: string;
  updatedAtIso?: string;
  lastLoginAtIso?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  talentId?: string;
  status: 'draft' | 'open' | 'in-progress' | 'completed' | 'cancelled';
  budget: number;
  currency: string;
  timeline: string;
  skills: string[];
  createdAtIso: string;
  updatedAtIso?: string;
  completedAtIso?: string;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  type: 'text' | 'file' | 'image';
  read: boolean;
  createdAtIso: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'application' | 'message' | 'project' | 'system';
  title: string;
  message: string;
  read: boolean;
  data?: Record<string, any>;
  createdAtIso: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}