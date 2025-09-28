/**
 * Enhanced User Experience Manager
 * Provides advanced UX features and user interaction optimization
 */

interface UXMetrics {
  sessionStart: number;
  pageViews: number;
  interactions: number;
  scrollDepth: number;
  timeOnPage: number;
  bounceRate: number;
  conversionEvents: number;
}

interface UXPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  animations: boolean;
  sounds: boolean;
  notifications: boolean;
  autoSave: boolean;
}

interface UserFeedback {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  action?: {
    label: string;
    callback: () => void;
  };
}

class EnhancedUXManager {
  private static instance: EnhancedUXManager;
  private metrics: UXMetrics;
  private preferences: UXPreferences;
  private feedbackQueue: UserFeedback[] = [];
  private isInitialized = false;
  private sessionStartTime: number;
  private lastInteractionTime: number;

  private constructor() {
    this.sessionStartTime = Date.now();
    this.lastInteractionTime = Date.now();
    this.metrics = this.initializeMetrics();
    this.preferences = this.loadPreferences();
  }

  public static getInstance(): EnhancedUXManager {
    if (!EnhancedUXManager.instance) {
      EnhancedUXManager.instance = new EnhancedUXManager();
    }
    return EnhancedUXManager.instance;
  }

  public initialize(): void {
    if (this.isInitialized) return;
    
    console.log('✨ Enhanced UX Manager initialized');
    
    this.setupThemeManagement();
    this.setupInteractionTracking();
    this.setupScrollTracking();
    this.setupKeyboardShortcuts();
    this.setupAutoSave();
    this.setupOfflineHandling();
    this.setupPerformanceOptimizations();
    this.createFeedbackSystem();
    
    this.isInitialized = true;
  }

  public showFeedback(feedback: UserFeedback): void {
    this.feedbackQueue.push(feedback);
    this.processFeedbackQueue();
  }

  public updatePreferences(newPreferences: Partial<UXPreferences>): void {
    this.preferences = { ...this.preferences, ...newPreferences };
    this.savePreferences();
    this.applyPreferences();
    this.showFeedback({
      type: 'success',
      message: 'Preferences updated successfully'
    });
  }

  public getMetrics(): UXMetrics {
    return { ...this.metrics };
  }

  public getPreferences(): UXPreferences {
    return { ...this.preferences };
  }

  private initializeMetrics(): UXMetrics {
    return {
      sessionStart: this.sessionStartTime,
      pageViews: 1,
      interactions: 0,
      scrollDepth: 0,
      timeOnPage: 0,
      bounceRate: 0,
      conversionEvents: 0
    };
  }

