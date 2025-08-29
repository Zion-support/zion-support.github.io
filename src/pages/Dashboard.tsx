import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity, 
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  LineChart,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  ArrowRight,
  Star,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

interface DashboardStats {
  totalRevenue: number;
  revenueChange: number;
  activeProjects: number;
  projectsChange: number;
  totalClients: number;
  clientsChange: number;
  systemUptime: number;
  uptimeChange: number;
}

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  priority: 'high' | 'medium' | 'low';
}

interface RecentActivity {
  id: string;
  type: 'project' | 'client' | 'system' | 'payment';
  message: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalRevenue: 2840000,
    revenueChange: 12.5,
    activeProjects: 24,
    projectsChange: 8.2,
    totalClients: 156,
    clientsChange: 15.3,
    systemUptime: 99.9,
    uptimeChange: 0.1
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'AI-Powered Analytics Platform',
      client: 'TechCorp Inc.',
      status: 'active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      budget: 250000,
      spent: 187500,
      priority: 'high'
    },
    {
      id: '2',
      name: 'Cloud Migration Strategy',
      client: 'Global Retail Co.',
      status: 'active',
      progress: 45,
      startDate: '2024-02-01',
      endDate: '2024-08-15',
      budget: 180000,
      spent: 81000,
      priority: 'medium'
    },
    {
      id: '3',
      name: 'Cybersecurity Assessment',
      client: 'Finance Solutions Ltd.',
      status: 'completed',
      progress: 100,
      startDate: '2024-01-01',
      endDate: '2024-03-15',
      budget: 75000,
      spent: 72000,
      priority: 'high'
    },
    {
      id: '4',
      name: 'IoT Edge Computing Setup',
      client: 'Manufacturing Corp.',
      status: 'on-hold',
      progress: 30,
      startDate: '2024-02-15',
      endDate: '2024-07-30',
      budget: 320000,
      spent: 96000,
      priority: 'medium'
    }
  ]);

  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'project',
      message: 'AI Analytics Platform reached 75% completion',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: '2',
      type: 'client',
      message: 'New client onboarding: Quantum Tech Solutions',
      timestamp: '4 hours ago',
      status: 'info'
    },
    {
      id: '3',
      type: 'payment',
      message: 'Payment received: $45,000 from TechCorp Inc.',
      timestamp: '6 hours ago',
      status: 'success'
    },
    {
      id: '4',
      type: 'system',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '8 hours ago',
      status: 'success'
    },
    {
      id: '5',
      type: 'project',
      message: 'Cybersecurity Assessment project completed',
      timestamp: '1 day ago',
      status: 'success'
    }
  ]);

  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'completed': return 'text-blue-400 bg-blue-400/10';
      case 'on-hold': return 'text-yellow-400 bg-yellow-400/10';
      case 'cancelled': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'project': return <Rocket className="w-4 h-4" />;
      case 'client': return <Users className="w-4 h-4" />;
      case 'system': return <Settings className="w-4 h-4" />;
      case 'payment': return <DollarSign className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-400 bg-green-400/10';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10';
      case 'error': return 'text-red-400 bg-red-400/10';
      case 'info': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 text-sm">Welcome back! Here's what's happening with your business.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects, clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stats.revenueChange >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stats.revenueChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(stats.revenueChange)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                ${(stats.totalRevenue / 1000000).toFixed(1)}M
              </h3>
              <p className="text-slate-400 text-sm">Total Revenue</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stats.projectsChange >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stats.projectsChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(stats.projectsChange)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stats.activeProjects}</h3>
              <p className="text-slate-400 text-sm">Active Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stats.clientsChange >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stats.clientsChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(stats.clientsChange)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stats.totalClients}</h3>
              <p className="text-slate-400 text-sm">Total Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-cyan-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stats.uptimeChange >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stats.uptimeChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {Math.abs(stats.uptimeChange)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stats.systemUptime}%</h3>
              <p className="text-slate-400 text-sm">System Uptime</p>
            </motion.div>
          </div>
        </section>

        {/* Charts and Analytics */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Revenue Trend</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-1 bg-white/10 border border-slate-600/30 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
              <div className="h-64 bg-slate-700/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <LineChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Revenue chart visualization</p>
                  <p className="text-sm">Interactive chart component would go here</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Project Status Distribution</h3>
                <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="h-64 bg-slate-700/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Project status chart</p>
                  <p className="text-sm">Interactive pie chart component would go here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects and Recent Activity */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50"
          >
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Active Projects</h3>
                <button className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200 text-sm">
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-white">{project.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{project.client}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(project.startDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.progress}% complete
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 transition-colors duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mx-auto">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50"
          >
            <div className="p-6 border-b border-slate-700/50">
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity.status)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm mb-1">{activity.message}</p>
                      <p className="text-slate-400 text-xs">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mx-auto">
                  View All Activity
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Actions and Insights */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Create New Project</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Add New Client</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Generate Report</span>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Performance Highlights</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">98% client satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">24/7 system availability</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">150+ successful projects</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Insights & Tips</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <p className="text-white text-sm mb-2">AI Services Growth</p>
                  <p className="text-slate-300 text-xs">AI services showing 45% increase in demand this quarter</p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <p className="text-white text-sm mb-2">Client Retention</p>
                  <p className="text-slate-300 text-xs">Focus on post-project support to improve retention rates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;