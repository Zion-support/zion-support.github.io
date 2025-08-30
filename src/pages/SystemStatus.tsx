import React from 'react';
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

  const getStatusColor = (status: string)  => {
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
        return 'text-gray-500'}
  };

  const getStatusIcon = (status: string)  => {
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
        return <Clock className="w-5 h-5 text-gray-500" />}
  };

  const getSeverityColor = (severity: string)  => {
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
        return 'bg-gray-500'}
  };

  const formatDate = (dateString: string)  => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })};

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false)};

  useEffect(() => {
    const interval = setInterval(refreshStatus, 30000); // Auto-refresh every 30 seconds
    return () => clearInterval(interval)}, []);

  const overallStatus = services.every(s => s.status === 'operational') 
    ? 'operational' 
    : services.some(s => s.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and performance metrics for Zion Tech Group services. Monitor uptime, response times, and incident reports."
      />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium mb-6 border border-slate-700/50"
          >
            <Activity className="w-4 h-4 mr-2 text-cyan-400" />
            System Status
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            System Status
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real-time monitoring of our services, infrastructure, and performance metrics.
          </motion.p>
        </div>
      </div>

      {/* Overall Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Overall Status */}
            <div className="text-center">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${getStatusColor(overallStatus)}`}>
                {React.createElement(getStatusIcon(overallStatus), { className: "w-4 h-4 mr-2" })}
                {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Overall Status</h3>
              <p className="text-gray-400">All systems operational</p>
            </div>

            {/* Uptime */}
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{overallUptime.toFixed(2)}%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Uptime</h3>
              <p className="text-gray-400">30-day average</p>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Last Updated</div>
              <div className="text-lg font-semibold text-white">
                {lastUpdated.toLocaleTimeString()}
              </div>
              <p className="text-gray-400">Updates every 30s</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Status */}
      <div className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Service Status
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index)  => (
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
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                  {React.createElement(getStatusIcon(service.status), { className: "w-3 h-3 inline mr-1" })}
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Uptime</span>
                  <span className="text-white font-medium">{service.uptime}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Response Time</span>
                  <span className="text-white font-medium">{service.responseTime}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Last Updated</span>
                  <span className="text-white font-medium text-sm">
                    {new Date(service.lastUpdated).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Incidents */}
      {incidents.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'resolved' 
                            ? 'text-green-400 bg-green-400/10 border border-green-400/20'
                            : incident.status === 'monitoring'
                            ? 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
                            : 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20'
                        }`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 mb-3">{incident.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Start Time:</span>
                      <span className="text-white ml-2">
                        {new Date(incident.startTime).toLocaleString()}
                      </span>
                    </div>
                    {incident.endTime && (
                      <div>
                        <span className="text-gray-400">End Time:</span>
                        <span className="text-white ml-2">
                          {new Date(incident.endTime).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <span className="text-gray-400">Affected Services:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {incident.affectedServices.map(service => (
                          <span key={service} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Performance Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">99.9%</div>
              <p className="text-gray-400 text-sm">Average Uptime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">150ms</div>
              <p className="text-gray-400 text-sm">Avg Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">6</div>
              <p className="text-gray-400 text-sm">Active Services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">0</div>
              <p className="text-gray-400 text-sm">Active Incidents</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Experiencing issues? Our support team is available 24/7 to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}