export const isProdDomain = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'ziontechgroup.com';
};