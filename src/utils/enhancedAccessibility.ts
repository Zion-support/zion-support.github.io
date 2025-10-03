interface AccessibilityConfig {
  enableAnnouncements: boolean;
  enableFormLabels: boolean;
  enableSkipLinks: boolean;
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
  score: number;
  issues: string[];
  recommendations: string[];
}

export class EnhancedAccessibility {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableAnnouncements: true,
      enableFormLabels: true,
      enableSkipLinks: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: true,
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
  }

  private createAnnouncementRegion(): void {
    const announcementRegion = document.createElement('div');
    announcementRegion.setAttribute('aria-live', 'polite');
    announcementRegion.setAttribute('aria-atomic', 'true');
    announcementRegion.className = 'sr-only';
    announcementRegion.id = 'announcement-region';
    document.body.appendChild(announcementRegion);
  }

  private enhanceFormLabels(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
          }
        }
      });
    });
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private setupHighContrast(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          background-color: white !important;
          color: black !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupFocusManagement(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  private setupARIALabels(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }

  private setupColorContrast(): void {
    const style = document.createElement('style');
    style.textContent = `
      .contrast-check {
        filter: contrast(1.2);
      }
    `;
    document.head.appendChild(style);
  }

  private setupTextScaling(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: no-preference) {
        html {
          font-size: clamp(16px, 1vw, 20px);
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupMotionReduction(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupVoiceControl(): void {
    // Voice control setup would go here
    console.log('Voice control setup initialized');
  }

  private setupTouchAccessibility(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (hover: none) and (pointer: coarse) {
        button, a, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  public announce(message: string): void {
    const announcementRegion = document.getElementById('announcement-region');
    if (announcementRegion) {
      announcementRegion.textContent = message;
    }
  }

  public audit(): AccessibilityMetrics {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt) {
        issues.push(`Image missing alt text: ${img.src}`);
        recommendations.push('Add descriptive alt text to all images');
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label) {
          const inputType = (input as HTMLInputElement).type || 'input';
          issues.push(`Form input missing label: ${inputType}`);
          recommendations.push('Add labels to all form inputs');
        }
      }
    });

    // Check for missing headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      issues.push('No headings found on page');
      recommendations.push('Add proper heading structure');
    }

    const score = Math.max(0, 100 - (issues.length * 10));

    return {
      score,
      issues,
      recommendations
    };
  }
}

export default EnhancedAccessibility;