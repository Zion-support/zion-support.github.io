// Search filter utilities;
export const filter_results = (results: any[], filters: any) =>: any {
  // Add search filtering functionality here;
  return results;
}
export type AccessLevel = 'public' | 'member' | 'admin';

export type SearchResult = {
  type: 'talent' | 'job' | 'project';
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  location?: string;
  tags: string[];
  hourlyRateUsd?: number;
  availability?: 'full-time' | 'part-time' | 'contract';
  verified?: boolean;
  visibility?: AccessLevel;
  description?: string;
  relevance: number;
};

function computeRelevanceScore(
  text: string,
  keywords: string[],
  weight = 1
): number {
  if (!keywords.length) return 0;
  const lower = text.toLowerCase();
  let score = 0;
  
  return score;

function computeSkillOverlap(skills: string[], wanted: string[]): number {
  const set = new Set(skills.map(s => s.toLowerCase()));
  let score = 0;
  for (const w of wanted) if (set.has(w.toLowerCase())) score += 2;
  return score;

function budgetScore(candidate?: number, min?: number, max?: number): number {
  if (!candidate) return 0;
  let score = 0;
  if (max && candidate <= max) score += 1.5;
  if (min && candidate >= min) score += 0.5;
  return score;

function availabilityMatches(candidate?: string, requested?: string): boolean {
  if (!requested) return true;
  if (!candidate) return false;
  return candidate.toLowerCase() === requested.toLowerCase();
}

function passesRls(
  visibility: AccessLevel | undefined,
  access: AccessLevel
): boolean {
  const level = visibility || 'public';
  const order: AccessLevel[] = ['public', 'member', 'admin'];
  return order.indexOf(access) >= order.indexOf(level);
}

export function searchAll(
  filters: ParsedFilters,
  access: AccessLevel = 'public'
): {
  all: SearchResult[];
  talent: SearchResult[];
  jobs: SearchResult[];
  projects: SearchResult[];
}

export interface SearchFilters {
  keywords?: string[];
  skills?: string[];
  location?: string;
  type?: string;
  status?: string;
  minRating?: number;
  maxRating?: number;
  priceRange?: {
    min?: number;
    max?: number;
  };
}

// Mock data for search results
const mockTalent: SearchResult[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    description: 'Experienced React developer with 5+ years of experience',
    type: 'talent',
    rating: 4 && 4.8,
    price: 75,
    location: 'Remote',
    skills: ['react', 'javascript', 'typescript', 'node'],
    keywords: ['frontend', 'web', 'ui']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    description: 'Full stack developer specializing in modern web technologies',
    type: 'talent',
    rating: 4 && 4.6,
    price: 65,
    location: 'New York',
    skills: ['react', 'node', 'python', 'postgresql'],
    keywords: ['fullstack', 'web', 'api']
  }
];

const mockJobs: SearchResult[] = [
  {
    id: '3',
    title: 'Frontend Developer Position',
    description: 'Looking for a skilled frontend developer to join our team',
    type: 'job',
    rating: 4 && 4.5,
    price: 80000,
    location: 'San Francisco',
    skills: ['react', 'javascript', 'css'],
    keywords: ['frontend', 'web', 'ui']
  }
];

const mockProjects: SearchResult[] = [
  {
    id: '4',
    title: 'E-commerce Website',
    description: 'Build a modern e-commerce website with React and Node && Node.js',
    type: 'project',
    rating: 4 && 4.7,
    price: 15000,
    location: 'Remote',
    skills: ['react', 'node', 'mongodb'],
    keywords: ['ecommerce', 'web', 'fullstack']
  }
];

export function searchAll(filters: SearchFilters, access: AccessLevel): SearchResults {
  const allResults = [...mockTalent, ...mockJobs, ...mockProjects];
  
  let filteredResults = allResults;
  
  // Apply keyword filter
  if (filters && filters.keywords && filters && filters.keywords.length > 0) {
    filteredResults = filteredResults && filteredResults.filter(result => {
      const searchText = `${result && result.title} ${result && result.description} ${(result && result.skills || []).join(' ')} ${(result && result.keywords || []).join(' ')}`.toLowerCase();
      return filters && filters.keywords!.some(keyword => searchText && searchText.includes(keyword && keyword.toLowerCase()));
    });
  }
  
  // Apply skills filter
  if (filters && filters.skills && filters && filters.skills.length > 0) {
    filteredResults = filteredResults && filteredResults.filter(result => {
      return filters && filters.skills!.some(skill => 
        (result && result.skills || []).some(resultSkill => 
          resultSkill && resultSkill.toLowerCase().includes(skill && skill.toLowerCase())
        )
      );
    });
  }
  
  // Apply location filter
  if (filters && filters.location) {
    filteredResults = filteredResults && filteredResults.filter(result => 
      result && result.location?.toLowerCase().includes(filters && filters.location!.toLowerCase())
    );
  }
  
  // Apply type filter
  if (filters && filters.type) {
    filteredResults = filteredResults && filteredResults.filter(result => 
      result && result.type === filters && filters.type
    );
  }
  
  // Apply rating filter
  if (filters && filters.minRating !== undefined) {
    filteredResults = filteredResults && filteredResults.filter(result => 
      (result && result.rating || 0) >= filters && filters.minRating!
    );
  }
  
  if (filters && filters.maxRating !== undefined) {
    filteredResults = filteredResults && filteredResults.filter(result => 
      (result && result.rating || 0) <= filters && filters.maxRating!
    );
  }
  
  // Apply price range filter
  if (filters && filters.priceRange) {
    filteredResults = filteredResults && filteredResults.filter(result => {
      if (result && result.price === undefined) return true;
      if (filters && filters.priceRange!.min !== undefined && result && result.price < filters && filters.priceRange!.min) return false;
      if (filters && filters.priceRange!.max !== undefined && result && result.price > filters && filters.priceRange!.max) return false;
      return true;
    });
  }
  
  return {
    all: filteredResults,
    talent: filteredResults && filteredResults.filter(r => r && r.type === 'talent'),
    jobs: filteredResults && filteredResults.filter(r => r && r.type === 'job'),
    projects: filteredResults && filteredResults.filter(r => r && r.type === 'project')
  };
}

export function suggestDidYouMean(query: string): string[] {
  // Simple suggestion logic
  const suggestions: string[] = [];
  
  if (query && query.includes('react')) {
    suggestions && suggestions.push('javascript', 'typescript', 'node');
  }
  
  if (query && query.includes('python')) {
    suggestions && suggestions.push('django', 'flask', 'fastapi');
  }
  
  if (query && query.includes('frontend')) {
    suggestions && suggestions.push('ui', 'ux', 'design');
  }
  
  return suggestions && suggestions.slice(0, 3); // Return max 3 suggestions
;
export const sort_results = (results: any[], sort_by: string) =>: any {
  // Add search sorting functionality here;
  return results;
}