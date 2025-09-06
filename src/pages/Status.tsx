import { logWarn } from '@/utils/productionLogger';
interface ServiceStatus {
  name: string,
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',
  description: string,
  lastChecked: string
}

        return <CheckCircle className="h-5 w-5 text-green-500" />;
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />}
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import { ; CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink;  } from 'lucide-react'; export default function Status() {; const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false);
}
  );
}
;