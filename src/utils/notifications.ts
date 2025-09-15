<<<<<<< HEAD
<<<<<<< HEAD
// Notifications utility
export const notifications = {
  show: (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void => {
    // Simple notification implementation
    if (typeof window !== 'undefined') {
      // You can integrate with a notification library like react-hot-toast here
      console.log(`[${type.toUpperCase()}] ${message}`);
    }
  },

  success: (message: string): void => {
    notifications.show(message, 'success');
  },

  error: (message: string): void => {
    notifications.show(message, 'error');
  },

  warning: (message: string): void => {
    notifications.show(message, 'warning');
  },

  info: (message: string): void => {
    notifications.show(message, 'info');
  }
};

export default notifications;
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f1b8
// Notification utilities
interface NotificationOptions {
=======
/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */

export interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-b0b6
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
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
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
=======
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
}

export const notifications = {
  /**
   * Check if notifications are supported
   */
  isSupported: (): boolean => {
    return typeof window !== 'undefined' && 'Notification' in window;
  },

  /**
   * Check if notifications are permitted
   */
  getPermission: (): NotificationPermission => {
    if (!notifications.isSupported()) return 'denied';
    return Notification.permission;
  },

  /**
   * Request notification permission
   */
  requestPermission: async (): Promise<NotificationPermission> => {
    if (!notifications.isSupported()) return 'denied';
    
    try {
      const permission = await Notification.requestPermission();
      return permission;
    } catch (error) {
      console.warn('Failed to request notification permission:', error);
      return 'denied';
    }
  },

  /**
   * Show a notification
   */
  show: (options: NotificationOptions): Notification | null => {
    if (!notifications.isSupported()) {
      console.warn('Notifications not supported');
      return null;
    }

    if (Notification.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return null;
>>>>>>> cursor/create-and-deploy-new-content-b0b6
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
<<<<<<< HEAD
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
=======
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
>>>>>>> cursor/create-and-deploy-new-content-b0b6
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
      console.error('Error showing notification:', error);
      return null;
    }
  }

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
=======
      console.warn('Failed to show notification:', error);
      return null;
    }
  },

  /**
   * Show a success notification
   */
  success: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success'
    });
  },

  /**
   * Show an error notification
   */
  error: (title: string, body?: string): Notification | null => {
    return notifications.show({
>>>>>>> cursor/create-and-deploy-new-content-b0b6
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
<<<<<<< HEAD
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
export default notificationManager;
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-c934
=======
=======
      requireInteraction: true
    });
  },

  /**
   * Show an info notification
   */
  info: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info'
    });
  },

  /**
   * Show a warning notification
   */
  warning: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning'
    });
  }
};

export default notifications;
>>>>>>> cursor/create-and-deploy-new-content-b0b6
>>>>>>> cursor/create-and-deploy-new-content-f1b8
