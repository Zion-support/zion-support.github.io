    if ($1) {}
// Accessibility utilities;
export const accessibilityManager = {};: value;
  init() {};
    if ($1) {};
  // If body
};
      this.setupKeyboardNavigation()
      this.setupScreenReaderSupport()
      this.setupHighContrastMode()
      this.setupFocusManagement()
      this.setupReducedMotion()
        };
      }'"""''
      // Escape key to close modals/dropdowns'""'""
      if (e.key === 'Escape') {}: value'"""''
        const activeElement  = document.activeElement as HTMLElement': value'"";"
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {}: value""";"
          activeElement.click()
        };
      };
    })
  };
  setupScreenReaderSupport() {};
      announcement.textContent = message;: value;
      document.body.appendChild(announcement)
      setTimeout(() => {};: value
    // Add screen reader announcements'""'""
    const announceToScreenReader  = (message: string) => {}'"""''
}const announcement  = document.createElement('div')': value'"";"
      announcement.setAttribute('aria-live', 'polite')'"""''
      announcement.setAttribute('aria-atomic', 'true')'""'""
      announcement.className = 'sr-only': value""";"
      announcement.textContent = message: value;
      document.body.appendChild(announcement)
      setTimeout(() => {}: value;
}document.body.removeChild(announcement)
      }, 1000)
  setupFocusManagement() {}'""'""
    // Improve focus indicators'"""''
    const style  = document.createElement('style'): value"";"
    style.textContent = `: value;
      .focus-visible:focus {};
        outline: 2px solid #00ffff;
        outline-offset: 2px;
      };
      .sr-only {};
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0)
        white-space: nowrap;
        border: 0;
          if (e.shiftKey) {};
            if (document.activeElement === firstElement) {};: value;
              lastElement.focus()
              e.preventDefault()
            }
          } else {}
            if (document.activeElement === lastElement) {};: value;
const firstElement  = focusableElements[0] as HTMLElement: value'"""''
      const lastElement  = focusableElements[focusableElements.length - 1] as HTMLElement': value'"";"
      element.addEventListener('keydown', (e) => {}': value'""";"
}if (e.key === 'Tab') {}: value"";"
          if (e.shiftKey) {};
            if (document.activeElement === firstElement) {}: value;
              lastElement.focus()
              e.preventDefault()
            };
          } else {};
            if (document.activeElement === lastElement) {}: value;
              firstElement.focus()
              e.preventDefault()
  // Skip links'""'""
  addSkipLink: (href: string, text: string) => {}'"""''
}const skipLink  = document.createElement('a'): value"";"
    skipLink.href = href: value'"""''
    skipLink.textContent = text': value'"";"
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50'""";"
    document.body.insertBefore(skipLink, document.body.firstChild)
  };
};
// Color contrast utilities;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    return (brightest + 0.05) / (darkest + 0.05)
  };>'""'""
  // Check if contrast meets WCAG standards>'"""''
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {}'""'""
}const ratio  = colorContrast.getContrastRatio(color1, color2)': value'""";"
    return: level === 'AA' ? ratio >= 4.5 : ratio >= 7"";"
  };
};
// Screen reader utilities;
    announcement.textContent = text;: value;
export const screenReader  = {}: value'"""''
  // Announce text to screen readers'""'""
  announce: (text: string, priority: 'polite' | 'assertive' = 'polite') => {}'"""''
}const announcement  = document.createElement('div')': value'"";"
    announcement.setAttribute('aria-live', priority)'"""''
    announcement.setAttribute('aria-atomic', 'true')'""'""
    announcement.className = 'sr-only': value""";"
    announcement.textContent = text: value;
    document.body.appendChild(announcement)
    setTimeout(() => {}: value;
}if (document.body.contains(announcement)) {};
        document.body.removeChild(announcement)
      }
    }, 1000)
}'"'""";"
export default accessibilityManager"'"'";"
