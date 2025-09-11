<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Marketplace data store utilities

export interface Project {

<<<<<<< HEAD

// Marketplace data store utilitiesexport interface Project {;

<<<<<<< HEAD
// Marketplace data store utilitiesexport interface Project {
// Marketplace data store utilitiesexport interface Project {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

// Marketplace data store utilitiesexport interface Project {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    due_date: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue',
    dueDate: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    status: 'pending' | 'in_progress' | 'completed' | 'overdue'

=======
    due_date: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
<<<<<<< HEAD
<<<<<<< HEAD
    uploadedAtIso: string
=======

    uploadedAtIso: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    uploadedAtIso: string

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }>;
  budget?: {
    total: number;
    currency: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    type: 'fixed' | 'hourly' | 'milestone'
=======

    type: 'fixed' | 'hourly' | 'milestone'
  }
  createdAt: string;
  updatedAt: string
export interface Offer {
=======
}


export interface Offer {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

      dueDate: string

    }>;
  }
  agreementUrl?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;
      due_date: string,
    }>;
  }
  agreement_url?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expires_at?: string;
  notes?: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
  notes?: string
}


export interface Application {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  projectId: string;
  talentSlug: string;
  appliedAtIso: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';
  coverLetter?: string;
  proposedRate?: number;
  proposedTimeline?: string;
  portfolioItems?: string[];
  notes?: string
}


export interface Message {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  is_read: boolean,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
  isRead: boolean
}


export interface Conversation {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;

  createdAtIso: string

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

    return this.projects.get(id) |null

=======
    return this && this.projects.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {

    const project = this && this.projects.get(id);
    if (!project) return null,


=======
    if (!project) return null
    const updatedProject = {
      ...project
      ...updates
      updatedAt: new Date().toISOString()

    };

    this && this.projects.set(id, updatedProject);

    return updatedProject;
  }
  async deleteProject(id: string): Promise<boolean> {

    return this.projects.delete(id)

=======
    return this && this.projects.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)

=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)

=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

    return this.offers.get(id) |null

=======
    return this && this.offers.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {

    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }

    this.offers.set(id, updatedOffer);
    return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {

    return this.offers.delete(id)

=======
    return this && this.offers.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)

=======
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)

=======
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

    return this.applications.get(id) |null

=======
    return this && this.applications.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {

    if (!application) return null
    const updatedApplication = { ...application, ...updates }

    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {

    return this.applications.delete(id)

=======
    return this && this.applications.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)

=======
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)

=======
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

    return this.messages.get(id) |null

=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {

    return this.messages.delete(id)

=======
    return this && this.messages.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.conversationId === conversationId)
      .sort((a, b) => new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime());
  }
  async getMessagesByUser(userId: string): Promise<Message[]> {

    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.senderId === userId || m && m.recipientId === userId)
      .sort((a, b) => new Date(b && b.sentAtIso).getTime() - new Date(a && a.sentAtIso).getTime());

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

    return this.conversations.get(id) |null

=======
    return this && this.conversations.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }

    this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {

    return this.conversations.delete(id)

=======
    return this && this.conversations.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

        return conversation

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

      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date().toISOString(),
      isArchived: false,
      createdAtIso: new Date().toISOString()
    };

    return this && this.createConversation(conversation);

  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;

    message.readAtIso = new Date().toISOString()

    this.messages.set(messageId, message);
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {

      .length

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

    )

=======
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.projects.values()).filter(project =>
      project && project.title.toLowerCase().includes(lowercaseQuery) ||
      project && project.summary.toLowerCase().includes(lowercaseQuery)
    ),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async searchOffers(query: string): Promise<Offer[]> {

    )

=======
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    ),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

    totalConversations: number

  }> {
    return {

      totalProjects: this && this.projects.size,
      totalOffers: this && this.offers.size,
      totalApplications: this && this.applications.size,
      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size
    };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  createdAt: string;
  updatedAt: string

}
<<<<<<< HEAD
export interface Offer {
<<<<<<< HEAD

export interface Offer {;

export interface Offer {;
=======
=======
}


export interface Offer {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      dueDate: string
=======

