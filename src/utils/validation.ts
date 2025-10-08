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
}

export const validation = ValidationUtils;