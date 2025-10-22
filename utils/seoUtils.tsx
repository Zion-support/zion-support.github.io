// SEO utilities for the Zion Tech Group website

import { Helmet } from 'react-helmet-async';
import React from 'react';

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
  generateSitemapData: (pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
    
    return pages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastmod: page.lastmod || new Date().toISOString().split('T')[0],
      changefreq: page.changefreq || 'weekly',
      priority: page.priority || 0.8
    }));
  },

  // Validate SEO props
  validateSEOProps: (props: SEOProps): string[] => {
    const errors: string[] = [];
    
    if (props.title && props.title.length > 60) {
      errors.push('Title should be 60 characters or less');
    }
    
    if (props.description && props.description.length > 160) {
      errors.push('Description should be 160 characters or less');
    }
    
    if (props.keywords && props.keywords.length > 10) {
      errors.push('Keywords should be 10 or fewer');
    }
    
    return errors;
  },

  // Get page-specific SEO data
  getPageSEO: (pageName: string): SEOProps => {
    const seoData: Record<string, SEOProps> = {
      home: {
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI and IT solutions for businesses. Expert consulting, development, and implementation services.',
        keywords: ['AI', 'IT solutions', 'technology', 'consulting', 'development', 'artificial intelligence']
      },
      about: {
        title: 'About Us - Zion Tech Group',
        description: 'Learn about Zion Tech Group\'s mission, team, and expertise in AI and IT solutions.',
        keywords: ['about', 'company', 'team', 'mission', 'expertise']
      },
      services: {
        title: 'Our Services - AI and IT Solutions',
        description: 'Comprehensive AI and IT services including consulting, development, and implementation.',
        keywords: ['services', 'AI consulting', 'IT development', 'implementation', 'solutions']
      },
      contact: {
        title: 'Contact Us - Zion Tech Group',
        description: 'Get in touch with our team for AI and IT solutions. Contact information and inquiry form.',
        keywords: ['contact', 'get in touch', 'inquiry', 'support']
      }
    };

    return seoData[pageName] || seoData.home;
  }
};

// Default SEO component - moved to separate file to avoid react-refresh warning