
// Service Worker Registration Utility;
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    const isDev = process.env.NODE_ENV === 'development';
    const swUrl = isDev ? '/sw.js' : '/sw.js';

    navigator.serviceWorker
      .register(swUrl)
      .then(registration: unknown {
        // Handle updates
        registration.addEventListener'updatefound': unknown, (: unknown {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener'statechange': unknown, (: unknown {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
                console.log('New content is available; please refresh.');
              }
            });
          }
        });
      })
      .catch(registrationError: unknown {
        console.error('SW registration failed: ', registrationError);
      });
  }
}
;
export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration: unknown {
        registration.unregister();
      })
      .catch(error: unknown {
        console.error(error.message);
      });
  }
}


