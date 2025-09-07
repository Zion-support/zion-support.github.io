<<<<<<< HEAD
export type AdminType = 'users' | 'projects' | 'services' | 'analytics' | 'settings';

export const ADMIN_TYPES = {
  USERS: 'users' as const,
  PROJECTS: 'projects' as const,
  SERVICES: 'services' as const,
  ANALYTICS: 'analytics' as const,
  SETTINGS: 'settings' as const,
};
=======
export const ADMIN_TYPES = {
  USER: 'user',
  SERVICE: 'service',
  ORDER: 'order',
  PAYMENT: 'payment',
  REVIEW: 'review',
  CATEGORY: 'category',
  VENDOR: 'vendor',
  ANALYTICS: 'analytics',
} as const;

export type AdminType = typeof ADMIN_TYPES[keyof typeof ADMIN_TYPES];
>>>>>>> origin/chore/fix-lint-and-merge

export interface ListParams {
  page?: number;
  limit?: number;
<<<<<<< HEAD
  pageSize?: number;
  search?: string;
  sort?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
=======
  search?: string;
  sort?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  order?: 'asc' | 'desc';
  pageSize?: number;
  filters?: Record<string, any>;
  format?: 'csv';
>>>>>>> origin/chore/fix-lint-and-merge
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
<<<<<<< HEAD
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
=======
  updatedAt: string;
  isActive: boolean;
>>>>>>> origin/chore/fix-lint-and-merge
}

export interface AdminService {
  id: string;
<<<<<<< HEAD
  name: string;
  description: string;
  category: string;
  price: number;
  status: 'active' | 'inactive';
=======
  title: string;
  description: string;
  price: number;
  category: string;
  vendor: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface AdminOrder {
  id: string;
  userId: string;
  serviceId: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface AdminPayment {
  id: string;
  orderId: string;
  amount: number;
  method: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface AdminReview {
  id: string;
  userId: string;
  serviceId: string;
  rating: number;
  comment: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface AdminCategory {
  id: string;
  name: string;
  description: string;
  parentId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminVendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive' | 'pending';
>>>>>>> origin/chore/fix-lint-and-merge
  createdAt: string;
  updatedAt: string;
}

export interface AdminAnalytics {
  totalUsers: number;
<<<<<<< HEAD
  totalProjects: number;
  totalRevenue: number;
  activeUsers: number;
  completedProjects: number;
  monthlyGrowth: number;
=======
  totalServices: number;
  totalOrders: number;
  totalRevenue: number;
  monthlyGrowth: number;
  topServices: Array<{
    id: string;
    title: string;
    orders: number;
    revenue: number;
  }>;
  recentOrders: AdminOrder[];
  recentUsers: AdminUser[];
>>>>>>> origin/chore/fix-lint-and-merge
}