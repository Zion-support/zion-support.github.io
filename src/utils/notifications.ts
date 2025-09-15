// Notification utilities for user feedback

export interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closable?: boolean;
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
};

export default notificationManager;