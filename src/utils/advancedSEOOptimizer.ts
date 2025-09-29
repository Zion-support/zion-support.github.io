/**
 * Advanced SEO Optimization System
 */

interface SEOMetrics {
  titleLength: number;
  metaDescriptionLength: number;
  headingStructure: boolean;
  imageAltText: number;
  internalLinks: number;
  externalLinks: number;
}

class AdvancedSEOOptimizer {
  private metrics: SEOMetrics | null = null;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.optimizeMetaTags();
    this.optimizeHeadings();
    this.optimizeImages();
    this.optimizeLinks();
  }

  private optimizeMetaTags(): void {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    if (title.length > 60 || title.length < 30) {
      console.warn('Title optimization needed:', title.length, 'characters');
    }

    if (metaDescription.length > 160 || metaDescription.length < 120) {
      console.warn('Meta description optimization needed:', metaDescription.length, 'characters');
    }
  }

  private optimizeHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Elements = document.querySelectorAll('h1');
    
    if (h1Elements.length > 1) {
      console.warn('Multiple H1 tags found:', h1Elements.length);
    }

    headings.forEach((heading) => {
      if (!heading.id) {
        const id = this.generateHeadingId(heading.textContent || '');
        heading.id = id;
      }
    });
  }

  private generateHeadingId(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;

    images.forEach((img) => {
      if (img.hasAttribute('alt') && img.getAttribute('alt') !== '') {
        imagesWithAlt++;
      } else {
        img.setAttribute('alt', 'Image');
      }

      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });

    console.log(`Images with alt text: ${imagesWithAlt}/${images.length}`);
  }

  private optimizeLinks(): void {
    const links = document.querySelectorAll('a');
    let internalLinks = 0;
    let externalLinks = 0;

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        externalLinks++;
        if (!link.hasAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } else {
        internalLinks++;
      }
    });

    console.log(`Internal links: ${internalLinks}, External links: ${externalLinks}`);
  }

  public getMetrics(): SEOMetrics | null {
    return this.metrics;
  }
}

export const seoOptimizer = new AdvancedSEOOptimizer();
export type { SEOMetrics };
export { AdvancedSEOOptimizer };