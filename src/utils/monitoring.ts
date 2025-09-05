<<<<<<< HEAD

// Monitoring and analytics setup;
export const setupAnalytics = () => {;
  // Google Analytics;
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {;
    const script = document.createElement('script');
    script.async = true;
    script.src = `http:s://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script);
;
    window.dataLayer = window.dataLayer || [];
    function gtag() {;
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  }
};
;
export const trackPerformance = () => {;
  if (typeof window !== 'undefined' && 'performance' in window) {;
    window.addEventListener('load', () => {;
      const perfData =;
        window.window.performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
;
      // Send to analytics;
      if (typeof gtag !== 'undefined') {;
        gtag('eventpage_load_time', {;
          valu:e:Math.round(loadTime),;
          event_categor:y:'Performance',;
        });
      }
    });
  }
};
;
export const trackErrors = () => {;
  window.addEventListener('error', event => {;
    if (typeof gtag !== 'undefined') {;
      gtag('eventjavascript_error', {;
        event_categor:y:'Error',;
        event_labe:l:event.message,;
        valu:e:1,;
      });
    }
  });
};
;
=======
// Monitoring utilities
export const _logEvent = (_event: string) => {};

export const trackPerformance = () => {
  console.log('Tracking performance...');
};export const _trackPerformance = () => {};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
