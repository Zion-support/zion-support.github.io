// Marketplace data store utilities

export interface Project {
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
<<<<<<< HEAD
    status: 'pending' | 'in_progress' | 'completed' | 'overdue';
=======
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
<<<<<<< HEAD
    uploadedAtIso: string;
=======
    uploadedAtIso: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }>;
  budget?: {
    total: number;
    currency: string;
<<<<<<< HEAD
    type: 'fixed' | 'hourly' | 'milestone';
  };
  createdAt: string;
  updatedAt: string;
=======
    type: 'fixed' | 'hourly' | 'milestone'
  }
  createdAt: string;
  updatedAt: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
      dueDate: string;
=======
      dueDate: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    }>;
  }
  agreementUrl?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;
<<<<<<< HEAD
  notes?: string;
=======
  notes?: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
  notes?: string;
=======
  notes?: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
  isRead: boolean;
=======
  isRead: boolean
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;
<<<<<<< HEAD
  createdAtIso: string;
=======
  createdAtIso: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
class MarketplaceStore {
  private projects: Map<string, Project> = new Map();
  private offers: Map<string, Offer> = new Map();
  private applications: Map<string, Application> = new Map();
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();
  // Project methods
  async createProject(project: Project): Promise<Project> {
    this.projects.set(project.id, project);
    return project;
  }
  async getProject(id: string): Promise<Project | null> {
<<<<<<< HEAD
    return this.projects.get(id) || null;
=======
    return this.projects.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    const project = this.projects.get(id);
<<<<<<< HEAD
    if (!project) return null;

=======
    if (!project) return null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    const updatedProject = {
      ...project
      ...updates
      updatedAt: new Date().toISOString()
    }
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  async deleteProject(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this.projects.delete(id);
=======
    return this.projects.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {
<<<<<<< HEAD
    return Array.from(this.projects.values()).filter(p => p.clientId === clientId);
=======
    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {
<<<<<<< HEAD
    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug);
=======
    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  // Offer methods
  async createOffer(offer: Offer): Promise<Offer> {
    this.offers.set(offer.id, offer);
    return offer;
  }
  async getOffer(id: string): Promise<Offer | null> {
<<<<<<< HEAD
    return this.offers.get(id) || null;
=======
    return this.offers.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
    const offer = this.offers.get(id);
<<<<<<< HEAD
    if (!offer) return null;

    const updatedOffer = { ...offer, ...updates };
=======
    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.offers.set(id, updatedOffer);
    return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this.offers.delete(id);
=======
    return this.offers.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {
<<<<<<< HEAD
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId);
=======
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {
<<<<<<< HEAD
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug);
=======
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getAllOffers(): Promise<Offer[]> {
    return Array.from(this.offers.values());
  }
  // Application methods
  async createApplication(application: Application): Promise<Application> {
    this.applications.set(application.id, application);
    return application;
  }
  async getApplication(id: string): Promise<Application | null> {
<<<<<<< HEAD
    return this.applications.get(id) || null;
=======
    return this.applications.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
    const application = this.applications.get(id);
<<<<<<< HEAD
    if (!application) return null;

    const updatedApplication = { ...application, ...updates };
=======
    if (!application) return null
    const updatedApplication = { ...application, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this.applications.delete(id);
=======
    return this.applications.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {
<<<<<<< HEAD
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId);
=======
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {
<<<<<<< HEAD
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug);
=======
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values());
  }
  // Message methods
  async createMessage(message: Message): Promise<Message> {
    this.messages.set(message.id, message);
    return message;
  }
  async getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
    return this.messages.get(id) || null;
=======
    return this.messages.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
<<<<<<< HEAD
    if (!message) return null;

    const updatedMessage = { ...message, ...updates };
=======
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this.messages.delete(id);
=======
    return this.messages.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.conversationId === conversationId)
      .sort((a, b) => new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime());
  }
  async getMessagesByUser(userId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.senderId === userId |m.recipientId === userId)
      .sort((a, b) => new Date(b.sentAtIso).getTime() - new Date(a.sentAtIso).getTime());
  }
  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }
  // Conversation methods
  async createConversation(conversation: Conversation): Promise<Conversation> {
    this.conversations.set(conversation.id, conversation);
    return conversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD
    return this.conversations.get(id) || null;
=======
    return this.conversations.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return null;

    const updatedConversation = { ...conversation, ...updates };
=======
    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this.conversations.delete(id);
=======
    return this.conversations.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getConversationsByUser(userId: string): Promise<Conversation[]> {
    return Array.from(this.conversations.values())
      .filter(c => c.participants.includes(userId))
      .sort((a, b) => new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime());
  }
  async getAllConversations(): Promise<Conversation[]> {
    return Array.from(this.conversations.values());
  }
  // Utility methods
  async getOrCreateConversation(userId1: string, userId2: string): Promise<Conversation> {
    // Find existing conversation between these two users
    for (const conversation of this.conversations.values()) {
      if (conversation.participants.includes(userId1) && conversation.participants.includes(userId2)) {
<<<<<<< HEAD
        return conversation;
=======
        return conversation
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
      }
    }
    // Create new conversation
    const conversation: Conversation = {
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      participants: [userId1, userId2]
      lastMessageAtIso: new Date().toISOString()
      isArchived: false
      createdAtIso: new Date().toISOString()
    }
    return this.createConversation(conversation);
  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    message.isRead = true;
<<<<<<< HEAD
    message.readAtIso = new Date().toISOString();
=======
    message.readAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(messageId, message);
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
    return Array.from(this.messages.values())
      .filter(m => m.recipientId === userId && !m.isRead)
<<<<<<< HEAD
      .length;
=======
      .length
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  // Search methods
  async searchProjects(query: string): Promise<Project[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values()).filter(project =>
      project.title.toLowerCase().includes(lowercaseQuery) |
      project.summary.toLowerCase().includes(lowercaseQuery)
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async searchOffers(query: string): Promise<Offer[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.offers.values()).filter(offer =>
      offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  // Cleanup methods
  async clearAll(): Promise<void> {
    this.projects.clear();
    this.offers.clear();
    this.applications.clear();
    this.messages.clear();
    this.conversations.clear();
  }
  // Statistics
  async getStats(): Promise<{
    totalProjects: number;
    totalOffers: number;
    totalApplications: number;
    totalMessages: number;
<<<<<<< HEAD
    totalConversations: number;
=======
    totalConversations: number
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }> {
    return {
      totalProjects: this.projects.size
      totalOffers: this.offers.size
      totalApplications: this.applications.size
      totalMessages: this.messages.size
      totalConversations: this.conversations.size
    }
  }
}
// Singleton instance
export const marketplaceStore = new MarketplaceStore();
// Main functions for external use
export async function createProject(project: Project): Promise<Project> {
<<<<<<< HEAD
  return marketplaceStore.createProject(project);
=======
  return marketplaceStore.createProject(project)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function getProject(id: string): Promise<Project | null> {
<<<<<<< HEAD
  return marketplaceStore.getProject(id);
=======
  return marketplaceStore.getProject(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
  return marketplaceStore.updateProject(id, updates);
}
export async function deleteProject(id: string): Promise<boolean> {
<<<<<<< HEAD
  return marketplaceStore.deleteProject(id);
=======
  return marketplaceStore.deleteProject(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function createOffer(offer: Offer): Promise<Offer> {
<<<<<<< HEAD
  return marketplaceStore.createOffer(offer);
=======
  return marketplaceStore.createOffer(offer)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function getOffer(id: string): Promise<Offer | null> {
<<<<<<< HEAD
  return marketplaceStore.getOffer(id);
=======
  return marketplaceStore.getOffer(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore.updateOffer(id, updates);
}
export async function deleteOffer(id: string): Promise<boolean> {
<<<<<<< HEAD
  return marketplaceStore.deleteOffer(id);
=======
  return marketplaceStore.deleteOffer(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function createApplication(application: Application): Promise<Application> {
<<<<<<< HEAD
  return marketplaceStore.createApplication(application);
=======
  return marketplaceStore.createApplication(application)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function getApplication(id: string): Promise<Application | null> {
<<<<<<< HEAD
  return marketplaceStore.getApplication(id);
=======
  return marketplaceStore.getApplication(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore.updateApplication(id, updates);
}
export async function deleteApplication(id: string): Promise<boolean> {
<<<<<<< HEAD
  return marketplaceStore.deleteApplication(id);
=======
  return marketplaceStore.deleteApplication(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function createMessage(message: Message): Promise<Message> {
<<<<<<< HEAD
  return marketplaceStore.createMessage(message);
=======
  return marketplaceStore.createMessage(message)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
  return marketplaceStore.getMessage(id);
=======
  return marketplaceStore.getMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return marketplaceStore.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
  return marketplaceStore.deleteMessage(id);
=======
  return marketplaceStore.deleteMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
// Utility functions
export function createProjectData(
  title: string
  summary: string
  clientId: string
  additionalData?: Partial<Project>
): Omit<Project, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    title
    summary
    clientId
    startDateIso: new Date().toISOString()
    status: 'DRAFT'
    timeline: []
    documents: []
    ...additionalData
  }
}
export function createOfferData(
  clientId: string
  talentSlug: string
  scopeSummary: string
  paymentTerms: Offer['paymentTerms']
  additionalData?: Partial<Offer>
): Omit<Offer, 'id' | 'createdAtIso'> {
  return {
    clientId
    talentSlug
    startDateIso: new Date().toISOString()
    scopeSummary
    paymentTerms
    status: 'SENT'
    ...additionalData
  }
}
export function createApplicationData(
  projectId: string
  talentSlug: string
  additionalData?: Partial<Application>
): Omit<Application, 'id' | 'appliedAtIso'> {
  return {
    projectId
    talentSlug
    status: 'PENDING'
    ...additionalData
  }
}
export function createMessageData(
  conversationId: string
  senderId: string
  recipientId: string
  body: string
  additionalData?: Partial<Message>
): Omit<Message, 'id' | 'sentAtIso'> {
  return {
    conversationId
    senderId
    recipientId
    body
    isRead: false
    ...additionalData
  }
}
export function generateId(prefix: string = 'item'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}