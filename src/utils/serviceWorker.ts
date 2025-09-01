// Service Worker Registration Utility
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    const swUrl = '/sw.js';
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available
              }
            });
          }
        });
      })
      .catch(() => {
        // Silent fail
      });
  }
}

export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch(() => {
        // Silent fail
      });
  }
}
