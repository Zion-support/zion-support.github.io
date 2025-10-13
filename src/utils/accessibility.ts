<<<<<<< HEAD
'use client';
/**
 * Accessibility Utilities
 * WCAG 2.1 Level AA compliance helpers
 */
export interface A11yReport {
<<<<<<< HEAD
    errors: A11yError[]
  warnings: A11yWarning[],
  score: number
=======
// Accessibility utility
// This file contains utility functions and configurations

export const accessibility = {
  // Add utility functions here
  init: () => {

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
  }
export interface A11yError {
    type: string
  element: string
  message: string,
  wcag: string
  }
export interface A11yWarning {
    type: string
  element: string
  message: string,
  suggestion: string
  }
=======
}
}
  errors: A11yError[];
  warnings: A11yWarning[];
  score: number};
export interface A11yError {
}
}
  type: string;
  element: string;
  message: string;
  wcag: string};
export interface A11yWarning {
}
}
  type: string;
  element: string;
  message: string;
  suggestion: string};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
class AccessibilityService {
  // Check color contrast ratio
  public checkColorContrast(
    foreground: string,
    background: string
  ): {
    ratio: number
    passes: { normal: boolean, large: boolean }
  } {
    const rgb2 = this.hexToRgb(background);
    const l1 = this.getLuminance(rgb1);
    const l2 = this.getLuminance(rgb2);
    const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    return {
      ratio: Math.round(ratio * 100) / 100,
      passes: {
        normal: ratio >= 4.5, // WCAG AA for normal text
        large: ratio >= 3, // WCAG AA for large text (18pt+ or 14pt+ bold)
<<<<<<< HEAD
      }
    }
  }
  private hexToRgb(hex: string): { r: number; g: number, b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
=======
      };
    }};
  private hexToRgb(hex: string): { r: number; g: number; b: number } {;
const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
<<<<<<< HEAD
        }
      : { r: 0, g: 0, b: 0 }
  }
  private getLuminance(rgb: { r: number; g: number, b: number }): number {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
      const v = val / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
=======
        };
      : { r: 0, g: 0, b: 0 }};
  private getLuminance(rgb: { r: number; g: number; b: number }): number {;
const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
return (
;
const v = val / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)});
    return 0.2126 * r + 0.7152 * g + 0.0722 * b};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Audit page for accessibility issues
  public auditPage(): A11yReport {
    const errors: A11yError[] = []
    const warnings: A11yWarning[] = [],
    // Check for missing alt text on images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('alt')) {
        errors.push({
          type: 'missing-alt',
          element: img['src'] || 'unknown',
          message: 'Image missing alt attribute',
          wcag:         ,
$4});
      } else if (img.alt === '') {
        warnings.push({
          type: 'empty-alt',
          element: img['src'] || 'unknown',
          message: 'Image has empty alt text',
          suggestion: 'Provide descriptive alt text or use alt="" for decorative images'
<<<<<<< HEAD
        });
      }
=======
        })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    });
    // Check for missing form labels
    document.querySelectorAll('input, select, textarea').forEach(input => {
      const hasLabel =
        input.hasAttribute('aria-label') ||
        input.hasAttribute('aria-labelledby') ||
        document.querySelector(`label[for="${input.id}"]`);
      if (!hasLabel) {
        errors.push({
          type: 'missing-label',
          element: input.tagName.toLowerCase(),
          message: 'Form element missing label',
          wcag:         ,
<<<<<<< HEAD
$4});
      }
=======
$4})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    });
    // Check for proper heading hierarchy
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    headings.forEach(heading => {
      const level = parseInt(heading.tagName[1]);
      if (level > prevLevel + 1) {
        warnings.push({
          type: 'heading-hierarchy',
          element: heading.tagName.toLowerCase(),
          message: `Heading level skipped from h${prevLevel} to h${level}`,
          suggestion:         ,
<<<<<<< HEAD
$4});
      }
      prevLevel = level;
    });
    // Check for skip navigation link
    const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]');
=======
$4})};
      prevLevel = level});
    // Check for skip navigation link;
const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!hasSkipLink) {
      warnings.push({
        type: 'missing-skip-link',
        element: 'body',
        message: 'No skip navigation link found',
        suggestion:       ,
<<<<<<< HEAD
$4});
    }
    // Check for language attribute
    const html = document.documentElement;
=======
$4})};
    // Check for language attribute;
const html = document.documentElement;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!html.hasAttribute('lang')) {
      errors.push({
        type: 'missing-lang',
        element: 'html',
        message: 'Missing lang attribute on html element',
        wcag:       ,
<<<<<<< HEAD
$4});
    }
