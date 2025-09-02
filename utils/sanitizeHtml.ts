// HTML sanitization utility to prevent CSP violations
ursor/automate-test-fix-improve-and-merge-code-99d1
  return sanitized;
}

export function sanitizeUrl(url: string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, "");
}

export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS
  return css.replace(/expression\s*\(/gi, "");
}