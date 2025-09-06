// Data Store - Central data management for the application
export interface Review {
  id: string;
  projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  toRole: 'client' | 'talent';
  toId: string;
  rating: number;
  text: string;
  categories: string[];
  anonymous: boolean;
  approved: boolean;
  removed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  talentId?: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  budget: number;
  currency: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Talent {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experience: number;
  rating: number;
  location: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  rating: number;
  location: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

// Mock data store
class DataStore {
  private reviews: Review[] = [];
  private projects: Project[] = [];
  private talent: Talent[] = [];
  private clients: Client[] = [];

  // Review methods
  createReview(data: Omit<Review, 'id' | 'createdAt' | 'updatedAt' | 'approved' | 'removed'>): Review {
    const review: Review = {
      ...data,
      id: `review_${Date.now()}`,
      approved: false,
      removed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.reviews.push(review);
    return review;
  }

  getReviews(): Review[] {
    return this.reviews;
  }

  getReview(id: string): Review | null {
    return this.reviews.find(r => r.id === id) || null;
  }

  updateReview(id: string, updates: Partial<Review>): Review | null {
    const index = this.reviews.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    this.reviews[index] = {
      ...this.reviews[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.reviews[index];
  }

  deleteReview(id: string): boolean {
    const index = this.reviews.findIndex(r => r.id === id);
    if (index === -1) return false;
    
    this.reviews.splice(index, 1);
    return true;
  }

  // Project methods
  createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
    const project: Project = {
      ...data,
      id: `project_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.projects.push(project);
    return project;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: string): Project | null {
    return this.projects.find(p => p.id === id) || null;
  }

  updateProject(id: string, updates: Partial<Project>): Project | null {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.projects[index] = {
      ...this.projects[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.projects[index];
  }

  deleteProject(id: string): boolean {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.projects.splice(index, 1);
    return true;
  }

  // Talent methods
  createTalent(data: Omit<Talent, 'id' | 'createdAt' | 'updatedAt'>): Talent {
    const talent: Talent = {
      ...data,
      id: `talent_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.talent.push(talent);
    return talent;
  }

  getTalent(): Talent[] {
    return this.talent;
  }

  getTalentById(id: string): Talent | null {
    return this.talent.find(t => t.id === id) || null;
  }

  updateTalent(id: string, updates: Partial<Talent>): Talent | null {
    const index = this.talent.findIndex(t => t.id === id);
    if (index === -1) return null;
    
    this.talent[index] = {
      ...this.talent[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.talent[index];
  }

  deleteTalent(id: string): boolean {
    const index = this.talent.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    this.talent.splice(index, 1);
    return true;
  }

  // Client methods
  createClient(data: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Client {
    const client: Client = {
      ...data,
      id: `client_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.clients.push(client);
    return client;
  }

  getClients(): Client[] {
    return this.clients;
  }

  getClientById(id: string): Client | null {
    return this.clients.find(c => c.id === id) || null;
  }

  updateClient(id: string, updates: Partial<Client>): Client | null {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    this.clients[index] = {
      ...this.clients[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.clients[index];
  }

  deleteClient(id: string): boolean {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.clients.splice(index, 1);
    return true;
  }
}

// Export singleton instance
export const dataStore = new DataStore();
export default dataStore;