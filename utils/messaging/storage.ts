=======// Messaging storage utilities
export interface Message {;
  id: string;
  conversationId: string;  senderId: string;
  recipientId: string;
  conversation_id: string;  sender_id: string;
  recipient_id: string;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    createdAt: string

=======
    created_at: string,export interface Conversation {;
=======
=======
  }>;
}
export interface Conversation {=======


export interface Conversation {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======    project_id?: string;
    tags?: string[],
  }
=======
    tags?: string[]
  }}



export interface MessageThread {;


  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs;
  createdAtIso: string;

  updatedAtIso: string

export interface MessageThread {;
  id: string;
  conversationId: string;
  rootMessageId: string;
  messages: string[]; // message IDs
  createdAtIso: string;
=======
}

export interface MessageSearchResult {;

  message: Message;
  conversation: Conversation;
  highlights: string[];

  relevanceScore: number


export interface MessageSearchResult {;
  message: Message;
  conversation: Conversation;
  highlights: string[];

  relevanceScore: number

}class MessagingStorage {
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();
  private threads: Map<string, MessageThread> = new Map();
  private userConversations: Map<string, Set<string>> = new Map(); // userId -> conversationIds
  private conversationMessages: Map<string, Set<string>> = new Map(); // conversationId -> messageIds
  // Message methods
  async createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {
    const newMessage: Message = {
    if (!message) return null
    const updatedMessage = { ...message, ...updates }

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
    return this.messages.get(id) |null
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
    if (!message) return null
    const updatedMessage = { ...message, ...updates }
=======
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


    return newMessage;
  }
  async getMessage(id: string): Promise<Message | null> {

    return this.messages.get(id) |null

=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

    message.deletedAtIso = new Date().toISOString()
=======

    message.deletedAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.messages.set(id, message);
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {
    message.readAtIso = new Date().toISOString()
=======

    message.readAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.messages.set(id, message);
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {
    message.readAtIso = undefined
=======

    message.readAtIso = undefined

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.messages.set(id, message);
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user
    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),


=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
    // Add new reaction

    message && message.reactions.push({
      userId,
      emoji,
      createdAt: new Date().toISOString()
    });

    this && this.messages.set(messageId, message);
=======

    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),


=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
    // Add new reaction

    message && message.reactions.push({
      userId,
      emoji,
      createdAt: new Date().toISOString()
    });

    this && this.messages.set(messageId, message);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return true;
  }
  async removeReaction(messageId: string, userId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    message.reactions = message.reactions.filter(r => r.userId !== userId)
=======

    message.reactions = message.reactions.filter(r => r.userId !== userId)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.messages.set(messageId, message);
    return true;
  }
  // Conversation methods
  async createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
    const newConversation: Conversation = {
      ...conversation,
      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };

    this && this.conversations.set(newConversation && newConversation.id, newConversation);


=======
    this.conversations.set(id, conversation);
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.updatedAtIso = new Date().toISOString()
=======

    conversation.updatedAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.conversations.set(id, conversation);
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.updatedAtIso = new Date().toISOString()
=======

    conversation.updatedAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.conversations.set(id, conversation);
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.updatedAtIso = new Date().toISOString()
=======

    conversation.updatedAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.conversations.set(id, conversation);
    return true;
  }
  // Query methods
  async getMessagesByConversation(conversationId: string, limit: number = 50, offset: number = 0): Promise<Message[]> {
    const messageIds = this.conversationMessages.get(conversationId) |new Set()
=======

    const messageIds = this.conversationMessages.get(conversationId) |new Set()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    const conversationIds = this && this.userConversations.get(userId) || new Set();
    const conversations = Array && Array.from(conversationIds)
      .map(id => this && this.conversations.get(id))

      .filter((conv): conv is Conversation => conv !== undefined);
    if (!includeArchived) {

      return conversations.filter(conv => !conv.isArchived)

    let count = 0;
    for (const conversationId of conversationIds) {

          count++

=======
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
      id: `thread_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      conversationId,
      rootMessageId,
      messages: [rootMessageId],
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };

    this && this.threads.set(thread && thread.id, thread);

      thread.updatedAtIso = new Date().toISOString()
      this.threads.set(threadId, thread);
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {
    if (!thread) return []

    return this.threads.get(threadId) |null
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {
    const thread = this.threads.get(threadId);
    if (!thread) return []
=======
=======
    return this.threads.get(threadId) |null

=======
    return this && this.threads.get(threadId) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {

    if (!thread) return []

    conversation.updatedAtIso = new Date().toISOString()
=======

    conversation.updatedAtIso = new Date().toISOString()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      userConversations.delete(conversationId)

=======
      userConversations && userConversations.delete(conversationId),    let index = textLower.indexOf(queryLower)

=======
    let index = textLower && textLower.indexOf(queryLower),    const textLower = text && text.toLowerCase();
    const queryLower = query && query.toLowerCase();
    
    let score = 0;
    const queryWords = queryLower && queryLower.split(/\s+/),

    
=======
    const queryWords = queryLower.split(/\s+/)
    for (const word of queryWords) {

    return results;
      .sort ((a, b) => b.relevance_score - a.relevance_score);
      .slice (0, limit);
  }
  // Thread methods;
  async create_thread (conversation_id: string, rootMessageId: string): Promise < MessageThread> {
    const thread: MessageThread = {
      id: `thread_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
      conversation_id,
      rootMessageId,
      messages: [rootMessageId],
      createdAtIso: new Date ().toISOString (),
      updatedAtIso: new Date ().toISOString ();
    }
;
    this.threads.set (thread.id, thread);
    return thread;
  }
  async addMessageToThread (thread_id: string, message_id: string): Promise < boolean> {
    const thread = this.threads.get (thread_id);
    // Check condition
if (return false) {
  $2
}
    if () {) {
  $2
}
      thread.messages.push (message_id);
      thread.updatedAtIso = new Date ().toISOString (),
      this.threads.set (thread_id, thread);
    }
    return true;
  }
  async get_thread (thread_id: string): Promise < MessageThread | null> {
    return this.threads.get (thread_id) || null,
  }
  async getThreadMessages (thread_id: string): Promise < Message[]> {
    const thread = this.threads.get (thread_id);
    // Check condition
if (return [], ) {
  $2
}
    return thread.messages;
      .map (id => this.messages.get (id));
      .filter ((msg): msg is Message => msg !== undefined);
      .sort ((a, b) => new Date (a.sentAtIso).get_time () - new Date (b.sentAtIso).get_time ());
  }
  // Private helper methods;
  private async updateConversationLastMessage (conversation_id: string, message_id: string): Promise < void> {
    const conversation = this.conversations.get (conversation_id);
    // Check condition
if (return) {
  $2
}
    conversation.lastMessageId = message_id;
    conversation.lastMessageAtIso = new Date ().toISOString ();
    conversation.updatedAtIso = new Date ().toISOString (),
    this.conversations.set (conversation_id, conversation);
  }
  private addToUserConversations (user_id: string, conversation_id: string): void {
    if () {) {
  $2
}
      this.user_conversations.set (user_id, new Set ());
    }
    this.user_conversations.get (user_id)!.add (conversation_id);
  }
  private removeFromUserConversations (user_id: string, conversation_id: string): void {
    const user_conversations = this.user_conversations.get (user_id);
    // Check condition
if ( {) {
  $2
}
      user_conversations.delete (conversation_id),
    }
  }
  private addToConversationMessages (conversation_id: string, message_id: string): void {
    if () {) {
  $2
}
      this.conversation_messages.set (conversation_id, new Set ());
    }
    this.conversation_messages.get (conversation_id)!.add (message_id);
  }
  private generate_highlights (text: string, query: string): string[] {
    const query_lower = query.toLowerCase ();
    const text_lower = text.toLowerCase ();
    const highlights: string[] = [];
;
    let index = text_lower.index_of (query_lower),
    while (index !== -1) {
      const start = Math.max (0, index - 20);
      const end = Math.min (text.length, index + query.length + 20);
      highlights.push (text.substring (start, end));
      index = text_lower.index_of (query_lower, index + 1);
    }
    return highlights;
  }
  private calculateRelevanceScore (text: string, query: string): number {
    const text_lower = text.toLowerCase ();
    const query_lower = query.toLowerCase ();
;
    let score = 0;
    const query_words = query_lower.split (/\s+/),
    for (const word of query_words) {
      const matches = (text_lower.match (new RegExp (word, 'g')) || []).length;

  }> {
    return {

      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size,
      totalThreads: this && this.threads.size,
      activeUsers: this && this.userConversations.size
    };

}
export async function deleteMessage(id: string): Promise<boolean> {

  return messagingStorage.deleteMessage(id)

=======
  return messagingStorage && messagingStorage.deleteMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function markAsRead(id: string): Promise<boolean> {

  return messagingStorage.markAsRead(id)

=======
  return messagingStorage && messagingStorage.markAsRead(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;
  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {

  return messagingStorage.getConversation(id)

=======
  return messagingStorage && messagingStorage.getConversation(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return messagingStorage && messagingStorage.getUnreadMessageCount(userId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {
  return messagingStorage && messagingStorage.searchMessages(query, userId, limit);
=======
  return messagingStorage.markAsRead(id)
}


export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;

  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
  return messagingStorage.getConversation(id)
}


export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;
  return messagingStorage && messagingStorage.getUnreadMessageCount(userId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return messagingStorage.markAsRead(id)
}
export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;
  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
  return messagingStorage.getConversation(id)
}
export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messagingStorage.updateConversation(id, updates);
}
export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}
export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {

export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;
=======

  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)
}


export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {;

  return messagingStorage.searchMessages(query, userId, limit);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
// Utility functions


export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
=======

    participants,
    lastMessageAtIso: new Date().toISOString(),
    isArchived: false,
    isMuted: false,
    ...additionalData;
  };
}

export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;
  return messagingStorage.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
  return messagingStorage.deleteMessage(id)
}
export async function markAsRead(id: string): Promise<boolean> {
  return messagingStorage.markAsRead(id)
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;
  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
  return messagingStorage.getConversation(id)

=======
  return messagingStorage && messagingStorage.getConversation(id),>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messagingStorage.updateConversation(id, updates);
}
export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}
export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {

export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)

