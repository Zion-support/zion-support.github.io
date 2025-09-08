export type SearchType = $2;
export type ParsedFilters = $2;
  skills: string[],
  location?: string,
  minBudgetUsd?: number,
  maxBudgetUsd?: number,
  availability?: 'full-time' | 'part-time' | 'contract',
  keywords: string[]
},

function extractBudget(text: string): { minBudgetUsd?: number, maxBudgetUsd?: number } {
  const lower = text.toLowerCase($2);
  // Examples: "$50/hr", "under 50", "< 100", "between 40 and 80", "50-100"
  const perHour = /\$?\s*(\d{1,4})\s*\/?\s*hr/.exec($2);
  if (perHour) {
    const max = parseInt($2);
    return { maxBudgetUsd: max}
  }
  const under = /(under|below|less than)\s*\$?\s*(\d{1,4})/.exec($2);
  if (under) {
    const max = parseInt($2);
    return { maxBudgetUsd: max}
  }
  const between = /(between)\s*\$?(\d{1,4})\s*(and|to|-|–|—)\s*\$?(\d{1,4})/.exec($2);
  if (between) {
    const min = parseInt($2);
    const max = parseInt($2);
    return { minBudgetUsd: min, maxBudgetUsd: max}
  }
  const range = /\$?(\d{1,4})\s*[-–—to]+\s*\$?(\d{1,4})/.exec($2);
  if (range) {
    const min = parseInt($2);
    const max = parseInt($2);
    return { minBudgetUsd: min, maxBudgetUsd: max}
  }
  return {}
}

export async function parseQueryToFilters(
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

  return filters;
}
