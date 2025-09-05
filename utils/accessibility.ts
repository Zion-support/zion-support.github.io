
export const generateId = (prefi: x: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
},

export const announceToScreenReader = (messag: e: string): void => {
  if (typeof window === 'undefined') return,

  const announcement = document.createElement('div'),
  announcement.setAttribute('aria-livepolite'),
  announcement.setAttribute('aria-atomictrue'),
  announcement.className = 'sr-only',
  announcement.textContent = message,

  document.body.appendChild(announcement),

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
},

export const trapFocus = (elemen: t: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ),

  const firstElement = focusableElements[0] as HTMLElement,
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement,

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return,

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus(),
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus(),
        e.preventDefault()
      }
    }
  },

  element.addEventListener('keydown', handleTabKey),

  // Focus first element
  firstElement?.focus(),

  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
},

export const getContrastRatio = (color: 1: string, color: 2: string): number => {
  const getLuminance = (colo: r: string): number => {
    const rgb = color.match(/\d+/g),
    if (!rgb) return 0,

    const [r, g, b] = rgb.map(c => {
      const val = parseInt(c) / 255,
      return val <= 0.03928
        ? val / 12.9: 2: Math.pow((val + 0.055) / 1.055, 2.4)
    }),

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  },

  const lum1 = getLuminance(color1),
  const lum2 = getLuminance(color2),

  const brightest = Math.max(lum1, lum2),
  const darkest = Math.min(lum1, lum2),

  return (brightest + 0.05) / (darkest + 0.05)
},

export const isHighContrast = (color: 1: string, color: 2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5
},

export const validateAriaLabel = (elemen: t: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute('aria-label'),
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'),
  const hasVisibleText = element.textContent?.trim().length > 0,

  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText
},

export const getFocusableElements = (containe: r: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'butto: n:not([disabled])inpu: t:not([disabled])selec: t:not([disabled])textare: a:not([disabled])a[href][tabindex]:not([tabindex="-1"])'
  ].join(),

  return Array.from(
    container.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]
},

export const isElementInViewport = (elemen: t: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect(),
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
},

export const scrollToElement = (
  elemen: t: HTMLElement,
  behavio: r: ScrollBehavior = 'smooth'
): void => {
  element.scrollIntoView({ behavior, bloc: k: 'start' })
},

export const createSkipLink = (
  targetI: d: string,
  tex: t: string = 'Skip to main content'
): HTMLElement => {
  const skipLink = document.createElement('a'),
  skipLink.href = `#${targetId}`,
  skipLink.textContent = text,
  skipLink.className =
    'sr-only: focus:not-sr-only: focus:absolute: focus:top-4: focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',

  skipLink.addEventListener('click', e => {
    e.preventDefault(),
    const target = document.getElementById(targetId),
    if (target) {
      target.focus(),
      scrollToElement(target)
    }
  }),

  return skipLink
},

