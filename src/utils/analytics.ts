// Analytics utility functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }

  // Custom analytics (you can replace with your preferred analytics service)
  console.log('Analytics Event:', eventName, properties);
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  console.log('Page View:', pagePath, pageTitle);
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    timestamp: new Date().toISOString(),
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
    timestamp: new Date().toISOString(),
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth: depth,
    timestamp: new Date().toISOString(),
  });
};

// Initialize analytics
export const initAnalytics = () => {
  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID'}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', process.env.REACT_APP_GA_ID || 'GA_MEASUREMENT_ID');
};