// HTML sanitization utility to prevent CSP violations
export const sanitizeHtml = (html: anystring): string  => {
  if (!html) return "";
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, "");
  return sanitized;
};
