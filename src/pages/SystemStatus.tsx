import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export default function SystemStatus() {
  const [services, setServices] = useState([
    {
      name: 'AI Services',
      status: 'operational',
      uptime: 99.9,
      responseTime: 45,
      lastUpdated: new Date(),
      icon: '🤖',
      description: 'AI-powered business solutions'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: 99.8,
      responseTime: 32,
      lastUpdated: new Date(),
      icon: '☁️',
      description: 'Scalable cloud computing resources'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: 99.9,
      responseTime: 28,
      lastUpdated: new Date(),
      icon: '🗄️',
      description: 'High-performance data storage'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: 100.0,
      responseTime: 15,
      lastUpdated: new Date(),
      icon: '🔒',
      description: 'Advanced threat protection'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: 99.7,
      responseTime: 52,
      lastUpdated: new Date(),
      icon: '🌐',
      description: 'Unified API management'
    },
    {
      name: 'Monitoring System',
      status: 'operational',
      uptime: 99.9,
      responseTime: 8,
      lastUpdated: new Date(),
      icon: '📊',
      description: 'Real-time system monitoring'
    }
  ]);

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Services',
      description: 'Routine database maintenance to improve performance and security.',
      severity: 'low',
      status: 'resolved',
      startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
      endTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
      affectedServices: ['Database Services']
    }
  ]);

  const [overallStatus, setOverallStatus] = useState('operational');

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setServices(prevServices => 
        prevServices.map(service => ({
          ...service,
          lastUpdated: new Date(),
          responseTime: Math.floor(Math.random() * 50) + 10
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

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
        return 'text-green-400 bg-green-400/10 border-green-400/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'high':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    }
  };

  const getOverallStatusIcon = () => {
    switch (overallStatus) {
      case 'operational':
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-8 h-8 text-red-500" />;
      default:
        return <CheckCircle className="w-8 h-8 text-green-500" />;
    }
  };

  const getOverallStatusColor = () => {
    switch (overallStatus) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="System Status - Zion Tech Group"
        description="Real-time system status and service health monitoring for Zion Tech Group services."
        keywords="system status, service health, uptime, monitoring, Zion Tech Group"
        canonical="https://ziontechgroup.com/system-status"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Activity className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            System Status
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-time monitoring of our services and infrastructure
          </motion.p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-4 mb-6">
              {getOverallStatusIcon()}
              <div className="text-left">
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
                <p className={`text-lg font-medium ${getOverallStatusColor()}`}>
                  {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-lg">
              Our services are running smoothly with excellent performance and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Service Status
          </motion.h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-cyan-500/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-slate-400">{service.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {React.createElement(getStatusIcon(service.status).type, { 
                        className: "w-3 h-3 inline mr-1" 
                      })}
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Uptime</span>
                      <span className="text-white font-medium">{service.uptime}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Response Time</span>
                      <span className="text-white font-medium">{service.responseTime}ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Last Updated</span>
                      <span className="text-white font-medium text-sm">
                        {new Date(service.lastUpdated).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incidents */}
      {incidents.length > 0 && (
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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
                        <p className="text-slate-300 mb-3">{incident.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Start Time:</span>
                        <span className="text-white ml-2">
                          {new Date(incident.startTime).toLocaleString()}
                        </span>
                      </div>
                      {incident.endTime && (
                        <div>
                          <span className="text-slate-400">End Time:</span>
                          <span className="text-white ml-2">
                            {new Date(incident.endTime).toLocaleString()}
                          </span>
                        </div>
                      )}
                      <div className="md:col-span-2">
                        <span className="text-slate-400">Affected Services:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {incident.affectedServices.map(service => (
                            <span key={service} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
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
        </section>
      )}

      {/* Performance Metrics */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-slate-400">Average Uptime</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">35ms</div>
                <div className="text-slate-400">Average Response Time</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-slate-400">Active Services</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Need Support?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our support team is available 24/7 to help you with any issues or questions
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </a>
            <a 
              href="/documentation" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Documentation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}