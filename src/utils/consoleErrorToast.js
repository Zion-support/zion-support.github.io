/**
 * Console Error Toast Utility
 * 
 * Provides toast notifications for console errors in development
 */

// Simple toast notification system for console errors
class ConsoleErrorToast {
  constructor() {
    this.toasts = [];
    this.container = null;
    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;
    
    // Create toast container
    this.container = document.createElement('div');
    this.container.id = 'console-error-toast-container';
    this.container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      pointer-events: none;
    `;
    
    document.body.appendChild(this.container);
    
    // Intercept console.error
    this.interceptConsoleError();
    
    console.log('✅ Console error toast system initialized');
  }

  interceptConsoleError() {
    const originalError = console.error;
    
    console.error = (...args) => {
      // Call original console.error
      originalError.apply(console, args);
      
      // Show toast for errors in development
      if (process.env.NODE_ENV === 'development') {
        this.showToast(args.join(' '), 'error');
      }
    };
  }

  showToast(message, type = 'info') {
    if (!this.container) return;
    
    const toast = document.createElement('div');
    toast.className = `console-toast console-toast-${type}`;
    toast.style.cssText = `
      background: ${type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      padding: 12px 16px;
      margin-bottom: 8px;
      border-radius: 6px;
      font-size: 14px;
      max-width: 300px;
      word-wrap: break-word;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      pointer-events: auto;
      cursor: pointer;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;
    
    toast.textContent = message.substring(0, 100) + (message.length > 100 ? '...' : '');
    
    // Add click to dismiss
    toast.addEventListener('click', () => this.removeToast(toast));
    
    this.container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      this.removeToast(toast);
    }, 5000);
    
    this.toasts.push(toast);
  }

  removeToast(toast) {
    if (!toast || !toast.parentNode) return;
    
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 300);
  }

  destroy() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    this.toasts = [];
  }
}

// Initialize the toast system
const consoleErrorToast = new ConsoleErrorToast();

export default consoleErrorToast;
