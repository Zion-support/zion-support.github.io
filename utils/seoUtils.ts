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

export const generateSEOMeta = (props: SEOProps) => {
  const {
    title = SEO_DEFAULTS.title,
    description = SEO_DEFAULTS.description,
    keywords = SEO_DEFAULTS.keywords,
    image = '/images/og-image.jpg',
    url = 'https://ziontechgroup.com',
    type = 'website',
    noindex = false
  } = props

  const fullTitle = title === SEO_DEFAULTS.title ? title : `${title} | ${SEO_DEFAULTS.title}`

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      siteName: OPEN_GRAPH.siteName,
      locale: OPEN_GRAPH.locale
    },
    twitter: {
      card: SOCIAL_MEDIA.twitter.card,
      site: SOCIAL_MEDIA.twitter.site,
      creator: SOCIAL_MEDIA.twitter.creator,
      title: fullTitle,
      description,
      image
    },
    robots: noindex ? 'noindex, nofollow' : SEO_DEFAULTS.robots,
    canonical: url
  }
}

export const generateStructuredData = (type: keyof typeof STRUCTURED_DATA) => {
  return STRUCTURED_DATA[type]
}

export const validateSEO = (props: SEOProps): string[] => {
  const errors: string[] = []

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
