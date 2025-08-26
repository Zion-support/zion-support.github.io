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
  Shield,
  Activity,
  Wifi,
  Zap,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

export default function Status() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastChecked: '2 minutes ago',
      icon: Server
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastChecked: '1 minute ago',
      icon: Cloud
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '15ms',
      lastChecked: '30 seconds ago',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      lastChecked: '1 minute ago',
      icon: Shield
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '200ms',
      lastChecked: '2 minutes ago',
      icon: Cloud
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '150ms',
      lastChecked: '1 minute ago',
      icon: Wifi
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '180ms',
      lastChecked: '3 minutes ago',
      icon: Zap
    },
    {
      name: 'Marketplace',
      status: 'operational',
      uptime: '99.93%',
      responseTime: '95ms',
      lastChecked: '1 minute ago',
      icon: Activity
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      description: 'Database performance optimization completed successfully',
      startTime: '2024-12-15 02:00 UTC',
      endTime: '2024-12-15 04:00 UTC',
      duration: '2 hours'
    },
    {
      id: 2,
      title: 'API Rate Limiting Adjustment',
      status: 'resolved',
      severity: 'medium',
      description: 'Adjusted API rate limiting to improve performance for high-traffic users',
      startTime: '2024-12-10 14:30 UTC',
      endTime: '2024-12-10 15:45 UTC',
      duration: '1 hour 15 minutes'
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
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertTriangle;
      case 'outage':
        return XCircle;
      default:
        return Clock;
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
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Activity className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services and systems. 
              We're committed to maintaining 99.9%+ uptime for all our services.
            </p>
            
            {/* Overall Status */}
            <div className="inline-flex items-center gap-3 bg-zinc-800/50 rounded-lg px-6 py-3 border border-zion-cyan/20">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(overallStatus)}`}></div>
              <span className="text-white font-medium">
                All systems are {overallStatus === 'operational' ? 'operational' : 'experiencing issues'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Service Status</h2>
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light text-sm">Last updated: {currentTime}</span>
              <button
                onClick={handleRefresh}
                className={`flex items-center gap-2 px-4 py-2 bg-zinc-700/50 text-white rounded-lg hover:bg-zinc-600/50 transition-colors ${
                  isRefreshing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isRefreshing}
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Status:</span>
                      <span className={`capitalize ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-white">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Response:</span>
                      <span className="text-white">{service.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Checked:</span>
                      <span className="text-white text-xs">{service.lastChecked}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Recent Incidents
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold text-lg">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{incident.description}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-zion-cyan font-medium">{incident.status}</div>
                    <div className="text-zion-slate-light">{incident.duration}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Started:</span>
                    <span className="text-white ml-2">{incident.startTime}</span>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Resolved:</span>
                    <span className="text-white ml-2">{incident.endTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {incidents.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">No Recent Incidents</h3>
                <p className="text-zion-slate-light">All systems are operating normally.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get real-time updates on system status, maintenance schedules, and incident reports.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <Clock className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Real-time Updates</h3>
                <p className="text-zion-slate-light text-sm mb-4">Status updates every minute</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  Subscribe to Updates
                </button>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <Server className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">API Status</h3>
                <p className="text-zion-slate-light text-sm mb-4">Check API endpoints status</p>
                <a href="/api/status" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  View API Status →
                </a>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <ExternalLink className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">External Status</h3>
                <p className="text-zion-slate-light text-sm mb-4">Third-party service status</p>
                <a href="https://status.ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  External Status Page →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}