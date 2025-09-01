// Service Worker Registration Utility
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
<<<<<<< HEAD

    
    
=======
    
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          
          if (newWorker) {
<<<<<<< HEAD

=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available
              }
            })}
        })})
<<<<<<< HEAD
      .catch(registrationError => {

        // console.error('SW registration failed: ', registrationError)})}

export function unregisterServiceWorker(): void {

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker.ready
      .then(registration => {

        registration.unregister()})
      .catch(error => {

        // console.error(error.message)})}
}
=======
      .catch(() => {
        // Silent fail
      })}
}

export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister()})
      .catch(() => {
        // Silent fail
      })}
}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
