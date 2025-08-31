import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Cloud,
  Brain,
  RefreshCw,
  ExternalLink,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2,
  Mail,
  Phone
} from 'lucide-react';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastUpdated: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
  startTime: string;
  endTime?: string;
  affectedServices: string[];
}

const SystemStatus: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: ServiceStatus[] = [
    {
      id: 'api',
      name: 'API Services',
      status: 'operational',
      uptime: 99.99,
      responseTime: 45,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Core API endpoints and microservices',
      icon: Server
    },
    {
      id: 'database',
      name: 'Database Systems',
      status: 'operational',
      uptime: 99.95,
      responseTime: 12,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Primary and replica database clusters',
      icon: Database
    },
    {
      id: 'web',
      name: 'Web Application',
      status: 'operational',
      uptime: 99.98,
      responseTime: 180,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Main website and user interface',
      icon: Globe
    },
    {
      id: 'security',
      name: 'Security Services',
      status: 'operational',
      uptime: 100.00,
      responseTime: 8,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Authentication, authorization, and threat detection',
      icon: Shield
    },
    {
      id: 'ai',
      name: 'AI Services',
      status: 'operational',
      uptime: 99.92,
      responseTime: 320,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Machine learning models and AI processing',
      icon: Brain
    },
    {
      id: 'analytics',
      name: 'Analytics Platform',
      status: 'operational',
      uptime: 99.89,
      responseTime: 95,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Business intelligence and reporting tools',
      icon: BarChart3
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: 99.97,
      responseTime: 25,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'Cloud hosting and infrastructure services',
      icon: Cloud
    },
    {
      id: 'monitoring',
      name: 'Monitoring Systems',
      status: 'operational',
      uptime: 100.00,
      responseTime: 5,
      lastUpdated: '2024-12-15T16:48:00Z',
      description: 'System monitoring and alerting',
      icon: Activity
    }
  ];

  const incidents: Incident[] = [
    {
      id: 'incident-001',
      title: 'Scheduled Maintenance - Database Optimization',
      description: 'Routine database maintenance to improve performance and reliability.',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-12-14T02:00:00Z',
      endTime: '2024-12-14T04:00:00Z',
      affectedServices: ['database', 'api']
    },
    {
      id: 'incident-002',
      title: 'AI Service Performance Degradation',
      description: 'Temporary performance issues with AI model inference.',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-12-13T10:30:00Z',
      endTime: '2024-12-13T12:15:00Z',
      affectedServices: ['ai']
    }
  ];

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500/20';
      case 'degraded': return 'bg-yellow-500/20';
      case 'outage': return 'bg-red-500/20';
      case 'maintenance': return 'bg-blue-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-blue-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityBgColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-500/20';
      case 'medium': return 'bg-yellow-500/20';
      case 'high': return 'bg-orange-500/20';
      case 'critical': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const formatUptime = (uptime: number) => {
    return `${uptime.toFixed(2)}%`;
  };

  const formatResponseTime = (responseTime: number) => {
    return `${responseTime}ms`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="System Status - Zion Tech Group"
        description="Real-time system status and service health monitoring for Zion Tech Group's platforms and services."
        keywords="system status, service health, uptime, monitoring, Zion Tech Group, API status"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of our services and infrastructure. 
              Stay informed about system health and any ongoing issues.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </button>
              <span className="text-gray-400 text-sm">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Overall System Status</h2>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-600/20">
              <div className={`w-3 h-3 rounded-full ${getStatusBgColor(overallStatus)}`}></div>
              <span className={`text-lg font-semibold ${getStatusColor(overallStatus)}`}>
                {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Status */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Current status of all our core services and infrastructure components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusBgColor(service.status)}`}></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Status</span>
                    <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Uptime</span>
                    <span className="text-white text-sm font-medium">{formatUptime(service.uptime)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Response Time</span>
                    <span className="text-white text-sm font-medium">{formatResponseTime(service.responseTime)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Last Updated</span>
                    <span className="text-white text-sm font-medium">{formatDate(service.lastUpdated)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recent Incidents</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Information about recent service disruptions and their resolution status.
            </p>
          </motion.div>

          {incidents.length > 0 ? (
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBgColor(incident.severity)} ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBgColor(incident.status)} ${getStatusColor(incident.status)}`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-gray-400 text-xs">Start: {formatDate(incident.startTime)}</span>
                        {incident.endTime && (
                          <span className="text-gray-400 text-xs">End: {formatDate(incident.endTime)}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {incident.affectedServices.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-600/20">
                      <h4 className="text-sm font-semibold text-white mb-2">Affected Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map(serviceId => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <span
                              key={serviceId}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                            >
                              {service?.name || serviceId}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No recent incidents reported.</p>
              <p className="text-gray-400 text-sm">All systems are operating normally.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Key performance indicators and system metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Average Uptime</h3>
              <p className="text-3xl font-bold text-green-400">
                {formatUptime(services.reduce((acc, service) => acc + service.uptime, 0) / services.length)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Average Response Time</h3>
              <p className="text-3xl font-bold text-blue-400">
                {formatResponseTime(Math.round(services.reduce((acc, service) => acc + service.responseTime, 0) / services.length))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Active Services</h3>
              <p className="text-3xl font-bold text-purple-400">
                {services.filter(service => service.status === 'operational').length}/{services.length}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're experiencing issues not reflected in our status page, 
              please contact our support team for immediate assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@ziontechgroup.com?subject=System Status Issue"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SystemStatus;