=======
  return messagingStorage && messagingStorage.getUnreadMessageCount(userId),>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;

  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
  return messagingStorage.getConversation(id)
}


export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;

  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)
}


export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {;

  return messagingStorage.searchMessages(query, userId, limit);

    participants
    lastMessageAtIso: new Date().toISOString()
    isArchived: false
    isMuted: false
    ...additionalData
  }
  
  return message;
}
=======}
// Utility functions

export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
    participants,
    lastMessageAtIso: new Date().toISOString(),
    isArchived: false,
    isMuted: false,
    ...additionalData;
  };
}

export function generateMessageId(): string {;
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {;
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatMessageTime(isoString: string): string {;
  const date = new Date(isoString);
  const now = new Date();
  const diffInHours = (now && now.getTime() - date && date.getTime()) / (1000 * 60 * 60);


  if (diffInHours < 1) {

    return 'Just now'
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    participants,
    lastMessageAtIso: new Date().toISOString(),
    isArchived: false,
    isMuted: false,
    ...additionalData;
  };
}

export function generateMessageId(): string {;
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {;
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatMessageTime(isoString: string): string {;

  const date = new Date(isoString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();


  }


  }
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function generateMessageId(): string {;
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {;
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatMessageTime(isoString: string): string {;    participants,
    lastMessageAtIso: new Date().toISOString(),
    isArchived: false,
    isMuted: false,
    ...additionalData;
  };
}

export function generateMessageId(): string {;
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {;
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatMessageTime(isoString: string): string {;
=======

  const date = new Date(isoString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
