// Password strength utility functions
/**
 * Password strength levels
 */
export const PASSWORD_STRENGTH = {
  VERY_WEAK: 'very-weak',
  WEAK: 'weak',
  MEDIUM: 'medium',
  STRONG: 'strong',
  VERY_STRONG: 'very-strong'
};
/**
 * Password strength colors
 */
export const PASSWORD_COLORS = {
  [PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500',
  [PASSWORD_STRENGTH.WEAK]: 'bg-orange-500',
  [PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500',
  [PASSWORD_STRENGTH.STRONG]: 'bg-blue-500',
  [PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500'
};
/**
 * Password strength labels
 */
export const PASSWORD_LABELS = {
  [PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak',
  [PASSWORD_STRENGTH.WEAK]: 'Weak',
  [PASSWORD_STRENGTH.MEDIUM]: 'Medium',
  [PASSWORD_STRENGTH.STRONG]: 'Strong',
  [PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong'
};
/**
 * Check if password contains lowercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains lowercase
 */
export const hasLowercase = (password) => {
  return /[a-z]/.test(password);
};
/**
 * Check if password contains uppercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains uppercase
 */
export const hasUppercase = (password) => {
  return /[A-Z]/.test(password);
};
/**
 * Check if password contains numbers
 * @param {string} password - Password to check
 * @returns {boolean} True if contains numbers
 */
export const hasNumbers = (password) => {
  return /\d/.test(password);
};
/**
 * Check if password contains special characters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains special characters
 */
export const hasSpecialChars = (password) => {
  return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
};
/**
 * Check password length
 * @param {string} password - Password to check
 * @returns {number} Length score (0-3)
 */
export const getLengthScore = (password) => {
  if (!password) return 0;
  const length = password.length;
  if (length >= 12) return 3;
  if (length >= 8) return 2;
  if (length >= 6) return 1;
  return 0;
};
/**
 * Check character variety score
 * @param {string} password - Password to check
 * @returns {number} Variety score (0-4)
 */
export const getVarietyScore = (password) => {
  if (!password) return 0;
  let score = 0;
  if (hasLowercase(password)) score++;
  if (hasUppercase(password)) score++;
  if (hasNumbers(password)) score++;
  if (hasSpecialChars(password)) score++;
  return score;
};
/**
 * Check for common patterns (penalty)
 * @param {string} password - Password to check
 * @returns {number} Pattern penalty score
 */
export const getPatternPenalty = (password) => {
  if (!password) return 0;
<<<<<<< HEAD

  let penalty = 0;

=======
  let penalty = 0;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Check for repeated characters
  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      penalty += 2;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Check for sequential characters
  for (let i = 0; i < password.length - 2; i++) {
    const char1 = password.charCodeAt(i);
    const char2 = password.charCodeAt(i + 1);
    const char3 = password.charCodeAt(i + 2);
    if (char2 === char1 + 1 && char3 === char2 + 1) {
      penalty += 1;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Check for common keyboard patterns
  const keyboardPatterns = ['qwerty', 'asdfgh', 'zxcvbn', '123456', 'abcdef'];
  keyboardPatterns.forEach(pattern => {
    if (password.toLowerCase().includes(pattern)) {
      penalty += 3;
<<<<<<< HEAD
    }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  });
  return penalty;
};
/**
 * Calculate password strength score
 * @param {string} password - Password to check
 * @returns {number} Strength score (0-100)
 */
export const calculatePasswordScore = (password) => {
  if (!password) return 0;
  let score = 0;
  // Length score (0-30 points)
  score += getLengthScore(password) * 10;
  // Variety score (0-40 points)
  score += getVarietyScore(password) * 10;
  // Bonus for longer passwords
  if (password.length > 12) {
    score += 10;
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Penalty for patterns
  score -= getPatternPenalty(password);
  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, score));
};
/**
 * Get password strength level
 * @param {string} password - Password to check
 * @returns {string} Strength level
 */
export const getPasswordStrength = (password) => {
  const score = calculatePasswordScore(password);
  if (score >= 80) return PASSWORD_STRENGTH.VERY_STRONG;
  if (score >= 60) return PASSWORD_STRENGTH.STRONG;
  if (score >= 40) return PASSWORD_STRENGTH.MEDIUM;
  if (score >= 20) return PASSWORD_STRENGTH.WEAK;
  return PASSWORD_STRENGTH.VERY_WEAK;
};
/**
 * Get password strength details
 * @param {string} password - Password to check
 * @returns {Object} Strength details
 */
export const getPasswordStrengthDetails = (password) => {
  const score = calculatePasswordScore(password);
<<<<<<< HEAD
  const strength = getPasswordStrength(password);

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return {
    strength,
    score,
    label: PASSWORD_LABELS[strength],
    color: PASSWORD_COLORS[strength],
    requirements: {
      length: password.length >= 8,
      lowercase: hasLowercase(password),
      uppercase: hasUppercase(password),
      numbers: hasNumbers(password),
      special: hasSpecialChars(password)
    },
    feedback: getPasswordFeedback(password, strength)
  };
};
/**
 * Get password feedback suggestions
 * @param {string} password - Password to check
 * @param {string} strength - Current strength level
 * @returns {Array} Array of feedback messages
 */
export const getPasswordFeedback = (password, strength) => {
  const feedback = [];
  if (password.length < 8) {
    feedback.push('Use at least 8 characters');
  }
  if (!hasLowercase(password)) {
    feedback.push('Add lowercase letters');
  }
  if (!hasUppercase(password)) {
    feedback.push('Add uppercase letters');
  }
  if (!hasNumbers(password)) {
    feedback.push('Add numbers');
  }
  if (!hasSpecialChars(password)) {
    feedback.push('Add special characters');
  }
  if (password.length < 12 && strength === PASSWORD_STRENGTH.MEDIUM) {
    feedback.push('Consider using 12+ characters for better security');
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Remove duplicate feedback
  return [...new Set(feedback)];
};
/**
 * Validate password against requirements
 * @param {string} password - Password to validate
 * @param {Object} requirements - Requirements object
 * @returns {Object} Validation result
 */
export const validatePassword = (password, requirements = {}) => {
  const {
    minLength = 8,
    requireLowercase = true,
    requireUppercase = true,
    requireNumbers = true,
    requireSpecial = false
  } = requirements;
  const errors = [];
  const warnings = [];
  if (!password) {
    errors.push('Password is required');
    return { isValid: false, errors, warnings };
  }
  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  if (requireLowercase && !hasLowercase(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (requireUppercase && !hasUppercase(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (requireNumbers && !hasNumbers(password)) {
    errors.push('Password must contain at least one number');
  }
  if (requireSpecial && !hasSpecialChars(password)) {
    errors.push('Password must contain at least one special character');
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // Warnings for weak passwords
  const strength = getPasswordStrength(password);
  if (strength === PASSWORD_STRENGTH.VERY_WEAK || strength === PASSWORD_STRENGTH.WEAK) {
    warnings.push('Consider using a stronger password for better security');
  }
<<<<<<< HEAD

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};
/**
 * Generate password strength meter data
 * @param {string} password - Password to analyze
 * @returns {Object} Meter data for UI components
 */
export const getPasswordMeterData = (password) => {
  const details = getPasswordStrengthDetails(password);
  const segments = [];
  // Create meter segments based on requirements
  const requirements = [
    { key: 'length', label: 'Length', met: password.length >= 8 },
    { key: 'lowercase', label: 'Lowercase', met: hasLowercase(password) },
    { key: 'uppercase', label: 'Uppercase', met: hasUppercase(password) },
    { key: 'numbers', label: 'Numbers', met: hasNumbers(password) },
    { key: 'special', label: 'Special', met: hasSpecialChars(password) }
  ];
  requirements.forEach(req => {
    segments.push({
      key: req.key,
      label: req.label,
      met: req.met,
      color: req.met ? 'bg-green-500' : 'bg-gray-300'
    });
  });
  return {
    ...details,
    segments,
    progress: details.score
  };
};
/**
 * Calculate password strength based on various criteria
 * @param {string} password - The password to evaluate
 * @returns {object} Object containing strength score and feedback
 */
export function calculatePasswordStrength(password) {
  if (!password) {
    return {
      score: 0,
      strength: 'Very Weak',
      feedback: 'Enter a password',
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    };
  }
  let score = 0;
  const feedback = [];
  // Length check
  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('At least 8 characters');
  }
  if (password.length >= 12) {
    score += 1;
  }
  if (password.length >= 16) {
    score += 1;
  }
  // Character variety checks
  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Include lowercase letters');
  }
  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Include uppercase letters');
  }
  if (/[0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Include numbers');
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Include special characters');
  }
  // Pattern checks
  if (!/(.)\1{2,}/.test(password)) {
    score += 1;
  } else {
    feedback.push('Avoid repeated characters');
  }
  if (!/(123|abc|qwe|password|admin)/i.test(password)) {
    score += 1;
  } else {
    feedback.push('Avoid common patterns');
  }
  // Determine strength level
  let strength, color, bgColor;
  if (score <= 2) {
    strength = 'Very Weak';
    color = 'text-red-500';
    bgColor = 'bg-red-100';
  } else if (score <= 4) {
    strength = 'Weak';
    color = 'text-orange-500';
    bgColor = 'bg-orange-100';
  } else if (score <= 6) {
    strength = 'Fair';
    color = 'text-yellow-500';
    bgColor = 'bg-yellow-100';
  } else if (score <= 8) {
    strength = 'Good';
    color = 'text-blue-500';
    bgColor = 'bg-blue-100';
  } else {
    strength = 'Strong';
    color = 'text-green-500';
    bgColor = 'bg-green-100';
  }
  return {
    score,
    strength,
    feedback: feedback.length > 0 ? feedback : ['Password meets all criteria'],
    color,
    bgColor,
    maxScore: 10
  };
}
/**
 * Get password strength indicator component
 * @param {string} password - The password to evaluate
 * @returns {object} Object containing strength indicator data
 */
export function getPasswordStrengthIndicator(password) {
  const strength = calculatePasswordStrength(password);
  const percentage = (strength.score / strength.maxScore) * 100;
  return {
    ...strength,
    percentage,
    width: `${percentage}%`
  };
}
<<<<<<< HEAD

export const getStrengthLabel = (score) => {
  if (score >= 4) return 'Very Strong';
  if (score >= 3) return 'Strong';
  if (score >= 2) return 'Medium';
  if (score >= 1) return 'Weak';
  return 'Very Weak';
};
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
