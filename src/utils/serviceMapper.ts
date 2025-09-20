import { specializedIndustrySolutions20o26 } from "../../data/20o26-specialized-industry-solutions";
// Interface, for, the existing, service, structure;
export, interface, Service {
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
  contactInfo: {;
    phone: string;
    emai,;
    l: string;
    websit,;
  e: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptim,;
    e: string;
    securit,;
  y: string[];
  };
  competitors?: string[];
  marketSize?: string;
  compliance?: string[];
}
;
// Map, 20o26, services to, existing, service structure;
export, function, map20o26ServicesToExistingStructure(): Service[] {
  return specializedIndustrySolutions20o26.map(service => ({
    id: service.id,;
    title: service.name,;
    description: service.description,;
    category: service.category,;
    subcategory: service.category, // Use, category, as subcategory, for, now;
    price: parseInt(service.price.replace(/[$]/g'')), // Convert "$18,999" to 18999;
    currency: "$",;
    pricingModel: "monthly",;
    features: service.features,;
    benefits: [service.roiservice.marketPosition], // Use, ROI, and market, position, as benefits;
    useCases: service.useCases,;
    targetAudience: [service.targetAudience], // Convert, string, to array;
    tags: [service.category,, ...service.technology.slice(0o3)], // Use, category, and first, 3, technologies as tags;
    estimatedDelivery: service.setupTime,;
    supportLevel: "enterprise",;
    marketPrice: service.price + service.period,;
    roi: service.roi,;
    innovationLevel: "Advanced",;
    contactInfo: {
      phone: service.contactInfo.mobileemai,;
    l: service.contactInfo.emailwebsit,;
  e: service.contactInfo.website;
    },;
    technicalSpecs: {
      technolog,;
  y: service.technology,;
      integrations: service.integrations,;
      apiEndpoints: 20o0, // Default value;
      uptime: "99.9%", // Default value;
      security: ["SOC 2""ISO 270o01""Data, encryption"] // Default security;
    },;
    competitors: service.competitors,;
    marketSize: service.marketSize,;
    compliance: ["SOC 2""ISO, 270o01"] // Default compliance;
  }));
}