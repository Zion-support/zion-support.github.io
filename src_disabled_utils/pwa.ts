import React from 'react';

<<<<<<< HEAD
type NotificationPermission = 'default' | 'granted' | 'denied';

=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
// PWA utilities and hooks

export interface PWAConfig {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
  display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
  orientation: 'portrait' | 'landscape' | 'any';
  startUrl: string;
  scope: string;
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
    purpose?: 'any' | 'maskable' | 'monochrome';
  }>;
  categories: string[];
  lang: string;
  dir: 'ltr' | 'rtl';
  preferRelatedApplications: boolean;
  relatedApplications: Array<{
    platform: string;
    url: string;
    id?: string;
  }>;
}

export interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Generate manifest.json
export const generateManifest = (config: PWAConfig): string => {
  const manifest = {
    name: config.name,
    short_name: config.shortName,
    description: config.description,
    theme_color: config.themeColor,
    background_color: config.backgroundColor,
    display: config.display,
    orientation: config.orientation,
    start_url: config.startUrl,
    scope: config.scope,
    icons: config.icons,
    categories: config.categories,
    lang: config.lang,
    dir: config.dir,
    prefer_related_applications: config.preferRelatedApplications,
    related_applications: config.relatedApplications,
  };

  return JSON.stringify(manifest, null, 2);
};

// Service Worker utilities
export const registerServiceWorker = async (swPath: string = '/sw.js'): Promise<ServiceWorkerRegistration | null> => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register(swPath);
    console.log('Service Worker registered successfully:', registration);
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
};

export const unregisterServiceWorker = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(registration => registration.unregister()));
    console.log('Service Workers unregistered');
    return true;
  } catch (error) {
    console.error('Failed to unregister Service Workers:', error);
    return false;
  }
};

// Install prompt handling
export const useInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = React.useState<InstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = React.useState(false);
  const [isInstalled, setIsInstalled] = React.useState(false);

  React.useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as InstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installApp = async (): Promise<boolean> => {
    if (!deferredPrompt) {
      return false;
    }

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Failed to install app:', error);
      return false;
    }
  };

  return {
    isInstallable,
    isInstalled,
    installApp,
  };
};

// Offline detection
export const useOfflineStatus = () => {
  const [isOffline, setIsOffline] = React.useState(!navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOffline;
};

// Cache management
export const useCacheManager = () => {
  const [cacheNames, setCacheNames] = React.useState<string[]>([]);

  React.useEffect(() => {
    if ('caches' in window) {
      caches.keys().then(names => setCacheNames(names));
    }
  }, []);

  const clearCache = async (cacheName?: string): Promise<boolean> => {
    if (!('caches' in window)) {
      return false;
    }

    try {
      if (cacheName) {
        await caches.delete(cacheName);
      } else {
        const names = await caches.keys();
        await Promise.all(names.map(name => caches.delete(name)));
      }
      
      setCacheNames(await caches.keys());
      return true;
    } catch (error) {
      console.error('Failed to clear cache:', error);
      return false;
    }
  };

  const getCacheSize = async (cacheName: string): Promise<number> => {
    if (!('caches' in window)) {
      return 0;
    }

    try {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      return keys.length;
    } catch (error) {
      console.error('Failed to get cache size:', error);
      return 0;
    }
  };

  return {
    cacheNames,
    clearCache,
    getCacheSize,
  };
};

// Push notifications
export const usePushNotifications = () => {
  const [isSupported, setIsSupported] = React.useState(false);
  const [permission, setPermission] = React.useState<NotificationPermission>('default');
  const [subscription, setSubscription] = React.useState<PushSubscription | null>(null);

  React.useEffect(() => {
    setIsSupported('serviceWorker' in navigator && 'PushManager' in window);
    setPermission(Notification.permission);
  }, []);

  const requestPermission = async (): Promise<boolean> => {
    if (!isSupported) {
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);
      return permission === 'granted';
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return false;
    }
  };

  const subscribeToPush = async (vapidPublicKey: string): Promise<PushSubscription | null> => {
    if (!isSupported || permission !== 'granted') {
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidPublicKey,
      });
      
      setSubscription(subscription);
      return subscription;
    } catch (error) {
      console.error('Failed to subscribe to push notifications:', error);
      return null;
    }
  };

  const unsubscribeFromPush = async (): Promise<boolean> => {
    if (!subscription) {
      return false;
    }

    try {
      await subscription.unsubscribe();
      setSubscription(null);
      return true;
    } catch (error) {
      console.error('Failed to unsubscribe from push notifications:', error);
      return false;
    }
  };

  return {
    isSupported,
    permission,
    subscription,
    requestPermission,
    subscribeToPush,
    unsubscribeFromPush,
  };
};

