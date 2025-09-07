export type UserRole = "admin" | "user" | "guest";
export type UserRole = "admin" | "user" | "guest";



export type UserRole = 'admin' | 'user' | 'guest';

export type UserRole = 'admin' | 'user' | 'guest';


export type UserRole = "admin" | "user" | "guest";export type UserRole = 'admin' | 'user' | 'guest';

export type UserRole = "admin" | "user" | "guest";export type UserRole = "admin" | "user" | "guest";
export type UserRole = "admin" | "user" | "guest";export type UserRole = 'admin' | 'user' | 'guest';export type UserRole = 'admin' | 'user' | 'guest';ursor/expand-services-advertise-and-build-project-4b36;
ursor/automate-test-improve-and-merge-code-646c;
export type UserRole = "admin" | "user" | "guest";export type UserRole = 'admin' | 'user' | 'guest';
export type UserRole = $2;
export interface UserSummary {
  id: string,
  name: string,
  role: UserRole,
  avatarUrl?: string
}

export type ConversationContextType = $2;
export interface ConversationContext {
  type: ConversationContextType,
  jobId?: string,
  jobTitle?: string,
  talentId?: string,
  talentName?: string,
  proposalLink?: string
}

export interface Conversation {
  id: string,
  participants: string[], // [clientId, talentId] or any two users
  context?: ConversationContext,
  lastMessageAt: string, // ISO
  unreadBy: string[], // userIds who have unread messages
}

export type MessageStatus = $2;
export interface Message {
  id: string,
  conversationId: string,
  senderId: string,
  recipientId: string,
  body: string,
  attachmentUrl?: string, // saved under /public/uploads
  linkUrl?: string,
  createdAt: string, // ISO
  status: MessageStatus}

export interface InboxItem {
  conversation: Conversation,
  otherParticipant: UserSummary,
  lastMessage?: Message,
  unreadCount: number}

export interface NewMessageInput {
  conversationId?: string,
  senderId: string,
  recipientId: string,
  body: string,
  linkUrl?: string,
  attachmentBase64?: string, // data URL or raw base64
  attachmentName?: string, // optional filename
  context?: ConversationContext
}
