// Notification utilities
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

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */
export class NotificationManager {
  private static instance: NotificationManager;
  private permission: NotificationPermission = 'default';

  private constructor() {
    this.checkPermission();
  }

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  private async checkPermission(): Promise<void> {
    if ('Notification' in window) {
      this.permission = Notification.permission;
    }
  }

  public async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
  }

  public async showNotification(options: NotificationOptions): Promise<Notification | null> {
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
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon,
        badge: options.badge,
        tag: options.tag,
        data: options.data,
        requireInteraction: options.requireInteraction,
        silent: options.silent,
        timestamp: options.timestamp,
        actions: options.actions
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

  public closeAll(): void {
    if ('Notification' in window) {
      // Close all notifications
      // Note: There's no direct way to close all notifications, but we can track them
      console.log('Closing all notifications');
    }
  }
}

// Toast notification utilities
export interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'center';
}

export class ToastManager {
  private static instance: ToastManager;
  private toasts: ToastOptions[] = [];

  private constructor() {}

  public static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  public showToast(options: ToastOptions): void {
    this.toasts.push(options);
    this.renderToasts();
    
    // Auto-remove after duration
    setTimeout(() => {
      this.removeToast(options);
    }, options.duration || 3000);
  }

  private removeToast(toast: ToastOptions): void {
    const index = this.toasts.indexOf(toast);
    if (index > -1) {
      this.toasts.splice(index, 1);
      this.renderToasts();
    }
  }

  private renderToasts(): void {
    // This would typically render toasts in the DOM
    // For now, we'll just log them
    console.log('Toasts:', this.toasts);
  }
}

// Convenience functions
export const showNotification = (options: NotificationOptions): Promise<Notification | null> => {
  return NotificationManager.getInstance().showNotification(options);
};

export const showToast = (options: ToastOptions): void => {
  ToastManager.getInstance().showToast(options);
};

export const requestNotificationPermission = (): Promise<NotificationPermission> => {
  return NotificationManager.getInstance().requestPermission();
};