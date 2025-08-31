import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, AlertCircle, XCircle, Clock, 
  Activity, Server, Database, Globe, Shield,
  Wifi, Cloud, Zap, TrendingUp, RefreshCw,
  ExternalLink, Info, AlertTriangle, MinusCircle, MessageCircle
} from 'lucide-react';

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    uptime: '99.98%',
    lastIncident: '2024-01-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website & Frontend',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      lastCheck: '2 minutes ago',
      description: 'Main website and user interface'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '45ms',
      lastCheck: '1 minute ago',
      description: 'Backend API and data services'
    },
    {
      name: 'Database Systems',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastCheck: '30 seconds ago',
      description: 'Primary and backup databases'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '85ms',
      lastCheck: '1 minute ago',
      description: 'User authentication and authorization'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago',
      description: 'Document and media storage'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastCheck: '3 minutes ago',
      description: 'Transactional and marketing emails'
    },
    {
      name: 'Monitoring Systems',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '25ms',
      lastCheck: '15 seconds ago',
      description: 'System monitoring and alerting'
    },
    {
      name: 'CDN & Edge',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '35ms',
      lastCheck: '1 minute ago',
      description: 'Content delivery network'
    }
  ];

  const regions = [
    {
      name: 'North America (US East)',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      servers: 12
    },
    {
      name: 'North America (US West)',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '52ms',
      servers: 8
    },
    {
      name: 'Europe (Frankfurt)',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '78ms',
      servers: 6
    },
    {
      name: 'Asia Pacific (Singapore)',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '95ms',
      servers: 4
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      duration: '2 hours',
      description: 'Routine database maintenance and optimization completed successfully.',
      updates: [
        {
          time: '2024-01-15 02:00 UTC',
          message: 'Maintenance started - Database optimization in progress'
        },
        {
          time: '2024-01-15 03:30 UTC',
          message: 'Optimization 75% complete - Performance improvements detected'
        },
        {
          time: '2024-01-15 04:00 UTC',
          message: 'Maintenance completed successfully - All systems operational'
        }
      ]
    },
    {
      id: 2,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 16:45 UTC',
      duration: '2 hours 15 minutes',
      description: 'Increased API response times due to high traffic load. Additional resources deployed.',
      updates: [
        {
          time: '2024-01-10 14:30 UTC',
          message: 'Investigating increased API response times'
        },
        {
          time: '2024-01-10 15:00 UTC',
          message: 'Identified high traffic load - Scaling resources'
        },
        {
          time: '2024-01-10 16:45 UTC',
          message: 'Issue resolved - Performance restored to normal levels'
        }
      ]
    }
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertCircle;
      case 'outage':
        return XCircle;
      case 'maintenance':
        return Clock;
      default:
        return MinusCircle;
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

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Status</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time status of Zion Tech Group services and infrastructure
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Activity className="w-5 h-5" />
              <span>Live Monitoring</span>
              <span>•</span>
              <Clock className="w-5 h-5" />
              <span>24/7 Uptime</span>
              <span>•</span>
              <Shield className="w-5 h-5" />
              <span>Enterprise Security</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Overall System Status</h2>
                <p className="text-gray-400">All systems are operating normally</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <div className="text-sm text-gray-400">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Status</h3>
                <p className="text-green-400 font-medium">Operational</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Uptime</h3>
                <p className="text-blue-400 font-medium">{systemStatus.uptime}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                <p className="text-purple-400 font-medium">{systemStatus.responseTime}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Last Incident</h3>
                <p className="text-yellow-400 font-medium">{systemStatus.lastIncident}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Service Status</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Real-time status of all our core services and infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    </div>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(service.status)}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="text-sm font-medium capitalize">{service.status}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <p className="text-white font-medium">{service.uptime}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Response:</span>
                      <p className="text-white font-medium">{service.responseTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Last Check:</span>
                      <p className="text-white font-medium">{service.lastCheck}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Regional Status</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Performance and availability across our global infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => {
              const StatusIcon = getStatusIcon(region.status);
              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(region.status)} mb-4`}>
                    <StatusIcon className="w-4 h-4" />
                    <span className="text-sm font-medium capitalize">{region.status}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-4">{region.name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <p className="text-white font-medium">{region.uptime}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Response:</span>
                      <p className="text-white font-medium">{region.responseTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Servers:</span>
                      <p className="text-white font-medium">{region.servers}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Recent Incidents</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Historical record of system incidents and maintenance events
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>Started: {incident.startTime}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Incident Updates:</h4>
                  <div className="space-y-2">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex items-start space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-gray-400">{update.time}</span>
                          <p className="text-white">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed about our system status and get support when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Status Page RSS</h3>
              <p className="text-gray-300 text-sm mb-4">Subscribe to our RSS feed for automatic updates</p>
              <a
                href="/status/rss"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Subscribe</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support Chat</h3>
              <p className="text-gray-300 text-sm mb-4">Get real-time help from our support team</p>
              <a
                href="/support"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <span>Start Chat</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Report Issues</h3>
              <p className="text-gray-300 text-sm mb-4">Report problems or request assistance</p>
              <a
                href="/contact"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Report Issue</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is available 24/7 to help you with any issues or questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Info className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
