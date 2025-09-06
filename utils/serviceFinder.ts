

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
  return null;
};
=======



=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
