    }
    if (!img && img.decoding) {
      img && img.decoding = 'async';

    }

export const lazyLoadComponents = () => {
  console.log('Lazy loading components...')
}

export const optimizeBundleSize = () => {
  // Dynamic imports for non-critical components
