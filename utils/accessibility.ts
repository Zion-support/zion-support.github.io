export const generateId = (prefix: string = "id"): string => {
export const generateId = (prefix: string = "id"): string => {

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const announceToScreenReader = (message: string): void => {
export const generateId = (prefix: string = 'id'): string => {;
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string): void => {
  if (typeof window === "undefined") return;


  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string): void => {;
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";



export const announceToScreenReader = (message: string): void => {
  if (typeof window === "undefined") return;





origin/cursor/expand-services-advertise-and-build-project-c28b




  if (typeof window === 'undefined') return;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';

main


  announcement.textContent = message;
  document.body.appendChild(announcement);
export const generateId = (prefi: x: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
},

export const announceToScreenReader = $2;
  const announcement = document.createElement($2);
  announcement.setAttribute($2);
  announcement.setAttribute($2);
  announcement.className = $2;
  announcement.textContent = $2;
  document.body.appendChild($2);
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
},

export const trapFocus = (elemen: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
origin/cursor/expand-services-advertise-and-build-project-c28b

main

    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';



    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    'button, [href], input, select, textarea, [tabindex]:not([tabindex = $2;
  const firstElement = $2;
  const lastElement = $2;
  const handleTabKey = $2;
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus($2);
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus($2);
        e.preventDefault()
      }
    }



origin/cursor/expand-services-advertise-and-build-project-c28b

  },

  element.addEventListener($2);
  // Focus first element
  firstElement?.focus($2);
  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
},

export const getContrastRatio = (color: 1: string, color: 2: string): number => {
  const getLuminance = (colo: string): number => {
    const rgb = color.match($2);
    if (!rgb) return 0,

    const [r, g, b] = rgb.map(c = $2;
      return val <= 0.03928
        ? val / 12.9: 2: Math.pow((val + 0.055) / 1.055, 2.4)
    }),

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  },

  const lum1 = getLuminance($2);
  const lum2 = getLuminance($2);
  const brightest = Math.max($2);
  const darkest = Math.min($2);
  return (brightest + 0.05) / (darkest + 0.05)
},

export const isHighContrast = (color: 1: string, color: 2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5
},

}

}

}
export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5;
};

export const validateAriaLabel = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");



  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
};

export const isHighContrast = (color1: string, color2: string): boolean => {;
  return getContrastRatio(color1, color2) >= 4.5;
};

export const validateAriaLabel = (element: HTMLElement): boolean => {;


  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');


origin/cursor/expand-services-advertise-and-build-project-c28b

  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');

main


  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');

  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
  const hasVisibleText = element.textContent?.trim().length > 0;

  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText;
};

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [

    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].join(", ");

export const validateAriaLabel = (elemen: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute($2);
  const hasAriaLabelledBy = element.hasAttribute($2);
  const hasVisibleText = $2;
  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText
},

export const getFocusableElements = (containe: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'butto: not([disabled])inpu: not([disabled])selec: not([disabled])textare: a: not([disabled])a[href][tabindex]:not([tabindex="-1"])'
  ].join($2);
  return Array.from(
    container.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]
},


;
  element.addEventListener ('keydown', handleTabKey);
;
  // Focus first element;
  first_element?.focus ();
;
  return () => {
    element.removeEventListener ('keydown', handleTabKey);
  }
}
;
export const getContrastRatio = (color1: string, color2: string): number => {
  const get_luminance = (color: string): number => {
    const rgb = color.match (/\d+/g);
    // Check condition
if (return 0) {
  $2
}
    const [r, g, b] = rgb.map (c => {
      const val = parse_int (c) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow ((val + 0.055) / 1.055, 2.4);
    });
;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
;
  const lum1 = get_luminance (color1);
  const lum2 = get_luminance (color2);
  const brightest = Math.max (lum1, lum2);
  const darkest = Math.min (lum1, lum2);
;
  return (brightest + 0.05) / (darkest + 0.05);
}
;
export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio (color1, color2) >= 4.5;
}
;
export const validateAriaLabel = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.has_attribute ('aria - label');
  const hasAriaLabelledBy = element.has_attribute ('aria - labelledby');
  const hasVisibleText = element.text_content?.trim ().length > 0;
