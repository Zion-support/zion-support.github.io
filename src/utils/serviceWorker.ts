// Service Worker Registration Utility
export async function registerServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;
  try {
    const swUrl = '/sw.js';
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        // hook for update handling if needed
      });
    });
  } catch {
    // swallow registration errors
  }
}

export async function unregisterServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;
  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.unregister();
  } catch {
    // swallow errors
  }
}