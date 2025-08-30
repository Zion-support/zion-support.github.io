import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  Zap
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
      description: 'AI-powered solutions and machine learning services'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: 99.8,
      responseTime: 32,
      lastUpdated: new Date(),
      icon: '☁️',
      description: 'Cloud computing and infrastructure services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: 99.9,
      responseTime: 28,
      lastUpdated: new Date(),
      icon: '🗄️',
      description: 'Database management and optimization'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: 99.7,
      responseTime: 15,
      lastUpdated: new Date(),
      icon: '🔌',
      description: 'API management and gateway services'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: 100.0,
      responseTime: 22,
      lastUpdated: new Date(),
      icon: '🔒',
      description: 'Cybersecurity and compliance services'
    },
    {
      name: 'Edge Computing',
      status: 'operational',
      uptime: 99.6,
      responseTime: 38,
      lastUpdated: new Date(),
      icon: '⚡',
      description: 'Edge computing and IoT platform'
    }
  ]);

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Services',
      description: 'Routine maintenance to improve performance and security',
      severity: 'low',
      status: 'resolved',
      startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
      endTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
      affectedServices: ['Database Services']
    },
    {
      id: 2,
      title: 'Performance Degradation - API Gateway',
      description: 'Increased response times detected and resolved',
      severity: 'medium',
      status: 'resolved',
      startTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
      endTime: new Date(Date.now() - 5 * 60 * 60 * 1000),
      affectedServices: ['API Gateway']
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
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
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
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
      case 'critical':
        return 'text-red-600 bg-red-600/10 border-red-600/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length;

  return (
    <>
      <SEO
        title="System Status | Zion Tech Group - Service Health"
        description="Real-time system status and service health monitoring for Zion Tech Group. Check the operational status of our AI services, cloud infrastructure, and more."
        keywords="system status, service health, uptime, monitoring, Zion Tech Group, AI services status"
        canonical="https://ziontechgroup.com/system-status"
      />

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Status</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-time monitoring of our services and infrastructure. 
                We're committed to maintaining 99.9%+ uptime for all our services.
              </p>
              
              {/* Overall Status */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-2">
                  {getStatusIcon(overallStatus)}
                  <span className="text-white font-semibold">Overall Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallStatus)}`}>
                    {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">Uptime:</span>
                  <span className="text-cyan-400 font-bold">{overallUptime.toFixed(1)}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Status
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current operational status of all our core services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {React.createElement(getStatusIcon(service.status).type, { className: "w-3 h-3 inline mr-1" })}
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
            </div>
          </div>
        </section>

        {/* Incidents */}
        {incidents.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Recent Incidents
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Information about recent service disruptions and maintenance
                </p>
              </motion.div>

              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50"
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
            </div>
          </section>
        )}

        {/* Status History */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Status History
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Historical uptime and performance data for our services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { period: 'Last 24 Hours', uptime: 99.9, color: 'from-green-500 to-emerald-600' },
                { period: 'Last 7 Days', uptime: 99.8, color: 'from-blue-500 to-cyan-600' },
                { period: 'Last 30 Days', uptime: 99.7, color: 'from-purple-500 to-pink-600' },
                { period: 'Last 90 Days', uptime: 99.6, color: 'from-orange-500 to-red-600' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{metric.uptime}%</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.period}</h3>
                  <p className="text-gray-400 text-sm">Uptime</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you're experiencing issues with our services, our support team is here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}