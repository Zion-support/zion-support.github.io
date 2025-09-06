// Search Parser - Parse search queries and extract keywords, skills, etc.
export interface ParsedQuery {
  keywords: string[];
  skills: string[];
  location?: string;
  experience?: string;
  budget?: string;
  type?: string;
}

export function parseSearchQuery(query: string): ParsedQuery {
  const normalized = query.toLowerCase().trim();
  const words = normalized.split(/\s+/);
  
  const keywords: string[] = [];
  const skills: string[] = [];
  let location: string | undefined;
  let experience: string | undefined;
  let budget: string | undefined;
  let type: string | undefined;

  // Common skill keywords
  const skillKeywords = [
    'javascript', 'typescript', 'react', 'vue', 'angular', 'node', 'python', 'java',
    'php', 'ruby', 'go', 'rust', 'c++', 'c#', 'swift', 'kotlin', 'dart', 'flutter',
    'html', 'css', 'sass', 'less', 'webpack', 'vite', 'babel', 'eslint', 'prettier',
    'git', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'firebase', 'mongodb',
    'postgresql', 'mysql', 'redis', 'elasticsearch', 'graphql', 'rest', 'api',
    'testing', 'jest', 'cypress', 'selenium', 'puppeteer', 'storybook', 'figma',
    'sketch', 'adobe', 'photoshop', 'illustrator', 'xd', 'invision', 'zeplin'
  ];

  // Common location keywords
  const locationKeywords = [
    'remote', 'onsite', 'hybrid', 'new york', 'san francisco', 'london', 'berlin',
    'paris', 'tokyo', 'singapore', 'toronto', 'vancouver', 'sydney', 'melbourne'
  ];

  // Common experience keywords
  const experienceKeywords = [
    'junior', 'mid', 'senior', 'lead', 'principal', 'architect', 'manager',
    'director', 'vp', 'entry', 'intern', 'graduate', 'experienced'
  ];

  // Common budget keywords
  const budgetKeywords = [
    'budget', 'rate', 'hourly', 'daily', 'weekly', 'monthly', 'project',
    'fixed', 'hourly', 'contract', 'freelance', 'part-time', 'full-time'
  ];

  // Common type keywords
  const typeKeywords = [
    'job', 'project', 'freelance', 'contract', 'full-time', 'part-time',
    'internship', 'volunteer', 'consulting', 'mentoring', 'tutoring'
  ];

  for (const word of words) {
    if (skillKeywords.includes(word)) {
      skills.push(word);
    } else if (locationKeywords.includes(word)) {
      location = word;
    } else if (experienceKeywords.includes(word)) {
      experience = word;
    } else if (budgetKeywords.includes(word)) {
      budget = word;
    } else if (typeKeywords.includes(word)) {
      type = word;
    } else if (word.length > 2) {
      keywords.push(word);
    }
  }

  return {
    keywords,
    skills,
    location,
    experience,
    budget,
    type
  };
}

export function suggestDidYouMean(query: string): string[] {
  // Simple typo correction suggestions
  const suggestions: string[] = [];
  const normalized = query.toLowerCase();
  
  // Common typos
  const corrections: Record<string, string[]> = {
    'javscript': ['javascript'],
    'typescrip': ['typescript'],
    'reac': ['react'],
    'nod': ['node'],
    'pythn': ['python'],
    'htm': ['html'],
    'cs': ['css'],
    'git': ['git'],
    'dockr': ['docker'],
    'kubernet': ['kubernetes'],
    'mongod': ['mongodb'],
    'postgres': ['postgresql'],
    'elasticserch': ['elasticsearch'],
    'graphq': ['graphql'],
    'rest': ['rest'],
    'api': ['api'],
    'jest': ['jest'],
    'cypres': ['cypress'],
    'seleniu': ['selenium'],
    'puppeteer': ['puppeteer'],
    'storybok': ['storybook'],
    'figm': ['figma'],
    'sket': ['sketch'],
    'adob': ['adobe'],
    'photosho': ['photoshop'],
    'illustrato': ['illustrator'],
    'invisio': ['invision'],
    'zeplin': ['zeplin']
  };

  for (const [typo, corrections] of Object.entries(corrections)) {
    if (normalized.includes(typo)) {
      suggestions.push(...corrections);
    }
  }

  return [...new Set(suggestions)].slice(0, 5);
}