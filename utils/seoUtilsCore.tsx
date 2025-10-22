// Core SEO utilities for the Zion Tech Group website

import { Helmet } from 'react-helmet-async';
import { SEOProps, DEFAULT_SEO_PROPS, PAGE_SEO_DATA } from './seoConstants';
import { seoHelpers } from './seoHelpers';

export const seoUtils = {
  // Generate meta tags
  generateMetaTags: (props: SEOProps) => {
    const {
      title = DEFAULT_SEO_PROPS.title,
      description = DEFAULT_SEO_PROPS.description,
      keywords = DEFAULT_SEO_PROPS.keywords,
      canonical,
      ogImage = DEFAULT_SEO_PROPS.ogImage,
      ogType = DEFAULT_SEO_PROPS.ogType,
      twitterCard = DEFAULT_SEO_PROPS.twitterCard,
      noindex = DEFAULT_SEO_PROPS.noindex,
      nofollow = DEFAULT_SEO_PROPS.nofollow
    } = props;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content={ogType} />
        {canonical && <meta property="og:url" content={canonical} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Robots */}
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
    );
  },

  // Generate structured data
  generateStructuredData: (type: 'organization' | 'website' | 'article', data: any) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'organization' ? 'Organization' : type === 'website' ? 'WebSite' : 'Article',
      ...data
    };

    if (type === 'organization') {
      structuredData['@type'] = 'Organization';
      structuredData.name = 'Zion Tech Group';
      structuredData.url = baseUrl;
      structuredData.logo = `${baseUrl}/images/logo.png`;
      structuredData.description = 'Leading provider of AI and IT solutions for businesses';
    }

    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      </Helmet>
    );
  },

  // Generate sitemap data
  generateSitemapData: seoHelpers.generateSitemapData,

  // Validate SEO props
  validateSEOProps: seoHelpers.validateSEOProps,

  // Get page-specific SEO data
  getPageSEO: (pageName: string): SEOProps => {
    return PAGE_SEO_DATA[pageName] || PAGE_SEO_DATA.home;
  }
};