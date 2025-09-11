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
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
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
  
  let penalty = 0;
  
  // Check for repeated characters
  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      penalty += 2;
    }
  }
  
  // Check for sequential characters
  for (let i = 0; i < password.length - 2; i++) {
    const char1 = password.charCodeAt(i);
    const char2 = password.charCodeAt(i + 1);
    const char3 = password.charCodeAt(i + 2);
    
    if (char2 === char1 + 1 && char3 === char2 + 1) {
      penalty += 1;
    }
  }
  
  // Check for common keyboard patterns
  const keyboardPatterns = ['qwerty', 'asdfgh', 'zxcvbn', '123456', 'abcdef'];
  keyboardPatterns.forEach(pattern => {
    if (password.toLowerCase().includes(pattern)) {
      penalty += 3;
    }
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
  const strength = getPasswordStrength(password);
  const score = calculatePasswordScore(password);
  
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
  
  // Warnings for weak passwords
  const strength = getPasswordStrength(password);
  if (strength === PASSWORD_STRENGTH.VERY_WEAK || strength === PASSWORD_STRENGTH.WEAK) {
    warnings.push('Consider using a stronger password for better security');
  }
  
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

// Alias functions for backward compatibility
export const calculatePasswordStrength = (password) => {
  const score = calculatePasswordScore(password);
  // Convert 0-100 score to 0-4 scale
  if (score >= 80) return 4;
  if (score >= 60) return 3;
  if (score >= 40) return 2;
  if (score >= 20) return 1;
  return 0;
};

export const getStrengthLabel = (score) => {
  if (score >= 4) return 'Very Strong';
  if (score >= 3) return 'Strong';
  if (score >= 2) return 'Medium';
  if (score >= 1) return 'Weak';
  return 'Very Weak';
};