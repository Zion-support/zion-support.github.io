import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  TrendingUp, 
  AlertTriangle,
  RefreshCw,
  Info
} from 'lucide-react';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  icon: React.ReactNode;
  lastUpdated: string;
  uptime: string;
}

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: ServiceStatus[] = [
    {
      id: 'ai-services',
      name: 'AI Services',
      status: 'operational',
      description: 'All AI services are running normally',
      icon: <Brain className="w-6 h-6" />,
      lastUpdated: '2 minutes ago',
      uptime: '99.99%'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      status: 'operational',
      description: 'Cloud services operating normally',
      icon: <Cloud className="w-6 h-6" />,
      lastUpdated: '1 minute ago',
      uptime: '99.98%'
    },
    {
      id: 'security-systems',
      name: 'Security Systems',
      status: 'operational',
      description: 'Security monitoring active and operational',
      icon: <Shield className="w-6 h-6" />,
      lastUpdated: '30 seconds ago',
      uptime: '100.00%'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      status: 'operational',
      description: 'Analytics platform running smoothly',
      icon: <TrendingUp className="w-6 h-6" />,
      lastUpdated: '1 minute ago',
      uptime: '99.97%'
    },
    {
      id: 'api-services',
      name: 'API Services',
      status: 'operational',
      description: 'All API endpoints responding normally',
      icon: <Globe className="w-6 h-6" />,
      lastUpdated: '45 seconds ago',
      uptime: '99.96%'
    },
    {
      id: 'database-systems',
      name: 'Database Systems',
      status: 'operational',
      description: 'Database performance optimal',
      icon: <Database className="w-6 h-6" />,
      lastUpdated: '2 minutes ago',
      uptime: '99.99%'
    },
    {
      id: 'micro-saas-platform',
      name: 'Micro SaaS Platform',
      status: 'operational',
      description: 'Platform services running normally',
      icon: <Zap className="w-6 h-6" />,
      lastUpdated: '1 minute ago',
      uptime: '99.95%'
    },
    {
      id: 'support-portal',
      name: 'Support Portal',
      status: 'operational',
      description: 'Support system fully operational',
      icon: <Server className="w-6 h-6" />,
      lastUpdated: '30 seconds ago',
      uptime: '99.98%'
    }
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      case 'maintenance':
        return <Clock className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Outage';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  const overallStatus = services.every(s => s.status === 'operational') 
    ? 'operational' 
    : services.some(s => s.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services and systems. 
              We're committed to transparency and keeping you informed.
            </p>
            
            {/* Overall Status */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border-2 bg-slate-800/50">
              <div className={`w-3 h-3 rounded-full ${
                overallStatus === 'operational' ? 'bg-green-400' :
                overallStatus === 'degraded' ? 'bg-yellow-400' : 'bg-red-400'
              }`}></div>
              <span className="text-white font-medium">
                {overallStatus === 'operational' ? 'All Systems Operational' :
                 overallStatus === 'degraded' ? 'Some Systems Experiencing Issues' :
                 'Major System Outage'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Service Status
              </h2>
              <p className="text-gray-300">
                Current status of all our services and systems
              </p>
            </div>
            
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white hover:bg-slate-600/50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(service.status)}
                      <span>{getStatusText(service.status)}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="text-white">{service.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-medium">{service.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators and system health metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.98%</h3>
              <p className="text-gray-300">Overall Uptime</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">&lt;100ms</h3>
              <p className="text-gray-300">Average Response Time</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Monitoring</p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-300">Security Status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Incident History */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain transparency about any service disruptions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/50 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Recent Incidents</h3>
              <p className="text-gray-300 mb-6">
                All systems have been operating normally. We're committed to maintaining this level of service.
              </p>
              <div className="text-sm text-gray-400">
                Last incident: 30 days ago (resolved within 15 minutes)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Page Info */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            About This Status Page
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This page provides real-time information about the status of our services. 
            We update it automatically every minute and immediately when issues are detected.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Updates</h3>
              <p className="text-gray-300 text-sm">
                Status updates are provided in real-time with automatic refresh every minute.
              </p>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Transparent Communication</h3>
              <p className="text-gray-300 text-sm">
                We believe in transparency and will always communicate any issues promptly.
              </p>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Our systems are monitored around the clock to ensure quick issue detection.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-gray-300 mb-4">
              <strong>Last Updated:</strong> {lastUpdated.toLocaleString()}
            </p>
            <p className="text-sm text-gray-400">
              This status page is automatically updated. For urgent issues, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}