// HTML sanitization utility to prevent CSP violations
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};