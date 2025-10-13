export interface Application {
  id: string;
  name: string;
  email: string;
  position: string;
  experience: number;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

export type JobStatus = 'New' | 'In Progress' | 'Filled' | 'Closed';

export type Job = {
  id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string; // ISO string
  clientEmail: string;
  status: JobStatus;
  createdAtIso: string;
  updatedAtIso: string;
};

export type ApplicationStatus = 'applied' | 'skipped' | 'withdrawn';

export type Application = {
  id: string;
  job_id: string;
  talent_slug: string;
  status: ApplicationStatus;
  createdAtIso: string;
};

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
  updatedAt?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
}

export interface Newsletter {
  id: string;
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

export interface Analytics {
  id: string;
  event: string;
  data: Record<string, any>;
  timestamp: string;
  userId?: string;
}

export interface ErrorLog {
  id: string;
  message: string;
  stack?: string;
  timestamp: string;
  userId?: string;
  url?: string;
}

export interface PerformanceMetric {
  id: string;
  metric: string;
  value: number;
  timestamp: string;
  url?: string;
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
