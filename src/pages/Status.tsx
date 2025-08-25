<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

export default function Status() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemStatus = {
    overall: 'operational',
    uptime: '99.99%',
    lastIncident: 'None in the last 90 days'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '120ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '150ms',
      lastCheck: '3 minutes ago'
    }
  ];

  const regions = [
    {
      name: 'North America (US East)',
      status: 'operational',
      latency: '45ms',
      uptime: '99.99%'
    },
    {
      name: 'North America (US West)',
      status: 'operational',
      latency: '65ms',
      uptime: '99.98%'
    },
    {
      name: 'Europe (EU West)',
      status: 'operational',
      latency: '120ms',
      uptime: '99.97%'
    },
    {
      name: 'Asia Pacific (APAC)',
      status: 'operational',
      latency: '180ms',
      uptime: '99.96%'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
=======
import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';

const Status = () => {
  const systemStatus = {
    overall: 'operational',
    services: [
      { name: 'Website', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'API Services', status: 'operational', uptime: '99.8%', lastIncident: 'None' },
      { name: 'Database', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%', lastIncident: 'None' },
      { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
      { name: 'Security Services', status: 'operational', uptime: '100%', lastIncident: 'None' }
    ],
    incidents: []
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
<<<<<<< HEAD
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'outage':
        return '🔴';
      default:
        return '⚪';
=======
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
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
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
<<<<<<< HEAD
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            System Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time status of Zion Tech Group services and infrastructure.
          </p>
          
          {/* Current Time */}
          <div className="text-lg text-gray-400">
            Last updated: {currentTime.toLocaleString()}
=======
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-time status of Zion Tech Group services and infrastructure
            </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
          </div>
        </div>
      </div>

      {/* Overall Status */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🟢</div>
              <h2 className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</h2>
              <p className="text-gray-300">All services are running normally</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-400">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-gray-400">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">90+</div>
                <div className="text-gray-400">Days Since Last Incident</div>
              </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Overall System Status</h2>
            <div className="flex items-center space-x-3">
              {getStatusIcon(systemStatus.overall)}
              <span className="text-lg font-medium text-green-400">All Systems Operational</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-400">Uptime (30 days)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">0</div>
              <div className="text-gray-400">Active Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400">Monitoring</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
            </div>
          </div>
        </div>
      </div>

      {/* Service Status */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Status</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-cyan-400">{service.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(service.status)}`}>
                    {getStatusIcon(service.status)} {service.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-cyan-400">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Check:</span>
                    <span className="text-gray-300">{service.lastCheck}</span>
                  </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Service Status</h2>
          
          <div className="space-y-4">
            {systemStatus.services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border ${getStatusColor(service.status)}`}
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-medium text-white">{service.name}</h3>
                    <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Last incident: {service.lastIncident}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Regional Status */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-cyan-400">{region.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(region.status)}`}>
                    {getStatusIcon(region.status)} {region.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-cyan-400">{region.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-cyan-400">{region.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
=======
      {/* Infrastructure Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Infrastructure Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
              <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Cloud Servers</div>
              <div className="text-sm text-gray-400">Global Distribution</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl border border-green-500/20">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Databases</div>
              <div className="text-sm text-gray-400">High Availability</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">CDN</div>
              <div className="text-sm text-gray-400">Global Edge</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white">Security</div>
              <div className="text-sm text-gray-400">24/7 Protection</div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
          </div>
        </div>
      </div>

      {/* Incident History */}
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Incidents</h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">No Recent Incidents</h3>
            <p className="text-gray-300">
              We're proud to report that all systems have been running smoothly with no incidents in the last 90 days.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about service updates, maintenance windows, and incident reports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Recent Incidents</h2>
          
          {systemStatus.incidents.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Recent Incidents</h3>
              <p className="text-gray-400">All systems are running smoothly</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Incident items would go here */}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center text-gray-400">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="text-sm mt-2">
            For urgent issues, contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
              support@ziontechgroup.com
            </a>
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default Status;
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
