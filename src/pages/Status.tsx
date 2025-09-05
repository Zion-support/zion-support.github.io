<<<<<<< HEAD
<<<<<<< HEAD
import { SEO } from "@/components/SEO",
import { useState, useEffect } from "react",
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { logWarn } from '@/utils/productionLogger',
=======
import { SEO } from &quot;@/components/SEO&quot;;
import { useState, useEffect } from &quot;react&quot;;
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import Link from &quot;next/link&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { logWarn } from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  lastChecked: string
}

const FALLBACK_SERVICES: ServiceStatus[] = [
  {
    name: &quot;Marketplace API&quot;,
    status: &quot;operational&quot;,
    description: &quot;Product listings and search functionality&quot;,
    lastChecked: new Date().toISOString()
  },
  {
    name: &quot;Authentication Service&quot;, 
    status: &quot;operational&quot;,
    description: &quot;User login and registration&quot;,
    lastChecked: new Date().toISOString()
  },
  {
    name: &quot;Payment Processing&quot;,
    status: &quot;operational&quot;, 
    description: &quot;Checkout and payment handling&quot;,
    lastChecked: new Date().toISOString()
  },
  {
    name: &quot;Talent Directory&quot;,
    status: &quot;operational&quot;,
    description: &quot;AI talent profiles and matching&quot;,
    lastChecked: new Date().toISOString()
  }
],

export default function Status() {
<<<<<<< HEAD
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false),
  const [showFallback, setShowFallback] = useState(false),
  const [uptime, setUptime] = useState<number | null>(null),
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https: //status.ziontechgroup.com",
=======
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [uptime, setUptime] = useState<number | null>(null);
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || &quot;https://status.ziontechgroup.com&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    // Try to load external status page, _fallback after timeout
    const _timeout = setTimeout__(() => {
      if (!externalStatusLoaded) {
<<<<<<< HEAD
        setShowFallback(true)
      }
    }, 5000), // 5 second timeout
=======
        setShowFallback(true);}
    }, 5000); // 5 second timeout
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearTimeout(timeout)
  }, [externalStatusLoaded]),

  useEffect__(() => {_async function fetchUptime() {
      try {
<<<<<<< HEAD
        const res = await fetch('/api/health'),
        if (!res.ok) return,
        const data = await res.json(),
        if (typeof data.uptime === 'number') {
          setUptime(data.uptime)
        }
      } catch (err) {
        logWarn('Failed to fetch uptime', { data: err })
=======
        const _res = await fetch('/api/health');
        if (!res.ok) return;
        const _data = await res.json();
        if (typeof data.uptime === 'number') {
          setUptime(data.uptime);}
      } catch (err) {_logWarn('Failed to fetch uptime', _{ data: err});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
    fetchUptime()
  }, []),

  const _getStatusIcon = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
<<<<<<< HEAD
        return <CheckCircle className="h-5 w-5 text-green-500" />,
      case 'degraded':
        return <Clock className="h-5 w-5 text-yellow-500" />,
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />,
      case 'maintenance':
        return <Clock className="h-5 w-5 text-blue-500" />,
      default:
<<<<<<< HEAD
        return <AlertCircle className="h-5 w-5 text-gray-500" />
=======
        return <CheckCircle className=&quot;h-5 w-5 text-green-500&quot; />;
      case 'degraded':
        return <Clock className=&quot;h-5 w-5 text-yellow-500&quot; />;
      case 'outage':
        return <AlertCircle className=&quot;h-5 w-5 text-red-500&quot; />;
      case 'maintenance':
        return <Clock className=&quot;h-5 w-5 text-blue-500&quot; />;
      default:
        return <AlertCircle className=&quot;h-5 w-5 text-gray-500&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return <AlertCircle className="h-5 w-5 text-gray-500" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusText = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
        return 'Operational',
      case 'degraded':
        return 'Degraded Performance',
      case 'outage':
        return 'Service Outage',
      case 'maintenance':
        return 'Scheduled Maintenance',
      default:
<<<<<<< HEAD
        return 'Unknown'
    }
  },
=======
        return 'Unknown';}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusColor = (_status: ServiceStatus['status']) => {_switch (status) {
      case 'operational':
        return 'text-green-500',
      case 'degraded':
        return 'text-yellow-500',
      case 'outage':
        return 'text-red-500',
      case 'maintenance':
        return 'text-blue-500',
      default:
<<<<<<< HEAD
        return 'text-gray-500'
    }
  },

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400),
    const hours = Math.floor((seconds % 86400) / 3600),
    const minutes = Math.floor((seconds % 3600) / 60),
    const parts: string[] = [],
    if (days > 0) parts.push(`${days}d`),
    if (hours > 0) parts.push(`${hours}h`),
    parts.push(`${minutes}m`),
    return parts.join(' ')
  },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <SEO
        title=&quot;API Status&quot;
        description=&quot;View real-time service availability and uptime statistics.&quot;
        canonical=&quot;https://app.ziontechgroup.com/status&quot;
      />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-8&quot;>
            <h1 className=&quot;text-4xl font-bold text-white mb-4&quot;>System Status</h1>
            <p className=&quot;text-zion-slate-light text-lg&quot;>
              Real-time monitoring of Zion platform services
            </p>
