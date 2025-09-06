export interface Conversation {
  id: string;
  participants: Array<{
    type: 'client' | 'talent';
    id: string;
  }>;
  messages: Message[];
  createdAtIso: string;
  updatedAtIso: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: {
    type: 'client' | 'talent';
    id: string;
  };
  text?: string;
  attachments?: any[];
  createdAtIso: string;
  readBy: Array<{
    participantId: string;
    readAtIso: string;
  }>;
}

export interface SendMessageParams {
  senderId: string;
  recipientId: string;
  body: string;
  linkUrl?: string;
  attachmentBase64?: string;
  attachmentName?: string;
  context?: any;
}

// Mock storage
const conversations: Conversation[] = [];

export function sendMessage(params: SendMessageParams): { conversation: Conversation; message: Message } {
  // Find or create conversation
  let conversation = conversations.find(c => 
    c.participants.some(p => p.id === params.senderId) &&
    c.participants.some(p => p.id === params.recipientId)
  );

  if (!conversation) {
    conversation = {
      id: `conv_${Date.now()}`,
      participants: [
        { type: 'client', id: params.senderId },
        { type: 'talent', id: params.recipientId }
      ],
      messages: [],
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };
    conversations.push(conversation);
  }

  const message: Message = {
    id: `msg_${Date.now()}`,
    conversationId: conversation.id,
    sender: { type: 'client', id: params.senderId },
    text: params.body,
    createdAtIso: new Date().toISOString(),
    readBy: [{ participantId: params.senderId, readAtIso: new Date().toISOString() }]
  };

  conversation.messages.push(message);
  conversation.updatedAtIso = new Date().toISOString();

  return { conversation, message };
}

export function getConversationById(id: string): Conversation | null {
  return conversations.find(c => c.id === id) || null;
}

export function getAllConversations(): Conversation[] {
  return conversations;
}