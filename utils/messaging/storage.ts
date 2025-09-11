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

=======
    created_at: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }>;
}
export interface Conversation {
=======


export interface Conversation {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
}



export interface MessageThread {;


  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs;
  createdAtIso: string;

  updatedAtIso: string

}
=======
  updatedAtIso: string
}


export interface MessageSearchResult {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
    return this && this.messages.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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


=======
    message.reactions = message.reactions.filter(r => r.userId !== userId)
    // Add new reaction

    message && message.reactions.push({
      userId,
      emoji,
      createdAt: new Date().toISOString()
    });

    this && this.messages.set(messageId, message);

    return true;
  }
  async removeReaction(messageId: string, userId: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;

    message.reactions = message.reactions.filter(r => r.userId !== userId)

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


    // Add to user conversations
    for (const participantId of newConversation.participants) {
      this.addToUserConversations(participantId, newConversation.id);
    }
    return newConversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {

    return this.conversations.get(id) |null

=======
    return this && this.conversations.get(id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,


=======
    if (!conversation) return null
    const updatedConversation = {
      ...conversation
      ...updates
      updatedAtIso: new Date().toISOString()

    };

    this && this.conversations.set(id, updatedConversation);

    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {

    const conversation = this && this.conversations.get(id);
    if (!conversation) return false,


=======
    if (!conversation) return false
    // Remove from user conversations
    for (const participantId of conversation.participants) {
      this.removeFromUserConversations(participantId, id);
    }
    // Delete all messages in this conversation

    const messageIds = this && this.conversationMessages.get(id) || new Set();

    for (const messageId of messageIds) {
      this.messages.delete(messageId);
    }

    this && this.conversationMessages.delete(id);

    return this && this.conversations.delete(id);

  }
  async archiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;

    conversation.updatedAtIso = new Date().toISOString()

    this.conversations.set(id, conversation);
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;

    conversation.updatedAtIso = new Date().toISOString()

    this.conversations.set(id, conversation);
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;

    conversation.updatedAtIso = new Date().toISOString()

    this.conversations.set(id, conversation);
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;

    conversation.updatedAtIso = new Date().toISOString()

    this.conversations.set(id, conversation);
    return true;
  }
  // Query methods
  async getMessagesByConversation(conversationId: string, limit: number = 50, offset: number = 0): Promise<Message[]> {

    const messageIds = this.conversationMessages.get(conversationId) |new Set()

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

    }
    return conversations.sort((a, b) =>
      new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime()
    );
  }
  async getUnreadMessageCount(userId: string): Promise<number> {

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    let count = 0;
    for (const conversationId of conversationIds) {

          count++

=======
      const messageIds = this && this.conversationMessages.get(conversationId) || new Set();
      for (const messageId of messageIds) {
        const message = this && this.messages.get(messageId);
        if (message && message.recipientId === userId && !message && message.isRead) {
=======
  relevance_score: number,
}
class MessagingStorage {
  private messages: Map < string, Message> = new Map ();
  private conversations: Map < string, Conversation> = new Map ();
  private threads: Map < string, MessageThread> = new Map ();
  private user_conversations: Map < string, Set < string>> = new Map (); // user_id -> conversation_ids;
  private conversation_messages: Map < string, Set < string>> = new Map (); // conversation_id -> message_ids;
  // Message methods;
  async create_message (message: Omit < Message, 'id' | 'sentAtIso' | 'is_read' | 'is_edited' | 'is_deleted' | 'reactions'>): Promise < Message> {
    const new_message: Message = {
      ...message,
      id: `msg_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
      sentAtIso: new Date ().toISOString (),
      is_read: false,
      is_edited: false,
      is_deleted: false,
      reactions: [];
    }
;
    this.messages.set (new_message.id, new_message);
;
    // Update conversation;
    await this.updateConversationLastMessage (new_message.conversation_id, new_message.id);
;
    // Update user conversations;
    this.addToUserConversations (new_message.sender_id, new_message.conversation_id);
    this.addToUserConversations (new_message.recipient_id, new_message.conversation_id);
;
    // Add to conversation messages;
    this.addToConversationMessages (new_message.conversation_id, new_message.id);
;
    return new_message;
  }
  async get_message (id: string): Promise < Message | null> {
    return this.messages.get (id) || null,
  }
  async update_message (id: string, updates: Partial < Message>): Promise < Message | null> {
    const message = this.messages.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_message = { ...message, ...updates }
    this.messages.set (id, updated_message);
    return updated_message;
  }
  async delete_message (id: string): Promise < boolean> {
    const message = this.messages.get (id);
    // Check condition
if (return false) {
  $2
}
    message.is_deleted = true;
    message.deletedAtIso = new Date ().toISOString (),
    this.messages.set (id, message);
    return true;
  }
  async markAsRead (id: string): Promise < boolean> {
    const message = this.messages.get (id);
    // Check condition
if (return false) {
  $2
}
    message.is_read = true;
    message.readAtIso = new Date ().toISOString (),
    this.messages.set (id, message);
    return true;
  }
  async markAsUnread (id: string): Promise < boolean> {
    const message = this.messages.get (id);
    // Check condition
if (return false) {
  $2
}
    message.is_read = false;
    message.readAtIso = undefined,
    this.messages.set (id, message);
    return true;
  }
  async add_reaction (message_id: string, user_id: string, emoji: string): Promise < boolean> {
    const message = this.messages.get (message_id);
    // Check condition
if (return false) {
  $2
}
    // Remove existing reaction from this user;
    message.reactions = message.reactions.filter (r => r.user_id !== user_id),
    // Add new reaction;
    message.reactions.push ({
      user_id,
      emoji,
      created_at: new Date ().toISOString ();
    });
;
    this.messages.set (message_id, message);
    return true;
  }
  async remove_reaction (message_id: string, user_id: string): Promise < boolean> {
    const message = this.messages.get (message_id);
    // Check condition
if (return false) {
  $2
}
    message.reactions = message.reactions.filter (r => r.user_id !== user_id),
    this.messages.set (message_id, message);
    return true;
  }
  // Conversation methods;
  async create_conversation (conversation: Omit < Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise < Conversation> {
    const new_conversation: Conversation = {
      ...conversation,
      id: `conv_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
      createdAtIso: new Date ().toISOString (),
      updatedAtIso: new Date ().toISOString ();
    }
;
    this.conversations.set (new_conversation.id, new_conversation);
;
    // Add to user conversations;
    for (const participant_id of new_conversation.participants) {
      this.addToUserConversations (participant_id, new_conversation.id);
    }
    return new_conversation;
  }
  async get_conversation (id: string): Promise < Conversation | null> {
    return this.conversations.get (id) || null,
  }
  async update_conversation (id: string, updates: Partial < Conversation>): Promise < Conversation | null> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return null, ) {
  $2
}
    const updated_conversation = {
      ...conversation,
      ...updates,
      updatedAtIso: new Date ().toISOString ();
    }
;
    this.conversations.set (id, updated_conversation);
    return updated_conversation;
  }
  async delete_conversation (id: string): Promise < boolean> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return false, ) {
  $2
}
    // Remove from user conversations;
    for (const participant_id of conversation.participants) {
      this.removeFromUserConversations (participant_id, id);
    }
    // Delete all messages in this conversation;
    const message_ids = this.conversation_messages.get (id) || new Set ();
    for (const message_id of message_ids) {
      this.messages.delete (message_id);
    }
    this.conversation_messages.delete (id);
;
    return this.conversations.delete (id);
  }
  async archive_conversation (id: string): Promise < boolean> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return false) {
  $2
}
    conversation.is_archived = true;
    conversation.updatedAtIso = new Date ().toISOString (),
    this.conversations.set (id, conversation);
    return true;
  }
  async unarchive_conversation (id: string): Promise < boolean> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return false) {
  $2
}
    conversation.is_archived = false;
    conversation.updatedAtIso = new Date ().toISOString (),
    this.conversations.set (id, conversation);
    return true;
  }
  async mute_conversation (id: string): Promise < boolean> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return false) {
  $2
}
    conversation.is_muted = true;
    conversation.updatedAtIso = new Date ().toISOString (),
    this.conversations.set (id, conversation);
    return true;
  }
  async unmute_conversation (id: string): Promise < boolean> {
    const conversation = this.conversations.get (id);
    // Check condition
if (return false) {
  $2
}
    conversation.is_muted = false;
    conversation.updatedAtIso = new Date ().toISOString (),
    this.conversations.set (id, conversation);
    return true;
  }
  // Query methods;
  async getMessagesByConversation (conversation_id: string, limit: number = 50, offset: number = 0): Promise < Message[]> {
    const message_ids = this.conversation_messages.get (conversation_id) || new Set (),
    const sorted_ids = Array.from (message_ids).sort ((a, b) => {
      const msg_a = this.messages.get (a);
      const msg_b = this.messages.get (b);
      // Check condition
if (return 0) {
  $2
}
      return new Date (msg_a.sentAtIso).get_time () - new Date (msg_b.sentAtIso).get_time ();
    });
;
    const paginated_ids = sorted_ids.slice (offset, offset + limit);
    return paginated_ids;
      .map (id => this.messages.get (id));
      .filter ((msg): msg is Message => msg !== undefined);
  }
  async getConversationsByUser (user_id: string, include_archived: boolean = false): Promise < Conversation[]> {
    const conversation_ids = this.user_conversations.get (user_id) || new Set ();
    const conversations = Array.from (conversation_ids);
      .map (id => this.conversations.get (id));
      .filter ((conv): conv is Conversation => conv !== undefined);
;
    // Check condition
if ( {) {
  $2
}
      return conversations.filter (conv => !conv.is_archived),
    }
    return conversations.sort ((a, b) =>;
      new Date (b.lastMessageAtIso).get_time () - new Date (a.lastMessageAtIso).get_time ());
  }
  async getUnreadMessageCount (user_id: string): Promise < number> {
    const conversation_ids = this.user_conversations.get (user_id) || new Set ();
    let count = 0;
;
    for (const conversation_id of conversation_ids) {
      const message_ids = this.conversation_messages.get (conversation_id) || new Set ();
      for (const message_id of message_ids) {
        const message = this.messages.get (message_id);
        // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

=======
    return this && this.threads.get(threadId) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
      userConversations && userConversations.delete(conversationId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
    let index = textLower && textLower.indexOf(queryLower),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

      score += matches * (word.length / query.length);
    }
    return score;
  }

    activeUsers: number

  }> {
    return {

      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size,
      totalThreads: this && this.threads.size,
      activeUsers: this && this.userConversations.size
    };

  }
}
// Singleton instance
export const messagingStorage = new MessagingStorage();
// Main functions for external use
export async function createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {;
  return messagingStorage.createMessage(message);
}
export async function getMessage(id: string): Promise<Message | null> {

  return messagingStorage.getMessage(id)

=======
  return messagingStorage && messagingStorage.getMessage(id),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
  return messagingStorage.getMessage(id)
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return messagingStorage.updateMessage(id, updates);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

export function generateMessageId(): string {;
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {;
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatMessageTime(isoString: string): string {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


