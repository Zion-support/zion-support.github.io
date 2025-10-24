// SEO utility functions

import { SEO_DEFAULTS, SOCIAL_MEDIA, OPEN_GRAPH, STRUCTURED_DATA } from './seoConstants'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  noindex?: boolean
}

export const generateSEOMeta = $2;
export const generateStructuredData = ($2) => {
  $3
};
export const validateSEO = $2;
  const error,
  s: string[] = []

  if (!props.title || props.title.length < 10) {
    errors.push('Title should be at least 10 characters long')
  }

  if (!props.description || props.description.length < 120) {
    errors.push('Description should be at least 120 characters long')
  }

  if (props.description && props.description.length > 160) {
    errors.push('Description should be no more than 160 characters long')
  }

  if (!props.keywords || props.keywords.split(',').length < 3) {
    errors.push('Keywords should include at least 3 terms')
  }

  return errors
}