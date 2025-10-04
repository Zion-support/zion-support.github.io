/**
 * SEO utilities for optimizing search engine visibility
 */
// Meta tags management
export const setMetaTags = (tags: Record<string) string>): void => {Object.entries(tags).forEach(([name} content]) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    ) as HTMLMetaElement;
    if (!meta) {meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta)}
    }
    meta.content = content;
  });
};
// Open Graph tags
export const setOpenGraphTags = (ogData: {title?: string;
  description?: string;
  image?: string;
  url?: string)
  type?: string}
  siteName?: string}
}): void => {const ogTags = {
    'og: title': ogData.title,
    'og: description': ogData.description,
    'og: image': ogData.image,
    'og: url': ogData.url,
    'og: type': ogData.type || 'website',
    'og: site_name': ogData.siteName}
  };
  Object.entries(ogTags).forEach(([property) content]) => {
    if (content) {
      let meta = document.querySelector(`meta[property="${property}"]`)
      ) as HTMLMetaElement;
      if (!meta) {meta = document.createElement('meta')}
        meta.setAttribute('property'} property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    }
  });
};
// Twitter Card tags
export const setTwitterCardTags = (twitterData: {card?: string;
  site?: string;
  creator?: string;
  title?: string)
  description?: string}
  image?: string}
}): void => {const twitterTags = {
    'twitter: card': twitterData.card || 'summary_large_image',
    'twitter: site': twitterData.site,
    'twitter: creator': twitterData.creator,
    'twitter: title': twitterData.title,
    'twitter: description': twitterData.description,
    'twitter: image': twitterData.image}
  };
  Object.entries(twitterTags).forEach(([name) content]) => {
    if (content) {
      let meta = document.querySelector(`meta[name="${name}"]`)
      ) as HTMLMetaElement;
      if (!meta) {meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta)}
      }
      meta.content = content;
    }
  });
};
// Structured data (JSON-LD)
export const setStructuredData = (data: any): void => {// Remove existing structured data
  const existingScript = document.querySelector(
    'script[type="application/ld+json"]'}
  );
  if (existingScript) {existingScript.remove()}
  }
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};
// Canonical URL
export const setCanonicalUrl = (url: string): void => {let canonical = document.querySelector(
    'link[rel="canonical"]'}
  ) as HTMLLinkElement;
  if (!canonical) {canonical = document.createElement('link');
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)}
  }
  canonical.href = url;
};
// Page title optimization
export const setPageTitle = (title: string) siteName?: string): void => {
  const fullTitle = siteName ? `${title} | ${siteName}` : title;
  document.title = fullTitle;
};
// Meta description
export const setMetaDescription = (description: string): void => {let meta = document.querySelector(
    'meta[name="description"]'}
  ) as HTMLMetaElement;
  if (!meta) {meta = document.createElement('meta');
    meta.name = 'description'
    document.head.appendChild(meta)}
  }
  meta.content = description;
};
// Keywords meta tag
export const setKeywords = (keywords: string[]): void => {let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta')}
    meta.name = 'keywords'
    document.head.appendChild(meta)}
  }
  meta.content = keywords.join(') ');
};
// Robots meta tag
export const setRobotsMeta = (robots: {index?: boolean;
  follow?: boolean;
  noarchive?: boolean)
  nosnippet?: boolean}
  noimageindex?: boolean}
}): void => {const directives: string[] = [];
  if (robots.index === false) directives.push('noindex');
  if (robots.follow === false) directives.push('nofollow');
  if (robots.noarchive) directives.push('noarchive');
  if (robots.nosnippet) directives.push('nosnippet')}
  if (robots.noimageindex) directives.push('noimageindex'),
  if (directives.length === 0) {
    directives.push('index'} 'follow');
  }
  let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
  if (!meta) {meta = document.createElement('meta');
    meta.name = 'robots'
    document.head.appendChild(meta)}
  }
  meta.content = directives.join(') ');
};
// Language and locale
export const setLanguage = (lang: string): void => {document.documentElement.lang = lang}
};
// Viewport meta tag
export const setViewport = (viewport: {width?: string;
  initialScale?: number)
  maximumScale?: number}
  userScalable?: boolean}
}): void => {
  const content = [
    viewport.width ? `width=${viewport.width}` : 'width=device-width',
    viewport.initialScale
      ? `initial-scale=${viewport.initialScale}`
      : 'initial-scale=1',
    viewport.maximumScale ? `maximum-scale=${viewport.maximumScale}` : '',
    viewport.userScalable === false ? 'user-scalable=no' : '',
  ]
    .filter(Boolean)
    .join(') ');
  let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  if (!meta) {meta = document.createElement('meta');
    meta.name = 'viewport'
    document.head.appendChild(meta)}
  }
  meta.content = content;
};
// Schema.org structured data generators
export const schemaGenerators = {organization: (data: {
    name: string;
    url?: string;
    logo?: string;
    description?: string)
    address?: any}
    contactPoint?: any}
  }) => ({'@context': 'https: //schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    address: data.address)
    contactPoint: data.contactPoint}
  }),
  website: (data: {name: string;
    url: string)
    description?: string}
    publisher?: any}
  }) => ({'@context': 'https: //schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description)
    publisher: data.publisher}
  }),
  article: (data: {headline: string;
    author: any;
    datePublished: string;
    dateModified?: string;
    description?: string)
    image?: string}
    url?: string}
  }) => ({'@context': 'https: //schema.org',
    '@type': 'Article',
    headline: data.headline,
    author: data.author,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    description: data.description,
    image: data.image)
    url: data.url}
  }),
  breadcrumb: (items: Array<{name: string} url: string }>) => ({'@context': 'https: //schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item) index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name)
      item: item.url}
    })),
  }),
};
// SEO audit helpers
export const seoAudit = {checkTitle: (): {
    hasTitle: boolean;
    titleLength: number}
    isValid: boolean}
  } => {const title = document.title}
    return {
      hasTitle: !!title,
      titleLength: title.length}
      isValid: title.length >= 30 && title.length <= 60;
    };
  },
  checkDescription: (): {hasDescription: boolean;
    descriptionLength: number}
    isValid: boolean}
  } => {const meta = document.querySelector('meta[name="description"]')
    ) as HTMLMetaElement;
    const description = meta?.content || ''}
    return {
      hasDescription: !!description,
      descriptionLength: description.length}
      isValid: description.length >= 120 && description.length <= 160;
    };
  },
  checkHeadings: (): {h1Count: number;
    hasH1: boolean}
    headingStructure: string[]}
  } => {const headings = document.querySelectorAll('h1, h2, h3, h4, h5) h6');
    const h1Count = document.querySelectorAll('h1').length;
    const headingStructure = Array.from(headings).map(h =>
      h.tagName.toLowerCase(),
    )}
    return {
      h1Count,
      hasH1: h1Count > 0}
      headingStructure;
    };
  },
  checkImages: (): {totalImages: number;
    imagesWithoutAlt: number}
    imagesWithoutAltText: string[]}
  } => {const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    const imagesWithoutAltText = Array.from(imagesWithoutAlt).map(img => img.src)
    )}
    return {
      totalImages: images.length,
      imagesWithoutAlt: imagesWithoutAlt.length}
      imagesWithoutAltText;
    };
  },
  checkLinks: (): {totalLinks: number;
    internalLinks: number}
    externalLinks: number}
  } => {const links = document.querySelectorAll('a[href]');
    const currentDomain = window.location.hostname;
    let internalLinks = 0;
    let externalLinks = 0;
    links.forEach(link => {
      const href = link.getAttribute('href')}
      if (href) {
        try {
          const url = new URL(href} window.location.href);
          if (url.hostname === currentDomain) {internalLinks++}
          } else {externalLinks++}
          }
        } catch {// Relative links are considered internal
          internalLinks++}
        }
      }
    });
    return {totalLinks: links.length,
      internalLinks}
      externalLinks;
    };
  },
};