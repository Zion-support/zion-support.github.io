import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bell, 
  LogOut, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Activity,
  Settings,
  User,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

export default function Dashboard() {
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
      color: "text-blue-400"
    },
    {
      title: "Active Projects",
      value: "156",
      change: "+8%",
      icon: Activity,
      color: "text-green-400"
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+23%",
      icon: TrendingUp,
      color: "text-purple-400"
    },
    {
      title: "Security Score",
      value: "98.5%",
      change: "+2%",
      icon: Shield,
      color: "text-yellow-400"
    }
  ];

  const recentActivities = [
    {
      type: "login",
      message: "User logged in from New York",
      time: "2 minutes ago",
      icon: User
    },
    {
      type: "security",
      message: "Two-factor authentication enabled",
      time: "1 hour ago",
      icon: Shield
    },
    {
      type: "update",
      message: "Profile information updated",
      time: "3 hours ago",
      icon: Settings
    },
    {
      type: "activity",
      message: "New project created",
      time: "5 hours ago",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-zion-slate-light">Welcome back, {user.displayName}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-zion-slate-light hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button 
                onClick={logout}
                className="px-4 py-2 bg-zinc-800/50 text-white rounded-lg hover:bg-zinc-700/50 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-zinc-700/50 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm text-green-400 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-zion-slate-light text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Welcome Section */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 mb-6">
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
            </div>

            {/* Recent Activities */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="p-2 bg-zinc-700/50 rounded-lg">
                      <activity.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-zion-slate-light text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Quick Actions */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <User className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Edit Profile</span>
                </Link>
                <Link 
                  to="/settings" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <Settings className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Settings</span>
                </Link>
                <Link 
                  to="/services" 
                  className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Browse Services</span>
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
