

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { logErrorToProduction } from '@/utils/productionLogger';
import {;
  Zap,;
  Download,;
  Trash2,;
  RefreshCw,;
  Settings,;
  Activity,;
  Package,;
  Monitor,;
} from 'lucide-react';
interface QuickAction {;

  const actions: QuickAction[] = [
    // Performance Actions
    {
      id: 'enable-performance-monitor',
      label: 'Enable Performance Monitor',
      description: 'Show real-time performance metrics',
      icon: <Activity className="w-4 h-4" />,
      category: 'performance',
      action: () => {


    {
      id: 'enable-bundle-analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className="w-4 h-4" />,
      category: 'performance',
      action: () => {


    {
      id: 'clear-cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className="w-4 h-4" />,
      category: 'maintenance',
      dangerous: true,
      action: () => {
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name))
          })
        }

      }
    }
ursor/fix-website-loading-errors-and-merge-6662
        localStorage.clear()
        sessionStorage.clear()
        window.location.reload()
      }
    }
      },
    },
      id: 'enable - bundle - analyzer',
      label: 'Enable Bundle Analyzer',
      description: 'Monitor bundle size and chunks',
      icon: <Package className='w - 4 h - 4' />,
      category: 'performance',
      action: () => {




    {
      id: 'clear - cache',
      label: 'Clear Cache',
      description: 'Clear browser cache and storage',
      icon: <Trash2 className='w - 4 h - 4' />,
      category: 'maintenance',
      dangerous: true,
      action: () => {
        // Check condition
if ( {) {
  $2
}
          caches.keys ().then (names => {
            names.for_each (name => caches.delete (name));
          });
        }


      },
    },
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.reload()
      }},


    {
      label: 'Preload Critical Resources'
      description: 'Preload fonts, images, and critical assets'
      icon: <Zap className='w-4 h-4' />
      category: 'performance'
      action: () => {
        // Preload critical fonts
        const criticalFonts = [


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
      }},

    {
      id: 'download-performance-report',
      label: 'Download Performance Report',
      description: 'Export current performance metrics',
      icon: <Download className="w-4 h-4" />,
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



  const categorizedActions = {
    performance: actions.filter(a => a.category === 'performance'),
    development: actions.filter(a => a.category === 'development'),
    maintenance: actions.filter(a => a.category === 'maintenance')},

  const categoryColors = {
    performance: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    development: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
    maintenance: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200'},


  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button


          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Settings className="w-4 h-4 mr-2" />



          Quick Actions
      </div>
    )
          className='bg-background/80 backdrop-blur-sm'        >;
          <Settings className='w-4 h-4 mr-2' />;
          Quick Actions;
        </Button>;
      </div>;
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Quick Actions
            </CardTitle>
            <Button



              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0"
            >


              ✕
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          {Object.entries(categorizedActions).map(([category, categoryActions]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={categoryColors[category as keyof typeof categoryColors]} variant="outline">
                  {category}
                </Badge>
              </div>
              <div className="space-y-2">
                {categoryActions.map((action) => (
                  <div key={action.id} className="space-y-1">
                    <Button
                      variant={action.dangerous ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => executeAction(action.id, action.action)}
                      disabled={isProcessing === action.id}
                      className="w-full justify-start h-auto p-3"
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="mt-0.5">
                          {isProcessing === action.id ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            action.icon
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-sm">{action.label}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {action.description}

                          </div>;
                        </div>;
                      </div>;
                    </Button>;
                  </div>;
                ))}
              </div>;
            </div>;
          ))}
        </CardContent>;
      </Card>;
    </div>;
  );
} ;

