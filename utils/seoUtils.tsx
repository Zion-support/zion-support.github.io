// SEO utilities for the Zion Tech Group website

import { SEOProps } from './seoConstants';
import { seoUtils } from './seoUtilsCore';

// Default SEO component
export const DefaultSEO: React.FC<SEOProps> = (props) => {
  return seoUtils.generateMetaTags(props);
};