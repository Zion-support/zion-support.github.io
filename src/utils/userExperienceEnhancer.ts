// UserExperienceEnhancer utility
// This file contains utility functions and configurations

interface UXConfig {
  enableSmoothScrolling: boolean;
  enableLoadingStates: boolean;
  enableErrorBoundaries: boolean;
  enableAnalytics: boolean;
  enableNotifications: boolean;
  enableProgressiveWebApp: boolean;
  enableOfflineSupport: boolean;
  enablePushNotifications: boolean;
  enableDarkMode: boolean;
  enableAnimations: boolean;
}

interface UXMetrics {
  pageLoadTime: number;
  interactionTime: number;
  bounceRate: number;
  userSatisfaction: number;
  accessibilityScore: number;
  performanceScore: number;
}

class UserExperienceEnhancer {
  private config: UXConfig;
  private metrics: UXMetrics;

  constructor(config: UXConfig) {
    this.config = config;
    this.metrics = {
      pageLoadTime: 0,
      interactionTime: 0,
      bounceRate: 0,
      userSatisfaction: 0,
      accessibilityScore: 0,
      performanceScore: 0
    };
  }

  init() {
    this.enableSmoothScrolling();
    this.enableLoadingStates();
    this.enableErrorBoundaries();
    this.enableAnalytics();
    this.enableNotifications();
    this.enableProgressiveWebApp();
    this.enableOfflineSupport();
    this.enablePushNotifications();
    this.enableDarkMode();
    this.enableAnimations();
    this.trackMetrics();
  }

  private enableSmoothScrolling() {
    if (this.config.enableSmoothScrolling && typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }

  private enableLoadingStates() {
    if (this.config.enableLoadingStates && typeof document !== 'undefined') {
      // Add loading state management
      document.addEventListener('DOMContentLoaded', () => {
        const loadingElements = document.querySelectorAll('[data-loading]');
        loadingElements.forEach(element => {
          element.classList.add('loaded');
        });
      });
    }
  }

  private enableErrorBoundaries() {
    if (this.config.enableErrorBoundaries && typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
        this.trackError(event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        this.trackError(event.reason);
      });
    }
  }

  private enableAnalytics() {
    if (this.config.enableAnalytics && typeof window !== 'undefined') {
      // Initialize analytics tracking
      this.trackPageView();
      this.trackUserInteractions();
    }
  }

  private enableNotifications() {
    if (this.config.enableNotifications && typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  }

  private enableProgressiveWebApp() {
    if (this.config.enableProgressiveWebApp && typeof window !== 'undefined') {
      // Register service worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      }
    }
  }

  private enableOfflineSupport() {
    if (this.config.enableOfflineSupport && typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.showNotification('You are back online!');
      });

      window.addEventListener('offline', () => {
        this.showNotification('You are offline. Some features may be limited.');
      });
    }
  }

  private enablePushNotifications() {
    if (this.config.enablePushNotifications && typeof window !== 'undefined' && 'PushManager' in window) {
      // Initialize push notifications
      this.initializePushNotifications();
    }
  }

  private enableDarkMode() {
    if (this.config.enableDarkMode && typeof window !== 'undefined') {
      // Check for saved theme preference or default to 'light' mode
      const currentTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }

  private enableAnimations() {
    if (this.config.enableAnimations && typeof document !== 'undefined') {
      // Enable animations based on user preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    }
  }

  private trackMetrics() {
    if (typeof window !== 'undefined') {
      // Track page load time
      window.addEventListener('load', () => {
        this.metrics.pageLoadTime = performance.now();
        this.reportMetrics();
      });

      // Track user interactions
      document.addEventListener('click', () => {
        this.metrics.interactionTime = performance.now();
      });
    }
  }

  private trackPageView() {
    if (typeof window !== 'undefined') {
      // Track page view
      console.log('Page view tracked');
    }
  }

  private trackUserInteractions() {
    if (typeof document !== 'undefined') {
      // Track clicks, scrolls, and other interactions
      document.addEventListener('click', (event) => {
        console.log('User interaction tracked:', event.target);
      });
    }
  }

  private trackError(error: Error) {
    console.error('Error tracked:', error);
    // Send error to analytics service
  }

  private showNotification(message: string) {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification('Zion Tech Group', {
        body: message,
        icon: '/favicon.ico'
      });
    }
  }

  private initializePushNotifications() {
    // Initialize push notifications
    console.log('Push notifications initialized');
  }

  private reportMetrics() {
    console.log('UX Metrics:', this.metrics);
    // Send metrics to analytics service
  }

  cleanup() {
    // Cleanup function if needed
  }
}

// Default UX configuration
const defaultUXConfig: UXConfig = {
  enableSmoothScrolling: true,
  enableLoadingStates: true,
  enableErrorBoundaries: true,
  enableAnalytics: true,
  enableNotifications: false,
  enableProgressiveWebApp: true,
  enableOfflineSupport: true,
  enablePushNotifications: false,
  enableDarkMode: true,
  enableAnimations: true
};

// Create and export UX enhancer instance
const userExperienceEnhancer = new UserExperienceEnhancer(defaultUXConfig);

export default userExperienceEnhancer;