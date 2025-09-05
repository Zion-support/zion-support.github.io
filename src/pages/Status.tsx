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

  useEffect(() => {
    // Try to load external status page, fallback after timeout
    const timeout = setTimeout(() => {
      if (!externalStatusLoaded) {
        setShowFallback(true)
      }
    }, 5000), // 5 second timeout

    return () => clearTimeout(timeout)
  }, [externalStatusLoaded]),

  useEffect(() => {
    async function fetchUptime() {
      try {
        const res = await fetch('/api/health'),
        if (!res.ok) return,
        const data = await res.json(),
        if (typeof data.uptime === 'number') {
          setUptime(data.uptime)
        }
      } catch (err) {
        logWarn('Failed to fetch uptime', { data: err })
      }
    }
    fetchUptime()
  }, []),

  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
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

  const getStatusText = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'Operational',
      case 'degraded':
        return 'Degraded Performance',
      case 'outage':
        return 'Service Outage',
      case 'maintenance':
        return 'Scheduled Maintenance',
      default:
        return 'Unknown'
    }
  },

  const getStatusColor = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'text-green-500',
      case 'degraded':
        return 'text-yellow-500',
      case 'outage':
        return 'text-red-500',
      case 'maintenance':
        return 'text-blue-500',
      default:
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
            {uptime !== null && (
              <p className=&quot;text-zion-slate-light text-sm mt-2&quot;>Uptime: {formatUptime(uptime)}</p>
            )}
          </div>

          {!showFallback && (
            <div className=&quot;mb-8&quot;>
              <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
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
                    title=&quot;Zion Status Page&quot;
                    className=&quot;w-full border-0 rounded&quot;
                    height=&quot;600&quot;
                    onLoad={() => setExternalStatusLoaded(true)}
                    onError={() => setShowFallback(true)}
                  />
                  <div className=&quot;mt-4 text-center&quot;>
                    <Button
                      variant=&quot;outline&quot;
                      onClick={() => setShowFallback(true)}
                      className=&quot;text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10&quot;
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
              <div className=&quot;mb-8&quot;>
                <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                  <CardHeader>
                    <CardTitle className=&quot;text-white&quot;>Service Status Overview</CardTitle>
                    <CardDescription>
                      Current status of core platform services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className=&quot;space-y-4&quot;>
                    {FALLBACK_SERVICES.map((service) => (
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
                    href={statusUrl} 
                    target=&quot;_blank&quot; 
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center gap-2&quot;
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
