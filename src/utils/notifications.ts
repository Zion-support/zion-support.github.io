<<<<<<< HEAD
// Notification utilities
interface NotificationOptions {
<<<<<<< HEAD
<<<<<<< HEAD
// Notifications utility for handling browser notifications and toast messages

interface NotificationOptions {
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a
=======
// Notifications utility for handling browser notifications and toast messages

interface NotificationOptions {
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0dad
/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */
export interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
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
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || []
      });

      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
      console.error('Error showing notification:', error);
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
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
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