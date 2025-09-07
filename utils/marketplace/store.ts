
// Marketplace data store utilities;
export interface Project  {// Marketplace data store utilitiesexport interface Project  {ursor/fix-website-loading-errors-and-merge-6662;
// Marketplace data store utilities

export interface Project {


// Marketplace data store utilitiesexport interface Project {;


// Marketplace data store utilitiesexport interface Project {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug?: string;
  startDateIso: string;
  endDateIso?: string;
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{id: string;
    title: string;


origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b

    description: string;status: 'pending' | 'in_progress' | 'completed' | 'overdue';
    status: 'pending' | 'in_progress' | 'completed' | 'overdue';
    due_date: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'}>;
  documents: Array<{id: string;
    name: string;
    url: string;uploadedAtIso: string;
    uploadedAtIso: string;
  }>;
  budget?: {total: number;
    currency: string;type: 'fixed' | 'hourly' | 'milestone';
  }
  createdAt: string;
  updatedAt: string;
}}}
export interface Offer {}export interface Offer  {ursor/fix-website-loading-errors-and-merge-6662;
    description: string;
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;



    uploadedAtIso: string

origin/cursor/expand-services-advertise-and-build-project-c28b

  }>;
  budget?: {
    total: number;
    currency: string;


}
export interface Offer {
origin/cursor/expand-services-advertise-and-build-project-c28b

}
}


export interface Offer {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

}
export interface Offer {
}
export interface Offer {

}
export interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: {type: 'fixed' | 'hourly' | 'milestone';
    amount?: number;
    hourlyRate?: number;
    milestones?: Array<{title: string;
      amount: number;dueDate: string;
      dueDate: string;
    milestones?: Array<{
      title: string;
      amount: number;



      dueDate: string

origin/cursor/expand-services-advertise-and-build-project-c28b

    }>;
import fs from "fs";
import path from "path";
import { MarketplaceDb, Offer, Project } from "./types";
const DATA_DIR = path.join(process.cwd(), "data", "runtime"),
const DB_PATH = path.join($2);
function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true})
  }
  if (!fs.existsSync(DB_PATH)) {
    const initial: MarketplaceDb = { offers: [], projects: [] },
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8")
  }
}


      due_date: string,
      due_date: string
    }>;
  }
  agreement_url?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expires_at?: string;
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
}
export interface Application {
  notes?: string
}
}
export interface Application {
}
export interface Application {



}
export interface Application {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  notes?: string;
}
export interface Application  {notes?: string;
}
export interface Application  {}
export interface Application  {notes?: string;
}export interface Application  {ursor/fix-website-loading-errors-and-merge-6662;
  notes?: string
}
export interface Application {
  id: string;
  projectId: string;
  talentSlug: string;
  appliedAtIso: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';notes?: string;
}notes?: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN';



  notes?: string

origin/cursor/expand-services-advertise-and-build-project-c28b

  cover_letter?: string;
  proposed_rate?: number;
  proposed_timeline?: string;
  portfolio_items?: string[];
}
export interface Message {
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b

}
  notes?: string
}


export interface Message {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  notes?: string;
}
  notes?: string}
export interface Message  {notes?: string;
}export interface Message  {ursor/fix-website-loading-errors-and-merge-6662;
  notes?: string
}
export interface Message {


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
  readAtIso?: string;isRead: boolean;
}
export interface Conversation {}
export interface Conversation  {is_read: boolean;
}
export interface Conversation  {is_read: boolean,isRead: boolean;
  is_read: boolean}
export interface Conversation  {isRead: boolean;
}export interface Conversation  {ursor/fix-website-loading-errors-and-merge-6662;
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;createdAtIso: string;
  createdAtIso: string;
}
class MarketplaceStore {private projects: Map<string, Project> = new Map()private offers: Map<string, Offer> = new Map()private applications: Map<string, Application> = new Map()private messages: Map<string, Message> = new Map()private conversations: Map<string, Conversation> = new Map()// Project methods;
  async createProject(project: Project): Promise<Project> {this.projects.set(project.id, project)return project;
  }
  async getProject(id: string): Promise<Project | null> {return this.projects.get(id) |null;
    return this && this.projects.get(id) || null}
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {const project = this && this.projects.get(id)if (!project) return null,if (!project) return null;
    const updatedProject = {...project;
      ...updates;
      updatedAt: new Date().toISOString()}this && this.projects.set(id, updatedProject)return updatedProject;
  readAtIso?: string;
  is_read: boolean,
  is_read: boolean,

  isRead: boolean

  is_read: boolean,
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
}
export interface Conversation {
  isRead: boolean
}

}
export interface Conversation {



}
export interface Conversation {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  is_read: boolean
}
export interface Conversation {
  is_read: boolean
}
export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;



  createdAtIso: string

origin/cursor/expand-services-advertise-and-build-project-c28b

}
class MarketplaceStore {
  private projects: Map<string, Project> = new Map();
  private offers: Map<string, Offer> = new Map();
  private applications: Map<string, Application> = new Map();
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();
  // Project methods
    this.projects.set(project.id, project);
    return project;
  }
  async getProject(id: string): Promise<Project | null> {


origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async createProject(project: Project): Promise<Project> {}
  async createProject(project: Project): Promise<Project> {}
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {

    const project = this && this.projects.get(id);
    if (!project) return null,


origin/cursor/expand-services-advertise-and-build-project-c28b



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

    return this && this.projects.delete(id),
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async getProjectsByClient(clientId: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.clientId === clientId)

origin/cursor/automate-test-improve-and-merge-code-382a
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId)

    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId),
    return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId)
  }
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {

    return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)

origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug)

    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug),



    return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug)
  }
  async getAllProjects(): Promise<Project[]> {
    return Array && Array.from(this && this.projects.values());
  }
  // Offer methods
  async createOffer(offer: Offer): Promise<Offer> {
    this && this.offers.set(offer && offer.id, offer);
    return offer;
  }

    return this.offers.get(id) |null

    return this && this.offers.get(id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async getOffer(id: string): Promise<Offer | null> {}
  async getOffer(id: string): Promise<Offer | null> {}
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {

    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }

origin/cursor/expand-services-advertise-and-build-project-c28b


    this.offers.set(id, updatedOffer);
    const offer = this && this.offers.get(id);
    if (!offer) return null,

    const updatedOffer = { ...offer, ...updates };
    this && this.offers.set(id, updatedOffer);
    return updatedOffer;
  }

    return this.offers.delete(id)

    return this && this.offers.delete(id),
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async deleteOffer(id: string): Promise<boolean> {}
  async deleteOffer(id: string): Promise<boolean> {}
  async getOffersByClient(clientId: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)

origin/cursor/automate-test-improve-and-merge-code-382a
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId)

    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId),
    return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId)
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {

    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)

origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug)

    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug),



    return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug)
  }
  async getAllOffers(): Promise<Offer[]> {
    return Array && Array.from(this && this.offers.values());
  }
  // Application methods
  async createApplication(application: Application): Promise<Application> {
    this && this.applications.set(application && application.id, application);
    return application;
  }

    return this.applications.get(id) |null

    return this && this.applications.get(id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async getApplication(id: string): Promise<Application | null> {}
  async getApplication(id: string): Promise<Application | null> {}
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {

    if (!application) return null
    const updatedApplication = { ...application, ...updates }

origin/cursor/expand-services-advertise-and-build-project-c28b


    this.applications.set(id, updatedApplication);
    const application = this && this.applications.get(id);
    if (!application) return null,

    const updatedApplication = { ...application, ...updates };
    this && this.applications.set(id, updatedApplication);
    return updatedApplication;
  }

    return this.applications.delete(id)

    return this && this.applications.delete(id),
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async deleteApplication(id: string): Promise<boolean> {}
  async deleteApplication(id: string): Promise<boolean> {}
  async getApplicationsByProject(projectId: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)

origin/cursor/automate-test-improve-and-merge-code-382a
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId)

    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId),
    return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId)
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {

    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)

origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug)

    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug),



    return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug)
  }
  async getAllApplications(): Promise<Application[]> {
    return Array && Array.from(this && this.applications.values());
  }
  // Message methods
  async createMessage(message: Message): Promise<Message> {
    this && this.messages.set(message && message.id, message);
    return message;
  }

    return this.messages.get(id) |null

    return this && this.messages.get(id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a

  }
  async getMessage(id: string): Promise<Message | null> {}
  async getMessage(id: string): Promise<Message | null> {}
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

origin/cursor/expand-services-advertise-and-build-project-c28b


    this.messages.set(id, updatedMessage);
    const message = this && this.messages.get(id);
    if (!message) return null,

    const updatedMessage = { ...message, ...updates };
    this && this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    return this && this.messages.delete(id),
    return this && this.messages.delete(id),


origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    return this && this.messages.delete(id)
    return this && this.messages.delete(id)
  }
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.conversationId === conversationId)
      .sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime());
  }


origin/cursor/expand-services-advertise-and-build-project-c28b

  }
  async getMessagesByUser(userId: string): Promise<Message[]> {}
  async getMessagesByUser(userId: string): Promise<Message[]> {}
  async getAllMessages(): Promise<Message[]> {
    return Array && Array.from(this && this.messages.values());
  }
  // Conversation methods
  async createConversation(conversation: Conversation): Promise<Conversation> {
    this && this.conversations.set(conversation && conversation.id, conversation);
    return conversation;
  }


origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getConversation(id: string): Promise<Conversation | null> {}
  async getConversation(id: string): Promise<Conversation | null> {}
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }

origin/cursor/expand-services-advertise-and-build-project-c28b


    this.conversations.set(id, updatedConversation);
    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,

    const updatedConversation = { ...conversation, ...updates };
    this && this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
    return this && this.conversations.delete(id),
    return this && this.conversations.delete(id),


origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    return this && this.conversations.delete(id)
    return this && this.conversations.delete(id)
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


