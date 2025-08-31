// HTML sanitization utility to prevent CSP violations
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
export const sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, "");
  return sanitized;
};
