<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
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
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
  data?: any;
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
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
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
      });

      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
      console.error('Error showing notification:', error);
      return null;
    }
  }

>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
>>>>>>> main
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
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
<<<<<<< HEAD
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
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
=======
export default notificationManager;
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
