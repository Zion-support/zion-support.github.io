<<<<<<< HEAD
return css.replace(/expression\s*(/gi, '')};
<<<<<<< HEAD
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript: /gi,''), sanitized = sanitized.replace(/data: text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript: /gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
export function sanitizeHtml(html: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascript:/gi,''), sanitized = sanitized.replace(/data:text\/html/gi,''), return sanitized} export function sanitizeUrl(url: string): string { return url.replace(/javascript:/gi,'')} export function sanitizeCss(css: string): string { return css.replace(/expression\s*(/gi,'')};)));
=======

  return css.replace(/expression\s*(/gi, '')},

export function sanitizeHtml(htm: l: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: t:/gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: l: string): string { return url.replace(/javascrip: t:/gi,'')} export function sanitizeCss(cs: s: string): string { return css.replace(/expression\s*(/gi,'')},))),

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
export function sanitizeHtml(_html: string): string {_let _sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, _''), _sanitized = sanitized.replace(/\s*on\w+\s* = \s*['"][^'"]*['"]/g, _''), _sanitized = sanitized.replace(/javascript: /gi, _''), _sanitized = sanitized.replace(/data: text\/html/gi, _''), _return sanitized} export function sanitizeUrl(_url: string): string {_return url.replace(/javascript: /gi, _'')} export function sanitizeCss(_css: string): string {_return css.replace(/expression\s*(/gi, _'')};)));
export function sanitizeHtml(_html: string): string {_let _sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, _''), _sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, _''), _sanitized = sanitized.replace(/javascript:/gi, _''), _sanitized = sanitized.replace(/data:text\/html/gi, _''), _return sanitized} export function sanitizeUrl(_url: string): string {_return url.replace(/javascript:/gi, _'')} export function sanitizeCss(_css: string): string {_return css.replace(/expression\s*(/gi, _'')};)));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
