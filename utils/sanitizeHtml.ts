
<<<<<<< HEAD



export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: /gi,''), sanitized = sanitized.replace(/dat: a: text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: /gi,'')} export function sanitizeCss(cs: string): string { return css.replace(/expression\s*(/gi,'')},))),



=======
  return css.replace(/expression\s*(/gi, '')},
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,&apos;'); sanitized = sanitized.replace(/\s*on\w+\s*=\s*[&apos;&quot;][^&apos;&quot;]*[&apos;&quot;]/g,&apos;'); sanitized = sanitized.replace(/javascript:/gi,&apos;'); sanitized = sanitized.replace(/data:text\/html/gi,&apos;'); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,&apos;')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,&apos;')}
// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml("html": string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers

export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: /gi,''), sanitized = sanitized.replace(/dat: a: text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: /gi,'')} export function sanitizeCss(cs: string): string { return css.replace(/expression\s*(/gi,'')},))),

  return sanitized}
export function sanitizeUrl("url": string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, '')}
export function sanitizeCss("css": string): string {
  // Remove potentially dangerous CSS
  return css.replace(/expression\s*\(/gi, '')}
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function sanitizeCss(css: string): string {
  return css.replace(/expression\s*\(/gi, '');

<<<<<<< HEAD






=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

  return sanitized;
}

<<<<<<< HEAD


  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),



  return sanitized;

=======
  return sanitized;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export function sanitizeUrl(url: string): string {
  return url.replace(/javascript:/gi, '');
}
export function sanitizeCss(css: string): string {
  return css.replace(/expression\s*\(/gi, '');
}


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function sanitizeUrl(url: string): string {;
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {;
  return css.replace(/expression\s*\(/gi, '');
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
  return css.replace(/expression\s*(/gi, '')},;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: t:/gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: t:/gi,'')} export function sanitizeCss(cs: s: string): string { return css.replace(/expression\s*(/gi,'')},)));
  return css.replace(/expression\s*(/gi, '')},

<<<<<<< HEAD




=======
export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: /gi,''), sanitized = sanitized.replace(/dat: a: text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: /gi,'')} export function sanitizeCss(cs: string): string { return css.replace(/expression\s*(/gi,'')},))),

>>>>>>> origin/cursor/delete-old-data-records-6bba
