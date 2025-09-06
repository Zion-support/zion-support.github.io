// Marketplace data store utilities

export interface Project {
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug?: string;
  startDateIso: string;
  endDateIso?: string;
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{
    id: string;
    title: string;
    description: string;
<<<<<<< HEAD
    dueDate: string;
<<<<<<< HEAD
    status: 'pending' | 'in_progress' | 'completed' | 'overdue';
=======
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    due_date: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
    type: 'fixed' | 'hourly' | 'milestone',
  }
  created_at: string;
  updated_at: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Offer {
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
  scope_summary: string;
  payment_terms: {
    type: 'fixed' | 'hourly' | 'milestone';
    amount?: number;
    hourly_rate?: number;
    milestones?: Array<{
      title: string;
      amount: number;
<<<<<<< HEAD
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
=======
      due_date: string,
    }>;
  }
  agreement_url?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expires_at?: string;
  notes?: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Application {
  id: string;
  project_id: string;
  talent_slug: string;
  appliedAtIso: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';
<<<<<<< HEAD
  coverLetter?: string;
  proposedRate?: number;
  proposedTimeline?: string;
  portfolioItems?: string[];
<<<<<<< HEAD
  notes?: string;
=======
  notes?: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  cover_letter?: string;
  proposed_rate?: number;
  proposed_timeline?: string;
  portfolio_items?: string[];
  notes?: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  recipient_id: string;
  body: string;
  link_url?: string;
  attachmentBase64?: string;
  attachment_name?: string;
  context?: string;
  sentAtIso: string;
  readAtIso?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  isRead: boolean;
=======
  isRead: boolean
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  is_read: boolean,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
<<<<<<< HEAD
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
    this && this.projects.set(project && project.id, project);
    return project;
  }
  async getProject(id: string): Promise<Project | null> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.projects.get(id) || null;
=======
    return this.projects.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.projects.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
<<<<<<< HEAD
    const project = this.projects.get(id);
<<<<<<< HEAD
    if (!project) return null;
=======
    const project = this && this.projects.get(id);
    if (!project) return null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
    if (!project) return null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    const updatedProject = {
      ...project
      ...updates
      updatedAt: new Date().toISOString()
<<<<<<< HEAD
    }
    this.projects.set(id, updatedProject);
=======
    };

    this && this.projects.set(id, updatedProject);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedProject;
  }
  async deleteProject(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.projects.delete(id);
=======
    return this.projects.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.projects.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.projects.values()).filter(p => p.clientId === clientId);
=======
    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug);
=======
    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
    return this.offers.get(id) || null;
=======
    return this.offers.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.offers.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
<<<<<<< HEAD
    const offer = this.offers.get(id);
<<<<<<< HEAD
    if (!offer) return null;

    const updatedOffer = { ...offer, ...updates };
=======
    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.offers.set(id, updatedOffer);
=======
    const offer = this && this.offers.get(id);
    if (!offer) return null,

    const updatedOffer = { ...offer, ...updates };
    this && this.offers.set(id, updatedOffer);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.offers.delete(id);
=======
    return this.offers.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.offers.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId);
=======
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug);
=======
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
    return this.applications.get(id) || null;
=======
    return this.applications.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.applications.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
<<<<<<< HEAD
    const application = this.applications.get(id);
<<<<<<< HEAD
    if (!application) return null;

    const updatedApplication = { ...application, ...updates };
=======
    if (!application) return null
    const updatedApplication = { ...application, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.applications.set(id, updatedApplication);
=======
    const application = this && this.applications.get(id);
    if (!application) return null,

    const updatedApplication = { ...application, ...updates };
    this && this.applications.set(id, updatedApplication);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.applications.delete(id);
=======
    return this.applications.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.applications.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId);
=======
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug);
=======
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
    return this.messages.get(id) || null;
=======
    return this.messages.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
<<<<<<< HEAD
    const message = this.messages.get(id);
<<<<<<< HEAD
    if (!message) return null;

    const updatedMessage = { ...message, ...updates };
=======
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, updatedMessage);
=======
    const message = this && this.messages.get(id);
    if (!message) return null,

    const updatedMessage = { ...message, ...updates };
    this && this.messages.set(id, updatedMessage);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.messages.delete(id);
