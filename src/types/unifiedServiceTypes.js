// Helper type guards
export const hasProperty = (obj, prop) => {
    return obj && typeof obj === 'object' && prop in obj;
};
export const hasTags = (service) => {
    return hasProperty(service, 'tags') && Array.isArray(service.tags);
};
export const hasBenefits = (service) => {
    return hasProperty(service, 'benefits') && Array.isArray(service.benefits);
};
export const hasEstimatedDelivery = (service) => {
    return hasProperty(service, 'estimatedDelivery') && typeof service.estimatedDelivery === 'string';
};
export const hasSupportLevel = (service) => {
    return hasProperty(service, 'supportLevel') && typeof service.supportLevel === 'string';
};
export const hasMarketPrice = (service) => {
    return hasProperty(service, 'marketPrice') && typeof service.marketPrice === 'string';
};
export const hasRoi = (service) => {
    return hasProperty(service, 'roi') && typeof service.roi === 'string';
};
export const hasInnovationLevel = (service) => {
    return hasProperty(service, 'innovationLevel') && typeof service.innovationLevel === 'string';
};
