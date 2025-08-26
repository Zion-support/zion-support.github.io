import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Zap } from 'lucide-react';

const StatusPage = () => {
  const systemStatus = {
    overall: 'operational',
    lastUpdated: '2025-01-26 21:45 UTC',
    uptime: '99.99%'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: 'None'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '120ms',
      lastIncident: 'None'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastIncident: 'None'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '80ms',
      lastIncident: 'None'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '200ms',
      lastIncident: 'None'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastIncident: 'None'
    }
  ];

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

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              System Status
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Real-time status of all Zion Tech Group services and systems. Monitor performance, 
              uptime, and any ongoing issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Overall System Status
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Current status of all our services and infrastructure.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20 text-green-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">All Systems Operational</h3>
              <p className="text-zion-slate-light text-lg mb-8">
                All services are running normally with no reported issues.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{systemStatus.uptime}</div>
                  <div className="text-zion-slate-light">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-purple mb-2">{systemStatus.lastUpdated}</div>
                  <div className="text-zion-slate-light">Last Updated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-blue mb-2">0</div>
                  <div className="text-zion-slate-light">Active Incidents</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Status */}
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Detailed status of individual services and components.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Status:</span>
                      <span className={`font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Last Incident:</span>
                      <span className="text-white font-medium">{service.lastIncident}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Real-time performance data and system metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-cyan mb-2">45ms</h3>
              <div className="text-zion-slate-light">Avg Response Time</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-purple mb-2">99.99%</h3>
              <div className="text-zion-slate-light">Database Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-blue mb-2">25+</h3>
              <div className="text-zion-slate-light">Global Locations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zion-cyan mb-2">1000+</h3>
              <div className="text-zion-slate-light">Active Users</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              If you're experiencing issues or have questions, our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Contact Support
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
