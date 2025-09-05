<<<<<<< HEAD
=======
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  features: string[];
}
export const findService = (query: string, services: Service[]): Service[] => {
  const searchTerm = query.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};
export const getServicesByCategory = (category: string, services: Service[]): Service[] => {
  return services.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
  );
};
export default {
  findService,
  getServicesByCategory
};
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
  return null;
};
<<<<<<< HEAD
export const findService = (_serviceName: string) => { return null};
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
