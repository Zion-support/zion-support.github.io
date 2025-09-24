// Notifications utility
export const notifications = {
  show: (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void => {
    // Simple notification implementation
    if (typeof window !== 'undefined') {
      // You can integrate with a notification library like react-hot-toast here
      console.log(`[${type.toUpperCase()}] ${message}`);
    }
  },

  success: (message: string): void => {
    notifications.show(message, 'success');
  },

  error: (message: string): void => {
    notifications.show(message, 'error');
  },

  warning: (message: string): void => {
    notifications.show(message, 'warning');
  },

  info: (message: string): void => {
    notifications.show(message, 'info');
  }
};

export default notifications;