export interface Project {
  id: string,
  title: string,
  summary: string,
  client_id: string,
  talent_slug?: string,
  startDateIso: string,
  endDateIso?: string,
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED',
  timeline: Array<{
    id: string,
    title: string
  }>
}

export interface Offer {
  id: string,
  project_id: string,
  talent_id: string,
  amount: number,
  currency: string,
  message: string,
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN',
  createdAtIso: string
}

export interface Application {
  id: string,
  project_id: string,
  talent_id: string,
  cover_letter: string,
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN',
  createdAtIso: string
}

export interface Message {
  id: string,
  conversation_id: string,
  sender_id: string,
  content: string,
  createdAtIso: string
}

export interface Conversation {
  id: string,
  participants: string[],
  lastMessageAtIso: string,
  lastMessageId?: string,
  createdAtIso: string
}

class MarketplaceStore {
  private projects: Map<string, Project> = new Map();
  private offers: Map<string, Offer> = new Map();
  private applications: Map<string, Application> = new Map();
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();

  // Project methods
  createProject(project: Omit<Project, 'id'>): Project {
    const id = generate_id('project');
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  getProject(id: string): Project | undefined {
    return this.projects.get(id);
  }

  updateProject(id: string, updates: Partial<Project>): Project | undefined {
    const project = this.projects.get(id);
    if (project) {
      const updated = { ...project, ...updates };
      this.projects.set(id, updated);
      return updated;
    }
    return undefined;
  }

  deleteProject(id: string): boolean {
    return this.projects.delete(id);
  }

  // Offer methods
  createOffer(offer: Omit<Offer, 'id'>): Offer {
    const id = generate_id('offer');
    const newOffer = { ...offer, id };
    this.offers.set(id, newOffer);
    return newOffer;
  }

  getOffer(id: string): Offer | undefined {
    return this.offers.get(id);
  }

  // Application methods
  createApplication(application: Omit<Application, 'id'>): Application {
    const id = generate_id('application');
    const newApplication = { ...application, id };
    this.applications.set(id, newApplication);
    return newApplication;
  }

  getApplication(id: string): Application | undefined {
    return this.applications.get(id);
  }

  // Message methods
  createMessage(message: Omit<Message, 'id'>): Message {
    const id = generate_id('message');
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  getMessage(id: string): Message | undefined {
    return this.messages.get(id);
  }

  // Conversation methods
  createConversation(conversation: Omit<Conversation, 'id'>): Conversation {
    const id = generate_id('conversation');
    const newConversation = { ...conversation, id };
    this.conversations.set(id, newConversation);
    return newConversation;
  }

  getConversation(id: string): Conversation | undefined {
    return this.conversations.get(id);
  }
}

export function generate_id(prefix: string = 'item'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export const marketplaceStore = new MarketplaceStore();