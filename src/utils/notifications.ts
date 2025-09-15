<<<<<<< HEAD
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
=======
// Notifications utility for handling user notifications

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  persistent?: boolean;
  actions?: NotificationAction[];
  timestamp: Date;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: 'primary' | 'secondary' | 'danger';
}

class NotificationManager {
  private notifications: Notification[] = [];
  private listeners: ((notifications: Notification[]) => void)[] = [];

  // Generate unique ID for notifications
  private generateId(): string {
    return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Add a notification
  add(notification: Omit<Notification, 'id' | 'timestamp'>): string {
    const id = this.generateId();
    const newNotification: Notification = {
      ...notification,
      id,
      timestamp: new Date(),
      duration: notification.duration || 5000,
      persistent: notification.persistent || false,
    };

    this.notifications.push(newNotification);
    this.notifyListeners();

    // Auto-remove notification after duration (unless persistent)
    if (!newNotification.persistent && newNotification.duration) {
      setTimeout(() => {
        this.remove(id);
      }, newNotification.duration);
    }

    return id;
  }

  // Remove a notification by ID
  remove(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notifyListeners();
  }

  // Clear all notifications
  clear(): void {
    this.notifications = [];
    this.notifyListeners();
>>>>>>> cursor/create-and-deploy-new-content-45eb
  }

  // Get all notifications
  getAll(): Notification[] {
    return [...this.notifications];
  }

<<<<<<< HEAD
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
=======
  // Subscribe to notification changes
  subscribe(listener: (notifications: Notification[]) => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener([...this.notifications]));
  }

  // Convenience methods for different notification types
  success(title: string, message: string, options?: Partial<Notification>): string {
    return this.add({
      type: 'success',
      title,
      message,
      ...options,
    });
  }

  error(title: string, message: string, options?: Partial<Notification>): string {
    return this.add({
      type: 'error',
      title,
      message,
      persistent: true, // Errors are persistent by default
      ...options,
    });
  }

  warning(title: string, message: string, options?: Partial<Notification>): string {
    return this.add({
      type: 'warning',
      title,
      message,
      ...options,
    });
  }

  info(title: string, message: string, options?: Partial<Notification>): string {
    return this.add({
      type: 'info',
      title,
      message,
      ...options,
>>>>>>> cursor/create-and-deploy-new-content-45eb
    });
  }
}

<<<<<<< HEAD
export const notificationManager = new NotificationManager();
export default notificationManager;
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
=======
// Create and export a singleton instance
const notificationManager = new NotificationManager();

export default notificationManager;

// Export the class for testing purposes
export { NotificationManager };
>>>>>>> cursor/create-and-deploy-new-content-45eb
