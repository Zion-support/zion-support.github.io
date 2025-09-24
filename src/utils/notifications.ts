

>>>>>>> main

>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> cursor/create-and-deploy-new-content-d3a3

>>>>>>> cursor/create-and-deploy-new-content-8735
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

>>>>>>> cursor/create-and-deploy-new-content-c963
}

class NotificationManager {
  private permission: NotificationPermission = 'default';


  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;



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
>>>>>>> main

>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> cursor/create-and-deploy-new-content-d3a3

>>>>>>> cursor/create-and-deploy-new-content-8735
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,

>>>>>>> cursor/create-and-deploy-new-content-cc9d
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],


>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> cursor/create-and-deploy-new-content-d3a3

>>>>>>> cursor/create-and-deploy-new-content-8735
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

>>>>>>> cursor/create-and-deploy-new-content-cc9d


      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',


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

>>>>>>> main

>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> cursor/create-and-deploy-new-content-d3a3

>>>>>>> cursor/create-and-deploy-new-content-8735
