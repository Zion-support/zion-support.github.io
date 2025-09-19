
// Input validation utilities,
export const sanitizeInput = (input) => {,
  if (typeof input !== 'string') return input;
  return input,
    .replace(/[<>]/g, '') // Remove potential HTML tags,
    .replace(/javascript:/gi, '') // Remove javascript: protocol,
    .replace(/onw+=/gi, '') // Remove event handlers,
    .trim();
};
export const validateEmail = (email) => {,
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
};
export const validatePhone = (phone) => {,
  const phoneRegex = /^[+]?[1-9][d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[s-()]/g, ''));
};
export const validateUrl = (url) => {,
  try {,
    new URL(url);
    return true;
  } catch {,
    return false;
  }
};
export const sanitizeHtml = (html) => {,
  if (typeof html !== 'string') return html;
  return html,
    .replace(/<script[^<]*(?:(?!</script>)<[^<]*)*</script>/gi, ''),
    .replace(/<iframe[^<]*(?:(?!</iframe>)<[^<]*)*</iframe>/gi, ''),
    .replace(/onw+s*=s*["'][^"']*["']/gi, '');
};