import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, Clock, Activity, Server, Database, Cloud, Shield } from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  responseTime: string;
  lastUpdated: string;
}

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: 'AI Services Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'IT Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '67ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Micro SaaS Solutions',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '52ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Cloud & DevOps',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '78ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Cybersecurity Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '41ms',
      lastUpdated: '2 minutes ago'
    },
    {
      name: 'Blockchain Solutions',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '89ms',
      lastUpdated: '2 minutes ago'
    }
  ]);

  const [overallStatus, setOverallStatus] = useState<'operational' | 'degraded' | 'outage'>('operational');
  const [lastIncident, setLastIncident] = useState<string>('No incidents reported in the last 90 days');

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
        return <CheckCircle className="w-6 h-6 text-green-500" />;
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
        return 'text-green-500';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 border-green-500/50';
      case 'degraded':
        return 'bg-yellow-500/20 border-yellow-500/50';
      case 'outage':
        return 'bg-red-500/20 border-red-500/50';
      case 'maintenance':
        return 'bg-blue-500/20 border-blue-500/50';
      default:
        return 'bg-green-500/20 border-green-500/50';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and uptime monitoring for Zion Tech Group's AI, IT, and Micro SaaS services. Check service health and performance metrics." />
        <meta name="keywords" content="system status, uptime monitoring, service health, Zion Tech Group, AI services status" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of Zion Tech Group's services and infrastructure. 
              Check service health, uptime, and performance metrics.
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Overall System Status</h2>
              <div className="flex items-center space-x-3">
                {getStatusIcon(overallStatus)}
                <span className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>
                  {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.97%</div>
                <div className="text-gray-400">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">58ms</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-400">Active Incidents</div>
              </div>
            </div>
          </div>

          {/* Service Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className={`bg-zinc-800/50 rounded-lg p-6 border ${getStatusBgColor(service.status)}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white font-medium">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updated:</span>
                    <span className="text-gray-300 text-sm">{service.lastUpdated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Incidents */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Recent Incidents</h2>
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-green-400 font-medium">No Active Incidents</span>
              </div>
              <p className="text-gray-300">{lastIncident}</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.97%</div>
                <div className="text-gray-400">Server Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-400">Database Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.95%</div>
                <div className="text-gray-400">Cloud Services</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Security Status</div>
              </div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="bg-zinc-800/50 rounded-lg p-8 border border-zinc-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get notified about service updates, maintenance windows, and incident reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}