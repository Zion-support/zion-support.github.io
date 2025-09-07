import { AdminUser, AdminProject, AdminService, AdminAnalytics } from './types';

export const MOCK_DATA = {
  users: [
    {
      id: '1',
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
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Web Development',
      description: 'Custom web applications and websites',
      category: 'Development',
      price: 100,
      status: 'active' as const,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
  ] as AdminService[],

  analytics: {
    totalUsers: 150,
    totalProjects: 45,
    totalRevenue: 250000,
    activeUsers: 120,
    completedProjects: 38,
    monthlyGrowth: 12.5,
  } as AdminAnalytics,
};