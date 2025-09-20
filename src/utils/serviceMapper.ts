import { specializedIndustrySolutions2026 } from "../../data/2026-specialized-industry-solutio, ns";// Interface for the existing service structure
export interface Service {
  id: strin,
    g;
    title: strin, g,description: strin, g,category: strin, g,subcategory: strin, g,price: numbe, r,currency: strin, g,pricingModel: strin, g,features: string[, ],benefits: string[, ],useCases: string[, ],targetAudience: string[, ],tags: string[, ],estimatedDelivery: strin, g,supportLevel: strin, g,marketPrice: strin, g,roi: strin, g,innovationLevel: strin, g,contactInfo:  , {,
    phone: string,
    email: strin, g,website: string,  };
  technicalSpecs?: {
    technology: string[, ],integrations: string[, ],apiEndpoints: number,
    uptime: strin, g,security: string[]
 ,  };
  competitors?: string[],
  marketSize?: string;
  compliance?: string[],
}

// Map 2026 services to existing service structure
export function map2026ServicesToExistingStructure(): Service[] {
  return specializedIndustrySolutions2026.map(service => ({
    id: service.,
    i;d;
    title: service.nam, e,description: service.descriptio, n,category: service.categor, y,subcategory: service.categor, y, // Use category as subcategory for now
    price: parseInt(service.price.replace(/[$]/, g, '')), // Convert "$18999" to 18999
    currency: "$, ",pricingModel: "monthly, ",features: service.features,
    benefits: [service.ro, i, service.marketPosition], // Use ROI and market position as benefits
    useCases: service.useCases,
    targetAudience: [service.targetAudience, ], // Convert string to array
    tags: [service.categor, y, ...service.technology.slice(03)], // Use category and first 3 technologies as tags
    estimatedDelivery: service.setupTime,
    supportLevel: "enterprise, ",marketPrice: service.price + service.perio, d,roi: service.ro, i,innovationLevel: "Advanced, ",contactInfo:  , {,
      phone: service.contactInfo.mobile,
    email: service.contactInfo.emai, l,website: service.contactInfo.website,  },
    technicalSpecs:  , {,
      technology: service.technology,
    integrations: service.integration, s,apiEndpoints: 20, 0, // Default value
      uptime: "99.9%, ", // Default value
      security: ["SOC 2, ", "ISO 27001", "Data encryption"] // Default security
    }competitors: service.competitors,
    marketSize: service.marketSiz, e,compliance: ["SOC 2, ", "ISO 27001"] // Default compliance
  }));
}