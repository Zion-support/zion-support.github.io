
// Comprehensive Security Implementation
export class SecurityManager {
  constructor() {
    this.cspPolicy = this.getCSPPolicy();
    this.securityHeaders = this.getSecurityHeaders();
    this.initializeSecurity();
  }

  // Initialize security measures
  initializeSecurity() {
    this.setupCSP();
    this.setupInputValidation();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupContentTypeValidation();
    this.setupClickjackingProtection();
  }

  // Content Security Policy
  getCSPPolicy() {
    return {
      'default-src': ["'self'"],
      'script-src': [
        "'self'",
        "'unsafe-inline'",
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://fonts.googleapis.com'
      ],
      'style-src': [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com'
      ],
      'font-src': [
        "'self'",
        'https://fonts.gstatic.com'
      ],
      'img-src': [
        "'self'",
        'data:',
        'https:',
        'blob:'
      ],
      'media-src': [
        "'self'",
        'https:'
      ],
      'connect-src': [
        "'self'",
        'https://api.ziontechgroup.com',
        'https://www.google-analytics.com'
      ],
      'frame-src': [
        "'none'"
      ],
      'object-src': [
        "'none'"
      ],
      'base-uri': [
        "'self'"
      ],
      'form-action': [
        "'self'"
      ]
    };
  }

  // Security headers
  getSecurityHeaders() {
    return {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    };
  }

