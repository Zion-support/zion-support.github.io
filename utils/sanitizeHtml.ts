// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml(html: string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');'"
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  // Remove data: URLs that might contain scripts
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  return sanitized;
}