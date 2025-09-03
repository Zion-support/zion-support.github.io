export function sanitizeHtml(html: string): string {
  let sanitized = html;
  
  // Remove script tags
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, '');
  
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data:text/html
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  
  return sanitized;
}

export function sanitizeUrl(url: string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {
  // Remove expression() functions
  return css.replace(/expression\s*\(/gi, '');
}