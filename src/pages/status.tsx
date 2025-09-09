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
  Zap,
  Shield,
  Users,
  Settings,
  RefreshCw,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastUpdated: string;
  uptime: string;
}

const services: ServiceStatus[] = [
  {
    id: 'api',
    name: 'API Services',
    status: 'operational',
    description: 'All API endpoints are functioning normally',
    lastUpdated: '2 minutes ago',
    uptime: '99.99%'
  },
  {
    id: 'website',
    name: 'Website',
    status: 'operational',
    description: 'Website is accessible and performing well',
    lastUpdated: '1 minute ago',
    uptime: '99.98%'
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    status: 'operational',
    description: 'Marketplace services are running smoothly',
    lastUpdated: '3 minutes ago',
    uptime: '99.97%'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    status: 'operational',
    description: 'AI and machine learning services are operational',
    lastUpdated: '2 minutes ago',
    uptime: '99.96%'
  },
  {
    id: 'database',
    name: 'Database',
    status: 'operational',
    description: 'Database systems are healthy and responsive',
    lastUpdated: '1 minute ago',
    uptime: '99.99%'
  },
  {
    id: 'authentication',
    name: 'Authentication',
    status: 'operational',
    description: 'User authentication and authorization working normally',
    lastUpdated: '2 minutes ago',
    uptime: '99.98%'
  }
];

const incidents = [
  {
    id: 'incident-001',
    title: 'Scheduled Maintenance - Database Optimization',
    status: 'resolved',
    description: 'Database performance optimization completed successfully. All services are now running at optimal performance.',
    startTime: '2024-01-15T02:00:00Z',
    endTime: '2024-01-15T04:00:00Z',
    severity: 'low'
  },
  {
    id: 'incident-002',
    title: 'API Response Time Degradation',
    status: 'investigating',
    description: 'We are investigating increased API response times in certain regions. Services remain functional but may be slower than usual.',
    startTime: '2024-01-14T18:30:00Z',
    endTime: null,
    severity: 'medium'
  }
];

const getStatusIcon = (status: string) => {
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
      return <AlertCircle className="w-6 h-6 text-gray-500" />;
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
    case 'maintenance':
      return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    default:
      return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'operational':
      return 'Operational';
    case 'degraded':
      return 'Degraded Performance';
    case 'outage':
      return 'Major Outage';
    case 'maintenance':
      return 'Under Maintenance';
    default:
      return 'Unknown';
  }
};

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <>
      <SEO 
        title="System Status | Zion Tech Group"
        description="Check the current status of Zion Tech Group's services and systems. Real-time updates on performance, outages, and maintenance."
        canonical="https://ziontechgroup.com/status"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Status</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Real-time status of all Zion Tech Group services and systems. 
                Stay informed about performance, outages, and scheduled maintenance.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>{isRefreshing ? 'Refreshing...' : 'Refresh Status'}</span>
                </button>
                <span className="text-zion-slate-light text-sm">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overall Status Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Overall System Status
              </h2>
              <p className="text-zion-slate-light text-lg">
                Current status across all our services and infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`bg-zion-slate-dark/50 border rounded-2xl p-8 text-center ${getStatusColor(overallStatus)}`}
            >
              <div className="flex justify-center mb-4">
                {getStatusIcon(overallStatus)}
              </div>
              <h3 className="text-2xl font-bold mb-2">{getStatusText(overallStatus)}</h3>
              <p className="text-zion-slate-light">
                {overallStatus === 'operational' 
                  ? 'All systems are operating normally.' 
                  : overallStatus === 'degraded'
                  ? 'Some services are experiencing performance issues.'
                  : 'Major service disruption detected.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Status Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Status
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Detailed status of individual services and components.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Status:</span>
                      <span className={`font-medium ${getStatusColor(service.status).split(' ')[0]}`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-zion-cyan font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Updated:</span>
                      <span className="text-zion-slate-light">{service.lastUpdated}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Recent Incidents
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
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
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' 
                        ? 'text-green-500 bg-green-500/10 border border-green-500/20'
                        : 'text-yellow-500 bg-yellow-500/10 border border-yellow-500/20'
                    }`}>
                      {incident.status === 'resolved' ? 'Resolved' : 'Investigating'}
                    </span>
                  </div>
                  
                  <p className="text-zion-slate-light mb-4">{incident.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Started:</span>
                      <div className="text-white font-medium">
                        {new Date(incident.startTime).toLocaleString()}
                      </div>
                    </div>
                    {incident.endTime && (
                      <div>
                        <span className="text-zion-slate-light">Resolved:</span>
                        <div className="text-white font-medium">
                          {new Date(incident.endTime).toLocaleString()}
                        </div>
                      </div>
                    )}
                    <div>
                      <span className="text-zion-slate-light">Severity:</span>
                      <div className={`font-medium ${
                        incident.severity === 'high' ? 'text-red-500' :
                        incident.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                      }`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Performance Metrics
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Key performance indicators and system health metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <TrendingUp className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.98%</div>
                <div className="text-zion-slate-light">Overall Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">45ms</div>
                <div className="text-zion-slate-light">Average Response Time</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-zion-slate-light">Active Users</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Server className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-zion-slate-light">Infrastructure Health</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                If you're experiencing issues not reflected in our status page, our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/help" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Support
                </a>
                <a 
                  href="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}