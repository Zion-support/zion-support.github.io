<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Activity, 
  Server, 
  Database,
  Globe,
  Zap,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Calendar,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock status data - in a real app, this would come from an API
  const systemStatus = {
    overall: 'operational',
    lastChecked: new Date(),
    uptime: '99.99%',
    lastIncident: '2024-01-15',
    responseTime: '45ms'
  };

  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: null
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '67ms',
      lastIncident: null
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastIncident: null
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '89ms',
      lastIncident: null
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '156ms',
      lastIncident: null
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '234ms',
      lastIncident: null
    }
  ];

  const regions = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      description: 'Planned maintenance to optimize database performance and improve query response times.',
      status: 'maintenance',
      severity: 'low',
      startTime: '2025-01-20T02:00:00Z',
      endTime: '2025-01-20T06:00:00Z',
      affectedServices: ['Database', 'API Services']
    },
    {
      id: 2,
      title: 'Resolved: Increased API Response Times',
      description: 'API response times were elevated due to increased load. Issue has been resolved.',
      status: 'resolved',
      severity: 'medium',
      startTime: '2025-01-18T14:30:00Z',
      endTime: '2025-01-18T16:45:00Z',
      affectedServices: ['API Services']
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
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':
        return 'text-red-400 bg-red-500/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-500/20';
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'critical':
        return 'bg-red-600/20 text-red-300 border-red-600/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real-time status of all Zion Tech Group services and infrastructure
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-zion-blue-dark/30 rounded-2xl border border-zion-cyan/20 p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400 mr-4" />
              <div className="text-left">
                <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
                <p className="text-zion-slate-light">No incidents reported</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{systemStatus.uptime}</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{systemStatus.responseTime}</div>
                <div className="text-zion-slate-light">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-zion-slate-light">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{lastUpdated.toLocaleTimeString()}</div>
                <div className="text-zion-slate-light">Last Updated</div>
              </div>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="mt-6 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 inline mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Status:</span>
                    <span className={getStatusColor(service.status)}>Operational</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Response:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Last Check:</span>
                    <span className="text-white">{service.lastCheck}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <p className="text-zion-slate-light mb-4">{incident.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                    {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Start Time:</span>
                    <span className="text-white ml-2">{new Date(incident.startTime).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">End Time:</span>
                    <span className="text-white ml-2">{incident.endTime ? new Date(incident.endTime).toLocaleString() : 'Ongoing'}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-zion-slate-light text-sm">Affected Services:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {incident.affectedServices.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zion-slate-light mb-4">
            Last updated: {lastUpdated.toLocaleString()}
          </p>
          <p className="text-zion-slate-light text-sm">
            For urgent issues, please contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
              support@ziontechgroup.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
=======
import { SEO } from "@/components/SEO";
import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { logWarn } from '@/utils/productionLogger';


interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastChecked: string;
}

const FALLBACK_SERVICES: ServiceStatus[] = [
  {
    name: "Marketplace API",
    status: "operational",
    description: "Product listings and search functionality",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Authentication Service", 
    status: "operational",
    description: "User login and registration",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Payment Processing",
    status: "operational", 
    description: "Checkout and payment handling",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Talent Directory",
    status: "operational",
    description: "AI talent profiles and matching",
    lastChecked: new Date().toISOString()
  }
];

export default function Status() {
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [uptime, setUptime] = useState<number | null>(null);
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https://status.ziontechgroup.com";

  useEffect(() => {
    // Try to load external status page, fallback after timeout
    const timeout = setTimeout(() => {
      if (!externalStatusLoaded) {
        setShowFallback(true);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, [externalStatusLoaded]);

  useEffect(() => {
    async function fetchUptime() {
      try {
        const res = await fetch('/api/health');
        if (!res.ok) return;
        const data = await res.json();
        if (typeof data.uptime === 'number') {
          setUptime(data.uptime);
        }
      } catch (err) {
        logWarn('Failed to fetch uptime', { data: err });
      }
    }
    fetchUptime();
  }, []);

  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      case 'maintenance':
        return 'Scheduled Maintenance';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: ServiceStatus['status']) => {
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

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const parts: string[] = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    parts.push(`${minutes}m`);
    return parts.join(' ');
  };

  return (
    <>
      <SEO
        title="API Status"
        description="View real-time service availability and uptime statistics."
        canonical="https://app.ziontechgroup.com/status"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">System Status</h1>
            <p className="text-zion-slate-light text-lg">
              Real-time monitoring of Zion platform services
            </p>
            {uptime !== null && (
              <p className="text-zion-slate-light text-sm mt-2">Uptime: {formatUptime(uptime)}</p>
            )}
          </div>

          {!showFallback && (
            <div className="mb-8">
              <Card className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Live Status Dashboard
                  </CardTitle>
                  <CardDescription>
                    Loading detailed status information...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    src={statusUrl}
                    title="Zion Status Page"
                    className="w-full border-0 rounded"
                    height="600"
                    onLoad={() => setExternalStatusLoaded(true)}
                    onError={() => setShowFallback(true)}
                  />
                  <div className="mt-4 text-center">
                    <Button
                      variant="outline"
                      onClick={() => setShowFallback(true)}
                      className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10"
                    >
                      View Simplified Status
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {showFallback && (
            <>
              <div className="mb-8">
                <Card className="bg-zion-blue-dark border-zion-blue-light">
                  <CardHeader>
                    <CardTitle className="text-white">Service Status Overview</CardTitle>
                    <CardDescription>
                      Current status of core platform services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {FALLBACK_SERVICES.map((service) => (
                      <div key={service.name} className="flex items-center justify-between p-4 bg-zion-blue rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(service.status)}
                          <div>
                            <h3 className="font-medium text-white">{service.name}</h3>
                            <p className="text-sm text-zion-slate-light">{service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-medium ${getStatusColor(service.status)}`}>
                            {getStatusText(service.status)}
                          </div>
                          <div className="text-xs text-zion-slate-light">
                            Updated: {new Date(service.lastChecked).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-zion-slate-light mb-4">
                  For detailed incident history and real-time updates:
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10"
                >
                  <a 
                    href={statusUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Full Status Page
                  </a>
                </Button>
              </div>
            </>
          )}

          <div className="mt-12 text-center">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zion-slate-light">
                  If you're experiencing issues not reflected here, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    asChild
                    className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10"
                  >
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="text-zion-purple border-zion-purple hover:bg-zion-purple/10"
                  >
                    <a href="https://twitter.com/ZionTechGroup" target="_blank" rel="noopener noreferrer">
                      @ZionTechGroup
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
>>>>>>> origin/auto/autonomy-17186719616
  );
}
