// Enhanced Analytics Utility
export const analytics = {
  trackCustomEvent: (category: string, action: string, label?: string, value?: number, metadata?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics event:', { category, action, label, value, metadata });
    }
  },
  trackPerformance: (name: string, duration: number, category: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metric:', { name, duration, category });
    }
  }
};