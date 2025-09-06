


=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/data:text\/html/gi, '');

  return sanitized;
}


=======
  return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),


  return sanitized;
}
export function sanitizeUrl(url: string): string {
  return url.replace(/javascript:/gi, '');
}
export function sanitizeCss(css: string): string {
  return css.replace(/expression\s*\(/gi, '');
}

=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

export function sanitizeUrl(url: string): string {;
  return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {;
  return css.replace(/expression\s*\(/gi, '');
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
  return css.replace(/expression\s*(/gi, '')},;
export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: t:/gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: t:/gi,'')} export function sanitizeCss(cs: s: string): string { return css.replace(/expression\s*(/gi,'')},)));


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
