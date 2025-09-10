/* global confirm */
// Service Worker Registration Utility
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    const isDev = process.env.NODE_ENV === 'development';
    const swUrl = isDev ? '/sw.js' : '/sw.js';

    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update notification
                if (confirm('New content is available. Reload to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch(error => {
        // // console.error('Service worker registration failed:', error);
      });
  }
}

export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}