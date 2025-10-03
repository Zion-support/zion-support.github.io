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

  public initialize(): void {
    this.setupAnnouncements();
    this.setupFormLabels();
    this.setupSkipLinks();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupMotionReduction();
    this.setupVoiceControl();
    this.setupTouchAccessibility();
  }

  private setupAnnouncements(): void {
    if (!this.config.enableAnnouncements) return;
    
    const announcementDiv = document.createElement('div');
    announcementDiv.setAttribute('aria-live', 'polite');
    announcementDiv.setAttribute('aria-atomic', 'true');
    announcementDiv.className = 'sr-only';
    announcementDiv.id = 'accessibility-announcements';
    document.body.appendChild(announcementDiv);
  }

  private setupFormLabels(): void {
    if (!this.config.enableFormLabels) return;
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (!label) {
            input.setAttribute('aria-label', 'Form input');
          }
        }
      });
    });
  }

  private setupSkipLinks(): void {
    if (!this.config.enableSkipLinks) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
    `;
    document.head.appendChild(style);
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;
    
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
    if (!this.config.enableARIALabels) return;
    
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .color-contrast-check {
        color: #000000;
        background-color: #ffffff;
      }
    `;
    document.head.appendChild(style);
  }

  private setupTextScaling(): void {
    if (!this.config.enableTextScaling) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .text-scaling {
        font-size: 1.2em;
        line-height: 1.5;
      }
    `;
    document.head.appendChild(style);
  }

  private setupMotionReduction(): void {
    if (!this.config.enableMotionReduction) return;
    
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupVoiceControl(): void {
    if (!this.config.enableVoiceControl) return;
    
    // Voice control setup would go here
    console.log('Voice control enabled');
  }

  private setupTouchAccessibility(): void {
    if (!this.config.enableTouchAccessibility) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .touch-target {
        min-height: 44px;
        min-width: 44px;
      }
    `;
    document.head.appendChild(style);
  }

  public announce(message: string): void {
    if (!this.config.enableAnnouncements) return;
    
    const announcementDiv = document.getElementById('accessibility-announcements');
    if (announcementDiv) {
      announcementDiv.textContent = message;
    }
  }

  public audit(): AccessibilityMetrics {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Check for missing alt text
    const images = document.querySelectorAll('img:not([alt])');
    if (images.length > 0) {
      issues.push(`${images.length} images missing alt text`);
      score -= images.length * 5;
    }

    // Check for missing form labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    const unlabeledInputs = Array.from(inputs).filter(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      return !label;
    });
    
    if (unlabeledInputs.length > 0) {
      issues.push(`${unlabeledInputs.length} form inputs missing labels`);
      score -= unlabeledInputs.length * 3;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasH1 = false;
    headings.forEach(heading => {
      if (heading.tagName === 'H1') hasH1 = true;
    });
    
    if (!hasH1) {
      issues.push('Page missing H1 heading');
      score -= 10;
    }

    // Generate recommendations
    if (score < 90) {
      recommendations.push('Consider adding more descriptive alt text to images');
    }
    if (score < 85) {
      recommendations.push('Ensure all form inputs have proper labels');
    }
    if (score < 80) {
      recommendations.push('Review heading structure for better navigation');
    }

    return {
      score: Math.max(0, score),
      issues,
      recommendations
    };
  }
}

export default EnhancedAccessibility;