/**
 * Advanced Notifications System
 * Comprehensive notification management with different types and priorities
 */

export interface NotificationConfig {
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  duration: number;
  maxNotifications: number;
  enableSound: boolean;
  enableVibration: boolean;
  enableDesktop: boolean;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'loading';
  title: string;
  message: string;
  duration?: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  actions?: NotificationAction[];
  timestamp: number;
  persistent: boolean;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: 'primary' | 'secondary' | 'danger';
}

export class AdvancedNotifications {
  private notifications: Map<string, Notification> = new Map();
  private config: NotificationConfig;
  private container: HTMLElement | null = null;
  private soundEnabled: boolean = true;

  constructor(config: Partial<NotificationConfig> = {}) {
    this.config = {
      position: 'top-right',
      duration: 5000,
      maxNotifications: 5,
      enableSound: true,
      enableVibration: true,
      enableDesktop: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.createContainer();
    this.setupKeyboardShortcuts();
    this.setupServiceWorker();
  }

  private createContainer(): void {
    this.container = document.createElement('div');
    this.container.id = 'notification-container';
    this.container.className = `fixed z-50 ${this.getPositionClasses()}`;
    this.container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      pointer-events: none;
    `;

    document.body.appendChild(this.container);
  }

  private getPositionClasses(): string {
    const positionMap = {
      'top-right': 'top-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-left': 'bottom-0 left-0',
      'top-center': 'top-0 left-1/2 transform -translate-x-1/2',
      'bottom-center': 'bottom-0 left-1/2 transform -translate-x-1/2'
    };
    return positionMap[this.config.position];
  }

  public show(notification: Omit<Notification, 'id' | 'timestamp'>): string {
    const id = this.generateId();
    const fullNotification: Notification = {
      ...notification,
      id,
      timestamp: Date.now()
    };

    this.notifications.set(id, fullNotification);
    this.renderNotification(fullNotification);
    this.enforceMaxNotifications();

    // Play sound if enabled
    if (this.config.enableSound && this.soundEnabled) {
      this.playNotificationSound(fullNotification.type);
    }

    // Vibrate if enabled
    if (this.config.enableVibration && 'vibrate' in navigator) {
      this.vibrate(fullNotification.priority);
    }

    // Show desktop notification if enabled
    if (this.config.enableDesktop && 'Notification' in window) {
      this.showDesktopNotification(fullNotification);
    }

    // Auto-dismiss if not persistent
    if (!fullNotification.persistent && fullNotification.duration !== 0) {
      const duration = fullNotification.duration || this.config.duration;
      setTimeout(() => this.dismiss(id), duration);
    }

    return id;
  }

  public dismiss(id: string): void {
    const notification = this.notifications.get(id);
    if (!notification) return;

    this.notifications.delete(id);
    const element = document.getElementById(`notification-${id}`);
    if (element) {
      element.style.animation = 'slideOut 0.3s ease-in-out forwards';
      setTimeout(() => element.remove(), 300);
    }
  }

  public dismissAll(): void {
    this.notifications.forEach((_, id) => this.dismiss(id));
  }

  public update(id: string, updates: Partial<Notification>): void {
    const notification = this.notifications.get(id);
    if (!notification) return;

    const updatedNotification = { ...notification, ...updates };
    this.notifications.set(id, updatedNotification);
    this.renderNotification(updatedNotification);
  }

  private renderNotification(notification: Notification): void {
    if (!this.container) return;

    const element = document.createElement('div');
    element.id = `notification-${notification.id}`;
    element.className = `notification ${this.getTypeClasses(notification.type)} ${this.getPriorityClasses(notification.priority)}`;
    element.style.cssText = `
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      padding: 1rem;
      margin-bottom: 0.5rem;
      max-width: 400px;
      pointer-events: auto;
      animation: slideIn 0.3s ease-in-out;
      border-left: 4px solid ${this.getTypeColor(notification.type)};
    `;

    element.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-1">${notification.title}</h4>
          <p class="text-sm text-gray-600">${notification.message}</p>
          ${notification.actions ? this.renderActions(notification.actions, notification.id) : ''}
        </div>
        <button onclick="window.notificationManager.dismiss('${notification.id}')" 
                class="ml-2 text-gray-400 hover:text-gray-600">
          ×
        </button>
      </div>
    `;

    // Replace existing notification or add new one
    const existing = document.getElementById(`notification-${notification.id}`);
    if (existing) {
      existing.replaceWith(element);
    } else {
      this.container.appendChild(element);
    }
  }

  private renderActions(actions: NotificationAction[], notificationId: string): string {
    return `
      <div class="mt-3 flex gap-2">
        ${actions.map(action => `
          <button onclick="window.notificationManager.handleAction('${notificationId}', '${action.label}')"
                  class="px-3 py-1 text-xs rounded ${this.getActionClasses(action.style)}">
            ${action.label}
          </button>
        `).join('')}
      </div>
    `;
  }

  private getTypeClasses(type: string): string {
    const typeMap = {
      success: 'border-green-500',
      error: 'border-red-500',
      warning: 'border-yellow-500',
      info: 'border-blue-500',
      loading: 'border-purple-500'
    };
    return typeMap[type as keyof typeof typeMap] || 'border-gray-500';
  }

  private getPriorityClasses(priority: string): string {
    const priorityMap = {
      low: 'opacity-75',
      medium: 'opacity-90',
      high: 'opacity-100',
      critical: 'opacity-100 ring-2 ring-red-500'
    };
    return priorityMap[priority as keyof typeof priorityMap] || 'opacity-90';
  }

  private getTypeColor(type: string): string {
    const colorMap = {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
      loading: '#8b5cf6'
    };
    return colorMap[type as keyof typeof colorMap] || '#6b7280';
  }

  private getActionClasses(style?: string): string {
    const styleMap = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-500 text-white hover:bg-red-600'
    };
    return styleMap[style as keyof typeof styleMap] || 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  }

