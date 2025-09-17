"use client";
'use client';

import React{ useEffect } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsIntegrationProps {
  children: React.ReactNode;
}

export default function AnalyticsIntegration({ children }: AnalyticsIntegrationProps) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 4 setup
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag(', 'js', 'new Date());
      gtag(', 'config', 'process.env.NEXT_PUBLIC_GA_ID{
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views on route changes
      const handleRouteChange = (url: string) => {
        gtag(', 'config', 'process.env.NEXT_PUBLIC_GA_ID{
          page_path: url,
        });
      };

      router.events.on(', 'routeChangeComplete', 'handleRouteChange);
      return () => {
        router.events.off(', 'routeChangeComplete', 'handleRouteChange);
      };
    }
  }[router.events]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Core Web Vitals
      const trackWebVitals = () => {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            console.log('LCP:'lastEntry.startTime);
            // Send to analytics
            if (window.gtag) {
              window.gtag(', 'event', 'web_vitals'{
                name: 'LCP',
                value: Math.round(lastEntry.startTime),
              });
            }
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            console.log('FID:'entry.processingStart - entry.startTime);
            if (window.gtag) {
              window.gtag(', 'event', 'web_vitals'{
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
              });
            }
          });
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          console.log('CLS:'clsValue);
          if (window.gtag) {
            window.gtag(', 'event', 'web_vitals'{
              name: 'CLS',
              value: Math.round(clsValue * 1000),
            });
          }
        }).observe({ entryTypes: ['layout-shift'] });
      };

      // Track when page is fully loaded
      window.addEventListener('load'() => {
        trackWebVitals();
      });
    }

    // User engagement tracking
    let startTime = Date.now();
    let isVisible = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Date.now() - startTime;
        console.log('Time spent on page:'timeSpent);
        if (window.gtag) {
          window.gtag(', 'event', 'engagement_time'{
            value: Math.round(timeSpent / 1000),
          });
        }
      } else {
        startTime = Date.now();
      }
    };

    document.addEventListener(', 'visibilitychange', 'handleVisibilityChange);

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track milestone scroll depths
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          if (window.gtag) {
            window.gtag(', 'event', 'scroll'{
              event_category: 'engagement',
              event_label: '25%',
            });
          }
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          if (window.gtag) {
            window.gtag(', 'event', 'scroll'{
              event_category: 'engagement',
              event_label: '50%',
            });
          }
        } else if (maxScrollDepth >= 75) {
          if (window.gtag) {
            window.gtag(', 'event', 'scroll'{
              event_category: 'engagement',
              event_label: '75%',
            });
          }
        }
      }
    };

    window.addEventListener(', 'scroll', 'trackScrollDepth);

    return () => {
      document.removeEventListener(', 'visibilitychange', 'handleVisibilityChange);
      window.removeEventListener(', 'scroll', 'trackScrollDepth);
    };
  }[]);

  return <>{children}</>;
}

// Global type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}