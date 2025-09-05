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
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
  return null;
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const findService = (_serviceName: string) => { return null};
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
