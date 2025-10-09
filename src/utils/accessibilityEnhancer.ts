'use client';

/**
 * Enhanced Accessibility Enhancer for Zion Tech Group
 * Implements comprehensive accessibility features for better user experience
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableReducedMotion: boolean;
  enableVoiceNavigation: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private focusableElements: string = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  private currentFocusIndex: number = 0;
  private focusableElementsList: HTMLElement[] = [];

  constructor(config: AccessibilityConfig) {
    this.config = config;
    this.initializeAccessibility();
  }

  private initializeAccessibility() {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupReducedMotion();
    this.setupVoiceNavigation();
    this.setupARIALabels();
    this.setupSkipLinks();
    this.setupColorContrast();
    this.setupTextScaling();
  }

  private setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (e) => {
      // Tab navigation
      if (e.key === 'Tab') {
        this.updateFocusableElements();
        this.handleTabNavigation(e);
      }

      // Enter and Space for interactive elements
      if (e.key === 'Enter' || e.key === ' ') {
        this.handleActivation(e);
      }

      // Escape key handling
      if (e.key === 'Escape') {
        this.handleEscapeKey(e);
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        this.handleArrowNavigation(e);
      }
    });
  }

  private updateFocusableElements() {
    this.focusableElementsList = Array.from(
      document.querySelectorAll(this.focusableElements)
    ).filter(el => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && !el.disabled;
    });
  }

  private handleTabNavigation(e: KeyboardEvent) {
    this.updateFocusableElements();
    
    if (e.shiftKey) {
      // Shift + Tab (backward)
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElementsList.length - 1;
    } else {
      // Tab (forward)
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElementsList.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    const targetElement = this.focusableElementsList[this.currentFocusIndex];
    if (targetElement) {
      targetElement.focus();
      this.announceToScreenReader(`Focused on ${this.getElementDescription(targetElement)}`);
    }
  }

  private handleActivation(e: KeyboardEvent) {
    const target = e.target as HTMLElement;
    if (target && (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button')) {
      e.preventDefault();
      target.click();
    }
  }

  private handleEscapeKey(e: KeyboardEvent) {
    // Close modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') === 'false') {
        (modal as HTMLElement).click();
      }
    });
  }

  private handleArrowNavigation(e: KeyboardEvent) {
    const target = e.target as HTMLElement;
    const container = target.closest('[role="menu"], [role="listbox"], [role="grid"]');
    
    if (container) {
      e.preventDefault();
      this.navigateInContainer(container, e.key);
    }
  }

  private navigateInContainer(container: Element, direction: string) {
    const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]'));
    const currentIndex = items.indexOf(document.activeElement as Element);
    
    let newIndex = currentIndex;
    switch (direction) {
      case 'ArrowUp':
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'ArrowDown':
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
    }

    if (items[newIndex]) {
      (items[newIndex] as HTMLElement).focus();
    }
  }

  private setupScreenReaderSupport() {
    if (!this.config.enableScreenReader) return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    this.announcePageChanges();
  }

  private announceToScreenReader(message: string) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  private announcePageChanges() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);
          addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.getAttribute('aria-live') === 'polite') {
                this.announceToScreenReader(element.textContent || '');
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupHighContrastMode() {
    if (!this.config.enableHighContrast) return;

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes
    prefersHighContrast.addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  private setupFocusManagement() {
    if (!this.config.enableFocusManagement) return;

    // Focus trap for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          this.trapFocus(modal as HTMLElement, e);
        }
      }
    });

    // Focus restoration
    let lastFocusedElement: HTMLElement | null = null;
    
    document.addEventListener('focusin', (e) => {
      lastFocusedElement = e.target as HTMLElement;
    });

    // Restore focus when modal closes
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('aria-hidden') === 'true' && lastFocusedElement) {
        lastFocusedElement.focus();
      }
    });
  }

  private trapFocus(container: HTMLElement, e: KeyboardEvent) {
    const focusableElements = container.querySelectorAll(this.focusableElements);
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  private setupReducedMotion() {
    if (!this.config.enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  private setupVoiceNavigation() {
    if (!this.config.enableVoiceNavigation) return;

    // Voice commands for navigation
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
        this.handleVoiceCommand(command);
      };

      // Start voice recognition on user interaction
      document.addEventListener('click', () => {
        if (!recognition.isRunning) {
          recognition.start();
        }
      });
    }
  }

  private handleVoiceCommand(command: string) {
    if (command.includes('home') || command.includes('main')) {
      const homeLink = document.querySelector('a[href="/"]') as HTMLElement;
      homeLink?.focus();
    } else if (command.includes('contact')) {
      const contactLink = document.querySelector('a[href="/contact"]') as HTMLElement;
      contactLink?.focus();
    } else if (command.includes('services')) {
      const servicesLink = document.querySelector('a[href="/services"]') as HTMLElement;
      servicesLink?.focus();
    }
  }

  private setupARIALabels() {
    // Add ARIA labels to interactive elements without proper labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  private setupSkipLinks() {
    // Create skip links
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    
    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLinksContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }

  private setupColorContrast() {
    // Check color contrast ratios
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color && backgroundColor && color !== backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          element.classList.add('low-contrast');
        }
      }
    });
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder
  }

  private setupTextScaling() {
    // Support for text scaling preferences
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: no-preference)');
    
    if (prefersLargeText.matches) {
      document.body.classList.add('large-text');
    }
  }

  private getElementDescription(element: HTMLElement): string {
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    const textContent = element.textContent?.trim();
    
    if (ariaLabel) return ariaLabel;
    if (ariaLabelledBy) {
      const labelledByElement = document.getElementById(ariaLabelledBy);
      return labelledByElement?.textContent?.trim() || '';
    }
    if (textContent) return textContent;
    
    return element.tagName.toLowerCase();
  }

  // Public methods
  public announce(message: string) {
    this.announceToScreenReader(message);
  }

  public setFocus(element: HTMLElement) {
    element.focus();
    this.announceToScreenReader(`Focused on ${this.getElementDescription(element)}`);
  }

  public cleanup() {
    // Cleanup event listeners and observers
    document.removeEventListener('keydown', this.handleKeyboardNavigation);
    document.removeEventListener('focusin', this.handleFocusIn);
    document.removeEventListener('click', this.handleClick);
  }
}

// Singleton instance
let accessibilityEnhancer: AccessibilityEnhancer | null = null;

export const initializeAccessibility = (config: AccessibilityConfig) => {
  if (typeof window !== 'undefined' && !accessibilityEnhancer) {
    accessibilityEnhancer = new AccessibilityEnhancer(config);
  }
};

export const getAccessibilityEnhancer = () => accessibilityEnhancer;

export const cleanupAccessibility = () => {
  accessibilityEnhancer?.cleanup();
  accessibilityEnhancer = null;
};

export default AccessibilityEnhancer;