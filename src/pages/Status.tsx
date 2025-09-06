
import { SEO } from "@/components/SEO",
import { useState, useEffect } from "react",
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button",
import Link from "next/link",

interface ServiceStatus {

  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
  description: string
  lastChecked: string
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
        return <AlertCircle className="h-5 w-5 text-gray-500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false)
}

  )
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
;

