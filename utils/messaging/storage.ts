// Messaging storage utilities
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
  isRead: boolean;
  isEdited: boolean;
  editedAtIso?: string;
  isDeleted: boolean;
  deletedAtIso?: string;
  replyToId?: string;
  reactions: Array<{
    userId: string;
    emoji: string;
<<<<<<< HEAD
    createdAt: string;
=======
    createdAt: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }>;
}
export interface Conversation {
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;
  isMuted: boolean;
  createdAtIso: string;
  updatedAtIso: string;
  metadata?: {
    title?: string;
    description?: string;
    type?: 'direct' | 'group' | 'support' | 'project';
    projectId?: string;
<<<<<<< HEAD
    tags?: string[];
  };
=======
    tags?: string[]
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface MessageThread {
  id: string;
  conversationId: string;
  rootMessageId: string;
  messages: string[]; // message IDs
  createdAtIso: string;
<<<<<<< HEAD
  updatedAtIso: string;
=======
  updatedAtIso: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export interface MessageSearchResult {
  message: Message;
  conversation: Conversation;
  highlights: string[];
<<<<<<< HEAD
  relevanceScore: number;
=======
  relevanceScore: number
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
class MessagingStorage {
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();
  private threads: Map<string, MessageThread> = new Map();
  private userConversations: Map<string, Set<string>> = new Map(); // userId -> conversationIds
  private conversationMessages: Map<string, Set<string>> = new Map(); // conversationId -> messageIds
  // Message methods
  async createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {
    const newMessage: Message = {
      ...message
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sentAtIso: new Date().toISOString()
      isRead: false
      isEdited: false
      isDeleted: false
      reactions: []
    }
    this.messages.set(newMessage.id, newMessage);
    // Update conversation
    await this.updateConversationLastMessage(newMessage.conversationId, newMessage.id);
    // Update user conversations
    this.addToUserConversations(newMessage.senderId, newMessage.conversationId);
    this.addToUserConversations(newMessage.recipientId, newMessage.conversationId);
    // Add to conversation messages
    this.addToConversationMessages(newMessage.conversationId, newMessage.id);
    return newMessage;
  }
  async getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
    return this.messages.get(id) || null;
=======
    return this.messages.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
<<<<<<< HEAD
    if (!message) return null;

    const updatedMessage = { ...message, ...updates };
=======
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message) return false;
    message.isDeleted = true;
<<<<<<< HEAD
    message.deletedAtIso = new Date().toISOString();
=======
    message.deletedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message |message.isRead) return false;
    message.isRead = true;
<<<<<<< HEAD
    message.readAtIso = new Date().toISOString();
=======
    message.readAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message |!message.isRead) return false;
    message.isRead = false;
<<<<<<< HEAD
    message.readAtIso = undefined;
=======
    message.readAtIso = undefined
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user
<<<<<<< HEAD
    message.reactions = message.reactions.filter(r => r.userId !== userId);

=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    // Add new reaction
    message.reactions.push({
      userId
      emoji
      createdAt: new Date().toISOString()
    });
    this.messages.set(messageId, message);
    return true;
  }
  async removeReaction(messageId: string, userId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
<<<<<<< HEAD

    message.reactions = message.reactions.filter(r => r.userId !== userId);
=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(messageId, message);
    return true;
  }
  // Conversation methods
  async createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
    const newConversation: Conversation = {
      ...conversation
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      createdAtIso: new Date().toISOString()
      updatedAtIso: new Date().toISOString()
    }
    this.conversations.set(newConversation.id, newConversation);
    // Add to user conversations
    for (const participantId of newConversation.participants) {
      this.addToUserConversations(participantId, newConversation.id);
    }
    return newConversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD
    return this.conversations.get(id) || null;
=======
    return this.conversations.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return null;

=======
    if (!conversation) return null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    const updatedConversation = {
      ...conversation
      ...updates
      updatedAtIso: new Date().toISOString()
    }
    this.conversations.set(id, updatedConversation);
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return false;

