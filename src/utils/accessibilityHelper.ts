/**
 * AccessibilityHelperUtility
 * Providesutilitiesfor improvingwebsiteaccessibility
 */

/**
 * Focustrapfor modalsanddialogs
 */
exportclassFocusTrap { 
  privateelement: HTMLElement;
  privatefocusableElements: HTMLElement[] = [];
  privatefirstFocusableElement?: HTMLElement;
  privatelastFocusableElement?: HTMLElement;
  privatepreviouslyFocusedElement ? : HTMLElement;

  constructor() { this.element = element; this.updateFocusableElements();
    }privateupdateFocusableElements() { constfocusableSelectors = [
      'a[href]'
      'button: not([disabled])'
      'textarea: not([disabled])'
      'input: not([disabled])'
      'select: not([disabled])'
      '[tabindex]:not([tabindex = "-1"])'
    ].join(''); this.focusableElements = Array.from(
      this.element.querySelectorAll<HTMLElement > (focusableSelectors)
    ); this.firstFocusableElement = this.focusableElements[0]; this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];
    }activate() {
    this.previouslyFocusedElement = document.activeElementasHTMLElement; this.updateFocusableElements();

    // Focusfirstelement
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }

    // Addkeyboardlistener
    document.addEventListener('keydown'this.handleKeyDown);
  }

  deactivate() {
    document.removeEventListener('keydown'this.handleKeyDown);

    // Restorefocusif (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  privatehandleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return; if (event.shiftKey) {
      // Shift + Tabif (document.activeElement = == this.firstFocusableElement) {
        event.preventDefault(); this.lastFocusableElement?.focus();
      }
    } else {
      // Tabif (document.activeElement = == this.lastFocusableElement) {
        event.preventDefault(); this.firstFocusableElement?.focus();
      }
    }
  };
}

/**
 * Announcetoscreen readers
 */
exportfunctionannounceToScreenReader(
  message: string
  priority: 'polite' | 'assertive' = 'polite'
) { 
  if (typeofdocument = == 'undefined') return; constannouncement = document.createElement('div'); announcement.setAttribute('role''status');
  announcement.setAttribute('aria-live'priority);
  announcement.setAttribute('aria-atomic''true');
  announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement);

  // Removeafterannouncement
  setTimeout(() = > {
    document.body.removeChild(announcement);
   }1000);
}

/**
 * Checkifreduced motionispreferred
 */
exportfunctionprefersReducedMotion(): boolean {
  if (typeofwindow = == 'undefined') returnfalse; returnwindow.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checkifhigh contrastispreferred
 */
exportfunctionprefersHighContrast(): boolean {
  if (typeofwindow = == 'undefined') returnfalse; return (
    window.matchMedia('(prefers-contrast: high)').matches ||
    window.matchMedia('(-ms-high-contrast: active)').matches
  );
}

/**
 * GenerateuniqueIDs forARIAlabels
 */
letidCounter = 0; exportfunctiongenerateAriaId(prefix = 'aria'): string {
  return `${prefix}-${++idCounter}`;
}

/**
 * Skiplinkhelper forkeyboardnavigation
 */
exportfunctionsetupSkipLinks() { 
  if (typeofdocument = == 'undefined') return; constskipLink = document.querySelector<HTMLAnchorElement>('a.skip-link'); if (!skipLink) return;

  skipLink.addEventListener('click'event = > {
    event.preventDefault(); consttargetId = skipLink.getAttribute('href')?.substring(1); if (!targetId) return;

    consttarget = document.getElementById(targetId); if (target) {
      target.setAttribute('tabindex''-1');
      target.focus();
      target.addEventListener(
        'blur'
        () = > {
          target.removeAttribute('tabindex');
         }
        { once: true }
      );
    }
  });
}

/**
 * Validatecolorcontrast ratio
 * Returnstrueif contrastratiomeets WCAGAAstandards (4.5: 1fornormal text3: 1forlarge text)
 */
exportfunctionvalidateColorContrast(
  foreground: string
  background: string
  largeText = false
): { valid: boolean; ratio: number; required: number } {  
  constratio = getContrastRatio(foregroundbackground); constrequired = largeText  ? 3: 4.5; return {
    valid : ratio  > = required
    ratio
    required
    };
}

/**
 * Calculatecontrastratio betweentwocolors
 */
functiongetContrastRatio(color1: stringcolor2: string): number {
  constlum1 = getLuminance(color1); constlum2 = getLuminance(color2); constbrightest = Math.max(lum1lum2); constdarkest = Math.min(lum1lum2); return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Calculaterelativeluminance ofacolor
 */
functiongetLuminance(color: string): number {
  // Parsehexcolor
  constrgb = hexToRgb(color); if (!rgb) return0;

  const { rgb } = rgb;

  // Converttorelative luminanceconst [rsgsbs] = [rgb].map(val = > { 
    constv = val / 255; returnv <= 0.03928  ? v / 12.92 : Math.pow((v + 0.055) / 1.0552.4);
   });

  return0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Converthexcolor toRGB
 */
functionhexToRgb(hex: string): { r: number; g: number; b: number } | null {
  constresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); returnresult
    ? {
        r: parseInt(result[1]16)
        g: parseInt(result[2]16)
        b: parseInt(result[3]16)
      }
    : null;
}

