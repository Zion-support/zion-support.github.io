import { enhancedServices2025 } from './enhanced-services-2025';
import { comprehensiveServices2025Enhanced } from './comprehensive-services-2025-enhanced';
import { comprehensivePricingGuide2025 } from './comprehensive-pricing-guide-2025';

export interface ServiceIndex {
    id: string;
    name: string;
    category: string;
    description: string;
    pricing: string;
    link: string;
    source: 'existing' | 'new' | 'pricing-guide';
}

// Combine all services into a comprehensive index
export const comprehensiveServicesIndex2025: ServiceIndex[] = [
    // Existing services from enhanced-services-2025.ts
    ...enhancedServices2025.map(service => ({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        pricing: service.pricing.monthly,
        link: service.link,
        source: 'existing' as const
    })),

    // New services from comprehensive-services-2025-enhanced.ts
    ...comprehensiveServices2025Enhanced.map(service => ({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        pricing: service.pricing.monthly,
        link: service.link,
        source: 'new' as const
    })),

    // Services from comprehensive-pricing-guide-2025.ts
    ...comprehensivePricingGuide2025.map(service => ({
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description,
        pricing: service.pricing[0]?.price || 'Custom',
        link: `/services/${service.id}`,
        source: 'pricing-guide' as const
    }))
];

// Get services by category
export const getServicesByCategory = (category: string) => {
    return comprehensiveServicesIndex2025.filter(service => service.category === category);
};

// Get services by source
export const getServicesBySource = (source: 'existing' | 'new' | 'pricing-guide') => {
    return comprehensiveServicesIndex2025.filter(service => service.source === source);
};

// Search services
export const searchServices = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return comprehensiveServicesIndex2025.filter(service =>
        service.name.toLowerCase().includes(lowercaseQuery) ||
        service.description.toLowerCase().includes(lowercaseQuery) ||
        service.category.toLowerCase().includes(lowercaseQuery)
    );
};

// Get unique categories
export const getUniqueCategories = () => {
    const categories = comprehensiveServicesIndex2025.map(service => service.category);
    return [...new Set(categories)];
};

// Get service statistics
export const getServiceStats = () => {
    const totalServices = comprehensiveServicesIndex2025.length;
    const existingServices = getServicesBySource('existing').length;
    const newServices = getServicesBySource('new').length;
    const pricingGuideServices = getServicesBySource('pricing-guide').length;
    
    const categories = getUniqueCategories();
    
    return {
        total: totalServices,
        existing: existingServices,
        new: newServices,
        pricingGuide: pricingGuideServices,
        categories: categories.length,
        categoryBreakdown: categories.map(category => ({
            name: category,
            count: getServicesByCategory(category).length
        }))
    };
};

export default comprehensiveServicesIndex2025;