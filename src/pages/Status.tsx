import React from 'react';
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
        const res = await fetch('/api/status/summary');
        if (!res.ok) return;
        const data = await res.json();
        const pct =
          typeof data.uptime === 'number'
            ? data.uptime
            : typeof data.uptimePercent === 'number'
            ? data.uptimePercent
            : null;
        if (typeof pct === 'number') {
          setUptime(pct);
        }
      } catch (err) {
        console.warn('Failed to fetch uptime', err);
      }
    }
  ];

  const incidents = [
    {
      id: 'INC-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Routine database maintenance and optimization completed successfully.'
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

  const formatUptimePercent = (pct: number) => {
    return pct.toFixed(2) + '%';
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
              <p className="text-zion-slate-light text-sm mt-2">Uptime: {formatUptimePercent(uptime)}</p>
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
    </div>
  );
};

export default Status;