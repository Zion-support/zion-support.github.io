<<<<<<< HEAD
return css.replace(/expression\s*(/gi, '')};
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
=======
  return css.replace(/expression\s*(/gi, '')};
<<<<<<< HEAD
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
=======
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};))),
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