origin/cursor/expand-services-advertise-and-build-project-c28b

  is_archived: boolean;
  createdAtIso: string
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
    return this.projects.get (id) || null
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
    return this.projects.delete (id)
  }
  async getProjectsByClient (client_id: string): Promise < Project[]> {
    return Array.from (this.projects.values ()).filter (p => p.client_id === client_id)
  }
  async getProjectsByTalent (talent_slug: string): Promise < Project[]> {
    return Array.from (this.projects.values ()).filter (p => p.talent_slug === talent_slug)
  }
  async getAllProjects (): Promise < Project[]> {
    return Array.from (this.projects.values ());
  }
  async deleteProject(id: string): Promise<boolean> {return this.projects.delete(id)return this && this.projects.delete(id)}
  async getProjectsByClient(clientId: string): Promise<Project[]> {return Array.from(this.projects.values()).filter(p => p.clientId === clientId)return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId)return Array && Array.from(this && this.projects.values()).filter(p => p && p.clientId === clientId)}
  async getProjectsByTalent(talentSlug: string): Promise<Project[]> {return Array.from(this.projects.values()).filter(p => p.talentSlug === talentSlug)return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug)return Array && Array.from(this && this.projects.values()).filter(p => p && p.talentSlug === talentSlug)}
  async getAllProjects(): Promise<Project[]> {return Array && Array.from(this && this.projects.values())}
  // Offer methods;
  async createOffer(offer: Offer): Promise<Offer> {this && this.offers.set(offer && offer.id, offer)return offer;
  }
  async getOffer(id: string): Promise<Offer | null> {return this.offers.get(id) |null;
    return this.offers.get(id) |null;
    return this && this.offers.get(id) || null}
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {if (!offer) return null;
    const updatedOffer = { ...offer, ...updates }this.offers.set(id, updatedOffer)const offer = this && this.offers.get(id)if (!offer) return null,const updatedOffer = { ...offer, ...updates }this && this.offers.set(id, updatedOffer)return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {return this.offers.delete(id)return this.offers.delete(id)return this && this.offers.delete(id)}
  async getOffersByClient(clientId: string): Promise<Offer[]> {return Array.from(this.offers.values()).filter(o => o.clientId === clientId)return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId)return Array && Array.from(this && this.offers.values()).filter(o => o && o.clientId === clientId)}
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug)return Array && Array.from(this && this.offers.values()).filter(o => o && o.talentSlug === talentSlug)}
  async getAllOffers(): Promise<Offer[]> {return Array && Array.from(this && this.offers.values())}
  // Application methods;
  async createApplication(application: Application): Promise<Application> {this && this.applications.set(application && application.id, application)return application;
  }
  async getApplication(id: string): Promise<Application | null> {return this.applications.get(id) |null;
    return this.applications.get(id) |null;
    return this && this.applications.get(id) || null}
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {if (!application) return null;
    const updatedApplication = { ...application, ...updates }this.applications.set(id, updatedApplication)const application = this && this.applications.get(id)if (!application) return null,const updatedApplication = { ...application, ...updates }this && this.applications.set(id, updatedApplication)return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {return this.applications.delete(id)return this.applications.delete(id)return this && this.applications.delete(id)}
  async getApplicationsByProject(projectId: string): Promise<Application[]> {return Array.from(this.applications.values()).filter(a => a.projectId === projectId)return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId)return Array && Array.from(this && this.applications.values()).filter(a => a && a.projectId === projectId)}
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug)return Array && Array.from(this && this.applications.values()).filter(a => a && a.talentSlug === talentSlug)}
  async getAllApplications(): Promise<Application[]> {return Array && Array.from(this && this.applications.values())}
  // Message methods;
  async createMessage(message: Message): Promise<Message> {this && this.messages.set(message && message.id, message)return message;
  }
  async getMessage(id: string): Promise<Message | null> {return this.messages.get(id) |null;
    return this.messages.get(id) |null;
    return this && this.messages.get(id) || null}
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {if (!message) return null;
    const updatedMessage = { ...message, ...updates }this.messages.set(id, updatedMessage)const message = this && this.messages.get(id)if (!message) return null,const updatedMessage = { ...message, ...updates }this && this.messages.set(id, updatedMessage)return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {return this.messages.delete(id)return this && this.messages.delete(id),return this && this.messages.delete(id),return this.messages.delete(id)return this && this.messages.delete(id)}
  async getMessagesByConversation(conversationId: string): Promise<Message[]> {return Array && Array.from(this && this.messages.values()).filter(m => m && m.conversationId === conversationId).sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime())}
  async getMessagesByUser(userId: string): Promise<Message[]> {return Array && Array.from(this && this.messages.values()).filter(m => m && m.senderId === userId || m && m.recipientId === userId).sort((a, b) => new Date(b && b.sentAtIso).getTime() - new Date(a && a.sentAtIso).getTime())}
  async getAllMessages(): Promise<Message[]> {return Array && Array.from(this && this.messages.values())}
  // Conversation methods;
  async createConversation(conversation: Conversation): Promise<Conversation> {this && this.conversations.set(conversation && conversation.id, conversation)return conversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {return this.conversations.get(id) |null;
    return this.conversations.get(id) |null;
    return this && this.conversations.get(id) || null}
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {if (!conversation) return null;
    const updatedConversation = { ...conversation, ...updates }this.conversations.set(id, updatedConversation)const conversation = this && this.conversations.get(id)if (!conversation) return null,const updatedConversation = { ...conversation, ...updates }this && this.conversations.set(id, updatedConversation)return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {return this.conversations.delete(id)return this && this.conversations.delete(id),return this && this.conversations.delete(id),return this.conversations.delete(id)return this && this.conversations.delete(id)}
  async getConversationsByUser(userId: string): Promise<Conversation[]> {return Array && Array.from(this && this.conversations.values()).filter(c => c && c.participants.includes(userId)).sort((a, b) => new Date(b && b.lastMessageAtIso).getTime() - new Date(a && a.lastMessageAtIso).getTime())}
  async getAllConversations(): Promise<Conversation[]> {return Array && Array.from(this && this.conversations.values())}
  // Utility methods;
  async getOrCreateConversation(userId1: string, userId2: string): Promise<Conversation> {// Find existing conversation between these two users;
        return conversation;
        return conversation;
      }
    }id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,participants: [userId1, userId2],lastMessageAtIso: new Date().toISOString(),isArchived: false,createdAtIso: new Date().toISOString()}return this && this.createConversation(conversation)is_archived: boolean;
  createdAtIso: string;
        return conversation;
    for (const conversation of this && this.conversations.values()) {if (conversation && conversation.participants.includes(userId1) && conversation && conversation.participants.includes(userId2)) {is_archived: boolean;
  createdAtIso: string;
}
class MarketplaceStore {private projects: Map < string, Project> = new Map ()private offers: Map < string, Offer> = new Map ()private applications: Map < string, Application> = new Map ()private messages: Map < string, Message> = new Map ()private conversations: Map < string, Conversation> = new Map ()// Project methods;
  async create_project (project: Project): Promise < Project> {this.projects.set (project.id, project)return project;
  }
  async get_project (id: string): Promise < Project | null> {return this.projects.get (id) || null;
    return this.projects.get (id) || null;
  }
  async update_project (id: string, updates: Partial < Project>): Promise < Project | null> {const project = this.projects.get (id)// Check condition;
if (return null, ) {$2;
}
    const updated_project = {...project,...updates,updated_at: new Date ().toISOString ()}this.projects.set (id, updated_project)return updated_project;
  }
  async delete_project (id: string): Promise < boolean> {return this.projects.delete (id)}
  async getProjectsByClient (client_id: string): Promise < Project[]> {return Array.from (this.projects.values ()).filter (p => p.client_id === client_id)}
  async getProjectsByTalent (talent_slug: string): Promise < Project[]> {return Array.from (this.projects.values ()).filter (p => p.talent_slug === talent_slug)return this.projects.delete (id)}
  async getProjectsByClient (client_id: string): Promise < Project[]> {return Array.from (this.projects.values ()).filter (p => p.client_id === client_id)}
  async getProjectsByTalent (talent_slug: string): Promise < Project[]> {return Array.from (this.projects.values ()).filter (p => p.talent_slug === talent_slug)}
  async getAllProjects (): Promise < Project[]> {return Array.from (this.projects.values ())}
  // Offer methods;
  async create_offer (offer: Offer): Promise < Offer> {this.offers.set (offer.id, offer)return offer;
  }
  async get_offer (id: string): Promise < Offer | null> {return this.offers.get (id) || null;
    return this.offers.get (id) || null;
  }
  async update_offer (id: string, updates: Partial < Offer>): Promise < Offer | null> {const offer = this.offers.get (id)// Check condition;
if (return null, ) {$2;
}
    const updated_offer = { ...offer, ...updates }
    this.offers.set (id, updated_offer)return updated_offer;
  }
  async delete_offer (id: string): Promise < boolean> {return this.offers.delete (id)}
  async getOffersByClient (client_id: string): Promise < Offer[]> {return Array.from (this.offers.values ()).filter (object => o.client_id === client_id)}
  async getOffersByTalent (talent_slug: string): Promise < Offer[]> {return Array.from (this.offers.values ()).filter (object => o.talent_slug === talent_slug)return this.offers.delete (id)}
  async getOffersByClient (client_id: string): Promise < Offer[]> {return Array.from (this.offers.values ()).filter (object => o.client_id === client_id)}
  async getOffersByTalent (talent_slug: string): Promise < Offer[]> {return Array.from (this.offers.values ()).filter (object => o.talent_slug === talent_slug)}
  async getAllOffers (): Promise < Offer[]> {return Array.from (this.offers.values ())}
  // Application methods;
  async create_application (application: Application): Promise < Application> {this.applications.set (application.id, application)return application;
  }
  async get_application (id: string): Promise < Application | null> {return this.applications.get (id) || null;
    return this.applications.get (id) || null;
  }
  async update_application (id: string, updates: Partial < Application>): Promise < Application | null> {const application = this.applications.get (id)// Check condition;
if (return null, ) {$2;
}
    const updated_application = { ...application, ...updates }
    this.applications.set (id, updated_application)return updated_application;
  }
  async delete_application (id: string): Promise < boolean> {return this.applications.delete (id)}
  async getApplicationsByProject (project_id: string): Promise < Application[]> {return Array.from (this.applications.values ()).filter (array => a.project_id === project_id)}
  async getApplicationsByTalent (talent_slug: string): Promise < Application[]> {return Array.from (this.applications.values ()).filter (array => a.talent_slug === talent_slug)return this.applications.delete (id)}
  async getApplicationsByProject (project_id: string): Promise < Application[]> {return Array.from (this.applications.values ()).filter (array => a.project_id === project_id)}
  async getApplicationsByTalent (talent_slug: string): Promise < Application[]> {return Array.from (this.applications.values ()).filter (array => a.talent_slug === talent_slug)}
  async getAllApplications (): Promise < Application[]> {return Array.from (this.applications.values ())}
  // Message methods;
  async create_message (message: Message): Promise < Message> {this.messages.set (message.id, message)return message;
  }
  async get_message (id: string): Promise < Message | null> {return this.messages.get (id) || null;
    return this.messages.get (id) || null;
  }
  async update_message (id: string, updates: Partial < Message>): Promise < Message | null> {const message = this.messages.get (id)// Check condition;
if (return null, ) {$2;
}
    const updated_message = { ...message, ...updates }
    this.messages.set (id, updated_message)return updated_message;
  }
  async delete_message (id: string): Promise < boolean> {return this.messages.delete (id)return this.messages.delete (id)}
  async getMessagesByConversation (conversation_id: string): Promise < Message[]> {return Array.from (this.messages.values ()).filter (m => m.conversation_id === conversation_id).sort ((a, b) => new Date (a.sentAtIso).get_time () - new Date (b.sentAtIso).get_time ())}
  async getMessagesByUser (user_id: string): Promise < Message[]> {return Array.from (this.messages.values ()).filter (m => m.sender_id === user_id || m.recipient_id === user_id).sort ((a, b) => new Date (b.sentAtIso).get_time () - new Date (a.sentAtIso).get_time ())}
  async getAllMessages (): Promise < Message[]> {return Array.from (this.messages.values ())}
  // Conversation methods;
  async create_conversation (conversation: Conversation): Promise < Conversation> {this.conversations.set (conversation.id, conversation)return conversation;
  }
  async get_conversation (id: string): Promise < Conversation | null> {return this.conversations.get (id) || null;
    return this.conversations.get (id) || null;
  }
  async update_conversation (id: string, updates: Partial < Conversation>): Promise < Conversation | null> {const conversation = this.conversations.get (id)// Check condition;
if (return null, ) {$2;
}
    const updated_conversation = { ...conversation, ...updates }
    this.conversations.set (id, updated_conversation)return updated_conversation;
  }
  async delete_conversation (id: string): Promise < boolean> {return this.conversations.delete (id)return this.conversations.delete (id)}
  async getConversationsByUser (user_id: string): Promise < Conversation[]> {return Array.from (this.conversations.values ()).filter (c => c.participants.includes (user_id)).sort ((a, b) => new Date (b.lastMessageAtIso).get_time () - new Date (a.lastMessageAtIso).get_time ())}
  async getAllConversations (): Promise < Conversation[]> {return Array.from (this.conversations.values ())}
  // Utility methods;
  async getOrCreateConversation (userId1: string, userId2: string): Promise < Conversation> {// Find existing conversation between these two users;
    for (const conversation of this.conversations.values ()) {if (&& conversation.participants.includes (userId2)) {) {$2;
}
origin/cursor/automate-test-improve-and-merge-code-20a4
        return conversation,
origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
        return conversation,

      }
    }


origin/cursor/expand-services-advertise-and-build-project-c28b

        return conversation;
      }
    }return conversation}
    }id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,participants: [userId1, userId2],lastMessageAtIso: new Date().toISOString(),isArchived: false,createdAtIso: new Date().toISOString()}return this && this.createConversation(conversation)}
  async markMessageAsRead(messageId: string): Promise<boolean> {const message = this && this.messages.get(messageId)if (!message) return false;message.readAtIso = new Date().toISOString()message.readAtIso = new Date().toISOString()this.messages.set(messageId, message)message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),this && this.messages.set(messageId, message)return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {.length;
      .length;
  })}
  async searchOffers(query: string): Promise<Offer[]> {)return Array && Array.from(this && this.messages.values()).filter(m => m && m.recipientId === userId && !m && m.isRead).length;
    return Array && Array.from(this && this.messages.values()).filter(m => m && m.recipientId === userId && !m && m.isRead)// Create new conversation;
    const conversation: Conversation = {id: `conv_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,participants: [userId1, userId2],lastMessageAtIso: new Date ().toISOString (),is_archived: false,createdAtIso: new Date ().toISOString ()}return this.create_conversation (conversation)}
  async markMessageAsRead (message_id: string): Promise < boolean> {const message = this.messages.get (message_id)// Check condition;
if (return false) {$2;
        return conversation
      }
    }
  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;



    message.readAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

    this.messages.set(messageId, message);

    message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),
    this && this.messages.set(messageId, message);
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {



      .length

origin/cursor/expand-services-advertise-and-build-project-c28b

    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.recipientId === userId && !m && m.isRead)
    return Array && Array.from(this && this.messages.values())
      .filter(m => m && m.recipientId === userId && !m && m.isRead)

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
    return this.create_conversation (conversation);
  }
  async markMessageAsRead (message_id: string): Promise < boolean> {
    const message = this.messages.get (message_id);
    // Check condition
if (return false) {
  $2
}
    message.is_read = true;
    message.readAtIso = new Date ().toISOString (),this.messages.set (message_id, message)return true;
  }
  async getUnreadMessageCount (user_id: string): Promise < number> {return Array.from (this.messages.values ()).filter (m => m.recipient_id === user_id && !m.is_read).length;
  }.length})const lowercaseQuery = query && query.toLowerCase()return Array && Array.from(this && this.projects.values()).filter(project =>;
      project && project.title.toLowerCase().includes(lowercaseQuery) ||;
      project && project.summary.toLowerCase().includes(lowercaseQuery))}
  async searchOffers(query: string): Promise<Offer[]> {const lowercaseQuery = query && query.toLowerCase()return Array && Array.from(this && this.offers.values()).filter(offer =>;
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)))}
  async searchOffers(query: string): Promise<Offer[]> {)const lowercaseQuery = query && query.toLowerCase()return Array && Array.from(this && this.offers.values()).filter(offer =>;
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery))}
  // Cleanup methods;
  async clearAll(): Promise<void> {this && this.projects.clear()this && this.offers.clear()this && this.applications.clear()this && this.messages.clear()this && this.conversations.clear()}
  // Statistics;
  async getStats(): Promise<{totalProjects: number;
    totalOffers: number;
    totalApplications: number;
    totalMessages: number;totalConversations: number;
  }> {return {totalProjects: this && this.projects.size,totalOffers: this && this.offers.size,totalApplications: this && this.applications.size,totalMessages: this && this.messages.size,totalConversations: this && this.conversations.size;
    }}
}
// Singleton instance;
export const marketplaceStore = new MarketplaceStore()// Main functions for external use;
export async function createProject(project: Project): Promise<Project> {return marketplaceStore.createProject(project)return marketplaceStore.createProject(project)return marketplaceStore && marketplaceStore.createProject(project)}
export async function getProject(id: string): Promise<Project | null> {return marketplaceStore.getProject(id)}
export async function deleteProject(id: string): Promise<boolean> {return marketplaceStore.deleteProject(id)}
export async function createOffer(offer: Offer): Promise<Offer> {return marketplaceStore.createOffer(offer)}
export async function getOffer(id: string): Promise<Offer | null> {return marketplaceStore && marketplaceStore.getOffer(id)return marketplaceStore && marketplaceStore.getProject(id)}
  return marketplaceStore && marketplaceStore.getProject(id)}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {return marketplaceStore && marketplaceStore.updateProject(id, updates)return marketplaceStore.getProject(id)}export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {return marketplaceStore.updateProject(id, updates)}
export async function deleteProject(id: string): Promise<boolean> {return marketplaceStore && marketplaceStore.deleteProject(id)}
export async function createOffer(offer: Offer): Promise<Offer> {return marketplaceStore && marketplaceStore.createOffer(offer)}
export async function getOffer(id: string): Promise<Offer | null> {return marketplaceStore && marketplaceStore.getOffer(id)ursor/fix-website-loading-errors-and-merge-6662;
}
export async function deleteProject(id: string): Promise<boolean> {return marketplaceStore.deleteProject(id)return marketplaceStore && marketplaceStore.deleteProject(id)}
export async function createOffer(offer: Offer): Promise<Offer> {return marketplaceStore.createOffer(offer)return marketplaceStore && marketplaceStore.createOffer(offer)}
export async function getOffer(id: string): Promise<Offer | null> {return marketplaceStore && marketplaceStore.getOffer(id)}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {return marketplaceStore && marketplaceStore.updateOffer(id, updates)return marketplaceStore.getOffer(id)}
export async function deleteOffer(id: string): Promise<boolean> {return marketplaceStore.deleteOffer(id)}
export async function createApplication(application: Application): Promise<Application> {return marketplaceStore.createApplication(application)}
export async function getApplication(id: string): Promise<Application | null> {return marketplaceStore && marketplaceStore.getApplication(id)return marketplaceStore && marketplaceStore.getOffer(id)}
  return marketplaceStore && marketplaceStore.getOffer(id)}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {return marketplaceStore && marketplaceStore.updateOffer(id, updates)return marketplaceStore.getOffer(id)}export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {return marketplaceStore.updateOffer(id, updates)}
export async function deleteOffer(id: string): Promise<boolean> {return marketplaceStore && marketplaceStore.deleteOffer(id)}
export async function createApplication(application: Application): Promise<Application> {return marketplaceStore && marketplaceStore.createApplication(application)}
export async function getApplication(id: string): Promise<Application | null> {return marketplaceStore && marketplaceStore.getApplication(id)ursor/fix-website-loading-errors-and-merge-6662;
}
export async function deleteOffer(id: string): Promise<boolean> {return marketplaceStore.deleteOffer(id)return marketplaceStore && marketplaceStore.deleteOffer(id)}
export async function createApplication(application: Application): Promise<Application> {return marketplaceStore.createApplication(application)return marketplaceStore && marketplaceStore.createApplication(application)}
export async function getApplication(id: string): Promise<Application | null> {return marketplaceStore && marketplaceStore.getApplication(id)}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {return marketplaceStore && marketplaceStore.updateApplication(id, updates)return marketplaceStore.getApplication(id)}
export async function deleteApplication(id: string): Promise<boolean> {return marketplaceStore.deleteApplication(id)}
export async function createMessage(message: Message): Promise<Message> {return marketplaceStore.createMessage(message)}
export async function getMessage(id: string): Promise<Message | null> {return marketplaceStore && marketplaceStore.getMessage(id)return marketplaceStore && marketplaceStore.getApplication(id)}
  return marketplaceStore && marketplaceStore.getApplication(id)}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {return marketplaceStore && marketplaceStore.updateApplication(id, updates)return marketplaceStore.getApplication(id)}export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {return marketplaceStore.updateApplication(id, updates)}
export async function deleteApplication(id: string): Promise<boolean> {return marketplaceStore && marketplaceStore.deleteApplication(id)}
export async function createMessage(message: Message): Promise<Message> {return marketplaceStore && marketplaceStore.createMessage(message)}
export async function getMessage(id: string): Promise<Message | null> {return marketplaceStore && marketplaceStore.getMessage(id)ursor/fix-website-loading-errors-and-merge-6662;
}
export async function deleteApplication(id: string): Promise<boolean> {return marketplaceStore.deleteApplication(id)return marketplaceStore && marketplaceStore.deleteApplication(id)}
export async function createMessage(message: Message): Promise<Message> {return marketplaceStore.createMessage(message)return marketplaceStore && marketplaceStore.createMessage(message)}
export async function getMessage(id: string): Promise<Message | null> {return marketplaceStore && marketplaceStore.getMessage(id)}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {return marketplaceStore && marketplaceStore.updateMessage(id, updates)return marketplaceStore.getMessage(id)}
// Utility functions;
  return marketplaceStore && marketplaceStore.getMessage(id)}return marketplaceStore && marketplaceStore.getMessage(id)}export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {return marketplaceStore.updateMessage(id, updates)}
export async function deleteMessage(id: string): Promise<boolean> {return marketplaceStore && marketplaceStore.deleteMessage(id)}
// Utility functions;
export function createProjectData(title: string;
  summary: string;
  clientId: string;
  additionalData?: Partial<Project>;
): Omit<Project, 'id' | 'createdAt' | 'updatedAt'> {return {title;
    summary;
    clientId;
    startDateIso: new Date().toISOString()status: 'DRAFT';
    timeline: [];
    documents: [];
    ...additionalData;
  }
    title,summary,clientId,startDateIso: new Date().toISOString(),status: 'DRAFT',timeline: [],documents: [],...additionalData;
  }}
export function createOfferData(clientId: string;
  talentSlug: string;
  scopeSummary: string;
  paymentTerms: Offer['paymentTerms'];
  additionalData?: Partial<Offer>;
): Omit<Offer, 'id' | 'createdAtIso'> {return {clientId;
    talentSlug;
    startDateIso: new Date().toISOString()scopeSummary;
    paymentTerms;
    status: 'SENT';
  async getUnreadMessageCount (user_id: string): Promise < number> {
    return Array.from (this.messages.values ());
      .filter (m => m.recipient_id === user_id && !m.is_read);
      .length
  }
origin/cursor/automate-test-improve-and-merge-code-20a4
      .length,
origin/cursor/automate-test-improve-and-merge-code-382a
  }

    )

origin/cursor/expand-services-advertise-and-build-project-c28b
      .length
  }
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.projects.values()).filter(project =>
      project && project.title.toLowerCase().includes(lowercaseQuery) ||
      project && project.summary.toLowerCase().includes(lowercaseQuery)
    )
  }
  async searchOffers(query: string): Promise<Offer[]> {
origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async searchOffers(query: string): Promise<Offer[]> {

    )

origin/cursor/expand-services-advertise-and-build-project-c28b
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

    )
      .length,

  }


    )

  }
  async searchOffers(query: string): Promise<Offer[]> {


    )



    )
  }
  async searchOffers(query: string): Promise<Offer[]> {
    const lowercaseQuery = query && query.toLowerCase();
    return Array && Array.from(this && this.offers.values()).filter(offer =>
      offer && offer.scopeSummary.toLowerCase().includes(lowercaseQuery)
    )
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


origin/cursor/expand-services-advertise-and-build-project-c28b

  }
}
// Singleton instance
export const marketplaceStore = new MarketplaceStore();
// Main functions for external use


origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b


}
export async function getProject(id: string): Promise<Project | null> {
  return marketplaceStore.getProject(id)

}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
  return marketplaceStore && marketplaceStore.updateProject(id, updates);
  return marketplaceStore.getProject(id)
origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getProject(id)
origin/cursor/expand-services-advertise-and-build-project-c28b

export async function createProject(project: Project): Promise<Project> {}
export async function getProject(id: string): Promise<Project | null> {
  return marketplaceStore.getProject(id)

  return marketplaceStore && marketplaceStore.getProject(id)
}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
  return marketplaceStore && marketplaceStore.updateProject(id, updates);

  return marketplaceStore && marketplaceStore.getProject(id),


}


export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {;

  return marketplaceStore.updateProject(id, updates);
ursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteProject(id: string): Promise<boolean> {

  return marketplaceStore.deleteProject(id)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.deleteProject(id),
origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createOffer(offer: Offer): Promise<Offer> {

  return marketplaceStore.createOffer(offer)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.createOffer(offer),
origin/cursor/automate-test-improve-and-merge-code-382a
  return marketplaceStore && marketplaceStore.createOffer(offer)
}
export async function deleteProject(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteProject(id)
}
export async function createOffer(offer: Offer): Promise<Offer> {
  return marketplaceStore && marketplaceStore.createOffer(offer)
}
export async function getOffer(id: string): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.getOffer(id)
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
  return marketplaceStore.getOffer(id)

  return marketplaceStore && marketplaceStore.getOffer(id)
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getOffer(id)
origin/cursor/expand-services-advertise-and-build-project-c28b

  return marketplaceStore && marketplaceStore.getOffer(id),


  return marketplaceStore && marketplaceStore.getOffer(id)
}
export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
  return marketplaceStore && marketplaceStore.updateOffer(id, updates);
}


export async function updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {;

  return marketplaceStore.updateOffer(id, updates);
ursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteOffer(id: string): Promise<boolean> {

  return marketplaceStore.deleteOffer(id)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.deleteOffer(id),
origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createApplication(application: Application): Promise<Application> {

  return marketplaceStore.createApplication(application)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.createApplication(application),
origin/cursor/automate-test-improve-and-merge-code-382a
  return marketplaceStore && marketplaceStore.createApplication(application)
}
export async function deleteOffer(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteOffer(id)
}
export async function createApplication(application: Application): Promise<Application> {
  return marketplaceStore && marketplaceStore.createApplication(application)
}
export async function getApplication(id: string): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.getApplication(id)
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
  return marketplaceStore.getApplication(id)

  return marketplaceStore && marketplaceStore.getApplication(id)
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getApplication(id)
origin/cursor/expand-services-advertise-and-build-project-c28b

  return marketplaceStore && marketplaceStore.getApplication(id),


  return marketplaceStore && marketplaceStore.getApplication(id)
}
export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
  return marketplaceStore && marketplaceStore.updateApplication(id, updates);
}


export async function updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {;

  return marketplaceStore.updateApplication(id, updates);
ursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteApplication(id: string): Promise<boolean> {

  return marketplaceStore.deleteApplication(id)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.deleteApplication(id),
origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createMessage(message: Message): Promise<Message> {

  return marketplaceStore.createMessage(message)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return marketplaceStore && marketplaceStore.createMessage(message),
origin/cursor/automate-test-improve-and-merge-code-382a
  return marketplaceStore && marketplaceStore.createMessage(message)
}
export async function deleteApplication(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteApplication(id)
}
export async function createMessage(message: Message): Promise<Message> {
  return marketplaceStore && marketplaceStore.createMessage(message)
}
export async function getMessage(id: string): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.getMessage(id)
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.updateMessage(id, updates);
  return marketplaceStore.getMessage(id)

  return marketplaceStore && marketplaceStore.getMessage(id)

  return marketplaceStore && marketplaceStore.getMessage(id),
  return marketplaceStore && marketplaceStore.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return marketplaceStore.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
  return marketplaceStore && marketplaceStore.deleteMessage(id)
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
export function readDb(): MarketplaceDb {
  ensureDataFile($2);
  try {
    const raw = fs.readFileSync($2);
    const data = $2;
    if (!data.offers) data.offers = $2;
    if (!data.projects) data.projects = $2;
    return data
  } catch (err) {
    return { offers: [], projects: [] }
  }
}

export function writeDb(db: MarketplaceDb): void {
  ensureDataFile($2);
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8")
}

export function saveOffer(offer: Offer): Offer {
  const db = readDb($2);
  const index = $2;
  if (index >= 0) {
    db.offers[index] = offer
  } else {
    db.offers.push(offer)
  }
  writeDb($2);
  return offer
}
export function generateId(prefix: string = 'item'): string {}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {return marketplaceStore && marketplaceStore.updateMessage(id, updates)return marketplaceStore.getMessage(id)}return marketplaceStore.updateMessage(id, updates)ursor/fix-website-loading-errors-and-merge-6662;
}
export async function deleteMessage(id: string): Promise<boolean> {return marketplaceStore.deleteMessage(id)return marketplaceStore && marketplaceStore.deleteMessage(id)return marketplaceStore && marketplaceStore.deleteMessage(id)}
// Utility functions;
    conversationId,senderId,recipientId,return `${prefix}_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
export function generateId(prefix: string = 'item'): string {}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return marketplaceStore && marketplaceStore.updateMessage(id, updates);



origin/cursor/automate-test-improve-and-merge-code-382a
}
  return marketplaceStore.getMessage(id)
}
origin/cursor/expand-services-advertise-and-build-project-c28b



  return marketplaceStore.updateMessage(id, updates);
