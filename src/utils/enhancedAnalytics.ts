interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  timestamp: number
  sessionId: string
  userId?: string
  pageUrl: string
  userAgent: string
}

interface UserSession {
  sessionId: string
  startTime: number
  lastActivity: number
  pageViews: number
  events: AnalyticsEvent[]
  deviceInfo: {
    userAgent: string
    screenResolution: string
    viewportSize: string
    colorDepth: number
    timezone: string
  }
}

class EnhancedAnalytics {
  private session: UserSession
  private isEnabled: boolean = true
  private apiEndpoint: string = '/api/analytics'

  constructor() {
    this.session = this.createSession()
    this.initializeTracking()
  }

  private createSession(): UserSession {
    const sessionId = this.generateSessionId()
    const now = Date.now()
    
    return {
      sessionId,
      startTime: now,
      lastActivity: now,
      pageViews: 0,
      events: [],
      deviceInfo: {
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }
  }

  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }

  private initializeTracking() {
    if (!this.isEnabled) return

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('engagement', 'page_hidden', 'visibility_change')
      } else {
        this.trackEvent('engagement', 'page_visible', 'visibility_change')
        this.session.lastActivity = Date.now()
      }
    })

    // Track scroll depth
    let maxScrollDepth = 0
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.trackEvent('engagement', 'scroll_depth', `${scrollDepth}%`)
        }
      }
    })

    // Track time on page
    setInterval(() => {
      const timeOnPage = Date.now() - this.session.startTime
      if (timeOnPage > 0 && timeOnPage % 30000 === 0) { // Every 30 seconds
        this.trackEvent('engagement', 'time_on_page', `${Math.round(timeOnPage / 1000)}s`)
      }
    }, 1000)

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'A' || target.closest('button')) {
        const linkText = target.textContent?.trim() || 'Unknown'
        const href = (target as HTMLAnchorElement).href || 'No URL'
        this.trackEvent('interaction', 'click', linkText, undefined, href)
      }
    })

    // Track form interactions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement
      const formName = form.name || form.id || 'Unknown Form'
      this.trackEvent('interaction', 'form_submit', formName)
    })

    // Track search queries
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement
      if (target.type === 'search' || target.placeholder?.toLowerCase().includes('search')) {
        if (target.value.length > 2) {
          this.trackEvent('interaction', 'search_input', target.value)
        }
      }
    })
  }

  trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    customData?: string
  ): void {
    if (!this.isEnabled) return

    const event: AnalyticsEvent = {
      event: 'custom_event',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.session.sessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    }

    this.session.events.push(event)
    this.session.lastActivity = Date.now()

    // Send to analytics endpoint
    this.sendToAnalytics(event)

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event)
    }
  }

  trackPageView(page: string): void {
    if (!this.isEnabled) return

    this.session.pageViews++
    
    const event: AnalyticsEvent = {
      event: 'page_view',
      category: 'navigation',
      action: 'page_view',
      label: page,
      timestamp: Date.now(),
      sessionId: this.session.sessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    }

    this.session.events.push(event)
    this.session.lastActivity = Date.now()

    this.sendToAnalytics(event)
  }

  trackButtonClick(buttonName: string, location?: string): void {
    this.trackEvent('interaction', 'button_click', buttonName, undefined, location)
  }

  trackConversion(conversionType: string, value?: number): void {
    this.trackEvent('conversion', conversionType, 'conversion', value)
  }

  trackError(error: string, errorType: string = 'javascript_error'): void {
    this.trackEvent('error', errorType, error)
  }

  trackPerformance(metricName: string, value: number, unit: string = 'ms'): void {
    this.trackEvent('performance', metricName, unit, value)
  }

  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      if (process.env.NODE_ENV === 'development') {
        // In development, just log the event
        console.log('Analytics Event (Dev):', event)
        return
      }

      // Send to production analytics endpoint
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      })
    } catch (error) {
      console.error('Failed to send analytics event:', error)
    }
  }

  getSessionData(): UserSession {
    return { ...this.session }
  }

  getSessionDuration(): number {
    return Date.now() - this.session.startTime
  }

  getEventCount(): number {
    return this.session.events.length
  }

  getPageViewCount(): number {
    return this.session.pageViews
  }

  // Export session data for debugging
  exportSessionData(): string {
    return JSON.stringify(this.session, null, 2)
  }

  // Enable/disable analytics
  setEnabled(enabled: boolean): void {
    this.isEnabled = enabled
  }

  isAnalyticsEnabled(): boolean {
    return this.isEnabled
  }
}

// Create singleton instance
export const enhancedAnalytics = new EnhancedAnalytics()

// Export functions for easy use
export const trackPageView = (page: string) => enhancedAnalytics.trackPageView(page)
export const trackButtonClick = (buttonName: string, location?: string) => enhancedAnalytics.trackButtonClick(buttonName, location)
export const trackConversion = (conversionType: string, value?: number) => enhancedAnalytics.trackConversion(conversionType, value)
export const trackError = (error: string, errorType?: string) => enhancedAnalytics.trackError(error, errorType)
export const trackPerformance = (metricName: string, value: number, unit?: string) => enhancedAnalytics.trackPerformance(metricName, value, unit)
export const trackEvent = (category: string, action: string, label?: string, value?: number, customData?: string) => 
  enhancedAnalytics.trackEvent(category, action, label, value, customData)

export default enhancedAnalytics
  </div>
  </div>