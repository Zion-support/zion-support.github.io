export const _validators = {
  email: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  sanitizeInput: input => input.replace(/[<>'";]/g, '').trim(),
  validateUrl: url => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
};
