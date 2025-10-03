// Input sanitization utilities
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>"']/g, '') // Remove HTML characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};