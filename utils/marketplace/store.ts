import { v4 as uuidv4 } from 'uuid';

// In-memory storage for demo purposes
// In production, this would be a database

export interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: 'SENT' | 'CONFIRMED' | 'REJECTED';
  projectId?: string;
}

export interface PaymentTerms {
  type: 'fixed' | 'hourly' | 'milestone';
  amount?: number;
  currency?: string;
  milestones?: Array<{
    id: string;
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: Array<{
    id: string;
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
  documents: ProjectDocument[];
  notes: ProjectNote[];
}

export interface ProjectDocument {
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}

export interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: 'client' | 'talent';
  content: string;
  createdAtIso: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderRole: 'client' | 'talent';
  recipientId: string;
  content: string;
  createdAtIso: string;
  read: boolean;
}

// In-memory storage
const offers: Offer[] = [];
const projects: Project[] = [];
const messages: Message[] = [];

// Offer functions
export function saveOffer(offer: Offer): void {
  const existingIndex = offers.findIndex(o => o.id === offer.id);
  if (existingIndex >= 0) {
    offers[existingIndex] = offer;
  } else {
    offers.push(offer);
  }
}

export function getOffers(): Offer[] {
  return [...offers];
}

export function getOfferById(id: string): Offer | undefined {
  return offers.find(o => o.id === id);
}

export function getOffersByClientId(clientId: string): Offer[] {
  return offers.filter(o => o.clientId === clientId);
}

export function getOffersByTalentSlug(talentSlug: string): Offer[] {
  return offers.filter(o => o.talentSlug === talentSlug);
}

// Project functions
export function saveProject(project: Project): void {
  const existingIndex = projects.findIndex(p => p.id === project.id);
  if (existingIndex >= 0) {
    projects[existingIndex] = project;
  } else {
    projects.push(project);
  }
}

export function getProjects(): Project[] {
  return [...projects];
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getProjectsByClientId(clientId: string): Project[] {
  return projects.filter(p => p.clientId === clientId);
}

export function getProjectsByTalentSlug(talentSlug: string): Project[] {
  return projects.filter(p => p.talentSlug === talentSlug);
}

// Message functions
export function saveMessage(message: Message): void {
  messages.push(message);
}

export function getMessages(): Message[] {
  return [...messages];
}

export function getMessagesByUserId(userId: string): Message[] {
  return messages.filter(m => m.senderId === userId || m.recipientId === userId);
}

export function getMessagesBetweenUsers(userId1: string, userId2: string): Message[] {
  return messages.filter(m => 
    (m.senderId === userId1 && m.recipientId === userId2) ||
    (m.senderId === userId2 && m.recipientId === userId1)
  );
}

export function markMessageAsRead(messageId: string): void {
  const message = messages.find(m => m.id === messageId);
  if (message) {
    message.read = true;
  }
}