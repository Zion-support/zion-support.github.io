'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

interface PageView {
  page_title: string
  page_location: string
  page_path: string
  referrer?: string
  user_agent?: string
  timestamp: string
}

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      const pageView: PageView = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      }

      // Send to analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/pageview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pageView),
        }).catch(err => console.error('Failed to track page view:', err))
      }

      console.log('Page view tracked:', pageView)
    }

    // Track page view on route change
    trackPageView()

    // Track user interactions
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      
      if (link) {
        const eventData: AnalyticsEvent = {
          action: 'click',
          category: 'link',
          label: link.href,
          custom_parameters: {
            link_text: link.textContent?.trim(),
            link_href: link.href,
            is_external: !link.href.startsWith(window.location.origin)
          }
        }
        
        trackEvent(eventData)
      }
    }

    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      // Track significant scroll milestones
      if (scrollPercent > 25 && scrollPercent % 25 === 0) {
        const eventData: AnalyticsEvent = {
          action: 'scroll',
          category: 'engagement',
          label: `${scrollPercent}%`,
          value: scrollPercent
        }
        
        trackEvent(eventData)
      }
    }

    const trackFormSubmission = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement
      const eventData: AnalyticsEvent = {
        action: 'form_submit',
        category: 'form',
        label: form.action || 'unknown',
        custom_parameters: {
          form_id: form.id,
          form_class: form.className,
          form_method: form.method
        }
      }
      
      trackEvent(eventData)
    }

    // Add event listeners
    document.addEventListener('click', trackClick)
    window.addEventListener('scroll', trackScroll, { passive: true })
    document.addEventListener('submit', trackFormSubmission)

    // Track time on page
    const startTime = Date.now()
    
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime
      const eventData: AnalyticsEvent = {
        action: 'time_on_page',
        category: 'engagement',
        value: Math.round(timeOnPage / 1000) // seconds
      }
      
      trackEvent(eventData)
    }

    // Track time on page when user leaves
    window.addEventListener('beforeunload', trackTimeOnPage)
    window.addEventListener('pagehide', trackTimeOnPage)

    // Cleanup
    return () => {
      document.removeEventListener('click', trackClick)
      window.removeEventListener('scroll', trackScroll)
      document.removeEventListener('submit', trackFormSubmission)
      window.removeEventListener('beforeunload', trackTimeOnPage)
      window.removeEventListener('pagehide', trackTimeOnPage)
    }
  }, [pathname, searchParams])

  const trackEvent = (event: AnalyticsEvent) => {
    const eventData = {
      ...event,
      timestamp: new Date().toISOString(),
      session_id: getSessionId(),
      user_id: getUserId(),
      page_url: window.location.href,
      page_title: document.title
    }

    // Send to analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }).catch(err => console.error('Failed to track event:', err))
    }

    console.log('Event tracked:', eventData)
  }

  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('analytics_session_id')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('analytics_session_id', sessionId)
    }
    return sessionId
  }

  const getUserId = (): string | null => {
    return localStorage.getItem('user_id') || null
  }

  // Expose tracking function globally for manual tracking
  useEffect(() => {
    (window as any).trackEvent = trackEvent
    return () => {
      delete (window as any).trackEvent
    }
  }, [])

  return null
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}

// Hook for manual event tracking
export function useAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent({ action, category, label, value })
    }
  }

  const trackCustomEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent(event)
    }
  }

  return { trackEvent, trackCustomEvent }
}