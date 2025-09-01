import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Activity, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  CheckCircle, 
  RefreshCw, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Wifi, 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  Info 
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastIncident?: string;
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

const services: Service[] = [
  {
    id: 'ai-bi',
    name: 'AI Business Intelligence',
    status: 'operational',
    uptime: 99.98,
    responseTime: 120
  },
  {
    id: 'ai-sales',
    name: 'AI Sales Copilot',
    status: 'operational',
    uptime: 99.97,
    responseTime: 95
  },
  {
    id: 'ai-compliance',
    name: 'AI Compliance Assistant',
    status: 'operational',
    uptime: 99.99,
    responseTime: 150
  },
  {
    id: 'llm-content',
    name: 'LLM Content Studio',
    status: 'operational',
    uptime: 99.96,
    responseTime: 180
  },
  {
    id: 'cloud-optimizer',
    name: 'Cloud FinOps Optimizer',
    status: 'operational',
    uptime: 99.95,
    responseTime: 200
  },
  {
    id: 'database',
    name: 'Database Services',
    status: 'operational',
    uptime: 99.99,
    responseTime: 45
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    status: 'operational',
    uptime: 99.97,
    responseTime: 75
  },
  {
    id: 'monitoring',
    name: 'Performance Monitoring',
    status: 'operational',
    uptime: 99.98,
    responseTime: 60
  }
];

const incidents: Incident[] = [
  {
    id: 'inc-001',
    title: 'Scheduled Maintenance - Database Optimization',
    description: 'Routine database maintenance to improve performance and reliability',
    status: 'resolved',
    severity: 'low',
    startTime: '2025-01-27T02:00:00Z',
    endTime: '2025-01-27T04:00:00Z',
    affectedServices: ['database']
  }
];

const SystemStatus: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const overallStatus = 'operational';

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':
        return 'text-red-400 bg-red-500/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      case 'maintenance':
        return <Clock className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/20';
      case 'high':
        return 'text-orange-400 bg-orange-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'low':
        return 'text-blue-400 bg-blue-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatUptime = (uptime: number) => {
    return `${uptime.toFixed(2)}%`;
  };

  const formatResponseTime = (ms: number) => {
    return `${ms}ms`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <>
      <SEO
        title="System Status - Zion Tech Group"
        description="Real-time monitoring of our platform's performance, uptime, and service status. Stay informed about any issues or maintenance activities."
        keywords="system status, uptime, performance monitoring, service health, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-400/30 mb-6">
              <Activity className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">System Status</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                System
              </span>
              <br />
              <span className="text-white">Status</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring of our platform's performance, uptime, and
              service status. Stay informed about any issues or maintenance
              activities.
            </p>
            
            {/* Overall Status */}
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl mb-8">
              <span className="text-gray-300 mr-4">Overall Status:</span>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallStatus)}`}
              >
                {getStatusIcon(overallStatus)}
                <span className="ml-2 capitalize">{overallStatus}</span>
              </div>
            </div>
            
            {/* Last Updated */}
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated.toLocaleString()}
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="ml-4 p-2 text-blue-400 hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Status
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Monitor the health and performance of all our services in real-time
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status).split(' ')[1]}`}></div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-medium">{formatUptime(service.uptime)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-blue-400 font-medium">{formatResponseTime(service.responseTime)}</span>
                  </div>
                  {service.lastIncident && (
                    <div className="text-xs text-gray-500">
                      Last incident: {service.lastIncident}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recent Incidents
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Track the status of any ongoing issues or recent resolutions
            </p>
          </motion.div>
          
          {incidents.length > 0 ? (
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 mb-3">{incident.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="ml-2 text-white capitalize">{incident.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Started:</span>
                      <span className="ml-2 text-white">{formatDate(incident.startTime)}</span>
                    </div>
                    {incident.endTime && (
                      <div>
                        <span className="text-gray-400">Resolved:</span>
                        <span className="ml-2 text-white">{formatDate(incident.endTime)}</span>
                      </div>
                    )}
                  </div>
                  
                  {incident.affectedServices.length > 0 && (
                    <div className="mt-4">
                      <span className="text-gray-400 text-sm">Affected Services:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {incident.affectedServices.map((service) => (
                          <span
                            key={service}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">All Systems Operational</h3>
              <p className="text-gray-400">No incidents reported at this time.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Performance Metrics
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key performance indicators and system health metrics
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.98%</div>
              <div className="text-gray-400">Average Uptime</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">127ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-gray-400">Active Services</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400">Active Incidents</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemStatus;