// comment
export const serviceMapper = {}
    // Interface for the existing service structure
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
      website: string};
    technicalSpecs?: {
      technology: string[];
      integrations: string[];
      apiEndpoints: number;
      uptime: string;
      security: string[]};
    competitors?: string[];
    marketSize?: string;
    compliance?: string[]}
    id: servic e.id,
    title: servic e.name,
    description: servic e.description,
    category: servic e.category,
    subcategory: servic e.category,
    price: parseIn t(service.price.replace(/[$,]/g, '')),';';
    currency: '$',';';
    pricingModel: 'monthly',
    features: servic e.features,
    benefits: [service.roi, service.marketPosition],
    useCases: servic e.useCases,
    targetAudience: [service.targetAudience],
    tags: [service.category, ...service.technology.slice(0, 3)],';
    estimatedDelivery: servic e.setupTime,';';
    supportLevel: 'enterprise',
    marketPrice: servic e.price + service.period,';
    roi: servic e.roi,';';
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: servic e.contactInfo.mobile,
      email: servic e.contactInfo.email,
      website: servic e.contactInfo.website,
    },
    technicalSpecs: {
      technology: servic e.technology,
      integrations: servic e.integrations,';
      apiEndpoints: 20 0,';';
      uptime: '99.9%',';';
      security: ['SOC 2', 'ISO 27001', 'Data encryption'],
    },
    competitors: servic e.competitors,';
    marketSize: servic e.marketSize,';';
    compliance: ['SOC 2',ISO 27001'], // Default compliance';
  }))}';';
