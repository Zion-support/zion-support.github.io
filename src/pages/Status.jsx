import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Globe, 
  Shield,
  Activity,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Wifi,
  WifiOff,
  AlertCircle
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
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '12ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '180ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '85ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '200ms',
      lastCheck: '3 minutes ago'
    }
  ];

  const regions = [
    {
      name: 'North America',
      status: 'operational',
      latency: '25ms',
      uptime: '99.99%'
    },
    {
      name: 'Europe',
      status: 'operational',
      latency: '45ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific',
      status: 'operational',
      latency: '85ms',
      uptime: '99.95%'
    },
    {
      name: 'South America',
      status: 'operational',
      latency: '65ms',
      uptime: '99.96%'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-01-15',
      description: 'Planned maintenance window for API infrastructure updates. All services restored successfully.',
      duration: '2 hours'
    },
    {
      id: 2,
      title: 'Database Performance Optimization',
      status: 'resolved',
      date: '2024-01-10',
      description: 'Database query optimization completed. Improved response times across all services.',
      duration: '1 hour'
    },
    {
      id: 3,
      title: 'CDN Configuration Update',
      status: 'resolved',
      date: '2024-01-05',
      description: 'Content Delivery Network configuration updated for improved global performance.',
      duration: '30 minutes'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 border-green-500/30';
      case 'degraded':
        return 'bg-yellow-500/20 border-yellow-500/30';
      case 'outage':
        return 'bg-red-500/20 border-red-500/30';
      default:
        return 'bg-gray-500/20 border-gray-500/30';
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            System <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Status</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Real-time status of Zion Tech Group services and infrastructure. 
            Monitor uptime, performance, and any ongoing issues.
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center space-x-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-white transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-zion-slate-light text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{systemStatus.responseTime}</div>
                <div className="text-zion-slate-light text-sm">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">{systemStatus.lastIncident}</div>
                <div className="text-zion-slate-light text-sm">Last Incident</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">All Systems</div>
                <div className="text-zion-slate-light text-sm">Status</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">All systems operational</span>
              </div>
            </div>

            <div className="mt-4 text-center text-zion-slate-light text-sm">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`bg-zinc-800/50 border rounded-lg p-6 ${getStatusBgColor(service.status)}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Status:</span>
                    <span className={getStatusColor(service.status)}>Operational</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Response:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Last Check:</span>
                    <span className="text-white">{service.lastCheck}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Regional Status */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Regional Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {regions.map((region, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-4">{region.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Status:</span>
                    <span className="text-green-400">Operational</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Latency:</span>
                    <span className="text-white">{region.latency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Uptime:</span>
                    <span className="text-white">{region.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Incidents */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Incidents</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <span>{incident.date}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{incident.status}</span>
                  </div>
                </div>
                <p className="text-zion-slate-light leading-relaxed">{incident.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="text-zion-cyan mb-4 flex justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Response Time</h3>
              <div className="text-3xl font-bold text-zion-cyan mb-2">45ms</div>
              <p className="text-zion-slate-light text-sm">Average across all services</p>
            </div>

            <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="text-zion-cyan mb-4 flex justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Uptime</h3>
              <div className="text-3xl font-bold text-green-400 mb-2">99.98%</div>
              <p className="text-zion-slate-light text-sm">Last 30 days</p>
            </div>

            <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="text-zion-cyan mb-4 flex justify-center">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Active Users</h3>
              <div className="text-3xl font-bold text-zion-purple mb-2">12.5K</div>
              <p className="text-zion-slate-light text-sm">Current online users</p>
            </div>
          </div>
        </motion.div>

        {/* Status Page Info */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Server className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              This status page is updated in real-time. For immediate notifications about service issues, 
              follow us on social media or subscribe to our status updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                Follow on Twitter
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}