      dueDate: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }>;
  }
  agreementUrl?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;

  notes?: string

      due_date: string,
    }>;
  }
  agreement_url?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expires_at?: string;
  notes?: string,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
<<<<<<< HEAD
export interface Application {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  notes?: string
}

export interface Application {;
export interface Application {

export interface Application {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  projectId: string;
  talentSlug: string;
  appliedAtIso: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';
<<<<<<< HEAD
  coverLetter?: string;
  proposedRate?: number;
  proposedTimeline?: string;
  portfolioItems?: string[];
  notes?: string
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  notes?: string

  cover_letter?: string;
  proposed_rate?: number;
  proposed_timeline?: string;
  portfolio_items?: string[];
  notes?: string,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export interface Message {
<<<<<<< HEAD

export interface Message {;

export interface Message {;
=======
=======
  notes?: string
}


export interface Message {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  isRead: boolean

  is_read: boolean,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
<<<<<<< HEAD
export interface Conversation {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  isRead: boolean
}

export interface Conversation {;
export interface Conversation {

export interface Conversation {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
<<<<<<< HEAD
  isArchived: boolean;
  createdAtIso: string
=======

  createdAtIso: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

    return this.projects.get(id) |null

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this && this.projects.get(id) || null,
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {

    const project = this && this.projects.get(id);
    if (!project) return null,


<<<<<<< HEAD
    return this.projects.get(id) |null
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    const project = this.projects.get(id);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!project) return null
    const updatedProject = {
      ...project
      ...updates
      updatedAt: new Date().toISOString()
<<<<<<< HEAD
    return this && this.projects.delete(id),
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)

    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)

    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),
    }
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id)
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)
=======

    };

    this && this.projects.set(id, updatedProject);

    return updatedProject;
  }
  async deleteProject(id: string): Promise<boolean> {

    return this.projects.delete(id)

=======
    return this && this.projects.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)

=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)

=======
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    return this && this.offers.get(id) || null,
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {

    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }

    return this.offers.get(id) |null
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
    const offer = this.offers.get(id);
    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }
=======

    return this.offers.get(id) |null

=======
    return this && this.offers.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {

    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.offers.set(id, updatedOffer);
    return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {
<<<<<<< HEAD
=======

    return this.offers.delete(id)

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this && this.offers.delete(id),
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)

    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId),
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)

    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug),
<<<<<<< HEAD
    return this.offers.delete(id)
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    return this && this.applications.get(id) || null,
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {

    if (!application) return null
    const updatedApplication = { ...application, ...updates }

    return this.applications.get(id) |null
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
    const application = this.applications.get(id);
    if (!application) return null
    const updatedApplication = { ...application, ...updates }
=======

    return this.applications.get(id) |null

=======
    return this && this.applications.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {

    if (!application) return null
    const updatedApplication = { ...application, ...updates }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {
<<<<<<< HEAD
=======

    return this.applications.delete(id)

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this && this.applications.delete(id),
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)

    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId),
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)

    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug),
<<<<<<< HEAD
    return this.applications.delete(id)
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    return this && this.messages.get(id) || null,
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

    return this.messages.get(id) |null
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
=======

    return this.messages.get(id) |null

=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this && this.messages.delete(id),
    return this.messages.delete(id)
=======

    return this.messages.delete(id)

=======
    return this && this.messages.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.conversationId === conversationId)
      .sort((a, b) => new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime());
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    return this && this.conversations.get(id) || null,
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }

    return this.conversations.get(id) |null
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }
=======

    return this.conversations.get(id) |null

=======
    return this && this.conversations.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
<<<<<<< HEAD
    return this && this.conversations.delete(id),
    return this.conversations.delete(id)
=======

    return this.conversations.delete(id)

