<<<<<<< HEAD
// Notification utilities for handling browser notifications and toast messages

export interface NotificationOptions {
=======
<<<<<<< HEAD
/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */

export interface NotificationOptions {
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
=======
<<<<<<< HEAD
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
>>>>>>> cursor/create-and-deploy-new-content-2def
}

export const notifications = {
  // Check if notifications are supported
  isSupported: (): boolean => {
    return typeof window !== 'undefined' && 'Notification' in window;
  },

  // Request notification permission
  requestPermission: async (): Promise<NotificationPermission> => {
    if (!notifications.isSupported()) {
      return 'denied';
    }

    try {
      const permission = await Notification.requestPermission();
      return permission;
    } catch (error) {
      console.warn('Failed to request notification permission:', error);
      return 'denied';
    }
  },

  // Check current permission status
  getPermission: (): NotificationPermission => {
    if (!notifications.isSupported()) {
      return 'denied';
    }
    return Notification.permission;
  },

  // Show a notification
  show: (options: NotificationOptions): Notification | null => {
    if (!notifications.isSupported() || Notification.permission !== 'granted') {
      console.warn('Notifications not supported or permission not granted');
      return null;
<<<<<<< HEAD
=======
=======
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
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
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
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
=======
        data: options.data,
>>>>>>> cursor/create-and-deploy-new-content-2def
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
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
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-2def
      console.warn('Failed to show notification:', error);
      return null;
    }
  },

  // Show a success notification
  success: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success',
    });
  },

  // Show an error notification
  error: (title: string, body?: string): Notification | null => {
    return notifications.show({
<<<<<<< HEAD
=======
=======
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
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
<<<<<<< HEAD
      requireInteraction: true,
=======
<<<<<<< HEAD
      requireInteraction: true
>>>>>>> cursor/create-and-deploy-new-content-2def
    });
  },

  // Show an info notification
  info: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  },

  // Show a warning notification
  warning: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  },

  // Close all notifications
  closeAll: (): void => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.getNotifications().then(notifications => {
          notifications.forEach(notification => notification.close());
        });
      });
    }
  },

  // Close notifications by tag
  closeByTag: (tag: string): void => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.getNotifications().then(notifications => {
          notifications
            .filter(notification => notification.tag === tag)
            .forEach(notification => notification.close());
        });
      });
    }
  }
};

<<<<<<< HEAD
export default notifications;
=======
export default notifications;
=======
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
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
