import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'degraded': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'outage': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'maintenance': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'outage': return <XCircle className="w-5 h-5" />;
      case 'maintenance': return <Clock className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'high': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return <Info className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <XCircle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'identified': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'monitoring': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'resolved': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const formatUptime = (uptime: number) => {
    return `${uptime.toFixed(2)}%`;
  };

  const formatResponseTime = (responseTime: number) => {
    return `${responseTime}ms`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const operationalServices = services.filter(s => s.status === 'operational').length;
  const totalServices = services.length;
  const operationalPercentage = (operationalServices / totalServices) * 100;

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and service health monitoring for all Zion Tech Group services and platforms."
        keywords="system status, service health, uptime, monitoring, incident reports, service status"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Status</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time system status and service health monitoring for all our services and platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                    <p className="text-gray-300">
                      {operationalServices} of {totalServices} services are running normally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{formatUptime(operationalPercentage)}</div>
                    <div className="text-sm text-gray-400">Operational</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{formatUptime(99.98)}</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                    {isRefreshing ? 'Refreshing...' : 'Refresh'}
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-400 text-center">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </section>

        {/* Service Status Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Status</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time status of all our services and their performance metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-green-400 font-medium">{formatUptime(service.uptime)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-blue-400 font-medium">{formatResponseTime(service.responseTime)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Performance Metrics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key performance indicators and system health metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Average Uptime</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">99.98%</div>
                <p className="text-gray-300 text-sm">Last 30 days</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Average Response</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">115ms</div>
                <p className="text-gray-300 text-sm">Global average</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Availability</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                <p className="text-gray-300 text-sm">SLA compliance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Incidents</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest incident reports and maintenance updates.
              </p>
            </motion.div>

            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 mb-3">{incident.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                        <div className="flex items-center gap-1">
                          {getSeverityIcon(incident.severity)}
                          {incident.severity}
                        </div>
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">Started: {formatDate(incident.startTime)}</span>
                    </div>
                    {incident.endTime && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">Resolved: {formatDate(incident.endTime)}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{incident.affectedServices.length} services affected</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getIncidentStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                  </div>

                  {incident.affectedServices.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((serviceId, idx) => {
                        const service = services.find(s => s.id === serviceId);
                        return (
                          <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                            {service ? service.name : serviceId}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {incidents.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Active Incidents</h3>
                <p className="text-gray-300">All systems are running normally</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experiencing issues with our services? Our support team is here to help 
                you resolve any problems quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Report an Issue
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SystemStatus;