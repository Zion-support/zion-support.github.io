/**
 * Advanced Accessibility Enhancer
 * Provides comprehensive accessibility optimization utilities
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableTextScaling: boolean;
  enableMotionReduction: boolean;
  enableVoiceControl: boolean;
  enableTouchAccessibility: boolean;
}

interface AccessibilityMetrics {
  colorContrastRatio: number;
  focusableElements: number;
  ariaLabels: number;
  headingStructure: number;
  altTexts: number;
  keyboardTraps: number;
  screenReaderCompatibility: number;
  overallScore: number;
}

class AdvancedAccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private isInitialized: boolean = false;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: true,
      enableVoiceControl: true,
      enableTouchAccessibility: true,
      ...config
    };

    this.metrics = {
      colorContrastRatio: 0,
      focusableElements: 0,
      ariaLabels: 0,
      headingStructure: 0,
      altTexts: 0,
      keyboardTraps: 0,
      screenReaderCompatibility: 0,
      overallScore: 0
    };
  }

  /**
   * Initialize accessibility enhancer
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      if (this.config.enableKeyboardNavigation) {
        this.setupKeyboardNavigation();
      }

      if (this.config.enableScreenReaderSupport) {
        this.setupScreenReaderSupport();
      }

      if (this.config.enableHighContrast) {
        this.setupHighContrastMode();
      }

      if (this.config.enableFocusManagement) {
        this.setupFocusManagement();
      }

      if (this.config.enableARIALabels) {
        this.setupARIALabels();
      }

      if (this.config.enableColorContrast) {
        this.setupColorContrastCheck();
      }

      if (this.config.enableTextScaling) {
        this.setupTextScaling();
      }

      if (this.config.enableMotionReduction) {
        this.setupMotionReduction();
      }

      if (this.config.enableVoiceControl) {
        this.setupVoiceControl();
      }

      if (this.config.enableTouchAccessibility) {
        this.setupTouchAccessibility();
      }

      // Calculate initial metrics
      this.calculateMetrics();

      this.isInitialized = true;
      console.log('Advanced Accessibility Enhancer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Advanced Accessibility Enhancer:', error);
    }
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    // Add skip links
    this.addSkipLinks();

    // Setup tab navigation
    this.setupTabNavigation();

    // Setup arrow key navigation
    this.setupArrowKeyNavigation();

    // Setup escape key handling
    this.setupEscapeKeyHandling();
  }

  /**
   * Add skip links for keyboard users
   */
  private addSkipLinks(): void {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipContainer = document.createElement('div');
    skipContainer.className = 'skip-links';
    skipContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      skipContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipContainer, document.body.firstChild);
  }

  /**
   * Setup tab navigation
   */
  private setupTabNavigation(): void {
    // Ensure all interactive elements are focusable
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    
    interactiveElements.forEach(element => {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .skip-links a:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup arrow key navigation for custom components
   */
  private setupArrowKeyNavigation(): void {
    // Add arrow key navigation for custom dropdowns, menus, etc.
    const customComponents = document.querySelectorAll('[role="menu"], [role="listbox"], [role="tree"]');
    
    customComponents.forEach(component => {
      component.addEventListener('keydown', (event) => {
        const items = component.querySelectorAll('[role="menuitem"], [role="option"], [role="treeitem"]');
        const currentIndex = Array.from(items).indexOf(document.activeElement as Element);
        
        switch ((event as KeyboardEvent).key) {
          case 'ArrowDown': {
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            (items[nextIndex] as HTMLElement).focus();
            break;
          }
          case 'ArrowUp': {
            event.preventDefault();
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            (items[prevIndex] as HTMLElement).focus();
            break;
          }
          case 'Home':
            event.preventDefault();
            (items[0] as HTMLElement).focus();
            break;
          case 'End':
            event.preventDefault();
            (items[items.length - 1] as HTMLElement).focus();
            break;
        }
      });
    });
  }

  /**
   * Setup escape key handling
   */
  private setupEscapeKeyHandling(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // Close any open modals, dropdowns, etc.
        const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
        openModals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"], [data-close]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }
    });
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add live regions for dynamic content
    this.addLiveRegions();

    // Ensure proper heading structure
    this.fixHeadingStructure();

    // Add screen reader only text where needed
    this.addScreenReaderOnlyText();
  }

  /**
   * Add live regions for screen readers
   */
  private addLiveRegions(): void {
    const liveRegions = [
      { id: 'status', type: 'status' },
      { id: 'alert', type: 'alert' },
      { id: 'log', type: 'log' }
    ];

    liveRegions.forEach(region => {
      const liveRegion = document.createElement('div');
      liveRegion.id = region.id;
      liveRegion.setAttribute('aria-live', region.type);
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.appendChild(liveRegion);
    });
  }

  /**
   * Fix heading structure
   */
  private fixHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let currentLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (index === 0 && level !== 1) {
        // First heading should be h1
        const h1 = document.createElement('h1');
        h1.innerHTML = heading.innerHTML;
        h1.className = heading.className;
        heading.parentNode?.replaceChild(h1, heading);
        currentLevel = 1;
      } else if (level > currentLevel + 1) {
        // Skip levels are not allowed
        const newHeading = document.createElement(`h${currentLevel + 1}`);
        newHeading.innerHTML = heading.innerHTML;
        newHeading.className = heading.className;
        heading.parentNode?.replaceChild(newHeading, heading);
        currentLevel++;
      } else {
        currentLevel = level;
      }
    });
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderOnlyText(): void {
    // Add screen reader only class
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    // Add high contrast toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle High Contrast';
    toggle.setAttribute('aria-label', 'Toggle high contrast mode');
    toggle.className = 'high-contrast-toggle';
    toggle.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
      padding: 8px 16px;
      background: #000;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 4px;
      cursor: pointer;
    `;

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      toggle.setAttribute('aria-pressed', isHighContrast.toString());
    });

    document.body.appendChild(toggle);

    // Add high contrast styles
    const highContrastStyle = document.createElement('style');
    highContrastStyle.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .high-contrast * {
        background-color: #000 !important;
        color: #fff !important;
        border-color: #fff !important;
      }
    `;
    document.head.appendChild(highContrastStyle);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Track focus changes
    let lastFocusedElement: HTMLElement | null = null;

    document.addEventListener('focusin', (event) => {
      lastFocusedElement = event.target as HTMLElement;
    });

    // Restore focus when modals close
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lastFocusedElement) {
        lastFocusedElement.focus();
      }
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    // Add ARIA labels to interactive elements that don't have them
    const interactiveElements = document.querySelectorAll('button, input, select, textarea');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Setup color contrast checking
   */
  private setupColorContrastCheck(): void {
    // This would typically involve checking color combinations
    // For now, we'll add a basic implementation
    const checkContrast = () => {
      const elements = document.querySelectorAll('*');
      let contrastIssues = 0;

      elements.forEach(element => {
        const styles = window.getComputedStyle(element);
        const backgroundColor = styles.backgroundColor;
        const color = styles.color;
        
        // Basic contrast check (simplified)
        if (backgroundColor && color) {
          // This is a simplified check - in reality, you'd need proper color contrast calculation
          this.metrics.colorContrastRatio = Math.random() * 10; // Placeholder
        }
      });

      this.metrics.colorContrastRatio = contrastIssues;
    };

    checkContrast();
  }

  /**
   * Setup text scaling
   */
  private setupTextScaling(): void {
    // Add text scaling controls
    const scaleControls = document.createElement('div');
    scaleControls.className = 'text-scale-controls';
    scaleControls.style.cssText = `
      position: fixed;
      top: 50px;
      right: 10px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 5px;
    `;

    const scaleUp = document.createElement('button');
    scaleUp.textContent = 'A+';
    scaleUp.setAttribute('aria-label', 'Increase text size');
    scaleUp.addEventListener('click', () => {
      const currentScale = parseFloat(document.documentElement.style.fontSize) || 16;
      document.documentElement.style.fontSize = `${Math.min(currentScale + 2, 24)}px`;
    });

    const scaleDown = document.createElement('button');
    scaleDown.textContent = 'A-';
    scaleDown.setAttribute('aria-label', 'Decrease text size');
    scaleDown.addEventListener('click', () => {
      const currentScale = parseFloat(document.documentElement.style.fontSize) || 16;
      document.documentElement.style.fontSize = `${Math.max(currentScale - 2, 12)}px`;
    });

    const reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.setAttribute('aria-label', 'Reset text size');
    reset.addEventListener('click', () => {
      document.documentElement.style.fontSize = '16px';
    });

    scaleControls.appendChild(scaleUp);
    scaleControls.appendChild(scaleDown);
    scaleControls.appendChild(reset);
    document.body.appendChild(scaleControls);
  }

  /**
   * Setup motion reduction
   */
  private setupMotionReduction(): void {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
      
      const style = document.createElement('style');
      style.textContent = `
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Setup voice control
   */
  private setupVoiceControl(): void {
    // Add voice control support (basic implementation)
    if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      
      recognition.onresult = (event: any) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
        
        if (command.includes('click') || command.includes('press')) {
          const element = document.activeElement as HTMLElement;
          if (element) {
            element.click();
          }
        }
      };
      
      // Start voice recognition on user interaction
      document.addEventListener('click', () => {
        recognition.start();
      });
    }
  }

  /**
   * Setup touch accessibility
   */
  private setupTouchAccessibility(): void {
    // Ensure touch targets are at least 44px
    const style = document.createElement('style');
    style.textContent = `
      button, a, input, select, textarea {
        min-height: 44px;
        min-width: 44px;
      }
      
      @media (hover: none) and (pointer: coarse) {
        button, a, input, select, textarea {
          min-height: 48px;
          min-width: 48px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Calculate accessibility metrics
   */
  private calculateMetrics(): void {
    this.metrics.focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]').length;
    this.metrics.ariaLabels = document.querySelectorAll('[aria-label], [aria-labelledby]').length;
    this.metrics.headingStructure = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
    this.metrics.altTexts = document.querySelectorAll('img[alt]').length;
    
    // Calculate overall score
    const scores = [
      this.metrics.colorContrastRatio > 4.5 ? 100 : (this.metrics.colorContrastRatio / 4.5) * 100,
      this.metrics.ariaLabels > 0 ? Math.min(100, (this.metrics.ariaLabels / this.metrics.focusableElements) * 100) : 0,
      this.metrics.headingStructure > 0 ? 100 : 0,
      this.metrics.altTexts > 0 ? 100 : 0
    ];
    
    this.metrics.overallScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  /**
   * Get accessibility metrics
   */
  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate accessibility report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    
    return `
Accessibility Report:
- Overall Score: ${metrics.overallScore}%
- Color Contrast Ratio: ${metrics.colorContrastRatio}
- Focusable Elements: ${metrics.focusableElements}
- ARIA Labels: ${metrics.ariaLabels}
- Heading Structure: ${metrics.headingStructure}
- Alt Texts: ${metrics.altTexts}
- Keyboard Traps: ${metrics.keyboardTraps}
- Screen Reader Compatibility: ${metrics.screenReaderCompatibility}
`;
  }
}
