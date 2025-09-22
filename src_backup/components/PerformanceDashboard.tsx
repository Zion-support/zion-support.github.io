<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react';
interface PerformanceMetrics {;
  buildSize: string,;
  pageCount: number,;
  loadTime: number,;
  healthStatus: 'healthy' | 'warning' | 'error';
}
;
interface Improvement {;
  id: string,;
  title: string,;
  description: string,;
  status: 'completed' | 'in-progress' | 'planned',;
  impact: 'high' | 'medium' | 'low',;
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react'

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
import React, { useState } from 'react'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
  CheckCircle
  AlertCircle
  TrendingUp
  Zap
  Shield
  Search
} from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
interface PerformanceMetrics {
  buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error'
interface Improvement {

<<<<<<< HEAD
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
import React, { useState, useMemo } from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {;
  CheckCircle,;
  AlertCircle,;
  TrendingUp,;
  Zap,;
  Shield,;
  Search,;
} from 'lucide-react';
interface PerformanceMetrics {;
  buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error';

interface Improvement {;
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
  id: string;
  title: string,
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'ux' | 'build'
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap,
  Shield,
  Search,
} from 'lucide-react';
interface PerformanceMetrics {
  build_size: string;
  page_count: number;
  load_time: number;
  health_status: 'healthy' | 'warning' | 'error';
interface Improvement {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in - progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  category: 'performance' | 'security' | 'ux' | 'build';
}
;
const PerformanceDashboard: React.FC = () => {;
  const [metrics] = useState<PerformanceMetrics>({;
    buildSize: '959 MB',;
    pageCount: 166,;
    loadTime: 1.2,;
    healthStatus: 'healthy';
  }),;
  const improvements: Improvement[] = [;
    {;
      id: '1',;
      title: 'Fixed Search Bar Issues',;
      description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',;
      status: 'completed',;
      impact: 'high',;
      category: 'ux';
    },;
    {;
      id: '2',;
      title: 'Environment Validation System',;
      description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',;
      status: 'completed',;
      impact: 'high',;
      category: 'build';
    },;
    {;
      id: '3',;
      title: 'NextAuth Configuration Fix',;
      description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';
    },;
    {;
      id: '4',;
      title: 'API Client Error Handling',;
      description: 'Improved global error handling with better retry logic and user feedback',;
      status: 'completed',;
      impact: 'medium',;
      category: 'ux';
    },;
    {;
      id: '5',;
      title: 'Bundle Analyzer Integration',;
      description: 'Added bundle analysis tools to identify and optimize large dependencies',;
      status: 'completed',;
      impact: 'medium',;
      category: 'performance';
    },;
    {;
      id: '6',;
      title: 'Health Check Endpoint',;
      description: 'Created production monitoring endpoint for environment and service health',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';
    }
  ],

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />,
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />,
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />,
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />
  ],;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />,;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />,;
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />,;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  },;
  const getImpactColor = (impact: string) => {;
    switch (impact) {;
      case 'high': return 'bg-red-100 text-red-800',;
      case 'medium': return 'bg-yellow-100 text-yellow-800',;
      case 'low': return 'bg-green-100 text-green-800',;
      default: return 'bg-gray-100 text-gray-800';
=======
const PerformanceDashboard: React.FC = () => {
  const [metrics] = useState<PerformanceMetrics>({
    buildSize: '959 MB'
    pageCount: 166
    loadTime: 1.2
    healthStatus: 'healthy'
  })
  const improvements: Improvement[] = [
    {
      id: '1'
      title: 'Fixed Search Bar Issues'
      description:
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems'
      status: 'completed'
      impact: 'high'
      category: 'ux'
    }
    {
      id: '2'
      title: 'Environment Validation System'
      description:
        'Added comprehensive pre-build checks to prevent deployment with missing environment variables'
      status: 'completed'
      impact: 'high'
      category: 'build'
    }
    {
      id: '3'
      title: 'NextAuth Configuration Fix'
      description:
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors'
      status: 'completed'
      impact: 'medium'
      category: 'security'
    }
    {
      id: '4'
      title: 'API Client Error Handling'
      description:
        'Improved global error handling with better retry logic and user feedback'
      status: 'completed'
      impact: 'medium'
      category: 'ux'
    }
    {
      id: '5'
      title: 'Bundle Analyzer Integration'
      description:
        'Added bundle analysis tools to identify and optimize large dependencies'
      status: 'completed'
      impact: 'medium'
      category: 'performance'
    }
    {
      id: '6'
      title: 'Health Check Endpoint'
      description:
        'Created production monitoring endpoint for environment and service health'
      status: 'completed'
      impact: 'medium'
      category: 'security'
    }
  ]
  const getStatusIcon = (status: string,) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'in-progress':
        return <AlertCircle className='h-4 w-4 text-yellow-500' />
      case 'planned':
        return <TrendingUp className='h-4 w-4 text-blue-500' />
      default:
        return <AlertCircle className='h-4 w-4 text-gray-500' />
    }
  }
  const getImpactColor = (impact: string,) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  const getCategoryIcon = (category: string,) => {
    switch (category) {
      case 'performance':
        return <Zap className='h-4 w-4' />
      case 'security':
        return <Shield className='h-4 w-4' />
      case 'ux':
        return <Search className='h-4 w-4' />
      case 'build':
        return <TrendingUp className='h-4 w-4' />
      default:
        return <CheckCircle className='h-4 w-4' />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  },

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
=======
  category: 'performance' | 'security' | 'ux' | 'build';
const PerformanceDashboard: React.FC = () => {
  const [metrics] = useState < PerformanceMetrics>({
    build_size: '959 MB',
    page_count: 166,
    load_time: 1.2,
    health_status: 'healthy',
  });
  const improvements: Improvement[] = [;
    {
      id: '1',
      title: 'Fixed Search Bar Issues',
      description:;
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',
      status: 'completed',
      impact: 'high',
      category: 'ux',
    },
    {
      id: '2',
      title: 'Environment Validation System',
      description:;
        'Added comprehensive pre - build checks to prevent deployment with missing environment variables',
      status: 'completed',
      impact: 'high',
      category: 'build',
    },
    {
      id: '3',
      title: 'NextAuth Configuration Fix',
      description:;
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',
      status: 'completed',
      impact: 'medium',
      category: 'security',
    },
    {
      id: '4',
      title: 'API Client Error Handling',
      description:;
        'Improved global error handling with better retry logic and user feedback',
      status: 'completed',
      impact: 'medium',
      category: 'ux',
    },
    {
      id: '5',
      title: 'Bundle Analyzer Integration',
      description:;
        'Added bundle analysis tools to identify and optimize large dependencies',
      status: 'completed',
      impact: 'medium',
      category: 'performance',
    },
    {
      id: '6',
      title: 'Health Check Endpoint',
      description:;
        'Created production monitoring endpoint for environment and service health',
      status: 'completed',
      impact: 'medium',
      category: 'security',
    },
  ];
  const getStatusIcon = (status: string, ) =>: any {

    switch (status) {
      case 'completed':;
        return <CheckCircle className='h - 4 w - 4 text - green - 500' />;
      case 'in - progress':;
        return <AlertCircle className='h - 4 w - 4 text - yellow - 500' />;
      case 'planned':;
        return <TrendingUp className='h - 4 w - 4 text - blue - 500' />;
      default:;
        return <AlertCircle className='h - 4 w - 4 text - gray - 500' />;
    }
  }
  const getImpactColor = (impact: string, ) =>: any {
    switch (impact) {
      case 'high':;
        return 'bg - red - 100 text - red - 800';
      case 'medium':;
        return 'bg - yellow - 100 text - yellow - 800';
      case 'low':;
        return 'bg - green - 100 text - green - 800';
      default:;
        return 'bg - gray - 100 text - gray - 800';
    }
  }
  const getCategoryIcon = (category: string, ) =>: any {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
    switch (category) {
      case 'performance': return <Zap className="h-4 w-4" />,
      case 'security': return <Shield className="h-4 w-4" />,
      case 'ux': return <Search className="h-4 w-4" />,
      case 'build': return <TrendingUp className="h-4 w-4" />,
      default: return <CheckCircle className="h-4 w-4" />
    }
  },

  const completedImprovements = improvements.filter(imp => imp.status === 'completed'),

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
        <Badge className="bg-green-100 text-green-800">
          {completedImprovements.length} Improvements Completed
        </Badge>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
=======
        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Build Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.buildSize}</div>
            <p className="text-xs text-gray-500">Total build output</p>
          </CardContent>
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
        </Card>            </div>
=======
        </Card>
=======
        </Card>



        

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Load Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{metrics.loadTime}s</div>
            <p className='text-xs text-gray-500'>Average page load</p>
          </CardContent>
        </Card>
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======



        

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======
            <div className='flex items-center space-x-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-sm font-semibold text-green-600'>
                Healthy
              </span>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx

            </div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          </CardContent>
        </Card>
      </div>

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
  }
  const completedImprovements = improvements.filter(
    imp => imp.status === 'completed'
  )
import React, { useState } from 'react',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react';
interface PerformanceMetrics {;
  buildSize: string,;
  pageCount: number,;
  loadTime: number,;
  healthStatus: 'healthy' | 'warning' | 'error';
}
;
interface Improvement {;
  id: string,;
  title: string,,
  description: string,;
  status: 'completed' | 'in-progress' | 'planned',;
  impact: 'high' | 'medium' | 'low',;
  category: 'performance' | 'security' | 'ux' | 'build';
}
;  const improvements: Improvement[] = [;
    {;
      id: '1',;
      title: 'Fixed Search Bar Issues',,
  description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',;
      status: 'completed',;
      impact: 'high',;
      category: 'ux';    },;
    {;
      id: '2',;
      title: 'Environment Validation System',,
  description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',;
      status: 'completed',;
      impact: 'high',;
      category: 'build';    },;
    {;
      id: '3',;
      title: 'NextAuth Configuration Fix',,
  description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';    },;
    {;
      id: '4',;
      title: 'API Client Error Handling',,
  description: 'Improved global error handling with better retry logic and user feedback',;
      status: 'completed',;
      impact: 'medium',;
      category: 'ux';    },;
    {;
      id: '5',;
      title: 'Bundle Analyzer Integration',,
  description: 'Added bundle analysis tools to identify and optimize large dependencies',;
      status: 'completed',;
      impact: 'medium',;
      category: 'performance';    },;
    {;
      id: '6',;
      title: 'Health Check Endpoint',,
  description: 'Created production monitoring endpoint for environment and service health',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';
    }
  ],

<<<<<<< HEAD
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Page Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pageCount}</div>
            <p className="text-xs text-gray-500">Generated pages</p>
          </CardContent>
        </Card>


        
=======
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />,
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />,
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />,
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />
  ],;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />,;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />,;
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />,;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  },;
  const getImpactColor = (impact: string) => {;
    switch (impact) {;
      case 'high': return 'bg-red-100 text-red-800',;
      case 'medium': return 'bg-yellow-100 text-yellow-800',;
      case 'low': return 'bg-green-100 text-green-800',;
      default: return 'bg-gray-100 text-gray-800';
    }
  },

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return <Zap className="h-4 w-4" />,
      case 'security': return <Shield className="h-4 w-4" />,
      case 'ux': return <Search className="h-4 w-4" />,
      case 'build': return <TrendingUp className="h-4 w-4" />,
      default: return <CheckCircle className="h-4 w-4" />
    }
  },

  const completedImprovements = improvements.filter(imp => imp.status === 'completed'),

  return (
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Page Count
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{metrics.pageCount}</div>
            <p className='text-xs text-gray-500'>Generated pages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Load Time
            </CardTitle>
          <CardContent>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Load Time</CardTitle>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <div className="text-2xl font-bold">{metrics.loadTime}s</div>
            <p className="text-xs text-gray-500">Average page load</p>
          </CardContent>
        </Card>
<<<<<<< HEAD
        
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold text-green-600">Healthy</span>
<<<<<<< HEAD
=======
            <div className='flex items-center space-x-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-sm font-semibold text-green-600'>
                Healthy
              </span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>
          </CardContent>
        </Card>
      </div>

=======
const PerformanceDashboard: React.FC = () => {;
  const [metrics] = useState<PerformanceMetrics>({;
    buildSize: '959 MB',;
    pageCount: 166,;

  const improvements: Improvement[] = [;
    {;
      id: '1',;
      title: 'Fixed Search Bar Issues',;

    },;
    {;
      id: '2',;
      title: 'Environment Validation System',;

    },;
    {;
      id: '3',;
      title: 'NextAuth Configuration Fix',;

    },;
    {;
      id: '4',;
      title: 'API Client Error Handling',;

    },;
    {;
      id: '5',;
      title: 'Bundle Analyzer Integration',;

    },;
    {;
      id: '6',;
      title: 'Health Check Endpoint',;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

const PerformanceDashboard: React.FC = () => {;
  const [metrics] = useState<PerformanceMetrics>({;
    buildSize: '959 MB',;
    pageCount: 166,;
    loadTime: 1 && 1.2,;
    healthStatus: 'healthy',;
  });


  const improvements: Improvement[] = [;
    {;
      id: '1',;
      title: 'Fixed Search Bar Issues',;
      description:;
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',;
      status: 'completed',;
      impact: 'high',;
      category: 'ux',;

    },;
    {;
      id: '2',;
      title: 'Environment Validation System',;
      description:;
        'Added comprehensive pre-build checks to prevent deployment with missing environment variables',;
      status: 'completed',;
      impact: 'high',;
      category: 'build',;

    },;
    {;
      id: '3',;
      title: 'NextAuth Configuration Fix',;
      description:;
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security',;

    },;
    {;
      id: '4',;
      title: 'API Client Error Handling',;
      description:;
        'Improved global error handling with better retry logic and user feedback',;
      status: 'completed',;
      impact: 'medium',;
      category: 'ux',;

    },;
    {;
      id: '5',;
      title: 'Bundle Analyzer Integration',;
      description:;
        'Added bundle analysis tools to identify and optimize large dependencies',;
      status: 'completed',;
      impact: 'medium',;
      category: 'performance',;

    },;
    {;
      id: '6',;
      title: 'Health Check Endpoint',;
      description:;
        'Created production monitoring endpoint for environment and service health',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security',;
    },;
  ];

  const getStatusIcon = (status: string,) => {;
    switch (status) {;
      case 'completed':;
        return <CheckCircle className='h-4 w-4 text-green-500' />;
      case 'in-progress':;
        return <AlertCircle className='h-4 w-4 text-yellow-500' />;
      case 'planned':;
        return <TrendingUp className='h-4 w-4 text-blue-500' />;
      default:;
        return <AlertCircle className='h-4 w-4 text-gray-500' />;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
      {/* Completed Improvements */}
=======
            </div>
          </CardContent>
        </Card>
      </div>      {/* Completed Improvements */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been implemented
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
        <CardContent>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        <CardContent>


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
          <div className="space-y-4">
            {completedImprovements.map((improvement) => (
              <div key={improvement.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {getCategoryIcon(improvement.category)}

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {improvement.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge className={getImpactColor(improvement.impact)}>
                        {improvement.impact} impact
                      </Badge>
                      {getStatusIcon(improvement.status)}
                    </div>
                  </div>

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
                  <p className="text-sm text-gray-600 mt-1">
=======
        <CardContent>                  <p className="text-sm text-gray-600 mt-1">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  },;
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'performance': return <Zap className="h-4 w-4" />,;
      case 'security': return <Shield className="h-4 w-4" />,;
      case 'ux': return <Search className="h-4 w-4" />,;
      case 'build': return <TrendingUp className="h-4 w-4" />,;
      default: return <CheckCircle className="h-4 w-4" />;
    }
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  },;
  const completedImprovements = improvements.filter(imp => imp.status === 'completed'),;
  return (;
    <div className="space-y-6 p-6">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>;
        <Badge className="bg-green-100 text-green-800">;
          {completedImprovements.length} Improvements Completed;
        </Badge>;
      </div>;
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-sm font-medium text-gray-600">Build Size</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{metrics.buildSize}</div>;
            <p className="text-xs text-gray-500">Total build output</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-sm font-medium text-gray-600">Page Count</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{metrics.pageCount}</div>;
            <p className="text-xs text-gray-500">Generated pages</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-sm font-medium text-gray-600">Load Time</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{metrics.loadTime}s</div>;
            <p className="text-xs text-gray-500">Average page load</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-sm font-medium text-gray-600">Health Status</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className="flex items-center space-x-2">;
              <CheckCircle className="h-5 w-5 text-green-500" />;
              <span className="text-sm font-semibold text-green-600">Healthy</span>;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  };

  const getImpactColor = (impact: string,) => {;
    switch (impact) {;
      case 'high':;
        return 'bg-red-100 text-red-800';
      case 'medium':;
        return 'bg-yellow-100 text-yellow-800';
      case 'low':;
        return 'bg-green-100 text-green-800';
      default:;
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string,) => {;
    switch (category) {;
      case 'performance':;
        return <Zap className='h-4 w-4' />;
      case 'security':;
        return <Shield className='h-4 w-4' />;
      case 'ux':;
        return <Search className='h-4 w-4' />;
      case 'build':;
        return <TrendingUp className='h-4 w-4' />;
      default:;
        return <CheckCircle className='h-4 w-4' />;
    }
  };

  const completedImprovements = improvements && improvements.filter(;
    imp => imp && imp.status === 'completed';
  );

  return (
    <div className='space-y-6 p-6'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold text-gray-900'>;
          Performance Dashboard;
        </h1>;
        <Badge className='bg-green-100 text-green-800'>;
          {completedImprovements && completedImprovements.length} Improvements Completed;
        </Badge>;
      </div>;

      {/* Metrics Overview */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
    <div className='space - y-6 p - 6'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold text - gray - 900'>;
          Performance Dashboard;
        </h1>;
        <Badge className='bg - green - 100 text - green - 800'>;
          {completed_improvements.length} Improvements Completed;
        </Badge>;
      </div>;
      {/* Metrics Overview */}
      <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6'>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;
              Build Size;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;

            <div className='text - 2xl font - bold'>{metrics.build_size}</div>;
            <p className='text - xs text - gray - 500'>Total build output</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;

              Page Count;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;

            <div className='text - 2xl font - bold'>{metrics.page_count}</div>;
            <p className='text - xs text - gray - 500'>Generated pages</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;

              Load Time;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;

            <div className='text - 2xl font - bold'>{metrics.load_time}s</div>;
            <p className='text - xs text - gray - 500'>Average page load</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;

              Health Status;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;

            <div className='flex items - center space - x-2'>;
              <CheckCircle className='h - 5 w - 5 text - green - 500' />;
              <span className='text - sm font - semibold text - green - 600'>;

                Healthy;
              </span>;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
            </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </CardContent>;
        </Card>;
      </div>;

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
      {/* Completed Improvements */}
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center space-x-2">;
            <CheckCircle className="h-5 w-5 text-green-500" />;
            <span>Completed Improvements</span>;
          </CardTitle>;
          <CardDescription>;
            Recent performance and functionality improvements that have been implemented;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="space-y-4">;
            {completedImprovements.map((improvement) => (;
              <div key={improvement.id} className="flex items-start space-x-3 p-3 border rounded-lg">;
                <div className="flex-shrink-0 mt-1">;
=======

      {/* Completed Improvements */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center space-x-2'>
            <CheckCircle className='h-5 w-5 text-green-500' />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been
            implemented
          </CardDescription>
        </CardHeader>
        <CardContent>

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
                  {getCategoryIcon(improvement.category)}
                </div>;
                <div className="flex-1 min-w-0">;
                  <div className="flex items-center justify-between">;
                    <h3 className="text-sm font-medium text-gray-900">;
                      {improvement.title}
                    </h3>;
                    <div className="flex items-center space-x-2">;
                      <Badge className={getImpactColor(improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon(improvement.status)}
<<<<<<< HEAD
                    </div>;
                  </div>;
                  <p className="text-sm text-gray-600 mt-1">;
=======
                    </div>
                  </div>

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
                  <p className='text-sm text-gray-600 mt-1'>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {improvement.description}
                  </p>;
                </div>;
              </div>;
            ))}
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="flex space-x-4">
        <Button onClick={() => window.open('/api/health/environment_blank')} variant="outline">
          <Shield className="h-4 w-4 mr-2" />

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
          Check Health Status
=======
          </div>
        </CardContent>
      </Card>
      {/* Action Buttons */}          Check Health Status
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </Button>
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant="outline">
          <TrendingUp className="h-4 w-4 mr-2" />
          Bundle Analysis
        </Button>
      </div>
    </div>
  )
},

<<<<<<< HEAD
=======
          variant='outline';
        >;
          <TrendingUp className='h-4 w-4 mr-2' />;

export default PerformanceDashboard;
export default PerformanceDashboard, ;
export default PerformanceDashboard;
}

},

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default PerformanceDashboard, 
      <div className="flex space-x-4">;
        <Button onClick={() => window.open('/api/health/environment_blank')} variant="outline">;
          <Shield className="h-4 w-4 mr-2" />;
<<<<<<< HEAD
=======
          Check Health Status;
        </Button>;
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant="outline">;
          <TrendingUp className="h-4 w-4 mr-2" />;

<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
=======
};

export default PerformanceDashboard;



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx

          <div className='space - y-4'>;
            {completed_improvements.map (improvement => (
              <div;
                key={improvement.id}
                className='flex items - start space - x-3 p - 3 border rounded - lg';
              >;
                <div className='flex - shrink - 0 mt - 1'>                  {getCategoryIcon (improvement.category)}
                </div>;
                <div className='flex - 1 min - w-0'>;
                  <div className='flex items - center justify - between'>;
                    <h3 className='text - sm font - medium text - gray - 900'>;
                      {improvement.title}
                    </h3>;
                    <div className='flex items - center space - x-2'>;
                      <Badge className={getImpactColor (improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon (improvement.status)}
                    </div>;
                  </div>;
                  <p className='text - sm text - gray - 600 mt - 1'>;
                    {improvement.description}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}
      <div className='flex space - x-4'>;
        <Button;
          on_click={() => window.open ('/api / health / environment', '_blank')}
          variant='outline';
        >;
          <Shield className='h - 4 w - 4 mr - 2' />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Check Health Status;
        </Button>;
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant="outline">;
          <TrendingUp className="h-4 w-4 mr-2" />;
          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );
},;
export default PerformanceDashboard;
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default PerformanceDashboard,
<<<<<<< HEAD
<<<<<<< HEAD
export default PerformanceDashboard,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default PerformanceDashboard,

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
export default PerformanceDashboard,
export default PerformanceDashboard,

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
  );
};

export default PerformanceDashboard;
<<<<<<< HEAD:src/components/PerformanceDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/PerformanceDashboard.tsx
