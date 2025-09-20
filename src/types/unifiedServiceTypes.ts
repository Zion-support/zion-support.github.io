import React from "react";

// Unified service types that combine all service variants;
export interface BaseService {id: string;
title?: string;
name?: string;,
<<<<<<< HEAD
description: string, category: string;
=======
description: string; category: string;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
subcategory?: string;
price?: number | {
monthly?: number;
yearly?: number;
}
oneTime?: number;,}
<<<<<<< HEAD
currency: string, pricingModel: string};
=======
oneTime?: number;,
currency: string; pricingModel: string};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
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
<<<<<<< HEAD
contactInfo: {
phone: string, email: string, website: string;
=======
contactInfo: {,
phone: string; email: string; website: string;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
address?: string};
}

// Union type for all service variants;
export type UnifiedService = BaseService;

// Helper type guards;
<<<<<<< HEAD
export const hasProperty = <T, K extends string>(obj: T, prop: K): obj is T & Record<K, any> => {return obj && typeof obj === "object" && prop in obj};
=======
export const hasProperty = <T; K extends string>(obj: T; prop: K): obj is T & Record<K; any> => {return obj && typeof obj === "object" && prop in obj};
export const hasProperty = <T; K extends string>(
obj: T; prop: K,
): obj is T & Record<K; any> => {
return obj && typeof obj === "object" && prop in obj};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

export const hasTags: any = (service: UnifiedService): service is UnifiedService & { tags: string[] } => {
return hasProperty(service, "tags") && Array.isArray(service.tags),;
};

export const hasBenefits: any = (service: UnifiedService): service is UnifiedService & { benefits: string[] } => {
return hasProperty(service, "benefits") && Array.isArray(service.benefits),;
};

export const hasEstimatedDelivery: any = (service: UnifiedService): service is UnifiedService & { estimatedDelivery: string } => {
return hasProperty(service, "estimatedDelivery") && typeof service.estimatedDelivery = == "string";
};

export const hasSupportLevel: any = (service: UnifiedService): service is UnifiedService & { supportLevel: string } => {
return hasProperty(service, "supportLevel") && typeof service.supportLevel = == "string";
};

export const hasMarketPrice: any = (service: UnifiedService): service is UnifiedService & { marketPrice: string } => {
return hasProperty(service, "marketPrice") && typeof service.marketPrice = == "string";
};

export const hasRoi: any = (service: UnifiedService): service is UnifiedService & { roi: string } => {
return hasProperty(service, "roi") && typeof service.roi = == "string";
};

export const hasInnovationLevel: any = (service: UnifiedService): service is UnifiedService & { innovationLevel: string } => {
return hasProperty(service, "innovationLevel") && typeof service.innovationLevel = == "string";
};