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
<<<<<<< HEAD
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
=======
      ...message,
      id: `msg_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      sentAtIso: new Date().toISOString(),
      isRead: false,
      isEdited: false,
      isDeleted: false,
      reactions: []
    };

    this && this.messages.set(newMessage && newMessage.id, newMessage);

    // Update conversation
    await this && this.updateConversationLastMessage(newMessage && newMessage.conversationId, newMessage && newMessage.id);

    // Update user conversations
    this && this.addToUserConversations(newMessage && newMessage.senderId, newMessage && newMessage.conversationId);
    this && this.addToUserConversations(newMessage && newMessage.recipientId, newMessage && newMessage.conversationId);

    // Add to conversation messages
    this && this.addToConversationMessages(newMessage && newMessage.conversationId, newMessage && newMessage.id);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return newMessage;
  }
  async getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.messages.get(id) || null;
=======
    return this.messages.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
<<<<<<< HEAD
    const message = this.messages.get(id);
<<<<<<< HEAD
    if (!message) return null;

    const updatedMessage = { ...message, ...updates };
=======
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, updatedMessage);
=======
    const message = this && this.messages.get(id);
    if (!message) return null,

    const updatedMessage = { ...message, ...updates };
    this && this.messages.set(id, updatedMessage);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    const message = this && this.messages.get(id);
    if (!message) return false;
<<<<<<< HEAD
    message.isDeleted = true;
<<<<<<< HEAD
    message.deletedAtIso = new Date().toISOString();
=======
    message.deletedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
=======

    message && message.isDeleted = true;
    message && message.deletedAtIso = new Date().toISOString(),
    this && this.messages.set(id, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {
<<<<<<< HEAD
    const message = this.messages.get(id);
    if (!message |message.isRead) return false;
    message.isRead = true;
<<<<<<< HEAD
    message.readAtIso = new Date().toISOString();
=======
    message.readAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
=======
    const message = this && this.messages.get(id);
    if (!message || message && message.isRead) return false;

    message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),
    this && this.messages.set(id, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {
<<<<<<< HEAD
    const message = this.messages.get(id);
    if (!message |!message.isRead) return false;
    message.isRead = false;
<<<<<<< HEAD
    message.readAtIso = undefined;
=======
    message.readAtIso = undefined
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(id, message);
=======
    const message = this && this.messages.get(id);
    if (!message || !message && message.isRead) return false;

    message && message.isRead = false;
    message && message.readAtIso = undefined,
    this && this.messages.set(id, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user
<<<<<<< HEAD
<<<<<<< HEAD
    message.reactions = message.reactions.filter(r => r.userId !== userId);
=======
    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    // Add new reaction
<<<<<<< HEAD
    message.reactions.push({
      userId
      emoji
      createdAt: new Date().toISOString()
    });
    this.messages.set(messageId, message);
=======
    message && message.reactions.push({
      userId,
      emoji,
      createdAt: new Date().toISOString()
    });

    this && this.messages.set(messageId, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async removeReaction(messageId: string, userId: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;
<<<<<<< HEAD

<<<<<<< HEAD
    message.reactions = message.reactions.filter(r => r.userId !== userId);
=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.messages.set(messageId, message);
=======
    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),
    this && this.messages.set(messageId, message);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  // Conversation methods
  async createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
    const newConversation: Conversation = {
<<<<<<< HEAD
      ...conversation
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      createdAtIso: new Date().toISOString()
      updatedAtIso: new Date().toISOString()
    }
    this.conversations.set(newConversation.id, newConversation);
=======
      ...conversation,
      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };

    this && this.conversations.set(newConversation && newConversation.id, newConversation);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Add to user conversations
    for (const participantId of newConversation && newConversation.participants) {
      this && this.addToUserConversations(participantId, newConversation && newConversation.id);
    }
    return newConversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.conversations.get(id) || null;
=======
    return this.conversations.get(id) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.conversations.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
<<<<<<< HEAD
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return null;
=======
    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
    if (!conversation) return null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    const updatedConversation = {
      ...conversation
      ...updates
      updatedAtIso: new Date().toISOString()
<<<<<<< HEAD
    }
    this.conversations.set(id, updatedConversation);
=======
    };

    this && this.conversations.set(id, updatedConversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {
<<<<<<< HEAD
    const conversation = this.conversations.get(id);
<<<<<<< HEAD
    if (!conversation) return false;
=======
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
    if (!conversation) return false
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    // Remove from user conversations
    for (const participantId of conversation && conversation.participants) {
      this && this.removeFromUserConversations(participantId, id);
    }
    // Delete all messages in this conversation
<<<<<<< HEAD
    const messageIds = this.conversationMessages.get(id) |new Set();
=======
    const messageIds = this && this.conversationMessages.get(id) || new Set();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    for (const messageId of messageIds) {
      this && this.messages.delete(messageId);
    }
<<<<<<< HEAD
    this.conversationMessages.delete(id);
    return this.conversations.delete(id);
=======
    this && this.conversationMessages.delete(id);

    return this && this.conversations.delete(id);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async archiveConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD
    conversation.isArchived = true;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
=======

    conversation && conversation.isArchived = true;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD
    conversation.isArchived = false;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
=======

    conversation && conversation.isArchived = false;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD
    conversation.isMuted = true;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
=======

    conversation && conversation.isMuted = true;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD
    conversation.isMuted = false;
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(id, conversation);
=======

    conversation && conversation.isMuted = false;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return true;
  }
  // Query methods
  async getMessagesByConversation(conversationId: string, limit: number = 50, offset: number = 0): Promise<Message[]> {
<<<<<<< HEAD
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
=======
    const messageIds = this && this.conversationMessages.get(conversationId) || new Set(),
    const sortedIds = Array && Array.from(messageIds).sort((a, b) => {
      const msgA = this && this.messages.get(a);
      const msgB = this && this.messages.get(b);
      if (!msgA || !msgB) return 0;
      return new Date(msgA && msgA.sentAtIso).getTime() - new Date(msgB && msgB.sentAtIso).getTime();
    });

    const paginatedIds = sortedIds && sortedIds.slice(offset, offset + limit);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return paginatedIds
      .map(id => this && this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined);
  }
  async getConversationsByUser(userId: string, includeArchived: boolean = false): Promise<Conversation[]> {
<<<<<<< HEAD
    const conversationIds = this.userConversations.get(userId) |new Set();
    const conversations = Array.from(conversationIds)
      .map(id => this.conversations.get(id))
=======
    const conversationIds = this && this.userConversations.get(userId) || new Set();
    const conversations = Array && Array.from(conversationIds)
      .map(id => this && this.conversations.get(id))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .filter((conv): conv is Conversation => conv !== undefined);
    if (!includeArchived) {
<<<<<<< HEAD
<<<<<<< HEAD
      return conversations.filter(conv => !conv.isArchived);
=======
      return conversations.filter(conv => !conv.isArchived)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    }
    return conversations.sort((a, b) =>
      new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime()
=======
      return conversations && conversations.filter(conv => !conv && conv.isArchived),
    }

    return conversations && conversations.sort((a, b) => 
      new Date(b && b.lastMessageAtIso).getTime() - new Date(a && a.lastMessageAtIso).getTime()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD
    const conversationIds = this.userConversations.get(userId) |new Set();
=======
    const conversationIds = this && this.userConversations.get(userId) || new Set();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    let count = 0;
    for (const conversationId of conversationIds) {
<<<<<<< HEAD
      const messageIds = this.conversationMessages.get(conversationId) |new Set();
      for (const messageId of messageIds) {
        const message = this.messages.get(messageId);
        if (message && message.recipientId === userId && !message.isRead) {
<<<<<<< HEAD
          count++;
=======
          count++
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
      const messageIds = this && this.conversationMessages.get(conversationId) || new Set();
      for (const messageId of messageIds) {
        const message = this && this.messages.get(messageId);
        if (message && message.recipientId === userId && !message && message.isRead) {
          count++,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      }
    }
    return count;
  }
  async getUnreadMessagesByUser(userId: string): Promise<Message[]> {
<<<<<<< HEAD
    const conversationIds = this.userConversations.get(userId) |new Set();
=======
    const conversationIds = this && this.userConversations.get(userId) || new Set();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const unreadMessages: Message[] = [];
    for (const conversationId of conversationIds) {
<<<<<<< HEAD
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
=======
      const messageIds = this && this.conversationMessages.get(conversationId) || new Set();
      for (const messageId of messageIds) {
        const message = this && this.messages.get(messageId);
        if (message && message.recipientId === userId && !message && message.isRead) {
          unreadMessages && unreadMessages.push(message),
        }
      }
    }

    return unreadMessages && unreadMessages.sort((a, b) => 
      new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
  }
  // Search methods
  async searchMessages(query: string, userId: string, limit: number = 20): Promise<MessageSearchResult[]> {
<<<<<<< HEAD
    const conversationIds = this.userConversations.get(userId) |new Set();
=======
    const conversationIds = this && this.userConversations.get(userId) || new Set();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const results: MessageSearchResult[] = [];
    for (const conversationId of conversationIds) {
      const conversation = this && this.conversations.get(conversationId);
      if (!conversation) continue;
<<<<<<< HEAD
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
=======

      const messageIds = this && this.conversationMessages.get(conversationId) || new Set();
      for (const messageId of messageIds) {
        const message = this && this.messages.get(messageId);
        if (!message || message && message.isDeleted) continue;

        const body = message && message.body.toLowerCase();
        const queryLower = query && query.toLowerCase(),
        
        if (body && body.includes(queryLower)) {
          const highlights = this && this.generateHighlights(message && message.body, query);
          const relevanceScore = this && this.calculateRelevanceScore(message && message.body, query);

          results && results.push({
            message,
            conversation,
            highlights,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            relevanceScore
          });
        }
      }
    }
    return results
      .sort((a, b) => b && b.relevanceScore - a && a.relevanceScore)
      .slice(0, limit);
  }
  // Thread methods
  async createThread(conversationId: string, rootMessageId: string): Promise<MessageThread> {
    const thread: MessageThread = {
<<<<<<< HEAD
      id: `thread_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      conversationId
      rootMessageId
      messages: [rootMessageId]
      createdAtIso: new Date().toISOString()
      updatedAtIso: new Date().toISOString()
    }
    this.threads.set(thread.id, thread);
