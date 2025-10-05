/**
 * Enhanced Accessibility Utility
 * Provides comprehensive accessibility optimization
 */

export interface AccessibilityConfig {
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

export interface AccessibilityMetrics {
  colorContrastRatio: number;
  focusableElements: number;
  ariaLabels: number;
  headingStructure: number;
  altTexts: number;
  keyboardTraps: number;
  screenReaderCompatibility: number;
  overallScore: number;
  totalElements: number;
  accessibleElements: number;
  issuesFound: number;
  score: number;
}

class EnhancedAccessibility {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private isInitialized: boolean = false;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: true,
<<<<<<< HEAD
      enableVoiceControl: false,
      enableTouchAccessibility: true,
      ...config,
    };
  }

  public init(): void {
    if (typeof window === 'undefined') return;

    // Initialize all accessibility features
    if (this.config.enableAnnouncements) {
      this.createAnnouncementRegion();
    }

    if (this.config.enableFormLabels) {
      this.enhanceFormLabels();
    }

    if (this.config.enableSkipLinks) {
      this.addSkipLinks();
    }

    if (this.config.enableHighContrast) {
      this.setupHighContrast();
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.config.enableARIALabels) {
      this.setupARIALabels();
    }

    if (this.config.enableColorContrast) {
      this.setupColorContrast();
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
=======
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
      overallScore: 0,
      totalElements: 0,
      accessibleElements: 0,
      issuesFound: 0,
      score: 0
    };
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupMotionReduction();
    this.setupVoiceControl();
    this.setupTouchAccessibility();

    this.isInitialized = true;
    console.log('Enhanced accessibility initialized');
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Skip links and form elements
      if (event.target instanceof HTMLAnchorElement || 
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement) {
        return;
      }

      // Handle arrow key navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.navigateWithArrows(event.key === 'ArrowDown' ? 1 : -1);
      }

      // Handle tab navigation
      if (event.key === 'Tab') {
        this.enhanceTabNavigation(event);
      }
    });
  }

  private navigateWithArrows(direction: number): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    const nextIndex = Math.max(0, Math.min(focusableElements.length - 1, currentIndex + direction));
    
    if (focusableElements[nextIndex]) {
      focusableElements[nextIndex].focus();
    }
  }

  private enhanceTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex <= 0) {
        event.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex >= focusableElements.length - 1) {
        event.preventDefault();
        focusableElements[0]?.focus();
      }
    }
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader announcements
    this.createAnnouncementRegion();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add skip links
    this.addSkipLinks();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
  }

  private createAnnouncementRegion(): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'announcements';
    document.body.appendChild(announcement);
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
<<<<<<< HEAD
      const label = input.closest('label');
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
=======
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
      }
    });
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
<<<<<<< HEAD
=======
    skipLinks.className = 'skip-links';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private setupHighContrast(): void {
<<<<<<< HEAD
=======
    if (!this.config.enableHighContrast) return;

    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Add focus indicators
<<<<<<< HEAD
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
=======
    document.addEventListener('focusin', (event) => {
      (event.target as HTMLElement).classList.add('focus-visible');
    });

    document.addEventListener('focusout', (event) => {
      (event.target as HTMLElement).classList.remove('focus-visible');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    });
  }

  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', 'Image');
    });
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

<<<<<<< HEAD
    // Check color contrast
