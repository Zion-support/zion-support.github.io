import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Cloud, Globe, Activity, BarChart3 } from 'lucide-react';

export default function Status() {
  const systemStatus = {
    overall: 'operational',
    lastUpdated: '2025-01-15T14:30:00Z',
    uptime: '99.98%',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'AI Business Intelligence',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      lastIncident: null,
      icon: Database
    },
    {
      name: 'AI Sales Copilot',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      lastIncident: null,
      icon: Cloud
    },
    {
      name: 'AI Compliance Assistant',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '95ms',
      lastIncident: null,
      icon: Server
    },
    {
      name: 'IoT Edge Platform',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastIncident: null,
      icon: Globe
    },
    {
      name: 'Blockchain Solutions',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '200ms',
      lastIncident: null,
      icon: Database
    },
    {
      name: 'Healthcare Tech Platform',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '110ms',
      lastIncident: null,
      icon: Server
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2025-001',
      title: 'Scheduled Maintenance - AI Services',
      description: 'Planned maintenance window for AI infrastructure upgrades',
      status: 'resolved',
      severity: 'low',
      startTime: '2025-01-10T02:00:00Z',
      endTime: '2025-01-10T04:00:00Z',
      affectedServices: ['AI Business Intelligence', 'AI Sales Copilot']
    },
    {
      id: 'INC-2025-002',
      title: 'Database Performance Degradation',
      description: 'Temporary performance issues affecting response times',
      status: 'resolved',
      severity: 'medium',
      startTime: '2025-01-08T14:30:00Z',
      endTime: '2025-01-08T16:45:00Z',
      affectedServices: ['All Services']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-slate-400';
    }
  };

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
        return Clock;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time status of Zion Tech Group services and systems. Monitor uptime, performance, and incident reports."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Status
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring of our services and systems. Stay informed about 
              uptime, performance, and any ongoing issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Overall System Status
                </h2>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">All Systems Operational</span>
                </div>
                <p className="text-slate-300">
                  Last updated: {new Date(systemStatus.lastUpdated).toLocaleString()}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-slate-700/30 rounded-xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">{systemStatus.uptime}</div>
                  <div className="text-slate-300">Uptime (30 days)</div>
                </div>
                <div className="text-center p-6 bg-slate-700/30 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{systemStatus.responseTime}</div>
                  <div className="text-slate-300">Average Response Time</div>
                </div>
                <div className="text-center p-6 bg-slate-700/30 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-slate-300">Active Incidents</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Status
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Current status of all Zion Tech Group services and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="font-semibold text-white">{service.name}</h3>
                    </div>
                    <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Status:</span>
                      <span className={`font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Information about recent service disruptions and maintenance activities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <p className="text-slate-300 mb-3">{incident.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                    {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">Started:</span>
                      <span className="text-white">{new Date(incident.startTime).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-400">Resolved:</span>
                      <span className="text-white">{new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Affected Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-sm font-medium">✓ Resolved</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400 text-sm">Incident ID: {incident.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time performance data and system health indicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'CPU Usage', value: '23%', color: 'text-green-400', icon: BarChart3 },
              { label: 'Memory Usage', value: '67%', color: 'text-yellow-400', icon: BarChart3 },
              { label: 'Network Latency', value: '12ms', color: 'text-green-400', icon: Activity },
              { label: 'Active Connections', value: '2.4k', color: 'text-blue-400', icon: Server }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-slate-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Subscribe to status updates and get notified about any service disruptions 
              or maintenance activities.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-3">
                Get real-time updates about system status and incidents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
