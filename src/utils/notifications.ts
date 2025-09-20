// Notification utilities for user feedback

export interface NotificationOptions {
<<<<<<< HEAD
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closable?: boolean;
=======
// Notification utilities
interface NotificationOptions {
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
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
}

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration: number;
  position: string;
  closable: boolean;
  timestamp: number;
}

class NotificationManager {
  private notifications: Notification[] = [];
  private listeners: ((notifications: Notification[]) => void)[] = [];

  // Add a new notification
  add(message: string, options: NotificationOptions = {}): string {
    const id = Math.random().toString(36).substr(2, 9);
    const notification: Notification = {
      id,
      message,
      type: options.type || 'info',
      duration: options.duration || 5000,
      position: options.position || 'top-right',
      closable: options.closable !== false,
      timestamp: Date.now(),
    };

    this.notifications.push(notification);
    this.notifyListeners();

    // Auto-remove after duration
    if (notification.duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, notification.duration);
    }

    return id;
  }

  // Remove a notification
  remove(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notifyListeners();
  }

  // Clear all notifications
  clear(): void {
    this.notifications = [];
    this.notifyListeners();
  }

  // Get all notifications
  getAll(): Notification[] {
    return [...this.notifications];
  }

  // Subscribe to notification changes
  subscribe(listener: (notifications: Notification[]) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener([...this.notifications]));
  }
}

// Create singleton instance
export const notificationManager = new NotificationManager();

<<<<<<< HEAD
// Convenience functions
export const notify = {
  success: (message: string, options?: Omit<NotificationOptions, 'type'>) =>
    notificationManager.add(message, { ...options, type: 'success' }),
  
  error: (message: string, options?: Omit<NotificationOptions, 'type'>) =>
    notificationManager.add(message, { ...options, type: 'error' }),
  
  warning: (message: string, options?: Omit<NotificationOptions, 'type'>) =>
    notificationManager.add(message, { ...options, type: 'warning' }),
  
  info: (message: string, options?: Omit<NotificationOptions, 'type'>) =>
    notificationManager.add(message, { ...options, type: 'info' }),
=======
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
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

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
        actions: options.actions || [],
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
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
      console.error('Error showing notification:', error);
      return null;
    }
  }

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
export default notificationManager;
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
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
};

export default notificationManager;