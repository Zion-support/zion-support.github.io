
<<<<<<< HEAD
export const formatDate = (date) => {;
  return new Date(date).toLocaleDateString()}
;
export const debounce = (func, wait) => {;
  let timeout;
  return function executedFunction(...args) {;
    const later = () => {;
=======
<<<<<<< HEAD
export const formatDate = (date) => {return new Date(date).toLocaleDateString()}

export const debounce = (func, wait) => {let timeout;
=======
export const formatDate = (date) => {
<<<<<<< HEAD
  return new Date(date).toLocaleDateString()}

export const;const;const debounce = (func, wait) => {
  let timeout;
  return} function executedFunction(...args) {}
    const later = () => {
=======
  return new Date(date).toLocaleDateString()};
;
export const debounce = (func, wait) => {;
  let timeout;
>>>>>>> main
  return function executedFunction(...args) {
    const later = () => {;
>>>>>>> main
>>>>>>> main
      clearTimeout(timeout);
      func(...args)}
    clearTimeout(timeout);
    timeout = setTimeout(later, wait)}
}
<<<<<<< HEAD
;
export const throttle = (func, limit) => {;
  let inThrottle;
  return function() {;
=======

<<<<<<< HEAD
export const throttle = (func, limit) => {let inThrottle;
  return function() {
=======
export const throttle = (func, limit) => {;
  let inThrottle;
  return} function() {}
>>>>>>> main
>>>>>>> main
    const args = arguments;
    const context = this;
    if (!inThrottle) {;
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit)}
  }
}
