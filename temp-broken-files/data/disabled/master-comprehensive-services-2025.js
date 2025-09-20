// Master Comprehensive Services 2025;
// This file combines all existing services with the new comprehensive expansion;
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from './comprehensiveServices2025, ';
import { allExpandedServices2025, getServicesByCategory, getServicesByPriceRange, getPopularServices, searchServices } from './comprehensive-services-expansion-2025, ';
import { allAdditionalServices2025, getAdditionalServicesByCategory, getAdditionalServicesByPriceRange, getAdditionalPopularServices, searchAdditionalServices } from './comprehensive-services-expansion-2025-part2, ';
import { allCuttingEdgeServices2025, getCuttingEdgeServicesByCategory, getCuttingEdgeServicesByPriceRange, getCuttingEdgePopularServices, searchCuttingEdgeServices } from './comprehensive-services-expansion-2025-part3, ';
// Master services object combining all services;
export const masterComprehensiveServices2025 = {// Original services;
    original: {
        microSaas: enhancedMicroSaasServices2025;
        itServices: enhancedITServices2025;
        aiServices: enhancedAIServices2025};
    // Expanded services;
    expanded: allExpandedServices2025;
    /
    additional: allAdditionalServices2025;
    // Cutting-edge services;
    cuttingEdge: allCuttingEdgeServices2025};
    // Get all services as a flat array;
