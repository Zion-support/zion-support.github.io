
// Input validation utilities,
export class InputValidator {,
  static sanitizeString(input: string): string {,
    return input,
      .replace(/[<>]/g, '') // Remove potential HTML tags,
      .replace(/javascript:/gi, '') // Remove javascript: protocol,
      .replace(/on\w+=/gi, '') // Remove event handlers,
      .trim(),
  }
,
  static validateEmail(email: string): boolean {,
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    return emailRegex.test(email),
  ,}
,
  static validateURL(url: string): boolean {,
    try {,
      const parsedUrl = new URL(url),
      return ['http:', 'https: '].includes(parsedUrl.protocol),
    ,} catch {,
      return false,
    }
  }
,
  static sanitizeHTML(input: string): string {,
    const allowedTags = ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    const allowedAttributes = ['href'],
,
    // Basic HTML sanitization (in production, use a library like DOMPurify),
    return input,
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''),
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, ''),
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, ''),
  }
,
  static validateCSV(input: string): boolean {,
    // Check for potential CSV injection,
    const dangerousChars = ['=', '+', '-', '@', '\t', '\r'],
    return !dangerousChars.some(char => input.startsWith(char)),
  }
}
,