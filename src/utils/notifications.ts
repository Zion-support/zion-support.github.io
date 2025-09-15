<<<<<<< HEAD
// Notification utilities
interface NotificationOptions {
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
<<<<<<< HEAD
  data?: any;
=======
>>>>>>> cursor/create-and-deploy-new-content-7857
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

}

class NotificationManager {
  private permission: NotificationPermission = 'default';

  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
<<<<<<< HEAD
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
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
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
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
  }

<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-7857
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
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
