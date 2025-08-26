import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Edit, 
  Trash2, 
  Star, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign,
  Users,
  Code,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Heart,
  Building,
  Cpu,
  Lock,
  Globe,
  Award,
  CheckCircle,
  X,
  ArrowRight,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap as Lightning,
  BookOpen,
  FileText,
  ShoppingCart,
  Briefcase,
  CreditCard,
  Download,
  Upload,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface DashboardStats {
  totalServices: number;
  activeProjects: number;
  totalRevenue: number;
  customerSatisfaction: number;
  pendingRequests: number;
  completedProjects: number;
}

interface RecentActivity {
  id: string;
  type: 'service' | 'project' | 'message' | 'payment';
  title: string;
  description: string;
  timestamp: Date;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  icon: any;
  color: string;
}

interface QuickAction {
  name: string;
  description: string;
  icon: any;
  path: string;
  color: string;
  count?: number;
}

const mockStats: DashboardStats = {
  totalServices: 24,
  activeProjects: 8,
  totalRevenue: 125000,
  customerSatisfaction: 4.8,
  pendingRequests: 3,
  completedProjects: 156
};

const mockRecentActivity: RecentActivity[] = [
  {
    id: '1',
    type: 'service',
    title: 'AI Analytics Platform',
    description: 'New service request received from TechCorp Solutions',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: 'pending',
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    id: '2',
    type: 'project',
    title: 'Cloud Migration',
    description: 'Project "Digital Transformation" completed successfully',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    status: 'completed',
    icon: Cloud,
    color: 'text-blue-500'
  },
  {
    id: '3',
    type: 'message',
    title: 'Customer Inquiry',
    description: 'New message from Sarah Johnson regarding cybersecurity services',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    status: 'active',
    icon: MessageCircle,
    color: 'text-green-500'
  },
  {
    id: '4',
    type: 'payment',
    title: 'Payment Received',
    description: 'Payment of $5,000 received for AI Business Intelligence service',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    status: 'completed',
    icon: DollarSign,
    color: 'text-green-500'
  }
];

const quickActions: QuickAction[] = [
  {
    name: 'Add New Service',
    description: 'Create and publish a new service offering',
    icon: Plus,
    path: '/services/new',
    color: 'from-blue-500 to-cyan-500',
    count: 0
  },
  {
    name: 'View Projects',
    description: 'Monitor active and completed projects',
    icon: Briefcase,
    path: '/projects',
    color: 'from-purple-500 to-pink-500',
    count: mockStats.activeProjects
  },
  {
    name: 'Customer Messages',
    description: 'Respond to customer inquiries and requests',
    icon: MessageCircle,
    path: '/messages',
    color: 'from-green-500 to-teal-500',
    count: 5
  },
  {
    name: 'Analytics',
    description: 'View detailed performance metrics and insights',
    icon: BarChart3,
    path: '/analytics',
    color: 'from-orange-500 to-red-500',
    count: 0
  },
  {
    name: 'Billing',
    description: 'Manage invoices and payment methods',
    icon: CreditCard,
    path: '/billing',
    color: 'from-indigo-500 to-purple-500',
    count: 0
  },
  {
    name: 'Settings',
    description: 'Configure account and service preferences',
    icon: Settings,
    path: '/settings',
    color: 'from-gray-500 to-slate-500',
    count: 0
  }
];

const chartData = {
  revenue: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
  services: [8, 12, 15, 18, 22, 24, 24],
  customers: [45, 52, 58, 65, 72, 78, 82]
};

export default function Dashboard() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-500';
      case 'active': return 'bg-blue-500/20 text-blue-500';
      case 'completed': return 'bg-green-500/20 text-green-500';
      case 'cancelled': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
        <div className="container-responsive text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-zion-slate-light mb-8">Please log in to access your dashboard.</p>
          <Link
            to="/login"
            className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Dashboard Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.name}!</h1>
              <p className="text-zion-slate-light">Here's what's happening with your business today.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="relative p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-xl transition-all duration-300">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-medium">{user.name}</div>
                  <div className="text-zion-slate-light text-sm">{user.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.totalServices}</div>
            <div className="text-zion-slate-light text-sm">Total Services</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.activeProjects}</div>
            <div className="text-zion-slate-light text-sm">Active Projects</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{formatCurrency(mockStats.totalRevenue)}</div>
            <div className="text-zion-slate-light text-sm">Total Revenue</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.customerSatisfaction}</div>
            <div className="text-zion-slate-light text-sm">Customer Rating</div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={action.path}
                  className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    {action.count !== undefined && action.count > 0 && (
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {action.count}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-zion-cyan transition-colors">
                    {action.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {action.description}
                  </p>
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity and Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
              <Link to="/activity" className="text-zion-cyan hover:text-zion-cyan-light text-sm transition-colors">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {mockRecentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-medium">{activity.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-zion-slate-light text-sm mb-2">{activity.description}</p>
                    <div className="flex items-center gap-4 text-xs text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatTimestamp(activity.timestamp)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-white/10 border border-zion-cyan/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            
            <div className="space-y-6">
              {/* Revenue Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-slate-light text-sm">Revenue</span>
                  <span className="text-white font-semibold">{formatCurrency(chartData.revenue[chartData.revenue.length - 1])}</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  {chartData.revenue.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-zion-cyan to-zion-purple rounded-t-sm"
                      style={{ height: `${(value / Math.max(...chartData.revenue)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Services Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-slate-light text-sm">Active Services</span>
                  <span className="text-white font-semibold">{chartData.services[chartData.services.length - 1]}</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  {chartData.services.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-zion-purple to-zion-blue rounded-t-sm"
                      style={{ height: `${(value / Math.max(...chartData.services)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Customers Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-slate-light text-sm">Total Customers</span>
                  <span className="text-white font-semibold">{chartData.customers[chartData.customers.length - 1]}</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  {chartData.customers.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-zion-blue to-zion-cyan rounded-t-sm"
                      style={{ height: `${(value / Math.max(...chartData.customers)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{mockStats.pendingRequests}</div>
            <div className="text-zion-slate-light">Pending Requests</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">{mockStats.completedProjects}</div>
            <div className="text-zion-slate-light">Completed Projects</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">98%</div>
            <div className="text-zion-slate-light">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}