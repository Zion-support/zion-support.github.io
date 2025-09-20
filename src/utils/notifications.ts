interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closable?: boolean;
}

// Simple notification manager
class NotificationManager {
  add(message: string, options?: NotificationOptions) {
    // Simple console log for now - can be enhanced with a proper notification system
    console.log(`[${options?.type || 'info'}] ${message}`);
  }
}

const notificationManager = new NotificationManager();

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
