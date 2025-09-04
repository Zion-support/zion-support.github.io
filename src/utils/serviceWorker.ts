<<<<<<< HEAD
export const serviceWorker = {};

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

export default serviceWorker;
=======
// comment
export const serviceWorker = {}

export default serviceWorker
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-5599
