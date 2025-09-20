import React from "react";

// Unified service types that combine all service variants;
export interface BaseService {
<<<<<<< HEAD
id: string;
title?: string;
name?: string;,
description: string; category: string;
subcategory?: string;
price?: number | {
monthly?: number;
yearly?: number;
oneTime?: number;,
currency: string; pricingModel: string};
currency?: string;
pricingModel?: string;
features: string[];
benefits?: string[];
useCases?: string[];
targetAudience?: string[];
tags?: string[];
estimatedDelivery?: string;
supportLevel?: string;
marketPrice?: string;
roi?: string;
innovationLevel?: string;,
contactInfo: {,
phone: string; email: string; website: string;
address?: string};
=======
  id: string,
    title?: string;
  name?: string;
  description: string, category: string,
    subcategory?: string;
  price?: number | {
    monthly?: number;
    yearly?: number;
    oneTime?: number;
    currency: string, pricingModel: string,
     };
  currency?: string;
  pricingModel?: string;
  features: string[],
    benefits?: string[];
  useCases?: string[];
  targetAudience?: string[];
  tags?: string[];
  estimatedDelivery?: string;
  supportLevel?: string;
  marketPrice?: string;
  roi?: string;
  innovationLevel?: string;
  contactInfo: {
    phone: string, email: string, website: string,
    address?: string,
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}

// Union type for all service variants;
export type UnifiedService = BaseService;

// Helper type guards;
export const hasProperty = <T; K extends string>(
<<<<<<< HEAD
obj: T; prop: K,
): obj is T & Record<K; any> => {
return obj && typeof obj === "object" && prop in obj};

export const hasTags: any = (service: UnifiedService): service is UnifiedService & { tags: string[] } => {
return hasProperty(service, "tags") && Array.isArray(service.tags);
};

export const hasBenefits: any = (service: UnifiedService): service is UnifiedService & { benefits: string[] } => {
return hasProperty(service, "benefits") && Array.isArray(service.benefits);
};

export const hasEstimatedDelivery: any = (service: UnifiedService): service is UnifiedService & { estimatedDelivery: string } => {
return hasProperty(service, "estimatedDelivery") && typeof service.estimatedDelivery === "string";
};

export const hasSupportLevel: any = (service: UnifiedService): service is UnifiedService & { supportLevel: string } => {
return hasProperty(service, "supportLevel") && typeof service.supportLevel === "string";
};

export const hasMarketPrice: any = (service: UnifiedService): service is UnifiedService & { marketPrice: string } => {
return hasProperty(service, "marketPrice") && typeof service.marketPrice === "string";
};

export const hasRoi: any = (service: UnifiedService): service is UnifiedService & { roi: string } => {
return hasProperty(service, "roi") && typeof service.roi === "string";
};

export const hasInnovationLevel: any = (service: UnifiedService): service is UnifiedService & { innovationLevel: string } => {
return hasProperty(service, "innovationLevel") && typeof service.innovationLevel === "string";
};
=======
  obj: T, prop: K,
): obj is T & Record<K; any> : any => {
  return obj && typeof obj === "object" && prop in obj;
  };

export const hasTags = (service: UnifiedService): service is UnifiedService & { tags: string[] } : any => {
  return hasProperty(service, "tags") && Array.isArray(service.tags);
  };

export const hasBenefits = (service: UnifiedService): service is UnifiedService & { benefits: string[] } : any => {
  return hasProperty(service, "benefits") && Array.isArray(service.benefits);
  };

export const hasEstimatedDelivery = (service: UnifiedService): service is UnifiedService & { estimatedDelivery: string } : any => {
  return hasProperty(service, "estimatedDelivery") && typeof service.estimatedDelivery === "string";
  };

export const hasSupportLevel = (service: UnifiedService): service is UnifiedService & { supportLevel: string } : any => {
  return hasProperty(service, "supportLevel") && typeof service.supportLevel === "string";
  };

export const hasMarketPrice = (service: UnifiedService): service is UnifiedService & { marketPrice: string } : any => {
  return hasProperty(service, "marketPrice") && typeof service.marketPrice === "string";
  };

export const hasRoi = (service: UnifiedService): service is UnifiedService & { roi: string } : any => {
  return hasProperty(service, "roi") && typeof service.roi === "string";
  };

export const hasInnovationLevel = (service: UnifiedService): service is UnifiedService & { innovationLevel: string } : any => {
  return hasProperty(service, "innovationLevel") && typeof service.innovationLevel === "string";
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