=======
$4})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Check for sufficient link text
    document.querySelectorAll('a').forEach(link => {
      const text = link.textContent?.trim() || '';
      const ariaLabel = link.getAttribute('aria-label');
      if (!text && !ariaLabel) {
        errors.push({
          type: 'empty-link',
          element: link.href || 'unknown',
          message: 'Link has no accessible text',
          wcag:         ,
$4});
      } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {
        warnings.push({
          type: 'generic-link-text',
          element: text,
          message: 'Link text is not descriptive',
          suggestion:         ,
<<<<<<< HEAD
$4});
      }
=======
$4})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    });
    // Check for touch target size
    document.querySelectorAll('button, a, input, select').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        warnings.push({
          type: 'small-touch-target',
          element: element.tagName.toLowerCase(),
          message: `Touch target too small: ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          suggestion:         ,
<<<<<<< HEAD
$4});
      }
=======
$4})};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    });
    // Calculate score (100 - errors * 10 - warnings * 2)
    const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2);
    return {
      errors,
      warnings,
      score
<<<<<<< HEAD
    }
  }
=======
    }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Add keyboard navigation helpers
  public enhanceKeyboardNavigation(): void {
    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
<<<<<<< HEAD
        document.body.classList.add('keyboard-nav')
  }
=======
        document.body.classList.add('keyboard-nav')};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    });
    document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav')
  });
    // Add keyboard shortcuts
    document.addEventListener('keydown', e => {
    // Alt + H: Go to main heading
      if (e.altKey && e.key === 'h') {
        const mainHeading = document.querySelector('h1'),
        if (mainHeading) {
<<<<<<< HEAD
          (mainHeading as HTMLElement).focus()
  }
      }
=======
          (mainHeading as HTMLElement).focus()};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Alt + M: Go to main content
      if (e.altKey && e.key === 'm') {
    const mainContent = document.querySelector('main'),
        if (mainContent) {
<<<<<<< HEAD
          (mainContent as HTMLElement).focus()
  }
      }
=======
          (mainContent as HTMLElement).focus()};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Alt + N: Go to navigation
      if (e.altKey && e.key === 'n') {
    const nav = document.querySelector('nav'),
        if (nav) {
<<<<<<< HEAD
          (nav as HTMLElement).focus()
  }
      }
    });
  }
=======
          (nav as HTMLElement).focus()};
      };
    })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Announce screen reader messages
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcer = document.getElementById('a11y-announcer') || this.createAnnouncer(),
    announcer.setAttribute('aria-live', priority);
    announcer.textContent = message;
    // Clear after announcement
    setTimeout(() => {
<<<<<<< HEAD
      announcer.textContent = ''
  }, 1000);
  }
  private createAnnouncer(): HTMLElement {
    'use client'
=======
      announcer.textContent = ''}, 1000)};
  private createAnnouncer(): HTMLElement {
'use client'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Accessibility Utilities;
 * WCAG 2.1 Level AA compliance helpers;
 */
<<<<<<< HEAD

export interface A11yReport {// TODO: Add content
  }
}
  errors: A11yError[],,
    warnings: A11yWarning[],,
    score: number
}
export interface A11yError {
    // TODO: Add content
  }
}
  type: string,,
    element: string,,
    message: string,,
    wcag: string
}
export interface A11yWarning {
    // TODO: Add content
  }
}
  type: string,,
    element: string,,
    message: string,,
    suggestion: string
}
class AccessibilityService {
    // TODO: Add content
  }

}
=======
export interface A11yReport {// TODO: Add content};
};
  errors: A11yError[];,
    warnings: A11yWarning[];,
    score: number
};
export interface A11yError {// TODO: Add content};
};
  type: string;,
    element: string;,
    message: string;,
    wcag: string
};
export interface A11yWarning {// TODO: Add content};
};
  type: string;,
    element: string;,
    message: string;,
    suggestion: string
};
class AccessibilityService {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Check color contrast ratio;
//   public checkColorContrast();
  foregroun,
  d: string,
    backgroun,
<<<<<<< HEAD
  d: string): {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  d: string): {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  rati,
  o: number,,
    passe,
<<<<<<< HEAD
  s: {/* TODO: Fix JSX expression */}
  e: boolean }
  } {
    const rgb2 = this.hexToRgb(background)
  }
    const l1 = this.getLuminance(rgb1);
    const l2 = this.getLuminance(rgb2);
    const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    return {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  rati,
  o: Math.round(ratio * 100) / 100,
      passe,
  s: {/* TODO: Fix JSX expression */}
  O: Add content,}
}

  normal: ratio >= 4.5, // WCAG AA for normal text,
  large: ratio >= 3, // WCAG AA for large text (18pt+ or 14pt+ bold)
      }
    }
  }
  private hexToRgb(hex: string): { r: number; g: number, b: number } {
    // TODO: Add content
  }

}
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result;
      ? {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : { r: 0, g: 0, b: 0 }
  }

  private getLuminance(rgb: { r: number; g: number, b: number }): number {
    // TODO: Add content
  }

}
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      const v = val / 255;
      return v;)
          <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  // Audit page for accessibility issues;
  public auditPage(): A11yReport {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  s: {/* TODO: Fix JSX expression */};
  e: boolean }} {const rgb2 = this.hexToRgb(background)};
    const l1 = this.getLuminance(rgb1);
    const l2 = this.getLuminance(rgb2);
    const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    return {/* TODO: Fix JSX expression */};
  O: Add content};
};
  rati,
  o: Math.round(ratio * 100) / 100,
      passe,
  s: {/* TODO: Fix JSX expression */};
  O: Add content};
};
  normal: ratio >= 4.5, // WCAG AA for normal text,
  large: ratio >= 3, // WCAG AA for large text (18pt+ or 14pt+ bold)
      };
    };
  };
  private hexToRgb(hex: string): { r: number; g: number; b: number } {// TODO: Add content};
};
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result;
      ? {/* TODO: Fix JSX expression */};
  O: Add content};
};
  r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        };
      : { r: 0, g: 0, b: 0 };
  };
  private getLuminance(rgb: { r: number; g: number; b: number }): number {// TODO: Add content};
};
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      const v = val / 255;
      return v;)
          <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)});
    return 0.2126 * r + 0.7152 * g + 0.0722 * b};
  // Audit page for accessibility issues;
  public auditPage(): A11yReport {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const,
  errors: A11yError[] = [],
    const,
<<<<<<< HEAD
  warnings: A11yWarning[] = []
    // Check for missing alt text on images,
    document.querySelectorAll('img').forEach(img => {/* TODO: Fix JSX expression */}
  O: Add content,}
})
      if (!img.hasAttribute('alt')) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        errors.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
  warnings: A11yWarning[] = [];
    // Check for missing alt text on images;
    document.querySelectorAll('img').forEach(img => {/* TODO: Fix JSX expression */};
  O: Add content};
})
      if (!img.hasAttribute('alt')) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        errors.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'missing-alt',
          element: img['src'] || 'unknown',
          message: 'Image missing alt attribute',
          wcag: '1.1.1 (Level A)'
<<<<<<< HEAD

        });
      } else if (img.alt === '') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        warnings.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
        })} else if (img.alt === '') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        warnings.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'empty-alt',
          element: img['src'] || 'unknown',
          message: 'Image has empty alt text',
          suggestion: 'Provide descriptive alt text or use alt="" for decorative images'
        };
  )
      };
    });
    // Check for missing form labels;
<<<<<<< HEAD
    document.querySelectorAll('input, select, textarea').forEach(input => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
    document.querySelectorAll('input, select, textarea').forEach(input => {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      const hasLabel =)
//         input.hasAttribute('aria-label') ||
//         input.hasAttribute('aria-labelledby') ||"
        document.querySelector(`label[for="${input.id}"]`);
<<<<<<< HEAD
      if (!hasLabel) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        errors.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
      if (!hasLabel) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        errors.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'missing-label',
          element: input.tagName.toLowerCase(),
          message: 'Form element missing label',
          wcag: '1.3.1 (Level A), 3.3.2 (Level A)'
        };
  )
      };
    });
    // Check for proper heading hierarchy;
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
<<<<<<< HEAD
    headings.forEach(heading => {/* TODO: Fix JSX expression */}
  O: Add content,}
})
      const level = parseInt(heading.tagName[1]);
      if (level > prevLevel + 1) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        warnings.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
    headings.forEach(heading => {/* TODO: Fix JSX expression */};
  O: Add content};
});
const level = parseInt(heading.tagName[1]);
      if (level > prevLevel + 1) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        warnings.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'heading-hierarchy',
          element: heading.tagName.toLowerCase(),
          message: `Heading level skipped from h${prevLevel} to h${level}`,
          suggestion: 'Maintain proper heading hierarchy'
        };
  )
<<<<<<< HEAD
      }
      prevLevel = level;
    });
    // Check for skip navigation link;"
const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]');
    if (!hasSkipLink) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      warnings.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
      };
      prevLevel = level});
    // Check for skip navigation link;";
const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]');
    if (!hasSkipLink) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      warnings.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'missing-skip-link',
        element: 'body',
        message: 'No skip navigation link found',
        suggestion: 'Add a skip link to main content for keyboard users'
      };
  )
    };
    // Check for language attribute;
const html = document.documentElement;
<<<<<<< HEAD
    if (!html.hasAttribute('lang')) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      errors.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
    if (!html.hasAttribute('lang')) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      errors.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'missing-lang',
        element: 'html',
        message: 'Missing lang attribute on html element',
        wcag: '3.1.1 (Level A)'
      };
  )
    };
    // Check for sufficient link text;
<<<<<<< HEAD
    document.querySelectorAll('a').forEach(link => {/* TODO: Fix JSX expression */}
  O: Add content,}
})
      const text = link.textContent?.trim() || '';
      const ariaLabel = link.getAttribute('aria-label');
      if (!text && !ariaLabel) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        errors.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
    document.querySelectorAll('a').forEach(link => {/* TODO: Fix JSX expression */};
  O: Add content};
});
const text = link.textContent?.trim() || '';
      const ariaLabel = link.getAttribute('aria-label');
      if (!text && !ariaLabel) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        errors.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'empty-link',
          element: link.href || 'unknown',
          message: 'Link has no accessible text',
          wcag: '2.4.4 (Level A)'
<<<<<<< HEAD

        });
      } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        warnings.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
        })} else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        warnings.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'generic-link-text',
          element: text,
          message: 'Link text is not descriptive',
          suggestion: 'Use more descriptive link text that makes sense out of context'
        };
  )
      };
    });
    // Check for touch target size;
<<<<<<< HEAD
    document.querySelectorAll('button, a, input, select').forEach(element => {/* TODO: Fix JSX expression */}
  O: Add content,}
})
      const rect = element.getBoundingClientRect();
      if (rect.width;)
          < 44 || rect.height < 44) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        warnings.push({/* TODO: Fix JSX expression */}
  O: Add content,}
}

=======
    document.querySelectorAll('button, a, input, select').forEach(element => {/* TODO: Fix JSX expression */};
  O: Add content};
});
const rect = element.getBoundingClientRect();
      if (rect.width;)
          < 44 || rect.height < 44) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        warnings.push({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  type: 'small-touch-target',
          element: element.tagName.toLowerCase(),
          message: `Touch target too small: ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          suggestion: 'Increase touch target size to at least 44x44px'
        };
  )
      };
    };
  )
