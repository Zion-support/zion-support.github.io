/**
 * Advanced Accessibility System for Comprehensive Web Accessibility
 */

export interface AccessibilityIssue {
  id: string;
  type: 'missing_alt_text' | 'low_contrast' | 'missing_heading' | 'keyboard_navigation' | 'aria_labels' | 'focus_management' | 'color_dependency' | 'text_scaling';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  element?: HTMLElement;
  selector?: string;
  suggestion: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  timestamp: number;
  fixed: boolean;
}

export interface AccessibilityMetrics {
  totalIssues: number;
  issuesByType: Record<string, number>;
  issuesBySeverity: Record<string, number>;
  wcagCompliance: {
    levelA: number;
    levelAA: number;
    levelAAA: number;
  };
  lastScanTime: number;
  accessibilityScore: number;
}

export interface AccessibilityConfig {
  enableAutoScanning: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusIndicators: boolean;
  enableARIALabels: boolean;
  scanInterval: number;
  reportEndpoint: string;
}

class AdvancedAccessibilitySystem {
  private issues: Map<string, AccessibilityIssue> = new Map();
  private metrics: AccessibilityMetrics = {
    totalIssues: 0,
    issuesByType: {},
    issuesBySeverity: {},
    wcagCompliance: {
      levelA: 0,
      levelAA: 0,
      levelAAA: 0
    },
    lastScanTime: 0,
    accessibilityScore: 100
  };
  private config: AccessibilityConfig = {
    enableAutoScanning: true,
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: false,
    enableReducedMotion: false,
    enableFocusIndicators: true,
    enableARIALabels: true,
    scanInterval: 5000,
    reportEndpoint: '/api/accessibility-reporting'
  };
  private scanIntervalId: NodeJS.Timeout | null = null;

  constructor() {
    this.initializeAccessibilitySystem();
  }

  private initializeAccessibilitySystem(): void {
    // Setup keyboard navigation
    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    // Setup screen reader support
    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    // Setup focus management
    if (this.config.enableFocusIndicators) {
      this.setupFocusIndicators();
    }

    // Setup high contrast mode
    if (this.config.enableHighContrast) {
      this.setupHighContrastMode();
    }

    // Setup reduced motion
    if (this.config.enableReducedMotion) {
      this.setupReducedMotion();
    }

    // Setup ARIA labels
    if (this.config.enableARIALabels) {
      this.setupARIALabels();
    }

    // Start auto-scanning
    if (this.config.enableAutoScanning) {
      this.startAutoScanning();
    }

    // Setup mutation observer for dynamic content
    this.setupMutationObserver();
  }

