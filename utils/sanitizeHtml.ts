
export function sanitizeHtml(html: string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?: (?!<\/script>)<[^<]*)*<\/script>/gi, '');




  return sanitized}

export function sanitizeUrl(url: string): string {

export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS'
  return css.replace(/expression\s*\(/gi, '')}



