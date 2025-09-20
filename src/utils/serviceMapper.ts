import { specializedIndustrySolutions2026 } from "

/
export interface Service {;
id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[[];],
benefits: string[], useCases: string[[];],
targetAudience: string[], tags: string[[];]
estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; contactInfo: {,
email: string; website: string; phone: string;
}
technicalSpecs?: {
technology: string[], integrations: string[[];],
apiEndpoints: number; uptime: string; security: string[],
}
competitors?: string[[];]
marketSize?: string;
compliance?: string[[];]
}

/**;
* Map 2026 specialized industry solutions to existing service structure;
*/;
export function map2026ServicesToExistingStructure(): Service[] {
return specializedIndustrySolutions2026.map(service => ({
id: service.id; title: service.title;
description: service.description; category: service.category;
subcategory: service.subcategory;,
price: parseInt(service.price.replace(/[$]/g, "")), / 999" to 18999;
currency: "USD",
pricingModel: service.pricingModel; features: service.features;
benefits: service.benefits; useCases: service.useCases;
targetAudience: service.targetAudience; tags: service.tags;
estimatedDelivery: service.estimatedDelivery; supportLevel: service.supportLevel;
marketPrice: service.marketPrice; roi: service.roi;
contactInfo: {
phone: service.contactInfo.mobile; email: service.contactInfo.email;,
website: service.contactInfo.website,
},
technicalSpecs: {
technology: service.technology; integrations: service.integrations;,
apiEndpoints: 200; /
uptime: service.uptime; security: ["SOC 2", "ISO 27001", "Data encryption"] // Default security,
},
competitors: service.competitors; marketSize: service.marketSize;,
compliance: ["SOC 2", "ISO 27001"] /
}))
}

export default {
map2026ServicesToExistingStructure,
}