<<<<<<< HEAD
    // Calculate score (100 - errors * 10 - warnings * 2)
    const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2);
    return {/* TODO: Fix JSX expression */}
  O: Add content,}
}
//       errors,
//       warnings,
//       score;
    }
  }
  // Add keyboard navigation helpers;
  public enhanceKeyboardNavigation(): void {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    // Add focus visible class for keyboard navigation;
    document.addEventListener('keydown', e => {/* TODO: Fix JSX expression */}
  O: Add content,}
})
      if (e.key === 'Tab') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        document.body.classList.add('keyboard-nav');
      }
    });
    document.addEventListener('mousedown', () => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      document.body.classList.remove('keyboard-nav');
    });
    // Add keyboard shortcuts;
    document.addEventListener('keydown', e => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      // Alt + H: Go to main heading,)
      if (e.altKey && e.key === 'h') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        const mainHeading = document.querySelector('h1');
        if (mainHeading) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
          (mainHeading as HTMLElement).focus();
        }
      }
      // Alt + M: Go to main content,
      if (e.altKey && e.key === 'm') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        const mainContent = document.querySelector('main');
        if (mainContent) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
          (mainContent as HTMLElement).focus();
        }
      }
      // Alt + N: Go to navigation,
      if (e.altKey && e.key === 'n') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        const nav = document.querySelector('nav');
        if (nav) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
          (nav as HTMLElement).focus();
        }
      }
    }
