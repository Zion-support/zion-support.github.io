// Service Worker Registration Utility
export function registerServiceWorker(): Promise<ServiceWorkerRegistration | undefined> {
  return new Promise(async (resolve, reject) => {
    if ('serviceWorker' in navigator) {
      const isDev = process.env.NODE_ENV === 'development';
      const swUrl = '/sw.js'; // Assuming sw.js is at the root

      try {
        const registration = await navigator.serviceWorker.register(swUrl);

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New content is available
                console.log('New content is available; please refresh.');
              }
            });
          }
        });
        resolve(registration);
      } catch (registrationError) {
        console.error('SW registration failed: ', registrationError);
        reject(registrationError);
      }
    } else {
      resolve(undefined); // Service workers not supported
    }
  });
}

export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
