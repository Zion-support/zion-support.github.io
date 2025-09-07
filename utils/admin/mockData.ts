import { AdminUser, AdminService, AdminOrder, AdminPayment, AdminReview, AdminCategory, AdminVendor, AdminAnalytics } from './types';

export const MOCK_DATA = {
  users: [
    {
      id: '1',
      email: 'admin@ziontechgroup.com',
      name: 'Admin User',
      role: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      isActive: true,
    },
    {
      id: '2',
      email: 'user@example.com',
      name: 'John Doe',
      role: 'user',
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
      isActive: true,
    },
  ] as AdminUser[],

  services: [
    {
      id: '1',
      title: 'AI Development Service',
      description: 'Custom AI solutions for your business',
      price: 5000,
      category: 'AI',
      vendor: 'Zion Tech Group',
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      title: 'Web Development',
      description: 'Modern web applications',
      price: 3000,
      category: 'Web Development',
      vendor: 'Zion Tech Group',
      status: 'active' as const,
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  ] as AdminService[],

  orders: [
    {
      id: '1',
      userId: '2',
      serviceId: '1',
      amount: 5000,
      status: 'completed' as const,
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
    },
    {
      id: '2',
      userId: '2',
      serviceId: '2',
      amount: 3000,
      status: 'pending' as const,
      createdAt: '2024-01-04T00:00:00Z',
      updatedAt: '2024-01-04T00:00:00Z',
    },
  ] as AdminOrder[],

  payments: [
    {
      id: '1',
      orderId: '1',
      amount: 5000,
      method: 'credit_card',
      status: 'completed' as const,
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
    },
    {
      id: '2',
      orderId: '2',
      amount: 3000,
      method: 'paypal',
      status: 'pending' as const,
      createdAt: '2024-01-04T00:00:00Z',
      updatedAt: '2024-01-04T00:00:00Z',
    },
  ] as AdminPayment[],

  reviews: [
    {
      id: '1',
      userId: '2',
      serviceId: '1',
      rating: 5,
      comment: 'Excellent service!',
      status: 'approved' as const,
      createdAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-05T00:00:00Z',
    },
  ] as AdminReview[],

  categories: [
    {
      id: '1',
      name: 'AI Services',
      description: 'Artificial Intelligence related services',
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Web Development',
      description: 'Web application development services',
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ] as AdminCategory[],

  vendors: [
    {
      id: '1',
      name: 'Zion Tech Group',
      email: 'contact@ziontechgroup.com',
      phone: '+1-555-0123',
      address: '123 Tech Street, Silicon Valley, CA',
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ] as AdminVendor[],

  analytics: {
    totalUsers: 150,
    totalServices: 25,
    totalOrders: 45,
    totalRevenue: 125000,
    monthlyGrowth: 15.5,
    topServices: [
      {
        id: '1',
        title: 'AI Development Service',
        orders: 20,
        revenue: 100000,
      },
      {
        id: '2',
        title: 'Web Development',
        orders: 15,
        revenue: 45000,
      },
    ],
    recentOrders: [],
    recentUsers: [],
  } as AdminAnalytics,
};