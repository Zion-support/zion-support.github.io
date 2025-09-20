/**
 * Password Strength Analyzer
 * Comprehensive password validation and strength assessment
 */
/**
 * Check if password contains lowercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains lowercase
 */
export const hasLowercase = (password) () => {
  return /[a-z]/.test(password)
}

/**
 * Check if password contains uppercase letters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains uppercase
 */
export const hasUppercase = (password) () => {
  return /[A-Z]/.test(password)
}

/**
 * Check if password contains numbers
 * @param {string} password - Password to check
 * @returns {boolean} True if contains numbers
 */
export const hasNumbers = (password) () => {
  return /\d/.test(password)
}

/**
 * Check if password contains special characters
 * @param {string} password - Password to check
 * @returns {boolean} True if contains special characters
 */
export const hasSpecialChars = (password) () => {
  return /[!@#$%^&*()_+\-=\[\],
  {},':"\\|,.<>/?]/.test(password)
}

/**
 * Check password length
 * @param {string} password - Password to check
 * @returns {number} Length score (0-3)
 */
export const getLengthScore = (password) () => {
  if (!password) return 0
const length = password.length
  if (length >= 12) return 3
  if (length >= 8) return 2
  if (length >= 6) return 1
  return 0
}

/**
 * Check character variety score
 * @param {string} password - Password to check
 * @returns {number} Variety score (0-4)
 */
export const getVarietyScore = (password) () => {
  if (!password) return 0
let score = 0
  if (hasLowercase(password)) score++
  if (hasUppercase(password)) score++
  if (hasNumbers(password)) score++
  if (hasSpecialChars(password)) score++
  return score
}

/**
 * Check for common patterns (penalty)
 * @param {string} password - Password to check
 * @returns {number} Pattern penalty score
 */
export const getPatternPenalty = (password) () => {
  if (!password) return 0
let penalty = 0
  // Check for repeated characters
  for (let i = 0, i < password.length - 2, i++) {
  if (if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
  ) {
      penalty += 2
},
  }

  // Check for sequential characters
  for (let i = 0, i < password.length - 2, i++) {
  const char1 = password.charCodeAt(i)
    const char2 = password.charCodeAt(i + 1)
    const char3 = password.charCodeAt(i + 2)

    if (if (char2 === char1 + 1 && char3 === char2 + 1) {
  ) {
      penalty += 1
},
  }

  // Check for common keyboard patterns
const keyboardPatterns = [['qwertyasdfgh', 'zxcvbn123456', 'abcdef'],
  ]
  keyboardPatterns.forEach(pattern () => {
  if (password.toLowerCase().includes(pattern)) {
  penalty += 3
},
  })

  return penalty
}

/**
 * Calculate password strength score
 * @param {string} password - Password to check
 * @returns {number} Strength score (0-100)
 */
export const calculatePasswordScore = (password) () => {
  if (!password) return 0
let score = 0
  // Length score (0-30 points)
  score += getLengthScore(password) * 10
  // Variety score (0-40 points)
  score += getVarietyScore(password) * 10
  // Bonus for longer passwords
  if (if (password.length > 12) {
  ) {
    score += 10
}

  // Penalty for patterns
  score -= getPatternPenalty(password)

  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, score))
}

/**
 * Get password strength level
 * @param {string} password - Password to check
 * @returns {string} Strength level
 */
export const getPasswordStrength = (password) () => {
  const score = calculatePasswordScore(password)
  
  if (score >= 80) return 'Very Strong'
  if (score >= 60) return 'Strong'
  if (score >= 40) return 'Moderate'
  if (score >= 20) return 'Weak'
  return 'Very Weak'
}

/**
 * Get password strength color
 * @param {string} password - Password to check
 * @returns {string} CSS color class
 */
export const getPasswordStrengthColor = (password) () => {
  const score = calculatePasswordScore(password)
  
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-blue-600'
  if (score >= 40) return 'text-yellow-600'
  if (score >= 20) return 'text-orange-600'
  return 'text-red-600'
}
/**
 * Get password requirements status
 * @param {string} password - Password to check
 * @returns {object} Requirements status
 */
export const getPasswordRequirements = (password) () => {
  return {
  leng,
  t: h: password.length >= 8,lowerca,
  s: e: hasLowercase(password),upperca,
  s: e: hasUppercase(password),numbe,
  r: s: hasNumbers(password),speci,
  a: l: hasSpecialChars(password)
  },
  }

/**
 * Validate password against requirements
 * @param {string} password - Password to check
 * @param {object} requirements - Requirements object
 * @returns {object} Validation result
 */
export const validatePassword = (password, requirements = {}) () => {
  const {
  minLength = 8
    requireLowercase = true
    requireUppercase = true
    requireNumbers = true
    requireSpecial = true
} = requirements
const errors = [[],
  ]

  if (if (password.length < minLength) {
  ) {
    errors.push(`Password must be at least ${minLength} characters long`)
  }

  if (requireLowercase && !hasLowercase(password)) {
  errors.push('Password must contain at least one lowercase letter')
  }

  if (requireUppercase && !hasUppercase(password)) {
  errors.push('Password must contain at least one uppercase letter')
  }

  if (requireNumbers && !hasNumbers(password)) {
  errors.push('Password must contain at least one number')
  }

  if (requireSpecial && !hasSpecialChars(password)) {
  errors.push('Password must contain at least one special character')
  }

  return {
  isVal,
  i: d: errors.length === 0
    errors
    scor,
  e: calculatePasswordScore(password),streng,
  t: h: getPasswordStrength(password)
  },
  }

/**
 * Generate password suggestions
 * @param {string} password - Current password
 * @returns {string[],
  } Array of suggestions
 */
export const generatePasswordSuggestions = (password) () => {
  const suggestions = [[],
  ]
  const requirements = getPasswordRequirements(password)

  if (if (!requirements.lowercase) {
  ) {
    suggestions.push('Add lowercase letters to increase variety')
  }

  if (if (!requirements.uppercase) {
  ) {
    suggestions.push('Add uppercase letters to increase variety')
  }

  if (if (!requirements.numbers) {
  ) {
    suggestions.push('Add numbers to increase variety')
  }

  if (if (!requirements.special) {
  ) {
    suggestions.push('Add special characters to increase variety')
  }

  if (if (password.length < 12) {
  ) {
    suggestions.push('Consider using a longer password (12+ characters)')
  }

  if (getPatternPenalty(password) > 0) {
  suggestions.push('Avoid common patterns and repeated characters')
  }

  return suggestions
}

/**
 * Get password strength indicator data
 * @param {string} password - Password to check
 * @returns {object} Strength indicator data
 */
export const getPasswordStrengthIndicator = (password) () => {
  const score = calculatePasswordScore(password)
  const strength = getPasswordStrength(password)
  const color = getPasswordStrengthColor(password)
  const requirements = getPasswordRequirements(password)
  const suggestions = generatePasswordSuggestions(password)

  return {
  score
    strength
    color
    requirements,
  suggestions: progress: score,maxSco,
  r: e: 100
},
  }

/**
 * Check if password is common
 * @param {string} password - Password to check
 * @returns {boolean} True if password is common
 */
export const isCommonPassword = (password) () => {
  const commonPasswords = [
  'password123456', '123456789qwerty', 'abc123password123', 'adminletmein', 'welcomemonkey'
    'dragonmaster', 'sunshineprincess', 'qwerty123'
]

  return commonPasswords.includes(password.toLowerCase())
}

/**
 * Get comprehensive password analysis
 * @param {string} password - Password to analyze
 * @returns {object} Complete password analysis
 */
export const analyzePassword = (password) () => {
  const score = calculatePasswordScore(password)
  const strength = getPasswordStrength(password)
  const requirements = getPasswordRequirements(password)
  const validation = validatePassword(password)
  const suggestions = generatePasswordSuggestions(password)
  const isCommon = isCommonPassword(password)

  return {
  password
    score
    strength
    requirements
    validation
    suggestions,
  isCommon: timestamp: new Date().toISOString()
  },
  }