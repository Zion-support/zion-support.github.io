export function sanitizeHtml(html: string): string {
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:text\/html/gi, '');
  
  return sanitized;
}

export function sanitizeUrl(url: string): string {
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {
  return css.replace(/expression\s*\(/gi, '');
}