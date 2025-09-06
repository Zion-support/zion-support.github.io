<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
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
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity } from 'lucide-react'

origin/cursor/automate-test-improve-and-merge-code-2533
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertTriangle
  CheckCircle
  XCircle
  Clock
  TrendingUp
  Activity
} from 'lucide-react'
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
interface HealthData {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;

<<<<<<< HEAD
  metrics: {
    error_rate: number;
    critical_errors: number;
    response_time: number;
    memory_usage: number;

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
  }
  health: {
    status: string;
    score: number;
    issues: string[];

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======
    memoryUsage: number;
  };
  health: {;
    status: string;
    score: number;
    issues: string[];
    recommendations: string[];
  };
  errors: {;
    summary: {;

    recommendations: string[];

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
  }
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  errors: {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;

<<<<<<< HEAD
      low: number
};
    topErrors: Array<{;

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
      patternId: string,
  description: string;
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
      patternId: string;
      description: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      occurrences: number;
      severity: string;
      solution?: string
    }>
    byCategory: { [category: string]: number }
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
      low: number;
    }
    top_errors: Array<{
      pattern_id: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string;
    }>;
    by_category: { [category: string]: number }
  }


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect } from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity } from 'lucide-react';
interface HealthData {;
  status: 'healthy' | 'warning' | 'critical',;
  timestamp: string,;
  uptime: number,;
  version: string,;
  environment: string,;
  metrics: {;
    errorRate: number,;
    criticalErrors: number,;
    responseTime: number,;
    memoryUsage: number;
  },;
  health: {;
    status: string,;
    score: number,;
    issues: string[],;
    recommendations: string[];
  },;
  errors: {;
    summary: {;
      total: number,;
      critical: number,;
      high: number,;
      medium: number,;
      low: number;
    },;
    topErrors: Array<{;
      patternId: string,;
      description: string,;
      occurrences: number,;
      severity: string,;
      solution?: string;
    }>,;
    byCategory: { [category: string]: number }
  }
}
;
const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const [autoRefresh, setAutoRefresh] = useState(true),;
  const fetchHealthData = async () => {;
    try {;
      const response = await fetch('/api/admin/health'),;
      if (!response.ok) {;
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json(),;
      setHealthData(data),;
<<<<<<< HEAD
=======
      setError(null);
    } catch (err) {;
      setError(err instanceof Error ? err.message : 'Failed to fetch health data');
    } finally {;
      setLoading(false);
    }
  },;
  useEffect(() => {;
    fetchHealthData(),;
    if (autoRefresh) {;
      const interval = setInterval(fetchHealthData, 30000), // Refresh every 30 seconds;
      return () => clearInterval(interval);
    }
    
    return undefined
  }, [autoRefresh]),

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />,
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />,
      default:
        return <Activity className="w-5 h-5 text-gray-500" />
    }
  },

  const getStatusBadge = (status: string) => {
    const variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive',
    return (
      <Badge variant={variant} className="ml-2">
        {status.toUpperCase()}
      </Badge>
    )
  },

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600),
    const minutes = Math.floor((seconds % 3600) / 60),
    return `${hours}h ${minutes}m`
  },

  const formatBytes = (bytes: number) => {
    return `${bytes.toFixed(1)} MB`
  },

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  if (loading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
      </div>
    )
  }
  if (error) {
    return (
      <Card className='border-red-200 bg-red-50'>
        <CardContent className='p-6'>
          <div className='flex items-center text-red-600'>
            <XCircle className='w-5 h-5 mr-2' />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className='mt-4'>
            Retry
          </Button>
        </CardContent>
      </Card>
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
    )

const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  }
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx


