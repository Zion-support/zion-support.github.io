
// Service Worker Registration Utility
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    
    
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        // Handle updates
        registration.addEventListener('updatefound', () => {
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
                console.log('New content is available; please refresh.')}
            })}
        })})
      .catch((registrationError) => {
        console.error('SW registration failed: ', registrationError)})}
}

export function unregisterServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister()})
      .catch((error) => {
        console.error(error.message)})}
}


