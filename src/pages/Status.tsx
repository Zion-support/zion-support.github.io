interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
  description: string
  lastChecked: string
}

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