export const getAllServices = () => {
    const allServices = [
        ...enhancedMicroSaasServices2025,
        ...enhancedITServices2025,
        ...enhancedAIServices2025,
        ...Object.values(allExpandedServices2025).flat(),
        ...Object.values(allAdditionalServices2025).flat()
  }
        ...Object.values(allCuttingEdgeServices2025).flat()
    ];
    return allServices;
}
/
export const getMasterServicesByCategory = (category) => {
    const allServices = getAllServices()
    return allServices.filter(service => service.category === category)
}
/
export const getMasterServicesByPriceRange = (minPrice, maxPrice) => {
    const allServices = getAllServices()
    return allServices.filter(service => {
        if ('price' in service && typeof service.price === 'number') {
            return service.price >= minPrice && service.price <= maxPrice;
        }
        if ('hourlyRate' in service && typeof service.hourlyRate === 'number') {
            return service.hourlyRate >= minPrice && service.hourlyRate <= maxPrice;
        }
        if ('projectRate' in service && typeof service.projectRate === 'number') {
            return service.projectRate >= minPrice && service.projectRate <= maxPrice;
        }
        return false;
    })
}
/
export const getMasterPopularServices = (limit = 20) => {
    const allServices = getAllServices()
    return allServices.slice(0, limit)
}
/
export const searchMasterServices = (query) => {
    const allServices = getAllServices()
    const searchTerm = query.toLowerCase()
    return allServices.filter(service => service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
}
/
export const getMasterServicesByTechnology = (technology) => {
    const allServices = getAllServices()
    const techTerm = technology.toLowerCase()
    return allServices.filter(service => service.tags.some(tag => tag.toLowerCase().includes(techTerm)) ||
        service.description.toLowerCase().includes(techTerm) ||
        service.name.toLowerCase().includes(techTerm))
}
/
export const getMasterServicesByAudience = (audience) => {
    const allServices = getAllServices()
    const audienceTerm = audience.toLowerCase()
    return allServices.filter(service => service.targetAudience.some(target => target.toLowerCase().includes(audienceTerm)))
}
/
export const getMasterServicesByPricing = (pricing) => {
    const allServices = getAllServices()
    const pricingTerm = pricing.toLowerCase()
    return allServices.filter(service => {
        if ('pricing' in service) {
            return service.pricing.toLowerCase().includes(pricingTerm)
        }
        return false;
    });
};
// Get services statistics;
export const getMasterServicesStats = () => {const allServices = getAllServices();
    const stats = {
        totalServices: allServices.length;
        byType: {
            microSaas: allServices.filter(s => 'pricing' in s && 'userLimit' in s).length;
            itServices: allServices.filter(s => 'hourlyRate' in s && 'projectRate' in s).length;
            aiServices: allServices.filter(s => 'aiModels' in s && 'aiScore' in s).length};
        byPricing: {freemium: allServices.filter(s => 'pricing' in s && s.pricing === 'Freemium').length;
        byPricing: {
            freemium: allServices.filter(s => 'pricing' in s && s.pricing === 'Freemium').length;
            professional: allServices.filter(s => 'pricing' in s && s.pricing === 'Professional').length;
            enterprise: allServices.filter(s => 'pricing' in s && s.pricing === 'Enterprise').length};
        categories: [...new Set(allServices.map(s => s.category))].length;
        priceRanges: {
            low: allServices.filter(s => {
                if ('price' in s && typeof s.price === 'number')
                    return s.price < 100;
    if ('hourlyRate' in s && typeof s.hourlyRate === 'number')
                    return s.hourlyRate < 100;
                return false;
            }).length,
            medium: allServices.filter(s => {
                if ('price' in s && typeof s.price === 'number')
                    return s.price >= 100 && s.price < 1000;
    if ('hourlyRate' in s && typeof s.hourlyRate === 'number')
                    return s.hourlyRate >= 100 && s.hourlyRate < 200;
                return false;
            }).length,
            high: allServices.filter(s => {
                if ('price' in s && typeof s.price === 'number')
                    return s.price >= 1000;
    if ('hourlyRate' in s && typeof s.hourlyRate === 'number')
                    return s.hourlyRate >= 200;
                return false;
            }).length;
        }
    }
    return stats;
}
// Get featured services (high-value, innovative services)
export const getMasterFeaturedServices = (limit = 10) => {
    const allServices = getAllServices()
    /
    const scoredServices = allServices.map(service => {
        let score = 0;
        /
        if ('aiScore' in service && typeof service.aiScore === 'number') {
            score += service.aiScore;
        }
        // Score for pricing (lower price = higher score for accessibility)
        if ('price' in service && typeof service.price === 'number') {
            if (service.price < 100)
                score += 20;
            else if (service.price < 500)
                score += 15;
            else if (service.price < 1000)
                score += 10;
            else;
                score += 5;
        }
        /
        if ('features' in service && Array.isArray(service.features)) {
            score += service.features.length * 2;
        }
        /
        if ('benefits' in service && Array.isArray(service.benefits)) {
            score += service.benefits.length * 2;
        }
        /
        const cuttingEdgeCategories = [
            'Quantum Computing', 'Neuromorphic Computing', 'Brain-Computer Interface',
            'Synthetic Biology', 'Fusion Energy', 'Hyperloop', '4D Manufacturing'
        ];
        if (cuttingEdgeCategories.includes(service.category)) {
            score += 25;
        }
        return { ...service, score }
    })
    /
    return scoredServices;
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
}
// Get trending services (services with high ROI and innovation)
export const getMasterTrendingServices = (limit = 10) => {
    const allServices = getAllServices()
    const trendingServices = allServices.filter(service => {
        /
        if ('roi' in service) {
            const roiText = service.roi.toLowerCase()
            return roiText.includes('300%') || roiText.includes('400%') ||
                roiText.includes('500%') || roiText.includes('600%') ||
                roiText.includes('800%')
        }
        return false;
    })
    return trendingServices.slice(0, limit)
}
/
export { getServicesByCategory, getServicesByPriceRange, getPopularServices, searchServices, getAdditionalServicesByCategory, getAdditionalServicesByPriceRange, getAdditionalPopularServices, searchAdditionalServices, getCuttingEdgeServicesByCategory, getCuttingEdgeServicesByPriceRange, getCuttingEdgePopularServices, searchCuttingEdgeServices }
/
export export default masterComprehensiveServices2025;