=======
    )
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  const fetchHealthData = async () => {;
    try {;
      const response = await fetch('/api/admin/health');
      if (!response && response.ok) {;
        throw new Error(`HTTP ${response && response.status}`);
      }
      const data = await response && response.json();
      setHealthData(data);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setError(null);
    } catch (err) {;
      setError(err instanceof Error ? err.message : 'Failed to fetch health data');
    } finally {;
      setLoading(false);
    }
  },;
  useEffect(() => {;
    fetchHealthData(),;
    if (autoRefresh) {;
      const interval = setInterval(fetchHealthData, 30000), // Refresh every 30 seconds;
      return () => clearInterval(interval);
    }
    
    return undefined
  }, [autoRefresh]),

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />,
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />,
      default:
        return <Activity className="w-5 h-5 text-gray-500" />
    }
  },

  const getStatusBadge = (status: string) => {
    const variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive',
    return (
      <Badge variant={variant} className="ml-2">
        {status.toUpperCase()}
      </Badge>
    )
  },

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600),
    const minutes = Math.floor((seconds % 3600) / 60),
    return `${hours}h ${minutes}m`
  },

  const formatBytes = (bytes: number) => {
    return `${bytes.toFixed(1)} MB`
  },

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center text-red-600">
            <XCircle className="w-5 h-5 mr-2" />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className="mt-4">
            Retry
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!healthData) return null,

<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  if (!healthData) return null,

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Health Dashboard</h1>
          {getStatusBadge(healthData.status)}
        </div>
        <div className="flex items-center space-x-2">
          <Button

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
          </Button>
          <Button onClick={fetchHealthData} size="sm">
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              {getStatusIcon(healthData.status)}
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Overall Health</p>
                <p className="text-2xl font-bold">{healthData.health.score}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-2xl font-bold">{formatUptime(healthData.uptime)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Activity className="w-5 h-5 text-purple-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Response Time</p>
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
=======

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
            <Card>
