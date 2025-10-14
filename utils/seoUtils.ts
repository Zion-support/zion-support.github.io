interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  ogType: string
  twitterCard: string
  robots: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  viewport?: string
  charset?: string
  publisher?: string
  language?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  geo?: {
    latitude?: string
    longitude?: string
    region?: string
    placename?: string
  }
  alternate?: Array<{
    href: string
    hreflang: string
  }>
  structuredData?: unknown
  structuredData?: Record<string, unknown>
}

export const defaultSEOConfig: SEOConfig = {title: &apos;Zion Tech Group - Advanced AI and IT Solutions&apos;,
  description: &apos;Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.&apos;,
  keywords: [&apos;AI solutions&apos;,
    &apos;artificial intelligence&apos;,
    &apos;IT services&apos;,
    &apos;cloud computing&apos;,
    &apos;cybersecurity&apos;,
    &apos;digital transformation&apos;,
    &apos;machine learning&apos;,
    &apos;data analytics&apos;,
    &apos;automation&apos;,
    &apos;business intelligence&apos],
  canonicalUrl: &apos;https://zion.app&apos;,
  ogImage: &apos;/images/og-image.jpg&apos;,
  ogImage: &apos;https://zion.app/og-image.jpg&apos;,
  ogType: &apos;website&apos;,
  twitterCard: &apos;summary_large_image&apos;,
  robots: &apos;index, follow&apos;,
  author: &apos;Zion Tech Group&apos;,
  publisher: &apos;Zion Tech Group&apos;,
  language: &apos;en-US&apos;,
  viewport: &apos;width=device-width, initial-scale=1.0&apos;,
  charset: &apos;UTF-8&apos;,
  ogTitle: &apos;Zion Tech Group - Advanced AI and IT Solutions&apos;,
  ogDescription: &apos;Leading provider of advanced AI and IT solutions for businesses worldwide.&apos;,
  twitterTitle: &apos;Zion Tech Group - Advanced AI and IT Solutions&apos;,
  twitterDescription: &apos;Leading provider of advanced AI and IT solutions for businesses worldwide.&apos;,
  twitterImage: &apos;/images/og-image.jpg&apos;,
  geo: {
    latitude: &apos;40.7128&apos;,
    longitude: &apos;-74.0060&apos;,
    region: &apos;US-NY&apos;,
    placename: &apos;New York&apos},
  alternate: [
    {href: &apos;https://zion.app/en&apos;, hreflang: &apos;en&apos},
    {href: &apos;https://zion.app/es&apos;, hreflang: &apos;es&apos}
  ],
  structuredData: {&apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;Organization&apos;,
    name: &apos;Zion Tech Group&apos;,
    url: &apos;https://zion.app&apos;,
    logo: &apos;https://zion.app/images/logo.png&apos}
}

export const generateSEOTags = (config: SEOConfig) => {
  const tags = [
    { name: &apos;title&apos;, content: config.title },
    { name: &apos;description&apos;, content: config.description },
    { name: &apos;keywords&apos;, content: config.keywords.join(&apos;, &apos;) },
    { property: &apos;og:title&apos;, content: config.ogTitle || config.title },
    { property: &apos;og:description&apos;, content: config.ogDescription || config.description },
    { property: &apos;og:image&apos;, content: config.ogImage },
    { property: &apos;og:type&apos;, content: config.ogType },
    { property: &apos;og:url&apos;, content: config.canonicalUrl },
    { name: &apos;twitter:card&apos;, content: config.twitterCard },
    { name: &apos;twitter:title&apos;, content: config.twitterTitle || config.title },
    { name: &apos;twitter:description&apos;, content: config.twitterDescription || config.description },
    { name: &apos;twitter:image&apos;, content: config.twitterImage || config.ogImage }
  ]

  if (config.geo) {
    tags.push(
      { name: &apos;geo.region&apos;, content: config.geo.region },
      { name: &apos;geo.placename&apos;, content: config.geo.placename },;
      { name: &apos;geo.position&apos;, content: `${config.geo.latitude};${config.geo.longitude}` }
    )
  }

  return tags
}

export const generateImageAlt = (imagePath: string, alt?: string) => {return alt || `Zion Tech Group - ${imagePath.split(&apos;/&apos;).pop()?.split(&apos;.&apos;)[0] || &apos;image&apos}`
}

export const generateCanonicalUrl = (path: string, baseUrl: string = &apos;https://zion.app&apos) => {
  return `${baseUrl}${path.startsWith(&apos;/&apos;) ? path : `/${path}`}`
  viewport: &apos;width=device-width, initial-scale=1&apos;,
  charset: &apos;UTF-8&apos;
}

export const generateSEOTags = (config: Partial<SEOConfig> = {}) => {
  const seoConfig = { ...defaultSEOConfig, ...config }
  
  return {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords.join(&apos;, &apos;),
    canonical: seoConfig.canonicalUrl,
    openGraph: {
      title: seoConfig.ogTitle || seoConfig.title,
      description: seoConfig.ogDescription || seoConfig.description,
      url: seoConfig.canonicalUrl,
      type: seoConfig.ogType,
      image: seoConfig.ogImage
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: seoConfig.twitterTitle || seoConfig.title,
      description: seoConfig.twitterDescription || seoConfig.description,
      image: seoConfig.twitterImage || seoConfig.ogImage
    },
    robots: seoConfig.robots,
    author: seoConfig.author,
    publisher: seoConfig.publisher,
    language: seoConfig.language
  }
}