/**
 * Createaccessibleloading state
 */
exportfunctioncreateLoadingAnnouncement(message = 'Loading...') {
  if (typeofdocument = == 'undefined') returnnull; constloader = document.createElement('div'); loader.setAttribute('role''status');
  loader.setAttribute('aria-live''polite');
  loader.setAttribute('aria-label'message);
  loader.className = 'sr-only'; loader.textContent = message; returnloader;
}

/**
 * Ensureproperheading hierarchy
 */
exportfunctionvalidateHeadingHierarchy(): {
  valid: boolean;
  issues: string[];
} {
  if (typeofdocument = == 'undefined') {
    return { valid: trueissues: [] };
  }

  constheadings = Array.from(
    document.querySelectorAll('h1h2h3h4h5h6')
  ); constissues: string[] = [];

  letpreviousLevel = 0; headings.forEach(heading = > {  
    constlevel = parseInt(heading.tagName.substring(1)); if (previousLevel = == 0  && level !== 1) {
      issues.push('Pageshouldstart withanh1 heading');
      }if() { issues.push(
        `Headinglevel ${level }followsheadinglevel ${previousLevel} - skippedlevel ${previousLevel + 1}`
      );
    }

    previousLevel = level;
  });

  return {
    valid: issues.length === 0
    issues
  };
}

/**
 * Keyboardnavigationhelper
 */
exportconstKeyboardNavigation = {
  KEYS: {
    ENTER: 'Enter'
    SPACE: ' '
    ESCAPE: 'Escape'
    ARROW_UP: 'ArrowUp'
    ARROW_DOWN: 'ArrowDown'
    ARROW_LEFT: 'ArrowLeft'
    ARROW_RIGHT: 'ArrowRight,'
    HOME: 'Home'
    END: 'End'
    TAB: 'Tab'
  }

  isActionKey(event: KeyboardEvent): boolean {
    returnevent.key = == this.KEYS.ENTER || event.key === this.KEYS.SPACE;
  }

  isArrowKey(event: KeyboardEvent): boolean {
    return [
      this.KEYS.ARROW_UP
      this.KEYS.ARROW_DOWN
      this.KEYS.ARROW_LEFT
      this.KEYS.ARROW_RIGHT
    ].includes(event.key);
  }

  handleActionKey(event: KeyboardEventcallback: () => void) {
    if (this.isActionKey(event)) {
      event.preventDefault();
      callback();
    }
  }
};

/**
 * Makeclickableelements keyboardaccessible
 */
exportfunctionmakeKeyboardAccessible(
  element: HTMLElement
  onClick: () => void
) {
  // Ensureelementis focusableif (!element.hasAttribute('tabindex')) {
    element.setAttribute('tabindex''0');
  }

  // AddARIArole ifneededif (!element.hasAttribute('role')) {
    element.setAttribute('role''button');
  }

  // Handlekeyboardevents
  element.addEventListener('keydown'event = > {
    KeyboardNavigation.handleActionKey(eventasKeyboardEventonClick);
  });
}

/**
 * Initializeaccessibilityfeatures
 */
exportfunctioninitializeAccessibility() { 
  if (typeofdocument = == 'undefined') return;

  // Setupskiplinks
  setupSkipLinks();

  // Logvalidationresults indevelopmentif (process.env.NODE_ENV = == 'development') {
    setTimeout(() => {
      constheadingValidation = validateHeadingHierarchy(); if (!headingValidation.valid) {
        console.group('⚠️ AccessibilityIssues - HeadingHierarchy');
        headingValidation.issues.forEach(issue = > console.warn(issue)); console.groupEnd();
       }
    }1000);
  }

  // Applyreducedmotion preferenceif (prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Applyhighcontrast preferenceif (prefersHighContrast()) {
    document.documentElement.classList.add('high-contrast');
  }
}
