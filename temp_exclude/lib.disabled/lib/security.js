 Security utility functions;
export class SecurityUtils {
  static sanitizeInput(input) {
  if (typeof input != "string"
      .replace(/[<>]/
      .replace(/"javascript": /gi, "") //
      .replace(/on\w+=/
    return text.replace(/
export class SecurityUtils { static sanitizeInput(input) { if (typeof input != "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: any