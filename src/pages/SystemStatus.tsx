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
  Eye,
  Settings,
  Bell,
  Info
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

const services: ServiceStatus[] = [
  {
    id: 'api',
    name: 'API Services',
    status: 'operational',
    uptime: 99.99,
    responseTime: 45,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Core API endpoints and microservices',
    icon: Server
  },
  {
    id: 'database',
    name: 'Database Systems',
    status: 'operational',
    uptime: 99.95,
    responseTime: 12,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Primary and replica database clusters',
    icon: Database
  },
  {
    id: 'web',
    name: 'Web Application',
    status: 'operational',
    uptime: 99.98,
    responseTime: 180,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Main website and user interface',
    icon: Globe
  },
  {
    id: 'security',
    name: 'Security Services',
    status: 'operational',
    uptime: 100.00,
    responseTime: 8,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Authentication, authorization, and threat detection',
    icon: Shield
  },
  {
    id: 'ai',
    name: 'AI Services',
    status: 'operational',
    uptime: 99.97,
    responseTime: 320,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Machine learning models and AI processing',
    icon: Brain
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    status: 'operational',
    uptime: 99.99,
    responseTime: 25,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Cloud hosting and infrastructure services',
    icon: Cloud
  }
];

const incidents: Incident[] = [
  {
    id: 'inc-001',
    title: 'Scheduled Maintenance - Database Optimization',
    description: 'Routine database maintenance to improve performance and add new indexes.',
    status: 'resolved',
    severity: 'low',
    startTime: '2025-08-27T14:00:00Z',
    endTime: '2025-08-27T15:30:00Z',
    affectedServices: ['database']
  },
  {
    id: 'inc-002',
    title: 'AI Service Performance Degradation',
    description: 'Increased response times detected in AI processing services.',
    status: 'monitoring',
    severity: 'medium',
    startTime: '2025-08-27T16:00:00Z',
    affectedServices: ['ai']
  }
];

const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'degraded':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'outage':
      return 'text-red-400 bg-red-400/10 border-red-400/20';
    case 'maintenance':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

const getStatusIcon = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5" />;
    case 'degraded':
      return <AlertTriangle className="w-5 h-5" />;
    case 'outage':
      return <XCircle className="w-5 h-5" />;
    case 'maintenance':
      return <Settings className="w-5 h-5" />;
    default:
      return <Clock className="w-5 h-5" />;
  }
};

const getSeverityColor = (severity: Incident['severity']) => {
  switch (severity) {
    case 'low':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'high':
      return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    case 'critical':
      return 'text-red-400 bg-red-400/10 border-red-400/20';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for Zion Tech Group services. Monitor uptime, response times, and incident reports."
        keywords="system status, uptime, performance, monitoring, incidents, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                System{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Status
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real-time monitoring of our services, performance metrics, and incident reports. 
                Stay informed about the health of our systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(overallStatus)}`}>
                  {getStatusIcon(overallStatus)}
                  <span className="font-semibold">
                    {overallStatus === 'operational' ? 'All Systems Operational' :
                     overallStatus === 'degraded' ? 'Some Systems Degraded' : 'System Outage Detected'}
                  </span>
                </div>
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Overall Status</h3>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(overallStatus)}`}>
                  {getStatusIcon(overallStatus)}
                  <span className="capitalize">{overallStatus}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Average Uptime</h3>
                <p className="text-4xl font-bold text-cyan-400">{overallUptime.toFixed(2)}%</p>
                <p className="text-gray-400 text-sm">Last 30 days</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Last Updated</h3>
                <p className="text-lg text-purple-400 font-mono">
                  {lastUpdated.toLocaleTimeString()}
                </p>
                <p className="text-gray-400 text-sm">
                  {lastUpdated.toLocaleDateString()}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Status
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time status of all our core services and infrastructure components.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="text-white font-medium">
                        {new Date(service.lastUpdated).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        {incidents.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Recent Incidents
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Current and resolved incidents affecting our services.
                </p>
              </motion.div>

              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                            <span className="capitalize">{incident.severity}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">{incident.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          </div>
                          {incident.endTime && (
                            <div className="flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" />
                              <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                            </div>
                          )}
                        </div>

                        {incident.affectedServices.length > 0 && (
                          <div className="mt-3">
                            <span className="text-sm text-gray-400">Affected Services: </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {incident.affectedServices.map(serviceId => {
                                const service = services.find(s => s.id === serviceId);
                                return service ? (
                                  <span key={serviceId} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                                    {service.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="ml-6">
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-sm font-medium ${
                          incident.status === 'resolved' 
                            ? 'text-green-400 bg-green-400/10 border-green-400/20'
                            : incident.status === 'investigating'
                            ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
                            : 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                        }`}>
                          <span className="capitalize">{incident.status}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key performance indicators and response time trends across our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Time Trends</h3>
                <div className="space-y-4">
                  {services.slice(0, 4).map(service => (
                    <div key={service.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <service.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">{service.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            style={{ width: `${Math.min(100, (service.responseTime / 500) * 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-cyan-400 font-mono text-sm w-12 text-right">
                          {service.responseTime}ms
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Uptime Overview</h3>
                <div className="space-y-4">
                  {services.map(service => (
                    <div key={service.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <service.icon className="w-5 h-5 text-green-400" />
                        <span className="text-white">{service.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            style={{ width: `${service.uptime}%` }}
                          ></div>
                        </div>
                        <span className="text-green-400 font-mono text-sm w-16 text-right">
                          {service.uptime}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help or Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is available 24/7 to help with any issues or questions you may have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
