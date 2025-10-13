export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
<<<<<<< HEAD


  canonicalUrl?: string;
  ogImage?: string;

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-88d4
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;

  canonical?: string;
  ogImage?: string;

}

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }





  generateMetaTags() {
    return {
      title: this.config.title,
      description: this.config.description,
      keywords: this.config.keywords.join(', '),

      canonical: this.config.canonicalUrl,
      'og:title': this.config.title,
      'og:description': this.config.description,
      'og:image': this.config.ogImage,
      'twitter:card': this.config.twitterCard || 'summary_large_image',
      'twitter:title': this.config.title,
      'twitter:description': this.config.description,
      'twitter:image': this.config.ogImage,
    };
  }

  updateTitle(title: string) {
    document.title = title;
  }

  updateMetaDescription(description: string) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }

  updateMetaKeywords(keywords: string[]) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }

  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  updateOpenGraphTags() {
    const ogTags = [
      { property: 'og:title', content: this.config.title },
      { property: 'og:description', content: this.config.description },
      { property: 'og:url', content: this.config.canonicalUrl },
      { property: 'og:type', content: this.config.ogType || 'website' },
    ];

    if (this.config.ogImage) {
      ogTags.push({ property: 'og:image', content: this.config.ogImage });
    }

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }

  updateTwitterCard() {
    if (this.config.twitterCard) {
      let meta = document.querySelector('meta[name="twitter:card"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'twitter:card');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', this.config.twitterCard);
    }
  }

  generateStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": this.config.description,
      "url": this.config.canonicalUrl,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  applySEO() {
    this.updateTitle(this.config.title);
    this.updateMetaDescription(this.config.description);
    this.updateMetaKeywords(this.config.keywords);
    this.updateCanonicalUrl(this.config.canonicalUrl);
    this.updateOpenGraphTags();
    this.updateTwitterCard();
    this.generateStructuredData();
  }

      canonical: this.config.canonical,
      'og:title': this.config.title,
      'og:description': this.config.description,
      'og:image': this.config.ogImage,
    };
  }

}

export default SEOUtils;