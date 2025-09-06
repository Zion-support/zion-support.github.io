
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface Service {
=======










export interface Service {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  features: string[];
}
export const findService = (query: string, services: Service[]): Service[] => {};
  const searchTerm = query.toLowerCase();
  return services.filter(service =>
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};
<<<<<<< HEAD
export const getServicesByCategory = (category: string, services: Service[]): Service[] => {
  return services.filter(service =>
    service.category.toLowerCase() === category.toLowerCase()
<<<<<<< HEAD
  )
=======
export const getServicesByCategory = (category: string, services: Service[]): Service[] => {}
  return services.filter(service => 
    service.category.toLowerCase() === category.toLowerCase();
  );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
export default {}
  findService,;
  getServicesByCategory;
};
<<<<<<< HEAD
// Service finder utility
export const findService = ("_serviceName": string) => {
  // Implementation placeholder
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return null;
};
<<<<<<< HEAD
=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
=======
// Service finder utility;
export const findService = ("_serviceName": string) => {};
  // Implementation placeholder;
  return null;
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





=======
  return null;
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



export const findService = (_serviceName: string) => { return null};
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
<<<<<<< HEAD
=======
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
export const findService = (_serviceName: string) => { return null};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
=======
=======
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  return null
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return null
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
