export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string, }

export interface ValidationResult {
  isValid: boolean,
  errors: string[], }

export class ValidationUtils {
  public static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  public static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));

  public static validateURL(url: string): boolean {
    try {
      new URL(url);
      return true, } catch {
      return false, }
  }

  public static validatePassword(password: string): ValidationResult {
    const errors: string[] = [],
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");

    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");

    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");

    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number");

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character");

    return {
      isValid: errors.length === 0,
      errors
    }, }

  public static validateField(value: any, rules: ValidationRule): ValidationResult {
    const errors: string[] = [],
    if (rules.required && (value === undefined || value === null || value === "")) {
      errors.push("This field is required");

    if (value !== undefined && value !== null && value !== "") {
      if (rules.minLength && value.length < rules.minLength) {
        errors.push(`Minimum length is ${rules.minLength} characters`);

      if (rules.maxLength && value.length > rules.maxLength) {
        errors.push(`Maximum length is ${rules.maxLength} characters`);

      if (rules.pattern && !rules.pattern.test(value)) {
        errors.push("Invalid format");

      if (rules.custom) {
        const customResult = rules.custom(value);
        if (customResult !== true) {
          errors.push(typeof customResult === "string" ? customResult : "Invalid value");
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }, }

  public static validateForm(data: Record<string, any>, schema: Record<string, ValidationRule>): Record<string, ValidationResult> {
    const results: Record<string, ValidationResult> = {};

    for (const [field, rules] of Object.entries(schema)) {
      results[field] = this.validateField(data[field], rules);

    return results, }

  public static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, "") // Remove potential HTML tags
      .replace(/javascript:/gi, "") // Remove javascript: protocol
      .replace(/on\w+=/gi, "") // Remove event handlers
      .trim();

  public static escapeHTML(input: string): string {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML, }
}