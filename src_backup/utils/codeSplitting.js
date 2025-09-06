
// Code splitting configuration
export const dynamicImports = {
  components: () => import('./components'),
  utils: () => import('./utils'),
  hooks: () => import('./hooks')
};
