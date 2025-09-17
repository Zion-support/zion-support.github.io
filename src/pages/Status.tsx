import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw,
  Server,
  Cloud,
  Database,
  Shield,
  Zap,
  Globe,
  Activity,
  TrendingUp,
  TrendingDown,
  Wifi,
  WifiOff,
  AlertTriangle,
  Info,
  ExternalLink,
  Calendar,
  Clock as ClockIcon
} from 'lucide-react';

const Status: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock status data - in a real app, this would come from an API
  const [services] = useState([
    {
      id: 'main-website',
      name: 'Main Website',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      lastIncident: null,
      icon: Globe
    },
    {
      id: 'api-gateway',
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastIncident: null,
      icon: Server
    },
    {
      id: 'database',
      name: 'Database Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastIncident: null,
      icon: Database
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '250ms',
      lastIncident: null,
      icon: Brain
    },
    {
      id: 'marketplace',
      name: 'Marketplace Platform',
      status: 'operational',
      uptime: '99.89%',
      responseTime: '180ms',
      lastIncident: null,
      icon: ShoppingCart
    },
    {
      id: 'payment-processing',
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '95ms',
      lastIncident: null,
      icon: CreditCard
    },
    {
      id: 'authentication',
      name: 'Authentication System',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '25ms',
      lastIncident: null,
      icon: Shield
    },
    {
      id: 'cdn',
      name: 'Content Delivery Network',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '35ms',
      lastIncident: null,
      icon: Cloud
    }
  ]);

  const [incidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      description: 'Routine database maintenance to improve performance and optimize queries.',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      affectedServices: ['database', 'api-gateway'],
      updates: [
        {
          time: '2024-01-15T04:15:00Z',
          message: 'Maintenance completed successfully. All services are operational.'
        }
      ]
    },
    {
      id: 2,
      title: 'Increased API Response Times',
      status: 'resolved',
      severity: 'medium',
      description: 'Temporary increase in API response times due to high traffic load.',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      affectedServices: ['api-gateway', 'ai-services'],
      updates: [
        {
          time: '2024-01-10T15:00:00Z',
          message: 'Investigating increased response times. Scaling up resources.'
        },
        {
          time: '2024-01-10T16:45:00Z',
          message: 'Issue resolved. Response times back to normal levels.'
        }
      ]
    }
  ]);

  const [metrics] = useState({
    overallUptime: '99.96%',
    averageResponseTime: '120ms',
    totalRequests: '2.4M',
    activeUsers: '15.2K'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      case 'maintenance':
        return <Clock className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-blue-400 bg-blue-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'high':
        return 'text-red-400 bg-red-400/20';
      case 'critical':
        return 'text-red-600 bg-red-600/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan text-white py-20">
        <div className="container-responsive text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            System Status
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-cyan/90 max-w-3xl mx-auto"
          >
            Real-time status of Zion Tech Group services and systems
          </motion.p>
        </div>
      </div>

      <div className="container-responsive py-16">
        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Overall System Status</h2>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-4 py-2 bg-zion-cyan text-futuristic rounded-lg hover:bg-zion-cyan/90 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">All Systems Operational</h3>
                <p className="text-zion-cyan/80">No active incidents</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{metrics.overallUptime}</h3>
                <p className="text-zion-cyan/80">Uptime (30 days)</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{metrics.averageResponseTime}</h3>
                <p className="text-zion-cyan/80">Avg Response Time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{metrics.activeUsers}</h3>
                <p className="text-zion-cyan/80">Active Users</p>
              </div>
            </div>
            
            <div className="mt-6 text-center text-zion-cyan/60 text-sm">
              Last updated: {lastUpdated.toLocaleString()}
            </div>
          </div>
        </motion.div>

        {/* Service Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        {getStatusIcon(service.status)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-zion-cyan/60">Uptime</p>
                    <p className="text-white font-medium">{service.uptime}</p>
                  </div>
                  <div>
                    <p className="text-zion-cyan/60">Response Time</p>
                    <p className="text-white font-medium">{service.responseTime}</p>
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
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.status === 'resolved' ? 'text-green-400 bg-green-400/20' : 'text-blue-400 bg-blue-400/20'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-zion-cyan/80 mb-3">{incident.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-zion-cyan/60">Started</p>
                        <p className="text-white">{formatDate(incident.startTime)}</p>
                      </div>
                      <div>
                        <p className="text-zion-cyan/60">Resolved</p>
                        <p className="text-white">{incident.endTime ? formatDate(incident.endTime) : 'Ongoing'}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-zion-cyan/60 text-sm mb-2">Affected Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((serviceId) => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <span key={serviceId} className="px-2 py-1 bg-zion-blue/20 text-zion-blue text-xs rounded">
                              {service?.name || serviceId}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Updates */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Updates</h4>
                  <div className="space-y-2">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex items-start gap-3 text-sm">
                        <ClockIcon className="w-4 h-4 text-zion-cyan/60 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-zion-cyan/60">{formatDate(update.time)}</p>
                          <p className="text-white">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-zion-cyan/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our status page notifications to get real-time updates about service status, 
              maintenance windows, and incident reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                <Info className="w-5 h-5" />
                Contact Support
              </a>
              <a
                href="/help"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-futuristic transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Help Center
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Status;