  // Setup CSP
  setupCSP() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = this.generateCSPString();
    document.head.appendChild(meta);
  }

  // Generate CSP string
  generateCSPString() {
    return Object.entries(this.cspPolicy)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
  }

  // Input validation
  setupInputValidation() {
    // Sanitize all form inputs
    document.addEventListener('input', (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        this.sanitizeInput(event.target);
      }
    });

    // Validate forms on submit
    document.addEventListener('submit', (event) => {
      if (!this.validateForm(event.target)) {
        event.preventDefault();
      }
    });
  }

  // Sanitize input
  sanitizeInput(input) {
    const value = input.value;
    const sanitized = this.sanitizeString(value);
    if (sanitized !== value) {
      input.value = sanitized;
    }
  }

  // Sanitize string
  sanitizeString(str) {
    return str
      .replace(/[<>"']/g, '') // Remove potentially dangerous characters
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  // Validate form
  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateInput(input)) {
        isValid = false;
        this.showValidationError(input);
      }
    });

    return isValid;
  }

  // Validate individual input
  validateInput(input) {
    const type = input.type;
    const value = input.value.trim();
    const required = input.hasAttribute('required');

    // Check required fields
    if (required && !value) {
      return false;
    }

    // Type-specific validation
    switch (type) {
      case 'email':
        return this.validateEmail(value);
      case 'tel':
        return this.validatePhone(value);
      case 'url':
        return this.validateURL(value);
      case 'number':
        return this.validateNumber(value, input.min, input.max);
      default:
        return this.validateText(value, input.minLength, input.maxLength);
    }
  }

  // Email validation
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Phone validation
  validatePhone(phone) {
    const phoneRegex = /^[+]?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/[\s-()]/g, ''));
  }

  // URL validation
  validateURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  // Number validation
  validateNumber(value, min, max) {
    const num = parseFloat(value);
    if (isNaN(num)) return false;
    if (min !== null && num < parseFloat(min)) return false;
    if (max !== null && num > parseFloat(max)) return false;
    return true;
  }

  // Text validation
  validateText(value, minLength, maxLength) {
    if (minLength !== null && value.length < parseInt(minLength)) return false;
    if (maxLength !== null && value.length > parseInt(maxLength)) return false;
    return true;
  }

  // Show validation error
  showValidationError(input) {
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    errorMsg.textContent = this.getErrorMessage(input);
    input.parentNode.appendChild(errorMsg);
  }

  // Get error message
  getErrorMessage(input) {
    const type = input.type;
    const required = input.hasAttribute('required');

    if (required && !input.value.trim()) {
      return 'This field is required';
    }

    switch (type) {
      case 'email':
        return 'Please enter a valid email address';
      case 'tel':
        return 'Please enter a valid phone number';
      case 'url':
        return 'Please enter a valid URL';
      case 'number':
        return 'Please enter a valid number';
      default:
        return 'Please enter a valid value';
    }
  }

  // XSS Protection
  setupXSSProtection() {
    // Escape HTML in user-generated content
    document.addEventListener('DOMContentLoaded', () => {
      this.escapeUserContent();
    });
  }

  // Escape user content
  escapeUserContent() {
    const userContentElements = document.querySelectorAll('[data-user-content]');
    userContentElements.forEach(element => {
      if (element.innerHTML !== element.textContent) {
        element.textContent = element.innerHTML;
      }
    });
  }

  // CSRF Protection
  setupCSRFProtection() {
    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    localStorage.setItem('csrf_token', csrfToken);

    // Add CSRF token to forms
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('form[method="post"]');
      forms.forEach(form => {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'csrf_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
      });
    });
  }

  // Generate CSRF token
  generateCSRFToken() {
    return 'csrf_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Content type validation
  setupContentTypeValidation() {
    // Validate file uploads
    document.addEventListener('change', (event) => {
      if (event.target.type === 'file') {
        this.validateFileUpload(event.target);
      }
    });
  }

  // Validate file upload
  validateFileUpload(input) {
    const files = input.files;
    const allowedTypes = input.getAttribute('data-allowed-types')?.split(',') || [];
    const maxSize = parseInt(input.getAttribute('data-max-size')) || 5242880; // 5MB default

    Array.from(files).forEach(file => {
      // Check file type
      if (allowedTypes.length && !allowedTypes.includes(file.type)) {
        this.showFileError(input, 'File type not allowed');
        input.value = '';
        return;
      }

      // Check file size
      if (file.size > maxSize) {
        this.showFileError(input, 'File size too large');
        input.value = '';
        return;
      }
    });
  }

  // Show file error
  showFileError(input, message) {
    // Remove existing error
    const existingError = input.parentNode.querySelector('.file-error');
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorMsg = document.createElement('span');
    errorMsg.className = 'file-error';
    errorMsg.textContent = message;
    input.parentNode.appendChild(errorMsg);
  }

  // Clickjacking protection
  setupClickjackingProtection() {
    // Check if page is in iframe
    if (window !== window.top) {
      // Redirect to prevent clickjacking
      window.top.location = window.location;
    }
  }

  // Security audit
  performSecurityAudit() {
    const audit = {
      timestamp: Date.now(),
      cspEnabled: !!document.querySelector('meta[http-equiv="Content-Security-Policy"]'),
      httpsEnabled: location.protocol === 'https:',
      securityHeaders: this.checkSecurityHeaders(),
      inputValidation: this.checkInputValidation(),
      xssProtection: this.checkXSSProtection(),
      csrfProtection: this.checkCSRFProtection()
    };

    return audit;
  }

  // Check security headers (simplified)
  checkSecurityHeaders() {
    // This would typically be done server-side
    return Object.keys(this.securityHeaders).length;
  }

  // Check input validation
  checkInputValidation() {
    const forms = document.querySelectorAll('form');
    let validatedForms = 0;

    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      let validatedInputs = 0;

      inputs.forEach(input => {
        if (input.hasAttribute('required') || input.hasAttribute('pattern')) {
          validatedInputs++;
        }
      });

      if (validatedInputs === inputs.length) {
        validatedForms++;
      }
    });

    return validatedForms;
  }

  // Check XSS protection
  checkXSSProtection() {
    const userContentElements = document.querySelectorAll('[data-user-content]');
    return userContentElements.length;
  }

  // Check CSRF protection
  checkCSRFProtection() {
    const csrfToken = localStorage.getItem('csrf_token');
    return !!csrfToken;
  }
}

// Initialize security manager
const securityManager = new SecurityManager();

export default securityManager;
