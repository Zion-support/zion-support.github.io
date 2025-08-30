// Service Worker Registration Utility
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Use development service worker in development mode
      const isDev = import.meta.env.DEV;
      const swUrl = isDev ? '/sw-dev.js' : '/sw.js';

<<<<<<< HEAD
      // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
=======
      // // // // // // // console.log(`Registering service worker: ${swUrl} (${isDev ? 'dev' : 'prod'})`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
<<<<<<< HEAD
          // // // console.log('SW registered: ', registration);
=======
          // // // // // // // console.log('SW registered: ', registration);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
<<<<<<< HEAD
                  // // // console.log('New content is available; please refresh.');

=======
                  // // // // // // // console.log('New content is available; please refresh.');
                }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
              });

          });
        })
        .catch((registrationError) => {
<<<<<<< HEAD
          // // // console.error('SW registration failed: ', registrationError);
=======
          // // // // // // // console.error('SW registration failed: ', registrationError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        });
    });


export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
<<<<<<< HEAD
        // // // console.error(error.message);
=======
        // // // // // // // console.error(error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      });
}}}}}}