<<<<<<< HEAD
<<<<<<< HEAD
// Notifications utility
export const notifications = {
  show: (message, type = 'info') => {
    // Simple notification implementation
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(message);
    }
  },
  
  success: (message) => {
    notifications.show(message, 'success');
  },
  
  error: (message) => {
    notifications.show(message, 'error');
  },
  
  warning: (message) => {
    notifications.show(message, 'warning');
  },
  
  info: (message) => {
    notifications.show(message, 'info');
=======
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
// Notifications utility for handling browser notifications

export const notifications = {
  // Request notification permission
  requestPermission: async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  },
  
  // Check if notifications are supported
  isSupported: () => {
    return 'Notification' in window;
  },
  
  // Check if permission is granted
  hasPermission: () => {
    if ('Notification' in window) {
      return Notification.permission === 'granted';
    }
    return false;
  },
  
  // Show a notification
  show: (title, options = {}) => {
    if (notifications.hasPermission()) {
      const notification = new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        ...options
      });
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);
      
      return notification;
    }
    return null;
  },
  
  // Show success notification
  success: (message, title = 'Success') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
  },
  
  // Show error notification
  error: (message, title = 'Error') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
  },
  
  // Show warning notification
  warning: (message, title = 'Warning') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
  },
  
  // Show info notification
  info: (message, title = 'Info') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  }
};

export default notifications;