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

function computeRelevanceScore(text: string, keywords: string[], weight = $2;
  const lower = text.toLowerCase($2);
  let score = $2;
  for (const k of keywords) {
    if (lower.includes(k.toLowerCase())) score += 1 * weight
  }
  return score
}

function computeSkillOverlap(skills: string[], wanted: string[]): number {
  const set = $2;
  let score = $2;
  for (const w of wanted) if (set.has(w.toLowerCase())) score += 2,
  return score
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

  return suggestions.slice(0, 3); // Return max 3 suggestions
}
