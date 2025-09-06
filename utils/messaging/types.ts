<<<<<<< HEAD
<<<<<<< HEAD
export type UserRole = 'client' | 'talent' | 'admin';
export interface UserSummary {;
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}
;
export type ConversationContextType = 'job' | 'talent' | 'general' | 'application' | 'invite';
export interface ConversationContext {;
  type: ConversationContextType;
  jobId?: string;
  jobTitle?: string;
  talentId?: string;
  talentName?: string;
  proposalLink?: string;
}
;
export interface Conversation {;
  id: string;
  participants: string[], // [clientId, talentId] or any two users;
  context?: ConversationContext;
  lastMessageAt: string, // ISO;
  unreadBy: string[], // userIds who have unread messages;
}
;
export type MessageStatus = 'sent' | 'delivered' | 'read';
export interface Message {;
  id: string;
  conversationId: string;
  senderId: string;
  recipientId: string;
  body: string;
  attachmentUrl?: string, // saved under /public/uploads;
  linkUrl?: string;
  createdAt: string, // ISO;
  status: MessageStatus;
}
;
export interface InboxItem {;
  conversation: Conversation;
  otherParticipant: UserSummary;
  lastMessage?: Message;
  unreadCount: number;
}
;
export interface NewMessageInput {;
  conversationId?: string;
  senderId: string;
  recipientId: string;
  body: string;
  linkUrl?: string;
  attachmentBase64?: string, // data URL or raw base64;
  attachmentName?: string, // optional filename;
  context?: ConversationContext;
}
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export type UserRole = 'admin' | 'user' | 'guest';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export type UserRole = 'admin' | 'user' | 'guest';

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type UserRole = "admin" | "user" | "guest";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
