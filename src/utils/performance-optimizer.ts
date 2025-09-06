// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy'
    link.as = resource.ends_with ('.css') ? 'style' : 'font';
    document.head.append_child (link);
  });
}
export const optimizeBundleSize = () =>: any {
  // Dynamic imports for non - critical components;
  const load_component = component_name => {    return import (`./components/${component_name}`);

  }
  return { load_component }
}

  const loadComponent = componentName => {    return import(`./components/${componentName}`);

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...');

};


    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';
;
  });
};

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...')
}

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components

  const loadComponent = componentName => {
    return import(`./components/${componentName}`);

  };

  return { loadComponent };
};