  private setupKeyboardNavigation(): void {
    // Ensure all interactive elements are keyboard accessible
    document.addEventListener('keydown', (event) => {
      this.handleKeyboardNavigation(event);
    });

    // Add tabindex to custom interactive elements
    this.addKeyboardSupportToElements();
  }

  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, target } = event;
    const element = target as HTMLElement;

    switch (key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Enter':
      case ' ':
        if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
          event.preventDefault();
          element.click();
        }
        break;
      case 'Escape':
        this.handleEscapeKey(element);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        this.handleArrowNavigation(event, key);
        break;
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  private handleEscapeKey(element: HTMLElement): void {
    // Close modals, dropdowns, etc.
    const modal = element.closest('[role="dialog"]');
    if (modal) {
      const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
      closeButton?.click();
    }
  }

  private handleArrowNavigation(event: KeyboardEvent, direction: 'ArrowUp' | 'ArrowDown'): void {
    const element = event.target as HTMLElement;
    const listItems = element.closest('[role="listbox"]')?.querySelectorAll('[role="option"]');
    
    if (listItems) {
      const currentIndex = Array.from(listItems).indexOf(element);
      const nextIndex = direction === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
      
      if (nextIndex >= 0 && nextIndex < listItems.length) {
        (listItems[nextIndex] as HTMLElement).focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
  }

  private addKeyboardSupportToElements(): void {
    // Add keyboard support to custom elements
    const customButtons = document.querySelectorAll('[data-custom-button]');
    customButtons.forEach(button => {
      if (!button.getAttribute('tabindex')) {
        button.setAttribute('tabindex', '0');
      }
      if (!button.getAttribute('role')) {
        button.setAttribute('role', 'button');
      }
    });
  }

  private setupScreenReaderSupport(): void {
    // Add ARIA live regions for dynamic content
    this.addLiveRegions();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add skip links
    this.addSkipLinks();
  }

  private addLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('class', 'sr-only');
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const element = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      const id = element.id || this.generateId();
      
      if (!element.id) {
        element.id = id;
      }
      
      // Find or create label
      let label = document.querySelector(`label[for="${id}"]`) as HTMLLabelElement;
      if (!label) {
        label = document.createElement('label');
        label.setAttribute('for', id);
        label.textContent = element.getAttribute('placeholder') || element.getAttribute('aria-label') || 'Input field';
        element.parentNode?.insertBefore(label, element);
      }
      
      // Add required indicator
      if (element.hasAttribute('required') && !label.textContent?.includes('*')) {
        label.innerHTML += ' <span aria-label="required">*</span>';
      }
    });
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('nav');
    skipLinks.setAttribute('aria-label', 'Skip navigation');
    skipLinks.className = 'skip-links';
    
    const mainSkip = document.createElement('a');
    mainSkip.href = '#main-content';
    mainSkip.textContent = 'Skip to main content';
    mainSkip.className = 'skip-link';
    
    skipLinks.appendChild(mainSkip);
    document.body.insertBefore(skipLinks, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (!mainContent) {
      const main = document.createElement('main');
      main.id = 'main-content';
      document.body.appendChild(main);
    }
  }

  private setupFocusIndicators(): void {
    // Add focus indicators to CSS
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
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

  private setupHighContrastMode(): void {
    // Add high contrast mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'High Contrast';
    toggle.setAttribute('aria-label', 'Toggle high contrast mode');
    toggle.className = 'contrast-toggle';
    
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isEnabled = document.body.classList.contains('high-contrast');
      toggle.setAttribute('aria-pressed', isEnabled.toString());
      
      // Announce change to screen readers
      this.announceToScreenReader(`High contrast mode ${isEnabled ? 'enabled' : 'disabled'}`);
    });
    
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .contrast-toggle {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        padding: 8px 16px;
        background: #000;
        color: #fff;
        border: 2px solid #fff;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toggle);
  }

  private setupReducedMotion(): void {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
      
      // Add reduced motion styles
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

  private setupARIALabels(): void {
    // Add ARIA labels to elements that need them
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const element = button as HTMLButtonElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button');
      }
    });
    
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      const element = img as HTMLImageElement;
      element.setAttribute('alt', 'Image');
      this.reportIssue({
        type: 'missing_alt_text',
        severity: 'high',
        description: 'Image missing alt text',
        element,
        suggestion: 'Add descriptive alt text to the image',
        wcagLevel: 'A'
      });
    });
  }

  private setupMutationObserver(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node as HTMLElement);
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

  private startAutoScanning(): void {
    // Initial scan
    this.performAccessibilityScan();
    
    // Set up interval scanning
    this.scanIntervalId = setInterval(() => {
      this.performAccessibilityScan();
    }, this.config.scanInterval);
  }

  public performAccessibilityScan(): void {
    this.scanImages();
    this.scanHeadings();
    this.scanLinks();
    this.scanForms();
    this.scanColorContrast();
    this.scanKeyboardNavigation();
    
    this.metrics.lastScanTime = Date.now();
    this.updateAccessibilityScore();
  }

  private scanImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const element = img as HTMLImageElement;
      if (!element.alt) {
        this.reportIssue({
          type: 'missing_alt_text',
          severity: 'high',
          description: 'Image missing alt text',
          element,
          suggestion: 'Add descriptive alt text to the image',
          wcagLevel: 'A'
        });
      }
    });
  }

  private scanHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach(heading => {
      const element = heading as HTMLHeadingElement;
      const level = parseInt(element.tagName.charAt(1));
      
      if (level > lastLevel + 1) {
        this.reportIssue({
          type: 'missing_heading',
          severity: 'medium',
          description: `Heading level ${level} follows level ${lastLevel} without intermediate levels`,
          element,
          suggestion: 'Use proper heading hierarchy (h1 -> h2 -> h3, etc.)',
          wcagLevel: 'AA'
        });
      }
      
      lastLevel = level;
    });
  }

  private scanLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const element = link as HTMLAnchorElement;
      const text = element.textContent?.trim();
      
      if (!text || text === element.href || text.length < 3) {
        this.reportIssue({
          type: 'aria_labels',
          severity: 'medium',
          description: 'Link has unclear or missing text',
          element,
          suggestion: 'Add descriptive link text that explains the destination',
          wcagLevel: 'AA'
        });
      }
    });
  }

  private scanForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        const element = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const id = element.id;
        const label = document.querySelector(`label[for="${id}"]`);
        
        if (!label && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          this.reportIssue({
            type: 'aria_labels',
            severity: 'high',
            description: 'Form input missing label',
            element,
            suggestion: 'Add a label or aria-label to the input',
            wcagLevel: 'A'
          });
        }
      });
    });
  }

  private scanColorContrast(): void {
    // This is a simplified version - in production, you'd use a library like axe-core
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Check if colors are too similar (simplified check)
      if (this.areColorsTooSimilar(color, backgroundColor)) {
        this.reportIssue({
          type: 'low_contrast',
          severity: 'high',
          description: 'Low color contrast detected',
          element: element as HTMLElement,
          suggestion: 'Increase color contrast ratio to at least 4.5:1',
          wcagLevel: 'AA'
        });
      }
    });
  }

  private scanKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    interactiveElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      
      if (htmlElement.offsetParent === null) {
        // Element is hidden but might still be focusable
        this.reportIssue({
          type: 'keyboard_navigation',
          severity: 'medium',
          description: 'Hidden element is focusable',
          element: htmlElement,
          suggestion: 'Remove tabindex or make element visible',
          wcagLevel: 'A'
        });
      }
    });
  }

  private scanElement(element: HTMLElement): void {
    // Scan individual element for accessibility issues
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      this.reportIssue({
        type: 'missing_alt_text',
        severity: 'high',
        description: 'Image missing alt text',
        element,
        suggestion: 'Add descriptive alt text to the image',
        wcagLevel: 'A'
      });
    }
  }

  private areColorsTooSimilar(color1: string, color2: string): boolean {
    // Simplified color contrast check - in production, use a proper contrast checking library
    return color1 === color2;
  }

  private generateId(): string {
    return `accessibility-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private announceToScreenReader(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public reportIssue(issueInfo: Omit<AccessibilityIssue, 'id' | 'timestamp' | 'fixed'>): void {
    const issue: AccessibilityIssue = {
      id: this.generateId(),
      timestamp: Date.now(),
      fixed: false,
      ...issueInfo
    };

    this.issues.set(issue.id, issue);
    this.updateMetrics(issue);

    // Log issue
    console.warn('Accessibility Issue:', issue);

    // Send to server
    this.sendAccessibilityReport(issue);
  }

  private updateMetrics(issue: AccessibilityIssue): void {
    this.metrics.totalIssues++;
    this.metrics.issuesByType[issue.type] = (this.metrics.issuesByType[issue.type] || 0) + 1;
    this.metrics.issuesBySeverity[issue.severity] = (this.metrics.issuesBySeverity[issue.severity] || 0) + 1;
    
    // Update WCAG compliance
    switch (issue.wcagLevel) {
      case 'A':
        this.metrics.wcagCompliance.levelA++;
        break;
      case 'AA':
        this.metrics.wcagCompliance.levelAA++;
        break;
      case 'AAA':
        this.metrics.wcagCompliance.levelAAA++;
        break;
    }
  }

  private updateAccessibilityScore(): void {
    const criticalIssues = this.metrics.issuesBySeverity.critical || 0;
    const highIssues = this.metrics.issuesBySeverity.high || 0;
    const mediumIssues = this.metrics.issuesBySeverity.medium || 0;
    const lowIssues = this.metrics.issuesBySeverity.low || 0;

    // Calculate score based on issue severity
    const score = Math.max(0, 100 - (criticalIssues * 20 + highIssues * 10 + mediumIssues * 5 + lowIssues * 2));
    this.metrics.accessibilityScore = score;
  }

  private async sendAccessibilityReport(issue: AccessibilityIssue): Promise<void> {
    try {
      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue),
      });
    } catch (error) {
      console.error('Failed to send accessibility report:', error);
    }
  }

  public fixIssue(issueId: string): boolean {
    const issue = this.issues.get(issueId);
    if (!issue) return false;

    // Attempt to fix the issue based on type
    switch (issue.type) {
      case 'missing_alt_text':
        if (issue.element) {
          issue.element.setAttribute('alt', 'Image');
          issue.fixed = true;
        }
        break;
      case 'missing_heading':
        // This would require more complex logic to fix
        break;
      case 'aria_labels':
        if (issue.element) {
          issue.element.setAttribute('aria-label', 'Interactive element');
          issue.fixed = true;
        }
        break;
    }

    if (issue.fixed) {
      this.issues.set(issueId, issue);
      this.updateAccessibilityScore();
      this.announceToScreenReader(`Accessibility issue fixed: ${issue.description}`);
    }

    return issue.fixed;
  }

  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public getIssues(): AccessibilityIssue[] {
    return Array.from(this.issues.values()).sort((a, b) => b.timestamp - a.timestamp);
  }

  public getIssuesByType(type: AccessibilityIssue['type']): AccessibilityIssue[] {
    return this.getIssues().filter(issue => issue.type === type);
  }

  public getIssuesBySeverity(severity: AccessibilityIssue['severity']): AccessibilityIssue[] {
    return this.getIssues().filter(issue => issue.severity === severity);
  }

  public getUnfixedIssues(): AccessibilityIssue[] {
    return this.getIssues().filter(issue => !issue.fixed);
  }

  public clearIssues(): void {
    this.issues.clear();
    this.metrics = {
      totalIssues: 0,
      issuesByType: {},
      issuesBySeverity: {},
      wcagCompliance: {
        levelA: 0,
        levelAA: 0,
        levelAAA: 0
      },
      lastScanTime: 0,
      accessibilityScore: 100
    };
  }

  public stopScanning(): void {
    if (this.scanIntervalId) {
      clearInterval(this.scanIntervalId);
      this.scanIntervalId = null;
    }
  }

  public exportAccessibilityReport(): string {
    return JSON.stringify({
      timestamp: Date.now(),
      metrics: this.metrics,
      issues: this.getIssues()
    }, null, 2);
  }
}

// Singleton instance
export const accessibilitySystem = new AdvancedAccessibilitySystem();

// Convenience functions
export const reportAccessibilityIssue = (issueInfo: Omit<AccessibilityIssue, 'id' | 'timestamp' | 'fixed'>) => {
  accessibilitySystem.reportIssue(issueInfo);
};

export const getAccessibilityMetrics = () => accessibilitySystem.getMetrics();
export const getAccessibilityIssues = () => accessibilitySystem.getIssues();
export const getUnfixedIssues = () => accessibilitySystem.getUnfixedIssues();
export const fixAccessibilityIssue = (issueId: string) => accessibilitySystem.fixIssue(issueId);
export const clearAccessibilityIssues = () => accessibilitySystem.clearIssues();
export const exportAccessibilityReport = () => accessibilitySystem.exportAccessibilityReport();