=======
    return this && this.conversations.delete(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

        return conversation

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    for (const conversation of this && this.conversations.values()) {
      if (conversation && conversation.participants.includes(userId1) && conversation && conversation.participants.includes(userId2)) {
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
export function readDb(): MarketplaceDb {;
  ensureDataFile();
  try {;
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const data = JSON.parse(raw) as MarketplaceDb;
    if (!data.offers) data.offers = [];
    if (!data.projects) data.projects = [];
    return data;
  } catch (err) {;
    return { offers: [], projects: [] }
  }
}
;
export function writeDb(db: MarketplaceDb): void {;
  ensureDataFile();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
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
        return conversation,
      }
    }

      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date().toISOString(),
      isArchived: false,
      createdAtIso: new Date().toISOString()
    };

    return this && this.createConversation(conversation);

<<<<<<< HEAD
    for (const conversation of this.conversations.values()) {
      if (conversation.participants.includes(userId1) && conversation.participants.includes(userId2)) {
        return conversation
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
<<<<<<< HEAD
    message.isRead = true;
    message.readAtIso = new Date().toISOString()
=======

    message.readAtIso = new Date().toISOString()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.messages.set(messageId, message);
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD
=======

      .length

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.recipientId === userId && !m && m.isRead)
    // Create new conversation;
    const conversation: Conversation = {
      id: `conv_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
      participants: [userId1, userId2],
      lastMessageAtIso: new Date ().toISOString (),
      is_archived: false,
      createdAtIso: new Date ().toISOString ();
    }
;
export function saveOffer(offer: Offer): Offer {;
  const db = readDb();
  const index = db.offers.findIndex((o) => o.id === offer.id);
  if (index >= 0) {;
    db.offers[index] = offer;
  } else {;
    db.offers.push(offer);
=======
// Singleton instance
export const marketplaceStore = new MarketplaceStore();
// Main functions for external use
export async function createProject(project: Project): Promise<Project> {

  return marketplaceStore.createProject(project)

=======
  return marketplaceStore && marketplaceStore.createProject(project),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getProject(id: string): Promise<Project | null> {

  return marketplaceStore.getProject(id)

=======
  return marketplaceStore && marketplaceStore.getProject(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getProject(id)
}


export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {;

  return marketplaceStore.updateProject(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteProject(id: string): Promise<boolean> {

  return marketplaceStore.deleteProject(id)

=======
  return marketplaceStore && marketplaceStore.deleteProject(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createOffer(offer: Offer): Promise<Offer> {

  return marketplaceStore.createOffer(offer)

=======
  return marketplaceStore && marketplaceStore.createOffer(offer),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getOffer(id: string): Promise<Offer | null> {

  return marketplaceStore.getOffer(id)

=======
  return marketplaceStore && marketplaceStore.getOffer(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getOffer(id)
}


export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {;

  return marketplaceStore.updateOffer(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteOffer(id: string): Promise<boolean> {

  return marketplaceStore.deleteOffer(id)

=======
  return marketplaceStore && marketplaceStore.deleteOffer(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createApplication(application: Application): Promise<Application> {

  return marketplaceStore.createApplication(application)

=======
  return marketplaceStore && marketplaceStore.createApplication(application),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getApplication(id: string): Promise<Application | null> {

  return marketplaceStore.getApplication(id)

=======
  return marketplaceStore && marketplaceStore.getApplication(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getApplication(id)
}


export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {;

  return marketplaceStore.updateApplication(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteApplication(id: string): Promise<boolean> {

  return marketplaceStore.deleteApplication(id)

=======
  return marketplaceStore && marketplaceStore.deleteApplication(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createMessage(message: Message): Promise<Message> {

  return marketplaceStore.createMessage(message)

=======
  return marketplaceStore && marketplaceStore.createMessage(message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function getMessage(id: string): Promise<Message | null> {

  return marketplaceStore.getMessage(id)

=======
  return marketplaceStore && marketplaceStore.getMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return marketplaceStore.updateMessage(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteMessage(id: string): Promise<boolean> {

  return marketplaceStore.deleteMessage(id)

=======
  return marketplaceStore && marketplaceStore.deleteMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
// Utility functions
export function createProjectData(
  title: string
  summary: string
  clientId: string
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
    ...additionalData;
  };
}
export function createOfferData(
  clientId: string
  talentSlug: string
  scopeSummary: string
  paymentTerms: Offer['paymentTerms']
  additionalData?: Partial<Offer>
): Omit<Offer, 'id' | 'createdAtIso'> {
  return {
    clientId,
    talentSlug,
    startDateIso: new Date().toISOString(),
    scopeSummary,
    paymentTerms,
    status: 'SENT',
    ...additionalData;
  };
}
export function createApplicationData(
  projectId: string
  talentSlug: string
  additionalData?: Partial<Application>
): Omit<Application, 'id' | 'appliedAtIso'> {
  return {
    projectId,
    talentSlug,
    status: 'PENDING',
    ...additionalData;
  };
}
export function createMessageData(
  conversationId: string
  senderId: string
  recipientId: string
  body: string
  additionalData?: Partial<Message>
): Omit<Message, 'id' | 'sentAtIso'> {
  return {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======

=======
    conversationId,
    senderId,
    recipientId,
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
<<<<<<< HEAD
    message.is_read = true;
    message.readAtIso = new Date ().toISOString (),
    this.messages.set (message_id, message);
    return true;
  }
  async getUnreadMessageCount (user_id: string): Promise < number> {
    return Array.from (this.messages.values ());
      .filter (m => m.recipient_id === user_id && !m.is_read);
      .length,
  }

    )

    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.projects.values()).filter(project =>
      project && project.title.toLowerCase().includes(lowercaseQuery) ||
      project && project.summary.toLowerCase().includes(lowercaseQuery)
    ),
  }
  async searchOffers(query: string): Promise<Offer[]> {

    )

    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    ),
<<<<<<< HEAD
    return Array.from(this.messages.values())
      .filter(m => m.recipientId === userId && !m.isRead)
      .length
  }
  // Search methods
  async searchProjects(query: string): Promise<Project[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values()).filter(project =>
      project.title.toLowerCase().includes(lowercaseQuery) |
      project.summary.toLowerCase().includes(lowercaseQuery)
    )
  }
  async searchOffers(query: string): Promise<Offer[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.offers.values()).filter(offer =>
      offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    )
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    totalConversations: number
  }> {
    return {
      totalProjects: this.projects.size
      totalOffers: this.offers.size
      totalApplications: this.applications.size
      totalMessages: this.messages.size
      totalConversations: this.conversations.size
    }
=======

    totalConversations: number

  }> {
    return {

      totalProjects: this && this.projects.size,
      totalOffers: this && this.offers.size,
      totalApplications: this && this.applications.size,
      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size
    };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
// Singleton instance
export const marketplaceStore = new MarketplaceStore();
// Main functions for external use
export async function createProject(project: Project): Promise<Project> {
<<<<<<< HEAD
=======

  return marketplaceStore.createProject(project)

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return marketplaceStore && marketplaceStore.createProject(project),
}
export async function getProject(id: string): Promise<Project | null> {

  return marketplaceStore.getProject(id)

  return marketplaceStore && marketplaceStore.getProject(id),
<<<<<<< HEAD
  return marketplaceStore.createProject(project)
}
export async function getProject(id: string): Promise<Project | null> {
  return marketplaceStore.getProject(id)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
<<<<<<< HEAD
=======
  return marketplaceStore && marketplaceStore.updateProject(id, updates);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return marketplaceStore.getProject(id)
}


export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {;

  return marketplaceStore.updateProject(id, updates);
}
export async function deleteProject(id: string): Promise<boolean> {

  return marketplaceStore.deleteProject(id)

  return marketplaceStore && marketplaceStore.deleteProject(id),
}
export async function createOffer(offer: Offer): Promise<Offer> {

  return marketplaceStore.createOffer(offer)

  return marketplaceStore && marketplaceStore.createOffer(offer),
}
export async function getOffer(id: string): Promise<Offer | null> {

  return marketplaceStore.getOffer(id)

  return marketplaceStore && marketplaceStore.getOffer(id),
<<<<<<< HEAD

export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {;
  return marketplaceStore.updateProject(id, updates);
}
export async function deleteProject(id: string): Promise<boolean> {
  return marketplaceStore.deleteProject(id)
}
export async function createOffer(offer: Offer): Promise<Offer> {
  return marketplaceStore.createOffer(offer)
}
export async function getOffer(id: string): Promise<Offer | null> {
  return marketplaceStore.getOffer(id)
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return marketplaceStore.getOffer(id)
}


export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {;

  return marketplaceStore.updateOffer(id, updates);
}
export async function deleteOffer(id: string): Promise<boolean> {

  return marketplaceStore.deleteOffer(id)

  return marketplaceStore && marketplaceStore.deleteOffer(id),
}
export async function createApplication(application: Application): Promise<Application> {

  return marketplaceStore.createApplication(application)

  return marketplaceStore && marketplaceStore.createApplication(application),
}
export async function getApplication(id: string): Promise<Application | null> {

  return marketplaceStore.getApplication(id)

  return marketplaceStore && marketplaceStore.getApplication(id),
<<<<<<< HEAD

export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {;
  return marketplaceStore.updateOffer(id, updates);
}
export async function deleteOffer(id: string): Promise<boolean> {
  return marketplaceStore.deleteOffer(id)
}
export async function createApplication(application: Application): Promise<Application> {
  return marketplaceStore.createApplication(application)
}
export async function getApplication(id: string): Promise<Application | null> {
  return marketplaceStore.getApplication(id)
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return marketplaceStore.getApplication(id)
}


export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {;

  return marketplaceStore.updateApplication(id, updates);
}
export async function deleteApplication(id: string): Promise<boolean> {

  return marketplaceStore.deleteApplication(id)

  return marketplaceStore && marketplaceStore.deleteApplication(id),
}
export async function createMessage(message: Message): Promise<Message> {

  return marketplaceStore.createMessage(message)

  return marketplaceStore && marketplaceStore.createMessage(message),
}
export async function getMessage(id: string): Promise<Message | null> {

  return marketplaceStore.getMessage(id)

  return marketplaceStore && marketplaceStore.getMessage(id),
<<<<<<< HEAD

export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {;
  return marketplaceStore.updateApplication(id, updates);
}
export async function deleteApplication(id: string): Promise<boolean> {
  return marketplaceStore.deleteApplication(id)
}
export async function createMessage(message: Message): Promise<Message> {
  return marketplaceStore.createMessage(message)
}
export async function getMessage(id: string): Promise<Message | null> {
  return marketplaceStore.getMessage(id)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
<<<<<<< HEAD
  return marketplaceStore.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return marketplaceStore.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {

  return marketplaceStore.deleteMessage(id)

  return marketplaceStore && marketplaceStore.deleteMessage(id),

export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;
  return marketplaceStore.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
  return marketplaceStore.deleteMessage(id)
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
    title,
    summary,
    clientId,
    startDateIso: new Date().toISOString(),
    status: 'DRAFT',
    timeline: [],
    documents: [],
    ...additionalData;
  };
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
    clientId,
    talentSlug,
    startDateIso: new Date().toISOString(),
    scopeSummary,
    paymentTerms,
    status: 'SENT',
    ...additionalData;
  };
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
    projectId,
    talentSlug,
    status: 'PENDING',
    ...additionalData;
  };
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

=======
  return marketplaceStore && marketplaceStore.updateMessage(id, updates);
=======
  return marketplaceStore.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return marketplaceStore.updateMessage(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteMessage(id: string): Promise<boolean> {

  return marketplaceStore.deleteMessage(id)

=======
  return marketplaceStore && marketplaceStore.deleteMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
// Utility functions


=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    conversationId,
    senderId,
    recipientId,
    body,
    isRead: false,
    ...additionalData;
  };
}
<<<<<<< HEAD

export function generateId(prefix: string = 'item'): string {;
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

}
=======
=======
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
    isRead: false,
    ...additionalData;
  };
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
