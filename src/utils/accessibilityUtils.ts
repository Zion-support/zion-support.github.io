'use client'
/**
 * Advanced Accessibility Utilities for Zion Tech Group
 * Provides comprehensive accessibility enhancement functions
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean
  enableScreenReaderSupport: boolean
  enableHighContrast: boolean
  enableFocusManagement: boolean
  enableSkipLinks: boolean
  enableARIALabels: boolean
  enableReducedMotion: boolean
  enableVoiceNavigation: boolean
}

export class AccessibilityUtils {
  private config: AccessibilityConfig
  private observers: MutationObserver[] = []
  private eventListeners: Array<{element: Element, event: string, handler: EventListener}> = []
  constructor(config: AccessibilityConfig) {
    this.config = config
    this.initialize()
  }

  private initialize() {
    if (typeof window === 'undefined') return
    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation()
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport()
    }

    if (this.config.enableHighContrast) {
      this.setupHighContrastSupport()
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement()
    }

    if (this.config.enableSkipLinks) {
      this.setupSkipLinks()
    }

    if (this.config.enableARIALabels) {
      this.setupARIALabels()
    }

    if (this.config.enableReducedMotion) {
      this.setupReducedMotionSupport()
    }

    if (this.config.enableVoiceNavigation) {
      this.setupVoiceNavigation()
    }
  }

  private setupKeyboardNavigation() {
    const handleKeyDown = (event: KeyboardEvent) =>
                {
      // Handle escape key
      if (event.key === 'Escape') {
        this.handleEscapeKey()
      }

      // Handle arrow keys for navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        this.handleArrowKeyNavigation(event)
      }

      // Handle tab navigation
      if (event.key === 'Tab') {
        this.handleTabNavigation()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    this.eventListeners.push({ element: document, event: 'keydown', handler: handleKeyDown })
  }

  private setupScreenReaderSupport() {
    // Add live region for announcements
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', 'polite')
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.id = 'accessibility-announcements'
    document.body.appendChild(liveRegion)
    // Add screen reader only content
    this.addScreenReaderOnlyContent()
  }

  private setupHighContrastSupport() {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)')
    const handleContrastChange = (e: MediaQueryListEvent) =>
                {
      if (e.matches) {
        document.body.classList.add('high-contrast')
        this.announceToScreenReader('High contrast mode enabled')
      } else {
        document.body.classList.remove('high-contrast')
        this.announceToScreenReader('High contrast mode disabled')
      }
    }
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast')
    }

    mediaQuery.addEventListener('change', handleContrastChange)
  }

  private setupFocusManagement() {
    // Add focus indicators
    const style = document.createElement('style')
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6
        outline-offset: 2px
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus {
        outline: 2px solid #00ffff
        outline-offset: 2px
        box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.2)
      }
      
      .sr-only {
        position: absolute
        width: 1px
        height: 1px
        padding: 0
        margin: -1px
        overflow: hidden
        clip: rect(0, 0, 0, 0)
        white-space: nowrap
        border: 0
      }
      
      .sr-only:focus {
        position: static
        width: auto
        height: auto
        padding: 0.5rem
        margin: 0
        overflow: visible
        clip: auto
        white-space: normal
      }

      .high-contrast {
        filter: contrast(150%) brightness(120%)
      }

      .reduced-motion * {
        animation-duration: 0.01ms !important
        animation-iteration-count: 1 !important
        transition-duration: 0.01ms !important
      }
    `
    document.head.appendChild(style)
    // Track focus changes
    document.addEventListener('focusin', (event) =>
                {
      this.handleFocusIn(event)
    })
    document.addEventListener('focusout', (event) =>
                {
      this.handleFocusOut(event)
    })
  }

  private setupSkipLinks() {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ]
    skipLinks.forEach(link =>
                {
      const skipLink = document.createElement('a')
      skipLink.href = link.href
      skipLink.textContent = link.text
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
      skipLink.setAttribute('tabindex', '1')
      document.body.insertBefore(skipLink, document.body.firstChild)
    })
  }

  private setupARIALabels() {
    // Add ARIA landmarks
    this.addARIALandmarks()
    // Add ARIA labels to interactive elements
    this.addARIALabelsToElements()
    // Monitor for new elements
    this.observeNewElements()
  }

  private setupReducedMotionSupport() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) =>
                {
      if (e.matches) {
        document.body.classList.add('reduced-motion')
        this.announceToScreenReader('Reduced motion mode enabled')
      } else {
        document.body.classList.remove('reduced-motion')
        this.announceToScreenReader('Reduced motion mode disabled')
      }
    }
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion')
    }

    mediaQuery.addEventListener('change', handleMotionChange)
  }

  private setupVoiceNavigation() {
    if ('speechSynthesis' in window) {
      // Add voice navigation controls
      this.addVoiceNavigationControls()
    }
  }

  private handleEscapeKey() {
    // Close any open modals, dropdowns, or menus
    const activeElement = document.activeElement as HTMLElement
    if (activeElement && activeElement.blur) {
      activeElement.blur()
    }

    // Trigger escape handlers on custom elements
    const escapeEvent = new CustomEvent('accessibility-escape')
    document.dispatchEvent(escapeEvent)
  }

  private handleArrowKeyNavigation(event: KeyboardEvent) {
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    )
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element)
    if (currentIndex !== -1) {
      const nextIndex = event.key === 'ArrowDown' 
        ? Math.min(currentIndex + 1, focusableElements.length - 1)
        : Math.max(currentIndex - 1, 0)
      (focusableElements[nextIndex] as HTMLElement)?.focus()
      event.preventDefault()
    }
  }

  private handleTabNavigation() {
    document.body.classList.add('keyboard-navigation')
  }

  private handleFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement
    if (target) {
      this.announceToScreenReader(`Focused on ${this.getElementDescription(target)}`)
    }
  }

  private handleFocusOut(event: FocusEvent) {
    // Handle focus out if needed
  }

  private addScreenReaderOnlyContent() {
    // Add screen reader only content for better context
    const main = document.querySelector('main')
    if (main && !main.getAttribute('aria-label')) {
      main.setAttribute('aria-label', 'Main content area')
    }

    // Add landmark roles
    this.addARIALandmarks()
  }

  private addARIALandmarks() {
    const landmarks = [
      { selector: 'nav', role: 'navigation', label: 'Main navigation' },
      { selector: 'main', role: 'main', label: 'Main content' },
      { selector: 'footer', role: 'contentinfo', label: 'Footer' },
      { selector: 'aside', role: 'complementary', label: 'Sidebar' },
      { selector: 'header', role: 'banner', label: 'Page header' }
    ]
    landmarks.forEach(landmark =>
                {
      const element = document.querySelector(landmark.selector)
      if (element && !element.getAttribute('role')) {
        element.setAttribute('role', landmark.role)
        element.setAttribute('aria-label', landmark.label)
      }
    })
  }

  private addARIALabelsToElements() {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
    buttons.forEach((button, index) =>
                {
      const icon = button.querySelector('svg')
      if (icon && !button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`)
      }
    })
    // Add ARIA labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])')
    images.forEach((img, index) =>
                {
      img.setAttribute('alt', `Image ${index + 1}`)
    })
    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')
    inputs.forEach((input) =>
                {
      const label = document.querySelector(`label[for="${input.id}"]`)
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`)
      }
    })
  }

  private observeNewElements() {
    const observer = new MutationObserver((mutations) =>
                {
      mutations.forEach((mutation) =>
                {
        mutation.addedNodes.forEach((node) =>
                {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.addARIALabelsToElement(node as Element)
          }
        })
      })
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    this.observers.push(observer)
  }

  private addARIALabelsToElement(element: Element) {
    // Add ARIA labels to new elements
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      const icon = element.querySelector('svg')
      if (icon && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button')
      }
    }

    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      element.setAttribute('alt', 'Image')
    }
  }

  private addVoiceNavigationControls() {
    const voiceControls = document.createElement('div')
    voiceControls.className = 'voice-controls sr-only'
    voiceControls.innerHTML = `
      <button id="voice-read-page" aria-label="Read page content">Read Page</button>
      <button id="voice-stop" aria-label="Stop reading">Stop</button>
    `
    document.body.appendChild(voiceControls)
    // Add event listeners for voice controls
    const readButton = document.getElementById('voice-read-page')
    const stopButton = document.getElementById('voice-stop')
    if (readButton) {
      readButton.addEventListener('click', () => this.readPageContent())
    }

    if (stopButton) {
      stopButton.addEventListener('click', () => this.stopReading())
    }
  }

  private readPageContent() {
    if ('speechSynthesis' in window) {
      const content = document.querySelector('main')?.textContent || ''
      const utterance = new SpeechSynthesisUtterance(content)
      utterance.rate = 0.8
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
    }
  }

  private stopReading() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
    }
  }

  private announceToScreenReader(message: string) {
    const liveRegion = document.getElementById('accessibility-announcements')
    if (liveRegion) {
      liveRegion.textContent = message
    }
  }

  private getElementDescription(element: HTMLElement): string {
    const tagName = element.tagName.toLowerCase()
    const text = element.textContent?.trim() || ''
    const ariaLabel = element.getAttribute('aria-label')
    const title = element.getAttribute('title')
    if (ariaLabel) return ariaLabel
    if (title) return title
    if (text) return `${tagName}: ${text}`
    return tagName
  }

  public announce(message: string) {
    this.announceToScreenReader(message)
  }

  public setFocus(element: HTMLElement) {
    element.focus()
  }

  public trapFocus(container: HTMLElement) {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    const handleTabKey = (e: KeyboardEvent) =>
                {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }
    container.addEventListener('keydown', handleTabKey)
    return () =>
                {
      container.removeEventListener('keydown', handleTabKey)
    }
  }

  public cleanup() {
    // Remove event listeners
    this.eventListeners.forEach(({ element, event, handler }) =>
                {
      element.removeEventListener(event, handler)
    })
    // Disconnect observers
    this.observers.forEach(observer => observer.disconnect())
    // Clear arrays
    this.eventListeners = []
    this.observers = []
  }
}

export default AccessibilityUtils