export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string): void => {
  if (typeof window === "undefined") return;

  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;
  document.body.appendChild(announcement);

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
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

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
  }
<<<<<<< HEAD
}
export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5;
}
export const validateAriaLabel = (element: HTMLElement): boolean => {
=======


  element.addEventListener("keydown", handleTabKey);

  element.addEventListener($2);
  // Focus first element
  firstElement?.focus($2);
  return () => {
    element.removeEventListener("keydown", handleTabKey);
  };
};

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

export const validateAriaLabel = (elemen: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute($2);
  const hasAriaLabelledBy = element.hasAttribute($2);
  const hasVisibleText = $2;
  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText
},

export const validateAriaLabel = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
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
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  return Array.from(
    container.querySelectorAll(focusableSelectors),
  ) as HTMLElement[];
};

export const isElementInViewport = (element: HTMLElement): boolean => {;

  const rect = element.getBoundingClientRect();
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";

  skipLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus($2);
      scrollToElement(target)
    }
  }),

  return skipLink
},

  return skipLink;
};
