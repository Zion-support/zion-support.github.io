import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  RefreshCw,
  Server,
  Database,
  Network,
  Globe,
  Zap,
  Shield,
  Cloud,
  ArrowRight
} from 'lucide-react';

const StatusPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const systemStatus = {
    overall: 'operational',
    lastIncident: '2024-01-15',
    uptime: '99.99%'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      description: 'Main website and user portal',
      icon: Globe,
      responseTime: '120ms',
      uptime: '99.99%'
    },
    {
      name: 'API Services',
      status: 'operational',
      description: 'REST API and GraphQL endpoints',
      icon: Server,
      responseTime: '45ms',
      uptime: '99.98%'
    },
    {
      name: 'Database',
      status: 'operational',
      description: 'Primary and backup databases',
      icon: Database,
      responseTime: '12ms',
      uptime: '99.99%'
    },
    {
      name: 'Authentication',
      status: 'operational',
      description: 'User authentication and authorization',
      icon: Shield,
      responseTime: '85ms',
      uptime: '99.97%'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      description: 'AWS, Azure, and Google Cloud services',
      icon: Cloud,
      responseTime: '200ms',
      uptime: '99.96%'
    },
    {
      name: 'AI Services',
      status: 'operational',
      description: 'Machine learning and AI processing',
      icon: Zap,
      responseTime: '350ms',
      uptime: '99.95%'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Routine database maintenance and optimization completed successfully.'
    },
    {
      id: 2,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 16:45 UTC',
      description: 'Increased API response times were detected and resolved through load balancing optimization.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'outage':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
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

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Activity className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">System Status</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System
              <span className="text-gradient"> Status</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services and systems. 
              We're committed to transparency and keeping you informed.
            </p>
            
            {/* Overall Status */}
            <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300 disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</div>
                  <div className="text-zion-slate-light">Status</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{systemStatus.uptime}</div>
                  <div className="text-zion-slate-light">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{systemStatus.lastIncident}</div>
                  <div className="text-zion-slate-light">Last Incident</div>
                </div>
              </div>
              
              <div className="text-center text-sm text-zion-slate-light mt-4">
                Last updated: {lastUpdated.toLocaleString()}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Status Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Status
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Current status of all our core services and infrastructure components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status).split(' ')[0]}`} />
                  </div>
                  
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Response Time:</span>
                      <span className="text-zion-cyan font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-zion-cyan font-medium">{service.uptime}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incidents Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Information about recent service disruptions and maintenance activities.
            </p>
          </motion.div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                      <span className="text-zion-slate-light">Severity: {incident.severity}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6">{incident.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Start Time:</span>
                    <span className="text-white ml-2">{incident.startTime}</span>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">End Time:</span>
                    <span className="text-white ml-2">{incident.endTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Subscribe to our status updates and get notified about any service changes 
              or incidents in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                View Status History
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
