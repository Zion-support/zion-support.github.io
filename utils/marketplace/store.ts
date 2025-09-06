// Marketplace data store utilitiesexport interface Project {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug?: string;
  startDateIso: string;
  endDateIso?: string;
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue',
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
    uploadedAtIso: string,
  }>;
  budget?: {
    total: number;
    currency: string;
    type: 'fixed' | 'hourly' | 'milestone',
  };
  createdAt: string;
  updatedAt: string,
}

export interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: {
    type: 'fixed' | 'hourly' | 'milestone';
    amount?: number;
    hourlyRate?: number;
    milestones?: Array<{
      title: string;
      amount: number;
      dueDate: string,
    }>;
  };
  agreementUrl?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;
  notes?: string,
}

export interface Application {
  id: string;
  projectId: string;
  talentSlug: string;
  appliedAtIso: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';
  coverLetter?: string;
  proposedRate?: number;
  proposedTimeline?: string;
  portfolioItems?: string[];
  notes?: string,
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  recipientId: string;
  body: string;
  linkUrl?: string;
  attachmentBase64?: string;
  attachmentName?: string;
  context?: string;
  sentAtIso: string;
  readAtIso?: string;
  isRead: boolean,
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;
  createdAtIso: string,
}

class MarketplaceStore {
  private projects: Map<string, Project> = new Map();
  private offers: Map<string, Offer> = new Map();
  private applications: Map<string, Application> = new Map();
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();

  // Project methods
  async createProject(project: Project): Promise<Project> {
    this && this.projects.set(project && project.id, project);
    return project;
  }

  async getProject(id: string): Promise<Project | null> {
    return this && this.projects.get(id) || null,
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    const project = this && this.projects.get(id);
    if (!project) return null,

    const updatedProject = {
      ...project,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this && this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this && this.projects.delete(id),
  }

  async getProjectsByClient(clientId: string): Promise<Project[]> {
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
  }

  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),
  }

  async getAllProjects(): Promise<Project[]> {
    return Array && Array.from(this && this.projects.values());
  }

  // Offer methods
  async createOffer(offer: Offer): Promise<Offer> {
    this && this.offers.set(offer && offer.id, offer);
    return offer;
  }

  async getOffer(id: string): Promise<Offer | null> {
    return this && this.offers.get(id) || null,
  }

  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
    const offer = this && this.offers.get(id);
    if (!offer) return null,

    const updatedOffer = { ...offer, ...updates };
    this && this.offers.set(id, updatedOffer);
    return updatedOffer;
  }

  async deleteOffer(id: string): Promise<boolean> {
    return this && this.offers.delete(id),
  }

  async getOffersByClient(clientId: string): Promise<Offer[]> {
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId),
  }

  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug),
  }

  async getAllOffers(): Promise<Offer[]> {
    return Array && Array.from(this && this.offers.values());
  }

  // Application methods
  async createApplication(application: Application): Promise<Application> {
    this && this.applications.set(application && application.id, application);
    return application;
  }

  async getApplication(id: string): Promise<Application | null> {
    return this && this.applications.get(id) || null,
  }

  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
    const application = this && this.applications.get(id);
    if (!application) return null,

    const updatedApplication = { ...application, ...updates };
    this && this.applications.set(id, updatedApplication);
    return updatedApplication;
  }

  async deleteApplication(id: string): Promise<boolean> {
    return this && this.applications.delete(id),
  }

  async getApplicationsByProject(projectId: string): Promise<Application[]> {
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId),
  }

  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug),
  }

  async getAllApplications(): Promise<Application[]> {
    return Array && Array.from(this && this.applications.values());
  }

  // Message methods
  async createMessage(message: Message): Promise<Message> {
    this && this.messages.set(message && message.id, message);
    return message;
  }

  async getMessage(id: string): Promise<Message | null> {
    return this && this.messages.get(id) || null,
  }

  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this && this.messages.get(id);
    if (!message) return null,

    const updatedMessage = { ...message, ...updates };
    this && this.messages.set(id, updatedMessage);
    return updatedMessage;
  }

  async deleteMessage(id: string): Promise<boolean> {
    return this && this.messages.delete(id),
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.conversationId === conversationId)
      .sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime());
  }

  async getMessagesByUser(userId: string): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.senderId === userId || m && m.recipientId === userId)
      .sort((a, b) => new Date(b && b.sentAtIso).getTime() - new Date(a && a.sentAtIso).getTime());
  }

  async getAllMessages(): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values());
  }

  // Conversation methods
  async createConversation(conversation: Conversation): Promise<Conversation> {
    this && this.conversations.set(conversation && conversation.id, conversation);
    return conversation;
  }

  async getConversation(id: string): Promise<Conversation | null> {
    return this && this.conversations.get(id) || null,
  }

  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,

    const updatedConversation = { ...conversation, ...updates };
    this && this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }

  async deleteConversation(id: string): Promise<boolean> {
    return this && this.conversations.delete(id),
  }

  async getConversationsByUser(userId: string): Promise<Conversation[]> {
    return Array && Array.from(this && this.conversations.values())
      .filter(c => c && c.participants.includes(userId))
      .sort((a, b) => new Date(b && b.lastMessageAtIso).getTime() - new Date(a && a.lastMessageAtIso).getTime());
  }

  async getAllConversations(): Promise<Conversation[]> {
    return Array && Array.from(this && this.conversations.values());
  }

  // Utility methods
  async getOrCreateConversation(userId1: string, userId2: string): Promise<Conversation> {
    // Find existing conversation between these two users
    for (const conversation of this && this.conversations.values()) {
      if (conversation && conversation.participants.includes(userId1) && conversation && conversation.participants.includes(userId2)) {
        return conversation,
      }
    }

    // Create new conversation
    const conversation: Conversation = {
      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date().toISOString(),
      isArchived: false,
      createdAtIso: new Date().toISOString()
    };

    return this && this.createConversation(conversation);
  }

  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;

    message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),
    this && this.messages.set(messageId, message);
    return true;
  }

  async getUnreadMessageCount(userId: string): Promise<number> {
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.recipientId === userId && !m && m.isRead)
      .length,
  }

  // Search methods
  async searchProjects(query: string): Promise<Project[]> {
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.projects.values()).filter(project =>
      project && project.title.toLowerCase().includes(lowercaseQuery) ||
      project && project.summary.toLowerCase().includes(lowercaseQuery)
    ),
  }

  async searchOffers(query: string): Promise<Offer[]> {
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    ),
  }

  // Cleanup methods
  async clearAll(): Promise<void> {
    this && this.projects.clear();
    this && this.offers.clear();
    this && this.applications.clear();
    this && this.messages.clear();
    this && this.conversations.clear();
  }

  // Statistics
  async getStats(): Promise<{
    totalProjects: number;
    totalOffers: number;
    totalApplications: number;
    totalMessages: number;
    totalConversations: number,
  }> {
    return {
      totalProjects: this && this.projects.size,
      totalOffers: this && this.offers.size,
      totalApplications: this && this.applications.size,
      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size
    };
  }
}

