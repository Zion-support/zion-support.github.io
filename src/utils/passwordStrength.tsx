export const calculatePasswordScore = password => {

export const getLengthScore = password => {

export const getPasswordFeedback = password => {

export const getPasswordStrength = password => {

export const hasLowercase = password => {

export const hasNumbers = password => {

export const hasSpecialChars = password => {

export const hasUppercase = password => {

export const PASSWORD_COLORS = {

export const PASSWORD_LABELS = {

export const PASSWORD_STRENGTH = {

export const validatePassword = password => {

export default {

// Password strength utility functions

/**
 * Password strength levels
 */
export const PASSWORD_STRENGTH = {

  VERY_WEAK: 'very-weak','
  WEAK: 'weak','
  MEDIUM: 'medium','
  STRONG: 'strong','
  VERY_STRONG: 'very-strong'};

/**
 * Password strength colors
 */
export const PASSWORD_COLORS = {
'
  [PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500','
  [PASSWORD_STRENGTH.WEAK]: 'bg-orange-500','
  [PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500','
  [PASSWORD_STRENGTH.STRONG]: 'bg-blue-500','
  [PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500'};

/**
 * Password strength labels
 */
export const PASSWORD_LABELS = {
'
  [PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak','
  [PASSWORD_STRENGTH.WEAK]: 'Weak','
  [PASSWORD_STRENGTH.MEDIUM]: 'Medium','
  [PASSWORD_STRENGTH.STRONG]: 'Strong','
  [PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong'};

/**
 * Check if password contains lowercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains lowercase
 */
export const hasLowercase = password => {

  return /[a-z]/.test(password);
};

/**
 * Check if password contains uppercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains uppercase
 */
export const hasUppercase = password => {

  return /[A-Z]/.test(password);
};

/**
 * Check if password contains numbers
 * @param {string} password - Password to check
 * @returns {boolean} True if contains numbers
 */
export const hasNumbers = password => {

  return /\d/.test(password);
};

/**
 * Check if password contains special characters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains special characters
 */
:src/utils/passwordStrength.jsx
export const hasSpecialChars = password => {
'
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
export const hasSpecialChars = (password) => {
'"
  return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
};

/**
 * Check password length
 * @param {string} password - Password to check
 * @returns {number} Length score(0-3)
 */
export const getLengthScore = password => {

  if(!password) return 0;

  if(password.length < 8) return 0;
  if(password.length < 12) return 1;
  if(password.length < 16) return 2;
  return 3;
};

/**
 * Calculate password strength score
 * @param {string} password - Password to check
 * @returns {number} Score from 0 to 100
 */
export const calculatePasswordScore = password => {

  if(!password) return 0;

  let score = 0;

  // Length score(0 - 25 points) score += getLengthScore(password) * 8.33;

  // Bonus for complexity
  const uniqueChars = new Set(password) .size;
  if(uniqueChars > 8) score += 10;
  if(uniqueChars > 12) score += 10;

  return Math.min(100, Math.round(score));
};

/**
 * Get password strength level
 * @param {string} password - Password to check
 * @returns {string} Strength level
 */
export const getPasswordStrength = password => {

  const score = calculatePasswordScore(password);

  if(score < 20) return PASSWORD_STRENGTH.VERY_WEAK;
  if(score < 40) return PASSWORD_STRENGTH.WEAK;
  if(score < 60) return PASSWORD_STRENGTH.MEDIUM;
  if(score < 80) return PASSWORD_STRENGTH.STRONG;
  return PASSWORD_STRENGTH.VERY_STRONG;
};

/**
 * Get password strength feedback
 * @param {string} password - Password to check
 * @returns {Array} Array of feedback messages
 */
export const getPasswordFeedback = password => {

  const feedback = [];

  if (!password) {
'
    feedback.push('Enter a password');
    return feedback;
  }

  if (password.length < 8) {
'
    feedback.push('Password should be at least 8 characters long');
  }

  if (!hasLowercase(password)) {
'
    feedback.push('Include lowercase letters');
  }

  if (!hasUppercase(password)) {
'
    feedback.push('Include uppercase letters');
  }

  if (!hasNumbers(password)) {
'
    feedback.push('Include numbers');
  }

  if (!hasSpecialChars(password)) {
'
    feedback.push('Include special characters');
  }

  if (feedback.length === 0) {
'
    feedback.push('Password is strong!');
  }

  return feedback;
};

/**
 * Validate password requirements
 * @param {string} password - Password to validate
 * @returns {Object} Validation result
 */
export const validatePassword = password => {

  const score = calculatePasswordScore(password);
  const strength = getPasswordStrength(password);
  const feedback = getPasswordFeedback(password);
  const isValid = score >= 60; // Minimum medium strength

  return {

    isValid,
    score,
    strength,
    feedback,
    color: PASSWORD_COLORS[strength],
    label: PASSWORD_LABELS[strength]};
};

export default {

  PASSWORD_STRENGTH,
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
  validatePassword};'"
'"'"