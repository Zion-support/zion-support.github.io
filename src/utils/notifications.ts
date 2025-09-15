// Notification utilities for handling browser notifications and toast messages

export interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
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
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
      });

      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
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
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
      requireInteraction: true,
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

export default notifications;