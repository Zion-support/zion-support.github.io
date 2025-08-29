import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Star,
  Activity,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
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
  Calendar,
  Target,
  Award,
  Rocket,
  Globe,
  Server,
  Database,
  Network,
  Lock,
  Heart,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  FileText,
  Video,
  TestTube,
  Leaf,
  Atom,
  Satellite,
  Cpu,
  Building,
  Truck,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Active Services', value: '12', icon: Zap, change: '+2', changeType: 'positive', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', changeType: 'positive', color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', changeType: 'positive', color: 'from-indigo-500 to-blue-500' },
    { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', changeType: 'positive', color: 'from-green-500 to-emerald-500' },
    { name: 'Monthly Usage', value: '2.4TB', icon: Database, change: '+15%', changeType: 'positive', color: 'from-orange-500 to-red-500' },
    { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', changeType: 'negative', color: 'from-teal-500 to-green-500' }
  ];

  const recentServices = [
    { name: 'AI Business Intelligence', status: 'Active', lastUsed: '2 hours ago', usage: '85%', icon: Brain, color: 'from-blue-500 to-indigo-500' },
    { name: 'Cloud DevOps Platform', status: 'Active', lastUsed: '1 day ago', usage: '92%', icon: Cloud, color: 'from-indigo-500 to-blue-500' },
    { name: 'AI Cybersecurity Suite', status: 'Active', lastUsed: '3 days ago', usage: '78%', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Quantum Computing Lab', status: 'Active', lastUsed: '1 week ago', usage: '45%', icon: Atom, color: 'from-purple-500 to-indigo-500' },
    { name: 'IoT Edge Platform', status: 'Active', lastUsed: '2 weeks ago', usage: '67%', icon: Network, color: 'from-cyan-500 to-blue-500' }
  ];

  const upcomingEvents = [
    { title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain },
    { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield },
    { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud },
    { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom }
  ];

  const quickActions = [
    { name: 'Add New Service', icon: Plus, href: '/services', color: 'from-green-500 to-emerald-500' },
    { name: 'View Analytics', icon: BarChart3, href: '/analytics', color: 'from-blue-500 to-indigo-500' },
    { name: 'Security Settings', icon: Shield, href: '/security', color: 'from-red-500 to-orange-500' },
    { name: 'Support Request', icon: HelpCircle, href: '/help', color: 'from-purple-500 to-pink-500' },
    { name: 'Billing & Plans', icon: DollarSign, href: '/pricing', color: 'from-yellow-500 to-orange-500' },
    { name: 'API Documentation', icon: Code, href: '/api-docs', color: 'from-gray-500 to-slate-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your services.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                ZT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className={`flex items-center mt-2 text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span>{stat.change}</span>
                    <span className="ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Services */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Services</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {recentServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                          {service.status}
                        </span>
                        <span>{service.lastUsed}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{service.usage}</div>
                      <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: service.usage }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Events */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium hover:shadow-lg transition-shadow flex flex-col items-center`}
                  >
                    <action.icon className="h-5 w-5 mb-1" />
                    {action.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <event.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500 space-x-2">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date}
                        </span>
                        <span>{event.time}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Performance Chart */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Service Performance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">AI Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cloud Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Security Services</span>
              </div>
            </div>
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