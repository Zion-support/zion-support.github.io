<<<<<<< HEAD


  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,&apos;'); sanitized = sanitized.replace(/\s*on\w+\s*=\s*[&apos;&quot;][^&apos;&quot;]*[&apos;&quot;]/g,&apos;'); sanitized = sanitized.replace(/javascript:/gi,&apos;'); sanitized = sanitized.replace(/data:text\/html/gi,&apos;'); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,&apos;')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,&apos;')}
// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml("html": string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
=======
export function sanitizeHtml(html: string): string {
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
>>>>>>> origin/main
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  return sanitized}
export function sanitizeUrl("url": string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, '')}
export function sanitizeCss("css": string): string {
  // Remove potentially dangerous CSS
  return css.replace(/expression\s*\(/gi, '')}

=======
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
export function sanitize_html (html: string): string {
  let sanitized = html.replace (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace (/\s * on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace (/javascript:/gi, '');
  sanitized = sanitized.replace (/data:text\/html / gi, '');
=======



=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  return sanitized;
}


=======
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return sanitized;
}
export function sanitize_url (url: string): string {
  return url.replace (/javascript:/gi, '');
}
export function sanitize_css (css: string): string {
  return css.replace (/expression\s*\(/gi, '');
}


=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

export function sanitizeUrl(url: string): string {;
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {;
  return css.replace(/expression\s*\(/gi, '');
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
  return css.replace(/expression\s*(/gi, '')},;
export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: t:/gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: t:/gi,'')} export function sanitizeCss(cs: s: string): string { return css.replace(/expression\s*(/gi,'')},)));


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
