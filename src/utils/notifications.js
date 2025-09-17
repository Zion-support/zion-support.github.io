// Notifications utility for handling browser notifications

=======
// Notification utilities
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
export const notifications = {
  show: (message, type = 'info') => {
    // Simple notification implementation
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(`${type.toUpperCase()}: ${message}`);
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
  
=======
  info: (message) => {
    notifications.show(message, 'info');
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
  }
};

export default notifications;
