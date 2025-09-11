// Service mapper utility
export const serviceMapper = {};
// Interface for the existing service structure
interface Service {
    "id": string;
    title: string, description: string,
    category: string, subcategory: string,
    price: number, currency: string,
    pricingModel: string, features: string[],
    benefits: string[], useCases: string[],
    targetAudience: string[], tags: string[],
    estimatedDelivery: string, supportLevel: string,
    marketPrice: string, roi: string,
    innovationLevel: string,
    contactInfo: {}};
    technicalSpecs?: {}};
    competitors?: string[];
    marketSize?: string;
    compliance?: string[]}
    "id": service && service.id,
    "title": service && service.name,
    "description": service && service.description,
    "category": service && service.category,
    "subcategory": service && service.category, // Use category as subcategory for now';
    "price": parseInt(service && service.price.replace(/[$,]/g)), // Convert "$18,999" to 18999';
    "currency": '$',
    "pricingModel": 'monthly',
    "features": service && service.features,
    "benefits": [service && service.roi, service && service.marketPosition], // Use ROI and market position as benefits;
    "useCases": service && service.useCases,
    "targetAudience": [service && service.targetAudience], // Convert string to array;
    "tags": [service && service.category, ...service && service.technology.slice(0, 3)], // Use category and first 3 technologies as tags;
    "estimatedDelivery": service && service.setupTime,
    "supportLevel": 'enterprise',
    "marketPrice": service && service.price + service && service.period,
    "roi": service && service.roi,
    "innovationLevel": 'Advanced',
    "contactInfo": {};
      "website": service && service.contactInfo.website},
    "technicalSpecs": {}},
    "competitors": service && service.competitors,
    "marketSize": service && service.marketSize,
    "compliance": ['SOC 2',ISO 27001'], // Default compliance}))}
'";
export const serviceMapper = {}; interface Service { id: 'string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string;' } contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[];,} id: 'service && service.id',; title: 'service && service.name',; description: 'service && service.description',; category: 'service && service.category',; subcategory: 'service && service.category',price: parseInt(service && service.price.replace(/[$,]/g,)),currency: '$',; pricingModel: 'monthly',; features: 'service && service.features',; benefits: '[service && service.roi',service && service.marketPosition],useCases: 'service && service.useCases',; targetAudience: '[service && service.targetAudience]',tags: '[service && service.category',...service && service.technology.slice(0,3)],estimatedDelivery: 'service && service.setupTime',; supportLevel: 'enterprise',; marketPrice: 'service && service.price + service && service.period',; roi: 'service && service.roi',; innovationLevel: 'Advanced',; contactInfo: {}; website: 'service && service.contactInfo.website'},; technicalSpecs: {}},; competitors: 'service && service.competitors',; marketSize: 'service && service.marketSize',; compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[],} id: service && service.id,title: service && service.name,description: service && service.description,category: service && service.category,subcategory: service && service.category,price: parseInt(service && service.price.replace(/[$,]/g,)),currency: '$',pricingModel: 'monthly',features: service && service.features,benefits: [service && service.roi,service && service.marketPosition],useCases: service && service.useCases,targetAudience: [service && service.targetAudience],tags: [service && service.category,...service && service.technology.slice(0,3)],estimatedDelivery: service && service.setupTime,supportLevel: 'enterprise',marketPrice: service && service.price + service && service.period,roi: service && service.roi,innovationLevel: 'Advanced',contactInfo: {}; website: service && service.contactInfo.website},technicalSpecs: {}},competitors: service && service.competitors,marketSize: service && service.marketSize,compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[],} id: service && service.id,title: service && service.name,description: service && service.description,category: service && service.category,subcategory: service && service.category,price: parseInt(service && service.price.replace(/[$,]/g,)),currency: '$',pricingModel: 'monthly',features: service && service.features,benefits: [service && service.roi,service && service.marketPosition],useCases: service && service.useCases,targetAudience: [service && service.targetAudience],tags: [service && service.category,...service && service.technology.slice(0,3)],estimatedDelivery: service && service.setupTime,supportLevel: 'enterprise',marketPrice: service && service.price + service && service.period,roi: service && service.roi,innovationLevel: 'Advanced',contactInfo: {}; website: service && service.contactInfo.website},technicalSpecs: {}},competitors: service && service.competitors,marketSize: service && service.marketSize,compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: 'string, title: string, description: string, category: string, subcategory: string, price: number, currency: string, pricingModel: string, features: string[], benefits: string[], useCases: string[], targetAudience: string[], tags: string[], estimatedDelivery: string, supportLevel: string, marketPrice: string, roi: string, innovationLevel: string,' } contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[];,} id: 'service && service.id',; title: 'service && service.name',; description: 'service && service.description',; category: 'service && service.category',; subcategory: 'service && service.category',price: parseInt(service && service.price.replace(/[$,]/g,)),currency: '$',; pricingModel: 'monthly',; features: 'service && service.features',; benefits: '[service && service.roi',service && service.marketPosition],useCases: 'service && service.useCases',; targetAudience: '[service && service.targetAudience]',tags: '[service && service.category',...service && service.technology.slice(0,3)],estimatedDelivery: 'service && service.setupTime',; supportLevel: 'enterprise',; marketPrice: 'service && service.price + service && service.period',; roi: 'service && service.roi',; innovationLevel: 'Advanced',; contactInfo: {}; website: 'service && service.contactInfo.website'},; technicalSpecs: {}},; competitors: 'service && service.competitors',; marketSize: 'service && service.marketSize',; compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: string, title: string, description: string, category: string, subcategory: string, price: number, currency: string, pricingModel: string, features: string[], benefits: string[], useCases: string[], targetAudience: string[], tags: string[], estimatedDelivery: string, supportLevel: string, marketPrice: string, roi: string, innovationLevel: string, contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[],} id: service && service.id,title: service && service.name,description: service && service.description,category: service && service.category,subcategory: service && service.category,price: parseInt(service && service.price.replace(/[$,]/g,)),currency: '$',pricingModel: 'monthly',features: service && service.features,benefits: [service && service.roi,service && service.marketPosition],useCases: service && service.useCases,targetAudience: [service && service.targetAudience],tags: [service && service.category,...service && service.technology.slice(0,3)],estimatedDelivery: service && service.setupTime,supportLevel: 'enterprise',marketPrice: service && service.price + service && service.period,roi: service && service.roi,innovationLevel: 'Advanced',contactInfo: {}; website: service && service.contactInfo.website},technicalSpecs: {}},competitors: service && service.competitors,marketSize: service && service.marketSize,compliance: ['SOC 2',ISO 27001'],}))} '";