// Background sync
export const useBackgroundSync = () => {
  const [isSupported, setIsSupported] = React.useState(false);

  React.useEffect(() => {
    setIsSupported('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype);
  }, []);

  const registerBackgroundSync = async (tag: string): Promise<boolean> => {
    if (!isSupported) {
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register(tag);
      return true;
    } catch (error) {
      console.error('Failed to register background sync:', error);
      return false;
    }
  };

  return {
    isSupported,
    registerBackgroundSync,
  };
};

// App update detection
export const useAppUpdate = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = React.useState(false);
  const [registration, setRegistration] = React.useState<ServiceWorkerRegistration | null>(null);

  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(reg => {
        setRegistration(reg);
        
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setIsUpdateAvailable(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const updateApp = async (): Promise<boolean> => {
    if (!registration) {
      return false;
    }

    try {
      await registration.update();
      return true;
    } catch (error) {
      console.error('Failed to update app:', error);
      return false;
    }
  };

  const reloadApp = (): void => {
    window.location.reload();
  };

  return {
    isUpdateAvailable,
    updateApp,
    reloadApp,
  };
};

// PWA Install Button Component
export const PWAInstallButton: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = '', children }) => {
  const { isInstallable, isInstalled, installApp } = useInstallPrompt();

  if (isInstalled || !isInstallable) {
    return null;
  }

  return React.createElement('button', {
    onClick: installApp,
    className: `px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`
  }, children || 'Install App');
};

// Offline Indicator Component
export const OfflineIndicator: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const isOffline = useOfflineStatus();

  if (!isOffline) {
    return null;
  }

  return React.createElement('div', {
    className: `fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 z-50 ${className}`
  }, 'You are currently offline. Some features may not be available.');
};

// Update Available Component
export const UpdateAvailable: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const { isUpdateAvailable, updateApp, reloadApp } = useAppUpdate();

  if (!isUpdateAvailable) {
    return null;
  }

  return React.createElement('div', {
    className: `fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm ${className}`
  }, 
    React.createElement('div', { className: 'flex items-center justify-between' },
      React.createElement('div', null,
        React.createElement('h3', { className: 'font-semibold' }, 'Update Available'),
        React.createElement('p', { className: 'text-sm' }, 'A new version is ready to install.')
      ),
      React.createElement('div', { className: 'flex space-x-2 ml-4' },
        React.createElement('button', {
          onClick: updateApp,
          className: 'px-3 py-1 bg-white text-green-600 rounded text-sm hover:bg-gray-100'
        }, 'Update'),
        React.createElement('button', {
          onClick: reloadApp,
          className: 'px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700'
        }, 'Reload')
      )
    )
  );
};

// PWA Context
export const PWAContext = React.createContext<{
  isInstallable: boolean;
  isInstalled: boolean;
  isOffline: boolean;
  isUpdateAvailable: boolean;
  installApp: () => Promise<boolean>;
  updateApp: () => Promise<boolean>;
  reloadApp: () => void;
} | null>(null);

export const PWAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isInstallable, isInstalled, installApp } = useInstallPrompt();
  const isOffline = useOfflineStatus();
  const { isUpdateAvailable, updateApp, reloadApp } = useAppUpdate();

  return React.createElement(PWAContext.Provider, {
    value: {
      isInstallable,
      isInstalled,
      isOffline,
      isUpdateAvailable,
      installApp,
      updateApp,
      reloadApp,
    }
  }, children);
};

export const usePWA = () => {
  const context = React.useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
};

export default {
  generateManifest,
  registerServiceWorker,
  unregisterServiceWorker,
  useInstallPrompt,
  useOfflineStatus,
  useCacheManager,
  usePushNotifications,
  useBackgroundSync,
  useAppUpdate,
  PWAInstallButton,
  OfflineIndicator,
  UpdateAvailable,
  PWAProvider,
  usePWA,
};