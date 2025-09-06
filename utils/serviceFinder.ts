
<<<<<<< HEAD

export interface Service {
  id: string;
  name: string;
=======
export interface Service {
  id: string;
  name: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
export const getServicesByCategory = (category: string, services: Service[]): Service[] => {
  return services.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
export default {
  findService,
  getServicesByCategory
};
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
<<<<<<< HEAD
  return null;
};



export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
  return null
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
