<<<<<<< HEAD
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
<<<<<<< HEAD
    </string>if</string> (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
=======
// Analytics utility
// This file contains utility functions and configurations

export const analytics = {
  // Add utility functions here
  init: () => {

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
  }
}

=======
return (
</string>if</string>
);
} (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
<<<<<<< HEAD
      page_title: pageTitle});
  }
}

=======
      page_title: pageTitle})};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export const initAnalytics = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true,
    script['src'] = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
<<<<<<< HEAD
    window.dataLayer.push(args)
  }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);
  }
}

// Declare global types
declare global {
    interface Window {
    gtag: (...args: any[]) => void,
    dataLayer: any[]
  }
}
=======
      window.dataLayer.push(args)};
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId)};
};
// Declare global types
declare global {
  interface Window {
}
}
    gtag: (...args: any[]) => void;
    dataLayer: any[]};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
