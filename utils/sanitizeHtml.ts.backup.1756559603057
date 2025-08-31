// HTML sanitization utility to prevent CSP violations
export const sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, "");
  return sanitized;
};
