<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return; const announcement = document.createElement('div'); announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return; if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g); if (!rgb) return 0; const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'); const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'); const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const announceToScreenReader = (message: string): void => {
export const generateId = (prefix: string = 'id'): string => {;
=======
export const generateId = (prefix: string = "id"): string => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export const generateId = (prefix: string = "id"): string => {
=======
<<<<<<< HEAD
export const generateId = (prefix: string = "id"): string => {
=======
<<<<<<< HEAD
export const generateId = (prefix: string = 'id'): string => {
=======
export const generateId = (prefix: string = "id"): string => {export const generateId = (prefix: string = 'id'): string => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const announceToScreenReader = (message: string): void => {
export const generateId = (prefix: string = 'id'): string => {;
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
=======
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};

export const announceToScreenReader = (message: string): void => {;  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5
};

export const validateAriaLabel = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby")
};

export const isHighContrast = (color1: string, color2: string): boolean => {;
  return getContrastRatio(color1, color2) >= 4.5
};

export const validateAriaLabel = (element: HTMLElement): boolean => {;  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight |document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth |document.documentElement.clientWidth)
  );
}
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {
  element.scrollIntoView({ behavior, block: 'start' });
}
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
};

export const scrollToElement = (
  element: HTMLElement,
  behavior: ScrollBehavior = "smooth",
): void => {
  element.scrollIntoView({ behavior, block: "start" })
};

export const createSkipLink = (
  targetId: string,
  text: string = "Skip to main content",
): HTMLElement => {
  const skipLink = document.createElement("a");
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";

  skipLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      scrollToElement(target);
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });
  return skipLink;
<<<<<<< HEAD
=======
}

<<<<<<< HEAD
  return skipLink;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  return skipLink;
=======

  
=======


  
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return skipLink;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink};

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  });  return skipLink;

export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    rect.top >= 0 &&;
    rect.left >= 0 &&;
    rect.bottom <= (window.inner_height || document.document_element.client_height) &&;
    rect.right <= (window.inner_width || document.document_element.client_width));
}
;
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {
  element.scrollIntoView ({ behavior, block: 'start' });
}
;
export const createSkipLink = (target_id: string, text: string = 'Skip to main content'): HTMLElement => {
  const skip_link = document.create_element ('a');
  skip_link.href = `#${target_id}`;
  skip_link.text_content = text;
  skip_link.class_name = 'sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';
;
  skip_link.addEventListener ('click', (e) => {
    e.prevent_default ();
    const target = document.getElementById (target_id);
    // Check condition
if ( {) {
  $2
}
      target.focus ();
      scrollToElement (target);
    }
  });
;
  return skip_link;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
