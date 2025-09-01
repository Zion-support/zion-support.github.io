import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  BarChart3, 
  RefreshCw, 
  ExternalLink, 
  TrendingUp 
} from 'lucide-react';
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
      uptime: 99.92,
      responseTime: 320,
      lastUpdated: '2025-08-27T16:48:00Z',
      description: 'Machine learning models and AI processing',
      icon: Brain
    },
    {
      id: 'analytics',
      name: 'Analytics Platform',
      status: 'operational',
      uptime: 99.89,
      responseTime: 95,
      lastUpdated: '2025-08-27T16:48:00Z',
      description: 'Data analytics and reporting systems',
      icon: BarChart3
    }
  ];

  const incidents: Incident[] = [
    {
      id: 'inc-001',
      title: 'Scheduled Maintenance - Database Optimization',
      description: 'Routine database maintenance to improve performance and reliability.',
      status: 'monitoring',
      severity: 'low',
      startTime: '2025-08-27T14:00:00Z',
      affectedServices: ['database', 'analytics'],
      endTime: '2025-08-27T16:00:00Z'
    },
    {
      id: 'inc-002',
      title: 'Performance Degradation - AI Services',
      description: 'Investigating increased response times in AI processing services.',
      status: 'investigating',
      severity: 'medium',
      startTime: '2025-08-27T15:30:00Z',
      affectedServices: ['ai']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertTriangle;
      case 'outage':
        return XCircle;
      case 'maintenance':
        return Clock;
      default:
        return Activity;
    }
  };

  const getStatusColor = (status: string) => {
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

  const getSeverityColor = (severity: string) => {
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

  const overallStatus = services.every(s => s.status === 'operational')
    ? 'operational'
    : services.some(s => s.status === 'outage')
    ? 'outage'
    : 'degraded';

  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(refreshStatus, 30000); // Auto-refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for Zion Tech Group services. Monitor uptime, response times, and incident reports."
        keywords="system status, uptime, performance, monitoring, incidents, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                System Status
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Real-time monitoring of our services, infrastructure, and performance metrics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Overall Status */}
                <div className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${getStatusColor(overallStatus)}`}>
                    {React.createElement(getStatusIcon(overallStatus), { className: "w-4 h-4 mr-2" })}
                    {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Overall Status</h3>
                  <p className="text-gray-400">All systems operational</p>
                </div>

                {/* Uptime */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{overallUptime.toFixed(2)}%</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
                  <p className="text-gray-400">30-day average</p>
                </div>

                {/* Last Updated */}
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Last Updated</div>
                  <div className="text-lg font-semibold text-white">
                    {lastUpdated.toLocaleTimeString()}
                  </div>
                  <button
                    onClick={refreshStatus}
                    disabled={isRefreshing}
                    className="mt-2 px-4 py-2 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Service Status
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white font-semibold">{service.name}</h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white">{service.uptime}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white">{service.responseTime}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="text-white">{new Date(service.lastUpdated).toLocaleTimeString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        {incidents.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-12 text-center"
              >
                Recent Incidents
              </motion.h2>
              
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{incident.title}</h3>
                        <p className="text-gray-300 text-sm">{incident.description}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div>
                        <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                        {incident.endTime && (
                          <span className="ml-4">Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                        )}
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Performance Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Performance Metrics
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">99.97%</div>
                <div className="text-gray-400 text-sm">Average Uptime</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">108ms</div>
                <div className="text-gray-400 text-sm">Average Response Time</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">6</div>
                <div className="text-gray-400 text-sm">Active Services</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">0</div>
                <div className="text-gray-400 text-sm">Active Incidents</div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SystemStatus;
