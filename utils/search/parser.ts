export type SearchType = 'all' | 'talent' | 'jobs' | 'projects';

export interface SearchQuery {
  query: string;
  type: SearchType;
  filters?: Record<string, any>;
  sortBy?: string;
  limit?: number;
  offset?: number;
}

export interface ParsedSearchQuery extends SearchQuery {
  keywords: string[];
  phrases: string[];
  operators: {
    include: string[];
    exclude: string[];
    exact: string[];
  };
}

  query: string,
): Promise<SearchFilters> {
  const filters: SearchFilters = {};
  if (!query || query.trim().length === 0) {
    return filters;
  }

  const words = query && query.toLowerCase().split(/\s+/);
  const keywords: string[] = [];
  const skills: string[] = [];

  // Simple keyword extraction
  for (const word of words) {
    if (word && word.length > 2) {
      keywords && keywords.push(word);
    }
  }

  if (keywords.length > 0) {
    filters.keywords = keywords;
  }

  // Extract skills (simple heuristic)
  const skillKeywords = [
    "javascript",
    "react",
    "node",
    "python",
    "java",
    "typescript",
    "vue",
    "angular",
    "php",
    "ruby",
    "go",
    "rust",
    "swift",
    "kotlin",
    "c++",
    "c#",
    "html",
    "css",
    "sql",
    "mongodb",
    "postgresql",
    "mysql",
    "redis",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "gcp",
    "git",
    "github",
    "gitlab",
    "jenkins",
    "ci/cd",
    "devops",
    "frontend",
    "backend",
    "fullstack",
    "mobile",
    "ios",
    "android",
    "web",
    "api",
    "rest",
    "graphql",
    "microservices",
    "blockchain",
    "ai",
    "ml",
    "data",
    "analytics",
    "design",
    "ui",
    "ux",
    "figma",
    "sketch",
    "adobe",
    "photoshop",
    "illustrator",
  ];

  for (const word of words) {
    if (skillKeywords && skillKeywords.includes(word)) {
      skills && skills.push(word);
    }
  }

  if (skills.length > 0) {
    filters.skills = skills;
  }

  return filters,
  keywords: [],
    skills: [],
    location: null,
    type: null;
export function parseSearchQuery(query: string, type: SearchType = 'all'): ParsedSearchQuery {
  const keywords = extractKeywords(query);
  const phrases = extractPhrases(query);
  const operators = extractOperators(query);
  
  return {
    query,
    type,
    keywords,
    phrases,
    operators
  };
}

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}
export async function parseQueryToFilters(
  query: string,)
): Promise<SearchFilters> {
pr-12325

function extractPhrases(text: string): string[] {
  const phraseRegex = /"([^"]+)"/g;
  const phrases: string[] = [];
  let match;
  
  while ((match = phraseRegex.exec(text)) !== null) {
    phrases.push(match[1]);
  }
  
  return phrases;
}

function extractOperators(text: string): {
  include: string[];
  exclude: string[];
  exact: string[];
} {
  const include: string[] = [];
  const exclude: string[] = [];
  const exact: string[] = [];
  
  // Extract +terms (include)
  const includeRegex = /\+(\w+)/g;
  let match;
  while ((match = includeRegex.exec(text)) !== null) {
    include.push(match[1]);
  }
  
  // Extract -terms (exclude)
  const excludeRegex = /-(\w+)/g;
  while ((match = excludeRegex.exec(text)) !== null) {
    exclude.push(match[1]);
  }
  
  // Extract "exact phrases" (exact)
  const exactRegex = /"([^"]+)"/g;
  while ((match = exactRegex.exec(text)) !== null) {
    exact.push(match[1]);
  }
  
  return { include, exclude, exact };
}

export function buildSearchQuery(parsed: ParsedSearchQuery): string {
  let query = parsed.query;
  
  // Add operators back to query
  if (parsed.operators.include.length > 0) {
    query += ' ' + parsed.operators.include.map(term => `+${term}`).join(' ');
  }
  
  if (parsed.operators.exclude.length > 0) {
    query += ' ' + parsed.operators.exclude.map(term => `-${term}`).join(' ');
  }
  
  return query.trim();
}
