<<<<<<< HEAD
import { logWarn } from '@/utils/productionLogger'
<<<<<<< HEAD
=======
import { logWarn } from '@/utils/productionLogger'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { SEO } from "@/components/SEO",
import { useState, useEffect } from "react",
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { logWarn } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { logWarn } from '@/utils/productionLogger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { logWarn } from '@/utils/productionLogger',
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
  description: string
  lastChecked: string
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };





;


;

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
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

        return <CheckCircle className="h-5 w-5 text-green-500" />
        return <Clock className="h-5 w-5 text-blue-500" />
      default:;
        return <AlertCircle className="h-5 w-5 text-gray-500" />};
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

  )
}

;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
],

export default function Status() {
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false),
  const [showFallback, setShowFallback] = useState(false),
  const [uptime, setUptime] = useState<number | null>(null),
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https: //status.ziontechgroup.com",

  useEffect(() => {
    // Try to load external status page, fallback after timeout
    const timeout = setTimeout(() => {
      if (!externalStatusLoaded) {
        setShowFallback(true)
import { SEO } from "@/components/SEO",;
import { useState, useEffect } from "react",;
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { logWarn } from '@/utils/productionLogger',;
interface ServiceStatus {;
  name: string,;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',;
  description: string,;
  lastChecked: string;
}

        return <CheckCircle className="h-5 w-5 text-green-500" />;
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:;
<<<<<<< HEAD
        return <AlertCircle className="h-5 w-5 text-gray-500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false)
}

  )
<<<<<<< HEAD
}

import { log_warn } from '@/utils / production_logger';
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  last_checked: string;
}
        return <CheckCircle className="h - 5 w - 5 text - green - 500" />;
        return <Clock className="h - 5 w - 5 text - blue - 500" />;
      default:;
        return <AlertCircle className="h - 5 w - 5 text - gray - 500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components / SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default /**
 * Status - Function description
 */
function Status() { const [last_updated, setLastUpdated] = useState (new Date ()); const [is_refreshing, setIsRefreshing] = useState (false);
}
  );
}
=======

import { log_warn } from '@/utils / production_logger';
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  last_checked: string;
}
        return <CheckCircle className="h - 5 w - 5 text - green - 500" />;
        return <Clock className="h - 5 w - 5 text - blue - 500" />;
      default:;
        return <AlertCircle className="h - 5 w - 5 text - gray - 500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components / SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default /**
 * Status - Function description
 */
function Status() { const [last_updated, setLastUpdated] = useState (new Date ()); const [is_refreshing, setIsRefreshing] = useState (false);
}
                  </CardContent>;
                </Card>;
              </div>;
              <div className="text-center">;
                <p className="text-zion-slate-light mb-4">;
                  For detailed incident history and real-time updates:;
                </p>;
                <Button;
                  variant="outline";
                  asChild;
                  className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10";
                >;
                  <a;
                    href={statusUrl} ;
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items-center gap-2";
                  >;
                    <ExternalLink className="h-4 w-4" />;
                    Visit Full Status Page;
                  </a>;
                </Button>;
              </div>;
            </>;
          )}
;
          <div className="mt-12 text-center">;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-white">Need Help?</CardTitle>;
              </CardHeader>;
              <CardContent className="space-y-4">;
                <p className="text-zion-slate-light">;
                  If you're experiencing issues not reflected here, please contact our support team.;
                </p>;
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                  <Button;
                    variant="outline";
                    asChild;
                    className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10";
                  >;
                    <Link href="/contact">Contact Support</Link>;
                  </Button>;
                  <Button;
                    variant="outline";
                    asChild;
                    className="text-zion-purple border-zion-purple hover:bg-zion-purple/10";
                  >;
                    <a href="https://twitter.com/ZionTechGroup" target="_blank" rel="noopener noreferrer">;
                      @ZionTechGroup;
                    </a>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


;
=======
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  },;
  const getStatusText = (status: ServiceStatus['status']) => {;
    switch (status) {;
      case 'operational':;
        return 'Operational',;
      case 'degraded':;
        return 'Degraded Performance',;
      case 'outage':;
        return 'Service Outage',;
      case 'maintenance':;
        return 'Scheduled Maintenance',;
      default:;
        return 'Unknown';
    }
  },;
  const getStatusColor = (status: ServiceStatus['status']) => {;
    switch (status) {;
      case 'operational':;
        return 'text-green-500',;
      case 'degraded':;
        return 'text-yellow-500',;
      case 'outage':;
        return 'text-red-500',;
      case 'maintenance':;
        return 'text-blue-500',;
      default:;
        return 'text-gray-500';
    }
  },

  )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
