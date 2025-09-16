<<<<<<< HEAD
// Notification utilities
interface NotificationOptions {
// Notifications utility for handling browser notifications and toast messages

interface NotificationOptions {
=======
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Notification utilities
interface NotificationOptions {
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */

export interface NotificationOptions {
<<<<<<< HEAD
// Notifications utility for handling browser notifications and toast messages

interface NotificationOptions {
// Notification utilities
interface NotificationOptions {
=======
<<<<<<< HEAD
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
  data?: any;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  data?: any;
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
}

class NotificationManager {
  private permission: NotificationPermission = 'default';

<<<<<<< HEAD
  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
<<<<<<< HEAD
=======
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
=======
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
<<<<<<< HEAD
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
=======
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
      console.error('Error showing notification:', error);
      return null;
    }
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
      console.error('Error showing notification:', error);
      return null;
    }
  }

<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
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
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
