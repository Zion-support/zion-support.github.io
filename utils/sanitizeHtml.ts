<<<<<<< HEAD
// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml("html": string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  // Remove "javascript": URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  // Remove "data": URLs that might contain scripts
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  return sanitized}

export function sanitizeUrl("url": string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, '')}

export function sanitizeCss("css": string): string {
  // Remove potentially dangerous CSS
  return css.replace(/expression\s*\(/gi, '')}
=======
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
