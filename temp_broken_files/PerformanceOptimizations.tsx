<<<<<<< HEAD:temp_broken_files/PerformanceOptimizations.tsx
import React from 'react';
const PerformanceOptimizations: React.FC = () => {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.webp" as="image" />
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/api/health" />
      <link rel="prefetch" href="/services" />
      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load'() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('Page Load Time:'perfData.loadEventEnd - perfData.'loadEventStart', 'ms');
                  console.log('DOM Content Loaded:'perfData.domContentLoadedEventEnd - perfData.'domContentLoadedEventStart', 'ms');
                }
              });
            }
            // Lazy loading for images
            if ('IntersectionObserver' in window) {
              const imageObserver = new IntersectionObserver((entriesobserver) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                  }
                });
              });
              document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
              });
            }
          `,
        }}
      />
    </>
  );
};


export default PerformanceOptimizations;
=======
import React from "react";

const function PerformanceOptimizations() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function PerformanceOptimizations() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function PerformanceOptimizations() {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/PerformanceOptimizations.tsx
