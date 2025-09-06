 Messaging storage utilities;
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  recipientId: string;
  body: string;
  link_url?: string;
  attachmentBase64?: string;
  attachment_name?: string;
  context?: string;
  sentAtIso: string;
  readAtIso?: string;
  is_read: boolean;
  is_edited: boolean;
  editedAtIso?: string;
  is_deleted: boolean;
  deletedAtIso?: string;
  replyToId?: string;
  reactions: any
  }>;

export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  is_archived: boolean;
  is_muted: boolean;
  createdAtIso: string;
  updatedAtIso: string;
  metadata?: {
    title?: string;
    description?: string;
    type?: any
  async createMessage(message: any
  additional_data?: Partial < Message>): any
  additional_data?: Partial < Conversation>): any