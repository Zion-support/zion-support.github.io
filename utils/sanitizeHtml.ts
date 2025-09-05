
  return css.replace(/expression\s*(/gi, '')},

export function sanitizeHtml(htm: string): string { let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi,''), sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g,''), sanitized = sanitized.replace(/javascrip: /gi,''), sanitized = sanitized.replace(/dat: a:text\/html/gi,''), return sanitized} export function sanitizeUrl(ur: string): string { return url.replace(/javascrip: /gi,'')} export function sanitizeCss(cs: string): string { return css.replace(/expression\s*(/gi,'')},))),

