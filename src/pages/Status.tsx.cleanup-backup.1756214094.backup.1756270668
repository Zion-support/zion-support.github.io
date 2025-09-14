import React from 'react';
<<<<<<< HEAD

export default function Status() {
	return (
		<div className="min-h-screen bg-background text-foreground py-16">
			<div className="container mx-auto px-4 max-w-3xl">
				<h1 className="text-3xl font-bold mb-4">Status</h1>
				<p className="text-muted-foreground">All systems operational.</p>
			</div>
		</div>
	);
}
=======
import Link from 'next/link';
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
    }
  ];

  const incidents = [
    {
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
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'degraded':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'outage':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
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
    </div>
  );
};

export default Status;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
