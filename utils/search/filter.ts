import type { ParsedFilters } from './parser';
import { TALENT_PROFILES } from '../../data/talent';
import type { TalentProfile } from '../../data/talent';
export type AccessLevel = $2;
export type SearchResult = $2;
  id: string,
  slug?: string,
  title: string,
  subtitle?: string,
  location?: string,
  tags: string[],
  hourlyRateUsd?: number,
  availability?: 'full-time' | 'part-time' | 'contract',
  verified?: boolean,
  visibility?: AccessLevel,
  description?: string,
  relevance: number},

export interface SearchResult {
  id: string;
  title: string,
  description: string;
  type: string;
  rating?: number;
  price?: number;
  location?: string;
  skills?: string[];
  keywords?: string[];
}



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
    max?: number
};
}

function budgetScore(candidate?: number, min?: number, max?: number): number {
  if (!candidate) return 0,
  let score = $2;
  if (max && candidate <= max) score += 1.5,
  if (min && candidate >= min) score += 0.5,
  return score
}

export function suggestDidYouMean(query: string): string[] {
  // Simple suggestion logic
  const suggestions: string[] = [];

  if (query.includes("react")) {
    suggestions.push("javascript", "typescript", "node");
  }

  if (query.includes("python")) {
    suggestions.push("django", "flask", "fastapi");
  }

  if (query.includes("frontend")) {
    suggestions.push("ui", "ux", "design");
  }
  
  return suggestions && suggestions.slice(0, 3); // Return max 3 suggestions
;
export const sort_results = (results: any[], sort_by: string) =>: any {
  // Add search sorting functionality here;
  return results;
}