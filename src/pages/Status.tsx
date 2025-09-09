import React from 'react';
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
  );
};

export default Status;
