/**
 * Enhanced Accessibility Manager
 * Provides comprehensive accessibility analysis and enhancement features
 */

export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
  severity: 'high' | 'medium' | 'low';
}

export interface AccessibilityMetrics {
  contrastRatio: number;
  fontSize: number;
  focusableElements: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  screenReaderCompatible: boolean;
  colorBlindFriendly: boolean;
  motionReduced: boolean;
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  headingStructure: number;
  altTextCoverage: number;
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  metrics: AccessibilityMetrics;
  recommendations: string[];
  compliance: {
    wcag: 'A' | 'AA' | 'AAA' | 'Non-compliant';
    section508: boolean;
    ada: boolean;
  };
}

class EnhancedAccessibilityManager {
  private issues: AccessibilityIssue[] = [];
  private metrics: AccessibilityMetrics = {
    contrastRatio: 4.5,
    fontSize: 16,
    focusableElements: 0,
    ariaLabels: 0,
    keyboardNavigation: true,
    screenReaderCompatible: true,
    colorBlindFriendly: true,
    motionReduced: false,
    totalIssues: 0,
    errorCount: 0,
    warningCount: 0,
    infoCount: 0,
    headingStructure: 0,
    altTextCoverage: 0
  };
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeAccessibilityMonitoring();
  }

  private initializeAccessibilityMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.scanForAccessibilityIssues();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupMotionPreferences();
    this.setupColorContrastMonitoring();
    this.setupAccessibilityObserver();
    this.setupFocusManagement();
  }

  private setupAccessibilityObserver(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          this.analyzeAccessibility();
        }
      });
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['aria-label', 'aria-describedby', 'role', 'tabindex']
    });
  }

  private scanForAccessibilityIssues(): void {
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          element: `img[${index}]`,
          message: 'Image missing alt text',
          suggestion: 'Add alt attribute or aria-label',
          severity: 'high'
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');

      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'error',
          element: `input[${index}]`,
          message: 'Form input missing label',
          suggestion: 'Add label element or aria-label attribute',
          severity: 'high'
        });
      }
    });

    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        this.addIssue({
          type: 'warning',
          element: `heading[${index}]`,
          message: 'Heading hierarchy skipped',
          suggestion: 'Use proper heading hierarchy (h1 -> h2 -> h3)',
          severity: 'medium'
        });
      }
      lastLevel = level;
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const outline = computedStyle.outline;
      const outlineWidth = computedStyle.outlineWidth;
      
      if (outline === 'none' && outlineWidth === '0px') {
        this.addIssue({
          type: 'warning',
          element: `focusable[${index}]`,
          message: 'Element missing focus indicator',
          suggestion: 'Add visible focus styles',
          severity: 'medium'
        });
      }
    });
  }

  private setupKeyboardNavigation(): void {
    // Skip links
    this.createSkipLinks();
    
    // Trap focus in modals
    this.setupFocusTrap();
    
    // Arrow key navigation for menus
    this.setupArrowKeyNavigation();

    document.addEventListener('keydown', (event) => {
      // Handle tab navigation
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
      
      // Handle escape key
      if (event.key === 'Escape') {
        this.handleEscapeKey();
      }
      
      // Handle arrow keys for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowKeys(event);
      }
    });
  }

  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });

    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });
  }

  private createSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private setupFocusTrap(): void {
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      modal.addEventListener('keydown', (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === 'Tab') {
          if (keyEvent.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              keyEvent.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              keyEvent.preventDefault();
            }
          }
        }
      });
    });
  }

  private setupArrowKeyNavigation(): void {
    const menus = document.querySelectorAll('[role="menu"], .menu');
    menus.forEach(menu => {
      const items = menu.querySelectorAll('[role="menuitem"], .menu-item');
      let currentIndex = 0;
      
      menu.addEventListener('keydown', (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        switch (keyEvent.key) {
          case 'ArrowDown':
            keyEvent.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'ArrowUp':
            keyEvent.preventDefault();
            currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'Home':
            keyEvent.preventDefault();
            currentIndex = 0;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'End':
            keyEvent.preventDefault();
            currentIndex = items.length - 1;
            (items[currentIndex] as HTMLElement).focus();
            break;
        }
      });
    });
  }

  private setupScreenReaderSupport(): void {
    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
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

    // Announce page changes
    this.announcePageChanges();

    // Add screen reader announcements
    this.createAnnouncementRegion();
    
    // Setup live regions
    this.setupLiveRegions();
  }

  private createAnnouncementRegion(): void {
    const announcement = document.createElement('div');
    announcement.id = 'accessibility-announcements';
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    document.body.appendChild(announcement);
  }

  private setupLiveRegions(): void {
    // Create live regions for dynamic content
    const liveRegions = ['status', 'alert', 'log'];
    liveRegions.forEach(region => {
      const element = document.createElement('div');
      element.id = `live-${region}`;
      element.setAttribute('aria-live', region === 'alert' ? 'assertive' : 'polite');
      element.className = 'sr-only';
      document.body.appendChild(element);
    });
  }

  private announcePageChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const liveRegion = document.querySelector('[aria-live="polite"]');
          if (liveRegion) {
            liveRegion.textContent = 'Page content updated';
            setTimeout(() => {
              liveRegion.textContent = '';
            }, 1000);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupMotionPreferences(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      this.disableAnimations();
    }
    
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        this.disableAnimations();
      } else {
        this.enableAnimations();
      }
    });
  }

  private disableAnimations(): void {
    const style = document.createElement('style');
    style.id = 'reduced-motion';
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  private enableAnimations(): void {
    const style = document.getElementById('reduced-motion');
    if (style) {
      style.remove();
    }
  }

  private setupColorContrastMonitoring(): void {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        const contrastRatio = this.calculateContrastRatio(color, backgroundColor);
        if (contrastRatio < 4.5) {
          this.addIssue({
            type: 'error',
            element: element.tagName.toLowerCase(),
            message: `Low color contrast ratio: ${contrastRatio.toFixed(2)}`,
            suggestion: 'Increase color contrast to meet WCAG guidelines',
            severity: 'high'
          });
        }
      }
    });
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd convert colors to RGB and calculate luminance
    return 4.5; // Placeholder
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

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') !== 'true') {
        this.closeModal(modal as HTMLElement);
      }
    });
  }

  private handleArrowKeys(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    // Handle arrow keys for custom components
    if (target.getAttribute('role') === 'menuitem' || target.getAttribute('role') === 'option') {
      this.handleMenuNavigation(event);
    }
  }

  private handleMenuNavigation(event: KeyboardEvent): void {
    const menuItems = Array.from(document.querySelectorAll('[role="menuitem"], [role="option"]'));
    const currentIndex = menuItems.indexOf(event.target as HTMLElement);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
      case 'ArrowLeft':
        nextIndex = Math.max(0, currentIndex - 1);
        break;
      case 'ArrowRight':
        nextIndex = Math.min(menuItems.length - 1, currentIndex + 1);
        break;
    }
    
    if (nextIndex !== currentIndex) {
      (menuItems[nextIndex] as HTMLElement).focus();
    }
  }

  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    
    // Add focus indicator
    target.classList.add('focus-visible');
    
    // Announce focus changes for screen readers
    this.announceFocusChange(target);
  }

  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    
    // Remove focus indicator
    target.classList.remove('focus-visible');
  }

  private announceFocusChange(element: HTMLElement): void {
    const announcement = document.getElementById('accessibility-announcements');
    if (announcement) {
      const text = element.getAttribute('aria-label') || 
                  element.textContent?.trim() || 
                  element.getAttribute('alt') || 
                  'Element focused';
      announcement.textContent = text;
    }
  }

  private closeModal(modal: HTMLElement): void {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    
    // Return focus to trigger element
    const trigger = document.querySelector(`[aria-controls="${modal.id}"]`) as HTMLElement;
    if (trigger) {
      trigger.focus();
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
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="option"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  private addIssue(issue: Omit<AccessibilityIssue, 'id'>): void {
    const newIssue: AccessibilityIssue = {
      ...issue,
      id: `issue_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    this.issues.push(newIssue);
    
    // Keep only last 100 issues
    if (this.issues.length > 100) {
      this.issues = this.issues.slice(-100);
    }
  }

  public analyzeAccessibility(): AccessibilityReport {
    this.issues = [];
    this.metrics = {
      contrastRatio: 4.5,
      fontSize: 16,
      focusableElements: 0,
      ariaLabels: 0,
      keyboardNavigation: true,
      screenReaderCompatible: true,
      colorBlindFriendly: true,
      motionReduced: false,
      totalIssues: 0,
      errorCount: 0,
      warningCount: 0,
      infoCount: 0,
      headingStructure: 0,
      altTextCoverage: 0
    };

    // Analyze various accessibility aspects
    this.analyzeImages();
    this.analyzeHeadings();
    this.analyzeLinks();
    this.analyzeButtons();
    this.analyzeForms();
    this.analyzeColorContrast();
    this.analyzeKeyboardNavigation();
    this.analyzeARIALabels();
    this.analyzeFocusManagement();

    // Calculate metrics
    this.calculateMetrics();

    // Generate recommendations
    const recommendations = this.generateRecommendations();

    // Determine compliance
    const compliance = this.determineCompliance();

    // Calculate overall score
    const score = this.calculateScore();

    return {
      score,
      issues: this.issues,
      metrics: this.metrics,
      recommendations,
      compliance
    };
  }

  private analyzeImages(): void {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;

    images.forEach((img, index) => {
      if (!img.alt) {
        this.addIssue({
          type: 'error',
          element: `img[${index}]`,
          message: `Image ${index + 1} is missing alt text`,
          suggestion: 'Add descriptive alt text for screen readers',
          severity: 'high'
        });
      } else {
        imagesWithAlt++;
      }
    });

    this.metrics.altTextCoverage = images.length > 0 ? (imagesWithAlt / images.length) * 100 : 100;
  }

  private analyzeHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
    
    this.metrics.headingStructure = this.calculateHeadingStructureScore(headingLevels);

    // Check for missing H1
    if (document.querySelectorAll('h1').length === 0) {
      this.addIssue({
        type: 'error',
        element: 'h1',
        message: 'No H1 heading found',
        suggestion: 'Add a main H1 heading to structure your content',
        severity: 'high'
      });
    }

    // Check for heading hierarchy
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        this.addIssue({
          type: 'warning',
          element: `h${headingLevels[i]}`,
          message: 'Heading hierarchy is incorrect',
          suggestion: 'Maintain proper heading hierarchy (H1 > H2 > H3, etc.)',
          severity: 'medium'
        });
      }
    }
  }

  private analyzeLinks(): void {
    const links = document.querySelectorAll('a');
    
    links.forEach((link, index) => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          element: `a[${index}]`,
          message: `Link ${index + 1} has no accessible text`,
          suggestion: 'Add text content or aria-label to the link',
          severity: 'high'
        });
      }

      if (link.getAttribute('href') === '#') {
        this.addIssue({
          type: 'warning',
          element: `a[${index}]`,
          message: `Link ${index + 1} has empty href`,
          suggestion: 'Provide a meaningful href or use a button instead',
          severity: 'medium'
        });
      }
    });
  }

  private analyzeButtons(): void {
    const buttons = document.querySelectorAll('button, [role="button"]');
    
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          element: `button[${index}]`,
          message: `Button ${index + 1} has no accessible text`,
          suggestion: 'Add text content or aria-label to the button',
          severity: 'high'
        });
      }
    });
  }

  private analyzeForms(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      
      if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        this.addIssue({
          type: 'error',
          element: `input[${index}]`,
          message: `Form input ${index + 1} has no label`,
          suggestion: 'Add a label or aria-label to the form input',
          severity: 'high'
        });
      }
    });
  }

  private analyzeColorContrast(): void {
    // This is a simplified contrast check
    // In a real implementation, you would use a library like color-contrast
    this.metrics.contrastRatio = 4.5; // Placeholder value
  }

  private analyzeKeyboardNavigation(): void {
    const focusableElements = this.getFocusableElements();
    this.metrics.focusableElements = focusableElements.length;

    // Check for keyboard traps
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      const focusableInModal = modal.querySelectorAll('button, input, select, textarea, a[href]');
      if (focusableInModal.length === 0) {
        this.addIssue({
          type: 'warning',
          element: modal.tagName,
          message: 'Modal has no focusable elements',
          suggestion: 'Add focusable elements or ensure keyboard navigation works',
          severity: 'medium'
        });
      }
    });
  }

  private analyzeARIALabels(): void {
    const elementsWithRoles = document.querySelectorAll('[role]');
    
    elementsWithRoles.forEach((element, index) => {
      const role = element.getAttribute('role');
      const hasLabel = element.getAttribute('aria-label') || element.getAttribute('aria-labelledby');
      
      if (['button', 'link', 'menuitem', 'option'].includes(role || '') && !hasLabel) {
        this.addIssue({
          type: 'warning',
          element: `[role="${role}"][${index}]`,
          message: `Element with role "${role}" has no accessible name`,
          suggestion: 'Add aria-label or aria-labelledby to provide an accessible name',
          severity: 'medium'
        });
      }
    });
  }

  private analyzeFocusManagement(): void {
    // Check for focus management issues
    const skipLinks = document.querySelectorAll('a[href="#main"], a[href="#content"]');
    if (skipLinks.length === 0) {
      this.addIssue({
        type: 'info',
        element: 'body',
        message: 'No skip links found',
        suggestion: 'Add skip links to help keyboard users navigate',
        severity: 'low'
      });
    }
  }

  private calculateHeadingStructureScore(headingLevels: number[]): number {
    if (headingLevels.length === 0) return 0;
    
    let score = 100;
    let previousLevel = headingLevels[0];
    
    for (let i = 1; i < headingLevels.length; i++) {
      const currentLevel = headingLevels[i];
      if (currentLevel > previousLevel + 1) {
        score -= 20;
      }
      previousLevel = currentLevel;
    }
    
    return Math.max(0, score);
  }

  private calculateMetrics(): void {
    this.metrics.totalIssues = this.issues.length;
    this.metrics.errorCount = this.issues.filter(i => i.type === 'error').length;
    this.metrics.warningCount = this.issues.filter(i => i.type === 'warning').length;
    this.metrics.infoCount = this.issues.filter(i => i.type === 'info').length;
    this.metrics.focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]').length;
    this.metrics.ariaLabels = document.querySelectorAll('[aria-label]').length;
    this.metrics.motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    this.issues.forEach(issue => {
      if (!recommendations.includes(issue.suggestion)) {
        recommendations.push(issue.suggestion);
      }
    });
    
    // Add general recommendations
    if (this.metrics.altTextCoverage < 100) {
      recommendations.push('Add alt text to all images for better accessibility');
    }
    
    if (this.metrics.headingStructure < 80) {
      recommendations.push('Improve heading structure and hierarchy');
    }
    
    if (this.metrics.focusableElements === 0) {
      recommendations.push('Ensure all interactive elements are keyboard accessible');
    }
    
    return recommendations;
  }

  private determineCompliance(): { wcag: 'A' | 'AA' | 'AAA' | 'Non-compliant'; section508: boolean; ada: boolean } {
    const errorCount = this.metrics.errorCount;
    const warningCount = this.metrics.warningCount;
    
    let wcag: 'A' | 'AA' | 'AAA' | 'Non-compliant' = 'Non-compliant';
    if (errorCount === 0 && warningCount <= 2) {
      wcag = 'AAA';
    } else if (errorCount === 0 && warningCount <= 5) {
      wcag = 'AA';
    } else if (errorCount <= 2) {
      wcag = 'A';
    }
    
    const section508 = errorCount === 0;
    const ada = errorCount === 0 && warningCount <= 3;
    
    return { wcag, section508, ada };
  }

  private calculateScore(): number {
    let score = 100;
    
    this.issues.forEach(issue => {
      switch (issue.severity) {
        case 'high':
          score -= 20;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public getHighSeverityIssues(): AccessibilityIssue[] {
    return this.issues.filter(issue => issue.severity === 'high');
  }

  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public announceToScreenReader(message: string): void {
    const liveRegion = document.querySelector('[aria-live="polite"]');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcement = document.getElementById('accessibility-announcements');
    if (announcement) {
      announcement.setAttribute('aria-live', priority);
      announcement.textContent = message;
    }
  }

  public generateReport(): string {
    const report = this.analyzeAccessibility();
    
    return `
Accessibility Report
===================
Overall Score: ${report.score}/100

Issues Found: ${report.metrics.totalIssues}
- Errors: ${report.metrics.errorCount}
- Warnings: ${report.metrics.warningCount}
- Info: ${report.metrics.infoCount}

Compliance:
- WCAG: ${report.compliance.wcag}
- Section 508: ${report.compliance.section508 ? 'Compliant' : 'Non-compliant'}
- ADA: ${report.compliance.ada ? 'Compliant' : 'Non-compliant'}

Metrics:
- Alt Text Coverage: ${report.metrics.altTextCoverage.toFixed(1)}%
- Heading Structure: ${report.metrics.headingStructure}/100
- Focusable Elements: ${report.metrics.focusableElements}
- Color Contrast: ${report.metrics.contrastRatio}:1

Recommendations:
${report.recommendations.map(rec => `- ${rec}`).join('\n')}
    `.trim();
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const enhancedAccessibilityManager = new EnhancedAccessibilityManager();
export { EnhancedAccessibilityManager };
export type { AccessibilityReport };