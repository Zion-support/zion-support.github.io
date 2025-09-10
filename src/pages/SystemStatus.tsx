import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Cloud, Shield, Brain, Zap, Globe, BarChart3, RefreshCw, ExternalLink, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

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
    responseTime: 250,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Machine learning models and AI processing',
    icon: Brain
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    status: 'operational',
    uptime: 99.96,
    responseTime: 35,
    lastUpdated: '2025-08-27T16:48:00Z',
    description: 'Cloud computing and storage services',
    icon: Cloud
  }
];

const incidents: Incident[] = [
  {
    id: 'incident-001',
    title: 'Scheduled Maintenance - Database Systems',
    description: 'Routine database maintenance and optimization',
    status: 'resolved',
    severity: 'low',
    startTime: '2025-08-27T14:00:00Z',
    endTime: '2025-08-27T15:30:00Z',
    affectedServices: ['database']
  },
  {
    id: 'incident-002',
    title: 'Performance Degradation - AI Services',
    description: 'Investigating increased response times in AI processing',
    status: 'monitoring',
    severity: 'medium',
    startTime: '2025-08-27T16:00:00Z',
    affectedServices: ['ai']
  }
];

export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance': return <Clock className="w-5 h-5 text-blue-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-500/20 text-blue-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'critical': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';
  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for all Zion Tech Group services."
        keywords="system status, uptime, performance, monitoring, services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-6">
              <Activity className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Real-time status and performance metrics for all our services and infrastructure.
            </p>
          </motion.div>

          {/* Overall Status */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
                <button
                  onClick={refreshData}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {overallStatus === 'operational' ? 'All Systems Operational' : 'System Issues Detected'}
                  </div>
                  <div className="text-zinc-300">Status</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{overallUptime.toFixed(2)}%</div>
                  <div className="text-zinc-300">Average Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {lastUpdated.toLocaleTimeString()}
                  </div>
                  <div className="text-zinc-300">Last Updated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-zinc-400">{service.description}</p>
                      </div>
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Last Updated:</span>
                      <span className="text-white font-medium">
                        {new Date(service.lastUpdated).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Incidents */}
          {incidents.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                        <p className="text-zinc-300 mb-3">{incident.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={`px-2 py-1 rounded-full ${getSeverityColor(incident.severity)}`}>
                            {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                          </span>
                          <span className="text-zinc-400">
                            Started: {new Date(incident.startTime).toLocaleString()}
                          </span>
                          {incident.endTime && (
                            <span className="text-zinc-400">
                              Resolved: {new Date(incident.endTime).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                        incident.status === 'monitoring' ? 'bg-blue-500/20 text-blue-400' :
                        incident.status === 'identified' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                    
                    {incident.affectedServices.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-zinc-400 mb-2">Affected Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {incident.affectedServices.map((serviceId) => {
                            const service = services.find(s => s.id === serviceId);
                            return service ? (
                              <span key={serviceId} className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded">
                                {service.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{overallUptime.toFixed(2)}%</div>
                <div className="text-zinc-300">Overall Uptime</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {Math.round(services.reduce((acc, service) => acc + service.responseTime, 0) / services.length)}ms
                </div>
                <div className="text-zinc-300">Avg Response Time</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{services.length}</div>
                <div className="text-zinc-300">Active Services</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {incidents.filter(i => i.status !== 'resolved').length}
                </div>
                <div className="text-zinc-300">Active Incidents</div>
              </motion.div>
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              If you're experiencing issues with our services or have questions about system status, 
              please don't hesitate to contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
