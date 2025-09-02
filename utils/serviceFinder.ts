// Service finder utility for searching and filtering services

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
  allServiceArrays: Service[][], categoryIncludes: string
): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
if (s && typeof s.category === 'string' && s.category.toLowerCase().includes(categoryIncludes.toLowerCase())) {'        results.push(s);'      }}
  }
  
  return results;
}

export function findServicesByTag(
allServiceArrays: Service[][], tagIncludes: string): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
      if (s && s.tags && Array.isArray(s.tags)) {
        const hasTag = s.tags.some(tag =>
          typeof tag === 'string' && tag.toLowerCase().includes(tagIncludes.toLowerCase())
        );
        if (hasTag) {
          results.push(s);
        }
      }
    }
  }
  
  return results;
}

export function findServicesByPriceRange(
  allServiceArrays: Service[][], minPrice: number,
  maxPrice: number
): Service[] {
  const results: Service[] = [];
  
  for (const arr of allServiceArrays) {
    for (const s of arr) {
      if (s && typeof s.price === 'number' && s.price >= minPrice && s.price <= maxPrice) {
        results.push(s);
      }
    }
  }
  
  return results;
}

export function searchServices(
allServiceArrays: Service[][], searchTerm: string): Service[] {
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