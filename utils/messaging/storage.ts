// Messaging storage utilities
export interface Message {;
  id: string;
  conversationId: string;  senderId: string;
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

    createdAt: string


  }>;
}


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface Conversation {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

    tags?: string[]
  }
<<<<<<< HEAD
}

export interface MessageThread {

export interface MessageThread {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======
    project_id?: string;
    tags?: string[],
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}



export interface MessageThread {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs;
  createdAtIso: string;

  updatedAtIso: string

}
<<<<<<< HEAD


=======
<<<<<<< HEAD
export interface MessageSearchResult {
=======
  updatedAtIso: string
}


export interface MessageSearchResult {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  message: Message;
  conversation: Conversation;
  highlights: string[];

  relevanceScore: number

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


  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message) return false;

    message.deletedAtIso = new Date().toISOString()

    this.messages.set(id, message);
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {

    message.readAtIso = new Date().toISOString()

    this.messages.set(id, message);
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {

    message.readAtIso = undefined

    this.messages.set(id, message);
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user

    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),



  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,



          count++,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      }
    }
    return count;
  }

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    const unreadMessages: Message[] = [];
    for (const conversationId of conversationIds) {

          unreadMessages.push(message)

        }
      }
    }
    return unreadMessages.sort((a, b) =>
      new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime()
    );
  }
  // Search methods
  async searchMessages(query: string, userId: string, limit: number = 20): Promise<MessageSearchResult[]> {

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    const results: MessageSearchResult[] = [];
    for (const conversationId of conversationIds) {
      const conversation = this.conversations.get(conversationId);
      if (!conversation) continue;

        const queryLower = query.toLowerCase()

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

    return thread;
  }
  async addMessageToThread(threadId: string, messageId: string): Promise<boolean> {
    const thread = this.threads.get(threadId);
    if (!thread) return false;

      thread.updatedAtIso = new Date().toISOString()

      this.threads.set(threadId, thread);
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {

    return this.threads.get(threadId) |null


  }
  async getThreadMessages(threadId: string): Promise<Message[]> {

    if (!thread) return []

    return thread.messages
      .map(id => this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined)
      .sort((a, b) => new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime());
  }
  // Private helper methods
  private async updateConversationLastMessage(conversationId: string, messageId: string): Promise<void> {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) return;

    conversation.updatedAtIso = new Date().toISOString()

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

    let index = textLower.indexOf(queryLower)


    while (index !== -1) {
      const start = Math.max(0, index - 20);
      const end = Math.min(text.length, index + query.length + 20);
      highlights.push(text.substring(start, end));
      index = textLower.indexOf(queryLower, index + 1);
    }
    return highlights;
  }
  private calculateRelevanceScore(text: string, query: string): number {

    const textLower = text && text.toLowerCase();
    const queryLower = query && query.toLowerCase();
    
    let score = 0;
    const queryWords = queryLower && queryLower.split(/\s+/),

    

}

  return messagingStorage.getMessage(id)
}
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
<<<<<<< HEAD
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return messagingStorage && messagingStorage.updateMessage(id, updates);
=======
  return messagingStorage.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return messagingStorage.updateMessage(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteMessage(id: string): Promise<boolean> {

  return messagingStorage.deleteMessage(id)


}
export async function markAsRead(id: string): Promise<boolean> {
<<<<<<< HEAD


  return messagingStorage.markAsRead(id)



=======

  return messagingStorage.markAsRead(id)

=======
  return messagingStorage && messagingStorage.markAsRead(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {

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

}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {
  return messagingStorage && messagingStorage.searchMessages(query, userId, limit);



export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {

  return messagingStorage.getUnreadMessageCount(userId)


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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)
}

<<<<<<< HEAD
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {

export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return messagingStorage.searchMessages(query, userId, limit);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    return date && date.toLocaleDateString();
=======

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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