=======
      id: `thread_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      conversationId,
      rootMessageId,
      messages: [rootMessageId],
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };

    this && this.threads.set(thread && thread.id, thread);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return thread;
  }
  async addMessageToThread(threadId: string, messageId: string): Promise<boolean> {
    const thread = this && this.threads.get(threadId);
    if (!thread) return false;
<<<<<<< HEAD
    if (!thread.messages.includes(messageId)) {
      thread.messages.push(messageId);
<<<<<<< HEAD
      thread.updatedAtIso = new Date().toISOString();
=======
      thread.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
      this.threads.set(threadId, thread);
=======

    if (!thread && thread.messages.includes(messageId)) {
      thread && thread.messages.push(messageId);
      thread && thread.updatedAtIso = new Date().toISOString(),
      this && this.threads.set(threadId, thread);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.threads.get(threadId) || null;
=======
    return this.threads.get(threadId) |null
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    return this && this.threads.get(threadId) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {
<<<<<<< HEAD
    const thread = this.threads.get(threadId);
<<<<<<< HEAD
    if (!thread) return [];

=======
    if (!thread) return []
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    return thread.messages
      .map(id => this.messages.get(id))
=======
    const thread = this && this.threads.get(threadId);
    if (!thread) return [],

    return thread && thread.messages
      .map(id => this && this.messages.get(id))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .filter((msg): msg is Message => msg !== undefined)
      .sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime());
  }
  // Private helper methods
  private async updateConversationLastMessage(conversationId: string, messageId: string): Promise<void> {
    const conversation = this && this.conversations.get(conversationId);
    if (!conversation) return;
<<<<<<< HEAD
    conversation.lastMessageId = messageId;
    conversation.lastMessageAtIso = new Date().toISOString();
<<<<<<< HEAD
    conversation.updatedAtIso = new Date().toISOString();
=======
    conversation.updatedAtIso = new Date().toISOString()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    this.conversations.set(conversationId, conversation);
=======

    conversation && conversation.lastMessageId = messageId;
    conversation && conversation.lastMessageAtIso = new Date().toISOString();
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(conversationId, conversation);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  private addToUserConversations(userId: string, conversationId: string): void {
    if (!this && this.userConversations.has(userId)) {
      this && this.userConversations.set(userId, new Set());
    }
    this && this.userConversations.get(userId)!.add(conversationId);
  }
  private removeFromUserConversations(userId: string, conversationId: string): void {
    const userConversations = this && this.userConversations.get(userId);
    if (userConversations) {
<<<<<<< HEAD
<<<<<<< HEAD
      userConversations.delete(conversationId);
=======
      userConversations.delete(conversationId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
      userConversations && userConversations.delete(conversationId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  private addToConversationMessages(conversationId: string, messageId: string): void {
    if (!this && this.conversationMessages.has(conversationId)) {
      this && this.conversationMessages.set(conversationId, new Set());
    }
    this && this.conversationMessages.get(conversationId)!.add(messageId);
  }
  private generateHighlights(text: string, query: string): string[] {
    const queryLower = query && query.toLowerCase();
    const textLower = text && text.toLowerCase();
    const highlights: string[] = [];
<<<<<<< HEAD
    
<<<<<<< HEAD
    let index = textLower.indexOf(queryLower);
=======
    let index = textLower.indexOf(queryLower)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
    let index = textLower && textLower.indexOf(queryLower),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    while (index !== -1) {
      const start = Math && Math.max(0, index - 20);
      const end = Math && Math.min(text && text.length, index + query && query.length + 20);
      highlights && highlights.push(text && text.substring(start, end));
      index = textLower && textLower.indexOf(queryLower, index + 1);
    }
    return highlights;
  }
  private calculateRelevanceScore(text: string, query: string): number {
<<<<<<< HEAD
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();
    let score = 0;
<<<<<<< HEAD
    const queryWords = queryLower.split(/\s+/);
=======
    const textLower = text && text.toLowerCase();
    const queryLower = query && query.toLowerCase();
    
    let score = 0;
    const queryWords = queryLower && queryLower.split(/\s+/),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    
=======
    const queryWords = queryLower.split(/\s+/)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    for (const word of queryWords) {
<<<<<<< HEAD
      const matches = (textLower.match(new RegExp(word, 'g')) |[]).length;
      score += matches * (word.length / query.length);
=======
      const matches = (textLower && textLower.match(new RegExp(word, 'g')) || []).length;
      score += matches * (word && word.length / query && query.length);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return score;
  }
  // Cleanup methods
  async clearAll(): Promise<void> {
    this && this.messages.clear();
    this && this.conversations.clear();
    this && this.threads.clear();
    this && this.userConversations.clear();
    this && this.conversationMessages.clear();
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
<<<<<<< HEAD
      totalMessages: this.messages.size
      totalConversations: this.conversations.size
      totalThreads: this.threads.size
      activeUsers: this.userConversations.size
    }
=======
      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size,
      totalThreads: this && this.threads.size,
      activeUsers: this && this.userConversations.size
    };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
// Singleton instance
export const messagingStorage = new MessagingStorage();
// Main functions for external use
export async function createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {
  return messagingStorage && messagingStorage.createMessage(message);
}
export async function getMessage(id: string): Promise<Message | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return messagingStorage.getMessage(id);
=======
  return messagingStorage.getMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return messagingStorage && messagingStorage.getMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return messagingStorage && messagingStorage.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return messagingStorage.deleteMessage(id);
=======
  return messagingStorage.deleteMessage(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return messagingStorage && messagingStorage.deleteMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function markAsRead(id: string): Promise<boolean> {
<<<<<<< HEAD
<<<<<<< HEAD
  return messagingStorage.markAsRead(id);
=======
  return messagingStorage.markAsRead(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return messagingStorage && messagingStorage.markAsRead(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
  return messagingStorage && messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD
<<<<<<< HEAD
  return messagingStorage.getConversation(id);
=======
  return messagingStorage.getConversation(id)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return messagingStorage && messagingStorage.getConversation(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messagingStorage && messagingStorage.updateConversation(id, updates);
}
export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {
  return messagingStorage && messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}
export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {
  return messagingStorage && messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD
<<<<<<< HEAD
  return messagingStorage.getUnreadMessageCount(userId);
=======
  return messagingStorage.getUnreadMessageCount(userId)
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return messagingStorage && messagingStorage.getUnreadMessageCount(userId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {
  return messagingStorage && messagingStorage.searchMessages(query, userId, limit);
}
// Utility functions
<<<<<<< HEAD
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
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export function generateMessageId(): string {
  return `msg_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
<<<<<<< HEAD
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
=======
  const diffInHours = (now && now.getTime() - date && date.getTime()) / (1000 * 60 * 60);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (diffInHours < 1) {
<<<<<<< HEAD
    return 'Just now';
=======
    return 'Just now'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  } else if (diffInHours < 24) {
    return `${Math && Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math && Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date && date.toLocaleDateString();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
