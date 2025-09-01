
// Service Worker Registration Utility
export function registerServiceWorker(...args: any[]): any {

  if ('serviceWorker' in navigator) {
    const isDev = process.env.NODE_ENV === 'development';
    const swUrl = isDev ? '/sw.js' : '/sw.js';


      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
                  console.log('New content is available; please refresh.');
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.error('SW registration failed: ', registrationError);
        });
  }
}

export function unregisterServiceWorker(...args: any[]): any {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}


