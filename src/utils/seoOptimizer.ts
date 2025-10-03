/**
 * SEO Optimizer Utility
 * Provides functions to enhance SEO for the application
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  canonicalUrl?: string;
}

class SEOOptimizer {
  private defaultSEO: SEOData = {
    title: "Zion Tech Group - Advanced AI & IT Solutions",
    description: "Zion Tech Group provides cutting-edge AI, IT, and micro SaaS solutions for enterprise transformation, operational efficiency, and strategic growth.",
    keywords: ["AI solutions", "IT services", "micro SaaS", "enterprise AI", "digital transformation", "cloud computing", "cybersecurity", "blockchain", "quantum computing"],
    ogTitle: "Zion Tech Group",
    ogDescription: "Advanced AI & IT Solutions for Enterprise Transformation",
    ogImage: "https://ziontechgroup.com/og-image.jpg",
    twitterCard: "summary_large_image",
    twitterCreator: "@ZionTechGroup",
    twitterSite: "@ZionTechGroup",
    canonicalUrl: "https://ziontechgroup.com",
  };

  public updateSEO(data: Partial<SEOData>): void {
    const currentSEO = { ...this.defaultSEO, ...data };
    this.applyMetaTags(currentSEO);
  }

  private applyMetaTags(seo: SEOData): void {
    document.title = seo.title;

    this.setMetaTag('name', 'description', seo.description);
    this.setMetaTag('name', 'keywords', seo.keywords?.join(', '));
    this.setMetaTag('property', 'og:title', seo.ogTitle || seo.title);
    this.setMetaTag('property', 'og:description', seo.ogDescription || seo.description);
    this.setMetaTag('property', 'og:image', seo.ogImage);
    this.setMetaTag('name', 'twitter:card', seo.twitterCard);
    this.setMetaTag('name', 'twitter:creator', seo.twitterCreator);
    this.setMetaTag('name', 'twitter:site', seo.twitterSite);
    this.setLinkTag('canonical', seo.canonicalUrl);
  }

  private setMetaTag(attributeType: 'name' | 'property', attributeValue: string, content?: string): void {
    let tag = document.querySelector(`meta[${attributeType}="${attributeValue}"]`) as HTMLMetaElement;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attributeType, attributeValue);
      document.head.appendChild(tag);
    }
    if (content) {
      tag.setAttribute('content', content);
    } else {
      tag.remove();
    }
  }

  private setLinkTag(rel: string, href?: string): void {
    let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      document.head.appendChild(tag);
    }
    if (href) {
      tag.setAttribute('href', href);
    } else {
      tag.remove();
    }
  }
}

export default new SEOOptimizer();