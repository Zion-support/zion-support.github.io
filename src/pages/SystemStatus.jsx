import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';

export default function SystemStatus() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemComponents = [
    {
      id: 'api',
      name: 'API Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: null,
      icon: Server
    },
    {
      id: 'database',
      name: 'Database Systems',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastIncident: null,
      icon: Database
    },
    {
      id: 'cdn',
      name: 'CDN & Edge',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '28ms',
      lastIncident: null,
      icon: Globe
    },
    {
      id: 'security',
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '15ms',
      lastIncident: null,
      icon: Shield
    },
    {
      id: 'authentication',
      name: 'Authentication',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '32ms',
      lastIncident: null,
      icon: Shield
    },
    {
      id: 'file-storage',
      name: 'File Storage',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '67ms',
      lastIncident: null,
      icon: Database
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      component: 'CDN & Edge',
      status: 'resolved',
      description: 'Minor latency increase in Asia-Pacific region',
      startTime: '2024-12-15T10:30:00Z',
      endTime: '2024-12-15T11:15:00Z',
      duration: '45 minutes',
      impact: 'low'
    },
    {
      id: 2,
      component: 'File Storage',
      status: 'resolved',
      description: 'Scheduled maintenance for performance optimization',
      startTime: '2024-12-10T02:00:00Z',
      endTime: '2024-12-10T04:00:00Z',
      duration: '2 hours',
      impact: 'low'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-zion-slate-light';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-zion-slate-light" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'All Systems Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      default:
        return 'Unknown Status';
    }
  };

  const overallStatus = systemComponents.every(comp => comp.status === 'operational') 
    ? 'operational' 
    : 'degraded';

  return (
    <>
      <SEO 
        title="System Status - Zion Tech Group Service Health" 
        description="Real-time system status, uptime information, and incident reports for all Zion Tech Group services." 
        canonical="/status" 
        url="https://ziontechgroup.com/status"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services and infrastructure. 
              We're committed to transparency and keeping you informed.
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                {getStatusIcon(overallStatus)}
                <h2 className="text-3xl font-bold text-white">
                  {getStatusText(overallStatus)}
                </h2>
              </div>
              <p className="text-zion-slate-light text-lg mb-6">
                Last updated: {currentTime.toLocaleString()}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan">99.99%</div>
                  <div className="text-zion-slate-light text-sm">Overall Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan">0</div>
                  <div className="text-zion-slate-light text-sm">Active Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan">33ms</div>
                  <div className="text-zion-slate-light text-sm">Avg Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Service Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component) => (
                <div key={component.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                        <component.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {component.name}
                      </h3>
                    </div>
                    {getStatusIcon(component.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-zion-slate-light">Status:</span>
                      <span className={getStatusColor(component.status)}>
                        {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zion-slate-light">Uptime:</span>
                      <span className="text-white">{component.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zion-slate-light">Response:</span>
                      <span className="text-white">{component.responseTime}</span>
                    </div>
                  </div>

                  {component.lastIncident && (
                    <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="text-yellow-400 text-sm font-medium">Last Incident</div>
                      <div className="text-zion-slate-light text-xs">
                        {new Date(component.lastIncident).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Recent Incidents
            </h2>
            {recentIncidents.length > 0 ? (
              <div className="space-y-6">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">
                          {incident.component}
                        </h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                          {incident.status}
                        </span>
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        incident.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        incident.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {incident.impact} impact
                      </span>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4">
                      {incident.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-light">Start Time:</span>
                        <div className="text-white">
                          {new Date(incident.startTime).toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">End Time:</span>
                        <div className="text-white">
                          {new Date(incident.endTime).toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Duration:</span>
                        <div className="text-white">{incident.duration}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-zion-slate-light">
                  All systems are operating normally with no reported issues.
                </p>
              </div>
            )}
          </section>

          {/* Status History */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Status History
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan">99.99%</div>
                  <div className="text-zion-slate-light text-sm">Past 30 Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan">99.98%</div>
                  <div className="text-zion-slate-light text-sm">Past 90 Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan">99.97%</div>
                  <div className="text-zion-slate-light text-sm">Past 6 Months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan">99.96%</div>
                  <div className="text-zion-slate-light text-sm">Past Year</div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Informed
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Subscribe to status updates and get notified about any service issues 
                or maintenance windows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Subscribe to Updates
                </button>
                <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  View Status Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}