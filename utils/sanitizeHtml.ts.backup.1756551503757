// HTML sanitization utility to prevent CSP violations
<<<<<<< HEAD
export const sanitizeHtml = (html: anystring): string   => {;
  if (!html) return "";
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
=======
export const sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[""][^""]*[""]/g, "");
  return sanitized;
};
