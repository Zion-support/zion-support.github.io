<<<<<<< HEAD
// Notification utilities
interface NotificationOptions {
=======
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
// Notifications utility for handling browser notifications and toast messages

interface NotificationOptions {
// Notification utilities
interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> main
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
  data?: any;
=======
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
  data?: any;
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

<<<<<<< HEAD
interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-425b
}

class NotificationManager {
  private permission: NotificationPermission = 'default';

  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-425b
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
<<<<<<< HEAD
=======
=======
=======
  data?: any;
>>>>>>> main
=======
  data?: any;
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
>>>>>>> cursor/create-and-deploy-new-content-c963
interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
<<<<<<< HEAD
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-c963
}

class NotificationManager {
  private permission: NotificationPermission = 'default';

<<<<<<< HEAD
=======
  constructor() {
    this.checkPermission();
  }

  private async checkPermission(): Promise<void> {
    if ('Notification' in window) {
      this.permission = Notification.permission;
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return false;
    }

    if (this.permission === 'granted') {
      return true;
    }

    if (this.permission === 'denied') {
      console.warn('Notification permission has been denied');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      this.permission = permission;
      return permission === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
>>>>>>> cursor/create-and-deploy-new-content-c963
  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
<<<<<<< HEAD
  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
  data?: any;
>>>>>>> main
=======
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
  data?: any;
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
}

class NotificationManager {
  private permission: NotificationPermission = 'default';

  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
<<<<<<< HEAD
=======
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        console.warn('Notification permission not granted');
        return null;
      }
>>>>>>> cursor/create-and-deploy-new-content-c963
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
>>>>>>> main
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
>>>>>>> cursor/create-and-deploy-new-content-c963
>>>>>>> cursor/create-and-deploy-new-content-cc9d
>>>>>>> cursor/create-and-deploy-new-content-425b
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
<<<<<<< HEAD
=======
=======
>>>>>>> main
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
      });

      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      console.error('Error showing notification:', error);
      return null;
    }
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
  showSuccess(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success',
    });
  }

  showError(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
=======
>>>>>>> main
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
      console.error('Error showing notification:', error);
      return null;
    }
  }

<<<<<<< HEAD
=======
  showToast(options: ToastOptions): void {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${options.type || 'info'} toast-${options.position || 'top-right'}`;
    
    // Set toast content
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-message">${options.message}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;

    // Add toast styles
    const style = document.createElement('style');
    style.textContent = `
      .toast {
        position: fixed;
        z-index: 10000;
        padding: 12px 16px;
        border-radius: 8px;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 400px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
      }
      
      .toast-top-right { top: 20px; right: 20px; }
      .toast-top-left { top: 20px; left: 20px; }
      .toast-bottom-right { bottom: 20px; right: 20px; }
      .toast-bottom-left { bottom: 20px; left: 20px; }
      .toast-top-center { top: 20px; left: 50%; transform: translateX(-50%); }
      .toast-bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }
      
      .toast-success { background-color: #10b981; }
      .toast-error { background-color: #ef4444; }
      .toast-warning { background-color: #f59e0b; }
      .toast-info { background-color: #3b82f6; }
      
      .toast-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      
      .toast-close {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
      }
      
      .toast-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;

    // Add styles if not already added
    if (!document.querySelector('#toast-styles')) {
      style.id = 'toast-styles';
      document.head.appendChild(style);
    }

    // Add toast to DOM
    document.body.appendChild(toast);

    // Auto-remove after duration
    const duration = options.duration || 5000;
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 300);
      }
    }, duration);
  }

  // Convenience methods
  success(message: string, options?: Partial<ToastOptions>): void {
    this.showToast({ message, type: 'success', ...options });
  }

  error(message: string, options?: Partial<ToastOptions>): void {
    this.showToast({ message, type: 'error', ...options });
  }

  warning(message: string, options?: Partial<ToastOptions>): void {
    this.showToast({ message, type: 'warning', ...options });
  }

  info(message: string, options?: Partial<ToastOptions>): void {
    this.showToast({ message, type: 'info', ...options });
  }
}

// Create default notification manager instance
const notifications = new NotificationManager();

export default notifications;
export { NotificationManager };
export type { NotificationOptions, ToastOptions };
>>>>>>> cursor/create-and-deploy-new-content-c963
>>>>>>> cursor/create-and-deploy-new-content-425b
  showSuccess(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success',
    });
  }

  showError(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
<<<<<<< HEAD
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-425b
      requireInteraction: true,
    });
  }

  showInfo(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  }

  showWarning(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  }
}

export const notificationManager = new NotificationManager();
<<<<<<< HEAD
export default notificationManager;
=======
export default notificationManager;
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
      requireInteraction: true,
    });
  }

  showInfo(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  }

  showWarning(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  }
}

export const notificationManager = new NotificationManager();
<<<<<<< HEAD
=======
export default notificationManager;
>>>>>>> cursor/create-and-deploy-new-content-c963
>>>>>>> main
=======
export default notificationManager;
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