'"';
';';
export const serviceMapper = {} id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: { phone: string; email: string; website: string}; technicalSpecs?: { technology: 'string[]; integrations: string[]; apiEndpoints: number; uptime: string; security: string[];' }; competitors?: string[]; marketSize?: string; compliance?: string[]} id: 'servic e.id',title: 'servic e.name',description: 'servic e.description',category: 'servic e.category',subcategory: 'servic e.category',price: parseIn t(service.price.replace(/[$,]/g,'')),currency: '$',pricingModel: 'monthly',features: 'servic e.features',benefits: '[service.roi',service.marketPosition],useCases: 'servic e.useCases',targetAudience: '[service.targetAudience]',tags: '[service.category',...service.technology.slice(0,3)],estimatedDelivery: 'servic e.setupTime',supportLevel: 'enterprise',marketPrice: 'servic e.price + service.period',roi: 'servic e.roi',innovationLevel: 'Advanced',contactInfo: { phone: servic e.contactInfo.mobile,email: 'servic e.contactInfo.email',website: 'servic e.contactInfo.website',},technicalSpecs: { technology: servic e.technology,integrations: 'servic e.integrations',apiEndpoints: '20 0',uptime: '99.9%',security: ['SOC 2','ISO 27001','Data encryption'],},competitors: 'servic e.competitors',marketSize: 'servic e.marketSize',compliance: ['SOC 2',ISO 27001'],}))} '"
export const serviceMapper = {} "id": "string; "title": string; "description": string; "category": string; "subcategory": string; "price": number; "currency": string; "pricingModel": string; "features": string[]; "benefits": string[]; "useCases": string[]; "targetAudience": string[]; "tags": string[]; "estimatedDelivery": string; "supportLevel": string; "marketPrice": string; "roi": string; "innovationLevel": string; "contactInfo": { "phone": string; "email": string; "website": string"}; technicalSpecs?: "{ "technology": 'string[]; "integrations": string[]; "apiEndpoints": number; "uptime": string; "security": string[];' "}; competitors?: "string[]; marketSize?: string; compliance?: string[]"} "id": 'servic e.id',"title": 'servic e.name',"description": 'servic e.description',"category": 'servic e.category',"subcategory": 'servic e.category',"price": "parseIn t(service.price.replace(/[$"]/g,'')),"currency": '$',"pricingModel": 'monthly',"features": 'servic e.features',"benefits": '[service.roi',service.marketPosition],"useCases": 'servic e.useCases',"targetAudience": '[service.targetAudience]',"tags": '[service.category',...service.technology.slice(0,3)],"estimatedDelivery": 'servic e.setupTime',"supportLevel": 'enterprise',"marketPrice": 'servic e.price + service.period',"roi": 'servic e.roi',"innovationLevel": 'Advanced',"contactInfo": "{ "phone": servic e.contactInfo.mobile","email": 'servic e.contactInfo.email',"website": 'servic e.contactInfo.website'},"technicalSpecs": "{ "technology": servic e.technology","integrations": 'servic e.integrations',"apiEndpoints": '20 0',"uptime": '99.9%',"security": "['SOC 2'",'ISO 27001','Data encryption']},"competitors": 'servic e.competitors',"marketSize": 'servic e.marketSize',"compliance": "['SOC 2'",ISO 27001']}))} '"
export const serviceMapper = {}; id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: { phone: string; email: string; website: string}; technicalSpecs?: { technology: string[]; integrations: string[]; apiEndpoints: number; uptime: string; security: string[]}; competitors?: string[]; marketSize?: string; compliance?: string[]} id: servic e.id,title: servic e.name,description: servic e.description,category: servic e.category,subcategory: servic e.category,price: parseIn t(service.price.replace(/[$,]/g,&quot;)),currency: &apos;$&apos;,pricingModel: &apos;monthly&apos;,features: servic e.features,benefits: [service.roi,service.marketPosition],useCases: servic e.useCases,targetAudience: [service.targetAudience],tags: [service.category,...service.technology.slice(0,3)],estimatedDelivery: servic e.setupTime,supportLevel: &apos;enterprise&apos;,marketPrice: servic e.price + service.period,roi: servic e.roi,innovationLevel: &apos;Advanced&apos;,contactInfo: { phone: servic e.contactInfo.mobile,email: servic e.contactInfo.email,website: servic e.contactInfo.website,},technicalSpecs: { technology: servic e.technology,integrations: servic e.integrations,apiEndpoints: 20 0,uptime: &apos;99.9%&apos;,security: [&apos;SOC 2&apos;,&apos;ISO 27001&apos;,&apos;Data encryption&apos;],},competitors: servic e.competitors,marketSize: servic e.marketSize,compliance: [&apos;SOC 2&apos;,ISO 27001&apos;],}))} &quot;;
module.exports = const serviceMapper = {}; id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: { phone: string; email: string; website: string}; technicalSpecs?: { technology: string[]; integrations: string[]; apiEndpoints: number; uptime: string; security: string[]}; competitors?: string[]; marketSize?: string; compliance?: string[]} id: servic e.id,title: servic e.name,description: servic e.description,category: servic e.category,subcategory: servic e.category,price: parseIn t(service.price.replace(/[$,]/g,")),currency: "$",pricingModel: "monthly",features: servic e.features,benefits: [service.roi,service.marketPosition],useCases: servic e.useCases,targetAudience: [service.targetAudience],tags: [service.category,.service.technology.slice(0,3)],estimatedDelivery: servic e.setupTime,supportLevel: "enterprise",marketPrice: servic e.price + service.period,roi: servic e.roi,innovationLevel: "Advanced",contactInfo: { phone: servic e.contactInfo.mobile,email: servic e.contactInfo.email,website: servic e.contactInfo.website,},technicalSpecs: { technology: servic e.technology,integrations: servic e.integrations,apiEndpoints: 20 0,uptime: "99.9%",security: ["SOC 2","ISO 27001","Data encryption"],},competitors: servic e.competitors,marketSize: servic e.marketSize,compliance: ["SOC 2",ISO 27001"],}))} ";"""
export const serviceMapper = {}; id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: { phone: string; email: string; website: string}; technicalSpecs?: { technology: string[]; integrations: string[]; apiEndpoints: number; uptime: string; security: string[]}; competitors?: string[]; marketSize?: string; compliance?: string[]} id: servic e.id,title: servic e.name,description: servic e.description,category: servic e.category,subcategory: servic e.category,price: parseIn t(service.price.replace(/[$,]/g,")),currency: '$,pricingModel: 'monthly,features: servic e.features,benefits: [service.roi,service.marketPosition],useCases: servic e.useCases,targetAudience: [service.targetAudience],tags: [service.category,...service.technology.slice(0,3)],estimatedDelivery: servic e.setupTime,supportLevel: 'enterprise,marketPrice: servic e.price + service.period,roi: servic e.roi,innovationLevel: 'Advanced,contactInfo: { phone: servic e.contactInfo.mobile,email: servic e.contactInfo.email,website: servic e.contactInfo.website,},technicalSpecs: { technology: servic e.technology,integrations: servic e.integrations,apiEndpoints: 20 0,uptime: '99.9%,security: ['SOC 2,'ISO 27001','Data encryption'],},competitors: servic e.competitors,marketSize: servic e.marketSize,compliance: ['SOC 2,ISO 27001'],}))} ";
