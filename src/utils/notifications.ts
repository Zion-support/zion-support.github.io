interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closable?: boolean;
}

interface NotificationManager {
  add: (message: string, options?: NotificationOptions) => void;
}

// Mock notification manager for now
const notificationManager: NotificationManager = {
  add: (message: string, options?: NotificationOptions) => {
    console.log('Notification:', message, options);
  }
};

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