=======
    )            <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Environment:</span>
                    <Badge variant="outline">{healthData.environment}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Version:</span>
                    <span className="text-sm font-mono">{healthData.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Memory Usage:</span>
                    <span className="text-sm">{formatBytes(healthData.metrics.memoryUsage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Updated:</span>
                    <span className="text-sm">{new Date(healthData.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Current Issues ({healthData.health.issues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.health.issues.length > 0 ? (
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <ul className="space-y-2">
                    {healthData.health.issues.map((issue, index) => (
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
                      <li key={index} className="text-sm text-red-600 flex items-start">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
;
    return undefined;
  }, [autoRefresh]),;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'healthy':;
        return <CheckCircle className="w-5 h-5 text-green-500" />,;
      case 'warning':;
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,;
      case 'critical':;
        return <XCircle className="w-5 h-5 text-red-500" />,;
      default:;
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  },;
  const getStatusBadge = (status: string) => {;
    const variant = status === 'healthy' ? 'default' :;
                   status === 'warning' ? 'secondary' : 'destructive',;
    return (;
      <Badge variant={variant} className="ml-2">;
        {status.toUpperCase()}
      </Badge>;
<<<<<<< HEAD
    );
  },;
  const formatUptime = (seconds: number) => {;
    const hours = Math.floor(seconds / 3600),;
    const minutes = Math.floor((seconds % 3600) / 60),;
    return `${hours}h ${minutes}m`;
  },;
  const formatBytes = (bytes: number) => {;
    return `${bytes.toFixed(1)} MB`;
  },;
=======
    )
};

  const formatUptime = (seconds: number) => {;
    const hours = Math && Math.floor(seconds / 3600);
    const minutes = Math && Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`
};

  const formatBytes = (bytes: number) => {;
    return `${bytes && bytes.toFixed(1)} MB`
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  if (loading) {;
    return (;
      <div className="flex items-center justify-center p-8">;
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>;
      </div>;
    );
  }
;
  if (error) {;
    return (;
      <Card className="border-red-200 bg-red-50">;
        <CardContent className="p-6">;
          <div className="flex items-center text-red-600">;
            <XCircle className="w-5 h-5 mr-2" />;
            <span>Failed to load health data: {error}</span>;
          </div>;
          <Button onClick={fetchHealthData} className="mt-4">;
            Retry;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
;
  if (!healthData) return null,;
  return (;
    <div className="space-y-6">;
      {/* Header */}
      <div className="flex items-center justify-between">;
        <div className="flex items-center">;
          <h1 className="text-3xl font-bold">Health Dashboard</h1>;
          {getStatusBadge(healthData.status)}
        </div>;
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="flex items-center space-x-2">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => setAutoRefresh(!autoRefresh)}
          >;
=======
        <div className='flex items-center space-x-2'>;
          <Button
            variant='outline'
            size='sm'

            onClick={() => setAutoRefresh(!autoRefresh)}          >;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh;
          </Button>;
          <Button onClick={fetchHealthData} size="sm">;
            Refresh;
          </Button>;
        </div>;
      </div>;
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">;
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              {getStatusIcon(healthData.status)}
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Overall Health</p>;
                <p className="text-2xl font-bold">{healthData.health.score}/100</p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Clock className="w-5 h-5 text-blue-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Uptime</p>;
                <p className="text-2xl font-bold">{formatUptime(healthData.uptime)}</p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <TrendingUp className="w-5 h-5 text-orange-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Error Rate</p>;
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(1)}%</p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Activity className="w-5 h-5 text-purple-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Response Time</p>;
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">;
        <TabsList>;
          <TabsTrigger value="overview">Overview</TabsTrigger>;
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>;
          <TabsTrigger value="metrics">Metrics</TabsTrigger>;
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>;
        </TabsList>;
        <TabsContent value="overview" className="space-y-4">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">;
            <Card>;
              <CardHeader>;
                <CardTitle>System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-2">;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Environment:</span>;
                    <Badge variant="outline">{healthData.environment}</Badge>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Version:</span>;
                    <span className="text-sm font-mono">{healthData.version}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Memory Usage:</span>;
                    <span className="text-sm">{formatBytes(healthData.metrics.memoryUsage)}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Last Updated:</span>;
                    <span className="text-sm">{new Date(healthData.timestamp).toLocaleTimeString()}</span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className="flex items-center">;
                  <AlertTriangle className="w-4 h-4 mr-2" />;
                  Current Issues ({healthData.health.issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD
                {healthData.health.issues.length > 0 ? (;
                  <ul className="space-y-2">;
                    {healthData.health.issues.map((issue, index) => (;
                      <li key={index} className="text-sm text-red-600 flex items-start">;
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>;
                        {issue}
                      </li>;
=======

=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className='flex items-center space-x-2'>;
          <Button
            variant='outline'
            size='sm'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    ))}
                  </ul>
                ) : (
                  <p className="text-green-600 text-sm">No issues detected</p>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
=======


<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
=======
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{healthData.errors.summary.critical}</p>
                    <p className="text-sm text-gray-600">Critical</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{healthData.errors.summary.high}</p>
                    <p className="text-sm text-gray-600">High</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{healthData.errors.summary.medium}</p>
                    <p className="text-sm text-gray-600">Medium</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">{healthData.errors.summary.low}</p>
                    <p className="text-sm text-gray-600">Low</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Errors</CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.errors.topErrors.length > 0 ? (

<<<<<<< HEAD
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='errors' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
            <Card>;
              <CardHeader>;
                <CardTitle>Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid-cols-2 gap-4'>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-red-600'>;
                      {healthData && healthData.errors.summary && summary.critical}
                    </p>;
                    <p className='text-sm text-gray-600'>Critical</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-orange-600'>;
                      {healthData && healthData.errors.summary && summary.high}
                    </p>;
                    <p className='text-sm text-gray-600'>High</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-yellow-600'>;
                      {healthData && healthData.errors.summary && summary.medium}
                    </p>;
                    <p className='text-sm text-gray-600'>Medium</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-gray-600'>;
                      {healthData && healthData.errors.summary && summary.low}
                    </p>;
                    <p className='text-sm text-gray-600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader>;
                <CardTitle>Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {healthData && healthData.errors.topErrors && topErrors.length > 0 ? (;
                  <div className='space-y-2'>;
                    {healthData && healthData.errors.topErrors;
                      .slice(0, 5);
                      .map((error, index) => (;

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
                        <div
                          key={index}
                          className='border-l-4 border-red-400 pl-3 py-1'>;
                          <p className='text-sm font-medium'>;
                            {error && error.description}
                          </p>;
                          <p className='text-xs text-gray-600'>;
                            {error && error.occurrences} occurrences • {error && error.severity}
                          </p>;
                        </div>;
                      ))}                  </div>;
                ) : (;
                  <p className='text-gray-600 text-sm'>No recurring errors</p>;

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
                  <div className="space-y-2">
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (
                      <div key={index} className="border-l-4 border-red-400 pl-3 py-1">
                        <p className="text-sm font-medium">{error.description}</p>
                        <p className="text-xs text-gray-600">
                          {error.occurrences} occurrences • {error.severity}
                        </p>;
                      </div>;
                    ))}
                  </div>
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}
<<<<<<< HEAD
              </CardContent>
            </Card>
          </div>
        </TabsContent>
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(2)}%</p>
                <p className="text-xs text-gray-600">Errors per request</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">{healthData.metrics.criticalErrors}</p>
                <p className="text-xs text-gray-600">In last hour</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>
                <p className="text-xs text-gray-600">API response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{formatBytes(healthData.metrics.memoryUsage)}</p>
                <p className="text-xs text-gray-600">JavaScript heap</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {healthData.metrics.errorRate.toFixed(2)}%
                </p>
                <p className='text-xs text-gray-600'>Errors per request</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold text-red-600'>
                  {healthData.metrics.criticalErrors}
                </p>
                <p className='text-xs text-gray-600'>In last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {healthData.metrics.responseTime.toFixed(0)}ms
                </p>
                <p className='text-xs text-gray-600'>API response time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {formatBytes(healthData.metrics.memoryUsage)}
                </p>
                <p className='text-xs text-gray-600'>JavaScript heap</p>
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}          <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx

              </CardContent>
            </Card>
          </div>
        </TabsContent>

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
=======


        <TabsContent value="recommendations" className="space-y-4">



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
          <Card>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <CardHeader>
              <CardTitle>Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
<<<<<<< HEAD
              {healthData.health.recommendations.length > 0 ? (
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className="space-y-3">
                  {healthData.health.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx

              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='metrics' className='space-y-4'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>;
            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(2)}%;
                </p>;
                <p className='text-xs text-gray-600'>Errors per request</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Critical Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold text-red-600'>;
                  {healthData && healthData.metrics.criticalErrors}
                </p>;
                <p className='text-xs text-gray-600'>In last hour</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Avg Response</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.responseTime && responseTime.toFixed(0)}ms;
                </p>;
                <p className='text-xs text-gray-600'>API response time</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Memory Usage</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {formatBytes(healthData && healthData.metrics.memoryUsage)}
                </p>;
                <p className='text-xs text-gray-600'>JavaScript heap</p>;
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='recommendations' className='space-y-4'>;
          <Card>;
            <CardHeader>;
              <CardTitle>Improvement Recommendations</CardTitle>;
            </CardHeader>;
            <CardContent>;
              {healthData && healthData.health.recommendations && recommendations.length > 0 ? (;
                <ul className='space-y-3'>;
                  {healthData && healthData.health.recommendations && recommendations.map((rec, index) => (;
                    <li key={index} className='flex items-start'>;
                      <CheckCircle className='w-4 h-4 text-green-500 mt-0 && 0.5 mr-2 flex-shrink-0' />;
                      <span className='text-sm'>{rec}</span>                    </li>;

<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No specific recommendations at this time</p>
=======
              {healthData.health.recommendations.length > 0 ? (                  ))}
                </ul>;
              ) : (;
                <p className='text-gray-600'>;
                  No specific recommendations at this time;
                </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              )}
<<<<<<< HEAD
<<<<<<< HEAD
            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
},;
export default HealthDashboard;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

export default HealthDashboard, ;
export default HealthDashboard;
}

      const response = await fetch ('/api / admin / health');
      // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
          </Card>;
        </TabsContent>;
      </Tabs>;
<<<<<<< HEAD
=======
        throw new Error (`HTTP ${response.status}`);
      }
      const data = await response.json ();
      setHealthData (data);
      set_error (null);
    } catch (err) {
      set_error (
        err instanceof Error ? err.message : 'Failed to fetch health data');
    } finally {
      set_loading (false);
    }
  }
  useEffect (() => {
    fetchHealthData ();
    // Check condition
if ( {) {
  $2
}
      const interval = set_interval (fetchHealthData, 30000); // Refresh every 30 seconds;
      return () => clear_interval (interval);
    }
    return undefined;
  }, [auto_refresh]);
  const getStatusIcon = (status: string, ) =>: any {
    switch (status) {
      case 'healthy':;
        return <CheckCircle className='w - 5 h - 5 text - green - 500' />;
      case 'warning':;
        return <AlertTriangle className='w - 5 h - 5 text - yellow - 500' />;
      case 'critical':;
        return <XCircle className='w - 5 h - 5 text - red - 500' />;
      default:;
        return <Activity className='w - 5 h - 5 text - gray - 500' />;
    }
  }
  const getStatusBadge = (status: string) =>: any {
    const variant =;
      status === 'healthy';
        ? 'default';
        : status === 'warning';
          ? 'secondary';
          : 'destructive'; return (
      <Badge variant={variant} className='ml - 2'>;
        {status.toUpperCase ()}
      </Badge>);
  }
  const format_uptime = (seconds: number) =>: any {
    const hours = Math.floor (seconds / 3600);
    const minutes = Math.floor ((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }
  const format_bytes = (bytes: number) =>: any {
    return `${bytes.to_fixed (1)} MB`;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='flex items - center justify - center p - 8'>;
        <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - gray - 900'></div>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='border - red - 200 bg - red - 50'>;
        <CardContent className='p - 6'>;
          <div className='flex items - center text - red - 600'>;
            <XCircle className='w - 5 h - 5 mr - 2' />;
            <span > Failed to load health data: {error}</span>;
          </div>;
          <Button on_click={fetchHealthData} className='mt - 4'>;
            Retry;
          </Button>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='space - y-6'>;
      {/* Header */}
      <div className='flex items - center justify - between'>;
        <div className='flex items - center'>;
          <h1 className='text - 3xl font - bold'>Health Dashboard</h1>;
          {getStatusBadge (health_data.status)}
        </div>;
        <div className='flex items - center space - x-2'>;
          <Button;
            variant='outline';
            size='sm';
            on_click={() => setAutoRefresh (!auto_refresh)}          >;
            {auto_refresh ? 'Disable' : 'Enable'} Auto - refresh;
          </Button>;
          <Button on_click={fetchHealthData} size='sm'>;
            Refresh;
          </Button>;
        </div>;
      </div>;
      {/* Overview Cards */}
      <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              {getStatusIcon (health_data.status)}
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>;
                  Overall Health;
                </p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.health.score}/100;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <Clock className='w - 5 h - 5 text - blue - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>Uptime</p>;
                <p className='text - 2xl font - bold'>;
                  {format_uptime (health_data.uptime)}
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <TrendingUp className='w - 5 h - 5 text - orange - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>Error Rate</p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.error_rate.to_fixed (1)}%;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <Activity className='w - 5 h - 5 text - purple - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>;
                  Response Time;
                </p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.response_time.to_fixed (0)}ms;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Detailed Information */}
      <Tabs default_value='overview' className='space - y-4'>;
        <TabsList>;
          <TabsTrigger value='overview'>Overview</TabsTrigger>;
          <TabsTrigger value='errors'>Error Analysis</TabsTrigger>;
          <TabsTrigger value='metrics'>Metrics</TabsTrigger>;
          <TabsTrigger value='recommendations'>Recommendations</TabsTrigger>;
        </TabsList>;
        <TabsContent value='overview' className='space - y-4'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 4'>;
            <Card>;
              <CardHeader>;
                <CardTitle > System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-2'>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Environment:</span>;
                    <Badge variant='outline'>{health_data.environment}</Badge>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Version:</span>;
                    <span className='text - sm font - mono'>;
                      {health_data.version}
                    </span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Memory Usage:</span>;
                    <span className='text - sm'>;
                      {format_bytes (health_data.metrics.memory_usage)}
                    </span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Last Updated:</span>;
                    <span className='text - sm'>;
                      {new Date (health_data.timestamp).toLocaleTimeString ()}
                    </span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center'>;
                  <AlertTriangle className='w - 4 h - 4 mr - 2' />;
                  Current Issues ({health_data.health.issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;
                {health_data.health.issues.length > 0 ? (
                  <ul className='space - y-2'>;
                    {health_data.health.issues.map ((issue, index) => (
                      <li;
                        key={index}
                        className='text - sm text - red - 600 flex items - start';
                      >;
                        <span className='w - 2 h - 2 bg - red - 400 rounded - full mt - 1.5 mr - 2 flex - shrink - 0'></span>                        {issue}
                      </li>))}
                  </ul>) : (
                  <p className='text - green - 600 text - sm'>No issues detected</p>)}
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='errors' className='space - y-4'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 4'>;
            <Card>;
              <CardHeader>;
                <CardTitle > Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid - cols - 2 gap - 4'>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - red - 600'>;
                      {health_data.errors.summary.critical}
                    </p>;
                    <p className='text - sm text - gray - 600'>Critical</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - orange - 600'>;
                      {health_data.errors.summary.high}
                    </p>;
                    <p className='text - sm text - gray - 600'>High</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - yellow - 600'>;
                      {health_data.errors.summary.medium}
                    </p>;
                    <p className='text - sm text - gray - 600'>Medium</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - gray - 600'>;
                      {health_data.errors.summary.low}
                    </p>;
                    <p className='text - sm text - gray - 600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle > Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {health_data.errors.top_errors.length > 0 ? (
                  <div className='space - y-2'>;
                    {health_data.errors.top_errors;
                      .slice (0, 5);
                      .map ((error, index) => (
                        <div;
                          key={index}
                          className='border - l-4 border - red - 400 pl - 3 py - 1';
                        >;
                          <p className='text - sm font - medium'>;
                            {error.description}
                          </p>;
                          <p className='text - xs text - gray - 600'>;
                            {error.occurrences} occurrences • {error.severity}
                          </p>;
                        </div>))}                  </div>) : (
                  <p className='text - gray - 600 text - sm'>No recurring errors</p>)}
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='metrics' className='space - y-4'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4'>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.error_rate.to_fixed (2)}%;
                </p>;
                <p className='text - xs text - gray - 600'>Errors per request</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Critical Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold text - red - 600'>;
                  {health_data.metrics.critical_errors}
                </p>;
                <p className='text - xs text - gray - 600'>In last hour</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Avg Response</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.response_time.to_fixed (0)}ms;
                </p>;
                <p className='text - xs text - gray - 600'>API response time</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Memory Usage</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {format_bytes (health_data.metrics.memory_usage)}
                </p>;
                <p className='text - xs text - gray - 600'>JavaScript heap</p>;
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='recommendations' className='space - y-4'>;
          <Card>;
            <CardHeader>;
              <CardTitle > Improvement Recommendations</CardTitle>;
            </CardHeader>;
            <CardContent>;
              {health_data.health.recommendations.length > 0 ? (
                <ul className='space - y-3'>;
                  {health_data.health.recommendations.map ((rec, index) => (
                    <li key={index} className='flex items - start'>;
                      <CheckCircle className='w - 4 h - 4 text - green - 500 mt - 0.5 mr - 2 flex - shrink - 0' />;
                      <span className='text - sm'>{rec}</span>                    </li>))}
                </ul>) : (
                <p className='text - gray - 600'>;
                  No specific recommendations at this time;
                </p>)}

            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx


    </div>);
}
export default HealthDashboard;
export default HealthDashboard,
export default HealthDashboard,
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default HealthDashboard;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
  }
  );
};

export default HealthDashboard;
<<<<<<< HEAD:src/components/admin/HealthDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/HealthDashboard.tsx
