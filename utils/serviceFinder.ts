// Service finder utility
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
}

export const findService = (services: Service[], query: string): Service[] => {
  if (!query.trim()) return services;
  
  const searchTerm = query.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};

export const getServicesByCategory = (services: Service[], category: string): Service[] => {
  return services.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
  );
};

export default { findService, getServicesByCategory };