  private enforceMaxNotifications(): void {
    if (this.notifications.size <= this.config.maxNotifications) return;

    const notifications = Array.from(this.notifications.values())
      .sort((a, b) => a.timestamp - b.timestamp);

    const toRemove = notifications.slice(0, this.notifications.size - this.config.maxNotifications);
    toRemove.forEach(notification => this.dismiss(notification.id));
  }

  private generateId(): string {
    return 'notification_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private playNotificationSound(type: string): void {
    // Create audio context for notification sounds
    try {
      const audioContext = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const frequencies = {
        success: [800, 1000],
        error: [400, 300],
        warning: [600, 500],
        info: [500, 700],
        loading: [300, 400, 500]
      };

      const freq = frequencies[type as keyof typeof frequencies] || [500];
      freq.forEach((frequency, index) => {
        setTimeout(() => {
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        }, index * 100);
      });

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.warn('Could not play notification sound:', error);
    }
  }

  private vibrate(priority: string): void {
    if (!('vibrate' in navigator)) return;

    const patterns = {
      low: [100],
      medium: [200],
      high: [300, 100, 300],
      critical: [500, 100, 500, 100, 500]
    };

    const pattern = patterns[priority as keyof typeof patterns] || [200];
    navigator.vibrate(pattern);
  }

  private async showDesktopNotification(notification: Notification): Promise<void> {
    if (Notification.permission === 'granted') {
      new Notification(notification.title, {
        body: notification.message,
        icon: '/favicon.ico',
        tag: notification.id
      });
    } else if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: '/favicon.ico',
          tag: notification.id
        });
      }
    }
  }

  private setupKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.dismissAll();
      }
    });
  }

  private setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }

  public handleAction(notificationId: string, actionLabel: string): void {
    const notification = this.notifications.get(notificationId);
    if (!notification || !notification.actions) return;

    const action = notification.actions.find(a => a.label === actionLabel);
    if (action) {
      action.action();
      this.dismiss(notificationId);
    }
  }

  public getNotifications(): Notification[] {
    return Array.from(this.notifications.values());
  }

  public getConfig(): NotificationConfig {
    return { ...this.config };
  }

  public updateConfig(newConfig: Partial<NotificationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public cleanup(): void {
    if (this.container) {
      this.container.remove();
    }
    this.notifications.clear();
  }
}

// Singleton instance
let notificationManager: AdvancedNotifications | null = null;

export function getNotificationManager(config?: Partial<NotificationConfig>): AdvancedNotifications {
  if (!notificationManager) {
    notificationManager = new AdvancedNotifications(config);
    // Make it globally available for onclick handlers
    if (typeof window !== 'undefined') {
      (window as Window & { notificationManager?: AdvancedNotifications }).notificationManager = notificationManager;
    }
  }
  return notificationManager;
}

// Convenience methods
export const notify = {
  success: (title: string, message: string, options?: Partial<Notification>) => 
    getNotificationManager().show({ type: 'success', title, message, priority: 'medium', persistent: false, ...options }),
  
  error: (title: string, message: string, options?: Partial<Notification>) => 
    getNotificationManager().show({ type: 'error', title, message, priority: 'high', persistent: true, ...options }),
  
  warning: (title: string, message: string, options?: Partial<Notification>) => 
    getNotificationManager().show({ type: 'warning', title, message, priority: 'medium', persistent: false, ...options }),
  
  info: (title: string, message: string, options?: Partial<Notification>) => 
    getNotificationManager().show({ type: 'info', title, message, priority: 'low', persistent: false, ...options }),
  
  loading: (title: string, message: string, options?: Partial<Notification>) => 
    getNotificationManager().show({ type: 'loading', title, message, priority: 'medium', persistent: true, ...options })
};