=======
    // Calculate score (100 - errors * 10 - warnings * 2);
const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2);
    return {/* TODO: Fix JSX expression */};
  O: Add content};
};
//       errors,
//       warnings,
//       score}};
  // Add keyboard navigation helpers;
  public enhanceKeyboardNavigation(): void {/* TODO: Fix JSX expression */};
  O: Add content};
};
    // Add focus visible class for keyboard navigation;
    document.addEventListener('keydown', e => {/* TODO: Fix JSX expression */};
  O: Add content};
})
      if (e.key === 'Tab') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        document.body.classList.add('keyboard-nav')};
    });
    document.addEventListener('mousedown', () => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      document.body.classList.remove('keyboard-nav')});
    // Add keyboard shortcuts;
    document.addEventListener('keydown', e => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      // Alt + H: Go to main heading;)
      if (e.altKey && e.key === 'h') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        const mainHeading = document.querySelector('h1');
        if (mainHeading) {/* TODO: Fix JSX expression */};
  O: Add content};
};
          (mainHeading as HTMLElement).focus()};
      };
      // Alt + M: Go to main content;
      if (e.altKey && e.key === 'm') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        const mainContent = document.querySelector('main');
        if (mainContent) {/* TODO: Fix JSX expression */};
  O: Add content};
};
          (mainContent as HTMLElement).focus()};
      };
      // Alt + N: Go to navigation;
      if (e.altKey && e.key === 'n') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        const nav = document.querySelector('nav');
        if (nav) {/* TODO: Fix JSX expression */};
  O: Add content};
};
          (nav as HTMLElement).focus()};
      };
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  )
  };
  // Announce screen reader messages;
  public announce(messag,
  e: string, priorit)
