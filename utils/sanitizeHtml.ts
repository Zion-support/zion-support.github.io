export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,&apos;'); sanitized = sanitized.replace(/\s*on\w+\s*=\s*[&apos;&quot;][^&apos;&quot;]*[&apos;&quot;]/g,&apos;'); sanitized = sanitized.replace(/javascript:/gi,&apos;'); sanitized = sanitized.replace(/data:text\/html/gi,&apos;'); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,&apos;')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,&apos;')}
// HTML sanitization utility to prevent CSP violations
export const sanitizeHtml = (html: anystring): string  => {
  if (!html) return "";
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, "");
  return sanitized;
};
