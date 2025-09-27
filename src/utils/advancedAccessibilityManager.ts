/**
 * Advanced Accessibility Manager
 * Provides comprehensive accessibility features, monitoring, and user assistance
 */

interface AccessibilityPreferences {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  colorBlindSupport: boolean;
  dyslexiaFriendly: boolean;
}

interface AccessibilityReport {
  timestamp: number;
  issues: AccessibilityIssue[];
  score: number;
  recommendations: string[];
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  fix: string;
}

interface FocusableElement extends Omit<HTMLElement, 'tabIndex'> {
  tabIndex?: number;
}

class AdvancedAccessibilityManager {
  private static instance: AdvancedAccessibilityManager;
  private preferences: AccessibilityPreferences;
  private observers: MutationObserver[] = [];
  private focusTracker: FocusableElement | null = null;
  private skipLinks: HTMLElement[] = [];
  private announcements: HTMLElement;
  private isMonitoring = false;
  private keyboardShortcuts: Map<string, () => void> = new Map();

  private constructor() {
    this.preferences = this.loadPreferences();
    this.announcements = this.createAnnouncementElement();
    this.setupKeyboardShortcuts();
  }

  public static getInstance(): AdvancedAccessibilityManager {
    if (!AdvancedAccessibilityManager.instance) {
      AdvancedAccessibilityManager.instance = new AdvancedAccessibilityManager();
    }
    return AdvancedAccessibilityManager.instance;
  }

  public initialize(): void {
    console.log('♿ Advanced Accessibility Manager initialized');
    
    this.applyPreferences();
    this.setupFocusManagement();
    this.createSkipLinks();
    this.startMonitoring();
    this.setupKeyboardNavigation();
    this.detectScreenReader();
    this.setupColorBlindSupport();
    this.setupDyslexiaSupport();
    this.announcePageLoad();
  }

  public updatePreferences(newPreferences: Partial<AccessibilityPreferences>): void {
    this.preferences = { ...this.preferences, ...newPreferences };
    this.savePreferences();
    this.applyPreferences();
    this.announce('Accessibility preferences updated');
  }