<<<<<<< HEAD
  y: 'polite' | 'assertive' = 'polite'): void {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  y: 'polite' | 'assertive' = 'polite'): void {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const announcer = document.getElementById('a11y-announcer') || this.createAnnouncer();
    announcer.setAttribute('aria-live', priority);
    announcer.textContent = message;
    // Clear after announcement;
<<<<<<< HEAD
    setTimeout(() => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      announcer.textContent = '';
    }, 1000);
  }
  private createAnnouncer(): HTMLElement {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
    setTimeout(() => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      announcer.textContent = ''}, 1000)};
  private createAnnouncer(): HTMLElement {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const announcer = document.createElement('div');
    announcer.id = 'a11y-announcer';
    announcer.className = 'sr-only';
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);
<<<<<<< HEAD
    return announcer;
  }
=======
    return announcer};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Trap focus within a modal
  public trapFocus(element: HTMLElement): () => void {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault(),
          lastElement.focus()
  } else if (!e.shiftKey && document.activeElement === lastElement) {
  // Trap focus within a modal;
  public trapFocus(elemen)
<<<<<<< HEAD
  t: HTMLElement): () => void {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  t: HTMLElement): () => void {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const focusableElements = element.querySelectorAll()
      'a[href], butto,
  n:not([disabled]), textare,
  a:not([disabled]), inpu,
  t:not([disabled]), selec,"
  t:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
<<<<<<< HEAD
    const handleTabKey = (e: KeyboardEvent) => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      if (e.key === 'Tab') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        if (e.shiftKey && document.activeElement === firstElement) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
          e.preventDefault();
          firstElement.focus();
        }
      }
      if (e.key === 'Escape') {
      if (e.key === 'Escape') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        element.dispatchEvent(new CustomEvent('close'));
      }
    }
    element.addEventListener('keydown', handleTabKey);
    // Return cleanup function
    return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
  }
=======
    const handleTabKey = (e: KeyboardEvent) => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      if (e.key === 'Tab') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        if (e.shiftKey && document.activeElement === firstElement) {/* TODO: Fix JSX expression */};
  O: Add content};
};
          e.preventDefault();
          lastElement.focus()} else if (!e.shiftKey && document.activeElement === lastElement) {/* TODO: Fix JSX expression */};
  O: Add content};
};
          e.preventDefault();
          firstElement.focus()};
      };
      if (e.key === 'Escape') {
      if (e.key === 'Escape') {/* TODO: Fix JSX expression */};
  O: Add content};
};
        element.dispatchEvent(new CustomEvent('close'))};
    };
    element.addEventListener('keydown', handleTabKey);
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey)}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Check if element is visible to screen readers
  public isAccessible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element),
    return !(
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      element.hasAttribute('hidden') ||
      element.getAttribute('aria-hidden') === 'true'
<<<<<<< HEAD
    )
  }
}
// Singleton instance
const a11y = new AccessibilityService();
export default a11y;
    // Return cleanup function;
    return () => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      element.removeEventListener('keydown', handleTabKey);
    }
  }
  // Check if element is visible to screen readers;
  public isAccessible(elemen)
  t: HTMLElement): boolean {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
    )};
};
// Singleton instance;
const a11y = new AccessibilityService();
export default a11y;
    // Return cleanup function;
    return () => {/* TODO: Fix JSX expression */};
  O: Add content};
};
      element.removeEventListener('keydown', handleTabKey)}};
  // Check if element is visible to screen readers;
  public isAccessible(elemen)
  t: HTMLElement): boolean {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const style = window.getComputedStyle(element);
    return !()
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
//       element.hasAttribute('hidden') ||
      element.getAttribute('aria-hidden') === 'true'
    )
  };
};
// Singleton instance;
const a11y = new AccessibilityService()
export default a11y;"`
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
