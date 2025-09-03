import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Globe, 
  Zap,
  RefreshCw,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react';

const Status: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Main website and user interface'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      description: 'REST API and GraphQL endpoints'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      description: 'Primary database services'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '95ms',
      description: 'User authentication and authorization'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      description: 'File upload and storage services'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '150ms',
      description: 'Email delivery and notifications'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.5%',
      responseTime: '800ms',
      description: 'AI processing and machine learning'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '50ms',
      description: 'Content delivery network'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-25T02:00:00Z',
      endTime: '2025-01-25T04:00:00Z',
      description: 'Planned maintenance to optimize database performance and add new indexes.',
      impact: 'Some API responses may have been slower during maintenance window.'
    },
    {
      id: 2,
      title: 'Email Delivery Delay',
      status: 'resolved',
      severity: 'minor',
      startTime: '2025-01-23T14:30:00Z',
      endTime: '2025-01-23T16:45:00Z',
      description: 'Temporary delay in email delivery due to third-party service issues.',
      impact: 'Email notifications were delayed by up to 2 hours.'
    }
  ];

  const metrics = [
    {
      name: 'Total Uptime (30 days)',
      value: '99.8%',
      change: '+0.1%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      name: 'Average Response Time',
      value: '180ms',
      change: '-15ms',
      trend: 'up',
      icon: Zap
    },
    {
      name: 'Active Users',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      name: 'Security Score',
      value: 'A+',
      change: 'Maintained',
      trend: 'stable',
      icon: Shield
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-blue-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'outage':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      default:
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'major':
        return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'minor':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default:
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time status of Zion Tech Group services, uptime monitoring, and incident reports."
        keywords="status, uptime, monitoring, incidents, system health, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Status
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Real-time monitoring of our services and infrastructure. All systems operational.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">All Systems Operational</span>
              </div>
              <div className="text-zion-slate-light">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Key Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                  <p className="text-zion-slate-light text-sm mb-2">{metric.name}</p>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                    metric.trend === 'up' ? 'text-green-400 bg-green-400/20' : 
                    metric.trend === 'down' ? 'text-red-400 bg-red-400/20' : 
                    'text-blue-400 bg-blue-400/20'
                  }`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Status */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Service Status</h2>
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-slate-dark/70 border-b border-zion-cyan/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Uptime</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr key={index} className="border-b border-zion-slate-light/10 hover:bg-zion-slate-dark/30 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-zion-slate-light text-sm">{service.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`flex items-center px-3 py-1 rounded-full border ${getStatusColor(service.status)}`}>
                            {getStatusIcon(service.status)}
                            <span className="ml-2 text-sm font-medium capitalize">{service.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-white font-medium">{service.uptime}</td>
                        <td className="px-6 py-4 text-white font-medium">{service.responseTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div
                    key={incident.id}
                    className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`flex items-center px-3 py-1 rounded-full border mr-4 ${getSeverityColor(incident.severity)}`}>
                          <span className="text-sm font-medium capitalize">{incident.severity}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                      </div>
                      <div className={`flex items-center px-3 py-1 rounded-full border ${getStatusColor(incident.status)}`}>
                        {getStatusIcon(incident.status)}
                        <span className="ml-2 text-sm font-medium capitalize">{incident.status}</span>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4">{incident.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Impact: </span>
                        <span className="text-white">{incident.impact}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Duration: </span>
                        <span className="text-white">
                          {new Date(incident.startTime).toLocaleString()} - {new Date(incident.endTime).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-zion-slate-light">All systems are running smoothly with no reported issues.</p>
              </div>
            )}
          </div>

          {/* Status History */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Status History (30 Days)</h2>
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">99.8% Uptime</h3>
                <p className="text-zion-slate-light">
                  Our services have maintained excellent uptime over the past 30 days with only minor scheduled maintenance windows.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Status Updates</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Stay informed about service status and incidents. Subscribe to our status page notifications 
              or follow us on social media for real-time updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 inline-flex items-center justify-center"
              >
                Report an Issue
              </a>
              <a
                href="mailto:status@ziontechgroup.com"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Status Alerts
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;