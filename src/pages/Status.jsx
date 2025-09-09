import React, { useState, useEffect } from 'react';
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
  TrendingUp,
  AlertCircle,
  Info,
  RefreshCw
} from 'lucide-react';

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock system status data - in a real app, this would come from an API
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
      responseTime: '45ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '67ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '89ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '156ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '234ms',
      lastCheck: '3 minutes ago'
    }
  ];

  const regions = [
    {
      name: 'North America (US East)',
      status: 'operational',
      latency: '45ms',
      uptime: '99.99%'
    },
    {
      name: 'North America (US West)',
      status: 'operational',
      latency: '67ms',
      uptime: '99.98%'
    },
    {
      name: 'Europe (Frankfurt)',
      status: 'operational',
      latency: '89ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific (Singapore)',
      status: 'operational',
      latency: '123ms',
      uptime: '99.96%'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Routine database maintenance and optimization was completed successfully.',
      updates: [
        {
          time: '2024-01-15 04:00 UTC',
          message: 'Maintenance completed successfully. All systems are operational.'
        },
        {
          time: '2024-01-15 02:00 UTC',
          message: 'Scheduled maintenance has begun. Expected downtime: 2 hours.'
        }
      ]
    },
    {
      id: 2,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 15:45 UTC',
      description: 'Increased API response times were detected and resolved.',
      updates: [
        {
          time: '2024-01-10 15:45 UTC',
          message: 'Issue resolved. API response times are back to normal.'
        },
        {
          time: '2024-01-10 14:45 UTC',
          message: 'Engineers are investigating the increased response times.'
        },
        {
          time: '2024-01-10 14:30 UTC',
          message: 'We are investigating reports of increased API response times.'
        }
      ]
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
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-gray-400" />;
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
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-900/30 border-green-500/30';
      case 'degraded':
        return 'bg-yellow-900/30 border-yellow-500/30';
      case 'outage':
        return 'bg-red-900/30 border-red-500/30';
      case 'maintenance':
        return 'bg-blue-900/30 border-blue-500/30';
      default:
        return 'bg-gray-900/30 border-gray-500/30';
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Status
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real-time status of Zion Tech Group's systems and services. We're committed to transparency and keeping you informed.
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${getStatusBgColor(systemStatus.overall)} border`}>
                {getStatusIcon(systemStatus.overall)}
                <span className={`ml-2 font-medium ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall === 'operational' ? 'All Systems Operational' : 'System Issues Detected'}
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{systemStatus.uptime}</div>
              <div className="text-zion-slate-light">Uptime (30 days)</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{systemStatus.responseTime}</div>
              <div className="text-zion-slate-light">Avg Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{systemStatus.lastIncident}</div>
              <div className="text-zion-slate-light">Last Incident</div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-zion-slate-light text-sm">
            Last updated: {lastUpdated.toLocaleString()}
          </div>
        </div>

        {/* Services Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-2 text-sm">
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
              </div>
            ))}
          </div>
        </div>

        {/* Regional Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Regional Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{region.name}</h3>
                  {getStatusIcon(region.status)}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Latency:</span>
                    <span className="text-white">{region.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Uptime:</span>
                    <span className="text-white">{region.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full ${getStatusBgColor(incident.status)} border`}>
                        {getStatusIcon(incident.status)}
                        <span className={`ml-1 ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </span>
                      <span className="text-zion-slate-light">
                        {incident.startTime} - {incident.endTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4">{incident.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-medium">Updates:</h4>
                  {incident.updates.map((update, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-zion-cyan font-medium">{update.time}</div>
                        <div className="text-zion-slate-light">{update.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
              <p className="text-zion-slate-light">Average: 45ms</p>
              <p className="text-zion-slate-light">P95: 89ms</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
              <p className="text-zion-slate-light">30 days: 99.98%</p>
              <p className="text-zion-slate-light">90 days: 99.97%</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
              <p className="text-zion-slate-light">4 regions</p>
              <p className="text-zion-slate-light">99.99% availability</p>
            </div>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get notified about system status updates, maintenance windows, and incident reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-zion-blue rounded-lg font-medium hover:scale-105 transition-transform">
              Subscribe to Updates
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors">
              RSS Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}