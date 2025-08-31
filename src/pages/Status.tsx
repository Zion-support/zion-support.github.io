import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  RefreshCw,
  ExternalLink,
  Calendar,
  AlertCircle,
  Info
} from 'lucide-react';

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date());
    }, 1000);
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      icon: Globe,
      description: 'Main website and user portal'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      icon: Server,
      description: 'REST API and GraphQL endpoints'
    },
    {
      name: 'AI Platform',
      status: 'operational',
      uptime: '99.90%',
      responseTime: '200ms',
      icon: Zap,
      description: 'Machine learning and AI services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      icon: Database,
      description: 'Primary and backup databases'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '80ms',
      icon: Shield,
      description: 'User authentication and security'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '95ms',
      icon: Server,
      description: 'Document and media storage'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Platform',
      status: 'resolved',
      severity: 'low',
      description: 'Routine maintenance to improve AI model performance and add new features.',
      startTime: '2025-01-20T02:00:00Z',
      endTime: '2025-01-20T04:00:00Z',
      duration: '2 hours',
      updates: [
        {
          time: '2025-01-20T02:00:00Z',
          message: 'Maintenance started as scheduled'
        },
        {
          time: '2025-01-20T03:30:00Z',
          message: 'AI model updates completed successfully'
        },
        {
          time: '2025-01-20T04:00:00Z',
          message: 'Maintenance completed. All services operational.'
        }
      ]
    },
    {
      id: 2,
      title: 'Increased API Response Times',
      status: 'resolved',
      severity: 'medium',
      description: 'Temporary increase in API response times due to high traffic load.',
      startTime: '2025-01-18T14:30:00Z',
      endTime: '2025-01-18T16:45:00Z',
      duration: '2 hours 15 minutes',
      updates: [
        {
          time: '2025-01-18T14:30:00Z',
          message: 'Investigating increased response times'
        },
        {
          time: '2025-01-18T15:00:00Z',
          message: 'Identified high traffic load, scaling resources'
        },
        {
          time: '2025-01-18T16:45:00Z',
          message: 'Issue resolved. Response times back to normal.'
        }
      ]
    },
    {
      id: 3,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'high',
      description: 'Intermittent database connection issues affecting some users.',
      startTime: '2025-01-15T09:15:00Z',
      endTime: '2025-01-15T11:30:00Z',
      duration: '2 hours 15 minutes',
      updates: [
        {
          time: '2025-01-15T09:15:00Z',
          message: 'Investigating database connectivity issues'
        },
        {
          time: '2025-01-15T10:00:00Z',
          message: 'Identified network configuration issue'
        },
        {
          time: '2025-01-15T11:30:00Z',
          message: 'Issue resolved. All database connections stable.'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
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
      default:
        return Clock;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-100 text-blue-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Real-time status of Zion Tech Group services and infrastructure. 
              Stay informed about any issues or maintenance activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${getStatusColor(overallStatus)}`}>
                {React.createElement(getStatusIcon(overallStatus), { className: 'w-5 h-5' })}
                <span className="font-medium capitalize">
                  {overallStatus === 'operational' ? 'All Systems Operational' : 
                   overallStatus === 'degraded' ? 'Some Systems Degraded' : 'System Outage'}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service Status
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current status of all Zion Tech Group services and infrastructure components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                      <service.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {React.createElement(getStatusIcon(service.status), { className: 'w-4 h-4' })}
                    <span className="capitalize">{service.status}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Uptime (30 days)</span>
                    <span className="font-medium text-gray-900">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Response Time</span>
                    <span className="font-medium text-gray-900">{service.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators and system health metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Overall Uptime', value: '99.96%', icon: Activity, color: 'text-green-600' },
              { label: 'Average Response Time', value: '92ms', icon: Clock, color: 'text-blue-600' },
              { label: 'Active Users', value: '15,432', icon: Users, color: 'text-purple-600' },
              { label: 'API Requests/sec', value: '2,847', icon: BarChart3, color: 'text-orange-600' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Information about recent service disruptions, maintenance, and resolutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${
                        incident.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {incident.status === 'resolved' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {incident.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{incident.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                      <span>Duration: {incident.duration}</span>
                      {incident.endTime && (
                        <span>Resolved: {new Date(incident.endTime).toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {incident.updates && incident.updates.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Updates</h4>
                    <div className="space-y-2">
                      {incident.updates.map((update, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-gray-500">
                              {new Date(update.time).toLocaleString()}
                            </span>
                            <span className="text-gray-700 ml-2">{update.message}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and get notified about incidents, 
              maintenance, and service changes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-green-200 text-sm mt-4">
              We'll only send you important status updates. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}