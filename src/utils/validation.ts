/**
 * Validation utility functions
 */

export class ValidationUtils {
  static isRequired(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  static isEmail(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  static isUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  static isNumber(value: any): boolean {
    return !isNaN(Number(value));
  }

  static minLength(value: string, min: number): boolean {
    return value.length >= min;
  }

  static maxLength(value: string, max: number): boolean {
    return value.length <= max;
  }

  static validateForm(data: Record<string, any>, rules: Record<string, any>): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};
    let isValid = true;

    for (const [field, value] of Object.entries(data)) {
      if (rules[field]?.required && !this.isRequired(value)) {
        errors[field] = `${field} is required`;
        isValid = false;
      }
    }

    return { isValid, errors };
  }

  static validateField(value: any, rules: any): { isValid: boolean; error?: string } {
    if (rules.required && !this.isRequired(value)) {
      return { isValid: false, error: 'This field is required' };
    }
    if (rules.email && !this.isEmail(value)) {
      return { isValid: false, error: 'Invalid email format' };
    }
    if (rules.url && !this.isUrl(value)) {
      return { isValid: false, error: 'Invalid URL format' };
    }
    return { isValid: true };
  }

  static isValidPhone(value: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''));
  }
}

export const validation = ValidationUtils;
export default ValidationUtils;