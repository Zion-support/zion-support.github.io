
// Monitoring and analytics setup
export const setupAnalytics = () => {
  // Google Analytics
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    const script = document.createElement($2);
    script.async = $2;
    script.src = $2;
    document.head.appendChild($2);
    window.dataLayer = $2;
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date()),
    gtag('config', process.env.NEXT_PUBLIC_GA_ID)
  }
},

export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = $2;
      const loadTime = $2;
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag($2);
          event_categor: 'Performance'
        })
      }
    })
  }
},

export const trackErrors = () => {
  window.addEventListener('error', event => {
    if (typeof gtag !== 'undefined') {
      gtag('eventjavascript_error', {
        event_categor: 'Error',
        event_labe: l: event.message,
        valu: 1})
    }
  })
},

