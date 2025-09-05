// Performance monitoring utilities
export const measurePerformance = ("name": string, "fn": () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now()};
export const reportWebVitals = ("metric": an y) => {
  // Send to analytics service
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      "event_category": 'Web Vitals',
      "event_label": metri c.id,
      "value": Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      "non_interaction": tru e})}
};
export const lazyLoadImage = ("img": HTMLImageElemen t) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;';';
          image.classList.remove('lazy');
          observer.unobserve(image)}
      }
    })});
  ';
  observer.observe(img)};';';
export const measurePerformance = (name: string,fn: () => void) => { const start = performance.now(); fn(); const end = performance.now()};; export const reportWebVitals = (metric: an y) => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event',metric.name,{ event_category: 'Web Vitals',event_label: metri c.id,value: Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),non_interaction: tru e,})} };; export const lazyLoadImage = (img: HTMLImageElemen t) => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { const image = entry.target as HTMLImageElement; if (image.dataset.src) { image.src = image.dataset.src;';'; image.classList.remove('lazy'); observer.unobserve(image)} } })}); '; observer.observe(img)};';';
origin/cursor/automate-test-improve-and-merge-code-eafe
cursor/website-audit-and-update-with-deployment-76dc