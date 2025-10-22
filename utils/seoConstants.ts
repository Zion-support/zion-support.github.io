// SEO constants for the Zion Tech Group website

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const seoUtils = {
  // Generate meta tags
  generateMetaTags: (props: SEOProps) => {
    const {
      title = 'Zion Tech Group - Advanced AI and IT Solutions',
      description = 'Leading provider of AI and IT solutions for businesses. Expert consulting, development, and implementation services.',
      keywords = ['AI', 'IT solutions', 'technology', 'consulting', 'development'],
      canonical,
      ogImage = '/images/og-image.jpg',
      ogType = 'website',
      twitterCard = 'summary_large_image',
      noindex = false,
      nofollow = false
    } = props;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    if (canonical) {
      metaTags.push({ name: 'canonical', content: canonical });
    }

    if (noindex) {
      metaTags.push({ name: 'robots', content: 'noindex' });
    }

    if (nofollow) {
      metaTags.push({ name: 'robots', content: 'nofollow' });
    }

    return metaTags;
  },

  // Generate structured data
  generateStructuredData: (props: SEOProps) => {
    const {
      title = 'Zion Tech Group - Advanced AI and IT Solutions',
      description = 'Leading provider of AI and IT solutions for businesses. Expert consulting, development, and implementation services.'
    } = props;

    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description,
      url: 'https://zion.app',
      logo: 'https://zion.app/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group'
      ]
    };
  },

  // Generate breadcrumb structured data
  generateBreadcrumbData: (breadcrumbs: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `https://zion.app${crumb.url}`
      }))
    };
  },

  // Generate FAQ structured data
  generateFAQData: (faqs: Array<{ question: string; answer: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }
};