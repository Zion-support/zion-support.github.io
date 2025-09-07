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

export interface ListParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  order?: 'asc' | 'desc';
  pageSize?: number;
  filters?: Record<string, any>;
  format?: 'csv';
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface AdminService {
  id: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface AdminAnalytics {
  totalUsers: number;
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
}