export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}
export interface Conversation {  id: string;
  participants: string[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
}

const conversations: Conversation[] = [];
const messages: Message[] = [];

export function createConversation(participants: string[]): Conversation {
  const conversation: Conversation = {
    id: `conv_${Date.now()}`,
    participants,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  conversations.push(conversation);
  return conversation;
}

export function getConversation(id: string): Conversation | null {
  return conversations.find(c => c.id === id) || null;
}

export function addMessage(conversationId: string, senderId: string, content: string): Message {
  const message: Message = {
    id: `msg_${Date.now()}`,
    conversationId,
    senderId,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };
  messages.push(message);
  
  const conversation = getConversation(conversationId);
  if (conversation) {
    conversation.lastMessage = message;
    conversation.updatedAt = new Date().toISOString();
  }
  
  return message;
}

export function getMessages(conversationId: string): Message[] {
  return messages.filter(m => m.conversationId === conversationId);
}