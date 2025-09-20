import { specializedIndustrySolutions2026 } from "../../data/2026-specialized-industry-solutions";

// Interface for the existing service structure;
<<<<<<< HEAD
export interface Service {
id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[];,
benefits: string[], useCases: string[];,
targetAudience: string[], tags: string[];,
estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; contactInfo: {,
email: string; website: string; phone: string,
};
technicalSpecs?: {
technology: string[], integrations: string[];,
apiEndpoints: number; uptime: string; security: string[],
};
=======
export interface Service {id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[];
benefits: string[], useCases: string[];
targetAudience: string[], tags: string[];
}
estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; contactInfo: {,}
email: string; website: string; phone: string};
technicalSpecs?: {technology: string[], integrations: string[];
apiEndpoints: number; uptime: string; security: string[]};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
competitors?: string[];
marketSize?: string;
compliance?: string[];
}

/**;
* Map 2026 specialized industry solutions to existing service structure;
*/;
<<<<<<< HEAD
export function map2026ServicesToExistingStructure(): Service[] {
return specializedIndustrySolutions2026.map(service => ({
id: service.id; title: service.title;,
description: service.description; category: service.category;,
subcategory: service.subcategory;,
=======
export function map2026ServicesToExistingStructure(): Service[] {return specializedIndustrySolutions2026.map(service => ({
id: service.id; title: service.title;
description: service.description; category: service.category;
subcategory: service.subcategory;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
price: parseInt(service.price.replace(/[$]/g, "")), // Convert "$18; 999" to 18999;
currency: "USD",
pricingModel: service.pricingModel; features: service.features;
benefits: service.benefits; useCases: service.useCases;
targetAudience: service.targetAudience; tags: service.tags;
estimatedDelivery: service.estimatedDelivery; supportLevel: service.supportLevel;
<<<<<<< HEAD
marketPrice: service.marketPrice; roi: service.roi;,
contactInfo: {,
phone: service.contactInfo.mobile; email: service.contactInfo.email;,
website: service.contactInfo.website,
},
technicalSpecs: {,
technology: service.technology; integrations: service.integrations;,
=======
marketPrice: service.marketPrice; roi: service.roi;
contactInfo: {
phone: service.contactInfo.mobile; email: service.contactInfo.email;
website: service.contactInfo.website},
technicalSpecs: {technology: service.technology; integrations: service.integrations;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
apiEndpoints: 200, // Default value;
uptime: service.uptime; security: ["SOC 2", "ISO 27001", "Data encryption"] // Default security},
competitors: service.competitors; marketSize: service.marketSize;
compliance: ["SOC 2", "ISO 27001"] // Default compliance;
}));
}

export default {map2026ServicesToExistingStructure};