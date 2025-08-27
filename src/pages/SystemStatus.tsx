import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Cloud, Shield, Brain, Zap, Globe, BarChart3, RefreshCw, ExternalLink } from 'lucide-react';

export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock system status data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    uptime: '99.99%',
    lastIncident: '2025-01-15T10:30:00Z'
  };

  const services = [
    {
      name: 'Core Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: null,
      icon: <Server className="w-6 h-6" />
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '120ms',
      lastIncident: null,
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '25ms',
      lastIncident: null,
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '65ms',
      lastIncident: null,
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '30ms',
      lastIncident: null,
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '55ms',
      lastIncident: null,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'CDN & Edge',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastIncident: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Analytics Platform',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '85ms',
      lastIncident: null,
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      description: 'Planned maintenance to upgrade AI model infrastructure',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2025-01-15T02:00:00Z',
      endTime: '2025-01-15T04:00:00Z',
      affectedServices: ['AI Services'],
      updates: [
        {
          time: '2025-01-15T02:00:00Z',
          message: 'Maintenance started as scheduled'
        },
        {
          time: '2025-01-15T03:30:00Z',
          message: 'Infrastructure upgrade completed successfully'
        },
        {
          time: '2025-01-15T04:00:00Z',
          message: 'All services restored and operational'
        }
      ]
    },
    {
      id: 2,
      title: 'API Response Time Degradation',
      description: 'Increased API response times affecting some endpoints',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-10T14:20:00Z',
      endTime: '2025-01-10T16:45:00Z',
      affectedServices: ['API Gateway', 'Core Platform'],
      updates: [
        {
          time: '2025-01-10T14:20:00Z',
          message: 'Investigating increased API response times'
        },
        {
          time: '2025-01-10T15:30:00Z',
          message: 'Identified database connection pool issue'
        },
        {
          time: '2025-01-10T16:45:00Z',
          message: 'Issue resolved, response times normalized'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      case 'maintenance':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500';
      case 'major':
        return 'bg-orange-500';
      case 'minor':
        return 'bg-yellow-500';
      case 'maintenance':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(refreshStatus, 30000); // Auto-refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Activity className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real-time status of all Zion Tech Group services and infrastructure. We're committed to transparency and keeping you informed.
          </p>
        </div>
      </div>

      {/* Overall Status */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-slate border border-zion-slate-light rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                {getStatusIcon(systemStatus.overall)}
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{systemStatus.uptime}</div>
                  <div className="text-zion-slate-light">Uptime (30 days)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">{services.length}</div>
                  <div className="text-zion-slate-light">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">0</div>
                  <div className="text-zion-slate-light">Active Incidents</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-zion-slate-light">
                <Clock className="w-4 h-4" />
                <span>Last updated: {formatDate(lastUpdated.toISOString())}</span>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Status */}
      <div className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Service Status
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-zion-cyan">{service.icon}</div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(service.status)}
                      <span className="text-sm text-zion-slate-light">Operational</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-green-500 font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Response:</span>
                      <span className="text-zion-cyan font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Incident History */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Incident History
          </h2>
          <div className="max-w-4xl mx-auto">
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div
                    key={incident.id}
                    className="bg-zion-slate border border-zion-slate-light rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                        <p className="text-zion-slate-light mb-3">{incident.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                          {incident.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Started:</span>
                        <span className="text-white ml-2">{formatDate(incident.startTime)}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Resolved:</span>
                        <span className="text-white ml-2">{formatDate(incident.endTime)}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-zion-slate-light text-sm">Affected Services:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {incident.affectedServices.map((service, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Updates:</h4>
                      <div className="space-y-2">
                        {incident.updates.map((update, index) => (
                          <div key={index} className="flex items-start gap-3 text-sm">
                            <span className="text-zion-slate-light whitespace-nowrap">
                              {formatDate(update.time)}
                            </span>
                            <span className="text-zion-slate-light">-</span>
                            <span className="text-white">{update.message}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-zion-slate-light">
                  All systems are operating normally with no recent issues.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Subscribe to status updates and get notified about incidents and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}