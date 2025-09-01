import React, { useState, useEffect } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { CheckCircle, 
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
             } from 'lucide-react.ts';

export default function Status(...args: any[]): any {
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
      name: 'AI Services Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'IT Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '67ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Micro SaaS Solutions',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '52ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Cloud & DevOps',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '78ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Cybersecurity Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '41ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Blockchain Solutions',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '89ms',
      lastUpdated: '2 minutes ago'
    }
  ]);

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

  const getStatusColor = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
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

  const getStatusIcon = (status: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-6 h-6 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-6 h-6 text-blue-500" />;
      default:
        return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
  };

  const getSeverityColor = (severity: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
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
        return 'text-green-500';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 border-green-500/50';
      case 'degraded':
        return 'bg-yellow-500/20 border-yellow-500/50';
      case 'outage':
        return 'bg-red-500/20 border-red-500/50';
      case 'maintenance':
        return 'bg-blue-500/20 border-blue-500/50';
      default:
        return 'bg-green-500/20 border-green-500/50';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and uptime monitoring for Zion Tech Group's AI, IT, and Micro SaaS services. Check service health and performance metrics." />
        <meta name="keywords" content="system status, uptime monitoring, service health, Zion Tech Group, AI services status" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of Zion Tech Group's services and infrastructure. 
              Check service health, uptime, and performance metrics.
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Overall System Status</h2>
              <div className="flex items-center space-x-3">
                {getStatusIcon(overallStatus)}
                <span className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>
                  {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.97%</div>
                <div className="text-gray-400">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">58ms</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-400">Active Incidents</div>
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index)              => (
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index)              => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white font-medium">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updated:</span>
                    <span className="text-gray-300 text-sm">{service.lastUpdated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
            {regions.map((region, index)              => (
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
          </div>

          {/* Performance Metrics */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.97%</div>
                <div className="text-gray-400">Server Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-400">Database Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.95%</div>
                <div className="text-gray-400">Cloud Services</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Security Status</div>
              </div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get notified about service updates, maintenance windows, and incident reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}