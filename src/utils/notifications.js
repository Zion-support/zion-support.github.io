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
  }
};

export default notifications;