=======
    return this.messages.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.messages.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.conversationId === conversationId)
      .sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime());
  }
  async getMessagesByUser(userId: string): Promise<Message[]> {
<<<<<<< HEAD
    return Array.from(this.messages.values())
      .filter(m => m.senderId === userId |m.recipientId === userId)
      .sort((a, b) => new Date(b.sentAtIso).getTime() - new Date(a.sentAtIso).getTime());
=======
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.senderId === userId || m && m.recipientId === userId)
      .sort((a, b) => new Date(b && b.sentAtIso).getTime() - new Date(a && a.sentAtIso).getTime());
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
<<<<<<< HEAD
    return this.conversations.get(id) || null;
=======
    return this.conversations.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.conversations.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
<<<<<<< HEAD
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return null;

    const updatedConversation = { ...conversation, ...updates };
=======
    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, updatedConversation);
=======
    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,

    const updatedConversation = { ...conversation, ...updates };
    this && this.conversations.set(id, updatedConversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.conversations.delete(id);
=======
    return this.conversations.delete(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.conversations.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
    for (const conversation of this.conversations.values()) {
      if (conversation.participants.includes(userId1) && conversation.participants.includes(userId2)) {
<<<<<<< HEAD
        return conversation;
=======
        return conversation
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    for (const conversation of this && this.conversations.values()) {
      if (conversation && conversation.participants.includes(userId1) && conversation && conversation.participants.includes(userId2)) {
=======
  is_archived: boolean;
  createdAtIso: string,
}
class MarketplaceStore {
  private projects: Map < string, Project> = new Map ();
  private offers: Map < string, Offer> = new Map ();
  private applications: Map < string, Application> = new Map ();
  private messages: Map < string, Message> = new Map ();
  private conversations: Map < string, Conversation> = new Map ();
;
  // Project methods;
  async create_project (project: Project): Promise < Project> {
    this.projects.set (project.id, project);
    return project;
  }
  async get_project (id: string): Promise < Project | null> {
    return this.projects.get (id) || null,
  }
  async update_project (id: string, updates: Partial < Project>): Promise < Project | null> {
    const project = this.projects.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_project = {
      ...project,
      ...updates,
      updated_at: new Date ().toISOString ();
    }
;
    this.projects.set (id, updated_project);
    return updated_project;
  }
  async delete_project (id: string): Promise < boolean> {
    return this.projects.delete (id),
  }
  async getProjectsByClient (client_id: string): Promise < Project[]> {
    return Array.from (this.projects.values ()).filter (p => p.client_id === client_id),
  }
  async getProjectsByTalent (talent_slug: string): Promise < Project[]> {
    return Array.from (this.projects.values ()).filter (p => p.talent_slug === talent_slug),
  }
  async getAllProjects (): Promise < Project[]> {
    return Array.from (this.projects.values ());
  }
  // Offer methods;
  async create_offer (offer: Offer): Promise < Offer> {
    this.offers.set (offer.id, offer);
    return offer;
  }
  async get_offer (id: string): Promise < Offer | null> {
    return this.offers.get (id) || null,
  }
  async update_offer (id: string, updates: Partial < Offer>): Promise < Offer | null> {
    const offer = this.offers.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_offer = { ...offer, ...updates }
    this.offers.set (id, updated_offer);
    return updated_offer;
  }
  async delete_offer (id: string): Promise < boolean> {
    return this.offers.delete (id),
  }
  async getOffersByClient (client_id: string): Promise < Offer[]> {
    return Array.from (this.offers.values ()).filter (object => o.client_id === client_id),
  }
  async getOffersByTalent (talent_slug: string): Promise < Offer[]> {
    return Array.from (this.offers.values ()).filter (object => o.talent_slug === talent_slug),
  }
  async getAllOffers (): Promise < Offer[]> {
    return Array.from (this.offers.values ());
  }
  // Application methods;
  async create_application (application: Application): Promise < Application> {
    this.applications.set (application.id, application);
    return application;
  }
  async get_application (id: string): Promise < Application | null> {
    return this.applications.get (id) || null,
  }
  async update_application (id: string, updates: Partial < Application>): Promise < Application | null> {
    const application = this.applications.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_application = { ...application, ...updates }
    this.applications.set (id, updated_application);
    return updated_application;
  }
  async delete_application (id: string): Promise < boolean> {
    return this.applications.delete (id),
  }
  async getApplicationsByProject (project_id: string): Promise < Application[]> {
    return Array.from (this.applications.values ()).filter (array => a.project_id === project_id),
  }
  async getApplicationsByTalent (talent_slug: string): Promise < Application[]> {
    return Array.from (this.applications.values ()).filter (array => a.talent_slug === talent_slug),
  }
  async getAllApplications (): Promise < Application[]> {
    return Array.from (this.applications.values ());
  }
  // Message methods;
  async create_message (message: Message): Promise < Message> {
    this.messages.set (message.id, message);
    return message;
  }
  async get_message (id: string): Promise < Message | null> {
    return this.messages.get (id) || null,
  }
  async update_message (id: string, updates: Partial < Message>): Promise < Message | null> {
    const message = this.messages.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_message = { ...message, ...updates }
    this.messages.set (id, updated_message);
    return updated_message;
  }
  async delete_message (id: string): Promise < boolean> {
    return this.messages.delete (id),
  }
  async getMessagesByConversation (conversation_id: string): Promise < Message[]> {
    return Array.from (this.messages.values ());
      .filter (m => m.conversation_id === conversation_id);
      .sort ((a, b) => new Date (a.sentAtIso).get_time () - new Date (b.sentAtIso).get_time ());
  }
  async getMessagesByUser (user_id: string): Promise < Message[]> {
    return Array.from (this.messages.values ());
      .filter (m => m.sender_id === user_id || m.recipient_id === user_id);
      .sort ((a, b) => new Date (b.sentAtIso).get_time () - new Date (a.sentAtIso).get_time ());
  }
  async getAllMessages (): Promise < Message[]> {
    return Array.from (this.messages.values ());
  }
  // Conversation methods;
  async create_conversation (conversation: Conversation): Promise < Conversation> {
    this.conversations.set (conversation.id, conversation);
    return conversation;
  }
  async get_conversation (id: string): Promise < Conversation | null> {
    return this.conversations.get (id) || null,
  }
  async update_conversation (id: string, updates: Partial < Conversation>): Promise < Conversation | null> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_conversation = { ...conversation, ...updates }
    this.conversations.set (id, updated_conversation);
    return updated_conversation;
  }
  async delete_conversation (id: string): Promise < boolean> {
    return this.conversations.delete (id),
  }
  async getConversationsByUser (user_id: string): Promise < Conversation[]> {
    return Array.from (this.conversations.values ());
      .filter (c => c.participants.includes (user_id));
      .sort ((a, b) => new Date (b.lastMessageAtIso).get_time () - new Date (a.lastMessageAtIso).get_time ());
  }
  async getAllConversations (): Promise < Conversation[]> {
    return Array.from (this.conversations.values ());
  }
  // Utility methods;
  async getOrCreateConversation (userId1: string, userId2: string): Promise < Conversation> {
    // Find existing conversation between these two users;
    for (const conversation of this.conversations.values ()) {
      if (&& conversation.participants.includes (userId2)) {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        return conversation,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
<<<<<<< HEAD
    // Create new conversation
    const conversation: Conversation = {
<<<<<<< HEAD
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      participants: [userId1, userId2]
      lastMessageAtIso: new Date().toISOString()
      isArchived: false
      createdAtIso: new Date().toISOString()
    }
    return this.createConversation(conversation);
=======
      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date().toISOString(),
      isArchived: false,
      createdAtIso: new Date().toISOString()
    };

    return this && this.createConversation(conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;
<<<<<<< HEAD
    message.isRead = true;
<<<<<<< HEAD
    message.readAtIso = new Date().toISOString();
=======
    message.readAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(messageId, message);
=======

    message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),
    this && this.messages.set(messageId, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD
    return Array.from(this.messages.values())
      .filter(m => m.recipientId === userId && !m.isRead)
<<<<<<< HEAD
      .length;
=======
      .length
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.recipientId === userId && !m && m.isRead)
=======
    // Create new conversation;
    const conversation: Conversation = {
      id: `conv_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date ().toISOString (),
      is_archived: false,
      createdAtIso: new Date ().toISOString ();
    }
;
    return this.create_conversation (conversation);
  }
  async markMessageAsRead (message_id: string): Promise < boolean> {
    const message = this.messages.get (message_id);
    // Check condition
if (return false) {
  $2
}
    message.is_read = true;
    message.readAtIso = new Date ().toISOString (),
    this.messages.set (message_id, message);
    return true;
  }
  async getUnreadMessageCount (user_id: string): Promise < number> {
    return Array.from (this.messages.values ());
      .filter (m => m.recipient_id === user_id && !m.is_read);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      .length,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
  // Search methods
  async searchProjects(query: string): Promise<Project[]> {
<<<<<<< HEAD
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values()).filter(project =>
      project.title.toLowerCase().includes(lowercaseQuery) |
      project.summary.toLowerCase().includes(lowercaseQuery)
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.projects.values()).filter(project =>
      project && project.title.toLowerCase().includes(lowercaseQuery) ||
      project && project.summary.toLowerCase().includes(lowercaseQuery)
    ),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async searchOffers(query: string): Promise<Offer[]> {
<<<<<<< HEAD
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.offers.values()).filter(offer =>
      offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    ),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
    totalConversations: number;
=======
    totalConversations: number
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }> {
    return {
<<<<<<< HEAD
      totalProjects: this.projects.size
      totalOffers: this.offers.size
      totalApplications: this.applications.size
      totalMessages: this.messages.size
      totalConversations: this.conversations.size
    }
=======
      totalProjects: this && this.projects.size,
      totalOffers: this && this.offers.size,
      totalApplications: this && this.applications.size,
      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
// Singleton instance
export const marketplaceStore = new MarketplaceStore();
// Main functions for external use
export async function createProject(project: Project): Promise<Project> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.createProject(project);
=======
  return marketplaceStore.createProject(project)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.createProject(project),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getProject(id: string): Promise<Project | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.getProject(id);
=======
  return marketplaceStore.getProject(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.getProject(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
  return marketplaceStore && marketplaceStore.updateProject(id, updates);
}
export async function deleteProject(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.deleteProject(id);
=======
  return marketplaceStore.deleteProject(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.deleteProject(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createOffer(offer: Offer): Promise<Offer> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.createOffer(offer);
=======
  return marketplaceStore.createOffer(offer)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.createOffer(offer),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getOffer(id: string): Promise<Offer | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.getOffer(id);
=======
  return marketplaceStore.getOffer(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.getOffer(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
}
export async function deleteOffer(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.deleteOffer(id);
=======
  return marketplaceStore.deleteOffer(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.deleteOffer(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createApplication(application: Application): Promise<Application> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.createApplication(application);
=======
  return marketplaceStore.createApplication(application)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.createApplication(application),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getApplication(id: string): Promise<Application | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.getApplication(id);
=======
  return marketplaceStore.getApplication(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.getApplication(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
}
export async function deleteApplication(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.deleteApplication(id);
=======
  return marketplaceStore.deleteApplication(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.deleteApplication(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createMessage(message: Message): Promise<Message> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.createMessage(message);
=======
  return marketplaceStore.createMessage(message)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.createMessage(message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.getMessage(id);
=======
  return marketplaceStore.getMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.getMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return marketplaceStore.deleteMessage(id);
=======
  return marketplaceStore.deleteMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return marketplaceStore && marketplaceStore.deleteMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
// Utility functions
<<<<<<< HEAD
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
  return `${prefix}_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
}
=======




export function generateId(prefix: string = 'item'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  // Search methods;
  async search_projects (query: string): Promise < Project[]> {
    const lowercase_query = query.toLowerCase ();
    return Array.from (this.projects.values ()).filter (project =>;
      project.title.toLowerCase ().includes (lowercase_query) ||;
      project.summary.toLowerCase ().includes (lowercase_query)),
  }
  async search_offers (query: string): Promise < Offer[]> {
    const lowercase_query = query.toLowerCase ();
    return Array.from (this.offers.values ()).filter (offer =>;
      offer.scope_summary.toLowerCase ().includes (lowercase_query)),
  }
  // Cleanup methods;
  async clear_all (): Promise < void> {
    this.projects.clear ();
    this.offers.clear ();
    this.applications.clear ();
    this.messages.clear ();
    this.conversations.clear ();
  }
  // Statistics;
  async get_stats (): Promise<{
    total_projects: number;
    total_offers: number;
    total_applications: number;
    total_messages: number;
    total_conversations: number,
  }> {
    return {
      total_projects: this.projects.size,
      total_offers: this.offers.size,
      total_applications: this.applications.size,
      total_messages: this.messages.size,
      total_conversations: this.conversations.size;
    }
  }
}
// Singleton instance;
export const marketplace_store = new MarketplaceStore ();
;
// Main functions for external use;
export async function create_project (project: Project): Promise < Project> {
  return marketplace_store.create_project (project),
}
export async function get_project (id: string): Promise < Project | null> {
  return marketplace_store.get_project (id),
}
export async function update_project (id: string, updates: Partial < Project>): Promise < Project | null> {
  return marketplace_store.update_project (id, updates);
}
export async function delete_project (id: string): Promise < boolean> {
  return marketplace_store.delete_project (id),
}
export async function create_offer (offer: Offer): Promise < Offer> {
  return marketplace_store.create_offer (offer),
}
export async function get_offer (id: string): Promise < Offer | null> {
  return marketplace_store.get_offer (id),
}
export async function update_offer (id: string, updates: Partial < Offer>): Promise < Offer | null> {
  return marketplace_store.update_offer (id, updates);
}
export async function delete_offer (id: string): Promise < boolean> {
  return marketplace_store.delete_offer (id),
}
export async function create_application (application: Application): Promise < Application> {
  return marketplace_store.create_application (application),
}
export async function get_application (id: string): Promise < Application | null> {
  return marketplace_store.get_application (id),
}
export async function update_application (id: string, updates: Partial < Application>): Promise < Application | null> {
  return marketplace_store.update_application (id, updates);
}
export async function delete_application (id: string): Promise < boolean> {
  return marketplace_store.delete_application (id),
}
export async function create_message (message: Message): Promise < Message> {
  return marketplace_store.create_message (message),
}
export async function get_message (id: string): Promise < Message | null> {
  return marketplace_store.get_message (id),
}
export async function update_message (id: string, updates: Partial < Message>): Promise < Message | null> {
  return marketplace_store.update_message (id, updates);
}
export async function delete_message (id: string): Promise < boolean> {
  return marketplace_store.delete_message (id),
}
// Utility functions;
export function createProjectData (
  title: string,
  summary: string,
  client_id: string,
  additional_data?: Partial < Project>): Omit < Project, 'id' | 'created_at' | 'updated_at'> {
  return {
    title,
    summary,
    client_id,
    startDateIso: new Date ().toISOString (),
    status: 'DRAFT',
    timeline: [],
    documents: [],
    ...additional_data;
  }
}
export function createOfferData (
  client_id: string,
  talent_slug: string,
  scope_summary: string,
  payment_terms: Offer['payment_terms'],
  additional_data?: Partial < Offer>): Omit < Offer, 'id' | 'createdAtIso'> {
  return {
    client_id,
    talent_slug,
    startDateIso: new Date ().toISOString (),
    scope_summary,
    payment_terms,
    status: 'SENT',
    ...additional_data;
  }
}
export function createApplicationData (
  project_id: string,
  talent_slug: string,
  additional_data?: Partial < Application>): Omit < Application, 'id' | 'appliedAtIso'> {
  return {
    project_id,
    talent_slug,
    status: 'PENDING',
    ...additional_data;
  }
}
export function createMessageData (
  conversation_id: string,
  sender_id: string,
  recipient_id: string,
  body: string,
  additional_data?: Partial < Message>): Omit < Message, 'id' | 'sentAtIso'> {
  return {
    conversation_id,
    sender_id,
    recipient_id,
    body,
    is_read: false,
    ...additional_data;
  }
}
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
