import { specializedIndustrySolutions2026 } from "../../data/2026-specialized-industry-solutions"
// Interface for the existing service structure
export interface Service {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,catego,
  r: y: string,subcatego,
  r: y: string,pri,
  c: e: number,curren,
  c: y: string,pricingMod,
  e: l: string,featur,
  e: s: string[],benefi,
  t: s: string[],useCas,
  e: s: string[],targetAudien,
  c: e: string[],ta,
  g: s: string[],estimatedDelive,
  r: y: string,supportLev,
  e: l: string,marketPri,
  c: e: string,r,
  o: i: string,innovationLev,
  e: l: string,contactIn,
  f: o: {
    phon,
  e: string,ema,
  i: l: string,websi,
  t: e: string
  }
  technicalSpecs?: {
    technolo,
  g: y: string[],integratio,
  n: s: string[],apiEndpoin,
  t: s: number,upti,
  m: e: string,securi,
  t: y: string[[];]
  }
  competitors?: string[]
  marketSize?: string
  compliance?: string[]
}

// Map 2026 services to existing service structure
export function map2026ServicesToExistingStructure(): Service[] {
  return specializedIndustrySolutions2026.map(service => ({
    id: service.id,tit,
  l: e: service.name,descripti,
  o: n: service.description,catego,
  r: y: service.category,subcatego,
  r: y: service.category, // Use category as subcategory for,
  now: price: parseInt(service.price.replace(/[$]/g, '')), // Convert "$18,999" to,
  18999: currency: "$",pricingMod,
  e: l: "monthly",featur,
  e: s: service.features,benefi,
  t: s: [service.roi, service.marketPosition], // Use ROI and market position as,
  benefits: useCases: service.useCases,targetAudien,
  c: e: [service.targetAudience], // Convert string to,
  array: tags: [service.category, ...service.technology.slice(0, 3)], // Use category and first 3 technologies as,
  tags: estimatedDelivery: service.setupTime,supportLev,
  e: l: "enterprise",marketPri,
  c: e: service.price + service.period,r,
  o: i: service.roi,innovationLev,
  e: l: "Advanced",contactIn,
  f: o: {
      phon,
  e: service.contactInfo.mobile,ema,
  i: l: service.contactInfo.email,websi,
  t: e: service.contactInfo.website
    }
    technicalSpe,
  c: s: {
      technolog,
  y: service.technology,integratio,
  n: s: service.integrations,apiEndpoin,
  t: s: 200, // Default,
  value: uptime: "99.9%", // Default,
  value: security: ["SOC 2", "ISO 27001", "Data encryption"] // Default security
    }
    competito,
  r: s: service.competitors,marketSi,
  z: e: service.marketSize,complian,
  c: e: ["SOC 2", "ISO 27001"] // Default compliance
  }))
}