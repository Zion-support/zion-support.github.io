// SEO utility functions for the Zion Tech Group website

import { SEOProps, seoConstants, pageSEOData } from './seoConstants';

export const seoUtils = {
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
    return pageSEOData[pageName] || pageSEOData.home;
  }
};