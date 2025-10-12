export interface Application {
export interface Application {
  id: string
  name: string
  email: string
  position: string
  experience: number
  skills: string[]
  createdAt: string
  updatedAt?: string
}
export interface Application {
  id: string
  job_id: string
  talent_slug: string
  status: 'applied' | 'skipped' | 'pending'
  createdAtIso: string
}
export type UserRole = 'admin' | 'user' | 'guest'
export type JobStatus = 'New' | 'In Progress' | 'Filled' | 'Closed'
export type Job = {
  id: string
  title: string
  description: string
  category: string
  requiredSkills: string[]
  budgetMinUsd?: number
  budgetMaxUsd?: number
  deliveryDeadlineIso?: string; // ISO string
  clientEmail: string
  status: JobStatus
  createdAtIso: string
  updatedAtIso: string
};
export type ApplicationStatus = 'applied' | 'skipped' | 'withdrawn'
export type Application = {
  id: string
  jobId: string
  talentSlug: string
  status: ApplicationStatus
  createdAtIso: string
};
export type Participant = { type: 'email' | 'talent'; id: string };
export type Attachment = {
  name: string
  url: string
  sizeBytes?: number
};
export type Message = {
  id: string
  conversationId: string
  sender: Participant
  text?: string
  attachments?: Attachment[]
  createdAtIso: string
  readBy?: { participantId: string; readAtIso: string }[]
}
export type Conversation = {
  id: string
  jobId?: string
  participants: Participant[]
  createdAtIso: string
  updatedAtIso: string
  messages: Message[]
};