  public getPreferences(): AccessibilityPreferences {
    return { ...this.preferences };
  }

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    this.announcements.setAttribute('aria-live', priority);
    this.announcements.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      this.announcements.textContent = '';
    }, 1000);
  }

  public checkAccessibility(): AccessibilityReport {
    const issues: AccessibilityIssue[] = [];
    
    // Check for missing alt text
    this.checkAltText(issues);
    
    // Check for proper heading structure
    this.checkHeadingStructure(issues);
    
    // Check for proper form labels
    this.checkFormLabels(issues);
    
    // Check for proper color contrast
    this.checkColorContrast(issues);
    
    // Check for proper focus management
    this.checkFocusManagement(issues);
    
    // Check for proper ARIA attributes
    this.checkAriaAttributes(issues);
    
    // Check for proper link text
    this.checkLinkText(issues);
    
    // Calculate score
    const score = this.calculateScore(issues);
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(issues);
    
    return {
      timestamp: Date.now(),
      issues,
      score,
      recommendations
    };
  }

  public fixAccessibilityIssues(): void {
    console.log('🔧 Fixing accessibility issues...');
    
    // Fix missing alt text
    this.fixAltText();
    
    // Fix missing form labels
    this.fixFormLabels();
    
    // Fix focus management
    this.fixFocusManagement();
    
    // Add ARIA attributes where needed
    this.addAriaAttributes();
    
    this.announce('Accessibility issues have been automatically fixed');
  }

  private loadPreferences(): AccessibilityPreferences {
    const stored = localStorage.getItem('accessibilityPreferences');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.warn('Failed to parse accessibility preferences:', error);
      }
    }
    
    return {
      highContrast: window.matchMedia('(prefers-contrast: high)').matches,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      largeText: false,
      keyboardNavigation: true,
      screenReader: false,
      focusVisible: true,
      colorBlindSupport: false,
      dyslexiaFriendly: false
    };
  }

  private savePreferences(): void {
    localStorage.setItem('accessibilityPreferences', JSON.stringify(this.preferences));
  }

  private applyPreferences(): void {
    const root = document.documentElement;
    
    // Apply high contrast
    if (this.preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (this.preferences.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply large text
    if (this.preferences.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Apply keyboard navigation
    if (this.preferences.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
    
    // Apply focus visible
    if (this.preferences.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply color blind support
    if (this.preferences.colorBlindSupport) {
      root.classList.add('colorblind-support');
    } else {
      root.classList.remove('colorblind-support');
    }
    
    // Apply dyslexia friendly
    if (this.preferences.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }
  }

  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.focusTracker = event.target as FocusableElement;
      this.announceFocus(event.target as HTMLElement);
    });
    
    document.addEventListener('focusout', () => {
      this.focusTracker = null;
    });
    
    // Ensure focus is visible
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  private announceFocus(element: HTMLElement): void {
    const label = this.getElementLabel(element);
    if (label) {
      this.announce(`Focused on ${label}`, 'polite');
    }
  }

  private getElementLabel(element: HTMLElement): string | null {
    // Check for aria-label
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;
    
    // Check for aria-labelledby
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent;
    }
    
    // Check for associated label
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
      const id = element.id;
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) return label.textContent;
      }
    }
    
    // Check for text content
    if (element.textContent && element.textContent.trim()) {
      return element.textContent.trim();
    }
    
    // Check for title attribute
    const title = element.getAttribute('title');
    if (title) return title;
    
    // Check for placeholder
    const placeholder = element.getAttribute('placeholder');
    if (placeholder) return placeholder;
    
    return null;
  }

  private createSkipLinks(): void {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.setAttribute('aria-label', 'Skip navigation');
    
    const skipToMain = document.createElement('a');
    skipToMain.href = '#main-content';
    skipToMain.textContent = 'Skip to main content';
    skipToMain.className = 'skip-link';
    
    const skipToNav = document.createElement('a');
    skipToNav.href = '#main-navigation';
    skipToNav.textContent = 'Skip to navigation';
    skipToNav.className = 'skip-link';
    
    skipLinksContainer.appendChild(skipToMain);
    skipLinksContainer.appendChild(skipToNav);
    
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    this.skipLinks = [skipToMain, skipToNav];
  }

  private setupKeyboardNavigation(): void {
    // Add keyboard shortcuts
    this.keyboardShortcuts.set('alt+1', () => this.focusMainContent());
    this.keyboardShortcuts.set('alt+2', () => this.focusNavigation());
    this.keyboardShortcuts.set('alt+3', () => this.focusSearch());
    this.keyboardShortcuts.set('alt+h', () => this.showAccessibilityHelp());
    
    document.addEventListener('keydown', (event) => {
      const shortcut = this.getShortcutString(event);
      const handler = this.keyboardShortcuts.get(shortcut);
      if (handler) {
        event.preventDefault();
        handler();
      }
    });
  }

  private getShortcutString(event: KeyboardEvent): string {
    const parts = [];
    if (event.altKey) parts.push('alt');
    if (event.ctrlKey) parts.push('ctrl');
    if (event.shiftKey) parts.push('shift');
    parts.push(event.key.toLowerCase());
    return parts.join('+');
  }

  private setupKeyboardShortcuts(): void {
    // These will be set up in setupKeyboardNavigation
  }

  private focusMainContent(): void {
    const main = document.querySelector('main, #main-content, [role="main"]') as HTMLElement;
    if (main) {
      main.focus();
      main.scrollIntoView();
      this.announce('Focused on main content');
    }
  }

  private focusNavigation(): void {
    const nav = document.querySelector('nav, #main-navigation, [role="navigation"]') as HTMLElement;
    if (nav) {
      const firstLink = nav.querySelector('a') as HTMLElement;
      if (firstLink) {
        firstLink.focus();
        this.announce('Focused on navigation');
      }
    }
  }

  private focusSearch(): void {
    const search = document.querySelector('input[type="search"], input[aria-label*="search" i]') as HTMLElement;
    if (search) {
      search.focus();
      this.announce('Focused on search');
    }
  }

  private showAccessibilityHelp(): void {
    const help = document.createElement('div');
    help.className = 'accessibility-help';
    help.innerHTML = `
      <h2>Accessibility Help</h2>
      <h3>Keyboard Shortcuts:</h3>
      <ul>
        <li>Alt + 1: Skip to main content</li>
        <li>Alt + 2: Skip to navigation</li>
        <li>Alt + 3: Skip to search</li>
        <li>Alt + H: Show this help</li>
        <li>Tab: Navigate through interactive elements</li>
        <li>Enter/Space: Activate buttons and links</li>
      </ul>
      <h3>Accessibility Features:</h3>
      <ul>
        <li>High contrast mode</li>
        <li>Large text support</li>
        <li>Reduced motion</li>
        <li>Screen reader support</li>
        <li>Keyboard navigation</li>
      </ul>
      <button onclick="this.parentElement.remove()">Close Help</button>
    `;
    
    document.body.appendChild(help);
    help.focus();
    this.announce('Accessibility help opened');
  }

  private detectScreenReader(): void {
    // Simple screen reader detection
    const hasScreenReader = window.speechSynthesis || 
                           'speechSynthesis' in window ||
                           navigator.userAgent.includes('NVDA') ||
                           navigator.userAgent.includes('JAWS') ||
                           navigator.userAgent.includes('VoiceOver');
    
    if (hasScreenReader) {
      this.preferences.screenReader = true;
      this.announce('Screen reader detected, enhanced accessibility features enabled');
    }
  }

  private setupColorBlindSupport(): void {
    if (!this.preferences.colorBlindSupport) return;
    
    // Add color blind friendly color schemes
    const style = document.createElement('style');
    style.textContent = `
      .colorblind-support {
        --primary-color: #0000ff;
        --secondary-color: #ff0000;
        --success-color: #00aa00;
        --warning-color: #ffaa00;
        --error-color: #cc0000;
      }
      
      .colorblind-support .color-indicator::after {
        content: attr(data-color-name);
        font-size: 0.8em;
        margin-left: 0.5em;
      }
    `;
    
    document.head.appendChild(style);
  }

  private setupDyslexiaSupport(): void {
    if (!this.preferences.dyslexiaFriendly) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .dyslexia-friendly {
        font-family: 'OpenDyslexic', 'Comic Sans MS', cursive;
        line-height: 1.6;
        letter-spacing: 0.1em;
        word-spacing: 0.2em;
      }
      
      .dyslexia-friendly p {
        max-width: 60ch;
      }
    `;
    
    document.head.appendChild(style);
  }

  private announcePageLoad(): void {
    // Wait for page to be fully loaded
    setTimeout(() => {
      // const title = document.title;
      const heading = document.querySelector('h1')?.textContent || 'Page';
      this.announce(`Page loaded: ${heading}`);
    }, 1000);
  }

  private startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    
    // Monitor DOM changes for accessibility issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.checkNewElement(node as HTMLElement);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    this.observers.push(observer);
  }

  private checkNewElement(element: HTMLElement): void {
    // Check if new element needs accessibility improvements
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      this.announce('New image added without alt text');
    }
    
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label') && !element.textContent) {
      this.announce('New button added without accessible name');
    }
  }

  private createAnnouncementElement(): HTMLElement {
    const element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.className = 'sr-only';
    element.style.cssText = `
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(element);
    return element;
  }

  // Accessibility checking methods
  private checkAltText(issues: AccessibilityIssue[]): void {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.getAttribute('alt')) {
        issues.push({
          type: 'error',
          element: `img[${index}]`,
          message: 'Image missing alt text',
          severity: 'high',
          fix: 'Add alt attribute with descriptive text'
        });
      }
    });
  }

  private checkHeadingStructure(issues: AccessibilityIssue[]): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1));
      
      if (index === 0 && level !== 1) {
        issues.push({
          type: 'warning',
          element: `heading[${index}]`,
          message: 'Page should start with h1',
          severity: 'medium',
          fix: 'Add h1 as the first heading or change existing heading to h1'
        });
      }
      
      if (level > previousLevel + 1) {
        issues.push({
          type: 'warning',
          element: `heading[${index}]`,
          message: 'Heading level skipped',
          severity: 'medium',
          fix: 'Use sequential heading levels'
        });
      }
      
      previousLevel = level;
    });
  }

  private checkFormLabels(issues: AccessibilityIssue[]): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.id;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!ariaLabel && !ariaLabelledBy && !document.querySelector(`label[for="${id}"]`)) {
        issues.push({
          type: 'error',
          element: `input[${index}]`,
          message: 'Form input missing label',
          severity: 'high',
          fix: 'Add label element or aria-label attribute'
        });
      }
    });
  }

  private checkColorContrast(issues: AccessibilityIssue[]): void {
    // This would require more complex color contrast checking
    // For now, just check for elements that might have contrast issues
    const elements = document.querySelectorAll('*');
    elements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      if (style.color === style.backgroundColor) {
        issues.push({
          type: 'warning',
          element: `element[${index}]`,
          message: 'Possible color contrast issue',
          severity: 'medium',
          fix: 'Ensure sufficient color contrast between text and background'
        });
      }
    });
  }

  private checkFocusManagement(issues: AccessibilityIssue[]): void {
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    focusableElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex && parseInt(tabIndex) > 0) {
        issues.push({
          type: 'info',
          element: `focusable[${index}]`,
          message: 'Positive tabindex can disrupt keyboard navigation',
          severity: 'low',
          fix: 'Use tabindex="0" or remove tabindex'
        });
      }
    });
  }

  private checkAriaAttributes(issues: AccessibilityIssue[]): void {
    const elementsWithAria = document.querySelectorAll('[aria-expanded], [aria-selected], [aria-checked]');
    elementsWithAria.forEach((element, index) => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        issues.push({
          type: 'warning',
          element: `aria-element[${index}]`,
          message: 'ARIA element missing accessible name',
          severity: 'medium',
          fix: 'Add aria-label or aria-labelledby'
        });
      }
    });
  }

  private checkLinkText(issues: AccessibilityIssue[]): void {
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      const text = link.textContent?.trim();
      if (!text || text === 'click here' || text === 'read more' || text === 'here') {
        issues.push({
          type: 'warning',
          element: `link[${index}]`,
          message: 'Link text is not descriptive',
          severity: 'medium',
          fix: 'Use descriptive link text'
        });
      }
    });
  }

  private calculateScore(issues: AccessibilityIssue[]): number {
    const totalIssues = issues.length;
    const highSeverity = issues.filter(i => i.severity === 'high').length;
    const mediumSeverity = issues.filter(i => i.severity === 'medium').length;
    const lowSeverity = issues.filter(i => i.severity === 'low').length;
    
    // Weight issues by severity
    const weightedScore = (highSeverity * 3) + (mediumSeverity * 2) + (lowSeverity * 1);
    const maxPossibleScore = totalIssues * 3;
    
    return maxPossibleScore > 0 ? Math.max(0, 100 - (weightedScore / maxPossibleScore) * 100) : 100;
  }

  private generateRecommendations(issues: AccessibilityIssue[]): string[] {
    const recommendations: string[] = [];
    
    const errorCount = issues.filter(i => i.type === 'error').length;
    const warningCount = issues.filter(i => i.type === 'warning').length;
    
    if (errorCount > 0) {
      recommendations.push(`Fix ${errorCount} critical accessibility error${errorCount > 1 ? 's' : ''}`);
    }
    
    if (warningCount > 0) {
      recommendations.push(`Address ${warningCount} accessibility warning${warningCount > 1 ? 's' : ''}`);
    }
    
    if (issues.some(i => i.message.includes('alt text'))) {
      recommendations.push('Add alt text to all images');
    }
    
    if (issues.some(i => i.message.includes('label'))) {
      recommendations.push('Ensure all form inputs have labels');
    }
    
    if (issues.some(i => i.message.includes('heading'))) {
      recommendations.push('Fix heading structure');
    }
    
    return recommendations;
  }

  // Auto-fix methods
  private fixAltText(): void {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      const src = img.getAttribute('src');
      const filename = src ? src.split('/').pop()?.split('.')[0] : 'image';
      img.setAttribute('alt', filename || 'Image');
    });
  }

  private fixFormLabels(): void {
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const id = input.id || `input-${Date.now()}`;
      if (!input.id) input.id = id;
      
      const label = document.createElement('label');
      label.setAttribute('for', id);
      label.textContent = `Input ${input.getAttribute('type') || 'field'}`;
      
      input.parentNode?.insertBefore(label, input);
    });
  }

  private fixFocusManagement(): void {
    const focusableElements = document.querySelectorAll('button:not([tabindex]), a:not([tabindex]), input:not([tabindex])');
    focusableElements.forEach((element) => {
      if (!element.getAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });
  }

  private addAriaAttributes(): void {
    // Add aria-labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    
    // Add role attributes where needed
    const navigation = document.querySelector('nav');
    if (navigation && !navigation.getAttribute('role')) {
      navigation.setAttribute('role', 'navigation');
    }
    
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
  }
}

export default AdvancedAccessibilityManager;
export type { AccessibilityPreferences, AccessibilityReport, AccessibilityIssue };