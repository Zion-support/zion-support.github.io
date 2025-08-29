import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Target, 
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw,
  Eye,
  EyeOff,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Dashboard() {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [selectedPeriod, setSelectedPeriod] = React.useState('30d');

  const stats = [
    {
      title: "Total Revenue",
      value: "$2,847,392",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Active Users",
      value: "45,231",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+2.1%",
      changeType: "positive",
      icon: Target,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: "-1.2%",
      changeType: "negative",
      icon: Clock,
      color: "from-orange-500 to-red-600"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "user_signup",
      message: "New user registration: john.doe@company.com",
      time: "2 minutes ago",
      status: "success"
    },
    {
      id: 2,
      type: "payment",
      message: "Payment received: $2,500 from TechCorp Solutions",
      time: "15 minutes ago",
      status: "success"
    },
    {
      id: 3,
      type: "support",
      message: "Support ticket #1234 opened by Sarah Johnson",
      time: "1 hour ago",
      status: "warning"
    },
    {
      id: 4,
      type: "deployment",
      message: "New feature deployed: AI Chatbot v2.1",
      time: "3 hours ago",
      status: "info"
    },
    {
      id: 5,
      type: "error",
      message: "System alert: High CPU usage detected",
      time: "4 hours ago",
      status: "error"
    }
  ];

  const quickActions = [
    {
      title: "Add New User",
      description: "Create a new user account",
      icon: User,
      color: "from-blue-500 to-cyan-600",
      link: "/users/new"
    },
    {
      title: "Generate Report",
      description: "Create custom analytics report",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      link: "/reports"
    },
    {
      title: "View Analytics",
      description: "Check detailed performance metrics",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      link: "/analytics"
    },
    {
      title: "Support Tickets",
      description: "Manage customer support requests",
      icon: Activity,
      color: "from-orange-500 to-red-600",
      link: "/support"
    }
  ];

  const upcomingEvents = [
    {
      title: "Team Meeting",
      time: "10:00 AM",
      date: "Today",
      type: "meeting"
    },
    {
      title: "Client Demo",
      time: "2:00 PM",
      date: "Today",
      type: "demo"
    },
    {
      title: "Product Launch",
      time: "9:00 AM",
      date: "Tomorrow",
      type: "launch"
    },
    {
      title: "Quarterly Review",
      time: "11:00 AM",
      date: "Dec 15",
      type: "review"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      case 'info':
        return <Info className="w-4 h-4 text-blue-400" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting':
        return <Users className="w-4 h-4 text-blue-400" />;
      case 'demo':
        return <Eye className="w-4 h-4 text-purple-400" />;
      case 'launch':
        return <Rocket className="w-4 h-4 text-green-400" />;
      case 'review':
        return <BarChart3 className="w-4 h-4 text-orange-400" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your Zion Tech Group dashboard for real-time analytics, user management, and business insights."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <div className="flex items-center gap-2">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-slate-700 text-white text-sm rounded-lg px-3 py-1 border border-slate-600 focus:outline-none focus:border-cyan-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-sm">Admin</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {stat.changeType === 'positive' ? (
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowRevenue(!showRevenue)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showRevenue ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showRevenue ? 'Hide' : 'Show'}
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {showRevenue && (
                <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-400">Revenue chart visualization</p>
                    <p className="text-slate-500 text-sm">Interactive chart component would be rendered here</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Activities</h2>
                <Link
                  to="/activities"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="mt-1">
                      {getStatusIcon(activity.status)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-slate-400 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={action.title}
                    to={action.link}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-sm font-medium">{action.title}</h3>
                      <p className="text-slate-400 text-xs">{action.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h2 className="text-xl font-bold text-white mb-6">Upcoming Events</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-sm font-medium">{event.title}</h3>
                      <p className="text-slate-400 text-xs">{event.time} • {event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/calendar"
                className="block w-full mt-4 text-center py-2 px-4 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors"
              >
                View Calendar
              </Link>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            >
              <h2 className="text-xl font-bold text-white mb-6">System Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">API Services</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Database</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">CDN</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-yellow-400 text-sm">Minor Issues</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Monitoring</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
              </div>
              <Link
                to="/status"
                className="block w-full mt-4 text-center py-2 px-4 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors"
              >
                View Full Status
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Performance</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Performance Score</h3>
              <p className="text-3xl font-bold text-green-400">94.2%</p>
              <p className="text-slate-400 text-sm">+2.1% from last month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-blue-400">1,247</p>
              <p className="text-slate-400 text-sm">+8.3% from last week</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Goal Completion</h3>
              <p className="text-3xl font-bold text-purple-400">87.5%</p>
              <p className="text-slate-400 text-sm">+5.2% from last quarter</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}