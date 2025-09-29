// Structured Data Utility
export class StructuredDataManager {
  private static instance: StructuredDataManager;
  private schemas: Map<string, any> = new Map();
  
  static getInstance(): StructuredDataManager {
    if (!StructuredDataManager.instance) {
      StructuredDataManager.instance = new StructuredDataManager();
    }
    return StructuredDataManager.instance;
  }
  
  addOrganizationSchema(data: {
    name: string;
    url: string;
    logo?: string;
    description?: string;
    contactPoint?: any;
    sameAs?: string[];
  }): void {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      ...data
    };
    this.schemas.set('organization', schema);
  }
  
  addWebSiteSchema(data: {
    name: string;
    url: string;
    description?: string;
    potentialAction?: any;
  }): void {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      ...data
    };
    this.schemas.set('website', schema);
  }
  
  addServiceSchema(data: {
    name: string;
    description: string;
    provider: any;
    areaServed?: string;
    hasOfferCatalog?: any;
  }): void {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      ...data
    };
    this.schemas.set('service', schema);
  }
  
  generateStructuredData(): string {
    const allSchemas = Array.from(this.schemas.values());
    return JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas, null, 2);
  }
  
  injectStructuredData(): void {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = this.generateStructuredData();
    document.head.appendChild(script);
  }
  
  initialize(): void {
    this.addOrganizationSchema({
      name: "Zion Tech Group",
      url: "https://zion.app",
      description: "Advanced AI and IT Solutions Provider",
      sameAs: [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    });
    
    this.addWebSiteSchema({
      name: "Zion Tech Group - AI Solutions",
      url: "https://zion.app",
      description: "Advanced AI and IT Solutions Platform",
      potentialAction: {
        "@type": "SearchAction",
        "target": "https://zion.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    
    this.injectStructuredData();
  }
}

export const structuredDataManager = StructuredDataManager.getInstance();
