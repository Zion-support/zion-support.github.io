import type {_ParsedFilters} from './parser';
import type {_TalentProfile} from '../../data/talent';

export type AccessLevel = 'public' | 'member' | 'admin';

export type SearchResult = {_type: 'talent' | 'job' | 'project';
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
  relevance: number;};

function computeRelevanceScore(_text: string, _keywords: string[], _weight = 1): number {_if (!keywords.length) return 0;
  const _lower = text.toLowerCase();
  let _score = 0;
  for (const k of keywords) {
    if (lower.includes(k.toLowerCase())) score += 1 * weight;}
  return score;
}

function computeSkillOverlap(_skills: string[], _wanted: string[]): number {_const _set = new Set(_skills.map((s) => s.toLowerCase()));
  let _score = 0;
  for (const w of wanted) if (set.has(w.toLowerCase())) score += 2;
  return score;}

function budgetScore(_candidate?: number, _min?: number, _max?: number): number {_if (!candidate) return 0;
  let _score = 0;
  if (max && candidate <= max) score += 1.5;
  if (min && candidate >= min) score += 0.5;
  return score;}

function availabilityMatches(_candidate?: string, _requested?: string): boolean {_if (!requested) return true;
  if (!candidate) return false;
  return candidate.toLowerCase() === requested.toLowerCase();}

function passesRls(_visibility: AccessLevel | undefined, _access: AccessLevel): boolean {_const _level = visibility || 'public';
  const order: AccessLevel[] = ['public', _'member', _'admin'];
  return order.indexOf(access) >= order.indexOf(level);}

export function searchAll(_filters: ParsedFilters, _access: AccessLevel = 'public'): {_all: SearchResult[]; talent: SearchResult[]; jobs: SearchResult[]; projects: SearchResult[]} {_const talent: SearchResult[] = TALENT_PROFILES
    .filter(_(p) => availabilityMatches(p.availability, _filters.availability))
    .filter(_(p) => {
      if (filters.location) return p.location.toLowerCase().includes(filters.location.toLowerCase());
      return true;})
    .filter(_(p) => {_if (filters.minBudgetUsd || filters.maxBudgetUsd) {
        if (filters.minBudgetUsd && p.hourlyRateUsd < filters.minBudgetUsd) return false;
        if (filters.maxBudgetUsd && p.hourlyRateUsd > filters.maxBudgetUsd) return false;}
      return true;
    })
    .map<SearchResult>(_(p) => {_const _skillScore = computeSkillOverlap(p.skills, _filters.skills);
      const _textScore = computeRelevanceScore(`${p.name} ${_p.title} ${_p.bio}`, filters.keywords, 0.8);
      const _priceScore = budgetScore(p.hourlyRateUsd, filters.minBudgetUsd, filters.maxBudgetUsd);
      const _relevance = skillScore + textScore + priceScore;
      return {_type: 'talent', _id: p.slug, _slug: p.slug, _title: p.name, _subtitle: p.title, _location: p.location, _tags: p.skills, _hourlyRateUsd: p.hourlyRateUsd, _availability: p.availability, _verified: true, _visibility: 'public', _description: p.bio, _relevance};
    })
    .filter(_(r) => passesRls(r.visibility, access))
    .sort(_(a, _b) => b.relevance - a.relevance);

  const jobs: SearchResult[] = [];
  const projects: SearchResult[] = [];

  const _all = [...talent, ...jobs, ...projects].sort(_(a, _b) => b.relevance - a.relevance);
  return {_all, _talent, _jobs, _projects};
}

export function suggestDidYouMean(_query: string): string | null {_// naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM"
  const _q = query.toLowerCase();
  if (q.includes('devops') && q.includes('latam') && !q.includes('job')) return 'DevOps jobs in LATAM';
  if (q.includes('react') && q.includes('under') && q.match(/\d/)) return 'React developers under $' + (q.match(/\d{2, _3}/)?.[0] || '50') + '/hr';
  return null;
}