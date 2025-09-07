<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export const generateId = (prefix: string = "id"): string => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
export const announceToScreenReader = (message: string): void => {;  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5
};

export const validateAriaLabel = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby")
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const announceToScreenReader = (message: string): void => {
  if (typeof window === "undefined") return;





origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const generateId = (prefix: string = "id"): string => {

export const generateId = (prefix: string = "id"): string => {
export const generateId = (prefix: string = "id"): string => {""
pr-12325
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const announceToScreenReader = (message: string): void => {
export const generateId = (prefix: string = 'id'): string => {;
main
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string): void => {;
export const announceToScreenReader = (message: string): void => {
  if (typeof window === "undefined") return;


main
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======



origin/cursor/expand-services-advertise-and-build-project-c28b
export const generateId = (prefix: string = 'id'): string => {;`;

export const generateId = (prefix: string = "id"): string => {""
export const generateId = (prefix: string = "id"): string => {""
export const generateId = (prefix: string = 'id'): string => {'
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const announceToScreenReader = (message: string): void => {'
export const generateId = (prefix: string = 'id'): string => {;'
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

  if (typeof window === "undefined") return;""
  const announcement = document.createElement("div");""
  announcement.setAttribute("aria-live", "polite");""
  announcement.setAttribute("aria-atomic", "true");""
  announcement.className = "sr-only";""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (typeof window === 'undefined') return;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
<<<<<<< HEAD
<<<<<<< HEAD

main
=======
<<<<<<< HEAD
export const announceToScreenReader = (message: string): void => {";
  if (typeof window === "undefined") return;
"
  const announcement = document.createElement("div");"
  announcement.setAttribute("aria-live", "polite");"
  announcement.setAttribute("aria-atomic", "true");"
  announcement.className = "sr-only";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove after announcement;
  setTimeout(() => {}
=======



main
  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove after announcement
  if (typeof window === 'undefined') return;''
  const announcement = document.createElement('div');''
  announcement.setAttribute('aria-live', 'polite');''
  announcement.setAttribute('aria-atomic', 'true');''
  announcement.className = 'sr-only';'

  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove after announcement;

  setTimeout(() => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    document.body.removeChild(announcement);
  }, 1000);
}
<<<<<<< HEAD
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'


<<<<<<< HEAD
=======
<<<<<<< HEAD
export const trapFocus = (element: HTMLElement): (() => void) => {}
  const focusableElements = element.querySelectorAll("
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',

    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
origin/cursor/expand-services-advertise-and-build-project-c28b
main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[]
    focusableElements.length - 1;
  ] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {"
    if (e.key !== "Tab") return;

    if (e.shiftKey) {}
      if (document.activeElement === firstElement) {}
        lastElement.focus();
        e.preventDefault();'
export const generate_id = (prefix: string = 'id'): string => {};`
  return `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`;
}
;
<<<<<<< HEAD
export const announceToScreenReader = (message: string): void => {};
  // Check condition;
if (return) {}
  $2;
}'
  const announcement = document.create_element ('div');'
  announcement.set_attribute ('aria - live', 'polite');'
  announcement.set_attribute ('aria - atomic', 'true');'
=======
export const announceToScreenReader = (message: string): void => {
  // Check condition
if (return) {
  $2
}
  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove after announcement;
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll()
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableElements = element.querySelectorAll()'
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',''
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',''
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[
    focusableElements.length - 1;]
  ] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;"
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();"
export const generate_id = (prefix: string = 'id'): string => {`;
export const generate_id = (prefix: string = 'id'): string => {'

  return `${prefix}-${Math.random ().to_string (36).substr (2, 9)}`;
;
  // Check condition;
if (return) {
  $2;
pr-12325
  const announcement = document.create_element ('div');
  announcement.set_attribute ('aria - live', 'polite');
  announcement.set_attribute ('aria - atomic', 'true');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  announcement.class_name = 'sr - only';
export const announceToScreenReader = (message: string): void => {
  // Check condition;

if (return) {
  $2;
}'
  const announcement = document.create_element ('div');''
  announcement.set_attribute ('aria - live', 'polite');''
  announcement.set_attribute ('aria - atomic', 'true');''
  announcement.class_name = 'sr - only';'

  announcement.text_content = message;
  document.body.append_child (announcement);
;
  // Remove after announcement;
  set_timeout (() => {}
<<<<<<< HEAD
    document.body.remove_child (announcement);
=======
    document.body.remove_child (announcement);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }, 1000);
}
;
export const trap_focus = (element: HTMLElement): (() => void) => {}
  const focusable_elements = element.querySelectorAll ('";
    'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"])');

  const focusable_elements = element.querySelectorAll ()'
    'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"])');'

  const first_element = focusable_elements[0] as HTMLElement;
  const last_element = focusable_elements[focusable_elements.length - 1] as HTMLElement;
;
  const handleTabKey = (e: KeyboardEvent) =>: any {}
    // Check condition;
if (return) {}
  $2;
}
    // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
=======
      // Check condition
if ( {) {
  $2

  // TODO: Implement
}
    // Check condition;
if (return) {
  $2;
}
    // Check condition;
if ( {) {
  $2;
}
      // Check condition;
if ( {) {
  $2;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
        last_element.focus ();
        e.prevent_default ();
      }
<<<<<<< HEAD
    } else {}
      // Check condition;
if ( {) {}
  $2;
=======
    } else {
      // Check condition
if ( {) {
  $2

  // TODO: Implement
}
      // Check condition;
if ( {) {
  $2;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
        first_element.focus ();
        e.prevent_default ();
      }
    }
  }
main

<<<<<<< HEAD

  element.addEventListener("keydown", handleTabKey);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Focus first element
  firstElement?.focus();

  return () => {
    element.removeEventListener("keydown", handleTabKey);
  };
};
  // Remove after announcement;
  set_timeout (() => {
    document.body.remove_child (announcement);
export const trap_focus = (element: HTMLElement): (() => void) => {
  const focusable_elements = element.querySelectorAll ()
    'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"])');
  const first_element = focusable_elements[0] as HTMLElement;
  const last_element = focusable_elements[focusable_elements.length - 1] as HTMLElement;
  const handleTabKey = (e: KeyboardEvent) =>: any {
  // TODO: Implement
    // Check condition;
    // Check condition;
if ( {) {
      // Check condition;
        last_element.focus ();
        e.prevent_default ();
    } else {
  // TODO: Implement
      // Check condition;
        first_element.focus ();




'
  element.addEventListener("keydown", handleTabKey);"
  // Focus first element;
  firstElement?.focus();

  return () => {"
    element.removeEventListener("keydown", handleTabKey);"
pr-12325

  };
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;

    const [r, g, b] = rgb.map((c) => {
      const val = parseInt(c) / 255;
      return val <= 0.03928
        ? val / 12.92
      return val <= 0.03928;

        ? val / 12.92;
pr-12325
        : Math.pow((val + 0.055) / 1.055, 2.4);

    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
pr-12325

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};


}
main
export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5;
};

export const validateAriaLabel = (element: HTMLElement): boolean => {

  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export const isHighContrast = (color1: string, color2: string): boolean => {;
  return getContrastRatio(color1, color2) >= 4.5
};

<<<<<<< HEAD
export const validateAriaLabel = (element: HTMLElement): boolean => {;  const rect = element.getBoundingClientRect();
=======
"
  element.addEventListener("keydown", handleTabKey);

  // Focus first element;
  firstElement?.focus();

  return () => {"
    element.removeEventListener("keydown", handleTabKey);
  };
};

export const getContrastRatio = (color1: string, color2: string): number => {}
  const getLuminance = (color: string): number => {};
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;

    const [r, g, b] = rgb.map((c) => {}
      const val = parseInt(c) / 255;
      return val <= 0.03928;
        ? val / 12.92;
        : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

export const isHighContrast = (color1: string, color2: string): boolean => {};
  return getContrastRatio(color1, color2) >= 4.5;
};

export const validateAriaLabel = (element: HTMLElement): boolean => {";
  const hasAriaLabel = element.hasAttribute("aria-label");"
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
  const hasVisibleText = element.textContent?.trim().length > 0;

  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText;
};

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {}
  const focusableSelectors = ["
    "button:not([disabled])","
    "input:not([disabled])","
    "select:not([disabled])","
    "textarea:not([disabled])","
    "a[href]",'"
    '[tabindex]:not([tabindex="-1"])',";
  ].join(", ");

  return Array.from(
    container.querySelectorAll(focusableSelectors),
  ) as HTMLElement[];
};

export const isElementInViewport = (element: HTMLElement): boolean => {;

  const rect = element.getBoundingClientRect();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight |document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth |document.documentElement.clientWidth)
  );
}'
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {';
  element.scrollIntoView({ behavior, block: 'start' });
<<<<<<< HEAD
}
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
=======
export const validateAriaLabel = (element: HTMLElement): boolean => {;
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


origin/cursor/expand-services-advertise-and-build-project-c28b
export const isHighContrast = (color1: string, color2: string): boolean => {}
  return getContrastRatio(color1, color2) >= 4.5;}
};


export const validateAriaLabel = (element: HTMLElement): boolean => {"
  const hasAriaLabel = element.hasAttribute("aria-label");""
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");""
  const hasAriaLabel = element.hasAttribute("aria-label");""
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");"

};

export const isHighContrast = (color1: string, color2: string): boolean => {;}
  return getContrastRatio(color1, color2) >= 4.5;}
};

export const validateAriaLabel = (element: HTMLElement): boolean => {;

  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');


  const hasAriaLabel = element.hasAttribute("aria-label");
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");


origin/cursor/expand-services-advertise-and-build-project-c28b
  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
main
<<<<<<< HEAD
=======
  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
export const validateAriaLabel = (element: HTMLElement): boolean => {;"
  const hasAriaLabel = element.hasAttribute('aria-label');''
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const hasVisibleText = element.textContent?.trim().length > 0;
}
  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText;}
};

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
<<<<<<< HEAD
<<<<<<< HEAD
=======

main
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  return Array.from(

  const focusableSelectors = []'
    "button:not([disabled])",""
    "input:not([disabled])",""
    "select:not([disabled])",""
    "textarea:not([disabled])",""
    "a[href]",""
    '[tabindex]:not([tabindex="-1"])',''
  ].join(", ");"
  return Array.from()
    container.querySelectorAll(focusableSelectors),
  ) as HTMLElement[];
};

export const isElementInViewport = (element: HTMLElement): boolean => {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
=======
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5;

export const validateAriaLabel = (element: HTMLElement): boolean => {"
  const hasAriaLabel = element.hasAttribute("aria-label");""
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");""
  const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");"

export const isHighContrast = (color1: string, color2: string): boolean => {;

export const validateAriaLabel = (element: HTMLElement): boolean => {;"
  const hasAriaLabel = element.hasAttribute('aria-label');
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
  const hasVisibleText = element.textContent?.trim().length > 0;

  return hasAriaLabel || hasAriaLabelledBy || hasVisibleText;

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = []
    "button:not([disabled])",""
    "input:not([disabled])",""
    "select:not([disabled])",""
    "textarea:not([disabled])",""
    "a[href]",""
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");"
  return Array.from()
    container.querySelectorAll(focusableSelectors),
  ) as HTMLElement[];

export const isElementInViewport = (element: HTMLElement): boolean => {;
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

=======
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
}'
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ].join(', ');
"
    'button:not([disabled])',''
    'input:not([disabled])',''
    'select:not([disabled])',''
    'textarea:not([disabled])',''
    'a[href]',''
    '[tabindex]:not([tabindex="-1"])';'

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&)
    rect.bottom <= (window.innerHeight |document.documentElement.clientHeight) &&

    rect.right <= (window.innerWidth |document.documentElement.clientWidth)
  );
}'
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {''
  element.scrollIntoView({ behavior, block: 'start' });'
}'
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {''
  ].join(', ');'
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];


};

export const isElementInViewport = (element: HTMLElement): boolean => {;

  const rect = element.getBoundingClientRect();
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=)
      (window.innerHeight || document.documentElement.clientHeight) &&
<<<<<<< HEAD
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
=======
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)}
  );}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};

export const scrollToElement = (
  element: HTMLElement,"
  behavior: ScrollBehavior = "smooth",
<<<<<<< HEAD
): void => {
  element.scrollIntoView({ behavior, block: "start" })
=======
): void => {";
  element.scrollIntoView({ behavior, block: "start" });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const createSkipLink = (
  targetId: string,"
  text: string = "Skip to main content",
<<<<<<< HEAD
): HTMLElement => {
  const skipLink = document.createElement("a");
  const skipLink = document.createElement('a');
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;


origin/cursor/expand-services-advertise-and-build-project-c28b

  const skipLink = document.createElement('a');

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
): HTMLElement => {";
  const skipLink = document.createElement("a");`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
=======

main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const createSkipLink = (
  targetId: string,
  text: string = "Skip to main content",
): HTMLElement => {
  const skipLink = document.createElement("a");
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;


  const skipLink = document.createElement('a');
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



origin/cursor/expand-services-advertise-and-build-project-c28b
  const skipLink = document.createElement('a');
main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className ="
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";
<<<<<<< HEAD
"
  skipLink.addEventListener("click", (e) => {}
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {}
      target.focus();
      scrollToElement(target);
=======

  skipLink.addEventListener("click", (e) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&)
    rect.bottom <= (window.innerHeight |document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth |document.documentElement.clientWidth)
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {
  element.scrollIntoView({ behavior, block: 'start' });
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  ].join(', ');
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];



    rect.left >= 0 &&
    rect.bottom <=)
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

export const scrollToElement = (
  element: HTMLElement,

  element: HTMLElement,'
  behavior: ScrollBehavior = "smooth",")
): void => {"
  element.scrollIntoView({ behavior, block: "start" });"

export const createSkipLink = (
  targetId: string,"
  text: string = "Skip to main content",")
): HTMLElement => {"
  const skipLink = document.createElement("a");""
  const skipLink = document.createElement('a');`;
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";""
  skipLink.addEventListener("click", (e) => {"
pr-12325

    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();}
      scrollToElement(target);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  

  return skipLink;
}


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  





  return skipLink;
  return skipLink;

  


  
origin/cursor/expand-services-advertise-and-build-project-c28b



ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  

  return skipLink;
}

  return skipLink;
  return skipLink;



>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return skipLink;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



  return skipLink;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

main
};
origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
};
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  

  return skipLink;




"`;
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink};
pr-12325
  return skipLink;

"
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math && Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document && document.createElement('div'), announcement && announcement.setAttribute('aria-live', 'polite'); announcement && announcement.setAttribute('aria-atomic', 'true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document && document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element && element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements && focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e && e.key ! = = 'Tab') return, if (e && e.shiftKey) { if (document && document.activeElement = = = firstElement) { lastElement && lastElement.focus(), e && e.preventDefault()} } else { if (document && document.activeElement = = = lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } }; element && element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element && element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color && color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb && rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0 && 0.03928 ? val / 12 && 12.92: Math && Math.pow((val + 0 && 0.055) / 1 && 1.055, 2 && 2.4)}); return 0 && 0.2126 * r + 0 && 0.7152 * g + 0 && 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math && Math.max(lum1, lum2); const darkest = Math && Math.min(lum1, lum2); return (brightest + 0 && 0.05) / (darkest + 0 && 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4 && 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element && element.hasAttribute('aria-label'), const hasAriaLabelledBy = element && element.hasAttribute('aria-labelledby'), const hasVisibleText = element && element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array && Array.from(container && container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element && element.getBoundingClientRect(); return ( rect && rect.top > = 0 && rect && rect.left > = 0 && rect && rect.bottom < = (window && window.innerHeight || document && document.documentElement.clientHeight) && rect && rect.right < = (window && window.innerWidth || document && document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element && element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document && document.createElement('a'); skipLink && skipLink.href = `#${targetId}`; skipLink && skipLink.textContent = text; skipLink && skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink && skipLink.addEventListener('click', (e) = > { e && e.preventDefault(); const target = document && document.getElementById(targetId); if (target) { target && target.focus(); scrollToElement(target)} }); return skipLink};'

};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    rect.top >= 0 &&;
    rect.left >= 0 &&;
    rect.bottom <= (window.inner_height || document.document_element.client_height) &&;
    rect.right <= (window.inner_width || document.document_element.client_width));
}
;'
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {';
  element.scrollIntoView ({ behavior, block: 'start' });
}
;'
export const createSkipLink = (target_id: string, text: string = 'Skip to main content'): HTMLElement => {';
  const skip_link = document.create_element ('a');`
  skip_link.href = `#${target_id}`;
  skip_link.text_content = text;'
  skip_link.class_name = 'sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';
;'
  skip_link.addEventListener ('click', (e) => {}
    e.prevent_default ();
    const target = document.getElementById (target_id);
<<<<<<< HEAD
    // Check condition;
if ( {) {}
  $2;
=======
    // Check condition
if ( {) {
  $2

;'
export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {''
  element.scrollIntoView ({ behavior, block: 'start' });'
}
;'
export const createSkipLink = (target_id: string, text: string = 'Skip to main content'): HTMLElement => {''
  const skip_link = document.create_element ('a');'

  skip_link.href = `#${target_id}`;
  skip_link.text_content = text;'
  skip_link.class_name = 'sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';'
;'
  skip_link.addEventListener ('click', (e) => {'
    e.prevent_default ();
    const target = document.getElementById (target_id);
    // Check condition;

if ( {) {
  $2;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
      target.focus ();
      scrollToElement (target);
    }
  });
;
  return skip_link;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return; const announcement = document.createElement('div'); announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return; if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g); if (!rgb) return 0; const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'); const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'); const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
  });
  return skipLink;
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
export const generateId = (prefix: string = 'id'): string = > { return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}; export const announceToScreenReader = (message: string): void = > { if (typeof window = = = 'undefined') return, const announcement = document.createElement('div'), announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); // Remove after announcement setTimeout(() = > { document.body.removeChild(announcement)}, 1000)}; export const trapFocus = (element: HTMLElement): (() = > void) = > { const focusableElements = element.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]: not([tabindex = "-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) = > { if (e.key ! = = 'Tab') return, if (e.shiftKey) { if (document.activeElement = = = firstElement) { lastElement.focus(), e.preventDefault()} } else { if (document.activeElement = = = lastElement) { firstElement.focus(); e.preventDefault()} } }; element.addEventListener('keydown', handleTabKey); // Focus first element firstElement?.focus(); return () = > { element.removeEventListener('keydown', handleTabKey)}}; export const getContrastRatio = (color1: string, color2: string): number = > { const getLuminance = (color: string): number = > { const rgb = color.match(/\d+/g), if (!rgb) return 0, const [r, g, b] = rgb.map(c = > { const val = parseInt(c) / 255; return val < = 0.03928 ? val / 12.92: Math.pow((val + 0.055) / 1.055, 2.4)}); return 0.2126 * r + 0.7152 * g + 0.0722 * b}; const lum1 = getLuminance(color1); const lum2 = getLuminance(color2); const brightest = Math.max(lum1, lum2); const darkest = Math.min(lum1, lum2); return (brightest + 0.05) / (darkest + 0.05)}; export const isHighContrast = (color1: string, color2: string): boolean = > { return getContrastRatio(color1, color2) > = 4.5}; export const validateAriaLabel = (element: HTMLElement): boolean = > { const hasAriaLabel = element.hasAttribute('aria-label'), const hasAriaLabelledBy = element.hasAttribute('aria-labelledby'), const hasVisibleText = element.textContent?.trim().length > 0; return hasAriaLabel || hasAriaLabelledBy || hasVisibleText}; export const getFocusableElements = (container: HTMLElement): HTMLElement[] = > { const focusableSelectors = [ 'button: not([disabled])' 'input: not([disabled])' 'select: not([disabled])' 'textarea: not([disabled])' 'a[href]' '[tabindex]: not([tabindex = "-1"])' ].join(', '); return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]}; export const isElementInViewport = (element: HTMLElement): boolean = > { const rect = element.getBoundingClientRect(); return ( rect.top > = 0 && rect.left > = 0 && rect.bottom < = (window.innerHeight || document.documentElement.clientHeight) && rect.right < = (window.innerWidth || document.documentElement.clientWidth) )}; export const scrollToElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void = > { element.scrollIntoView({ behavior, block: 'start' })}; export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement = > { const skipLink = document.createElement('a'); skipLink.href = `#${targetId}`; skipLink.textContent = text; skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'; skipLink.addEventListener('click', (e) = > { e.preventDefault(); const target = document.getElementById(targetId); if (target) { target.focus(); scrollToElement(target)} }); return skipLink};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  element.scrollIntoView ({ behavior, block: 'start' });
export const createSkipLink = (target_id: string, text: string = 'Skip to main content'): HTMLElement => {
  const skip_link = document.create_element ('a');`;
  skip_link.href = `#${target_id}`;
  skip_link.text_content = text;
  skip_link.class_name = 'sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';
  skip_link.addEventListener ('click', (e) => {
    const target = document.getElementById (target_id);
    // Check condition;
      target.focus ();
      scrollToElement (target);
  return skip_link;
`;
pr-12325
'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
