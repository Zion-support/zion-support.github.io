/**
 * Advanced User Experience Enhancer
 * Comprehensive UX optimization utilities
 */

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
  private loadingStates: Map<string, boolean> = new Map();
  private errorBoundaries: Map<string, Error> = new Map();

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
    this.init();
  }

  private init(): void {
    this.setupSmoothScrolling();
    this.setupLoadingStates();
    this.setupErrorBoundaries();
    this.setupAnalytics();
    this.setupNotifications();
    this.setupProgressiveWebApp();
    this.setupOfflineSupport();
    this.setupPushNotifications();
    this.setupDarkMode();
    this.setupAnimations();
    this.setupUserPreferences();
    this.setupPerformanceMonitoring();
    this.setupAccessibilityMonitoring();
  }

  private setupSmoothScrolling(): void {
    if (!this.config.enableSmoothScrolling) return;

    // Add smooth scrolling to all anchor links
    const _links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add smooth scrolling to window
    window.scrollTo = new Proxy(window.scrollTo, {
      apply: (target, thisArg, args) => {
        if (args[0] && typeof args[0] === 'object' && args[0].behavior !== 'smooth') {
          args[0].behavior = 'smooth';
        }
        return target.apply(thisArg, args);
      }
    });
  }

  private setupLoadingStates(): void {
    if (!this.config.enableLoadingStates) return;

    // Add loading states to buttons
    const buttons = document.querySelectorAll('button[type="submit"], button[data-loading]');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.showLoadingState(button as HTMLButtonElement);
      });
    });

    // Add loading states to forms
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        this.showFormLoadingState(form);
      });
    });

    // Add loading states to links
    const links = document.querySelectorAll('a[data-loading]');
    
    links.forEach(link => {
      link.addEventListener('click', () => {
        this.showLinkLoadingState(link as HTMLAnchorElement);
      });
    });
  }

  private showLoadingState(button: HTMLButtonElement): void {
    const originalText = button.textContent;
    const loadingText = button.dataset.loadingText || 'Loading...';
    
    button.disabled = true;
    button.textContent = loadingText;
    button.classList.add('loading');
    
    // Add spinner
    const spinner = document.createElement('span');
    spinner.className = 'spinner';
    spinner.innerHTML = '⏳';
    button.appendChild(spinner);
    
    // Store original state
    this.loadingStates.set(button.id || 'button', true);
    
    // Reset after 3 seconds (or when action completes)
    setTimeout(() => {
      this.hideLoadingState(button, originalText);
    }, 3000);
  }

  private hideLoadingState(button: HTMLButtonElement, originalText: string | null): void {
    button.disabled = false;
    button.textContent = originalText;
    button.classList.remove('loading');
    
    const spinner = button.querySelector('.spinner');
    if (spinner) {
      spinner.remove();
    }
    
    this.loadingStates.set(button.id || 'button', false);
  }

  private showFormLoadingState(form: HTMLFormElement): void {
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      this.showLoadingState(submitButton);
    }
    
    // Disable all form inputs
    const inputs = form.querySelectorAll('input, textarea, select, button');
    inputs.forEach(input => {
      (input as HTMLElement).setAttribute('disabled', 'true');
    });
  }

  private showLinkLoadingState(link: HTMLAnchorElement): void {
    const originalText = link.textContent;
    const loadingText = link.dataset.loadingText || 'Loading...';
    
    link.textContent = loadingText;
    link.classList.add('loading');
    
    // Add spinner
    const spinner = document.createElement('span');
    spinner.className = 'spinner';
    spinner.innerHTML = '⏳';
    link.appendChild(spinner);
    
    this.loadingStates.set(link.href, true);
  }

  private setupErrorBoundaries(): void {
    if (!this.config.enableErrorBoundaries) return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error, 'JavaScript Error');
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, 'Unhandled Promise Rejection');
    });

    // Error boundary for React components (if using React)
    this.setupReactErrorBoundary();
  }

  private handleError(error: Error, type: string): void {
    console.error(`${type}:`, error);
    
    // Store error
    this.errorBoundaries.set(type, error);
    
    // Show user-friendly error message
    this.showErrorMessage('Something went wrong. Please try again.');
    
    // Report error to analytics
    if (this.config.enableAnalytics) {
      this.reportError(error, type);
    }
  }

  private setupReactErrorBoundary(): void {
    // This would be implemented in a React Error Boundary component
    // For now, we'll add a generic error boundary
    const errorBoundary = document.createElement('div');
    errorBoundary.className = 'error-boundary';
    errorBoundary.style.display = 'none';
    document.body.appendChild(errorBoundary);
  }

  private showErrorMessage(message: string): void {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }

  private setupAnalytics(): void {
    if (!this.config.enableAnalytics) return;

    // Track page views
    this.trackPageView();
    
    // Track user interactions
    this.trackUserInteractions();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user satisfaction
    this.trackUserSatisfaction();
  }

  private trackPageView(): void {
    const pageData = {
      url: window.location.href,
      title: document.title,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    this.sendAnalytics('page_view', pageData);
  }

  private trackUserInteractions(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const interactionData = {
        type: 'click',
        element: target.tagName,
        id: target.id,
        className: target.className,
        text: target.textContent?.substring(0, 100),
        timestamp: Date.now()
      };
      
      this.sendAnalytics('user_interaction', interactionData);
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = {
        type: 'form_submit',
        formId: form.id,
        formAction: form.action,
        timestamp: Date.now()
      };
      
      this.sendAnalytics('form_submit', formData);
    });

    // Track scroll depth
    let _maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.sendAnalytics('scroll_depth', { depth: maxScrollDepth, timestamp: Date.now() });
      }
    });
  }

  private trackPerformanceMetrics(): void {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          pageLoadTime: perfData.loadEventEnd - perfData.navigationStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          timestamp: Date.now()
        };
        
        this.metrics.pageLoadTime = metrics.pageLoadTime;
        this.sendAnalytics('performance_metrics', metrics);
      });
    }
  }

  private trackUserSatisfaction(): void {
    // Simple satisfaction tracking based on user behavior
    let satisfactionScore = 100;
    
    // Decrease score for errors
    window.addEventListener('error', () => {
      satisfactionScore -= 10;
      this.metrics.userSatisfaction = Math.max(0, satisfactionScore);
    });
    
    // Decrease score for slow interactions
    let lastInteractionTime = Date.now();
    document.addEventListener('click', () => {
      const interactionTime = Date.now() - lastInteractionTime;
      if (interactionTime > 1000) {
        satisfactionScore -= 5;
        this.metrics.userSatisfaction = Math.max(0, satisfactionScore);
      }
      lastInteractionTime = Date.now();
    });
  }

  private sendAnalytics(event: string, data: any): void {
    // In a real application, this would send data to your analytics service
    console.log('Analytics:', event, data);
    
    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event, data);
    }
  }

  private reportError(error: Error, type: string): void {
    const errorData = {
      message: error.message,
      stack: error.stack,
      type: type,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };
    
    this.sendAnalytics('error', errorData);
  }

  private setupNotifications(): void {
    if (!this.config.enableNotifications) return;

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  private showNotification(title: string, body: string, icon?: string): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: icon || '/favicon.ico',
        badge: '/favicon.ico'
      });
    }
  }

  private setupProgressiveWebApp(): void {
    if (!this.config.enableProgressiveWebApp) return;

    // Add PWA meta tags
    this.addPWAMetaTags();
    
    // Setup service worker
    this.setupServiceWorker();
    
    // Add install prompt
    this.setupInstallPrompt();
  }

  private addPWAMetaTags(): void {
    const metaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-TileColor', content: '#4f46e5' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'theme-color', content: '#4f46e5' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  }

  private setupServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  private setupInstallPrompt(): void {
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show install button
      this.showInstallButton(deferredPrompt);
    });
  }

  private showInstallButton(deferredPrompt: any): void {
    const installButton = document.createElement('button');
    installButton.textContent = 'Install App';
    installButton.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    
    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        deferredPrompt = null;
        installButton.remove();
      });
    });
    
    document.body.appendChild(installButton);
  }

  private setupOfflineSupport(): void {
    if (!this.config.enableOfflineSupport) return;

    // Show offline indicator
    window.addEventListener('online', () => {
      this.showOfflineIndicator(false);
    });

    window.addEventListener('offline', () => {
      this.showOfflineIndicator(true);
    });
  }

  private showOfflineIndicator(isOffline: boolean): void {
    const indicator = document.getElementById('offline-indicator');
    
    if (isOffline) {
      if (!indicator) {
        const offlineDiv = document.createElement('div');
        offlineDiv.id = 'offline-indicator';
        offlineDiv.className = 'fixed top-0 left-0 right-0 bg-yellow-500 text-black p-2 text-center z-50';
        offlineDiv.textContent = 'You are offline. Some features may not be available.';
        document.body.appendChild(offlineDiv);
      }
    } else {
      if (indicator) {
        indicator.remove();
      }
    }
  }

  private setupPushNotifications(): void {
    if (!this.config.enablePushNotifications) return;

    // Setup push notification service
    this.setupPushService();
  }

  private setupPushService(): void {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        // Subscribe to push notifications
        this.subscribeToPush(registration);
      });
    }
  }

  private subscribeToPush(registration: ServiceWorkerRegistration): void {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'your-vapid-public-key' // Replace with actual VAPID key
    }).then((subscription) => {
      console.log('Push subscription:', subscription);
      // Send subscription to server
    }).catch((error) => {
      console.log('Push subscription failed:', error);
    });
  }

  private setupDarkMode(): void {
    if (!this.config.enableDarkMode) return;

    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Listen for changes
    prefersDark.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
    
    // Add dark mode toggle
    this.addDarkModeToggle();
  }

  private addDarkModeToggle(): void {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg z-50';
    toggle.innerHTML = '🌙';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      toggle.innerHTML = isDark ? '☀️' : '🌙';
      localStorage.setItem('darkMode', isDark.toString());
    });
    
    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      toggle.innerHTML = '☀️';
    }
    
    document.body.appendChild(toggle);
  }

  private setupAnimations(): void {
    if (!this.config.enableAnimations) return;

    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  private setupUserPreferences(): void {
    // Load user preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
    
    // Apply preferences
    Object.entries(preferences).forEach(([key, value]) => {
      if (key === 'darkMode') {
        document.documentElement.classList.toggle('dark', value as boolean);
      }
      // Add more preference handling as needed
    });
  }

  private setupPerformanceMonitoring(): void {
    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            this.metrics.performanceScore = this.calculatePerformanceScore(entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure'] });
    }
  }

  private setupAccessibilityMonitoring(): void {
    // Monitor accessibility metrics
    const accessibilityObserver = new MutationObserver(() => {
      this.metrics.accessibilityScore = this.calculateAccessibilityScore();
    });
    
    accessibilityObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-label', 'aria-labelledby', 'role']
    });
  }

  private calculatePerformanceScore(entry: PerformanceEntry): number {
    // Simplified performance score calculation
    const duration = entry.duration;
    if (duration < 100) return 100;
    if (duration < 500) return 80;
    if (duration < 1000) return 60;
    if (duration < 2000) return 40;
    return 20;
  }

  private calculateAccessibilityScore(): number {
    // Simplified accessibility score calculation
    const totalElements = document.querySelectorAll('*').length;
    const accessibleElements = document.querySelectorAll('[aria-label], [aria-labelledby], [role]').length;
    
    return totalElements > 0 ? Math.round((accessibleElements / totalElements) * 100) : 0;
  }

  public getMetrics(): UXMetrics {
    return this.metrics;
  }

  public generateUXReport(): string {
    const report = `
# User Experience Report

## Metrics
- Page Load Time: ${this.metrics.pageLoadTime.toFixed(2)}ms
- Interaction Time: ${this.metrics.interactionTime.toFixed(2)}ms
- Bounce Rate: ${this.metrics.bounceRate.toFixed(1)}%
- User Satisfaction: ${this.metrics.userSatisfaction}/100
- Accessibility Score: ${this.metrics.accessibilityScore}/100
- Performance Score: ${this.metrics.performanceScore}/100

## Features
- Smooth Scrolling: ${this.config.enableSmoothScrolling ? 'Enabled' : 'Disabled'}
- Loading States: ${this.config.enableLoadingStates ? 'Enabled' : 'Disabled'}
- Error Boundaries: ${this.config.enableErrorBoundaries ? 'Enabled' : 'Disabled'}
- Analytics: ${this.config.enableAnalytics ? 'Enabled' : 'Disabled'}
- Notifications: ${this.config.enableNotifications ? 'Enabled' : 'Disabled'}
- Progressive Web App: ${this.config.enableProgressiveWebApp ? 'Enabled' : 'Disabled'}
- Offline Support: ${this.config.enableOfflineSupport ? 'Enabled' : 'Disabled'}
- Push Notifications: ${this.config.enablePushNotifications ? 'Enabled' : 'Disabled'}
- Dark Mode: ${this.config.enableDarkMode ? 'Enabled' : 'Disabled'}
- Animations: ${this.config.enableAnimations ? 'Enabled' : 'Disabled'}

## Recommendations
${this.metrics.pageLoadTime > 3000 ? '- Optimize page load time' : ''}
${this.metrics.accessibilityScore < 80 ? '- Improve accessibility features' : ''}
${this.metrics.userSatisfaction < 80 ? '- Address user satisfaction issues' : ''}
${this.metrics.performanceScore < 80 ? '- Optimize performance' : ''}
    `;
    
    return report.trim();
  }
}

export default UserExperienceEnhancer;