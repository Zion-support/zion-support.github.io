// Search Filter - Filter search results based on parsed query
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  skills: string[];
  location?: string;
  budget?: number;
  experience?: number;
  type: 'talent' | 'job' | 'project';
  rating?: number;
  createdAt: string;
}

export interface SearchResults {
  all: SearchResult[];
  talent: SearchResult[];
  jobs: SearchResult[];
  projects: SearchResult[];
}

export function searchAll(parsedQuery: any, access: any): SearchResults {
  // Mock data - in a real app, this would query your database
  const mockData: SearchResult[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      description: 'Looking for an experienced React developer to join our team',
      skills: ['react', 'javascript', 'typescript', 'node'],
      location: 'remote',
      budget: 80000,
      experience: 5,
      type: 'talent',
      rating: 4.8,
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      description: 'Full stack development position with modern tech stack',
      skills: ['react', 'node', 'mongodb', 'aws'],
      location: 'san francisco',
      budget: 120000,
      experience: 3,
      type: 'job',
      rating: 4.5,
      createdAt: '2024-01-14T15:30:00Z'
    },
    {
      id: '3',
      title: 'E-commerce Website Project',
      description: 'Build a modern e-commerce website with payment integration',
      skills: ['react', 'next', 'stripe', 'tailwind'],
      location: 'remote',
      budget: 15000,
      experience: 2,
      type: 'project',
      rating: 4.9,
      createdAt: '2024-01-13T09:15:00Z'
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      description: 'Creative UI/UX designer for mobile and web applications',
      skills: ['figma', 'adobe', 'sketch', 'prototyping'],
      location: 'new york',
      budget: 70000,
      experience: 4,
      type: 'talent',
      rating: 4.7,
      createdAt: '2024-01-12T14:20:00Z'
    },
    {
      id: '5',
      title: 'Blockchain Developer',
      description: 'Smart contract development and DeFi protocols',
      skills: ['solidity', 'ethereum', 'web3', 'defi'],
      location: 'remote',
      budget: 100000,
      experience: 3,
      type: 'job',
      rating: 4.6,
      createdAt: '2024-01-11T11:45:00Z'
    }
  ];

  let filtered = mockData;

  // Filter by keywords
  if (parsedQuery.keywords && parsedQuery.keywords.length > 0) {
    filtered = filtered.filter(item => 
      parsedQuery.keywords.some((keyword: string) => 
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      )
    );
  }

  // Filter by skills
  if (parsedQuery.skills && parsedQuery.skills.length > 0) {
    filtered = filtered.filter(item =>
      parsedQuery.skills.some((skill: string) =>
        item.skills.some(itemSkill => 
          itemSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  }

  // Filter by location
  if (parsedQuery.location) {
    filtered = filtered.filter(item =>
      item.location?.toLowerCase().includes(parsedQuery.location.toLowerCase())
    );
  }

  // Filter by budget
  if (parsedQuery.budget) {
    filtered = filtered.filter(item => {
      if (!item.budget) return false;
      if (parsedQuery.budget.min && item.budget < parsedQuery.budget.min) return false;
      if (parsedQuery.budget.max && item.budget > parsedQuery.budget.max) return false;
      return true;
    });
  }

  // Filter by experience
  if (parsedQuery.experience) {
    filtered = filtered.filter(item => {
      if (!item.experience) return false;
      if (parsedQuery.experience.min && item.experience < parsedQuery.experience.min) return false;
      if (parsedQuery.experience.max && item.experience > parsedQuery.experience.max) return false;
      return true;
    });
  }

  // Filter by type
  if (parsedQuery.type) {
    filtered = filtered.filter(item => item.type === parsedQuery.type);
  }

  // Sort by relevance (rating and recency)
  filtered.sort((a, b) => {
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (Math.abs(ratingDiff) > 0.1) return ratingDiff;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // Group by type
  const talent = filtered.filter(item => item.type === 'talent');
  const jobs = filtered.filter(item => item.type === 'job');
  const projects = filtered.filter(item => item.type === 'project');

  return {
    all: filtered,
    talent,
    jobs,
    projects
  };
}

export function searchTalent(query: string, access: any): SearchResult[] {
  const parsedQuery = require('./parser').parseSearchQuery(query);
  const results = searchAll(parsedQuery, access);
  return results.talent;
}

export function searchJobs(query: string, access: any): SearchResult[] {
  const parsedQuery = require('./parser').parseSearchQuery(query);
  const results = searchAll(parsedQuery, access);
  return results.jobs;
}

export function searchProjects(query: string, access: any): SearchResult[] {
  const parsedQuery = require('./parser').parseSearchQuery(query);
  const results = searchAll(parsedQuery, access);
  return results.projects;
}