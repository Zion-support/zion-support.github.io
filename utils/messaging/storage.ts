export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file';
  metadata?: any;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAt: string;
  unreadBy: Record<string, number>;
  createdAt: string;
}

const MESSAGES_FILE = '/tmp/messages.json';

let messages: Message[] = [];
let conversations: Conversation[] = [];

export function loadMessages(): Message[] {
  return messages;
}

export function saveMessages(newMessages: Message[]): void {
  messages = newMessages;
  // In a real implementation, this would write to a file or database
  console.log('Messages saved to storage');
}

export function loadConversations(): Conversation[] {
  return conversations;
}

export function saveConversations(newConversations: Conversation[]): void {
  conversations = newConversations;
  // In a real implementation, this would write to a file or database
  console.log('Conversations saved to storage');
}

export function addMessage(message: Message): void {
  messages.push(message);
  saveMessages(messages);
  
  // Update conversation unreadBy
  const conversation = conversations.find(c => c.id === message.conversationId);
  if (conversation) {
    conversation.lastMessageAt = message.timestamp;
    // Increment unread count for all participants except sender
    conversation.participants.forEach(participantId => {
      if (participantId !== message.senderId) {
        conversation.unreadBy[participantId] = (conversation.unreadBy[participantId] || 0) + 1;
      }
    });
    saveConversations(conversations);
  }
}