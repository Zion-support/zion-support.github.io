if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; })}
<<<<<<< HEAD:backup-merge-conflicts/performance-monitor.js.backup
=======
// Performance monitoring
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/utils/performance-monitor.js
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
<<<<<<< HEAD:backup-merge-conflicts/performance-monitor.js.backup
=======
    console.log('Page load "time": ', perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/utils/performance-monitor.js
if (typeof window !== 'undefined') { window.addEventListener('load',() => { const perfData = performance.getEntriesByType('navigation')[0]; console.log('Page load time:',perfData.loadEventEnd - perfData.loadEventStart)})}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