;
  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText;
}
;
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusable_selectors = [;
    'button:not ([disabled])',
    'input:not ([disabled])',
    'select:not ([disabled])',
    'textarea:not ([disabled])',
    'a[href]',
    '[tabindex]:not ([tabindex="-1"])';
  ].join (', ');
;
  return Array.from (container.querySelectorAll (focusable_selectors)) as HTMLElement[];
}
;

export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect ();

origin/cursor/expand-services-advertise-and-build-project-c28b


    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])';



  const rect = element.getBoundingClientRect();
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

  ].join(', ');
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];

};

export const isElementInViewport = (element: HTMLElement): boolean => {;

  const rect = element.getBoundingClientRect();
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


export const isElementInViewport = (elemen: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect($2);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
},

export const scrollToElement = $2;
  behavio: ScrollBehavior = 'smooth'
): void => {
  element.scrollIntoView({ behavior, bloc: k: 'start' })
},



export const createSkipLink = (
  targetId: string,
  text: string = "Skip to main content",
): HTMLElement => {
  const skipLink = document.createElement("a");
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;


  const skipLink = document.createElement('a');
origin/cursor/expand-services-advertise-and-build-project-c28b

  const skipLink = document.createElement('a');

main

  const skipLink = document.createElement('a');


  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";

  skipLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
export const createSkipLink = $2;
  tex: string = 'Skip to main content'
): HTMLElement => {
  const skipLink = document.createElement($2);
  skipLink.href = $2;
  skipLink.textContent = $2;
  skipLink.className = $2;
  skipLink.addEventListener($2);
    const target = document.getElementById($2);
    if (target) {
      target.focus($2);
      scrollToElement(target)
    }


  
  }),

  return skipLink
},


  


  





  



  
origin/cursor/expand-services-advertise-and-build-project-c28b



ursor/fix-website-loading-errors-and-merge-6662


  





  return skipLink;
  return skipLink;



  return skipLink;

export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink};


main
};
origin/cursor/integrate-build-improve-and-re-verify-2156
    rect.top >= 0 &&;
    rect.left >= 0 &&;
    rect.bottom <= (window.inner_height || document.document_element.client_height) &&;
    rect.right <= (window.inner_width || document.document_element.client_width))}export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {element.scrollIntoView ({ behavior, block: 'start' })}export const createSkipLink = (target_id: string, text: string = 'Skip to main content'): HTMLElement => {const skip_link = document.create_element ('a')skip_link.href = `#${target_id}`;
  skip_link.text_content = text;
  skip_link.class_name = 'sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';skip_link.addEventListener ('click', (e) => {e.prevent_default ()const target = document.getElementById (target_id)// Check condition;
if ( {) {$2;
}
      target.focus ()scrollToElement (target)}
  })return skip_link;
}export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite')announcement.setAttribute('aria-atomic', 'true')announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement)// Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' )const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus()e.preventDefault()} } }element.addEventListener('keydown', handleTabKey)// Focus first element firstElement?.focus()return () = > { element.removeEventListener('keydown', handleTabKey)}}export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)})return 0.2126 * r + 0.7152 * g + 0.0722 * b}const lum1 = getLuminance(color1)const lum2 = getLuminance(color2)const brightest = Math.max(lum1, lum2)const darkest = Math.min(lum1, lum2)return (brightest + 0.05) / (darkest + 0.05)}export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', ')return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect()return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a')skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault()const target = document.getElementById(targetId)if (target) { target.focus()scrollToElement(target)} })return skipLink}
      target.focus ();
      scrollToElement (target);
    }
  });
;
  return skip_link;
}
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
origin/cursor/automate-test-improve-and-merge-code-2533



};




export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};

