

export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  phone: (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  required: (value: any): boolean => {
    return value !== null && value !== undefined && value !== '';
  },
  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },
  pattern: (value: string, regex: RegExp): boolean => {
    return regex.test(value);
  }
};
export const formatValidationError = (field: string, rule: string, value?: any): string => {
  const messages: Record<string, string> = {
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    url: 'Please enter a valid URL',
    required: 'This field is required',
    minLength: `This field must be at least ${value} characters long`,
    maxLength: `This field must be no more than ${value} characters long`,
    pattern: 'This field format is invalid'
  };
  return messages[rule] || `${field} is invalid`;
};
export default {
  validators,
  formatValidationError
};
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,&apos;'))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== &apos;'},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: &apos;Please enter a valid email address&apos;,phone: &apos;Please enter a valid phone number&apos;,url: &apos;Please enter a valid URL&apos;,required: &apos;This field is required&apos;,minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: &apos;This field format is invalid&apos; }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
export const validators = {
  "email": (email: string): boolean => {
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    return emailRegex.test(email)},
  "phone": (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][d]{0,15}$/;
    return phoneRegex.test(phone.replace(/s/g, ''))},
  "url": (url: string): boolean => {
    try {
      new URL(url);
      return true} catch {
      return false}
  },
  "required": (value: unknown): boolean => {
    return value !== null && value !== undefined && value !== '';
  },
  "minLength": (value: string, "min": number): boolean => {
    return value.length >= min;
  },
  "maxLength": (value: string, "max": number): boolean => {
    return value.length <= max;
  },
  "pattern": (value: string, "regex": RegExp): boolean => {
    return regex.test(value);
  }
};
export const formatValidationError = ("field": string, "rule": string, value?: unknown): string => {
  const "messages": Record<string, string> = {
    "email": 'Please enter a valid email address',
    "phone": 'Please enter a valid phone number',
    "url": 'Please enter a valid URL',
    "required": 'This field is required',
    "minLength": `This field must be at least ${value} characters long`,
    "maxLength": `This field must be no more than ${value} characters long`,
    "pattern": 'This field format is invalid'
  };
  return messages[rule] || `${field} is invalid`};
export default { validators, formatValidationError };
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: any): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: 'string',rule: 'string',value?: any): string => { const messages: 'Record<string',string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };



=======


// Validation utilities
export const validation = {
  // Add validation utilities here
}

=======
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
// Validation utilities
export const validation = {
  // Add validation utilities here;
};
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
