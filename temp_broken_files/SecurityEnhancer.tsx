import React, { useEffect, useCallback } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  // Content Security Policy
  const setupCSP = useCallback(() => {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }, []);

  // XSS Protection
  const setupXSSProtection = useCallback(() => {
    // Add X-XSS-Protection header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);

    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    };

    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value) {
          const sanitized = sanitizeInput(value);
          originalInnerHTML.set.call(this, sanitized);
        },
        get: originalInnerHTML.get
      });
    }
  }, []);

  // CSRF Protection
  const setupCSRFProtection = useCallback(() => {
    // Generate CSRF token
    const generateCSRFToken = (): string => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    const token = generateCSRFToken();
    sessionStorage.setItem('csrf-token', token);

    // Add token to all forms
    const addCSRFTokenToForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const existingToken = form.querySelector('input[name="csrf-token"]');
        if (!existingToken) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = 'csrf-token';
          input.value = token;
          form.appendChild(input);
        }
      });
    };

    addCSRFTokenToForms();

    // Monitor for new forms
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'FORM') {
              addCSRFTokenToForms();
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Clickjacking Protection
  const setupClickjackingProtection = useCallback(() => {
    // Add X-Frame-Options header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);

    // Additional JavaScript protection
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  }, []);

  // Secure Headers
  const setupSecureHeaders = useCallback(() => {
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Download-Options', value: 'noopen' },
      { name: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }, []);

  // Input Validation
  const setupInputValidation = useCallback(() => {
    const validateInput = (input: HTMLInputElement) => {
      const type = input.type;
      const value = input.value;

      switch (type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            input.setCustomValidity('Please enter a valid email address');
            return false;
          }
          break;
        case 'url':
          try {
            new URL(value);
          } catch {
            input.setCustomValidity('Please enter a valid URL');
            return false;
          }
          break;
        case 'tel':
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            input.setCustomValidity('Please enter a valid phone number');
            return false;
          }
          break;
      }

      input.setCustomValidity('');
      return true;
    };

    // Add validation to all inputs
    const addValidationToInputs = () => {
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => validateInput(input));
      });
    };

    addValidationToInputs();

    // Monitor for new inputs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'INPUT') {
              addValidationToInputs();
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Security Monitoring
  const setupSecurityMonitoring = useCallback(() => {
    // Monitor for suspicious activities
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /expression\s*\(/i
    ];

    const checkForSuspiciousContent = (content: string): boolean => {
      return suspiciousPatterns.some(pattern => pattern.test(content));
    };

    // Monitor form submissions
    const monitorFormSubmissions = () => {
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        
        for (const [key, value] of formData.entries()) {
          if (typeof value === 'string' && checkForSuspiciousContent(value)) {
            console.warn('Suspicious content detected in form submission:', { key, value });
            event.preventDefault();
            alert('Suspicious content detected. Please check your input.');
            return;
          }
        }
      });
    };

    // Monitor URL changes
    const monitorURLChanges = () => {
      let currentURL = window.location.href;
      
      const checkURL = () => {
        if (window.location.href !== currentURL) {
          if (checkForSuspiciousContent(window.location.href)) {
            console.warn('Suspicious URL detected:', window.location.href);
            window.location.href = '/';
          }
          currentURL = window.location.href;
        }
      };

      setInterval(checkURL, 1000);
    };

    monitorFormSubmissions();
    monitorURLChanges();
  }, []);

  useEffect(() => {
    // Initialize all security measures
    setupCSP();
    setupXSSProtection();
    const csrfCleanup = setupCSRFProtection();
    setupClickjackingProtection();
    setupSecureHeaders();
    const inputCleanup = setupInputValidation();
    setupSecurityMonitoring();

    return () => {
      csrfCleanup();
      inputCleanup();
    };
  }, [setupCSP, setupXSSProtection, setupCSRFProtection, setupClickjackingProtection, setupSecureHeaders, setupInputValidation, setupSecurityMonitoring]);

  return <>{children}</>;
};

export default SecurityEnhancer;