/**
 * Notification utilities for managing user notifications
 */

export interface NotificationOptions {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  persistent?: boolean;
}

export interface Notification extends NotificationOptions {
  id: string;
  timestamp: number;
  dismissed?: boolean;
}

class NotificationManager {
  private notifications: Notification[] = [];
  private listeners: ((notifications: Notification[]) => void)[] = [];

  addNotification(options: NotificationOptions): string {
    const notification: Notification = {
      id: this.generateId(),
      timestamp: Date.now(),
      ...options,
    };

    this.notifications.unshift(notification);
    this.notifyListeners();

    // Auto-dismiss after duration if not persistent
    if (!notification.persistent && notification.duration) {
      setTimeout(() => {
        this.dismissNotification(notification.id);
      }, notification.duration);
    }

    return notification.id;
  }

  dismissNotification(id: string): void {
    const index = this.notifications.findIndex(n => n.id === id);
    if (index !== -1) {
      this.notifications[index].dismissed = true;
      this.notifyListeners();
    }
  }

  removeNotification(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notifyListeners();
  }

  clearAll(): void {
    this.notifications = [];
    this.notifyListeners();
  }

  getNotifications(): Notification[] {
    return this.notifications.filter(n => !n.dismissed);
  }

  subscribe(listener: (notifications: Notification[]) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.getNotifications()));
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Create singleton instance
export const notificationManager = new NotificationManager();

// Convenience functions
export const showNotification = (options: NotificationOptions): string => {
  return notificationManager.addNotification(options);
};

export const showSuccess = (title: string, message: string, duration = 3000): string => {
  return showNotification({ title, message, type: 'success', duration });
};

export const showError = (title: string, message: string, persistent = false): string => {
  return showNotification({ title, message, type: 'error', persistent });
};

export const showWarning = (title: string, message: string, duration = 5000): string => {
  return showNotification({ title, message, type: 'warning', duration });
};

export const showInfo = (title: string, message: string, duration = 4000): string => {
  return showNotification({ title, message, type: 'info', duration });
};

export const dismissNotification = (id: string): void => {
  notificationManager.dismissNotification(id);
};

export const removeNotification = (id: string): void => {
  notificationManager.removeNotification(id);
};

export const clearAllNotifications = (): void => {
  notificationManager.clearAll();
};

export const getNotifications = (): Notification[] => {
  return notificationManager.getNotifications();
};

export const subscribeToNotifications = (listener: (notifications: Notification[]) => void): () => void => {
  return notificationManager.subscribe(listener);
};

export default notificationManager;