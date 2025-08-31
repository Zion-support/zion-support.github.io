import { specializedIndustrySolutions2026 } from '../../data/2026-specialized-industry-solutions';

// Interface for the existing service structure
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  compliance?: string[];
}

// Map 2026 services to existing service structure
export function map2026ServicesToExistingStructure(): Service[] {
  return specializedIndustrySolutions2026.map(service => ({
    id: service.id,
    title: service.name,
    description: service.description,
    category: service.category,
    subcategory: service.category, // Use category as subcategory for now
    price: parseInt(service.price.replace(/[$,]/g, '')), // Convert "$18,999" to 18999
    currency: "$",
    pricingModel: "monthly",
    features: service.features,
    benefits: [service.roi, service.marketPosition], // Use ROI and market position as benefits
    useCases: service.useCases,
    targetAudience: [service.targetAudience], // Convert string to array
    tags: [service.category, ...service.technology.slice(0, 3)], // Use category and first 3 technologies as tags
    estimatedDelivery: service.setupTime,
    supportLevel: "enterprise",
    marketPrice: service.price + service.period,
    roi: service.roi,
    innovationLevel: "Advanced",
    contactInfo: {
      phone: service.contactInfo.mobile,
      email: service.contactInfo.email,
      website: service.contactInfo.website
    },
    technicalSpecs: {
      technology: service.technology,
      integrations: service.integrations || [],
      apiEndpoints: service.apiEndpoints || 0,
      uptime: service.uptime || "99.9%",
      security: service.security || []
    },
    competitors: service.competitors,
    marketSize: service.marketSize,
    compliance: service.compliance || []
  }));
}