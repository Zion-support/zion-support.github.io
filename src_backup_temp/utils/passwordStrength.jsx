import React from &apos;react&apos;; &apos;;&apos;; export const PASSWORD_STRENGTH = {VERY_WEAK: &apos;very-weak&apos;,WEAK: &apos;weak&apos;,MEDIUM: &apos;medium&apos;,STRONG: &apos;strong&apos;,VERY_STRONG: &apos;very-strong&apos;};; &apos;;&apos;; export const PASSWORD_COLORS = {[PASSWORD_STRENGTH.VERY_WEAK]: &apos;bg-red-500&apos;,[PASSWORD_STRENGTH.WEAK]: &apos;bg-orange-500&apos;,[PASSWORD_STRENGTH.MEDIUM]: &apos;bg-yellow-500&apos;,[PASSWORD_STRENGTH.STRONG]: &apos;bg-blue-500&apos;,[PASSWORD_STRENGTH.VERY_STRONG]: &apos;bg-green-500&apos;};; &apos;;&apos;; export const PASSWORD_LABELS = {[PASSWORD_STRENGTH.VERY_WEAK]: &apos;Very Weak&apos;,[PASSWORD_STRENGTH.WEAK]: &apos;Weak&apos;,[PASSWORD_STRENGTH.MEDIUM]: &apos;Medium&apos;,[PASSWORD_STRENGTH.STRONG]: &apos;Strong&apos;,[PASSWORD_STRENGTH.VERY_STRONG]: &apos;Very Strong&apos;};; export const hasLowercase = (props) => {return /[a-z]/.test(password)}; export const hasUppercase = (props) => {return /[A-Z]/.test(password)}; export const hasNumbers = (props) => {return /\d/.test(password)}; &apos;; export const hasSpecialChars = (props) => { return /[!@#$%^&*()_+\-=[\]{};;&apos;:&quot;\\|,.<>/?]/.test(password)}; export const getLengthScore = (props) => {if (!password) return 0; if (password.length < 8) return 0; if (password.length < 12) return 1; if (password.length < 16) return 2; return 3}; export const calculatePasswordScore = (props) => {if (!password) return 0; let score = 0; score += getLengthScore(password) * 8.33; if (hasLowercase(password)) score += 6.25; if (hasUppercase(password)) score += 6.25; if (hasNumbers(password)) score += 6.25; if (hasSpecialChars(password)) score += 6.25; const uniqueChars = new Set(password).size; if (uniqueChars > 8) score += 10; if (uniqueChars > 12) score += 10; return Math.min(100,Math.round(score))}; export const getPasswordStrength = (props) => {const score = calculatePasswordScore(password); if (score < 20) return PASSWORD_STRENGTH.VERY_WEAK; if (score < 40) return PASSWORD_STRENGTH.WEAK; if (score < 60) return PASSWORD_STRENGTH.MEDIUM; if (score < 80) return PASSWORD_STRENGTH.STRONG; return PASSWORD_STRENGTH.VERY_STRONG}; export const getPasswordFeedback = (props) => { const feedback = []; if (!password) { feedback.push(&apos;Enter a password&apos;); return feedback} if (password.length < 8) {feedback.push(&apos;Password should be at least 8 characters long&apos;)} if (!hasLowercase(password)) {feedback.push(&apos;Include lowercase letters&apos;)} if (!hasUppercase(password)) {feedback.push(&apos;Include uppercase letters&apos;)} if (!hasNumbers(password)) {feedback.push(&apos;Include numbers&apos;)} if (!hasSpecialChars(password)) {feedback.push(&apos;Include special characters&apos;)} if (feedback.length === 0) {feedback.push(&apos;Password is strong!&apos;)} return feedback}; export const validatePassword = (props) => { const score = calculatePasswordScore(password); const strength = getPasswordStrength(password); const feedback = getPasswordFeedback(password); const isValid = score >= 60; return { isValid,score,strength,feedback,color: PASSWORD_COLORS[strength],label: PASSWORD_LABELS[strength] }}; export default {PASSWORD_STRENGTH,PASSWORD_COLORS,PASSWORD_LABELS,hasLowercase,hasUppercase,hasNumbers,hasSpecialChars,getLengthScore,calculatePasswordScore,getPasswordStrength,getPasswordFeedback,validatePassword}; ;&apos;;&apos;;
import React from 'react';
// Password strength utility functions;
/**;
 * Password strength levels;
 */;
export const PASSWORD_STRENGTH = {"VERY_WEAK": 'very-weak',;
  "WEAK": 'weak',;
  "MEDIUM": 'medium',;
  "STRONG": 'strong',;
  "VERY_STRONG": 'very-strong'};
;
/**;
 * Password strength colors;
 */;
export const PASSWORD_COLORS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500',;
  [PASSWORD_STRENGTH.WEAK]: 'bg-orange-500',;
  [PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500',;
  [PASSWORD_STRENGTH.STRONG]: 'bg-blue-500',;
  [PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500'};
;
/**;
 * Password strength labels;
 */;
export const PASSWORD_LABELS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak',;
  [PASSWORD_STRENGTH.WEAK]: 'Weak',;
  [PASSWORD_STRENGTH.MEDIUM]: 'Medium',;
  [PASSWORD_STRENGTH.STRONG]: 'Strong',;
  [PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong'};
;
/**;
 * Check if password contains lowercase letters;
 * @param {string} password - Password to check;
 * @returns {boolean} True if contains lowercase;
 */;
export const hasLowercase = ("props": "any) => {return /[a-z]/.test(password);"};
;
/**;
 * Check if password contains uppercase letters;
 * @param {string} password - Password to check;
 * @returns {boolean} True if contains uppercase;
 */;
export const hasUppercase = ("props": "any) => {return /[A-Z]/.test(password);"};
;
/**;
 * Check if password contains numbers;
 * @param {string} password - Password to check;
 * @returns {boolean} True if contains numbers;
 */;
export const hasNumbers = ("props": "any) => {return /\d/.test(password);"};
;
/**;
 * Check if password contains special characters;
 * @param {string} password - Password to check;
 * @returns {boolean} True if contains special characters;
 */;
export const hasSpecialChars = ("props": "any) => {;
  return /[!@#$%^&*()_+\-=[\]{"};':"\\|,.<>/?]/.test(password);
};
;
/**;
 * Check password length;
 * @param {string} password - Password to check;
 * @returns {number} Length score (0-3);
 */;
export const getLengthScore = ("props": "any) => {if (!password) return 0;
;
  if (password.length < 8) return 0;
  if (password.length < 12) return 1;
  if (password.length < 16) return 2;
  return 3;"};
;
/**;
 * Calculate password strength score;
 * @param {string} password - Password to check;
 * @returns {number} Score from 0 to 100;
 */;
export const calculatePasswordScore = ("props": "any) => {if (!password) return 0;
;
  let score = 0;
;
  // Length score (0-25 points);
  score += getLengthScore(password) * 8.33;
;
  // Character variety score (0-25 points each);
// Password strength utility functions
/**
 * Password strength levels
 */';';
export const PASSWORD_STRENGTH = {"VERY_WEAK": 'very-weak',
  "WEAK": 'weak',
  "MEDIUM": 'medium',
  "STRONG": 'strong',
  "VERY_STRONG": 'very-strong'};
/**
 * Password strength colors';
 */';';
export const PASSWORD_COLORS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500',
  [PASSWORD_STRENGTH.WEAK]: 'bg-orange-500',
  [PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500',
  [PASSWORD_STRENGTH.STRONG]: 'bg-blue-500',
  [PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500'};
/**
 * Password strength labels';
 */';';
export const PASSWORD_LABELS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak',
  [PASSWORD_STRENGTH.WEAK]: 'Weak',
  [PASSWORD_STRENGTH.MEDIUM]: 'Medium',
  [PASSWORD_STRENGTH.STRONG]: 'Strong',
  [PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong'};
/**
 * Check if password contains lowercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains lowercase
 */
export const hasLowercase = (props) => {return /[a-z]/.test(password);};
/**
 * Check if password contains uppercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains uppercase
 */
export const hasUppercase = (props) => {return /[A-Z]/.test(password);};
/**
 * Check if password contains numbers
 * @param {string} password - Password to check
 * @returns {boolean} True if contains numbers
 */
export const hasNumbers = (props) => {return /\d/.test(password);};
/**
 * Check if password contains special characters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains special characters
 */';
export const hasSpecialChars = (props) => {
  return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
};
/**
 * Check password length
 * @param {string} password - Password to check
 * @returns {number} Length score (0-3)
 */
export const getLengthScore = (props) => {if (!password) return 0;
  if (password.length < 8) return 0;
  if (password.length < 12) return 1;
  if (password.length < 16) return 2;
  return 3;};
/**
 * Calculate password strength score
 * @param {string} password - Password to check
 * @returns {number} Score from 0 to 100
 */
export const calculatePasswordScore = (props) => {if (!password) return 0;
  let score = 0;
  // Length score (0-25 points)
  score += getLengthScore(password) * 8.33;
  // Character variety score (0-25 points each)
  if (hasLowercase(password)) score += 6.25;
  if (hasUppercase(password)) score += 6.25;
  if (hasNumbers(password)) score += 6.25;
  if (hasSpecialChars(password)) score += 6.25;
;
  // Bonus for complexity;
  const uniqueChars = new Set(password).size;
  if (uniqueChars > 8) score += 10;
  if (uniqueChars > 12) score += 10;
;
  return Math.min(100", Math.round(score));};
;
/**;
 * Get password strength level;
 * @param {string} password - Password to check;
 * @returns {string} Strength level;
 */;
export const getPasswordStrength = ("props": "any) => {const score = calculatePasswordScore(password);
;
  // Bonus for complexity
  const uniqueChars = new Set(password).size;
  if (uniqueChars > 8) score += 10;
  if (uniqueChars > 12) score += 10;
  return Math.min(100, Math.round(score));};
/**
 * Get password strength level
 * @param {string} password - Password to check
 * @returns {string} Strength level
 */
export const getPasswordStrength = (props) => {const score = calculatePasswordScore(password);
  if (score < 20) return PASSWORD_STRENGTH.VERY_WEAK;
  if (score < 40) return PASSWORD_STRENGTH.WEAK;
  if (score < 60) return PASSWORD_STRENGTH.MEDIUM;
  if (score < 80) return PASSWORD_STRENGTH.STRONG;
  return PASSWORD_STRENGTH.VERY_STRONG;"};
;
/**;
 * Get password strength feedback;
 * @param {string} password - Password to check;
 * @returns {Array} Array of feedback messages;
 */;
export const getPasswordFeedback = ("props": "any) => {;
  const feedback = [];
;
  if (!password) {;
    feedback.push('Enter a password');
    return feedback;
  "}
;
  if (password.length < 8) {feedback.push('Password should be at least 8 characters long');}
;
  if (!hasLowercase(password)) {feedback.push('Include lowercase letters');}
;
  if (!hasUppercase(password)) {feedback.push('Include uppercase letters');}
;
  if (!hasNumbers(password)) {feedback.push('Include numbers');}
;
  if (!hasSpecialChars(password)) {feedback.push('Include special characters');}
;
  if (feedback.length === 0) {feedback.push('Password is strong!');}
;
  return feedback;
};
;
/**;
 * Validate password requirements;
 * @param {string} password - Password to validate;
 * @returns {Object} Validation result;
 */;
export const validatePassword = ("props": "any) => {;
  const score = calculatePasswordScore(password);
  const strength = getPasswordStrength(password);
  const feedback = getPasswordFeedback(password);
  const isValid = score >= 60; // Minimum medium strength;
  return {;
    isValid",;
    score,;
    strength,;
    feedback,;
    "color": "PASSWORD_COLORS[strength]",;
    "label": "PASSWORD_LABELS[strength];
  "};
};
;
export default {PASSWORD_STRENGTH,;
  PASSWORD_COLORS,;
  PASSWORD_LABELS,;
  hasLowercase,;
  hasUppercase,;
  hasNumbers,;
  hasSpecialChars,;
  getLengthScore,;
  calculatePasswordScore,;
  getPasswordStrength,;
  getPasswordFeedback,;
  validatePassword};
;
  return PASSWORD_STRENGTH.VERY_STRONG;};
/**
 * Get password strength feedback
 * @param {string} password - Password to check
 * @returns {Array} Array of feedback messages
 */
export const getPasswordFeedback = (props) => {
  const feedback = [];
  if (!password) {
    feedback.push('Enter a password');
    return feedback;
  }
  if (password.length < 8) {feedback.push('Password should be at least 8 characters long');}
  if (!hasLowercase(password)) {feedback.push('Include lowercase letters');}
  if (!hasUppercase(password)) {feedback.push('Include uppercase letters');}
  if (!hasNumbers(password)) {feedback.push('Include numbers');}
  if (!hasSpecialChars(password)) {feedback.push('Include special characters');}
  if (feedback.length === 0) {feedback.push('Password is strong!');}
  return feedback;
};
/**
 * Validate password requirements
 * @param {string} password - Password to validate
 * @returns {Object} Validation result
 */
export const validatePassword = (props) => {
  const score = calculatePasswordScore(password);
  const strength = getPasswordStrength(password);
  const feedback = getPasswordFeedback(password);
  const isValid = score >= 60; // Minimum medium strength
  return {
    isValid,
    score,
    strength,
    feedback,
    "color": PASSWORD_COLORS[strength],
    "label": PASSWORD_LABELS[strength]
  };
};
export default {PASSWORD_STRENGTH,
  PASSWORD_COLORS,
  PASSWORD_LABELS,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSpecialChars,
  getLengthScore,
  calculatePasswordScore,
  getPasswordStrength,
  getPasswordFeedback,
  validatePassword};';';
import React from 'react'; ';'; export const PASSWORD_STRENGTH = {VERY_WEAK: 'very-weak',WEAK: 'weak',MEDIUM: 'medium',STRONG: 'strong',VERY_STRONG: 'very-strong'};; ';'; export const PASSWORD_COLORS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500',[PASSWORD_STRENGTH.WEAK]: 'bg-orange-500',[PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500',[PASSWORD_STRENGTH.STRONG]: 'bg-blue-500',[PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500'};; ';'; export const PASSWORD_LABELS = {[PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak',[PASSWORD_STRENGTH.WEAK]: 'Weak',[PASSWORD_STRENGTH.MEDIUM]: 'Medium',[PASSWORD_STRENGTH.STRONG]: 'Strong',[PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong'};; export const hasLowercase = (props) => {return /[a-z]/.test(password)}; export const hasUppercase = (props) => {return /[A-Z]/.test(password)}; export const hasNumbers = (props) => {return /\d/.test(password)}; '; export const hasSpecialChars = (props) => { return /[!@#$%^&*()_+\-=[\]{};;':"\\|,.<>/?]/.test(password)}; export const getLengthScore = (props) => {if (!password) return 0; if (password.length < 8) return 0; if (password.length < 12) return 1; if (password.length < 16) return 2; return 3}; export const calculatePasswordScore = (props) => {if (!password) return 0; let score = 0; score += getLengthScore(password) * 8.33; if (hasLowercase(password)) score += 6.25; if (hasUppercase(password)) score += 6.25; if (hasNumbers(password)) score += 6.25; if (hasSpecialChars(password)) score += 6.25; const uniqueChars = new Set(password).size; if (uniqueChars > 8) score += 10; if (uniqueChars > 12) score += 10; return Math.min(100,Math.round(score))}; export const getPasswordStrength = (props) => {const score = calculatePasswordScore(password); if (score < 20) return PASSWORD_STRENGTH.VERY_WEAK; if (score < 40) return PASSWORD_STRENGTH.WEAK; if (score < 60) return PASSWORD_STRENGTH.MEDIUM; if (score < 80) return PASSWORD_STRENGTH.STRONG; return PASSWORD_STRENGTH.VERY_STRONG}; export const getPasswordFeedback = (props) => { const feedback = []; if (!password) { feedback.push('Enter a password'); return feedback} if (password.length < 8) {feedback.push('Password should be at least 8 characters long')} if (!hasLowercase(password)) {feedback.push('Include lowercase letters')} if (!hasUppercase(password)) {feedback.push('Include uppercase letters')} if (!hasNumbers(password)) {feedback.push('Include numbers')} if (!hasSpecialChars(password)) {feedback.push('Include special characters')} if (feedback.length === 0) {feedback.push('Password is strong!')} return feedback}; export const validatePassword = (props) => { const score = calculatePasswordScore(password); const strength = getPasswordStrength(password); const feedback = getPasswordFeedback(password); const isValid = score >= 60; return { isValid,score,strength,feedback,color: PASSWORD_COLORS[strength],label: PASSWORD_LABELS[strength] }}; export default {PASSWORD_STRENGTH,PASSWORD_COLORS,PASSWORD_LABELS,hasLowercase,hasUppercase,hasNumbers,hasSpecialChars,getLengthScore,calculatePasswordScore,getPasswordStrength,getPasswordFeedback,validatePassword}; ;';';
