// Type definitions index

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

export interface ProjectBrief {
  projectName: string;
  goals: string;
  timeline: string;
  budget: string;
  techStack?: string[];
  talentFilters?: { verifiedOnly?: boolean; regions?: string[] };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'cancelled';
  startDate: string;
  endDate?: string;
  clientId: string;
  teamMembers: string[];
}

export interface Talent {
  id: string;
  name: string;
  skills: string[];
  experience: number;
  location: string;
  hourlyRate: number;
  availability: boolean;
  rating: number;
  verified: boolean;
}

export interface Review {
  id: string;
  userId: string;
  projectId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Re-export types from other files
export * from './moderation';
export * from './global';