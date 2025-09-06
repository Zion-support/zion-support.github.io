 Validation utilities
export const validation = {
  //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/