<<<<<<< HEAD

=======
export function sanitizeHtml(html: string): string {
export function sanitizeHtml(html: string): string {;
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return css.replace(/expression\s*(/gi, '')};
;
export function sanitizeHtml(htm:l:string):string { let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip:t:/gi,''), sanitized = sanitized.replace(/dat:a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur:l:string):string { return url.replace(/javascrip:t:/gi,'')} export function sanitizeCss(cs:s:string):string { return css.replace(/expression\s*(/gi,'')};))),;
;  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,&apos;'); sanitized = sanitized.replace(/\s*on\w+\s*=\s*[&apos;&quot;][^&apos;&quot;]*[&apos;&quot;]/g,&apos;'); sanitized = sanitized.replace(/javascript:/gi,&apos;'); sanitized = sanitized.replace(/data:text\/html/gi,&apos;'); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,&apos;')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,&apos;')}
// HTML sanitization utility to prevent CSP violations
export function sanitizeHtml("html": string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

<<<<<<< HEAD
=======
export function sanitizeHtml(html: string): string {
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
origin/main
origin/automation-improvements-final
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  return sanitized;
}
export function sanitizeUrl(url: string): string {
  return url.replace(/javascript:/gi, '');
}
export function sanitizeCss(css: string): string {
  return css.replace(/expression\s*\(/gi, '');
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return sanitized}
export function sanitizeUrl("url": string): string {
  // Remove javascript: URLs
  return url.replace(/javascript:/gi, '')}
export function sanitizeCss("css": string): string {
  // Remove potentially dangerous CSS
  return css.replace(/expression\s*\(/gi, '')}
<<<<<<< HEAD

=======
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
export function sanitize_html (html: string): string {
  let sanitized = html.replace (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace (/\s * on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace (/javascript:/gi, '');
  sanitized = sanitized.replace (/data:text\/html / gi, '');
=======
=======
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df






  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

  return sanitized;
}


  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''); sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''); sanitized = sanitized.replace(/javascript:/gi,''); sanitized = sanitized.replace(/data:text\/html/gi,''); return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*\(/gi,'')}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return sanitized;
}
export function sanitize_url (url: string): string {
  return url.replace (/javascript:/gi, '');
}
export function sanitize_css (css: string): string {
  return css.replace (/expression\s*\(/gi, '');
}

<<<<<<< HEAD

=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
=======
origin/main
origin/automation-improvements-final
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function sanitizeUrl(url: string): string {;
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {;
  return css.replace(/expression\s*\(/gi, '');
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
  return css.replace(/expression\s*(/gi, '')},;
export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: t:/gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: t:/gi,'')} export function sanitizeCss(cs: s: string): string { return css.replace(/expression\s*(/gi,'')},)));

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
