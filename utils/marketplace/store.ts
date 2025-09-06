<<<<<<< HEAD
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
    status: 'pending' | 'in_progress' | 'completed' | 'overdue'
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
    uploadedAtIso: string
  }>;
  budget?: {
    total: number;
    currency: string;
    type: 'fixed' | 'hourly' | 'milestone'
  }
  createdAt: string;
  updatedAt: string
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
      dueDate: string
    }>;
  }
  agreementUrl?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;
  notes?: string
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
  notes?: string
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
  isRead: boolean
}
export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;
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
  }
  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    const project = this.projects.get(id);
    if (!project) return null
    const updatedProject = {
      ...project
      ...updates
      updatedAt: new Date().toISOString()
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
  }
  async updateOffer(id: string, updates: Partial<Offer>): Promise<Offer | null> {
    const offer = this.offers.get(id);
    if (!offer) return null
    const updatedOffer = { ...offer, ...updates }
    this.offers.set(id, updatedOffer);
    return updatedOffer;
  }
  async deleteOffer(id: string): Promise<boolean> {
    return this.offers.delete(id)
  }
  async getOffersByClient(clientId: string): Promise<Offer[]> {
    return Array.from(this.offers.values()).filter(o => o.clientId === clientId)
  }
  async getOffersByTalent(talentSlug: string): Promise<Offer[]> {
    return Array.from(this.offers.values()).filter(o => o.talentSlug === talentSlug)
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
  }
  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
    const application = this.applications.get(id);
    if (!application) return null
    const updatedApplication = { ...application, ...updates }
    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
  async deleteApplication(id: string): Promise<boolean> {
    return this.applications.delete(id)
  }
  async getApplicationsByProject(projectId: string): Promise<Application[]> {
    return Array.from(this.applications.values()).filter(a => a.projectId === projectId)
  }
  async getApplicationsByTalent(talentSlug: string): Promise<Application[]> {
    return Array.from(this.applications.values()).filter(a => a.talentSlug === talentSlug)
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
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    return this.messages.delete(id)
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
    return this.conversations.get(id) |null
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
    if (!conversation) return null
    const updatedConversation = { ...conversation, ...updates }
    this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
    return this.conversations.delete(id)
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
  }
  async markMessageAsRead(messageId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    message.isRead = true;
    message.readAtIso = new Date().toISOString()
    this.messages.set(messageId, message);
    return true;
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
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
  return marketplaceStore.createProject(project)
}
export async function getProject(id: string): Promise<Project | null> {
  return marketplaceStore.getProject(id)
}
export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
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
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
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
=======
import fs from 'fs';
import path from 'path';
import { MarketplaceDb, Offer, Project } from './types';

const DATA_DIR = path.join(process.cwd(), 'data', 'runtime');
const DB_PATH = path.join(DATA_DIR, 'marketplace.json');

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    const initial: MarketplaceDb = { offers: [], projects: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), 'utf-8');
  }
}
}

export function readDb(): MarketplaceDb {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    const data = JSON.parse(raw) as MarketplaceDb;
    if (!data.offers) data.offers = [];
    if (!data.projects) data.projects = [];
    return data;
  } catch (err) {
    return { offers: [], projects: [] };
  }
}
}

export function writeDb(db: MarketplaceDb): void {
  ensureDataFile();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
}
}

export function saveOffer(offer: Offer): Offer {
  const db = readDb();
  const index = db.offers.findIndex(o => o.id === offer.id);
  if (index >= 0) {
    db.offers[index] = offer;
  } else {
    db.offers.push(offer);
  }
  writeDb(db);
  return offer;
}
}

export function getOfferById(id: string): Offer | undefined {
  const db = readDb();
  return db.offers.find(o => o.id === id);
}
}

export function listOffers(params?: {
  talentSlug?: string;
  clientId?: string;
  status?: string;
}): Offer[] {
  const db = readDb();
  let list = db.offers;
  if (params?.talentSlug)
    list = list.filter(o => o.talentSlug === params.talentSlug);
  if (params?.clientId) list = list.filter(o => o.clientId === params.clientId);
  if (params?.status) list = list.filter(o => o.status === params.status);
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso));
}
}

export function saveProject(project: Project): Project {
  const db = readDb();
  const index = db.projects.findIndex(p => p.id === project.id);
  if (index >= 0) {
    db.projects[index] = project;
  } else {
    db.projects.push(project);
  }
  writeDb(db);
  return project;
}
}

export function getProjectById(id: string): Project | undefined {
  const db = readDb();
  return db.projects.find(p => p.id === id);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