<<<<<<< HEAD
            {uptime !== null && (
              <p className=&quot;text-zion-slate-light text-sm mt-2&quot;>Uptime: {formatUptime(uptime)}</p>
            )}
          </div>

          {!showFallback && (
            <div className=&quot;mb-8&quot;>
              <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
=======
            {_uptime !== null && (
              <p className="text-zion-slate-light text-sm mt-2">Uptime: {formatUptime(uptime)}</p>
            )}
          </div>

          {_!showFallback && (_<div className="mb-8">
              <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <CardHeader>
                  <CardTitle className=&quot;text-white flex items-center gap-2&quot;>
                    <ExternalLink className=&quot;h-5 w-5&quot; />
                    Live Status Dashboard
                  </CardTitle>
                  <CardDescription>
                    Loading detailed status information...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    src={statusUrl}
<<<<<<< HEAD
                    title=&quot;Zion Status Page&quot;
                    className=&quot;w-full border-0 rounded&quot;
                    height=&quot;600&quot;
                    onLoad={() => setExternalStatusLoaded(true)}
                    onError={() => setShowFallback(true)}
=======
                    title="Zion Status Page"
                    className="w-full border-0 rounded"
                    height="600"
                    onLoad={_() => setExternalStatusLoaded(true)}
                    onError={_() => setShowFallback(true)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <div className=&quot;mt-4 text-center&quot;>
                    <Button
<<<<<<< HEAD
                      variant=&quot;outline&quot;
                      onClick={() => setShowFallback(true)}
                      className=&quot;text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10&quot;
=======
                      variant="outline"
                      onClick={_() => setShowFallback(true)}
                      className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      View Simplified Status
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

<<<<<<< HEAD
          {showFallback && (
            <>
              <div className=&quot;mb-8&quot;>
                <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
=======
          {_showFallback && (_<>
              <div className="mb-8">
                <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <CardHeader>
                    <CardTitle className=&quot;text-white&quot;>Service Status Overview</CardTitle>
                    <CardDescription>
                      Current status of core platform services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className=&quot;space-y-4&quot;>
                    {FALLBACK_SERVICES.map((service) => (
<<<<<<< HEAD
                      <div key={service.name} className=&quot;flex items-center justify-between p-4 bg-zion-blue rounded-lg&quot;>
                        <div className=&quot;flex items-center gap-3&quot;>
                          {getStatusIcon(service.status)}
                          <div>
                            <h3 className=&quot;font-medium text-white&quot;>{service.name}</h3>
                            <p className=&quot;text-sm text-zion-slate-light&quot;>{service.description}</p>
                          </div>
                        </div>
                        <div className=&quot;text-right&quot;>
                          <div className={`font-medium ${getStatusColor(service.status)}`}>
                            {getStatusText(service.status)}
                          </div>
                          <div className=&quot;text-xs text-zion-slate-light&quot;>
                            Updated: {new Date(service.lastChecked).toLocaleTimeString()}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className=&quot;text-center&quot;>
                <p className=&quot;text-zion-slate-light mb-4&quot;>
                  For detailed incident history and real-time updates:
                </p>
                <Button
                  variant=&quot;outline&quot;
                  asChild
                  className=&quot;text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10&quot;
                >
                  <a 
<<<<<<< HEAD
                    href={statusUrl} 
                    target=&quot;_blank&quot; 
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center gap-2&quot;
=======
                    href={_statusUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <ExternalLink className=&quot;h-4 w-4&quot; />
                    Visit Full Status Page
                  </Link>
                </Button>
              </div>
            </>
          )}

          <div className=&quot;mt-12 text-center&quot;>
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-white&quot;>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className=&quot;space-y-4&quot;>
                <p className=&quot;text-zion-slate-light&quot;>
                  If you're experiencing issues not reflected here, please contact our support team.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <Button
                    variant=&quot;outline&quot;
                    asChild
                    className=&quot;text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10&quot;
                  >
                    <Link href=&quot;/contact&quot;>Contact Support</Link>
                  </Button>
                  <Button
                    variant=&quot;outline&quot;
                    asChild
                    className=&quot;text-zion-purple border-zion-purple hover:bg-zion-purple/10&quot;
                  >
                    <a href=&quot;https://twitter.com/ZionTechGroup&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                      @ZionTechGroup
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
