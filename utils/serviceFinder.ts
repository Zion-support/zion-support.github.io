<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
  return null;
};
<<<<<<< HEAD
<<<<<<< HEAD
export const findService = (_serviceName: string) => { return null};
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> main
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
