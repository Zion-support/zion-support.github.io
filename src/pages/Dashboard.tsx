import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Award,
  Briefcase,
  Globe,
  Shield,
  Zap,
  Star,
  Eye,
  Download,
  Filter,
  MoreHorizontal,
  MessageCircle,
  FileText
} from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: any;
  color: string;
  trend: 'up' | 'down';
}

interface ActivityItem {
  id: string;
  type: 'service' | 'payment' | 'support' | 'update';
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  priority: 'low' | 'medium' | 'high';
}

interface QuickAction {
  title: string;
  description: string;
  icon: any;
  action: string;
  color: string;
}

const statCards: StatCard[] = [
  {
    title: 'Total Revenue',
    value: '$124,563.00',
    change: 12.5,
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    trend: 'up'
  },
  {
    title: 'Active Services',
    value: '47',
    change: 8.2,
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-600',
    trend: 'up'
  },
  {
    title: 'Total Customers',
    value: '1,234',
    change: -2.1,
    icon: Users,
    color: 'from-purple-500 to-pink-600',
    trend: 'down'
  },
  {
    title: 'Success Rate',
    value: '98.7%',
    change: 1.3,
    icon: Target,
    color: 'from-orange-500 to-red-600',
    trend: 'up'
  }
];

const recentActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'service',
    title: 'AI Analytics Service Deployed',
    description: 'Successfully deployed AI analytics service for Client XYZ',
    timestamp: '2 hours ago',
    status: 'completed',
    priority: 'high'
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment Received',
    description: 'Payment of $5,000 received from Client ABC',
    timestamp: '4 hours ago',
    status: 'completed',
    priority: 'low'
  },
  {
    id: '3',
    type: 'support',
    title: 'Support Ticket Resolved',
    description: 'Resolved critical issue for Client DEF',
    timestamp: '6 hours ago',
    status: 'completed',
    priority: 'high'
  },
  {
    id: '4',
    type: 'update',
    title: 'System Update Completed',
    description: 'Scheduled maintenance completed successfully',
    timestamp: '1 day ago',
    status: 'completed',
    priority: 'medium'
  }
];

const quickActions: QuickAction[] = [
  {
    title: 'Add New Service',
    description: 'Deploy a new service for your clients',
    icon: Plus,
    action: 'Create Service',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Generate Report',
    description: 'Create comprehensive analytics report',
    icon: BarChart3,
    action: 'Generate',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Schedule Meeting',
    description: 'Book a meeting with your team',
    icon: Calendar,
    action: 'Schedule',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Update Settings',
    description: 'Modify your account preferences',
    icon: Settings,
    action: 'Configure',
    color: 'from-orange-500 to-red-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState(3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const clearNotification = () => {
    setNotifications(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      {/* Header Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-zion-slate-light">Welcome back! Here's what's happening with your business.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search dashboard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-80 px-4 py-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              </form>

              {/* Notifications */}
              <button className="relative p-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Settings */}
              <button className="p-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300">
                <Settings className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    <span>{Math.abs(stat.change)}%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-zion-slate-light">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Activities</h2>
                  <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activity.status === 'completed' ? 'bg-green-500/20' :
                        activity.status === 'pending' ? 'bg-yellow-500/20' :
                        'bg-red-500/20'
                      }`}>
                        {activity.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : activity.status === 'pending' ? (
                          <Clock className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold mb-1">{activity.title}</h4>
                        <p className="text-zion-slate-light text-sm mb-2">{activity.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zion-slate-light">{activity.timestamp}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            activity.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            activity.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {activity.priority}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
                
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{action.description}</p>
                      <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 font-medium">
                        {action.action} →
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Chart Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Performance Overview</h2>
              <div className="flex items-center space-x-4">
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                >
                  <option value="all">All Time</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
                <button className="p-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-64 bg-white/5 rounded-xl border border-zion-cyan/20 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-zion-cyan/50 mx-auto mb-4" />
                <p className="text-zion-slate-light">Performance chart will be displayed here</p>
                <p className="text-zion-slate-light text-sm">Select different time periods to view trends</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary group">
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                View Documentation
                <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
