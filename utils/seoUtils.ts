import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: any;
}

export const seoUtils = {
  generateMetaTags: (props: SEOProps) => {
    const {
      title = 'Zion Tech Group - Advanced AI and IT Solutions',
      description = 'Leading provider of AI and IT solutions for businesses worldwide',
      keywords = 'AI, IT solutions, technology, software development, consulting',
      canonical,
      ogImage = '/og-image.jpg',
      ogType = 'website',
      twitterCard = 'summary_large_image',
      twitterSite = '@ziontechgroup',
      twitterCreator = '@ziontechgroup',
      structuredData
    } = props;

    return React.createElement(Helmet, null,
      React.createElement('title', null, title),
      React.createElement('meta', { name: 'description', content: description }),
      React.createElement('meta', { name: 'keywords', content: keywords }),
      canonical && React.createElement('link', { rel: 'canonical', href: canonical }),
      
      // Open Graph
      React.createElement('meta', { property: 'og:title', content: title }),
      React.createElement('meta', { property: 'og:description', content: description }),
      React.createElement('meta', { property: 'og:type', content: ogType }),
      React.createElement('meta', { property: 'og:image', content: ogImage }),
      canonical && React.createElement('meta', { property: 'og:url', content: canonical }),
      
      // Twitter
      React.createElement('meta', { name: 'twitter:card', content: twitterCard }),
      React.createElement('meta', { name: 'twitter:site', content: twitterSite }),
      React.createElement('meta', { name: 'twitter:creator', content: twitterCreator }),
      React.createElement('meta', { name: 'twitter:title', content: title }),
      React.createElement('meta', { name: 'twitter:description', content: description }),
      React.createElement('meta', { name: 'twitter:image', content: ogImage }),
      
      // Structured Data
      structuredData && React.createElement('script', { type: 'application/ld+json' }, JSON.stringify(structuredData))
    );
  },

  generateStructuredData: (type: string, data: any) => {
    const baseStructure = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return baseStructure;
  },

  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  },

  generateOrganizationStructuredData: (orgData: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI and IT solutions for businesses worldwide',
      ...orgData
    };
  },

  generateArticleStructuredData: (articleData: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleData.title,
      description: articleData.description,
      author: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/logo.png'
        }
      },
      datePublished: articleData.publishedDate,
      dateModified: articleData.modifiedDate || articleData.publishedDate,
      ...articleData
    };
  },

  generateServiceStructuredData: (serviceData: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceData.name,
      description: serviceData.description,
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      areaServed: 'Worldwide',
      ...serviceData
    };
  },

  validateSEO: (props: SEOProps): string[] => {
    const errors: string[] = [];

    if (!props.title || props.title.length < 30 || props.title.length > 60) {
      errors.push('Title should be between 30-60 characters');
    }

    if (!props.description || props.description.length < 120 || props.description.length > 160) {
      errors.push('Description should be between 120-160 characters');
    }

    if (!props.keywords || props.keywords.split(',').length < 3) {
      errors.push('Keywords should have at least 3 terms');
    }

    return errors;
  }
};