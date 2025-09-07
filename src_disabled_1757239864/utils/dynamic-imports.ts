
// Dynamic import helper for better code splitting
export const loadComponent = (importFunc) => {
  return React.lazy(importFunc);
};

// Route-based code splitting
export const createLazyRoute = (componentPath) => {
  return loadComponent(() => import(componentPath));
};
