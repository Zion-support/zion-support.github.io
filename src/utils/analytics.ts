export const trackEvent = (eventName: string, properties?: Record<string, any>) =>
                {
    </string>if</string> (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

export const trackPageView = (pagePath: string, pageTitle?: string) =>
                {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle})
  }
}

export const initAnalytics = (measurementId: string) =>
                {
  if (typeof window !== 'undefined') {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true,
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', measurementId)
  }
}

// Declare global types
declare global {
    interface Window {
    gtag: (...args: any[]) => void,
    dataLayer: any[]
  }
}