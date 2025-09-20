import { specializedIndustrySolutions2026 } from "../../data/2026-specialized-industry-solutions";

// Interface for the existing service structure;
export interface Service {id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[];
benefits: string[], useCases: string[];
targetAudience: string[], tags: string[];
}
estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; contactInfo: {}
email: string; website: string; phone: string};
phone: service.contactInfo.mobile; email: service.contactInfo.email;
website: service.contactInfo.website},
technicalSpecs: {technology: service.technology; integrations: service.integrations;
apiEndpoints: 200, // Default value;
uptime: service.uptime; security: ["SOC 2", "ISO 27001", "Data encryption"] // Default security},
