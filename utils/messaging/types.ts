export type UserRole = 'client' | 'talent' | 'admin';

export interface UserSummary {_id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;}

export type ConversationContextType = 'job' | 'talent' | 'general' | 'application' | 'invite';

export interface ConversationContext {_type: ConversationContextType;
  jobId?: string;
  jobTitle?: string;
  talentId?: string;
  talentName?: string;
  proposalLink?: string;}

export interface Conversation {_id: string;
  participants: string[]; // [clientId, _talentId] or any two users
  context?: ConversationContext;
  lastMessageAt: string; // ISO
  unreadBy: string[]; // userIds who have unread messages}

export type MessageStatus = 'sent' | 'delivered' | 'read';

export interface Message {_id: string;
  conversationId: string;
  senderId: string;
  recipientId: string;
  body: string;
  attachmentUrl?: string; // saved under /public/uploads
  linkUrl?: string;
  createdAt: string; // ISO
  status: MessageStatus;}

export interface InboxItem {_conversation: Conversation;
  otherParticipant: UserSummary;
  lastMessage?: Message;
  unreadCount: number;}

export interface NewMessageInput {_conversationId?: string;
  senderId: string;
  recipientId: string;
  body: string;
  linkUrl?: string;
  attachmentBase64?: string; // data window.URL or raw base64
  attachmentName?: string; // optional filename
  context?: ConversationContext;}