// Singleton instance
export const marketplaceStore = new MarketplaceStore();

// Main functions for external use
export async function createProject(project: Project): Promise<Project> {
  return marketplaceStore && marketplaceStore.createProject(project),
}

export async function getProject(id: string): Promise<Project | null> {
  return marketplaceStore && marketplaceStore.getProject(id),
}

export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
  return marketplaceStore && marketplaceStore.updateProject(id, updates);
}

export async function deleteProject(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteProject(id),
}

export async function createOffer(offer: Offer): Promise<Offer> {
  return marketplaceStore && marketplaceStore.createOffer(offer),
}

export async function getOffer(id: string): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.getOffer(id),
}

export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
}

export async function deleteOffer(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteOffer(id),
}

export async function createApplication(application: Application): Promise<Application> {
  return marketplaceStore && marketplaceStore.createApplication(application),
}

export async function getApplication(id: string): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.getApplication(id),
}

export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
}

export async function deleteApplication(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteApplication(id),
}

export async function createMessage(message: Message): Promise<Message> {
  return marketplaceStore && marketplaceStore.createMessage(message),
}

export async function getMessage(id: string): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.getMessage(id),
}

export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.updateMessage(id, updates);
}

export async function deleteMessage(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteMessage(id),
}

// Utility functions
export function createProjectData(
  title: string,
  summary: string,
  clientId: string,
  additionalData?: Partial<Project>
): Omit<Project, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    title,
    summary,
    clientId,
    startDateIso: new Date().toISOString(),
    status: 'DRAFT',
    timeline: [],
    documents: [],
    ...additionalData
  };
}

export function createOfferData(
  clientId: string,
  talentSlug: string,
  scopeSummary: string,
  paymentTerms: Offer['paymentTerms'],
  additionalData?: Partial<Offer>
): Omit<Offer, 'id' | 'createdAtIso'> {
  return {
    clientId,
    talentSlug,
    startDateIso: new Date().toISOString(),
    scopeSummary,
    paymentTerms,
    status: 'SENT',
    ...additionalData
  };
}

export function createApplicationData(
  projectId: string,
  talentSlug: string,
  additionalData?: Partial<Application>
): Omit<Application, 'id' | 'appliedAtIso'> {
  return {
    projectId,
    talentSlug,
    status: 'PENDING',
    ...additionalData
  };
}

export function createMessageData(
  conversationId: string,
  senderId: string,
  recipientId: string,
  body: string,
  additionalData?: Partial<Message>
): Omit<Message, 'id' | 'sentAtIso'> {
  return {
    conversationId,
    senderId,
    recipientId,
    body,
    isRead: false,
    ...additionalData
  };
}

export function generateId(prefix: string = 'item'): string {
  return `${prefix}_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
}