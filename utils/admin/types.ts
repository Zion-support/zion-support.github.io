export type AdminType = 'users' | 'projects' | 'services' | 'analytics' | 'settings';

export const ADMIN_TYPES = {
  USERS: 'users' as const,
  PROJECTS: 'projects' as const,
  SERVICES: 'services' as const,
  ANALYTICS: 'analytics' as const,
  SETTINGS: 'settings' as const,
};

export interface ListParams {
  page?: number;
  limit?: number;
  pageSize?: number;
  search?: string;
  sort?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
  status: 'active' | 'inactive' | 'suspended';
}

export interface AdminProject {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'in_progress' | 'completed' | 'cancelled';
  clientId: string;
  clientName: string;
  createdAt: string;
  updatedAt: string;
  budget?: number;
  deadline?: string;
}

export interface AdminService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface AdminAnalytics {
  totalUsers: number;
  totalProjects: number;
  totalRevenue: number;
  activeUsers: number;
  completedProjects: number;
  monthlyGrowth: number;
}