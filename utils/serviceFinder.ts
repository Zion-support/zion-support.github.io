<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export const findService = (_serviceName: string) => { return null};
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
