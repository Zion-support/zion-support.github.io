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

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [user] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/images/avatar.jpg'
  });

  const logout = () => {
    // Handle logout logic
    console.log('Logout clicked');
  };

  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
      trend: "up"
    },
    {
      title: "Active Projects",
      value: "156",
      change: "+8%",
      icon: Activity,
      color: "text-green-400",
      trend: "up"
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+23%",
      icon: TrendingUp,
      color: "text-purple-400",
      trend: "up"
    },
    {
      title: "Security Score",
      value: "98.5%",
      change: "+2%",
      icon: Shield,
      color: "text-yellow-400",
      trend: "up"
    }
  ];

  const recentActivities = [
    {
      type: "success",
      message: "New user registration completed",
      time: "2 minutes ago",
      icon: CheckCircle
    },
    {
      type: "warning",
      message: "System maintenance scheduled",
      time: "1 hour ago",
      icon: AlertCircle
    },
    {
      type: "error",
      message: "API rate limit exceeded",
      time: "3 hours ago",
      icon: XCircle
    },
    {
      type: "info",
      message: "Database backup completed",
      time: "5 hours ago",
      icon: CheckCircle
    }
  ];

  const quickActions = [
    {
      title: "Create Project",
      description: "Start a new project",
      icon: Plus,
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "View Reports",
      description: "Access analytics",
      icon: BarChart3,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Manage Users",
      description: "User administration",
      icon: Users,
      color: "from-zion-blue to-zion-purple"
    },
    {
      title: "Settings",
      description: "Configure system",
      icon: Settings,
      color: "from-zion-cyan to-zion-green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Header Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-zion-slate-light">Welcome back, {user.displayName}</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                  <Bell className="w-6 h-6" />
                </button>
                <button 
                  onClick={logout}
                  className="px-4 py-2 bg-zion-slate-dark/50 text-white rounded-lg hover:bg-zion-slate-dark transition-colors flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-zion-slate/50 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center gap-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span className="text-sm text-green-400 font-medium">{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-zion-slate-light text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-zion-slate-dark/30 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 text-left group"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium mb-1">{action.title}</h3>
                  <p className="text-zion-slate-light text-sm">{action.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Welcome Section */}
              <motion.div 
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 mb-6"
                variants={itemVariants}
              >
                <h2 className="text-xl font-bold text-white mb-4">Welcome to Zion Tech Group</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/20">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/20">
                    <h3 className="text-lg font-medium text-white">Explore Services</h3>
                    <p className="text-zion-slate-light mt-1">Discover our AI-powered solutions</p>
                  </div>
                </div>
              </motion.div>

              {/* Recent Activities */}
              <motion.div 
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6"
                variants={itemVariants}
              >
                <h2 className="text-xl font-bold text-white mb-4">Recent Activities</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-zion-slate/20">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'success' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        activity.type === 'error' ? 'bg-red-500/20 text-red-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.message}</p>
                        <p className="text-zion-slate-light text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* System Status */}
              <motion.div 
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 mb-6"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Website</span>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">API Services</span>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Database</span>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
              </motion.div>

              {/* Performance Chart Section */}
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
            </motion.div>
          </div>
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
