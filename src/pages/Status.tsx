import Link from "next/link";


interface ServiceStatus {_name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastChecked: string;}

const FALLBACK_SERVICES: ServiceStatus[] = [
  {_name: "Marketplace API", _status: "operational", _description: "Product listings and search functionality", _lastChecked: new Date().toISOString()},
  {_name: "Authentication Service", _status: "operational", _description: "User login and registration", _lastChecked: new Date().toISOString()},
  {_name: "Payment Processing", _status: "operational", _description: "Checkout and payment handling", _lastChecked: new Date().toISOString()},
  {_name: "Talent Directory", _status: "operational", _description: "AI talent profiles and matching", _lastChecked: new Date().toISOString()}
];

export default function Status() {_const [externalStatusLoaded, _setExternalStatusLoaded] = useState(false);
  const [showFallback, _setShowFallback] = useState(false);
  const [uptime, _setUptime] = useState<number | null>(null);
  const _statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https://status.ziontechgroup.com";

  useEffect__(() => {
    // Try to load external status page, _fallback after timeout
    const _timeout = setTimeout__(() => {
      if (!externalStatusLoaded) {
        setShowFallback(true);}
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, [externalStatusLoaded]);

  useEffect__(() => {_async function fetchUptime() {
      try {
        const _res = await fetch('/api/health');
        if (!res.ok) return;
        const _data = await res.json();
        if (typeof data.uptime === 'number') {
          setUptime(data.uptime);}
      } catch (err) {_logWarn('Failed to fetch uptime', _{ data: err});
      }
    }
    fetchUptime();
  }, []);

  const _getStatusIcon = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;}
  };

  const _getStatusText = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      case 'maintenance':
        return 'Scheduled Maintenance';
      default:
        return 'Unknown';}
  };

  const _getStatusColor = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      case 'maintenance':
        return 'text-blue-500';
      default:
        return 'text-gray-500';}
  };

  const _formatUptime = (_seconds: number) => {_const _days = Math.floor(seconds / 86400);
    const _hours = Math.floor((seconds % 86400) / 3600);
    const _minutes = Math.floor((seconds % 3600) / 60);
    const parts: string[] = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${_hours}h`);
    parts.push(`${_minutes}m`);
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
            {_uptime !== null && (
              <p className="text-zion-slate-light text-sm mt-2">Uptime: {formatUptime(uptime)}</p>
            )}
          </div>

          {_!showFallback && (_<div className="mb-8">
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
                    onLoad={_() => setExternalStatusLoaded(true)}
                    onError={_() => setShowFallback(true)}
                  />
                  <div className="mt-4 text-center">
                    <Button
                      variant="outline"
                      onClick={_() => setShowFallback(true)}
                      className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10"
                    >
                      View Simplified Status
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {_showFallback && (_<>
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
                          {_getStatusIcon(service.status)}
                          <div>
                            <h3 className="font-medium text-white">{_service.name}</h3>
                            <p className="text-sm text-zion-slate-light">{_service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={_`font-medium ${getStatusColor(service.status)}`}>
                            {_getStatusText(service.status)}
                          </div>
                          <div className="text-xs text-zion-slate-light">
                            Updated: {_new Date(service.lastChecked).toLocaleTimeString()}
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
                    href={_statusUrl} 
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
}
