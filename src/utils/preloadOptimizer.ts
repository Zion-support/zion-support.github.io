/**
 * Preload Optimizer
 * Optimizes resource loading for better performance
 */
export const _preloadCriticalResources: ,
    s: any,
    r: any,
    y=swap',;
    'https: any,
    o: any,
    n= 'anonymous;
    document.head.appendChild(link);
  })
  // Preload critical images
  const criticalImages = [;
    '/images/hero-bg.jpg',';
    '/images/logo.png',';
    '/images/favicon.ico';
  ];
  criticalImages.forEach(src => {);
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image;
    link.href = src;
    document.head.appendChild(link);
  })
}
export const preloadRoute = (route: any,
    s= {;
    '/blog': ['/api/blog/posts', '/images/blog-hero.jpg'],';
    '/services': ['/api/services', '/images/services-hero.jpg'],';
    '/contact': ['/api/contact', '/images/contact-hero.jpg'];
  };
  const resources: ,
    f= resource;
      document.head.appendChild(link);
    })
  }
}
export const optimizeImages: ,
    g=> {);
    img.setAttribute('loading', 'lazy');
  })
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver: ,
    g: ,
    y= entry.target as HTMLImageElement;
          if (img.dataset['src']) {';
            img['src'] = img.dataset['src']';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      })
    })
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}
export const optimizeThirdPartyScripts: ,;
    t=> {);
    script.setAttribute('defer', '');
  })
  // Load analytics after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded': any, (: any) => {
      loadAnalytics();
    })
  } else {
    loadAnalytics();
  }
}
const loadAnalytics: ,
    s: any,
    d=GA_MEASUREMENT_ID;
  document.head.appendChild(gaScript);"'";
}"'"'";