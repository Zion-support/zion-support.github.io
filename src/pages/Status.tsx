import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Database,
  Globe,
  Zap,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Calendar,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in real app this would come from API
  const systemStatus = {
    overall: 'operational',
    lastChecked: new Date(),
    uptime: '99.99%',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: null
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '67ms',
      lastIncident: null
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastIncident: null
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '89ms',
      lastIncident: null
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '156ms',
      lastIncident: null
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '234ms',
      lastIncident: null
    }
  ];

  const regions = [
    {
      name: 'US East (N. Virginia)',
      status: 'operational',
      latency: '12ms',
      uptime: '99.99%'
    },
    {
      name: 'US West (Oregon)',
      status: 'operational',
      latency: '45ms',
      uptime: '99.98%'
    },
    {
      name: 'Europe (Ireland)',
      status: 'operational',
      latency: '89ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific (Tokyo)',
      status: 'operational',
      latency: '156ms',
      uptime: '99.96%'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: new Date('2024-01-15T02:00:00Z'),
      endTime: new Date('2024-01-15T04:00:00Z'),
      description: 'Scheduled database maintenance to optimize performance and apply security updates.',
      updates: [
        {
          time: new Date('2024-01-15T02:00:00Z'),
          message: 'Maintenance started as scheduled'
        },
        {
          time: new Date('2024-01-15T03:30:00Z'),
          message: 'Database optimization completed successfully'
        },
        {
          time: new Date('2024-01-15T04:00:00Z'),
          message: 'All services restored and operating normally'
        }
      ]
    },
    {
      id: 'INC-2024-002',
      title: 'Increased API Response Times',
      status: 'resolved',
      severity: 'medium',
      startTime: new Date('2024-01-10T14:30:00Z'),
      endTime: new Date('2024-01-10T16:45:00Z'),
      description: 'Some users experienced increased API response times due to high traffic load.',
      updates: [
        {
          time: new Date('2024-01-10T14:30:00Z'),
          message: 'Investigating increased response times'
        },
        {
          time: new Date('2024-01-10T15:15:00Z'),
          message: 'Identified high traffic load, implementing scaling measures'
        },
        {
          time: new Date('2024-01-10T16:45:00Z'),
          message: 'Performance restored to normal levels'
        }
      ]
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Average Response Time',
      value: '45ms',
      trend: 'down',
      change: '-12%',
      period: 'vs last week'
    },
    {
      metric: 'Error Rate',
      value: '0.01%',
      trend: 'down',
      change: '-25%',
      period: 'vs last week'
    },
    {
      metric: 'Throughput',
      value: '1.2M req/min',
      trend: 'up',
      change: '+8%',
      period: 'vs last week'
    },
    {
      metric: 'Availability',
      value: '99.99%',
      trend: 'stable',
      change: '0%',
      period: 'vs last week'
    }
  ];

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
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/20 text-blue-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'critical':
        return 'bg-red-600/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-400';
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
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status, uptime monitoring, and incident history for Zion Tech Group services."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Activity className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of our services, uptime statistics, and incident history. 
              We're committed to transparency and keeping you informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {getStatusIcon(systemStatus.overall)}
                  <h2 className="text-2xl font-bold text-white ml-3">All Systems Operational</h2>
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{systemStatus.uptime}</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{systemStatus.responseTime}</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {lastUpdated.toLocaleTimeString()}
                  </div>
                  <div className="text-gray-300">Last Updated</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-300">Key performance indicators and trends</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    metric.trend === 'up' ? 'bg-green-500/20 text-green-400' :
                    metric.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-xl text-gray-300">
              Real-time status of all our services and components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white font-medium">{service.responseTime}</span>
                  </div>
                  {service.lastIncident && (
                    <div className="pt-2 border-t border-slate-600/50">
                      <span className="text-xs text-gray-400">Last incident: {service.lastIncident}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Regional Performance</h2>
            <p className="text-xl text-gray-300">
              Performance metrics across our global infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-bold text-white">{region.name}</h3>
                  </div>
                  {getStatusIcon(region.status)}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Latency</div>
                    <div className="text-white font-medium">{region.latency}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                    <div className="text-white font-medium">{region.uptime}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-300">
              Historical incidents and their resolutions
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {incident.status.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{incident.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {incident.startTime.toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {incident.startTime.toLocaleTimeString()} - {incident.endTime.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-600/50 pt-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Updates</h4>
                    <div className="space-y-2">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-gray-400">{update.time.toLocaleString()}</div>
                            <div className="text-gray-300">{update.message}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Page Links */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our status page for real-time updates and notifications about 
              service status and incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://status.ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Status Page
              </a>
              <a
                href="mailto:status@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                Report an Issue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