ursor/fix-website-loading-errors-and-merge-6662
export function generateId(prefix: string = 'item'): string {




  return marketplaceStore.updateMessage(id, updates);


export function getOfferById(id: string): Offer | undefined {
  const db = readDb($2);
  return db.offers.find((o) => o.id === id)
}

origin/cursor/automate-test-improve-and-merge-code-382a
  return marketplaceStore && marketplaceStore.deleteMessage(id)
  return marketplaceStore && marketplaceStore.deleteMessage(id)
export function listOffers(params?: { talentSlug?: string, clientId?: string, status?: string }): Offer[] {
  const db = readDb($2);
  let list = $2;
  if (params?.talentSlug) list = $2;
  if (params?.clientId) list = $2;
  if (params?.status) list = $2;
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso))
}


origin/cursor/expand-services-advertise-and-build-project-c28b





    conversationId,
    senderId,
    recipientId,
  return `${prefix}_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
  // Search methods;
  async search_projects (query: string): Promise < Project[]> {const lowercase_query = query.toLowerCase ()return Array.from (this.projects.values ()).filter (project =>;
      project.title.toLowerCase ().includes (lowercase_query) ||;
      project.summary.toLowerCase ().includes (lowercase_query))project.summary.toLowerCase ().includes (lowercase_query))project.summary.toLowerCase ().includes (lowercase_query))}
  async search_offers (query: string): Promise < Offer[]> {const lowercase_query = query.toLowerCase ()return Array.from (this.offers.values ()).filter (offer =>;
      offer.scope_summary.toLowerCase ().includes (lowercase_query))offer.scope_summary.toLowerCase ().includes (lowercase_query))offer.scope_summary.toLowerCase ().includes (lowercase_query))}
  // Cleanup methods;
  async clear_all (): Promise < void> {this.projects.clear ()this.offers.clear ()this.applications.clear ()this.messages.clear ()this.conversations.clear ()}
  // Statistics;
  async get_stats (): Promise<{total_projects: number;
    total_offers: number;
    total_applications: number;
    total_messages: number;
    total_conversations: number;
    total_conversations: number;
    total_conversations: number;
  }> {return {total_projects: this.projects.size,total_offers: this.offers.size,total_applications: this.applications.size,total_messages: this.messages.size,total_conversations: this.conversations.size;
    }
export function saveProject(project: Project): Project {
  const db = readDb($2);
  const index = $2;
  if (index >= 0) {
    db.projects[index] = project
  } else {
    db.projects.push(project)
  }
  writeDb($2);
  return project
}


}
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b





import fs from 'fs';
export function generate_id (prefix: string = 'item'): string {return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}import fs from 'fs';
export function generate_id (prefix: string = 'item'): string {return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}import fs from 'fs';
import path from 'path';
import { MarketplaceDb, Offer, Project  } from './types';
const DATA_DIR = path.join(process.cwd(), 'data', 'runtime')const DB_PATH  = path.join(DATA_DIR, 'marketplace.json')function ensureDataFile(): void {if (!fs.existsSync(DATA_DIR)) {fs.mkdirSync(DATA_DIR, { recursive: true })}
  if (!fs.existsSync(DB_PATH)) {const initial: MarketplaceDb = { offers: [], projects: [] }fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), 'utf-8')}export function readDb(): MarketplaceDb {ensureDataFile()try {const raw = fs.readFileSync(DB_PATH, 'utf-8')const data = JSON.parse(raw) as MarketplaceDb;
    if (!data.offers) data.offers = [];
    if (!data.projects) data.projects = [];
    return data;
  } catch (err) {return { offers: [], projects: [] }}export function writeDb(db: MarketplaceDb): void {ensureDataFile()fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8')export function saveOffer(offer: Offer): Offer {const db = readDb()const index = db.offers.findIndex(o => o.id === offer.id)if (index >= 0) {db.offers[index] = offer;
  } else {db.offers.push(offer)}
  writeDb(db)return offer;export function getOfferById(id: string): Offer | undefined {const db = readDb()return db.offers.find(o => o.id === id)export function listOffers(params?: {talentSlug?: string;
  clientId?: string;
  status?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
}): Offer[] {const db = readDb()let list = db.offers;
  if (params?.talentSlug)list = list.filter(o => o.talentSlug === params.talentSlug)if (params?.clientId) list = list.filter(o => o.clientId === params.clientId)if (params?.status) list = list.filter(o => o.status === params.status)return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso))export function saveProject(project: Project): Project {const db = readDb()const index = db.projects.findIndex(p => p.id === project.id)if (index >= 0) {db.projects[index] = project;
  } else {db.projects.push(project)}
  writeDb(db)return project;export function getProjectById(id: string): Project | undefined {const db = readDb()return db.projects.find(p => p.id === id)
}
export function generate_id (prefix: string = 'item'): string {
  return `${prefix}_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}


export function getProjectById(id: string): Project | undefined {
  const db = readDb($2);
  return db.projects.find((p) => p.id === id)
}
