export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'job' | 'project' | 'user' | 'company';
  score: number;
  metadata?: any;
}

export interface SearchFilters {
  type?: string[];
  location?: string[];
  skills?: string[];
  experience?: string;
  salary?: {
    min?: number;
    max?: number;
  };
  dateRange?: {
    start?: string;
    end?: string;
  };
}

export function filterSearchResults(results: SearchResult[], filters: SearchFilters): SearchResult[] {
  return results.filter(result => {
    // Filter by type
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(result.type)) {
        return false;
      }
    }

    // Filter by location (if metadata contains location)
    if (filters.location && filters.location.length > 0) {
      const resultLocation = result.metadata?.location;
      if (!resultLocation || !filters.location.includes(resultLocation)) {
        return false;
      }
    }

    // Filter by skills (if metadata contains skills)
    if (filters.skills && filters.skills.length > 0) {
      const resultSkills = result.metadata?.skills || [];
      const hasMatchingSkill = filters.skills.some(skill => 
        resultSkills.some((resultSkill: string) => 
          resultSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );
      if (!hasMatchingSkill) {
        return false;
      }
    }

    // Filter by experience (if metadata contains experience)
    if (filters.experience) {
      const resultExperience = result.metadata?.experience;
      if (!resultExperience || resultExperience !== filters.experience) {
        return false;
      }
    }

    // Filter by salary range (if metadata contains salary)
    if (filters.salary) {
      const resultSalary = result.metadata?.salary;
      if (resultSalary) {
        if (filters.salary.min && resultSalary < filters.salary.min) {
          return false;
        }
        if (filters.salary.max && resultSalary > filters.salary.max) {
          return false;
        }
      }
    }

    // Filter by date range (if metadata contains date)
    if (filters.dateRange) {
      const resultDate = result.metadata?.date;
      if (resultDate) {
        const date = new Date(resultDate);
        if (filters.dateRange.start && date < new Date(filters.dateRange.start)) {
          return false;
        }
        if (filters.dateRange.end && date > new Date(filters.dateRange.end)) {
          return false;
        }
      }
    }

    return true;
  });
}

export function sortSearchResults(results: SearchResult[], sortBy: 'relevance' | 'date' | 'title' = 'relevance'): SearchResult[] {
  return [...results].sort((a, b) => {
    switch (sortBy) {
      case 'relevance':
        return b.score - a.score;
      case 'date':
        const dateA = new Date(a.metadata?.date || 0);
        const dateB = new Date(b.metadata?.date || 0);
        return dateB.getTime() - dateA.getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
}