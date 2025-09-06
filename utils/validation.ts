<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Validation utilities
export const validation = {
  // Add validation utilities here
<<<<<<< HEAD
};
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
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

}

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


=======
<<<<<<< HEAD
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
=======
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Validation utilities
export const validation = {
  // Add validation utilities here
}
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
};
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
