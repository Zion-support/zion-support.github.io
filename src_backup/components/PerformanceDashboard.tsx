<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle   } from '@/components/ui/card';
import { Badge   } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search  } from 'lucide-react';
import { Card;
  CardContent;
  CardDescription;
  CardHeader;
  CardTitle;
 } from '@/components/ui/card';
<<<<<<< HEAD
import { Badge  } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react'
=======
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Badge  } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react'
import { Button } from @/components/ui/button';
import { CheckCircle, AlertCircle, TrendingUp, Zap, Shield, Search } from 'lucide-react
>>>>>>> origin/resolved-merge-conflicts

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, { useState } from react'
=======
=======
=======
<<<<<<< HEAD

import React, { useState } from react'
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  CheckCircle;
  AlertCircle;
  TrendingUp;
  Zap;
  Shield;
  Search;
} from 'lucide-react';
interface PerformanceMetrics  {buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error';

interface Improvement {;

  id: string;
interface Improvement  {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React, { useState, useMemo } from 'react';
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card';
  CheckCircle,AlertCircle,TrendingUp,Zap,Shield,Search} from 'lucide-react';
interface PerformanceMetrics  {buildSize: string;
  pageCount: number;
  loadTime: number;
  healthStatus: 'healthy' | 'warning' | 'error';interface Improvement  {id: string;
  title: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  id: string;
  title: string,
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'security' | 'ux' | 'build'
<<<<<<< HEAD
=======
  category: 'performance | security' | 'ux | build'
>>>>>>> origin/resolved-merge-conflicts

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
  category: 'performance' | 'security' | 'ux' | 'build';
const PerformanceDashboard: React.FC = () => {const [metrics] = useState<PerformanceMetrics>({buildSize: '959 MB';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  category: performance' | 'security | ux' | 'build;
const PerformanceDashboard: React.FC = () => {const [metrics] = useState<PerformanceMetrics>({buildSize: 959 MB';
>>>>>>> origin/resolved-merge-conflicts
    pageCount: 166;
    loadTime: 1.2;
    healthStatus: 'healthy';
  })const improvements: Improvement[] = [;
    {id: '1';
      title: 'Fixed Search Bar Issues';
      description:;
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems';
      status: 'completed';
      impact: 'high';
      category: 'ux';
    }
    {id: '2';
      title: 'Environment Validation System';
      description:;
        'Added comprehensive pre-build checks to prevent deployment with missing environment variables';
      status: 'completed';
      impact: 'high';
      category: 'build';
    }
    {id: '3';
      title: 'NextAuth Configuration Fix';
      description:;
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors';
      status: 'completed';
      impact: 'medium';
      category: 'security';
    }
    {id: '4';
      title: 'API Client Error Handling';
      description:;
        'Improved global error handling with better retry logic and user feedback';
      status: 'completed';
      impact: 'medium';
      category: 'ux';
    }
    {id: '5';
      title: 'Bundle Analyzer Integration';
      description:;
        'Added bundle analysis tools to identify and optimize large dependencies';
      status: 'completed';
      impact: 'medium';
      category: 'performance';
    }
    {id: '6';
      title: 'Health Check Endpoint';
      description:;
        'Created production monitoring endpoint for environment and service health';
      status: 'completed';
      impact: 'medium';
      category: 'security';
    }
  ];
  const getStatusIcon = (status: string,) => {switch (status) {case 'completed':;
        return <CheckCircle className='h-4 w-4 text-green-500' />;
      case 'in-progress':;
        return <AlertCircle className='h-4 w-4 text-yellow-500' />;
      case 'planned':;
        return <TrendingUp className='h-4 w-4 text-blue-500' />;
      default:;
        return <AlertCircle className='h-4 w-4 text-gray-500' />;
    }
  }
  const getImpactColor = (impact: string,) => {switch (impact) {case 'high':;
        return 'bg-red-100 text-red-800';
      case 'medium':;
        return 'bg-yellow-100 text-yellow-800';
      case 'low':;
        return 'bg-green-100 text-green-800';
      default:;
        return 'bg-gray-100 text-gray-800';
    }
  }
  const getCategoryIcon = (category: string,) => {switch (category) {case 'performance':;
        return <Zap className='h-4 w-4' />;
      case 'security':;
        return <Shield className='h-4 w-4' />;
      case 'ux':;
        return <Search className='h-4 w-4' />;
      case 'build':;
        return <TrendingUp className='h-4 w-4' />;
      default:;
        return <CheckCircle className='h-4 w-4' />;
    }import { Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
  CheckCircle,AlertCircle,TrendingUp,Zap,Shield,Search} from 'lucide-react';
interface PerformanceMetrics  {build_size: string;
  page_count: number;
  load_time: number;
  health_status: 'healthy' | 'warning' | 'error';
interface Improvement  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  page_count: number;
  load_time: number;
  health_status: 'healthy' | 'warning' | 'error';
interface Improvement {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in - progress' | 'planned';
  impact: 'high' | 'medium' | 'low';

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    }



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
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{metrics.loadTime}s</div>
            <p className='text-xs text-gray-500'>Average page load</p>
          </CardContent>
        </Card>



        


        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>

            <div className='flex items-center space-x-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-sm font-semibold text-green-600'>
                Healthy
              </span>

            </div>
          </CardContent>
        </Card>
      </div>


const PerformanceDashboard: React.FC = () => {;
  const [metrics] = useState<PerformanceMetrics>({;
    buildSize: '959 MB',;
    pageCount: 166,;
    loadTime: 1 && 1.2,;
    healthStatus: 'healthy',;
  });


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
  title: string,;
  description: string,;
  status: 'completed' | 'in-progress' | 'planned',;
  impact: 'high' | 'medium' | 'low',;
  category: 'performance' | 'security' | 'ux' | 'build';
}
;
  const improvements: Improvement[] = [;
    {;
      id: '1',;
      title: 'Fixed Search Bar Issues',;
      description:;
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',;
      status: 'completed',;
      impact: 'high',;
      category: 'ux',;

      description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',;
      status: 'completed',;
      impact: 'high',;
      category: 'ux';
    },;
    {;
      id: '2',;
      title: 'Environment Validation System',;
      description:;
        'Added comprehensive pre-build checks to prevent deployment with missing environment variables',;
      status: 'completed',;
      impact: 'high',;
      category: 'build',;

      description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',;
      status: 'completed',;
      impact: 'high',;
      category: 'build';
    },;
    {;
      id: '3',;
      title: 'NextAuth Configuration Fix',;
      description:;
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security',;

      description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';
    },;
    {;
      id: '4',;
      title: 'API Client Error Handling',;
      description:;
        'Improved global error handling with better retry logic and user feedback',;
      status: 'completed',;
      impact: 'medium',;
      category: 'ux',;

      description: 'Improved global error handling with better retry logic and user feedback',;
      status: 'completed',;
      impact: 'medium',;
      category: 'ux';
    },;
    {;
      id: '5',;
      title: 'Bundle Analyzer Integration',;
      description:;
        'Added bundle analysis tools to identify and optimize large dependencies',;
      status: 'completed',;
      impact: 'medium',;
      category: 'performance',;

      description: 'Added bundle analysis tools to identify and optimize large dependencies',;
      status: 'completed',;
      impact: 'medium',;
      category: 'performance';
    },;
    {;
      id: '6',;
      title: 'Health Check Endpoint',;
<<<<<<< HEAD
    },const completedImprovements = improvements.filter(imp => imp.status === 'completed'),return (<Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
=======
    }},const completedImprovements = improvements.filter(imp => imp.status === 'completed'),return (<Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
    }},const completedImprovements = improvements.filter(imp => imp.status === completed'),return (<Card>;
          <CardHeader className='pb-2>;
            <CardTitle className=text-sm font-medium text-gray-600'>;
>>>>>>> origin/resolved-merge-conflicts
              Page Count;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{metrics.pageCount}</div>;
            <p className='text-xs text-gray-500'>Generated pages</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
              Load Time;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{metrics.loadTime}s</div>;
            <p className='text-xs text-gray-500'>Average page load</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
              Health Status;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='flex items-center space-x-2'>;
              <CheckCircle className='h-5 w-5 text-green-500' />;
              <span className='text-sm font-semibold text-green-600'>;
                Healthy;
              </span>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
  }
  const completedImprovements = improvements.filter(imp => imp.status === 'completed';
  )import React, { useState } from 'react',import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',import { Badge } from '@/components/ui/badge',import { Button } from '@/components/ui/button',interface PerformanceMetrics  {buildSize: string,pageCount: number,loadTime: number,healthStatus: 'healthy' | 'warning' | 'error';
}interface Improvement  {id: string,title: string,description: string,status: 'completed' | 'in-progress' | 'planned',impact: 'high' | 'medium' | 'low',category: 'performance' | 'security' | 'ux' | 'build';
}const PerformanceDashboard: React.FC = () => {const [metrics] = useState<PerformanceMetrics>({buildSize: '959 MB',pageCount: 166,loadTime: 1.2,healthStatus: 'healthy';
  }),loadTime: 1 && 1.2,healthStatus: 'healthy'})const improvements: Improvement[] = [;
    {id: '1',title: 'Fixed Search Bar Issues',description: 'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',status: 'completed',impact: 'high',category: 'ux';description:;
        'Resolved first keystrokes ignored, suggestion clicks, and Enter key search problems',status: 'completed',impact: 'high',category: 'ux'},{id: '2',title: 'Environment Validation System',description: 'Added comprehensive pre-build checks to prevent deployment with missing environment variables',status: 'completed',impact: 'high',category: 'build';description:;
        'Added comprehensive pre-build checks to prevent deployment with missing environment variables',status: 'completed',impact: 'high',category: 'build'},{id: '3',title: 'NextAuth Configuration Fix',description: 'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',status: 'completed',impact: 'medium',category: 'security';description:;
        'Fixed Microsoft Azure AD provider configuration and resolved TypeScript compilation errors',status: 'completed',impact: 'medium',category: 'security'},{id: '4',title: 'API Client Error Handling',description: 'Improved global error handling with better retry logic and user feedback',status: 'completed',impact: 'medium',category: 'ux';description:;
        'Improved global error handling with better retry logic and user feedback',status: 'completed',impact: 'medium',category: 'ux'},{id: '5',title: 'Bundle Analyzer Integration',description: 'Added bundle analysis tools to identify and optimize large dependencies',status: 'completed',impact: 'medium',category: 'performance';description:;
        'Added bundle analysis tools to identify and optimize large dependencies',status: 'completed',impact: 'medium',category: 'performance'},{id: '6',title: 'Health Check Endpoint',description: 'Created production monitoring endpoint for environment and service health',status: 'completed',impact: 'medium',category: 'security';
    }
  ],const getStatusIcon = (status: string) => {switch (status) {case 'completed': return <CheckCircle className='h-4 w-4 text-green-500' />,case 'in-progress': return <AlertCircle className='h-4 w-4 text-yellow-500' />,case 'planned': return <TrendingUp className='h-4 w-4 text-blue-500' />,default: return <AlertCircle className='h-4 w-4 text-gray-500' />;
  ],const getStatusIcon = (status: string) => {switch (status) {case 'completed': return <CheckCircle className='h-4 w-4 text-green-500' />,case 'in-progress': return <AlertCircle className='h-4 w-4 text-yellow-500' />,case 'planned': return <TrendingUp className='h-4 w-4 text-blue-500' />,default: return <AlertCircle className='h-4 w-4 text-gray-500' />;
    }
  },const getImpactColor = (impact: string) => {switch (impact) {case 'high': return 'bg-red-100 text-red-800',case 'medium': return 'bg-yellow-100 text-yellow-800',case 'low': return 'bg-green-100 text-green-800',default: return 'bg-gray-100 text-gray-800';
    }
  },const getCategoryIcon = (category: string) => {switch (category) {case 'performance': return <Zap className='h-4 w-4' />,case 'security': return <Shield className='h-4 w-4' />,case 'ux': return <Search className='h-4 w-4' />,case 'build': return <TrendingUp className='h-4 w-4' />,default: return <CheckCircle className='h-4 w-4' />;
    }
  },const completedImprovements = improvements.filter(imp => imp.status === 'completed'),return (<Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
              Page Count;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{metrics.pageCount}</div>;
            <p className='text-xs text-gray-500'>Generated pages</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
              Load Time;
            </CardTitle>;
          <CardContent>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>;
              Health Status;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{metrics.loadTime}s</div>;
            <p className='text-xs text-gray-500'>Average page load</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb-2'>;
            <CardTitle className='text-sm font-medium text-gray-600'>Health Status</CardTitle>;
          </CardHeader>;
          <CardContent>;
            <div className='flex items-center space-x-2'>;
              <CheckCircle className='h-5 w-5 text-green-500' />;
              <span className='text-sm font-semibold text-green-600'>Healthy</span>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      description:;
        'Created production monitoring endpoint for environment and service health',status: 'completed',impact: 'medium',category: 'security'}];const getStatusIcon = (status: string,) => {switch (status) {case 'completed':;
        return <CheckCircle className='h-4 w-4 text-green-500' />;
      case 'in-progress':;
        return <AlertCircle className='h-4 w-4 text-yellow-500' />;
      case 'planned':;
        return <TrendingUp className='h-4 w-4 text-blue-500' />;
      default:;
        return <AlertCircle className='h-4 w-4 text-gray-500' />;
<<<<<<< HEAD
=======
        return <AlertCircle className='h-4 w-4 text-gray-500 />;
>>>>>>> origin/resolved-merge-conflicts

      description: 'Created production monitoring endpoint for environment and service health',;
      status: 'completed',;
      impact: 'medium',;
      category: 'security';
    }
  ],

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className='h-4 w-4 text-green-500' />,
      case 'in-progress': return <AlertCircle className='h-4 w-4 text-yellow-500' />,
      case 'planned': return <TrendingUp className='h-4 w-4 text-blue-500' />,
      default: return <AlertCircle className='h-4 w-4 text-gray-500' />
  ],;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'completed': return <CheckCircle className='h-4 w-4 text-green-500' />,;
      case 'in-progress': return <AlertCircle className='h-4 w-4 text-yellow-500' />,;
      case 'planned': return <TrendingUp className='h-4 w-4 text-blue-500' />,;
      default: return <AlertCircle className='h-4 w-4 text-gray-500' />;
    }
  },;
  const getImpactColor = (impact: string) => {;
    switch (impact) {;
      case 'high': return 'bg-red-100 text-red-800',;
      case 'medium': return 'bg-yellow-100 text-yellow-800',;
      case 'low': return 'bg-green-100 text-green-800',;
      default: return 'bg-gray-100 text-gray-800';

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  },

    switch (category) {
      case 'performance': return <Zap className='h-4 w-4' />,
      case 'security': return <Shield className='h-4 w-4' />,
      case 'ux': return <Search className='h-4 w-4' />,
      case 'build': return <TrendingUp className='h-4 w-4' />,
      default: return <CheckCircle className='h-4 w-4' />
    }
  },

  const completedImprovements = improvements.filter(imp => imp.status === 'completed'),

  return (
    <div className='space-y-6 p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-900'>Performance Dashboard</h1>
        <Badge className='bg-green-100 text-green-800'>
          {completedImprovements.length} Improvements Completed
        </Badge>
      </div>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>Build Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{metrics.buildSize}</div>
            <p className='text-xs text-gray-500'>Total build output</p>
          </CardContent>

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

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>

            </div>

          </CardContent>
        </Card>
      </div>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>Load Time</CardTitle>
          </CardHeader>
          <CardContent>

            <div className='text-2xl font-bold'>{metrics.loadTime}s</div>
            <p className='text-xs text-gray-500'>Average page load</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-sm font-medium text-gray-600'>Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-center space-x-2'>
              <CheckCircle className='h-5 w-5 text-green-500' />
              <span className='text-sm font-semibold text-green-600'>Healthy</span>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Improvements */}

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center space-x-2'>
            <CheckCircle className='h-5 w-5 text-green-500' />
            <span>Completed Improvements</span>
          </CardTitle>
          <CardDescription>
            Recent performance and functionality improvements that have been implemented
          </CardDescription>
        </CardHeader>

          <div className='space-y-4'>
            {completedImprovements.map((improvement) => (
              <div key={improvement.id} className='flex items-start space-x-3 p-3 border rounded-lg'>
                <div className='flex-shrink-0 mt-1'>
                  {getCategoryIcon(improvement.category)}

                </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium text-gray-900'>
        return <AlertCircle className='h-4 w-4 text-gray-500' />;{/* Completed Improvements */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {improvement.title}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className=flex-1 min-w-0">
                  <div className="flex items-center justify-between>
                    <h3 className=text-sm font-medium text-gray-900">
        return <AlertCircle className=h-4 w-4 text-gray-500' />;{/* Completed Improvements */}
>>>>>>> origin/resolved-merge-conflicts
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center space-x-2'>;
            <CheckCircle className='h-5 w-5 text-green-500' />;
            <span>Completed Improvements</span>;
          </CardTitle>;
          <CardDescription>Recent performance and functionality improvements that have been implemented;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className='space-y-4'>;
            {completedImprovements.map((improvement) => (<div key={improvement.id} className='flex items-start space-x-3 p-3 border rounded-lg'>;
                <div className='flex-shrink-0 mt-1'>;
                  {getCategoryIcon(improvement.category)}</div>;
                <div className='flex-1 min-w-0'>;
                  <div className='flex items-center justify-between'>;
                    <h3 className='text-sm font-medium text-gray-900'>;
                      {improvement.title}
                    </h3>;
                    <div className='flex items-center space-x-2'>;
                      <Badge className={getImpactColor(improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
=======
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {improvement.title}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge className={getImpactColor(improvement.impact)}>
                        {improvement.impact} impact
                      </Badge>
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      {getStatusIcon(improvement.status)}
                    </div>
                  </div>

                  <p className='text-sm text-gray-600 mt-1'>

  },;
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'performance': return <Zap className='h-4 w-4' />,;
      case 'security': return <Shield className='h-4 w-4' />,;
      case 'ux': return <Search className='h-4 w-4' />,;
      case 'build': return <TrendingUp className='h-4 w-4' />,;
      default: return <CheckCircle className='h-4 w-4' />;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>;
                  </div>;
                  <p className='text-sm text-gray-600 mt-1'>;
  },const getCategoryIcon = (category: string) => {switch (category) {case 'performance': return <Zap className='h-4 w-4' />,case 'security': return <Shield className='h-4 w-4' />,case 'ux': return <Search className='h-4 w-4' />,case 'build': return <TrendingUp className='h-4 w-4' />,default: return <CheckCircle className='h-4 w-4' />;
    }const getImpactColor = (impact: string,) => {switch (impact) {case 'high':;
        return 'bg-red-100 text-red-800';
      case 'medium':;
        return 'bg-yellow-100 text-yellow-800';
      case 'low':;
        return 'bg-green-100 text-green-800';
      default:;
        return 'bg-gray-100 text-gray-800';
    }
  }const getCategoryIcon = (category: string,) => {switch (category) {case 'performance':;
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
  }const completedImprovements = improvements && improvements.filter(imp => imp && imp.status === 'completed';
  )return (<div className='space-y-6 p-6'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold text-gray-900'>;
          Performance Dashboard;
        </h1>;
        <Badge className='bg-green-100 text-green-800'>;
          {completedImprovements && completedImprovements.length} Improvements Completed;
        </Badge>;
      </div>;{/* Metrics Overview */}
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
          <CardContent>;<div className='text - 2xl font - bold'>{metrics.build_size}</div>;
            <p className='text - xs text - gray - 500'>Total build output</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;Page Count;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;<div className='text - 2xl font - bold'>{metrics.page_count}</div>;
            <p className='text - xs text - gray - 500'>Generated pages</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;Load Time;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;<div className='text - 2xl font - bold'>{metrics.load_time}s</div>;
            <p className='text - xs text - gray - 500'>Average page load</p>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className='pb - 2'>;
            <CardTitle className='text - sm font - medium text - gray - 600'>;Health Status;
            </CardTitle>;
          </CardHeader>;
          <CardContent>;<div className='flex items - center space - x-2'>;
              <CheckCircle className='h - 5 w - 5 text - green - 500' />;
              <span className='text - sm font - semibold text - green - 600'>;
<<<<<<< HEAD
=======
              <span className=text - sm font - semibold text - green - 600'>;
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>;

          </CardContent>;
        </Card>;
      </div>;

      {/* Completed Improvements */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
              <span className='text - sm font - semibold text - green - 600'>;Healthy;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Card>;
        <CardHeader>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <span className='text - sm font - semibold text - green - 600>;Healthy;
>>>>>>> origin/resolved-merge-conflicts
              </span>;</div>;
          </CardContent>;
        </Card>;
      </div>;{/* Completed Improvements */}
      <Card>;
        <CardHeader>;
                  {getCategoryIcon(improvement.category)}
                </div>;
                <div className='flex-1 min-w-0'>;
                  <div className='flex items-center justify-between'>;
                    <h3 className='text-sm font-medium text-gray-900'>;
                      {improvement.title}
                    </h3>;
<<<<<<< HEAD
                    <div className='flex items-center space-x-2'>;
          <CardTitle className='flex items-center space-x-2'>;
            <CheckCircle className='h-5 w-5 text-green-500' />;
=======
                    <div className='flex items-center space-x-2>;
          <CardTitle className=flex items-center space-x-2">;
            <CheckCircle className="h-5 w-5 text-green-500 />;
=======
      <Card>;
        <CardHeader>;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <CardTitle className="flex items-center space-x-2">;
            <CheckCircle className="h-5 w-5 text-green-500" />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <span>Completed Improvements</span>;
          </CardTitle>;
          <CardDescription>;
            Recent performance and functionality improvements that have been implemented;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;

                  {getCategoryIcon(improvement.category)}
                </div>;
                <div className='flex-1 min-w-0'>;
                  <div className='flex items-center justify-between'>;
                    <h3 className='text-sm font-medium text-gray-900'>;
                      {improvement.title}
                    </h3>;
                    <div className='flex items-center space-x-2'>;
                      <Badge className={getImpactColor(improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon(improvement.status)}

                  <p className='text-sm text-gray-600 mt-1'>

                    {improvement.description}
                  </p>;
                </div>;
              </div>;
            ))}

          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}

      <div className='flex space-x-4'>
        <Button onClick={() => window.open('/api/health/environment_blank')} variant='outline'>
          <Shield className='h-4 w-4 mr-2' />

          Check Health Status

        </Button>
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant='outline'>
          <TrendingUp className='h-4 w-4 mr-2' />
          Bundle Analysis
        </Button>
      </div>
    </div>
  )
},

export default PerformanceDashboard, 
<<<<<<< HEAD


=======
<<<<<<< HEAD
      <div className='flex space-x-4'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div className="flex space-x-4">;
        <Button onClick={() => window.open('/api/health/environment_blank')} variant="outline">;
          <Shield className="h-4 w-4 mr-2" />;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="flex space-x-4>;
>>>>>>> origin/resolved-merge-conflicts
                    </div>;
                  </div>;
                  <p className='text-sm text-gray-600 mt-1'>;
                    {improvement.description}
                  </p>;
                </div>;
              </div>;
            ))}</div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}</div>;
        </CardContent>;
<<<<<<< HEAD
      </Card>;{/* Action Buttons */}<div className='flex space-x-4'>;
        <Button onClick={() => window.open('/api/health/environment_blank')} variant='outline'>;
          <Shield className='h-4 w-4 mr-2' />;


=======
      </Card>;{/* Action Buttons */}<div className=flex space-x-4">;
        <Button onClick={() => window.open(/api/health/environment_blank')} variant="outline>;
          <Shield className=h-4 w-4 mr-2" />;
=======
      <div className="flex space-x-4">;
        <Button onClick={() => window.open('/api/health/environment_blank')} variant="outline">;
          <Shield className="h-4 w-4 mr-2" />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
}
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className='space - y-4'>;
            {completed_improvements.map (improvement => (
              <div;
<<<<<<< HEAD


=======
<<<<<<< HEAD
  )variant='outline';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )variant=outline';
>>>>>>> origin/resolved-merge-conflicts
        >;
          <TrendingUp className='h-4 w-4 mr-2' />;export default PerformanceDashboard;
export default PerformanceDashboard,export default PerformanceDashboard;
},export default PerformanceDashboard,<div className='flex space-x-4'>;
        <Button onClick={() => window.open('/api/health/environment_blank')} variant='outline'>;
          <Shield className='h-4 w-4 mr-2' />;
          Check Health Status;
        </Button>;
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant='outline'>;
          <TrendingUp className='h-4 w-4 mr-2' />;Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  )}export default PerformanceDashboard;<div className='space - y-4'>;
            {completed_improvements.map (improvement => (<div;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

          Check Health Status;
        </Button>;
        <Button onClick={() => alert('Bundle analysis available with: npm run build:analyze')} variant='outline'>;
          <TrendingUp className='h-4 w-4 mr-2' />;
          Bundle Analysis;
        </Button>;
      </div>;
    </div>;
  );
},;
export default PerformanceDashboard;

  );
};

export default PerformanceDashboard;