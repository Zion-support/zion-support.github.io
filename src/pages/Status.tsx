import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Cloud, 
  Globe,
  Zap,
  Shield,
  Users,
  BarChart3,
  Activity,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock status data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    uptime: '99.99%',
    lastIncident: '2024-01-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website & Frontend',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '120ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastCheck: '3 minutes ago'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '300ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Analytics',
      status: 'operational',
      uptime: '99.90%',
      responseTime: '500ms',
      lastCheck: '5 minutes ago'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      description: 'Planned maintenance to optimize database performance and improve query response times.',
      status: 'maintenance',
      severity: 'low',
      startTime: '2025-01-20T02:00:00Z',
      endTime: '2025-01-20T06:00:00Z',
      affectedServices: ['Database', 'API Services']
    },
    {
      id: 2,
      title: 'Resolved: Increased API Response Times',
      description: 'API response times were elevated due to increased load. Issue has been resolved.',
      status: 'resolved',
      severity: 'medium',
      startTime: '2025-01-18T14:30:00Z',
      endTime: '2025-01-18T16:45:00Z',
      affectedServices: ['API Services']
    }
  ];

  const getStatusColor = (status) => {
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
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'critical':
        return 'bg-red-600/20 text-red-300 border-red-600/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real-time status of all Zion Tech Group services and infrastructure
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-zion-blue-dark/30 rounded-2xl border border-zion-cyan/20 p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400 mr-4" />
              <div className="text-left">
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
                <p className="text-zion-slate-light">No incidents reported</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{systemStatus.uptime}</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{systemStatus.responseTime}</div>
                <div className="text-zion-slate-light">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-zion-slate-light">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{lastUpdated.toLocaleTimeString()}</div>
                <div className="text-zion-slate-light">Last Updated</div>
              </div>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="mt-6 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 inline mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Status:</span>
                    <span className={getStatusColor(service.status)}>Operational</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Response:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Last Check:</span>
                    <span className="text-white">{service.lastCheck}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <p className="text-zion-slate-light mb-4">{incident.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                    {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Start Time:</span>
                    <span className="text-white ml-2">{new Date(incident.startTime).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">End Time:</span>
                    <span className="text-white ml-2">{incident.endTime ? new Date(incident.endTime).toLocaleString() : 'Ongoing'}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-zion-slate-light text-sm">Affected Services:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {incident.affectedServices.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zion-slate-light mb-4">
            Last updated: {lastUpdated.toLocaleString()}
          </p>
          <p className="text-zion-slate-light text-sm">
            For urgent issues, please contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
              support@ziontechgroup.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Status;
