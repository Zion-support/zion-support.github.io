<<<<<<< HEAD
<<<<<<< HEAD
// Validation utilities
export const validation = {
  // Add validation utilities here
};
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
ursor/integrate-build-improve-and-re-verify-8f7d

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
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





export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
// Validation utilities
export const validation = {
  // Add validation utilities here
}
origin/main
origin/automation-improvements-final
}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Validation utilities
export const validation = {
  // Add validation utilities here;
};
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======


// Validation utilities
export const validation = {
  // Add validation utilities here
}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
// Validation utilities
=======
// Validation utilities;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const validation = {
  // Add validation utilities here;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
