// Service Worker communication utilities

export interface ServiceWorkerMessage {
  type: string;
  data?: Record<string, unknown>;
}

export interface ServiceWorkerResponse {
  success: boolean;
  message?: string;
  data?: Record<string, unknown>;
  error?: string;
}

// Send a message to the service worker and wait for a response
export const sendMessageToServiceWorker = async (
  message: ServiceWorkerMessage
): Promise<ServiceWorkerResponse> => {
  return new Promise((resolve, reject) => {
    if (!navigator.serviceWorker.controller) {
      reject(new Error('No service worker controller available'));
      return;
    }

    // Create a message channel for communication
    const messageChannel = new MessageChannel();
    
    // Set up response handler
    messageChannel.port1.onmessage = (event) => {
      resolve(event.data);
    };

    // Set up error handler
    messageChannel.port1.onerror = (error) => {
      reject(error);
    };

    // Set timeout
    const timeout = setTimeout(() => {
      reject(new Error('Service worker message timeout'));
    }, 5000);

    // Send message
    try {
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } catch (error) {
      clearTimeout(timeout);
      reject(error);
    }

    // Clear timeout when response is received
    messageChannel.port1.onmessage = (event) => {
      clearTimeout(timeout);
      resolve(event.data);
    };
  });
};

// Send a message without waiting for response (fire and forget)
export const sendMessageToServiceWorkerAsync = (message: ServiceWorkerMessage): void => {
  if (navigator.serviceWorker.controller) {
    try {
      navigator.serviceWorker.controller.postMessage(message);
    } catch (error) {
      console.warn('Failed to send message to service worker:', error);
    }
  }
};

// Cache URLs in service worker
export const cacheUrls = async (urls: string[]): Promise<ServiceWorkerResponse> => {
  return sendMessageToServiceWorker({
    type: 'CACHE_URLS',
    data: { urls }
  });
};

// Skip waiting for service worker update
export const skipWaiting = async (): Promise<ServiceWorkerResponse> => {
  return sendMessageToServiceWorker({
    type: 'SKIP_WAITING'
  });
};

// Get cache status
export const getCacheStatus = async (): Promise<ServiceWorkerResponse> => {
  return sendMessageToServiceWorker({
    type: 'GET_CACHE_STATUS'
  });
};

// Check if service worker is available
export const isServiceWorkerAvailable = (): boolean => {
  return 'serviceWorker' in navigator && navigator.serviceWorker.controller !== null;
};

// Wait for service worker to be ready
export const waitForServiceWorker = (): Promise<ServiceWorkerRegistration> => {
  return new Promise((resolve, reject) => {
    if (navigator.serviceWorker.ready) {
      resolve(navigator.serviceWorker.ready);
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error('Service worker ready timeout'));
    }, 10000);

    navigator.serviceWorker.ready.then((registration) => {
      clearTimeout(timeout);
      resolve(registration);
    }).catch((error) => {
      clearTimeout(timeout);
      reject(error);
    });
  });
};

// Register service worker with proper error handling
export const registerServiceWorker = async (swPath: string = '/sw.js'): Promise<ServiceWorkerRegistration> => {
  try {
    const registration = await navigator.serviceWorker.register(swPath);
    console.warn('Service Worker registered successfully:', registration);
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    throw error;
  }
};

// Unregister all service workers
export const unregisterServiceWorkers = async (): Promise<void> => {
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(registration => registration.unregister()));
    console.warn('All service workers unregistered');
  } catch (error) {
    console.error('Failed to unregister service workers:', error);
    throw error;
  }
};