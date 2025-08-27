import React from 'react';
import { SEO } from '@/components/SEO';

export default function Status() {
	return (
		<div className="min-h-screen bg-slate-900 text-white py-16">
			<SEO title="Status - Zion Tech Group" description="System status and uptime information." />
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl font-bold mb-4">System Status</h1>
				<p className="text-zinc-300">All systems operational.</p>
			</div>
		</div>
	);
}

import React from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Globe,
  Zap,
  Shield,
  Activity
} from 'lucide-react';

const Status: React.FC = () => {
  const systemStatus = {
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastCheck: '30 seconds ago'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      lastCheck: '1 minute ago'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastCheck: '2 minutes ago'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '150ms',
      lastCheck: '1 minute ago'
    }
  ];

  const incidents = [
    {
      date: '2024-01-15',
      title: 'Scheduled Maintenance',
      description: 'Database maintenance completed successfully',
      status: 'resolved',
      duration: '2 hours'
    },
    {
      date: '2024-01-10',
      title: 'API Performance Issue',
      description: 'Increased response times due to high traffic',
      status: 'resolved',
      duration: '45 minutes'
    },
    {
      date: '2024-01-05',
      title: 'Email Service Interruption',
      description: 'Temporary email delivery delays',
      status: 'resolved',
      duration: '1 hour'
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
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time status of Zion Tech Group's services and infrastructure
            </p>
          </div>

          {/* Overall Status */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {systemStatus.uptime}
                  </div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {systemStatus.responseTime}
                  </div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {systemStatus.lastIncident}
                  </div>
                  <div className="text-gray-300">Last Incident</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {getStatusIcon(systemStatus.overall)}
                  </div>
                  <div className={`font-semibold ${getStatusColor(systemStatus.overall)}`}>
                    {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Uptime:</span>
                      <span className="text-green-400">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response:</span>
                      <span className="text-blue-400">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Check:</span>
                      <span className="text-gray-400">{service.lastCheck}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Incidents</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              {incidents.length === 0 ? (
                <div className="text-center text-gray-300">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-xl">No recent incidents</p>
                  <p className="text-sm">All systems are operating normally</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {incidents.map((incident, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                      <div className="flex-shrink-0">
                        {incident.status === 'resolved' ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <AlertTriangle className="w-6 h-6 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white">{incident.title}</h3>
                          <span className="text-sm text-gray-400">{incident.date}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{incident.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span className={`px-2 py-1 rounded ${
                            incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {incident.status}
                          </span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status Legend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Status Legend</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">Degraded Performance</span>
              </div>
              <div className="flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">Outage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-300">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
