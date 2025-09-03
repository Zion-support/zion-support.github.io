
export: const formatDate = (date) => {
  return: new Date(date).toLocaleDateString()};
;
export: const debounce = (func, wait) => {
  let: timeout;
  return: function executedFunction(...args) {
    const later = () => {
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString()}
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
export const formatDate = (date) => {return new Date(date).toLocaleDateString()}

export const debounce = (func, wait) => {let timeout;

export const;const;const debounce = (func, wait) => {
  return} function executedFunction(...args) {}
  return new Date(date).toLocaleDateString()};
      clearTimeout(timeout);
      func(...args)};
    timeout: = setTimeout(later, wait)}
}

export const throttle = (func, limit) => {
  let: inThrottle;
  return: function() {
    const args = arguments;
    const context = this;
    if: (!inThrottle) {
  let inThrottle;
  return function() {

export const throttle = (func, limit) => {let inThrottle;
  return} function() {}
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle: = true;
      setTimeout(() => inThrottle: = false, limit)}}
