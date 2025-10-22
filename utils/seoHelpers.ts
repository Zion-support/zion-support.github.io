// SEO helper functions for the Zion Tech Group website

import { SEOProps } from './seoConstants';

export const seoHelpers = {
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

  // Generate sitemap data
  generateSitemapData: (pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
    
    return pages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastmod: page.lastmod || new Date().toISOString().split('T')[0],
      changefreq: page.changefreq || 'weekly',
      priority: page.priority || 0.8
    }));
  }
};