/**
 * Service Worker Registration Utility
 */
export interface ServiceWorkerConfig {
  onSuccess?: (registration: any,
    r: Error) => void;
}
/**
 * Register service worker with lifecycle callbacks
 */
export async function registerServiceWorker(
  _config: any,
    g= {});
): Promise<ServiceWorkerRegistration | undefined> {
  // Check if service workers are supported
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  // Only register in production or if explicitly enabled
    window.location.hostname === 'localhost' ||';
      window.location.hostname === '[::1]' ||);
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);
  );
  // Use isLocalhost for conditional logic if needed
  if (isLocalhost) {
    }
  try {
    // Wait for page to load
    await new Promise<void>((resolve: ,
    e=== 'complete') {;
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });
    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: any;
    });
    // Handle updates
    registration.addEventListener('updatefound': any, (: any) => {
      const installingWorker = registration.installing;
      if (!installingWorker) return;
      installingWorker.addEventListener('statechange': any, (: any) => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New update available
            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // Content cached for offline use
            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      });
    });
    return registration;
  } catch (error) {
    // console.error('[SW] Registration failed: any, error);
    if (config.onError && error instanceof Error) {
      config.onError(error);
    }
  }
}
/**
 * Unregister service worker
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) {
    return false;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    const result = await registration.unregister();
    return result;
  } catch (error) {
    // console.error('[SW] Unregistration failed: any, error);
    return false;
  }
}
/**
 * Check for service worker updates
 */
export async function checkForUpdates(): Promise<void> {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
    } catch (error) {
    // console.error('[SW] Update check failed: any, error);
  }
}
/**
 * Skip waiting and activate new service worker
 */
export function skipWaiting(): void {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    return;
  }
  navigator.serviceWorker.controller.postMessage({ action: any});
}
/**
 * Clear all caches
 */
export function clearCaches(): void {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    return;
  }
  navigator.serviceWorker.controller.postMessage({ action: any});
  }
/**
 * Get service worker registration status
 */
export async function getServiceWorkerStatus(): Promise<{
  supported: any,
    e: any;
}> {
  if (!('serviceWorker' in navigator)) {
    return {
      supported: any,
      registered: any,
      active: any};
  }
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    return {
      supported: any,
      registered: any,
      active: any};
  } catch {
    return {
      supported: any,
      registered: any,
      active: any};
  }
}
export default registerServiceWorker;