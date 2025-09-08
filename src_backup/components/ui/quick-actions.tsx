import { logErrorToProduction } from '@/utils/productionLogger';
import {;
  Zap,;
  Download,;
  Trash2,;
  RefreshCw,;
  Settings,;
  Activity,;
  Package,;
  Monitor,;'
} from 'lucide-react';
interface QuickAction {;

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { logErrorToProduction } from '@/utils/productionLogger'
import {
  Zap
  Download
  Trash2
  RefreshCw
  Settings
  Activity
  Package
  Monitor
} from 'lucide-react'

  id: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { logErrorToProduction  } from '@/utils/productionLogger';
import {Zap,Download,Trash2,RefreshCw,Settings,Activity,Package,Monitor} from 'lucide-react';
interface QuickAction  {id: string;
  label: string;
  description: string;
  icon: React && React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';setIsProcessing(actionId)try {await action()} catch (error) {logErrorToProduction(`Failed to execute action ${actionId}:`, {data: error;
      })import { Zap;
  Download;
  Trash2;
  RefreshCw;
  Settings;
  Activity;
  Package;
  Monitor;
 } from 'lucide-react';
interface QuickAction  {id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';


;
<<<<<<< HEAD
=======
  category: 'performance' | development | 'maintenance';
>>>>>>> origin/resolved-merge-conflicts
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const executeAction = async (actionId: string, action: () => void) => {;



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  label: string,
  description: string;
  icon: React.ReactNode;
  action: () => void;'
  category: 'performance' | 'development' | 'maintenance';

    setIsProcessing(actionId);    try {
      await action()
    } catch (error) {
      logErrorToProduction(`Failed to execute action ${actionId}:`, {
        data: error
      })
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react;
import { use_auth } from @/hooks / use_auth';
import { Button } from '@/components / ui / button;
import { Card, CardContent, CardHeader, CardTitle } from @/components / ui / card';
import { Badge } from '@/components / ui / badge;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from 'react';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { logErrorToProduction } from '@/utils / production_logger';
import {}
  Zap,
  Download,
  Trash2,
  RefreshCw,
  Settings,
  Activity,
  Package,
  Monitor,';
<<<<<<< HEAD



=======
<<<<<<< HEAD
} from 'lucide-react';
  category: 'performance' | 'development' | 'maintenance';dangerous?: boolean;
export function QuickActions() {const { user } = useAuth()const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== 'production' |isAdmin;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
} from 'lucide-react';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from lucide-react;
  category: 'performance' | development | 'maintenance';dangerous?: boolean;
export function QuickActions() {const { user } = useAuth()const isAdmin = user?.userType === admin |user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== production |isAdmin;
>>>>>>> origin/resolved-merge-conflicts
  if (!isAllowed) {return null;
  }const [isVisible, setIsVisible] = useState(false)const [isProcessing, setIsProcessing] = useState<string | null>(null)const executeAction  = async (actionId: string, action: () => void) => {setIsProcessing(actionId)try {await action()} catch (error) {logErrorToProduction(`Failed to execute action ${actionId}:`, {data: error;
      })import { use_auth  } from '@/hooks / use_auth';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { logErrorToProduction  } from '@/utils / production_logger';
import { Zap,Download,Trash2,RefreshCw,Settings,Activity,Package,Monitor} from 'lucide-react';
interface QuickAction  {id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'performance' | 'development' | 'maintenance';
<<<<<<< HEAD
=======
  category: 'performance' | development | 'maintenance';
>>>>>>> origin/resolved-merge-conflicts



=======
} from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  label: string,
  description: string;
  icon: React.ReactNode;
  action: () => void;'
  category: 'performance' | 'development' | 'maintenance';

    } finally {

      setIsProcessing(null)
    }
  }
'
      id: 'enable - performance - monitor',

import React, { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import {logErrorToProduction} from '@/utils/productionLogger',;

import { Zap, Download, Trash2, RefreshCw, Settings, Activity, Package, Monitor } from 'lucide-react';
interface QuickAction {;
  id: string,;
  label: string,,
  description: string,;
  icon: React.ReactNode,;
  action: () => void,;'
  category: 'performance' | 'development' | 'maintenance',;
  dangerous?: boolean;
}
;
export function QuickActions() { return null; }
  const { user } = useAuth(),;'
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;'
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin,;
  if (!isAllowed) {;
    return null;
  }
;
  const [isVisible, setIsVisible] = useState(false),;
  const [isProcessing, setIsProcessing] = useState<string | null>(null),;
  const executeAction = async (actionId: string, action: () => void) => {;
    setIsProcessing(actionId),;
    try {;
      await action();
    } catch (error) {;`
      logErrorToProduction(`Failed to execute action ${actionId}:`, { data: error });
    } finally {;
      setIsProcessing(null);
    }
  },

  const actions: QuickAction[] = [

    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',

      description: 'Show real-time performance metrics',
      icon: <Activity className='w-4 h-4' />,'
      category: 'performance',

    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className='w-4 h-4' />,
      category: 'performance',
      action: () => {

    {

      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className='w-4 h-4' />,

      category: 'maintenance',
      dangerous: true,
      action: () => {'
        if ('caches' in window) {}
          caches.keys().then(names => {}
            names.forEach(name => caches.delete(name))
          })
        }

      },
    },

        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      },

    {
      id: 'preload-critical-resources',
      label: 'Preload Critical Resources',
      description: 'Preload fonts, images, and critical assets',
      icon: <Zap className='w-4 h-4' />,
      category: 'performance',
      action: () => {
        // Preload critical fonts
        const criticalFonts = [
          '/fonts/inter-var.woff2/fonts/cal-sans.woff2'
        ],
        
        criticalFonts.forEach(font => {
          const link = document.createElement('link'),
          link.rel = 'preload',
          link.as = 'font',
          link.type = 'font/woff2',
          link.crossOrigin = 'anonymous',
          link.href = font,
          document.head.appendChild(link)
        }),

        // Preload critical images
        const criticalImages = [
          '/logos/zion-logo.png/images/hero-bg.webp'
        ],
        
        criticalImages.forEach(img => {
          const link = document.createElement('link'),
          link.rel = 'preload',
          link.as = 'image',
          link.href = img,
          document.head.appendChild(link)
        })
      },
    {
      id: 'download-performance-report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className='w-4 h-4' />,
      category: 'development',
      action: () => {
        const metrics = {
          timestamp: new Date().toISOString(),
          performance: window.window.window.performance.getEntriesByType('navigation')[0],
          resources: window.window.window.performance.getEntriesByType('resource').slice(0, 20),
          memory: (performance as any).memory || {},
          userAgent: navigator.userAgent,
          screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
          }
        },

  dangerous?: boolean;

          '/logos/zion-logo.png/images/hero-bg.webp'
        ],
        
        criticalImages.forEach(img => {'
          const link = document.createElement('link'),'
          link.rel = 'preload','
          link.as = 'image',
          link.href = img,
          document.head.appendChild(link)
        })
      },
    {'
      id: 'download-performance-report','
      label: 'Download Performance Report','
      description: 'Export current performance metrics','
      icon: <Download className='w-4 h-4' />,'
      category: 'development',
      action: () => {}
        const metrics = {}
          timestamp: new Date().toISOString(),'
          performance: window.window.window.performance.getEntriesByType('navigation')[0],'
          resources: window.window.window.performance.getEntriesByType('resource').slice(0, 20),
          memory: (performance as any).memory || {},
          userAgent: navigator.userAgent,
          screen: {}
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth;
          }
        },

        const blob = new Blob([JSON.stringify(metrics, null, 2)], {'
          type: 'application/json'
        }),
        
        const url = URL.createObjectURL(blob),'
        const a = document.createElement('a'),
        a.href = url,`
        a.download = `performance-report-${Date.now()}.json`,
        document.body.appendChild(a),
        a.click(),
        document.body.removeChild(a),
        URL.revokeObjectURL(url)
      },
    {'
      id: 'test-error-boundary','
      label: 'Test Error Boundary','
      description: 'Trigger an error to test Sentry integration','
      icon: <Monitor className='w-4 h-4' />,'
      category: 'development',
      dangerous: true,

    {

      id: 'refresh-app',
      label: 'Hard Refresh',
      description: 'Force reload with cache bypass',
      icon: <RefreshCw className='w-4 h-4' />,

      category: 'maintenance',
      action: () => {}
        window.location.reload()
      }],

  const categorizedActions = {'
    performance: actions.filter(a => a.category === 'performance'),'
    development: actions.filter(a => a.category === 'development'),'
    maintenance: actions.filter(a => a.category === 'maintenance')},

  const categoryColors = {'
    performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200','
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200','
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},

        const blob = new Blob([JSON && JSON.stringify(metrics, null, 2)], {;

          type: 'application/json',;
        });

        const url = URL && URL.createObjectURL(blob);'
        const a = document && document.createElement('a');
        a && a.href = url;`
        a && a.download = `performance-report-${Date && Date.now()}.json`;
        document && document.body.appendChild(a);
        a && a.click();
        document && document.body.removeChild(a);
        URL && URL.revokeObjectURL(url);
      },;
    },;

      category: 'development',;
      dangerous: true,;
      action: () => {;
        throw new Error(;'
          'Test error for Sentry integration - this is intentional!';
        );
      },;
    },;

      category: 'maintenance',;
      action: () => {;
        window && window.location.reload();
      },;
    },;
  ];

  const categoryColors = {;
    performance:;'
      'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',;
    development:;'
      'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',;

  if (!isVisible) {;

  if (!isVisible) {

    return (
      <div className='fixed bottom-4 left-4 z-50'>
        <Button

          variant='outline'

          size='sm'
          onClick={() => setIsVisible(true)}'
          className='bg-background/80 backdrop-blur-sm'
        >'
          <Settings className='w-4 h-4 mr-2' />

          Quick Actions
        </Button>
      </div>
    )
<<<<<<< HEAD


=======
<<<<<<< HEAD
  category: 'performance' | 'development' | 'maintenance';dangerous?: boolean;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  category: 'performance' | development | 'maintenance';dangerous?: boolean;
>>>>>>> origin/resolved-merge-conflicts
export /**;
 * QuickActions - Function description;
 */;
function QuickActions() {const { user } = use_auth ()const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const is_allowed = process.env.NODE_ENV !== 'production' || is_admin;
  // Check condition;
if ( {) {$2;
}
    return null;
  }
  const [is_visible, setIsVisible] = useState (false)const [is_processing, setIsProcessing] = useState < string | null>(null)const execute_action = async (action_id: string, action: () => void) => {setIsProcessing (action_id)try {await action ()} catch (error) {logErrorToProduction (`Failed to execute action ${action_id}:`, {data: error})} finally {setIsProcessing(null)}
  }id: 'enable - performance - monitor',import React, { useState } from 'react',import { useAuth } from '@/hooks/useAuth',import { Button } from '@/components/ui/button',import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',import { Badge } from '@/components/ui/badge',import {logErrorToProduction} from '@/utils/productionLogger',import { Zap, Download, Trash2, RefreshCw, Settings, Activity, Package, Monitor  } from 'lucide-react';
interface QuickAction  {id: string,label: string,description: string,icon: React.ReactNode,action: () => void,category: 'performance' | 'development' | 'maintenance',dangerous?: boolean;
}export function QuickActions() {const { user } = useAuth(),const isAdmin = user?.userType === 'admin' || user?.role === 'admin',const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin,if (!isAllowed) {return null;
  }const [isVisible, setIsVisible] = useState(false),const [isProcessing, setIsProcessing] = useState<string | null>(null),const executeAction = async (actionId: string, action: () => void) => {setIsProcessing(actionId),try {await action()} catch (error) {logErrorToProduction(`Failed to execute action ${actionId}:`, { data: error })} finally {setIsProcessing(null)}
  },const actions: QuickAction[] = [;
    // Performance Actions;
    {id: 'enable-performance-monitor',label: 'Enable Performance Monitor',description: 'Show real-time performance metrics',icon: <Activity className='w-4 h-4' />,category: 'performance',action: () => {id: 'enable-bundle-analyzer',label: 'Enable Bundle Analyzer',description: 'Monitor bundle size and chunks',icon: <Package className='w-4 h-4' />,category: 'performance',action: () => {id: 'clear-cache',label: 'Clear Cache',description: 'Clear browser cache and storage',icon: <Trash2 className='w-4 h-4' />,category: 'maintenance',dangerous: true,action: () => {if ('caches' in window) {caches.keys().then(names => {names.forEach(name => caches.delete(name))})}},localStorage.clear(),sessionStorage.clear(),window.location.reload()},{id: 'preload-critical-resources';
      label: 'Preload Critical Resources';
      description: 'Preload fonts, images, and critical assets';
      icon: <Zap className='w-4 h-4' />;
      category: 'performance';
      action: () => {// Preload critical fonts;
        const criticalFonts = [;
  dangerous?: boolean;// Preload critical images;
        const criticalImages = [;
          '/logos/zion-logo.png/images/hero-bg.webp';
        ],criticalImages.forEach(img => {const link = document.createElement('link'),link.rel = 'preload',link.as = 'image',link.href = img,document.head.appendChild(link)})},{id: 'download-performance-report',label: 'Download Performance Report',description: 'Export current performance metrics',icon: <Download className='w-4 h-4' />,category: 'development',action: () => {const metrics = {timestamp: new Date().toISOString(),performance: window.window.window.performance.getEntriesByType('navigation')[0],resources: window.window.window.performance.getEntriesByType('resource').slice(0, 20),memory: (performance as any).memory || {},userAgent: navigator.userAgent,screen: {width: screen.width,height: screen.height,colorDepth: screen.colorDepth;
          }
        },const blob = new Blob([JSON.stringify(metrics, null, 2)], {type: 'application/json';
        }),const url = URL.createObjectURL(blob),const a = document.createElement('a'),a.href = url,a.download = `performance-report-${Date.now()}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(url)},{id: 'test-error-boundary',label: 'Test Error Boundary',description: 'Trigger an error to test Sentry integration',icon: <Monitor className='w-4 h-4' />,category: 'development',dangerous: true,action: () => {throw new Error('Test error for Sentry integration - this is intentional!')},{id: 'refresh-app',label: 'Hard Refresh',description: 'Force reload with cache bypass',icon: <RefreshCw className='w-4 h-4' />,category: 'maintenance',action: () => {window.location.reload()}],const categorizedActions = {performance: actions.filter(a => a.category === 'performance'),development: actions.filter(a => a.category === 'development'),maintenance: actions.filter(a => a.category === 'maintenance')},const categoryColors = {performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},const blob = new Blob([JSON && JSON.stringify(metrics, null, 2)], {type: 'application/json'})const url = URL && URL.createObjectURL(blob)const a = document && document.createElement('a')a && a.href = url;
        a && a.download = `performance-report-${Date && Date.now()}.json`;
        document && document.body.appendChild(a)a && a.click()document && document.body.removeChild(a)URL && URL.revokeObjectURL(url)},{id: 'test-error-boundary',label: 'Test Error Boundary',description: 'Trigger an error to test Sentry integration',icon: <Monitor className='w-4 h-4' />,category: 'development',dangerous: true,action: () => {throw new Error('Test error for Sentry integration - this is intentional!';
        )},{id: 'refresh-app',label: 'Hard Refresh',description: 'Force reload with cache bypass',icon: <RefreshCw className='w-4 h-4' />,category: 'maintenance',action: () => {window && window.location.reload()}];const categorizedActions = {performance: actions && actions.filter(a => a && a.category === 'performance'),development: actions && actions.filter(a => a && a.category === 'development'),maintenance: actions && actions.filter(a => a && a.category === 'maintenance')}const categoryColors = {performance:;
      'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',development:;
      'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',maintenance:;
      'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'}if (!isVisible) {id: 'download-performance-report',label: 'Download Performance Report',description: 'Export current performance metrics',icon: <Download className='w-4 h-4' />,category: 'development',action: () => {const metrics = {timestamp: new Date().toISOString(),performance: window.window.window.performance.getEntriesByType('navigation')[0],resources: window.window.window.performance.getEntriesByType('resource').slice(0, 20),memory: (performance as any).memory || {},userAgent: navigator.userAgent,screen: {width: screen.width,height: screen.height,{id: 'test-error-boundary',label: 'Test Error Boundary',description: 'Trigger an error to test Sentry integration',icon: <Monitor className='w-4 h-4' />,category: 'development',dangerous: true,action: () => {id: 'refresh-app',label: 'Hard Refresh',description: 'Force reload with cache bypass',icon: <RefreshCw className='w-4 h-4' />,category: 'maintenance',action: () => {window.location.reload()dangerous?: boolean;
export function QuickActions() {const { user } = useAuth()const isAdmin  = null;if (!isVisible) {return (<div className='fixed bottom-4 left-4 z-50'>;
        <Button;
          variant='outline';
          size='sm';
          onClick={() => setIsVisible(true)}
          className='bg-background/80 backdrop-blur-sm';
        >;
          <Settings className='w-4 h-4 mr-2' />;
          Quick Actions;
        </Button>;
      </div>;
    )className='bg-background/80 backdrop-blur-sm'        >;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Settings className='w-4 h-4 mr-2' />;
          Quick Actions;
        </Button>;
      </div>;
    );

  }

              <Settings className='w-4 h-4 mr-2' />
              Quick Actions;
            </CardTitle>

              size='sm'
              onClick={() => setIsVisible(false)}'
              className='h-6 w-6 p-0'
            >

              ✕
            </Button>
          </div>
        </CardHeader>

        <CardContent className='pt-0 space-y-4'>
          {Object.entries(categorizedActions).map(([category, categoryActions]) => (
            <div key={category}>'
              <div className='flex items-center gap-2 mb-2'>'
                <Badge className={categoryColors[category as keyof typeof categoryColors]} variant='outline'>
                  {category}
                </Badge>
<<<<<<< HEAD


=======
<<<<<<< HEAD
              className='h-6 w-6 p-0';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className=h-6 w-6 p-0;
>>>>>>> origin/resolved-merge-conflicts
            >;
              ✕;
            </Button>;
          </div>;
        </CardHeader>;
        <CardContent className='pt-0 space-y-4'>;
          {Object.entries(categorizedActions).map(([category, categoryActions]) => (<div key={category}>;
              <div className='flex items-center gap-2 mb-2'>;
                <Badge className={categoryColors[category as keyof typeof categoryColors]} variant='outline'>;
                  {category}
                </Badge>;
              </div>;
              <div className='space-y-2'>;
                {categoryActions.map((action) => (<div key={action.id} className='space-y-1'>;
                    <Button;
                      variant={action.dangerous ? 'destructive' : 'outline'}
                      size='sm';
                      onClick={() => executeAction(action.id, action.action)}
                      disabled={isProcessing === action.id}
                      className='w-full justify-start h-auto p-3';
                    >;
                      <div className='flex items-start gap-3 w-full'>;
                        <div className='mt-0.5'>;
                          {isProcessing === action.id ? (<RefreshCw className='w-4 h-4 animate-spin' />;
                          ) : (action.icon;
                          )}
                        </div>;
<<<<<<< HEAD
                        <div className='flex-1 text-left'>;
                          <div className='font-medium text-sm'>{action.label}</div>;
                          <div className='text-xs opacity-70 mt-1'>;
=======
                        <div className="flex-1 text-left">;
                          <div className=font-medium text-sm>{action.label}</div>;
                          <div className="text-xs opacity-70 mt-1">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className='space-y-2'>
                {categoryActions.map((action) => ('
                  <div key={action.id} className='space-y-1'>
                    <Button'
                      variant={action.dangerous ? 'destructive' : 'outline'}'
                      size='sm'
                      onClick={() => executeAction(action.id, action.action)}
                      disabled={isProcessing === action.id}'
                      className='w-full justify-start h-auto p-3'
                    >'
                      <div className='flex items-start gap-3 w-full'>'
                        <div className='mt-0.5'>
                          {isProcessing === action.id ? ('
                            <RefreshCw className='w-4 h-4 animate-spin' />
                          ) : (
                            action.icon;
                          )}
                        </div>'
                        <div className='flex-1 text-left'>'
                          <div className='font-medium text-sm'>{action.label}</div>'
                          <div className='text-xs opacity-70 mt-1'>
                            {action.description}
                          </div>;
                        </div>;
                      </div>;
                    </Button>;
                  </div>;
                ))}
              </div>;

        </CardContent>;
      </Card>;
    </div>;
  );

            )
          )}
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
    </div>)}
}))}
        </CardContent>;
      </Card>;
    </div>;
  )
  );
=======
  );
>>>>>>> origin/resolved-merge-conflicts
