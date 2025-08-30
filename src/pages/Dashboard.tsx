import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Star, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  Bell, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  MoreHorizontal, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Target, 
  Award, 
  Globe, 
  Building, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Star as StarIcon,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target as TargetIcon,
  UserCheck,
  MessageCircle,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle as XCircleIcon,
  Info,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  HardDrive,
  Wifi,
  Key,
  FileCode,
  GitBranch,
  Workflow,
  Layers,
  Box,
  Package,
  Truck,
  Factory,
  Home,
  Office,
  Store,
  School,
  Hospital,
  Bank,
  ShoppingCart,
  CreditCard,
  PieChart as PieChartIcon,
  Users as UsersIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Mail,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Rocket as RocketIcon,
  Star as StarIcon2,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Gauge as GaugeIcon,
  Target as TargetIcon2,
  UserCheck as UserCheckIcon,
  MessageCircle as MessageCircleIcon,
  FileCheck as FileCheckIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon2,
  Info as InfoIcon,
  Server as ServerIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Router as RouterIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Key as KeyIcon,
  FileCode as FileCodeIcon,
  GitBranch as GitBranchIcon,
  Workflow as WorkflowIcon,
  Layers as LayersIcon,
  Box as BoxIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Home as HomeIcon,
  Office as OfficeIcon,
  Store as StoreIcon,
  School as SchoolIcon,
  Hospital as HospitalIcon,
  Bank as BankIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  PieChart as PieChartIcon3,
  Users as UsersIcon2,
  MessageSquare as MessageSquareIcon2,
  FileText as FileTextIcon2,
  Mail as MailIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  DollarSign as DollarSignIcon2,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon2,
  Rocket as RocketIcon2,
  Star as StarIcon3,
  Lightbulb as LightbulbIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon4,
  LineChart as LineChartIcon2,
  Activity as ActivityIcon2,
  Gauge as GaugeIcon2,
  Target as TargetIcon3,
  UserCheck as UserCheckIcon2,
  MessageCircle as MessageCircleIcon2,
  FileCheck as FileCheckIcon2,
  AlertTriangle as AlertTriangleIcon2,
  CheckCircle2 as CheckCircle2Icon2,
  XCircle as XCircleIcon3,
  Info as InfoIcon2,
  Server as ServerIcon2,
  Monitor as MonitorIcon2,
  Smartphone as SmartphoneIcon2,
  Laptop as LaptopIcon2,
  Router as RouterIcon2,
  HardDrive as HardDriveIcon2,
  Wifi as WifiIcon2,
  Key as KeyIcon2,
  FileCode as FileCodeIcon2,
  GitBranch as GitBranchIcon2,
  Workflow as WorkflowIcon2,
  Layers as LayersIcon2,
  Box as BoxIcon2,
  Package as PackageIcon2,
  Truck as TruckIcon2,
  Factory as FactoryIcon2,
  Home as HomeIcon2,
  Office as OfficeIcon2,
  Store as StoreIcon2,
  School as SchoolIcon2,
  Hospital as HospitalIcon2,
  Bank as BankIcon2,
  ShoppingCart as ShoppingCartIcon2,
  CreditCard as CreditCardIcon2,
  PieChart as PieChartIcon5,
  Users as UsersIcon3,
  MessageSquare as MessageSquareIcon3,
  FileText as FileTextIcon3,
  Mail as MailIcon2,
  Calendar as CalendarIcon3,
  Clock as ClockIcon3,
  DollarSign as DollarSignIcon3,
  Zap as ZapIcon3,
  Brain as BrainIcon3,
  Cloud as CloudIcon3,
  Shield as ShieldIcon3,
  Rocket as RocketIcon3,
  Star as StarIcon4,
  Lightbulb as LightbulbIcon3,
  BarChart as BarChartIcon3,
  PieChart as PieChartIcon6,
  LineChart as LineChartIcon3,
  Activity as ActivityIcon3,
  Gauge as GaugeIcon3,
  Target as TargetIcon4,
  UserCheck as UserCheckIcon3,
  MessageCircle as MessageCircleIcon3,
  FileCheck as FileCheckIcon3,
  AlertTriangle as AlertTriangleIcon3,
  CheckCircle2 as CheckCircle2Icon3,
  XCircle as XCircleIcon4,
  Info as InfoIcon3,
  Server as ServerIcon3,
  Monitor as MonitorIcon3,
  Smartphone as SmartphoneIcon3,
  Laptop as LaptopIcon3,
  Router as RouterIcon3,
  HardDrive as HardDriveIcon3,
  Wifi as WifiIcon3,
  Key as KeyIcon3,
  FileCode as FileCodeIcon3,
  GitBranch as GitBranchIcon3,
  Workflow as WorkflowIcon3,
  Layers as LayersIcon3,
  Box as BoxIcon3,
  Package as PackageIcon3,
  Truck as TruckIcon3,
  Factory as FactoryIcon3,
  Home as HomeIcon3,
  Office as OfficeIcon3,
  Store as StoreIcon3,
  School as SchoolIcon3,
  Hospital as HospitalIcon3,
  Bank as BankIcon3,
  ShoppingCart as ShoppingCartIcon3,
  CreditCard as CreditCardIcon3,
  PieChart as PieChartIcon7,
  Users as UsersIcon4,
  MessageSquare as MessageSquareIcon4,
  FileText as FileTextIcon4,
  Mail as MailIcon3,
  Calendar as CalendarIcon4,
  Clock as ClockIcon4,
  DollarSign as DollarSignIcon4,
  Zap as ZapIcon4,
  Brain as BrainIcon4,
  Cloud as CloudIcon4,
  Shield as ShieldIcon4,
  Rocket as RocketIcon4,
  Star as StarIcon5
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const stats = [
    { label: 'Active Projects', value: '24', icon: Target, color: 'from-blue-500 to-cyan-600', change: '+12%', trend: 'up' },
    { label: 'Total Revenue', value: '$2.4M', icon: DollarSign, color: 'from-green-500 to-emerald-600', change: '+8.5%', trend: 'up' },
    { label: 'Team Members', value: '47', icon: Users, color: 'from-indigo-500 to-purple-600', change: '+3', trend: 'up' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'from-yellow-500 to-orange-600', change: '+2%', trend: 'up' }
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'AI Customer Success Platform',
      client: 'TechCorp Inc.',
      status: 'active',
      progress: 75,
      deadline: '2024-03-15',
      budget: '$150,000',
      team: ['Sarah Chen', 'Mike Rodriguez', 'Alex Kim'],
      priority: 'high'
    },
    {
      id: 2,
      name: 'Cloud Migration Strategy',
      client: 'Global Retail Co.',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-28',
      budget: '$85,000',
      team: ['David Park', 'Lisa Thompson'],
      priority: 'medium'
    },
    {
      id: 3,
      name: 'IoT Security Framework',
      client: 'Manufacturing Solutions',
      status: 'active',
      progress: 45,
      deadline: '2024-04-20',
      budget: '$220,000',
      team: ['James Wilson', 'Emma Davis', 'Carlos Mendez'],
      priority: 'high'
    },
    {
      id: 4,
      name: 'Data Analytics Dashboard',
      client: 'Financial Services Ltd.',
      status: 'planning',
      progress: 15,
      deadline: '2024-05-10',
      budget: '$95,000',
      team: ['Rachel Green', 'Tom Anderson'],
      priority: 'medium'
    }
  ];

  const upcomingDeadlines = [
    { project: 'AI Customer Success Platform', deadline: '2024-03-15', daysLeft: 5, priority: 'high' },
    { project: 'IoT Security Framework', deadline: '2024-04-20', daysLeft: 41, priority: 'medium' },
    { project: 'Data Analytics Dashboard', deadline: '2024-05-10', daysLeft: 61, priority: 'low' },
    { project: 'Quantum Computing Research', deadline: '2024-06-01', daysLeft: 83, priority: 'medium' }
  ];

  const teamPerformance = [
    { name: 'Sarah Chen', role: 'Senior AI Engineer', projects: 4, completion: 92, rating: 4.8 },
    { name: 'Mike Rodriguez', role: 'Cloud Architect', projects: 3, completion: 88, rating: 4.6 },
    { name: 'Alex Kim', role: 'DevOps Engineer', projects: 5, completion: 95, rating: 4.9 },
    { name: 'David Park', role: 'Security Specialist', projects: 2, completion: 100, rating: 4.7 },
    { name: 'Lisa Thompson', role: 'Data Scientist', projects: 3, completion: 89, rating: 4.5 }
  ];

  const notifications = [
    { id: 1, type: 'project', message: 'Project "AI Customer Success Platform" is 75% complete', time: '2 hours ago', read: false },
    { id: 2, type: 'deadline', message: 'Deadline approaching for "IoT Security Framework"', time: '1 day ago', read: false },
    { id: 3, type: 'team', message: 'New team member Alex Kim joined the project', time: '2 days ago', read: true },
    { id: 4, type: 'client', message: 'Client feedback received for "Cloud Migration Strategy"', time: '3 days ago', read: true }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: Target },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'completed': return 'text-blue-400 bg-blue-400/10';
      case 'planning': return 'text-yellow-400 bg-yellow-400/10';
      case 'on-hold': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-green-400 bg-green-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const filteredProjects = recentProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Manage your projects, track team performance, and monitor business metrics with our comprehensive dashboard."
      />
      
      {/* Header */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">Welcome back! Here's what's happening with your projects.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <button className="p-2 bg-slate-700 border border-slate-600 rounded-lg text-gray-300 hover:bg-slate-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-700 border border-slate-600 rounded-lg text-gray-300 hover:bg-slate-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-4 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Recent Projects */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentProjects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-white">{project.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                            {project.priority}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{project.client}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Budget: {project.budget}</span>
                          <span>Deadline: {project.deadline}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{project.progress}%</div>
                        <div className="text-gray-400 text-sm">Complete</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines & Notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Upcoming Deadlines</h3>
                  <div className="space-y-3">
                    {upcomingDeadlines.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div>
                          <div className="font-medium text-white text-sm">{item.project}</div>
                          <div className="text-gray-400 text-xs">{item.deadline}</div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.daysLeft <= 7 ? 'text-red-400 bg-red-400/10' : 
                          item.daysLeft <= 30 ? 'text-yellow-400 bg-yellow-400/10' : 
                          'text-green-400 bg-green-400/10'
                        }`}>
                          {item.daysLeft} days
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Recent Notifications</h3>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-3 rounded-lg ${notification.read ? 'bg-slate-700/20' : 'bg-blue-500/10 border border-blue-500/20'}`}>
                        <div className="text-white text-sm mb-1">{notification.message}</div>
                        <div className="text-gray-400 text-xs">{notification.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">All Projects</h2>
                  <div className="flex items-center space-x-4">
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="planning">Planning</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                      <Plus className="w-4 h-4 mr-2" />
                      New Project
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Project</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Client</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Progress</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Deadline</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Budget</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProjects.map((project) => (
                        <tr key={project.id} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-white">{project.name}</div>
                              <div className="text-gray-400 text-sm">{project.team.length} team members</div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-300">{project.client}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-white text-sm">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-300">{project.deadline}</td>
                          <td className="py-4 px-4 text-gray-300">{project.budget}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Team Performance</h2>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Member
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamPerformance.map((member, index) => (
                    <div key={member.name} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">{member.name}</div>
                          <div className="text-gray-400 text-sm">{member.role}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Projects</span>
                          <span className="text-white">{member.projects}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Completion Rate</span>
                          <span className="text-white">{member.completion}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Rating</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-white">{member.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Analytics & Reports</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Project Status Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Active</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-slate-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="text-white text-sm">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Completed</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-slate-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                          <span className="text-white text-sm">35%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Planning</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-slate-700 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                          <span className="text-white text-sm">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Revenue Trends</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-gray-300">This Month</span>
                        <span className="text-green-400 font-semibold">$180,000</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-gray-300">Last Month</span>
                        <span className="text-white font-semibold">$165,000</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-gray-300">Growth</span>
                        <span className="text-green-400 font-semibold">+9.1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Export Reports</h3>
                    <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                      <Download className="w-4 h-4 mr-2" />
                      Download All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-colors">
                      <div className="text-center">
                        <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-medium">Project Report</div>
                        <div className="text-gray-400 text-sm">PDF Format</div>
                      </div>
                    </button>
                    <button className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-colors">
                      <div className="text-center">
                        <BarChart3 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-medium">Analytics Report</div>
                        <div className="text-gray-400 text-sm">Excel Format</div>
                      </div>
                    </button>
                    <button className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-colors">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-medium">Team Report</div>
                        <div className="text-gray-400 text-sm">PDF Format</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}