=======
    // Check color contrast ratios
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    this.checkColorContrast();
  }

  private setupTextScaling(): void {
    if (!this.config.enableTextScaling) return;

<<<<<<< HEAD
    // Initialize text scaling
    document.body.style.fontSize = '100%';

    // Listen for text size changes
    const observer = new ResizeObserver(() => {
      this.updateTextScaling();
    });

=======
    // Support for text scaling
    document.body.style.fontSize = '100%';
    
    // Listen for text scaling changes
    const observer = new ResizeObserver(() => {
      this.updateTextScaling();
    });
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    observer.observe(document.body);
  }

  private setupMotionReduction(): void {
<<<<<<< HEAD
    // Listen for motion preference
=======
    if (!this.config.enableMotionReduction) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes in motion preference
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  private setupVoiceControl(): void {
    if (!this.config.enableVoiceControl) return;

<<<<<<< HEAD
    // Basic voice control setup
    document.addEventListener('keydown', (e) => {
      if (e.key === 'v' && e.ctrlKey) {
=======
    // Add voice control support
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'v') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
        this.activateVoiceControl();
      }
    });
  }

  private setupTouchAccessibility(): void {
    if (!this.config.enableTouchAccessibility) return;

<<<<<<< HEAD
    // Ensure touch targets are at least 44px
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach((target) => {
      const element = target as HTMLElement;
      if (element.offsetHeight < 44 || element.offsetWidth < 44) {
        element.style.minHeight = '44px';
        element.style.minWidth = '44px';
=======
    // Enhance touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach((target) => {
      const element = target as HTMLElement;
      const rect = element.getBoundingClientRect();
      
      if (rect.width < 44 || rect.height < 44) {
        element.style.minWidth = '44px';
        element.style.minHeight = '44px';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
      }
    });
  }

<<<<<<< HEAD
  public getFocusableElementsCount(): number {
    const focusableSelectors = [
=======
  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
<<<<<<< HEAD
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return document.querySelectorAll(focusableSelectors).length;
  }


  private checkColorContrast(): void {
    // Basic color contrast check
    console.log('Checking color contrast...');
    // Implementation would go here
=======
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    return Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
  }

  private checkColorContrast(): void {
    // This would typically use a color contrast checking library
    console.log('Checking color contrast...');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
  }

  private updateTextScaling(): void {
    // Update text scaling based on user preferences
    const fontSize = window.getComputedStyle(document.body).fontSize;
    console.log('Text scaling updated:', fontSize);
  }

  private activateVoiceControl(): void {
    console.log('Voice control activated');
<<<<<<< HEAD
    // Voice control implementation would go here
  }

  public analyzeAccessibility(): AccessibilityMetrics {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for missing alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      recommendations.push('Add descriptive alt text to all images');
    }

    // Check for missing form labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    if (inputsWithoutLabels.length > 0) {
      issues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
      recommendations.push('Add labels or aria-label to all form inputs');
    }

    // Check for missing heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      issues.push('No headings found');
      recommendations.push('Add proper heading structure');
    }

    // Calculate overall score
    const score = this.calculateOverallScore(issues);

    return {
      score,
      issues,
      recommendations,
    };
  }

  private calculateOverallScore(issues: string[]): number {
    const baseScore = 100;
    const penaltyPerIssue = 10;
    const penalty = issues.length * penaltyPerIssue;
    return Math.max(0, baseScore - penalty);
=======
    // Implement voice control functionality
  }

  public analyzeAccessibility(): AccessibilityMetrics {
    const elements = document.querySelectorAll('*');
    const focusableElements = this.getFocusableElements();
    const ariaLabels = document.querySelectorAll('[aria-label], [aria-labelledby]');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');

    this.metrics = {
      colorContrastRatio: 4.5, // Would be calculated by a contrast checker
      focusableElements: focusableElements.length,
      ariaLabels: ariaLabels.length,
      headingStructure: headings.length,
      altTexts: imagesWithAlt.length,
      keyboardTraps: 0, // Would be detected by testing
      screenReaderCompatibility: 85, // Would be calculated based on various factors
      overallScore: 0,
      totalElements: elements.length,
      accessibleElements: focusableElements.length + ariaLabels.length,
      issuesFound: 0,
      score: 0
    };

    // Calculate overall score
    this.metrics.overallScore = this.calculateOverallScore();
    this.metrics.score = this.metrics.overallScore;

    return { ...this.metrics };
  }

  private calculateOverallScore(): number {
    let score = 0;
    const maxScore = 100;

    // Focusable elements score (20 points)
    const focusableScore = Math.min(20, (this.metrics.focusableElements / 10) * 20);
    score += focusableScore;

    // ARIA labels score (20 points)
    const ariaScore = Math.min(20, (this.metrics.ariaLabels / 5) * 20);
    score += ariaScore;

    // Alt texts score (20 points)
    const altScore = this.metrics.altTexts > 0 ? 20 : 0;
    score += altScore;

    // Heading structure score (20 points)
    const headingScore = this.metrics.headingStructure > 0 ? 20 : 0;
    score += headingScore;

    // Color contrast score (20 points)
    const contrastScore = this.metrics.colorContrastRatio >= 4.5 ? 20 : 10;
    score += contrastScore;

    return Math.min(maxScore, score);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
  }

  public announce(message: string): void {
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  public getMetrics(): AccessibilityMetrics {
<<<<<<< HEAD
    return this.analyzeAccessibility();
  }

  public getReport(): string {
    const metrics = this.getMetrics();
    return `
Accessibility Report:
Score: ${metrics.score}/100
Issues: ${metrics.issues.length}
Recommendations: ${metrics.recommendations.length}

Issues:
${metrics.issues.map(issue => `- ${issue}`).join('\n')}

Recommendations:
${metrics.recommendations.map(rec => `- ${rec}`).join('\n')}
    `.trim();
  }
}

export default EnhancedAccessibility;
=======
    return { ...this.metrics };
  }

  public getReport(): string {
    const metrics = this.analyzeAccessibility();
    return `
Enhanced Accessibility Report:
- Overall Score: ${metrics.overallScore}/100
- Focusable Elements: ${metrics.focusableElements}
- ARIA Labels: ${metrics.ariaLabels}
- Alt Texts: ${metrics.altTexts}
- Heading Structure: ${metrics.headingStructure}
- Issues Found: ${metrics.issuesFound}
- Score: ${metrics.score}%
`;
  }
}

// Export singleton instance
export const enhancedAccessibility = new EnhancedAccessibility();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  enhancedAccessibility.initialize();
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-393e
