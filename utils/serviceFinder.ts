<<<<<<< HEAD
// Service finder utility for searching and filtering services;
=======
// Service finder utility for searching and filtering services

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  features?: string[];
  tags?: string[];
  [key: string]: any;
}

export function findServicesByCategory(
<<<<<<< HEAD
  allServiceArrays: Service[][], categoryIncludes: string
=======
  allServiceArrays: Service[][],
  categoryIncludes: string
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
<<<<<<< HEAD
      if (s && typeof s.category === 'string' && s.category.toLowerCase().includes(categoryIncludes.toLowerCase())) {'        results.push(s);'      }
=======
      if (s && typeof s.category === 'string' && s.category.toLowerCase().includes(categoryIncludes.toLowerCase())) {
        results.push(s);
      }
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    }
  }
  
  return results;
}

export function findServicesByTag(
<<<<<<< HEAD
  allServiceArrays: Service[][], tagIncludes: string
=======
  allServiceArrays: Service[][],
  tagIncludes: string
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
      if (s && s.tags && Array.isArray(s.tags)) {
<<<<<<< HEAD
        const hasTag = s.tags.some(tag => ;
          typeof tag === 'string' && tag.toLowerCase().includes(tagIncludes.toLowerCase())'        );'        if (hasTag) {
=======
        const hasTag = s.tags.some(tag => 
          typeof tag === 'string' && tag.toLowerCase().includes(tagIncludes.toLowerCase())
        );
        if (hasTag) {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
          results.push(s);
        }
      }
    }
  }
  
  return results;
}

export function findServicesByPriceRange(
<<<<<<< HEAD
  allServiceArrays: Service[][], minPrice: number,;
=======
  allServiceArrays: Service[][],
  minPrice: number,
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  maxPrice: number
): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
<<<<<<< HEAD
      if (s && typeof s.price === 'number' && s.price >= minPrice && s.price <= maxPrice) {'        results.push(s);'      }
=======
      if (s && typeof s.price === 'number' && s.price >= minPrice && s.price <= maxPrice) {
        results.push(s);
      }
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    }
  }
  
  return results;
}

export function searchServices(
<<<<<<< HEAD
  allServiceArrays: Service[][], searchTerm: string
=======
  allServiceArrays: Service[][],
  searchTerm: string
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
): Service[] {
  const results: Service[] = [];
  const term = searchTerm.toLowerCase();
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
      if (s) {
        const nameMatch = s.name && s.name.toLowerCase().includes(term);
        const descMatch = s.description && s.description.toLowerCase().includes(term);
        const categoryMatch = s.category && s.category.toLowerCase().includes(term);
        
        if (nameMatch || descMatch || categoryMatch) {
          results.push(s);
        }
      }
    }
  }
  
  return results;
}