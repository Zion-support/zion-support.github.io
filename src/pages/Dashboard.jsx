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
  Calendar,
  Target,
  Award,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const mockUser = {
  displayName: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Developer',
  joinDate: '2024-01-15',
  avatar: '/api/placeholder/100/100'
};

const mockStats = [
  {
    title: 'Projects Completed',
    value: '12',
    change: '+3',
    changeType: 'positive',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Active Projects',
    value: '4',
    change: '+1',
    changeType: 'positive',
    icon: Activity,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Team Members',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Hours Logged',
    value: '156',
    change: '+12',
    changeType: 'positive',
    icon: Clock,
    color: 'from-orange-500 to-red-500'
  }
];

const mockRecentActivity = [
  {
    id: 1,
    type: 'project_completed',
    title: 'AI Analytics Dashboard',
    description: 'Successfully completed the AI analytics dashboard project',
    timestamp: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    id: 2,
    type: 'team_joined',
    title: 'New Team Member',
    description: 'Sarah Chen joined the Quantum Computing project',
    timestamp: '4 hours ago',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    id: 3,
    type: 'milestone_reached',
    title: 'Project Milestone',
    description: 'Cybersecurity framework reached 75% completion',
    timestamp: '1 day ago',
    icon: Target,
    color: 'text-purple-400'
  },
  {
    id: 4,
    type: 'award_earned',
    title: 'Excellence Award',
    description: 'Received "Innovation Excellence" award for Q4',
    timestamp: '2 days ago',
    icon: Award,
    color: 'text-yellow-400'
  }
];

const mockUpcomingDeadlines = [
  {
    id: 1,
    title: 'Cloud Migration Phase 2',
    deadline: '2025-01-20',
    priority: 'high',
    progress: 65
  },
  {
    id: 2,
    title: 'AI Model Training',
    deadline: '2025-01-25',
    priority: 'medium',
    progress: 40
  },
  {
    id: 3,
    title: 'Security Audit Report',
    deadline: '2025-01-30',
    priority: 'low',
    progress: 90
  }
];

export default function Dashboard() {
  const [user] = useState(mockUser);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading user data
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getPriorityBg = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-400/20';
      case 'medium':
        return 'bg-yellow-400/20';
      case 'low':
        return 'bg-green-400/20';
      default:
        return 'bg-gray-400/20';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zion-slate-light">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <header className="bg-zion-blue-dark/50 border-b border-zion-cyan/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
              {user.role}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container-responsive py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {user.displayName.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Welcome back, {user.displayName.split(' ')[0]}!</h2>
              <p className="text-zion-slate-light">Here's what's happening with your projects today.</p>
              <p className="text-zion-slate-light text-sm">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-zion-slate-light text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-zion-cyan" />
                Recent Activity
              </h3>
              
              <div className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 bg-zion-blue-dark/20 rounded-xl hover:bg-zion-blue-dark/30 transition-colors">
                    <div className={`w-10 h-10 ${activity.color} bg-zion-blue-dark/50 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{activity.title}</h4>
                      <p className="text-zion-slate-light text-sm mb-2">{activity.description}</p>
                      <span className="text-zion-slate-light text-xs">{activity.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link
                  to="/activity"
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                >
                  <span>View all activity</span>
                  <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Upcoming Deadlines */}
            <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-zion-cyan" />
                Upcoming Deadlines
              </h3>
              
              <div className="space-y-4">
                {mockUpcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="p-4 bg-zion-blue-dark/20 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{deadline.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${getPriorityBg(deadline.priority)} ${getPriorityColor(deadline.priority)}`}>
                        {deadline.priority}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs text-zion-slate-light mb-1">
                        <span>Progress</span>
                        <span>{deadline.progress}%</span>
                      </div>
                      <div className="w-full bg-zion-blue-dark/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                          style={{ width: `${deadline.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light text-xs">
                      Due: {new Date(deadline.deadline).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  to="/projects/new"
                  className="flex items-center gap-3 p-3 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">New Project</span>
                </Link>
                
                <Link
                  to="/team"
                  className="flex items-center gap-3 p-3 bg-zion-purple/20 text-zion-purple rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Invite Team</span>
                </Link>
                
                <Link
                  to="/reports"
                  className="flex items-center gap-3 p-3 bg-zion-blue/20 text-zion-blue rounded-lg hover:bg-zion-blue hover:text-white transition-all duration-300"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm font-medium">View Reports</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
