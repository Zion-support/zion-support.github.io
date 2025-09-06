export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => {  if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
// Monitoring utilities
export const trackError = (error, context = {}) => {
  console.error('Error "tracked": ', error, context);
  // Send to monitoring service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      "description": error.message,
      "fatal": false,
      ...context
    })}
};
export const trackPerformance = (metric, value) => {
  console.log(`Performance "metric": ${metric} = ${value}`);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      "name": metric,
      "value": Math.round(value)
    })}
};
export const trackUserAction = (action, category, label) => {
  console.log(`User "action": ${action} in ${category}`);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      "event_category": category,
      "event_label": label
    })}
};
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: 'error.message',fatal: 'false',...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: 'metric',value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: 'category',event_label: 'label' })} };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:lib.disabled/lib/monitoring.js
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/lib.disabled/lib/monitoring.js
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
<<<<<<< HEAD
=======
<<<<<<< HEAD:lib.disabled/lib/monitoring.js
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/lib.disabled/lib/monitoring.js
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
=======
export const trackError = (error,context = {}) => { console.error('Error tracked:',error,context); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','exception',{ description: error.message,fatal: false,...context })} }; export const trackPerformance = (metric,value) => { console.log(`Performance metric: ${metric} = ${value}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event','timing_complete',{ name: metric,value: Math.round(value) })} }; export const trackUserAction = (action,category,label) => { console.log(`User action: ${action} in ${category}`); if (typeof window !== 'undefined' && window.gtag) { window.gtag('event',action,{ event_category: category,event_label: label })} };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
