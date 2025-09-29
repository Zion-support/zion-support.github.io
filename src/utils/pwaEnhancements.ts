/**
 * Progressive Web App Enhancements
 * Provides PWA features, offline support, and app-like experience
 */

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
}

export interface PWAStatus {
  isInstalled: boolean;
  isOnline: boolean;
  isUpdateAvailable: boolean;
  installPrompt: Event | null;
  registration: ServiceWorkerRegistration | null;
}

export class PWAEnhancements {
  private static instance: PWAEnhancements;
  private config: PWAConfig;
  private status: PWAStatus;
  private deferredPrompt: Event | null = null;
  private updateAvailable = false;

  public static getInstance(): PWAEnhancements {
    if (!PWAEnhancements.instance) {
      PWAEnhancements.instance = new PWAEnhancements();
    }
    return PWAEnhancements.instance;
  }

  constructor() {
    this.config = this.getDefaultConfig();
    this.status = {
      isInstalled: false,
      isOnline: navigator.onLine,
      isUpdateAvailable: false,
      installPrompt: null,
      registration: null
    };
  }

  public initialize(): void {
    this.setupManifest();
    this.setupServiceWorker();
    this.setupInstallPrompt();
    this.setupOfflineSupport();
    this.setupUpdateNotifications();
    
    console.log('📱 PWA Enhancements initialized');
  }

  private getDefaultConfig(): PWAConfig {
    return {
      name: 'Zion Tech Group',
      shortName: 'Zion',
      description: 'Advanced AI and Technology Solutions',
      themeColor: '#007acc',
      backgroundColor: '#ffffff',
      display: 'standalone',
      orientation: 'any',
      startUrl: '/',
      scope: '/',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    };
  }

  private setupManifest(): void {
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/manifest.json';
    document.head.appendChild(manifest);

    // Create manifest.json content
    this.createManifestFile();
  }

  private createManifestFile(): void {
    const manifest = {
      ...this.config,
      categories: ['business', 'productivity', 'technology'],
      lang: 'en',
      dir: 'ltr'
    };

    // In a real implementation, you would write this to a file
    console.log('Manifest created:', manifest);
  }

  private setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          this.status.registration = registration;
          console.log('Service Worker registered:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  this.updateAvailable = true;
                  this.status.isUpdateAvailable = true;
                  this.showUpdateNotification();
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  private setupInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.status.installPrompt = e;
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
      this.status.isInstalled = true;
      this.hideInstallButton();
      console.log('PWA was installed');
    });
  }

  private setupOfflineSupport(): void {
    window.addEventListener('online', () => {
      this.status.isOnline = true;
      this.showOnlineNotification();
    });

    window.addEventListener('offline', () => {
      this.status.isOnline = false;
      this.showOfflineNotification();
    });
  }

  private setupUpdateNotifications(): void {
    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }

  public async installApp(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    try {
      (this.deferredPrompt as any).prompt();
      const { outcome } = await (this.deferredPrompt as any).userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        return true;
      } else {
        console.log('User dismissed the install prompt');
        return false;
      }
    } catch (error) {
      console.error('Error during app installation:', error);
      return false;
    }
  }

  public async updateApp(): Promise<void> {
    if (this.status.registration) {
      await this.status.registration.update();
    }
  }

  private showInstallButton(): void {
    const installButton = document.createElement('button');
    installButton.id = 'pwa-install-button';
    installButton.textContent = 'Install App';
    installButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #007acc;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
    `;

    installButton.addEventListener('click', () => {
      this.installApp();
    });

    document.body.appendChild(installButton);
  }

  private hideInstallButton(): void {
    const installButton = document.getElementById('pwa-install-button');
    if (installButton) {
      installButton.remove();
    }
  }

  private showUpdateNotification(): void {
    const notification = document.createElement('div');
    notification.id = 'pwa-update-notification';
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-width: 300px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>🔄</span>
          <span>Update available!</span>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 18px;
            margin-left: auto;
          ">×</button>
        </div>
        <div style="margin-top: 8px;">
          <button onclick="window.pwaEnhancements.updateApp()" style="
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
          ">Update Now</button>
        </div>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 10000);
  }

  private showOnlineNotification(): void {
    this.showNotification('🟢 You are back online', '#28a745');
  }

  private showOfflineNotification(): void {
    this.showNotification('🔴 You are offline', '#dc3545');
  }

  private showNotification(message: string, color: string): void {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${color};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }

  public getStatus(): PWAStatus {
    return { ...this.status };
  }

  public updateConfig(newConfig: Partial<PWAConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public isInstallable(): boolean {
    return !!this.deferredPrompt;
  }

  public isUpdateAvailable(): boolean {
    return this.updateAvailable;
  }
}

// Export singleton instance
export const pwaEnhancements = PWAEnhancements.getInstance();

// Make it globally available for the update button
if (typeof window !== 'undefined') {
  (window as Window & { pwaEnhancements?: PWAEnhancements }).pwaEnhancements = pwaEnhancements;
}