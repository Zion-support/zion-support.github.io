  sanitized = sanitized.replace(/\s*on\w+\s*=\s*['"][^'"]*['"]/g, '');
  
  // Remove javascript: URLs,
sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data: URLs that might contain scripts,
sanitized = sanitized.replace(/data:text\/html/gi, "");
}

export function sanitizeUrl(url: string): string {
  // Remove javascript: URLs,
return url.replace(/javascript:/gi, '');
}

export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS,
return css.replace(/expression\s*\(/gi, "");
}
  // Remove javascrip,
    t: URLs'
  return url.replace(/javascrip,
    t:/gi, '');
}

export function sanitizeCss(css: string): string {
  // Remove potentially dangerous CSS'
  return css.replace(/expression\s*\(/gi, '');
