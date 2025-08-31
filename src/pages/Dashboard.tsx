import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Shield,
  Zap,
  Settings,
  Bell,
  Search,
  Calendar,
  FileText,
  MessageSquare,
  Star,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$2.4M',
      change: '+12.5%',
      changeType: 'positive',
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />
    }
  ];

  const recentProjects = [
    {
      id: 1,
      name: "AI Chatbot Development",
      status: "In Progress",
      progress: 75,
      dueDate: "2024-02-15",
      priority: "High"
    },
    {
      id: 2,
      name: "Cybersecurity Audit",
      status: "Completed",
      progress: 100,
      dueDate: "2024-01-30",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Cloud Migration",
      status: "Planning",
      progress: 25,
      dueDate: "2024-03-01",
      priority: "High"
    },
    {
      id: 4,
      name: "Mobile App Development",
      status: "In Progress",
      progress: 60,
      dueDate: "2024-02-28",
      priority: "Medium"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "New project assigned",
      message: "You have been assigned to the AI Chatbot project",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      title: "Meeting reminder",
      message: "Team standup meeting in 30 minutes",
      time: "4 hours ago",
      read: false
    },
    {
      id: 3,
      title: "System update",
      message: "Scheduled maintenance completed successfully",
      time: "1 day ago",
      read: true
    }
  ];

  const quickActions = [
    {
      title: "Create Project",
      description: "Start a new project",
      icon: <FileText className="h-8 w-8 text-zion-cyan" />,
      color: "bg-zion-cyan/10 border-zion-cyan/20"
    },
    {
      title: "Schedule Meeting",
      description: "Book a team meeting",
      icon: <Calendar className="h-8 w-8 text-zion-purple" />,
      color: "bg-zion-purple/10 border-zion-purple/20"
    },
    {
      title: "Generate Report",
      description: "Create analytics report",
      icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
      color: "bg-zion-cyan/10 border-zion-cyan/20"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-zion-blue-dark border-b border-zion-purple/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-zion-slate-light">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zion-slate-light hover:text-white transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-zion-slate-light hover:text-white transition-colors">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              initial = {
                { opacity: 0,
                  y: 20 
                }
              }
              animate = {
                { opacity: 1,
                  y: 0 
                }
              }
              transition = {
                { duration: 0.5,
                  delay: index * 0.1 
                }
              }
              key={stat.label}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  {stat.icon}
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === "positive" ? "text-green-400" : "text-red-400"
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-zion-slate-light text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6"
              initial = {
                { opacity: 0,
                  x: -20 
                }
              }
              animate = {
                { opacity: 1,
                  x: 0 
                }
              }
              transition = {
                { duration: 0.5,
                  delay: 0.4 
                }
              }
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                <button className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial = {
                      { opacity: 0,
                        x: -20 
                      }
                    }
                    animate = {
                      { opacity: 1,
                        x: 0 
                      }
                    }
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(project.status)} mr-4`}>
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-white">{project.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <span>Due: {project.dueDate}</span>
                        <span>Progress: {project.progress}%</span>
                      </div>
                      <div className="w-full bg-zion-purple/20 rounded-full h-2 mt-2">
                        <div
                          className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="p-2 text-zion-slate-light hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6"
              initial = {
                { opacity: 0,
                  x: 20 
                }
              }
              animate = {
                { opacity: 1,
                  x: 0 
                }
              }
              transition = {
                { duration: 0.5,
                  delay: 0.6 
                }
              }
            >
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial = {
                      { opacity: 0,
                        scale: 0.9 
                      }
                    }
                    animate = {
                      { opacity: 1,
                        scale: 1 
                      }
                    }
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium hover:shadow-lg transition-shadow flex flex-col items-center`}
                  >
                    <div className="mb-2">{action.icon}</div>
                    <h3 className="font-medium text-white text-sm mb-1">{action.title}</h3>
                    <p className="text-zion-slate-light text-xs">{action.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {/* Notifications */}
            <motion.div
              className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6"
              initial = {
                { opacity: 0,
                  x: 20 
                }
              }
              animate = {
                { opacity: 1,
                  x: 0 
                }
              }
              transition = {
                { duration: 0.5,
                  delay: 0.8 
                }
              }
            >
              <h2 className="text-xl font-semibold text-white mb-4">Notifications</h2>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial = {
                      { opacity: 0,
                        y: 10 
                      }
                    }
                    animate = {
                      { opacity: 1,
                        y: 0 
                      }
                    }
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500 space-x-2">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {notification.time}
                        </span>
                        <span>{notification.message}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-4 text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                View All Notifications
              </button>
            </motion.div>
            {/* System Status */}
            <motion.div
              className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6"
              initial = {
                { opacity: 0,
                  x: 20 
                }
              }
              animate = {
                { opacity: 1,
                  x: 0 
                }
              }
              transition = {
                { duration: 0.5,
                  delay: 1 
                }
              }
            >
              <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">API Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Database</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Healthy</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Uptime</span>
                  <span className="text-white text-sm">99.9%</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cloud Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Security Services</span>
              </div>
            </motion.div>
          </div>
          {/* Placeholder for chart */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Performance chart will be displayed here</p>
              <p className="text-sm text-gray-400">Integration with analytics service required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
