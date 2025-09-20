// Service mapper utility for mapping 2026 specialized industry solutions

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
  contactInfo: {
    email: string;
    website: string;
    phone: string;
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

/**
 * Map 2026 specialized industry solutions to existing service structure
 */
export function map2026ServicesToExistingStructure(): Service[] {
  // Mock data for demonstration
  const mockServices = [
    {
      id: "service-1",
      title: "AI-Powered Analytics",
      description: "Advanced analytics solution powered by artificial intelligence",
      category: "Analytics",
      subcategory: "AI Analytics",
      price: 999,
      pricingModel: "Monthly",
      benefits: ["Cost reduction", "Improved insights", "Real-time analysis"],
      useCases: ["Business intelligence", "Data analysis", "Predictive modeling"],
      targetAudience: ["Enterprises", "SMBs", "Data teams"],
      tags: ["AI", "Analytics", "Machine Learning"],
      estimatedDelivery: "2-4 weeks",
      supportLevel: "24/7",
      marketPrice: "$999/month",
      roi: "300%",
      contactInfo: {
        mobile: "+1-555-0123",
        email: "contact@example.com",
        website: "https://example.com"
      },
      technology: ["React", "Node.js", "Python"],
      integrations: ["API", "Webhooks", "Database"],
      uptime: "99.9%",
      competitors: ["Competitor A", "Competitor B"],
      marketSize: "$1B+"
    }
  ];

  return mockServices.map(service => ({
    id: service.id,
    title: service.title,
    description: service.description,
    category: service.category,
    subcategory: service.subcategory,
    price: parseInt(service.price.toString()),
    currency: "USD",
    pricingModel: service.pricingModel,
    features: service.benefits,
    benefits: service.benefits,
    useCases: service.useCases,
    targetAudience: service.targetAudience,
    tags: service.tags,
    estimatedDelivery: service.estimatedDelivery,
    supportLevel: service.supportLevel,
    marketPrice: service.marketPrice,
    roi: service.roi,
    contactInfo: {
      phone: service.contactInfo.mobile,
      email: service.contactInfo.email,
      website: service.contactInfo.website,
    },
    technicalSpecs: {
      technology: service.technology,
      integrations: service.integrations,
      apiEndpoints: 200,
      uptime: service.uptime,
      security: ["SOC 2", "ISO 27001", "Data encryption"],
    },
    competitors: service.competitors,
    marketSize: service.marketSize,
    compliance: ["SOC 2", "ISO 27001"]
  }));
}

export default {
  map2026ServicesToExistingStructure,
};