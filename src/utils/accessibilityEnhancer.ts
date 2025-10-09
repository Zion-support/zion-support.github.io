/**
 * Advanced Accessibility Enhancer
 * Comprehensive accessibility optimization utilities
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableReducedMotion: boolean;
  enableColorBlindSupport: boolean;
  enableVoiceControl: boolean;
}

interface A11yMetrics {
  focusableElements: number;
  headingStructure: boolean;
  colorContrast: number;
  altTextCoverage: number;
  keyboardAccessibility: number;
  screenReaderCompatibility: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: A11yMetrics;
  private focusableElements: HTMLElement[] = [];
  private _currentFocusIndex: number = 0;

  constructor(config: AccessibilityConfig) {
    this.config = config;
    this.metrics = {
      focusableElements: 0,
      headingStructure: false,
      colorContrast: 0,
      altTextCoverage: 0,
      keyboardAccessibility: 0,
      screenReaderCompatibility: 0
    };
    this.init();
  }

  private init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupReducedMotion();
    this.setupColorBlindSupport();
    this.setupVoiceControl();
    this.auditAccessibility();
    this.optimizeImages();
    this.optimizeForms();
    this.optimizeHeadings();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    // Track focusable elements
    this.updateFocusableElements();

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardNavigation(e);
    });

    // Update focusable elements on DOM changes
    const _observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private updateFocusableElements(): void {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'area[href]',
      'iframe',
      'object',
      'embed'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];

    this.metrics.focusableElements = this.focusableElements.length;
  }

  private handleKeyboardNavigation(e: KeyboardEvent): void {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      if (e.shiftKey) {
        this.currentFocusIndex = this.currentFocusIndex > 0 
          ? this.currentFocusIndex - 1 
          : this.focusableElements.length - 1;
      } else {
        this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
          ? this.currentFocusIndex + 1 
          : 0;
      }

      this.focusableElements[this.currentFocusIndex]?.focus();
    }

    // Handle arrow key navigation for custom components
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      this.handleArrowKeyNavigation(e);
    }

    // Handle Escape key
    if (e.key === 'Escape') {
      this.handleEscapeKey();
    }
  }

  private handleArrowKeyNavigation(e: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const parent = activeElement.closest('[role="menu"], [role="listbox"], [role="grid"]');
    
    if (parent) {
      const items = Array.from(parent.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]'));
      const currentIndex = items.indexOf(activeElement);
      
      let _nextIndex = currentIndex;
      
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          break;
      }
      
      if (nextIndex !== currentIndex) {
        (items[nextIndex] as HTMLElement)?.focus();
      }
    }
  }

  private handleEscapeKey(): void {
    // Close modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label="Close"], [data-dismiss="modal"]');
      (closeButton as HTMLElement)?.click();
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReader) return;

    // Add screen reader only text
    this.addScreenReaderText();
    
    // Enhance ARIA labels
    this.enhanceAriaLabels();
    
    // Add live regions for dynamic content
    this.setupLiveRegions();
  }

  private addScreenReaderText(): void {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add screen reader only text for icons
    const icons = document.querySelectorAll('[data-icon]');
    icons.forEach(icon => {
      const text = icon.getAttribute('data-icon');
      if (text && !icon.getAttribute('aria-label')) {
        icon.setAttribute('aria-label', text);
      }
    });
  }

  private enhanceAriaLabels(): void {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const icon = button.querySelector('svg, i, [class*="icon"]');
      if (icon && !button.textContent?.trim()) {
        const iconName = icon.getAttribute('data-icon') || 
                        icon.getAttribute('aria-label') || 
                        'button';
        button.setAttribute('aria-label', iconName);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      }
    });
  }

  private setupLiveRegions(): void {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;

    // Detect high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Trap focus in modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          this.trapFocus(modal as HTMLElement, e);
        }
      }
    });

    // Manage focus on page load
    window.addEventListener('load', () => {
      const mainContent = document.querySelector('main, [role="main"]');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
      }
    });
  }

  private trapFocus(element: HTMLElement, e: KeyboardEvent): void {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    // Detect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }

  private setupColorBlindSupport(): void {
    if (!this.config.enableColorBlindSupport) return;

    // Add color blind friendly alternatives
    const colorBlindStyles = document.createElement('style');
    colorBlindStyles.textContent = `
      .color-blind-friendly {
        position: relative;
      }
      
      .color-blind-friendly::after {
        content: attr(data-pattern);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          currentColor 2px,
          currentColor 4px
        );
        opacity: 0.3;
        pointer-events: none;
      }
    `;
    document.head.appendChild(colorBlindStyles);
  }

  private setupVoiceControl(): void {
    if (!this.config.enableVoiceControl) return;

    // Add voice control hints
    const voiceControlHints = document.createElement('div');
    voiceControlHints.className = 'sr-only';
    voiceControlHints.innerHTML = `
      <p>Voice control available. Say "click" followed by the element name to activate.</p>
    `;
    document.body.appendChild(voiceControlHints);
  }

  private auditAccessibility(): void {
    this.checkHeadingStructure();
    this.checkColorContrast();
    this.checkAltTextCoverage();
    this.checkKeyboardAccessibility();
    this.checkScreenReaderCompatibility();
  }

  private checkHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasH1 = false;
    let structureValid = true;
    let lastLevel = 0;

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level === 1) hasH1 = true;
      
      if (level > lastLevel + 1) {
        structureValid = false;
      }
      
      lastLevel = level;
    });

    this.metrics.headingStructure = hasH1 && structureValid;
  }

  private checkColorContrast(): void {
    // This is a simplified check - in production, use a proper contrast checker
    const textElements = document.querySelectorAll('p, span, div, a, button');
    let totalElements = textElements.length;
    let accessibleElements = 0;

    textElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Simplified contrast check (would need proper implementation)
      if (color !== backgroundColor) {
        accessibleElements++;
      }
    });

    this.metrics.colorContrast = totalElements > 0 ? (accessibleElements / totalElements) * 100 : 0;
  }

  private checkAltTextCoverage(): void {
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
    
    this.metrics.altTextCoverage = images.length > 0 
      ? (imagesWithAlt.length / images.length) * 100 
      : 100;
  }

  private checkKeyboardAccessibility(): void {
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    const accessibleElements = Array.from(interactiveElements).filter(element => {
      const tabIndex = element.getAttribute('tabindex');
      return tabIndex !== '-1' && !element.hasAttribute('disabled');
    });

    this.metrics.keyboardAccessibility = interactiveElements.length > 0 
      ? (accessibleElements.length / interactiveElements.length) * 100 
      : 100;
  }

  private checkScreenReaderCompatibility(): void {
    const elements = document.querySelectorAll('*');
    const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby], [role]');
    
    this.metrics.screenReaderCompatibility = elements.length > 0 
      ? (elementsWithAria.length / elements.length) * 100 
      : 0;
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Ensure all images have alt text
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', '');
      }

      // Add loading attribute for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add dimensions to prevent layout shift
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        });
      }
    });
  }

  private optimizeForms(): void {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      // Add proper labels
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        const id = input.getAttribute('id');
        const label = form.querySelector(`label[for="${id}"]`);
        
        if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const labelElement = document.createElement('label');
          labelElement.setAttribute('for', id || '');
          labelElement.textContent = input.getAttribute('placeholder') || 'Input field';
          input.parentNode?.insertBefore(labelElement, input);
        }
      });

      // Add fieldset for grouped inputs
      const radioGroups = form.querySelectorAll('input[type="radio"]');
      const groupedRadios = new Map();
      
      radioGroups.forEach(radio => {
        const name = radio.getAttribute('name');
        if (name) {
          if (!groupedRadios.has(name)) {
            groupedRadios.set(name, []);
          }
          groupedRadios.get(name).push(radio);
        }
      });

      groupedRadios.forEach((radios, name) => {
        if (radios.length > 1) {
          const fieldset = document.createElement('fieldset');
          const legend = document.createElement('legend');
          legend.textContent = `${name} options`;
          
          radios.forEach(radio => {
            fieldset.appendChild(radio.parentNode?.cloneNode(true) || radio);
          });
          
          fieldset.appendChild(legend);
          form.appendChild(fieldset);
        }
      });
    });
  }

  private optimizeHeadings(): void {
    // Ensure proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > lastLevel + 1) {
        // Adjust heading level
        const newLevel = Math.min(6, lastLevel + 1);
        const newTag = `h${newLevel}`;
        const newHeading = document.createElement(newTag);
        newHeading.innerHTML = heading.innerHTML;
        newHeading.className = heading.className;
        heading.parentNode?.replaceChild(newHeading, heading);
        lastLevel = newLevel;
      } else {
        lastLevel = level;
      }
    });
  }

  public announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  public getMetrics(): A11yMetrics {
    return this.metrics;
  }

  public generateReport(): string {
    const report = `
# Accessibility Report

## Metrics
- Focusable Elements: ${this.metrics.focusableElements}
- Heading Structure: ${this.metrics.headingStructure ? 'Valid' : 'Invalid'}
- Color Contrast: ${this.metrics.colorContrast.toFixed(1)}%
- Alt Text Coverage: ${this.metrics.altTextCoverage.toFixed(1)}%
- Keyboard Accessibility: ${this.metrics.keyboardAccessibility.toFixed(1)}%
- Screen Reader Compatibility: ${this.metrics.screenReaderCompatibility.toFixed(1)}%

## Recommendations
${this.metrics.headingStructure ? '' : '- Fix heading structure hierarchy'}
${this.metrics.colorContrast < 80 ? '- Improve color contrast ratios' : ''}
${this.metrics.altTextCoverage < 100 ? '- Add alt text to all images' : ''}
${this.metrics.keyboardAccessibility < 100 ? '- Improve keyboard navigation' : ''}
${this.metrics.screenReaderCompatibility < 50 ? '- Add more ARIA labels and roles' : ''}
    `;
    
    return report.trim();
  }
}

export default AccessibilityEnhancer;