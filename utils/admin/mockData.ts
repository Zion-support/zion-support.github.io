<<<<<<< HEAD
import { AdminUser, AdminProject, AdminService, AdminAnalytics } from './types';
=======
import { AdminUser, AdminService, AdminOrder, AdminPayment, AdminReview, AdminCategory, AdminVendor, AdminAnalytics } from './types';
>>>>>>> origin/chore/fix-lint-and-merge

export const MOCK_DATA = {
  users: [
    {
      id: '1',
<<<<<<< HEAD
      email: 'john.doe@example.com',
      name: 'John Doe',
      role: 'admin',
      createdAt: '2024-01-15T10:30:00Z',
      lastLogin: '2024-01-20T14:22:00Z',
      status: 'active' as const,
    },
    {
      id: '2',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      role: 'user',
      createdAt: '2024-01-16T09:15:00Z',
      lastLogin: '2024-01-19T16:45:00Z',
      status: 'active' as const,
    },
    {
      id: '3',
      email: 'bob.wilson@example.com',
      name: 'Bob Wilson',
      role: 'user',
      createdAt: '2024-01-17T11:20:00Z',
      status: 'inactive' as const,
    },
  ] as AdminUser[],

  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      status: 'in_progress' as const,
      clientId: 'client-1',
      clientName: 'TechCorp Inc.',
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2024-01-20T15:30:00Z',
      budget: 50000,
      deadline: '2024-03-15T23:59:59Z',
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application for iOS and Android',
      status: 'completed' as const,
      clientId: 'client-2',
      clientName: 'StartupXYZ',
      createdAt: '2023-12-01T10:00:00Z',
      updatedAt: '2024-01-15T12:00:00Z',
      budget: 30000,
      deadline: '2024-01-15T23:59:59Z',
    },
  ] as AdminProject[],

  services: [
    {
      id: '1',
      name: 'AI Consulting',
      description: 'Expert AI strategy and implementation consulting',
      category: 'AI Services',
      price: 150,
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
<<<<<<< HEAD
      name: 'Web Development',
      description: 'Custom web applications and websites',
      category: 'Development',
      price: 100,
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
<<<<<<< HEAD
  ] as AdminService[],

  analytics: {
    totalUsers: 150,
    totalProjects: 45,
    totalRevenue: 250000,
    activeUsers: 120,
    completedProjects: 38,
    monthlyGrowth: 12.5,
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
  } as AdminAnalytics,
};