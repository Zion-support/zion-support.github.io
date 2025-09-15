/**
 * Notifications utility for managing browser notifications and in-app notifications
 */

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export enum NotificationPosition {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  TOP_CENTER = 'top-center',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_CENTER = 'bottom-center'
}

export interface NotificationOptions {
  id?: string;
  title: string;
  message: string;
  type?: NotificationType;
  duration?: number;
  position?: NotificationPosition;
  persistent?: boolean;
  actions?: NotificationAction[];
  onClick?: () => void;
  onClose?: () => void;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: 'primary' | 'secondary' | 'danger';
}

export interface BrowserNotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  image?: string;
  tag?: string;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
  onClick?: () => void;
}

class NotificationManager {
  private notifications: Map<string, NotificationOptions> = new Map();
  private browserNotificationSupported = false;
  private permission: NotificationPermission = 'default';

  constructor() {
    this.browserNotificationSupported = 'Notification' in window;
    if (this.browserNotificationSupported) {
      this.permission = Notification.permission;
    }
  }

  // Browser notifications
  async requestPermission(): Promise<NotificationPermission> {
    if (!this.browserNotificationSupported) {
      return 'denied';
    }

    if (this.permission === 'default') {
      this.permission = await Notification.requestPermission();
    }

    return this.permission;
  }

  async showBrowserNotification(options: BrowserNotificationOptions): Promise<void> {
    if (!this.browserNotificationSupported) {
      console.warn('Browser notifications are not supported');
      return;
    }

    if (this.permission !== 'granted') {
      await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Browser notification permission denied');
        return;
      }
    }

    const notification = new Notification(options.title, {
      body: options.body,
      icon: options.icon || '/favicon.ico',
      badge: options.badge,
      image: options.image,
      tag: options.tag,
      requireInteraction: options.requireInteraction,
      silent: options.silent,
      timestamp: options.timestamp,
    });

    if (options.onClick) {
      notification.onclick = options.onClick;
    }

    // Auto-close after 5 seconds if not persistent
    if (!options.requireInteraction) {
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  }

  // In-app notifications
  showNotification(options: NotificationOptions): string {
    const id = options.id || this.generateId();
    const notification: NotificationOptions = {
      duration: 5000,
      position: NotificationPosition.TOP_RIGHT,
      type: NotificationType.INFO,
      persistent: false,
      ...options,
      id
    };

    this.notifications.set(id, notification);
    this.renderNotification(notification);

    // Auto-remove if not persistent
    if (!notification.persistent && notification.duration) {
      setTimeout(() => {
        this.removeNotification(id);
      }, notification.duration);
    }

    return id;
  }

  removeNotification(id: string): void {
    const notification = this.notifications.get(id);
    if (notification) {
      if (notification.onClose) {
        notification.onClose();
      }
      this.notifications.delete(id);
      this.removeNotificationElement(id);
    }
  }

  clearAllNotifications(): void {
    this.notifications.forEach((notification, id) => {
      this.removeNotification(id);
    });
  }

  private generateId(): string {
    return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private renderNotification(notification: NotificationOptions): void {
    // Create notification element
    const notificationEl = document.createElement('div');
    notificationEl.id = `notification-${notification.id}`;
    notificationEl.className = `notification notification-${notification.type} notification-${notification.position}`;
    
    notificationEl.innerHTML = `
      <div class="notification-content">
        <div class="notification-header">
          <h4 class="notification-title">${notification.title}</h4>
          <button class="notification-close" data-notification-id="${notification.id}">&times;</button>
        </div>
        <p class="notification-message">${notification.message}</p>
        ${notification.actions ? this.renderActions(notification.actions, notification.id!) : ''}
      </div>
    `;

    // Add event listeners
    const closeBtn = notificationEl.querySelector('.notification-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.removeNotification(notification.id!);
      });
    }

    if (notification.onClick) {
      notificationEl.addEventListener('click', notification.onClick);
    }

    // Add to DOM
    this.getNotificationContainer(notification.position!).appendChild(notificationEl);

    // Animate in
    setTimeout(() => {
      notificationEl.classList.add('notification-show');
    }, 10);
  }

  private renderActions(actions: NotificationAction[], notificationId: string): string {
    return `
      <div class="notification-actions">
        ${actions.map((action, index) => `
          <button 
            class="notification-action notification-action-${action.style || 'secondary'}" 
            data-notification-id="${notificationId}" 
            data-action-index="${index}"
          >
            ${action.label}
          </button>
        `).join('')}
      </div>
    `;
  }

  private removeNotificationElement(id: string): void {
    const element = document.getElementById(`notification-${id}`);
    if (element) {
      element.classList.add('notification-hide');
      setTimeout(() => {
        element.remove();
      }, 300);
    }
  }

  private getNotificationContainer(position: NotificationPosition): HTMLElement {
    let container = document.getElementById(`notification-container-${position}`);
    
    if (!container) {
      container = document.createElement('div');
      container.id = `notification-container-${position}`;
      container.className = `notification-container notification-container-${position}`;
      document.body.appendChild(container);
    }

    return container;
  }

  // Convenience methods
  success(title: string, message: string, options?: Partial<NotificationOptions>): string {
    return this.showNotification({
      title,
      message,
      type: NotificationType.SUCCESS,
      ...options
    });
  }

  error(title: string, message: string, options?: Partial<NotificationOptions>): string {
    return this.showNotification({
      title,
      message,
      type: NotificationType.ERROR,
      duration: 0, // Persistent by default for errors
      persistent: true,
      ...options
    });
  }

  warning(title: string, message: string, options?: Partial<NotificationOptions>): string {
    return this.showNotification({
      title,
      message,
      type: NotificationType.WARNING,
      ...options
    });
  }

  info(title: string, message: string, options?: Partial<NotificationOptions>): string {
    return this.showNotification({
      title,
      message,
      type: NotificationType.INFO,
      ...options
    });
  }
}

// Create singleton instance
export const notificationManager = new NotificationManager();

// Export convenience functions
export const notifications = {
  show: (options: NotificationOptions) => notificationManager.showNotification(options),
  success: (title: string, message: string, options?: Partial<NotificationOptions>) => 
    notificationManager.success(title, message, options),
  error: (title: string, message: string, options?: Partial<NotificationOptions>) => 
    notificationManager.error(title, message, options),
  warning: (title: string, message: string, options?: Partial<NotificationOptions>) => 
    notificationManager.warning(title, message, options),
  info: (title: string, message: string, options?: Partial<NotificationOptions>) => 
    notificationManager.info(title, message, options),
  remove: (id: string) => notificationManager.removeNotification(id),
  clearAll: () => notificationManager.clearAllNotifications(),
  requestPermission: () => notificationManager.requestPermission(),
  showBrowser: (options: BrowserNotificationOptions) => notificationManager.showBrowserNotification(options),
};

export default notificationManager;