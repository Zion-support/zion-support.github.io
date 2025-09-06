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
    keywords: []
    skills: []
    location: any
  }

export const searchAll = (parsed: any, access: any) => {
  //
  //
    const resp = await fetch('https: any
  const skillKeywords = ['javascript', 'react', 'node', 'python', 'java', 'typescript', 'vue', 'angular', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'c++', 'c#', 'html', 'css', 'sql', 'mongodb', 'postgresql', 'mysql', 'redis', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'git', 'github', 'gitlab', 'jenkins', 'ci/