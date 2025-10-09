// Type definitions for Next.js compatibility in Vite
export interface Metadata {
    // TODO: Add content
  }
  title?: string
  description?: string
  keywords?: string[]
  authors?: Array
          <{ name: string; url?: string }> | string[]
  creator?: string
  publisher?: string
  formatDetection?: {
    // TODO: Add content
  }
    email?: boolean
    address?: boolean
    telephone?: boolean
  }
  metadataBase?: URL
  alternates?: {
    // TODO: Add content
  }
    canonical?: string
  }
  openGraph?: {
    // TODO: Add content
  }
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: Array
          <{
    // TODO: Add content
  }
  url: string
      width?: number
      height?: number
      alt?: string
    }>
    locale?: string
    type?: string
    authors?: Array
          <{ name: string; url?: string }> | string[]
    publishedTime?: string
  }
  twitter?: {
    // TODO: Add content
  }
    card?: string
    title?: string
    description?: string
    images?: string[]
    site?: string
    creator?: string
  }
  robots?: {
    // TODO: Add content
  }
    index?: boolean
    follow?: boolean
    googleBot?: {
    // TODO: Add content
  }
      index?: boolean
      follow?: boolean
      'max-video-preview'?: number
      'max-image-preview'?: string
      'max-snippet'?: number
    }
  }
  verification?: {
    // TODO: Add content
  }
    google?: string
  }
}
export interface MetadataRoute {
    // TODO: Add content
  }
  sitemap?: string
  robots?: string
  manifest?: string
}
export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest'
export interface MetadataRouteSitemap {
    // TODO: Add content
  }
  url: string
  lastModified?: Date | string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}