  private loadPreferences(): UXPreferences {
    const stored = localStorage.getItem('uxPreferences');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.warn('Failed to parse UX preferences:', error);
      }
    }
    
    return {
      theme: 'auto',
      language: navigator.language.split('-')[0],
      fontSize: 'medium',
      animations: true,
      sounds: true,
      notifications: true,
      autoSave: true
    };
  }

  private savePreferences(): void {
    localStorage.setItem('uxPreferences', JSON.stringify(this.preferences));
  }

  private applyPreferences(): void {
    const root = document.documentElement;
    
    // Apply theme
    if (this.preferences.theme === 'dark' || 
        (this.preferences.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
    
    // Apply font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${this.preferences.fontSize}`);
    
    // Apply animations
    if (!this.preferences.animations) {
      root.classList.add('no-animations');
    } else {
      root.classList.remove('no-animations');
    }
  }

  private setupThemeManagement(): void {
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.preferences.theme === 'auto') {
        this.applyPreferences();
      }
    });
    
    // Add theme toggle functionality
    this.addThemeToggle();
  }

  private addThemeToggle(): void {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '🌓';
    toggle.title = 'Toggle theme';
    toggle.addEventListener('click', () => {
      const currentTheme = this.preferences.theme;
      let newTheme: UXPreferences['theme'];
      
      if (currentTheme === 'light') {
        newTheme = 'dark';
      } else if (currentTheme === 'dark') {
        newTheme = 'auto';
      } else {
        newTheme = 'light';
      }
      
      this.updatePreferences({ theme: newTheme });
    });
    
    document.body.appendChild(toggle);
  }

  private setupInteractionTracking(): void {
    const trackInteraction = () => {
      this.metrics.interactions++;
      this.lastInteractionTime = Date.now();
    };
    
    ['click', 'keydown', 'scroll', 'touchstart'].forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, { passive: true });
    });
  }

  private setupScrollTracking(): void {
    let maxScrollDepth = 0;
    
    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = documentHeight > 0 ? scrollTop / documentHeight : 0;
      
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
      this.metrics.scrollDepth = maxScrollDepth;
    };
    
    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  private setupKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      // Ctrl/Cmd + K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        this.focusSearch();
      }
      
      // Ctrl/Cmd + / for help
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        this.showHelp();
      }
      
      // Escape to close modals
      if (event.key === 'Escape') {
        this.closeModals();
      }
    });
  }

  private setupAutoSave(): void {
    if (!this.preferences.autoSave) return;
    
    // Auto-save form data
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const formId = form.id || `form-${Date.now()}`;
      
      form.addEventListener('input', () => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        localStorage.setItem(`autosave-${formId}`, JSON.stringify(data));
      });
      
      // Restore saved data
      const savedData = localStorage.getItem(`autosave-${formId}`);
      if (savedData) {
        try {
          const data = JSON.parse(savedData);
          Object.entries(data).forEach(([name, value]) => {
            const input = form.querySelector(`[name="${name}"]`) as HTMLInputElement;
            if (input) {
              input.value = value as string;
            }
          });
        } catch (error) {
          console.warn('Failed to restore form data:', error);
        }
      }
    });
  }

  private setupOfflineHandling(): void {
    // Handle offline/online status
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine;
      document.body.classList.toggle('offline', !isOnline);
      
      this.showFeedback({
        type: isOnline ? 'success' : 'warning',
        message: isOnline ? 'Back online' : 'You are offline',
        duration: 3000
      });
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial check
    updateOnlineStatus();
  }

  private setupPerformanceOptimizations(): void {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Optimize scroll performance
    this.optimizeScrollPerformance();
  }

  private setupLazyLoading(): void {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  private preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  private optimizeScrollPerformance(): void {
    let ticking = false;
    
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Perform scroll-related operations here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
  }

  private createFeedbackSystem(): void {
    const feedbackContainer = document.createElement('div');
    feedbackContainer.className = 'feedback-container';
    feedbackContainer.setAttribute('aria-live', 'polite');
    document.body.appendChild(feedbackContainer);
  }

  private processFeedbackQueue(): void {
    const container = document.querySelector('.feedback-container');
    if (!container || this.feedbackQueue.length === 0) return;
    
    const feedback = this.feedbackQueue.shift();
    if (!feedback) return;
    
    const feedbackElement = this.createFeedbackElement(feedback);
    container.appendChild(feedbackElement);
    
    // Auto-remove after duration
    const duration = feedback.duration || 5000;
    setTimeout(() => {
      feedbackElement.remove();
    }, duration);
  }

  private createFeedbackElement(feedback: UserFeedback): HTMLElement {
    const element = document.createElement('div');
    element.className = `feedback feedback-${feedback.type}`;
    element.innerHTML = `
      <div class="feedback-content">
        <span class="feedback-message">${feedback.message}</span>
        ${feedback.action ? `<button class="feedback-action">${feedback.action.label}</button>` : ''}
        <button class="feedback-close">×</button>
      </div>
    `;
    
    // Add action handler
    const actionButton = element.querySelector('.feedback-action');
    if (actionButton && feedback.action) {
      actionButton.addEventListener('click', feedback.action.callback);
    }
    
    // Add close handler
    const closeButton = element.querySelector('.feedback-close');
    closeButton?.addEventListener('click', () => element.remove());
    
    return element;
  }

  private focusSearch(): void {
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
      this.showFeedback({
        type: 'info',
        message: 'Search focused',
        duration: 2000
      });
    }
  }

  private showHelp(): void {
    const helpModal = document.createElement('div');
    helpModal.className = 'help-modal';
    helpModal.innerHTML = `
      <div class="help-content">
        <h2>Keyboard Shortcuts</h2>
        <ul>
          <li><kbd>Ctrl/Cmd + K</kbd> - Focus search</li>
          <li><kbd>Ctrl/Cmd + /</kbd> - Show this help</li>
          <li><kbd>Esc</kbd> - Close modals</li>
          <li><kbd>Tab</kbd> - Navigate elements</li>
        </ul>
        <button class="help-close">Close</button>
      </div>
    `;
    
    document.body.appendChild(helpModal);
    
    const closeButton = helpModal.querySelector('.help-close');
    closeButton?.addEventListener('click', () => helpModal.remove());
    
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        helpModal.remove();
      }
    });
  }

  private closeModals(): void {
    const modals = document.querySelectorAll('.modal, .help-modal, .feedback');
    modals.forEach(modal => modal.remove());
  }
}

export default EnhancedUXManager;
export type { UXMetrics, UXPreferences, UserFeedback };