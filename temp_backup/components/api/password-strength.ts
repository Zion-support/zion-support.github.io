 password.toLowerCase () .includes (pattern) );
// Calculate entropy (simplified) // Determine strength level let strength: PasswordStrengthResult['strength'];
if (score < 30) strength = 'very-weak';
else if (score < 50) strength = 'weak';
else if (score < 70) strength = 'medium';
else if (score < 90) strength = 'strong';
else strength = 'very-strong';
// Generate feedback const feedback: string[] = [];
if (length < 8) feedback.push ('Password is too short (minimum 8 characters) ');
if (!hasUppercase) feedback.push ('Add uppercase letters');
if (!hasLowercase) feedback.push ('Add lowercase letters');
if (!hasNumbers) feedback.push ('Add numbers');
if (!hasSymbols) feedback.push ('Add special characters');
if (hasCommonPatterns) feedback.push ('Avoid common patterns and words');
if (entropy < 30) feedback.push ('Password is too predictable');
// Generate suggestions 
}