=======
    if (!conversation) return false
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    // Remove from user conversations
    for (const participantId of conversation.participants) {
      this.removeFromUserConversations(participantId, id);
    }
    // Delete all messages in this conversation
    const messageIds = this.conversationMessages.get(id) |new Set();
    for (const messageId of messageIds) {
      this.messages.delete(messageId);
    }
    this.conversationMessages.delete(id);
    return this.conversations.delete(id);
  }
  async archiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isArchived = true;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isArchived = false;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = true;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = false;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
    return true;
  }
  // Query methods
  async getMessagesByConversation(conversationId: string, limit: number = 50, offset: number = 0): Promise<Message[]> {
<<<<<<< HEAD
    const messageIds = this.conversationMessages.get(conversationId) || new Set();
=======
    const messageIds = this.conversationMessages.get(conversationId) |new Set()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    const sortedIds = Array.from(messageIds).sort((a, b) => {
      const msgA = this.messages.get(a);
      const msgB = this.messages.get(b);
      if (!msgA |!msgB) return 0;
      return new Date(msgA.sentAtIso).getTime() - new Date(msgB.sentAtIso).getTime();
    });
    const paginatedIds = sortedIds.slice(offset, offset + limit);
    return paginatedIds
      .map(id => this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined);
  }
  async getConversationsByUser(userId: string, includeArchived: boolean = false): Promise<Conversation[]> {
    const conversationIds = this.userConversations.get(userId) |new Set();
    const conversations = Array.from(conversationIds)
      .map(id => this.conversations.get(id))
      .filter((conv): conv is Conversation => conv !== undefined);
    if (!includeArchived) {
<<<<<<< HEAD
      return conversations.filter(conv => !conv.isArchived);
=======
      return conversations.filter(conv => !conv.isArchived)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    }
    return conversations.sort((a, b) =>
      new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime()
    );
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
    const conversationIds = this.userConversations.get(userId) |new Set();
    let count = 0;
    for (const conversationId of conversationIds) {
      const messageIds = this.conversationMessages.get(conversationId) |new Set();
      for (const messageId of messageIds) {
        const message = this.messages.get(messageId);
        if (message && message.recipientId === userId && !message.isRead) {
<<<<<<< HEAD
          count++;
=======
          count++
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
        }
      }
    }
    return count;
  }
  async getUnreadMessagesByUser(userId: string): Promise<Message[]> {
    const conversationIds = this.userConversations.get(userId) |new Set();
    const unreadMessages: Message[] = [];
    for (const conversationId of conversationIds) {
      const messageIds = this.conversationMessages.get(conversationId) |new Set();
      for (const messageId of messageIds) {
        const message = this.messages.get(messageId);
        if (message && message.recipientId === userId && !message.isRead) {
<<<<<<< HEAD
          unreadMessages.push(message);
=======
          unreadMessages.push(message)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
        }
      }
    }
    return unreadMessages.sort((a, b) =>
      new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime()
    );
  }
  // Search methods
  async searchMessages(query: string, userId: string, limit: number = 20): Promise<MessageSearchResult[]> {
    const conversationIds = this.userConversations.get(userId) |new Set();
    const results: MessageSearchResult[] = [];
    for (const conversationId of conversationIds) {
      const conversation = this.conversations.get(conversationId);
      if (!conversation) continue;
      const messageIds = this.conversationMessages.get(conversationId) |new Set();
      for (const messageId of messageIds) {
        const message = this.messages.get(messageId);
        if (!message |message.isDeleted) continue;
        const body = message.body.toLowerCase();
<<<<<<< HEAD
        const queryLower = query.toLowerCase();
        
=======
        const queryLower = query.toLowerCase()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
        if (body.includes(queryLower)) {
          const highlights = this.generateHighlights(message.body, query);
          const relevanceScore = this.calculateRelevanceScore(message.body, query);
          results.push({
            message
            conversation
            highlights
            relevanceScore
          });
        }
      }
    }
    return results
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  }
  // Thread methods
  async createThread(conversationId: string, rootMessageId: string): Promise<MessageThread> {
    const thread: MessageThread = {
      id: `thread_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      conversationId
      rootMessageId
      messages: [rootMessageId]
      createdAtIso: new Date().toISOString()
      updatedAtIso: new Date().toISOString()
    }
    this.threads.set(thread.id, thread);
    return thread;
  }
  async addMessageToThread(threadId: string, messageId: string): Promise<boolean> {
    const thread = this.threads.get(threadId);
    if (!thread) return false;
    if (!thread.messages.includes(messageId)) {
      thread.messages.push(messageId);
<<<<<<< HEAD
      thread.updatedAtIso = new Date().toISOString();
=======
      thread.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
      this.threads.set(threadId, thread);
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {
<<<<<<< HEAD
    return this.threads.get(threadId) || null;
=======
    return this.threads.get(threadId) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {
    const thread = this.threads.get(threadId);
<<<<<<< HEAD
    if (!thread) return [];

=======
    if (!thread) return []
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    return thread.messages
      .map(id => this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined)
      .sort((a, b) => new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime());
  }
  // Private helper methods
  private async updateConversationLastMessage(conversationId: string, messageId: string): Promise<void> {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) return;
    conversation.lastMessageId = messageId;
    conversation.lastMessageAtIso = new Date().toISOString();
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(conversationId, conversation);
  }
  private addToUserConversations(userId: string, conversationId: string): void {
    if (!this.userConversations.has(userId)) {
      this.userConversations.set(userId, new Set());
    }
    this.userConversations.get(userId)!.add(conversationId);
  }
  private removeFromUserConversations(userId: string, conversationId: string): void {
    const userConversations = this.userConversations.get(userId);
    if (userConversations) {
<<<<<<< HEAD
      userConversations.delete(conversationId);
=======
      userConversations.delete(conversationId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    }
  }
  private addToConversationMessages(conversationId: string, messageId: string): void {
    if (!this.conversationMessages.has(conversationId)) {
      this.conversationMessages.set(conversationId, new Set());
    }
    this.conversationMessages.get(conversationId)!.add(messageId);
  }
  private generateHighlights(text: string, query: string): string[] {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    const highlights: string[] = [];
<<<<<<< HEAD
    
    let index = textLower.indexOf(queryLower);
=======
    let index = textLower.indexOf(queryLower)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    while (index !== -1) {
      const start = Math.max(0, index - 20);
      const end = Math.min(text.length, index + query.length + 20);
      highlights.push(text.substring(start, end));
      index = textLower.indexOf(queryLower, index + 1);
    }
    return highlights;
  }
  private calculateRelevanceScore(text: string, query: string): number {
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();
    let score = 0;
<<<<<<< HEAD
    const queryWords = queryLower.split(/\s+/);
    
=======
    const queryWords = queryLower.split(/\s+/)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    for (const word of queryWords) {
      const matches = (textLower.match(new RegExp(word, 'g')) |[]).length;
      score += matches * (word.length / query.length);
    }
    return score;
  }
  // Cleanup methods
  async clearAll(): Promise<void> {
    this.messages.clear();
    this.conversations.clear();
    this.threads.clear();
    this.userConversations.clear();
    this.conversationMessages.clear();
  }
  // Statistics
  async getStats(): Promise<{
    totalMessages: number;
    totalConversations: number;
    totalThreads: number;
<<<<<<< HEAD
    activeUsers: number;
=======
    activeUsers: number
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }> {
    return {
      totalMessages: this.messages.size
      totalConversations: this.conversations.size
      totalThreads: this.threads.size
      activeUsers: this.userConversations.size
    }
  }
}
// Singleton instance
export const messagingStorage = new MessagingStorage();
// Main functions for external use
export async function createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {
  return messagingStorage.createMessage(message);
}
export async function getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
  return messagingStorage.getMessage(id);
=======
  return messagingStorage.getMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return messagingStorage.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
  return messagingStorage.deleteMessage(id);
=======
  return messagingStorage.deleteMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function markAsRead(id: string): Promise<boolean> {
<<<<<<< HEAD
  return messagingStorage.markAsRead(id);
=======
  return messagingStorage.markAsRead(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD
  return messagingStorage.getConversation(id);
=======
  return messagingStorage.getConversation(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messagingStorage.updateConversation(id, updates);
}
export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}
export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD
  return messagingStorage.getUnreadMessageCount(userId);
=======
  return messagingStorage.getUnreadMessageCount(userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {
  return messagingStorage.searchMessages(query, userId, limit);
}
// Utility functions
export function createMessageData(
  conversationId: string
  senderId: string
  recipientId: string
  body: string
  additionalData?: Partial<Message>
): Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'> {
  return {
    conversationId
    senderId
    recipientId
    body
    ...additionalData
  }
}
export function createConversationData(
  participants: string[]
  additionalData?: Partial<Conversation>
): Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'> {
  return {
    participants
    lastMessageAtIso: new Date().toISOString()
    isArchived: false
    isMuted: false
    ...additionalData
  }
}
export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  if (diffInHours < 1) {
<<<<<<< HEAD
    return 'Just now';
=======
    return 'Just now'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();
  }
}