import { specializedIndustrySolutions2026 } from "../../data/2026-specialized-industry-solutions";

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
  competitiveAdvantage?: string[];
  implementationSteps?: string[];
  successMetrics?: string[];
  riskMitigation?: string[];
}

// Function to map services to the new format
export const mapServiceToNewFormat = (service: any): Service => {
  return {
    id: service.id || service.serviceId || `service-${Date.now()}`,
    title: service.title || service.name || service.serviceName || 'Untitled Service',
    description: service.description || service.summary || service.overview || 'No description available',
    category: service.category || service.serviceCategory || 'General',
    subcategory: service.subcategory || service.serviceSubcategory || 'Standard',
    price: service.price || service.cost || service.rate || 0,
    currency: service.currency || 'USD',
    pricingModel: service.pricingModel || service.pricing || 'Fixed',
    features: service.features || service.capabilities || service.functionality || [],
    benefits: service.benefits || service.advantages || service.value || [],
    useCases: service.useCases || service.applications || service.scenarios || [],
    targetAudience: service.targetAudience || service.audience || service.users || [],
    tags: service.tags || service.keywords || service.labels || [],
    estimatedDelivery: service.estimatedDelivery || service.delivery || service.timeline || 'TBD',
    supportLevel: service.supportLevel || service.support || service.assistance || 'Standard',
    marketPrice: service.marketPrice || service.competitivePrice || 'Contact for pricing',
    roi: service.roi || service.returnOnInvestment || service.benefit || 'Varies',
    innovationLevel: service.innovationLevel || service.innovation || service.advancement || 'Standard',
    contactInfo: {
      phone: service.contactInfo?.phone || service.phone || '+1-555-0000',
      email: service.contactInfo?.email || service.email || 'info@ziontechgroup.com',
      website: service.contactInfo?.website || service.website || 'https://ziontechgroup.com'
    },
    technicalSpecs: service.technicalSpecs || {
      technology: service.technology || [],
      integrations: service.integrations || [],
      apiEndpoints: service.apiEndpoints || 0,
      uptime: service.uptime || '99.9%',
      security: service.security || []
    },
    competitiveAdvantage: service.competitiveAdvantage || service.advantages || [],
    implementationSteps: service.implementationSteps || service.steps || service.process || [],
    successMetrics: service.successMetrics || service.metrics || service.kpis || [],
    riskMitigation: service.riskMitigation || service.risks || service.mitigation || []
  };
};

// Export the specialized solutions
export { specializedIndustrySolutions2026 };
