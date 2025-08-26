import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Activity, 
  Server, 
  Database, 
  Globe,
  RefreshCw,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
  Wifi,
  HardDrive
} from 'lucide-react';

const Status: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in a real app, this would come from API calls
  const systemStatus = {
    overall: 'operational',
    uptime: '99.99%',
    lastIncident: '2024-01-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastCheck: '2 minutes ago',
      icon: Globe
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastCheck: '1 minute ago',
      icon: Server
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '25ms',
      lastCheck: '30 seconds ago',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '80ms',
      lastCheck: '1 minute ago',
      icon: Shield
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '150ms',
      lastCheck: '2 minutes ago',
      icon: HardDrive
    },
    {
      name: 'Analytics',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '200ms',
      lastCheck: '3 minutes ago',
      icon: BarChart3
    }
  ];

  const regions = [
    {
      name: 'US East',
      status: 'operational',
      latency: '25ms',
      uptime: '99.99%'
    },
    {
      name: 'US West',
      status: 'operational',
      latency: '45ms',
      uptime: '99.98%'
    },
    {
      name: 'Europe',
      status: 'operational',
      latency: '85ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific',
      status: 'operational',
      latency: '120ms',
      uptime: '99.96%'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Routine database maintenance and optimization completed successfully.'
    },
    {
      id: 'INC-002',
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 16:45 UTC',
      description: 'Increased API response times due to high traffic load. Resolved by scaling infrastructure.'
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
        return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-600/20';
      case 'degraded':
        return 'bg-yellow-600/20';
      case 'outage':
        return 'bg-red-600/20';
      case 'maintenance':
        return 'bg-blue-600/20';
      default:
        return 'bg-gray-600/20';
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Activity className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            System
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {" "}Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time monitoring of Zion Tech Group's services and infrastructure. 
            Check the current status of all our systems and services.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <RefreshCw className={`h-5 w-5 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <div className="text-gray-400 text-sm">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </motion.div>

        {/* Overall Status */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 ${getStatusBgColor(systemStatus.overall)} rounded-full`}>
                    <Activity className={`h-12 w-12 ${getStatusColor(systemStatus.overall)}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Overall Status</h3>
                <p className={`text-2xl font-bold ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <TrendingUp className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
                <p className="text-2xl font-bold text-green-400">{systemStatus.uptime}</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Zap className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                <p className="text-2xl font-bold text-blue-400">{systemStatus.responseTime}</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Clock className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Last Incident</h3>
                <p className="text-lg font-bold text-gray-300">{systemStatus.lastIncident}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Service Status */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <service.icon className="h-6 w-6 text-blue-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    </div>
                    <StatusIcon className={`h-6 w-6 ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-semibold ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Check:</span>
                      <span className="text-gray-300 text-sm">{service.lastCheck}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Regional Status */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Regional Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full">
                    <Wifi className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{region.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`font-semibold ${getStatusColor(region.status)}`}>
                      {region.status.charAt(0).toUpperCase() + region.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-white font-semibold">{region.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-semibold">{region.uptime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Incidents */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Incidents</h2>
          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.status === 'resolved' ? 'bg-green-600/20 text-green-400' :
                        incident.status === 'investigating' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.severity === 'low' ? 'bg-blue-600/20 text-blue-400' :
                        incident.severity === 'medium' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <span className="text-gray-400">ID: {incident.id}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-400">Start Time:</span>
                    <p className="text-white">{incident.startTime}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">End Time:</span>
                    <p className="text-white">{incident.endTime}</p>
                  </div>
                </div>
                
                <p className="text-gray-300">{incident.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Metrics */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <Users className="h-12 w-12 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Active Users</h3>
              <p className="text-3xl font-bold text-green-400">12,847</p>
              <p className="text-gray-400 text-sm">+5.2% from last week</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <BarChart3 className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">API Calls</h3>
              <p className="text-3xl font-bold text-blue-400">2.4M</p>
              <p className="text-gray-400 text-sm">+12.8% from last week</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-600/20 rounded-full">
                  <Zap className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Average Response</h3>
              <p className="text-3xl font-bold text-purple-400">45ms</p>
              <p className="text-gray-400 text-sm">-8.3% from last week</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're experiencing issues or have questions about our services, 
              our support team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Support
              </a>
              <a
                href="/help"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Help Center
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Report Issue
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Status;
