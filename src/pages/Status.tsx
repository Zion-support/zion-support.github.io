import { SEO } from "@/components/SEO",
import { useState, useEffect } from "react",
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { logWarn } from '@/utils/productionLogger';
interface ServiceStatus {
<<<<<<< HEAD
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastChecked: string
}

const FALLBACK_SERVICES: ServiceStatus[] = [
  {
    name: "Marketplace API";
    status: "operational";
    description: "Product listings and search functionality";
    lastChecked: new Date().toISOString()
  },
  {
    name: "Authentication Service";
    status: "operational";
    description: "User login and registration";
    lastChecked: new Date().toISOString()
  },
  {
    name: "Payment Processing";
    status: "operational";
    description: "Checkout and payment handling";
    lastChecked: new Date().toISOString()
  },
  {
    name: "Talent Directory";
    status: "operational";
    description: "AI talent profiles and matching";
    lastChecked: new Date().toISOString()
  }
],

export default function Status() {
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [uptime, setUptime] = useState<number | null>(null),
  const statusUrl = null;
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
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
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
=======
  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
  description: string
  lastChecked: string
}
        return <CheckCircle className="h-5 w-5 text-green-500" />
        return <Clock className="h-5 w-5 text-blue-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false)
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}