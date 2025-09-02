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
  allServiceArrays: Service[][],
  categoryIncludes: string
): Service[] {
  const results: Service[] = [];

  for (const serviceArray of allServiceArrays) {
    for (const service of serviceArray) {
      if (
        service &&
        typeof service.category === 'string' &&
        service.category.toLowerCase().includes(categoryIncludes.toLowerCase())
      ) {
        results.push(service);
      }
    }
  }

  return results;
}

export function findServicesByTag(
  allServiceArrays: Service[][],
  tagIncludes: string
): Service[] {
  const results: Service[] = [];

  for (const serviceArray of allServiceArrays) {
    for (const service of serviceArray) {
      if (service && Array.isArray(service.tags)) {
        const hasTag = service.tags.some(
          (tag) => typeof tag === 'string' && tag.toLowerCase().includes(tagIncludes.toLowerCase())
        );
        if (hasTag) {
          results.push(service);
        }
      }
    }
  }

  return results;
}

export function findServicesByPriceRange(
  allServiceArrays: Service[][],
  minPrice: number,
  maxPrice: number
): Service[] {
  const results: Service[] = [];

  for (const serviceArray of allServiceArrays) {
    for (const service of serviceArray) {
      if (
        service &&
        typeof service.price === 'number' &&
        service.price >= minPrice &&
        service.price <= maxPrice
      ) {
        results.push(service);
      }
    }
  }

  return results;
}

export function searchServices(
  allServiceArrays: Service[][],
  searchTerm: string
): Service[] {
  const results: Service[] = [];
  const term = searchTerm.toLowerCase();

  for (const serviceArray of allServiceArrays) {
    for (const service of serviceArray) {
      if (service) {
        const nameMatch = service.name && service.name.toLowerCase().includes(term);
        const descMatch = service.description && service.description.toLowerCase().includes(term);
        const categoryMatch = service.category && service.category.toLowerCase().includes(term);

        if (nameMatch || descMatch || categoryMatch) {
          results.push(service);
        }
      }
    }
  }

  return results;
}

