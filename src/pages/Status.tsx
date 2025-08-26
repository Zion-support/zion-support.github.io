import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Server, 
  Database, 
  Network, 
  Shield,
  Activity,
  BarChart3,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const Status: React.FC = () => {
  const currentTime = new Date().toLocaleString();
  
  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastChecked: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastChecked: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '15ms',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '85ms',
      lastChecked: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '200ms',
      lastChecked: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '150ms',
      lastChecked: '1 minute ago'
=======
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
  Wifi,
  Zap
} from 'lucide-react';

const Status: React.FC = () => {
  const services = [
    {
      name: "Website",
      status: "operational",
      uptime: "99.99%",
      responseTime: "45ms",
      lastIncident: "2024-12-15",
      description: "Main website and customer portal"
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.95%",
      responseTime: "120ms",
      lastIncident: "2024-12-10",
      description: "REST API and GraphQL endpoints"
    },
    {
      name: "Cloud Infrastructure",
      status: "operational",
      uptime: "99.98%",
      responseTime: "85ms",
      lastIncident: "2024-12-08",
      description: "AWS, Azure, and GCP services"
    },
    {
      name: "AI Services",
      status: "operational",
      uptime: "99.92%",
      responseTime: "200ms",
      lastIncident: "2024-12-12",
      description: "Machine learning and AI platforms"
    },
    {
      name: "Database Systems",
      status: "operational",
      uptime: "99.99%",
      responseTime: "25ms",
      lastIncident: "2024-11-28",
      description: "Primary and backup databases"
    },
    {
      name: "Security Services",
      status: "operational",
      uptime: "99.99%",
      responseTime: "50ms",
      lastIncident: "2024-12-01",
      description: "Firewall, DDoS protection, and monitoring"
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    }
  ];

  const incidents = [
    {
<<<<<<< HEAD
      id: 'INC-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Routine database maintenance and optimization completed successfully.'
=======
      id: 1,
      title: "Scheduled Maintenance - API Services",
      status: "resolved",
      severity: "low",
      description: "Routine maintenance window for API infrastructure updates",
      startTime: "2024-12-10T02:00:00Z",
      endTime: "2024-12-10T04:00:00Z",
      affectedServices: ["API Services"]
    },
    {
      id: 2,
      title: "Database Performance Degradation",
      status: "resolved",
      severity: "medium",
      description: "Temporary performance issues due to increased load",
      startTime: "2024-12-08T14:30:00Z",
      endTime: "2024-12-08T16:45:00Z",
      affectedServices: ["Database Systems", "API Services"]
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
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
<<<<<<< HEAD
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
=======
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
<<<<<<< HEAD
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
=======
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'degraded':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'outage':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/30';
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
<<<<<<< HEAD
        return 'bg-blue-100 text-blue-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'critical':
        return 'bg-red-200 text-red-900';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Activity className="w-4 h-4 mr-2" />
              System Status
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              System Status
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incident reports.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>Last updated: {currentTime}</span>
              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">All Systems Operational</h3>
              <p className="text-gray-300">All services are running normally</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">99.98% Uptime</h3>
              <p className="text-gray-300">Last 30 days</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">0 Active Incidents</h3>
              <p className="text-gray-300">No ongoing issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Service Status
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Current status of all core services and infrastructure components.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className={getStatusColor(service.status)}>Operational</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400">{service.uptime}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-cyan-400">{service.responseTime}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last Checked:</span>
                    <span className="text-gray-300">{service.lastChecked}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              History of recent incidents and maintenance activities.
            </p>
          </div>
          
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className="text-gray-400">ID: {incident.id}</span>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm font-medium">Resolved</span>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Start Time:</span>
                    <span className="text-white ml-2">{incident.startTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">End Time:</span>
                    <span className="text-white ml-2">{incident.endTime}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {incidents.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-gray-300">All systems have been running smoothly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key performance indicators and system health metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Server Health</h3>
              <p className="text-2xl font-bold text-green-400">100%</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Database</h3>
              <p className="text-2xl font-bold text-blue-400">99.98%</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Network className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Network</h3>
              <p className="text-2xl font-bold text-cyan-400">99.95%</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-2xl font-bold text-purple-400">100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're experiencing issues or have questions, our support team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Support
            </Link>
            
            <Link
              to="/help"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
            >
              Help Center
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of AI-powered technology solutions with reliable infrastructure and 99.98% uptime.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
                <li><Link to="/services/cybersecurity" className="hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services/quantum-technology" className="hover:text-cyan-400 transition-colors">Quantum Technology</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/help" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link to="/docs" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Status</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="text-green-400">All Systems Operational</p>
                <p>Uptime: 99.98%</p>
                <p>Last Updated: {currentTime}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved. | System Status Page</p>
          </div>
        </div>
      </footer>
=======
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';
  const overallUptime = services.reduce((acc, service) => {
    const uptime = parseFloat(service.uptime.replace('%', ''));
    return acc + uptime;
  }, 0) / services.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time status of Zion Tech Group's services and infrastructure. We're committed to transparency and keeping you informed.
            </p>
          </div>

          {/* Overall Status */}
          <div className="mb-16">
            <div className={`${getStatusColor(overallStatus)} backdrop-blur-lg rounded-xl p-8 border text-center`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                {getStatusIcon(overallStatus)}
                <h2 className="text-3xl font-bold">
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Service Degradation'}
                </h2>
              </div>
              <p className="text-lg mb-6">
                {overallStatus === 'operational' 
                  ? 'All services are running normally with excellent performance.'
                  : 'Some services are experiencing issues. Our team is actively working on resolution.'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{overallUptime.toFixed(2)}%</div>
                  <div className="text-sm text-gray-300">Overall Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{services.length}</div>
                  <div className="text-sm text-gray-300">Services Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Status Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.name} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-green-400">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-blue-400">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Incident:</span>
                      <span className="text-gray-300">{formatDate(service.lastIncident)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Incidents</h2>
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {incident.status === 'resolved' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        )}
                        <h3 className="text-xl font-semibold">{incident.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          incident.status === 'resolved' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">Start Time:</span>
                        <div className="text-white">{formatDate(incident.startTime)}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">End Time:</span>
                        <div className="text-white">{formatDate(incident.endTime)}</div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Affected Services:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {incident.affectedServices.map((service) => (
                          <span key={service} className="px-2 py-1 bg-white/10 text-blue-400 text-xs rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl text-gray-300">No recent incidents to report.</p>
                <p className="text-gray-400">All systems are running smoothly.</p>
              </div>
            )}
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <Activity className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.97%</div>
                <div className="text-gray-400">Average Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">87ms</div>
                <div className="text-gray-400">Average Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-gray-400">Services Monitored</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-gray-400">Active Issues</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you're experiencing issues that aren't reflected on this page, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    </div>
  );
};

export default Status;