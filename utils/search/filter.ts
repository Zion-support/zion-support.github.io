// Search Filter - Filter search results based on parsed query
import { ParsedQuery } from './parser';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'talent' | 'job' | 'project';
  skills: string[];
  location?: string;
  experience?: string;
  budget?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchResults {
  all: SearchResult[];
  talent: SearchResult[];
  jobs: SearchResult[];
  projects: SearchResult[];
}

export function searchAll(parsed: ParsedQuery, access: any): SearchResults {
  // Mock data for demonstration
  const mockData: SearchResult[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      description: 'Looking for an experienced React developer to join our team',
      type: 'job',
      skills: ['react', 'javascript', 'typescript', 'node'],
      location: 'remote',
      experience: 'senior',
      budget: '100-150k',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      description: 'Experienced full stack developer available for projects',
      type: 'talent',
      skills: ['react', 'node', 'python', 'mongodb'],
      location: 'remote',
      experience: 'mid',
      budget: '80-120k',
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z'
    },
    {
      id: '3',
      title: 'E-commerce Website',
      description: 'Need a complete e-commerce website built from scratch',
      type: 'project',
      skills: ['react', 'node', 'mongodb', 'stripe'],
      location: 'remote',
      experience: 'any',
      budget: '10-20k',
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z'
    }
  ];

  // Filter based on parsed query
  let filtered = mockData;

  // Filter by skills
  if (parsed.skills && parsed.skills.length > 0) {
    filtered = filtered.filter(item => 
      parsed.skills!.some(skill => 
        item.skills.some(itemSkill => 
          itemSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  }

  // Filter by keywords
  if (parsed.keywords && parsed.keywords.length > 0) {
    filtered = filtered.filter(item =>
      parsed.keywords!.some(keyword =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }

  // Filter by location
  if (parsed.location) {
    filtered = filtered.filter(item =>
      item.location?.toLowerCase().includes(parsed.location!.toLowerCase())
    );
  }

  // Filter by experience
  if (parsed.experience) {
    filtered = filtered.filter(item =>
      item.experience?.toLowerCase().includes(parsed.experience!.toLowerCase())
    );
  }

  // Filter by budget
  if (parsed.budget) {
    filtered = filtered.filter(item =>
      item.budget?.toLowerCase().includes(parsed.budget!.toLowerCase())
    );
  }

  // Filter by type
  if (parsed.type) {
    filtered = filtered.filter(item =>
      item.type === parsed.type
    );
  }

  // Categorize results
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