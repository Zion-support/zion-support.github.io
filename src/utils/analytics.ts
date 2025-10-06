/**
 * Analytics utility for tracking events and performance
 */

export const analytics = {
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Analytics:', { event, category, action, label, value });
    // In a real implementation, this would send data to analytics service
  },
  
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
    // In a real implementation, this would send performance data to analytics
  }
};
