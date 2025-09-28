/**
 * Accessibility Enhancements
 * Provides essential accessibility features and testing
 */

export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'color' | 'contrast' | 'keyboard' | 'screenreader' | 'semantic' | 'focus';
  element: HTMLElement;
  message: string;
  suggestion: string;
  severity: number;
  fixable: boolean;
}

export class AccessibilityEnhancements {
  private static instance: AccessibilityEnhancements;
  private issues: Map<string, AccessibilityIssue> = new Map();
  private isMonitoring = false;

  public static getInstance(): AccessibilityEnhancements {
    if (!AccessibilityEnhancements.instance) {
      AccessibilityEnhancements.instance = new AccessibilityEnhancements();
    }
    return AccessibilityEnhancements.instance;
  }

  public initialize(): void {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderOptimizations();
    console.log('♿ Accessibility Enhancements initialized');
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.performAccessibilityAudit();
    console.log('🔍 Accessibility monitoring started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    console.log('🛑 Accessibility monitoring stopped');
  }

  private setupKeyboardNavigation(): void {
    // Add skip links
    this.addSkipLinks();
    
    // Setup keyboard shortcuts
    document.addEventListener('keydown', (event) => {
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        this.focusMainContent();
      }
    });
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
    `;
    skipLinks.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 10000;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private focusMainContent(): void {
    const main = document.querySelector('main, #main-content, [role="main"]') as HTMLElement;
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  }

  private setupFocusManagement(): void {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #007acc !important;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  private setupScreenReaderOptimizations(): void {
    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.id = 'live-region';
    liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    document.body.appendChild(liveRegion);
  }

  private performAccessibilityAudit(): void {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => this.auditElement(element as HTMLElement));
  }

  private auditElement(element: HTMLElement): void {
    this.checkColorContrast(element);
    this.checkSemanticStructure(element);
  }

  private checkColorContrast(element: HTMLElement): void {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;

    if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
      const contrastRatio = this.calculateContrastRatio(color, backgroundColor);
      const minRatio = 4.5;

      if (contrastRatio < minRatio) {
        this.addIssue({
          id: `contrast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: 'error',
          category: 'contrast',
          element,
          message: `Insufficient color contrast ratio: ${contrastRatio.toFixed(2)}:1`,
          suggestion: `Increase contrast ratio to at least ${minRatio}:1`,
          severity: contrastRatio < 3 ? 10 : 7,
          fixable: true
        });
      }
    }
  }

  private checkSemanticStructure(element: HTMLElement): void {
    // Check for missing alt text on images
    if (element.matches('img') && !element.getAttribute('alt')) {
      this.addIssue({
        id: `semantic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: 'error',
        category: 'semantic',
        element,
        message: 'Image missing alt text',
        suggestion: 'Add descriptive alt text to images',
        severity: 8,
        fixable: true
      });
    }

    // Check for missing labels on form inputs
    if (element.matches('input, select, textarea') && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const label = document.querySelector(`label[for="${element.id}"]`);
      if (!label) {
        this.addIssue({
          id: `semantic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: 'error',
          category: 'semantic',
          element,
          message: 'Form input missing label',
          suggestion: 'Add a label or aria-label to form inputs',
          severity: 9,
          fixable: true
        });
      }
    }
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    return 4.5; // Placeholder
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.set(issue.id, issue);
  }

  public getIssues(): AccessibilityIssue[] {
    return Array.from(this.issues.values());
  }

  public clearIssues(): void {
    this.issues.clear();
  }

  public getAccessibilityScore(): number {
    const issues = this.getIssues();
    const totalChecks = 10; // Total number of accessibility checks
    const issueCount = issues.length;
    const score = Math.max(0, Math.floor(((totalChecks - issueCount) / totalChecks) * 100));
    return score;
  }
}

// Export singleton instance
export const accessibilityEnhancements = AccessibilityEnhancements.getInstance();