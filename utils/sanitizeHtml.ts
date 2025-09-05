<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,&apos;'); sanitized = sanitized.replace(/\s*on\w+\s*=\s*[&apos;&quot;][^&apos;&quot;]*[&apos;&quot;]/g,&apos;'); sanitized = sanitized.replace(/javascript:/gi,&apos;'); sanitized = sanitized.replace(/data:text\/html/gi,&apos;'); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,&apos;')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,&apos;')}
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
<<<<<<< HEAD
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
