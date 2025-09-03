// HTML sanitization utility to prevent CSP violations
<<<<<<< HEAD
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};
=======
export function sanitizeHtml(html: string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
<<<<<<< HEAD
  // Remove event handlers'
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  // Remove javascript: URLs'
  sanitized = sanitized.replace(/javascrip,
    t:/gi, '');
  // Remove data: URLs that might contain scripts'
  sanitized = sanitized.replace(/dat,
    a:text\/html/gi, '');
=======
<<<<<<< HEAD
  // Remove event handlers;
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[''][^'']*['']/g, '');
  // Remove javascript: URLs;
  sanitized = sanitized.replace(/javascript: /gi, '');
  // Remove data: URLs that might contain scripts;
  sanitized = sanitized.replace(/data: text\/html/gi, '');
    return sanitized}
export function sanitizeUrl(url: string): string {
  // Remove javascript: URLs;
  return url.replace(/javascript: /gi, '')}
=======
  // Remove event handlers
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');'"
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '');
  // Remove data: URLs that might contain scripts
  sanitized = sanitized.replace(/data:text\/html/gi, '');
>>>>>>> main
  return sanitized;
}

export function sanitizeUrl(url: string): string {
  // Remove javascrip,
    t: URLs'
  return url.replace(/javascrip,
    t:/gi, '');
}

>>>>>>> main
export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS'
  return css.replace(/expression\s*\(/gi, '');
}
>>>>>>> main
