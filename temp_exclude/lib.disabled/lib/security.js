// Security utility functions;
export class SecurityUtils {
  static sanitizeInput(input) {
  if (typeof input !== "string") return input;
    return input;
      .replace(/[<>]/g, "") // Remove potential HTML tags;
      .replace(/"javascript": /gi, "") // Remove "javascript": protocol;
      .replace(/on\w+=/gi, "") // Remove event handlers;
      .trim()}
;
  static validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)}
;
  static generateCSRFToken() {
  return crypto.randomBytes(32).toString("hex")}
;
  static hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex")}
;
  static validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8}$/;
    return passwordRegex.test(password)}
;
  static escapeHtml(text) {
  const map = {
  "&": "&amp;",
      "<": "&lt;">;
      ">": "&gt;",
      """: "&quot;",
      """: "&#039;"}
    return text.replace(/[&<>""]/g, (m) => map[m])}
}
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: '/gi',"") .replace(/on\w+=/gi,) .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;",; "<": "&lt;"> ">": "&gt;",; ": "&quot;",; ": "&#039;";,} return text.replace(/[&<>""]/g,(m) => map[m])} }
<<<<<<< HEAD
<<<<<<< HEAD:lib.broken/security.js
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/lib.disabled/lib/security.js
<<<<<<< HEAD
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
<<<<<<< HEAD:lib.broken/security.js
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/lib.disabled/lib/security.js
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
