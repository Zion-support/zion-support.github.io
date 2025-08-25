<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

export default function Status() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemStatus = {
    overall: 'operational',
    uptime: '99.99%',
    lastIncident: 'None in the last 90 days'
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Brain,
  Rocket,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  BarChart3
} from 'lucide-react';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock status data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    uptime: '99.98%',
    lastIncident: '2024-12-15',
    responseTime: '45ms'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  };

  const services = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      name: 'Website',
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
      uptime: '99.96%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastCheck: '3 minutes ago'
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      name: 'AI Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      icon: Brain,
      description: 'AI Business Intelligence, Marketing Automation, HR & Recruitment'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      icon: Server,
      description: 'Cloud hosting, databases, and infrastructure services'
    },
    {
      name: 'Cybersecurity',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '65ms',
      icon: Shield,
      description: 'Security monitoring, threat detection, and compliance'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      icon: Globe,
      description: 'REST API, GraphQL, and webhook services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '25ms',
      icon: Database,
      description: 'Primary and backup database systems'
    },
    {
      name: 'Micro SAAS Platform',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '95ms',
      icon: Rocket,
      description: 'Micro SAAS solutions and marketplace'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const regions = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    {
      name: 'North America (US East)',
      status: 'operational',
      latency: '45ms',
      uptime: '99.99%'
    },
    {
      name: 'North America (US West)',
      status: 'operational',
      latency: '65ms',
      uptime: '99.98%'
    },
    {
      name: 'Europe (EU West)',
      status: 'operational',
      latency: '120ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific (APAC)',
      status: 'operational',
      latency: '180ms',
      uptime: '99.96%'
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
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
=======
import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';

const Status = () => {
  const systemStatus = {
    overall: 'operational',
    services: [
      { name: 'Website', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'API Services', status: 'operational', uptime: '99.8%', lastIncident: 'None' },
      { name: 'Database', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%', lastIncident: 'None' },
      { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'Security Services', status: 'operational', uptime: '100%', lastIncident: 'None' }
    ],
    incidents: []
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    { name: 'US East (N. Virginia)', status: 'operational', latency: '45ms' },
    { name: 'US West (Oregon)', status: 'operational', latency: '52ms' },
    { name: 'Europe (Ireland)', status: 'operational', latency: '78ms' },
    { name: 'Asia Pacific (Tokyo)', status: 'operational', latency: '95ms' }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      date: '2024-12-15',
      duration: '2 hours',
      description: 'Planned database maintenance to improve performance and reliability.',
      impact: 'low'
    },
    {
      id: 2,
      title: 'API Rate Limiting Update',
      status: 'resolved',
      date: '2024-12-10',
      duration: '30 minutes',
      description: 'Updated API rate limiting policies to ensure fair usage across all customers.',
      impact: 'low'
    },
    {
      id: 3,
      title: 'Security Patch Deployment',
      status: 'resolved',
      date: '2024-12-05',
      duration: '1 hour',
      description: 'Deployed critical security patches to all production systems.',
      impact: 'low'
    }
  ];

  const performanceMetrics = [
    { metric: 'Average Response Time', value: '45ms', trend: 'down', change: '-12%' },
    { metric: 'Error Rate', value: '0.02%', trend: 'down', change: '-5%' },
    { metric: 'Throughput', value: '15,420 req/s', trend: 'up', change: '+8%' },
    { metric: 'Active Users', value: '2,847', trend: 'up', change: '+15%' }
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'outage':
        return '🔴';
      default:
        return '⚪';
=======
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'degraded':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'outage':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
<<<<<<< HEAD
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            System Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time status of Zion Tech Group services and infrastructure.
          </p>
          
          {/* Current Time */}
          <div className="text-lg text-gray-400">
            Last updated: {currentTime.toLocaleString()}
=======
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-time status of Zion Tech Group services and infrastructure
            </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
          </div>
        </div>
      </div>

      {/* Overall Status */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🟢</div>
              <h2 className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</h2>
              <p className="text-gray-300">All services are running normally</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-400">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-gray-400">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">90+</div>
                <div className="text-gray-400">Days Since Last Incident</div>
              </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Overall System Status</h2>
            <div className="flex items-center space-x-3">
              {getStatusIcon(systemStatus.overall)}
              <span className="text-lg font-medium text-green-400">All Systems Operational</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-400">Uptime (30 days)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">0</div>
              <div className="text-gray-400">Active Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400">Monitoring</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
            </div>
          </div>
        </div>
      </div>

      {/* Service Status */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Status</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-cyan-400">{service.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(service.status)}`}>
                    {getStatusIcon(service.status)} {service.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-cyan-400">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Check:</span>
                    <span className="text-gray-300">{service.lastCheck}</span>
                  </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Service Status</h2>
          
          <div className="space-y-4">
            {systemStatus.services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border ${getStatusColor(service.status)}`}
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-medium text-white">{service.name}</h3>
                    <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Last incident: {service.lastIncident}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low':
        return 'text-green-400 bg-green-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'high':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">System Status</h1>
              <p className="text-xl text-zion-slate-light">Real-time system health and performance monitoring</p>
            </div>
          </div>
          
          {/* Overall Status */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Overall Status</h3>
                  <p className="text-2xl font-bold text-green-400">Operational</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Uptime</h3>
                  <p className="text-2xl font-bold text-zion-cyan">{systemStatus.uptime}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-2xl font-bold text-zion-cyan">{systemStatus.responseTime}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Last Incident</h3>
                  <p className="text-lg font-semibold text-zion-slate-light">{systemStatus.lastIncident}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zion-cyan/20 flex items-center justify-between">
                <div className="text-zion-slate-light">
                  Last updated: {lastUpdated.toLocaleString()}
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Status</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-zion-slate-light">{service.description}</p>
                    </div>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-zion-slate-light mb-1">Uptime</p>
                    <p className="text-lg font-semibold text-green-400">{service.uptime}</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-zion-slate-light mb-1">Response Time</p>
                    <p className="text-lg font-semibold text-zion-cyan">{service.responseTime}</p>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

<<<<<<< HEAD
      {/* Regional Status */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-cyan-400">{region.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(region.status)}`}>
                    {getStatusIcon(region.status)} {region.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-cyan-400">{region.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-cyan-400">{region.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
=======
      {/* Infrastructure Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Infrastructure Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Cloud Servers</div>
              <div className="text-sm text-gray-400">Global Distribution</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl border border-green-500/20">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Databases</div>
              <div className="text-sm text-gray-400">High Availability</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">CDN</div>
              <div className="text-sm text-gray-400">Global Edge</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Security</div>
              <div className="text-sm text-gray-400">24/7 Protection</div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
          </div>
        </div>
      </div>

      {/* Incident History */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Incidents</h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">No Recent Incidents</h3>
            <p className="text-gray-300">
              We're proud to report that all systems have been running smoothly with no incidents in the last 90 days.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about service updates, maintenance windows, and incident reports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Recent Incidents</h2>
          
          {systemStatus.incidents.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Recent Incidents</h3>
              <p className="text-gray-400">All systems are running smoothly</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Incident items would go here */}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center text-gray-400">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="text-sm mt-2">
            For urgent issues, contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
              support@ziontechgroup.com
            </a>
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-6 h-6 text-white" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-2xl font-bold text-zion-cyan mb-2">{metric.value}</p>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                }`}>
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Regional Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{region.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {getStatusIcon(region.status)}
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
                <p className="text-zion-slate-light">Latency: {region.latency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(incident.impact)}`}>
                        {incident.impact} impact
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <span>Date: {incident.date}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(incident.status)}
                    <span className="text-green-400 font-medium">Resolved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get notified about system status updates, maintenance windows, and incidents. 
            We'll keep you informed about any changes that might affect your services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
export default Status;
=======
export default Status;
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
};

export default Status;
>>>>>>> origin/cursor/website-audit-and-enhancement-9ebb
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
