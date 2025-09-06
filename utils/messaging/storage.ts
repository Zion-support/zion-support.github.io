<<<<<<< HEAD

  conversation_id: string;  sender_id: string;
  recipient_id: string;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
  reactions: Array<{
<<<<<<< HEAD
    userId: string;
    emoji: string;

    createdAt: string

    created_at: string,
origin/cursor/automate-test-improve-and-merge-code-20a4
  }>;
}
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface Conversation {
  }>;
}
export interface Conversation {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


export interface Conversation {;

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
export interface Conversation {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

<<<<<<< HEAD
    tags?: string[]
  }

    project_id?: string;
    tags?: string[],
  }
origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}



<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface MessageThread {;


}
export interface MessageThread {
  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs;
  createdAtIso: string;

<<<<<<< HEAD
  updatedAtIso: string

}
  updatedAtIso: string
}

origin/cursor/expand-services-advertise-and-build-project-c28b


export interface MessageSearchResult {;

ursor/fix-website-loading-errors-and-merge-6662
=======
export interface MessageSearchResult {

export interface MessageSearchResult {;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD

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

    return this && this.messages.get(id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
  async updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {

    if (!message) return null
    const updatedMessage = { ...message, ...updates }

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.messages.set(id, updatedMessage);
    const message = this && this.messages.get(id);
    if (!message) return null,

    const updatedMessage = { ...message, ...updates };
    this && this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    const message = this && this.messages.get(id);
    if (!message) return false;
<<<<<<< HEAD

    message.deletedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.messages.set(id, message);

    message && message.isDeleted = true;
    message && message.deletedAtIso = new Date().toISOString(),
    this && this.messages.set(id, message);
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {
<<<<<<< HEAD

    message.readAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.messages.set(id, message);
    const message = this && this.messages.get(id);
    if (!message || message && message.isRead) return false;

    message && message.isRead = true;
    message && message.readAtIso = new Date().toISOString(),
    this && this.messages.set(id, message);
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {
<<<<<<< HEAD

    message.readAtIso = undefined

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.messages.set(id, message);
    const message = this && this.messages.get(id);
    if (!message || !message && message.isRead) return false;

    message && message.isRead = false;
    message && message.readAtIso = undefined,
    this && this.messages.set(id, message);
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user
<<<<<<< HEAD

    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),


    message.reactions = message.reactions.filter(r => r.userId !== userId)
    // Add new reaction

    message && message.reactions.push({
      userId,
      emoji,
      createdAt: new Date().toISOString()
    });

    this && this.messages.set(messageId, message);

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    return true;
  }
  async removeReaction(messageId: string, userId: string): Promise<boolean> {
    const message = this && this.messages.get(messageId);
    if (!message) return false;
<<<<<<< HEAD

    message.reactions = message.reactions.filter(r => r.userId !== userId)

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.messages.set(messageId, message);
    message && message.reactions = message && message.reactions.filter(r => r && r.userId !== userId),
    this && this.messages.set(messageId, message);
    return true;
  }
  // Conversation methods
  async createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
    const newConversation: Conversation = {
<<<<<<< HEAD

      ...conversation,
      id: `conv_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };

    this && this.conversations.set(newConversation && newConversation.id, newConversation);


    // Add to user conversations
    for (const participantId of newConversation.participants) {
      this.addToUserConversations(participantId, newConversation.id);
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    }
    return newConversation;
  }
  async getConversation(id: string): Promise<Conversation | null> {
<<<<<<< HEAD

    return this.conversations.get(id) |null

    return this && this.conversations.get(id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {

    const conversation = this && this.conversations.get(id);
    if (!conversation) return null,


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    if (!conversation) return null
    const updatedConversation = {
      ...conversation
      ...updates
      updatedAtIso: new Date().toISOString()
<<<<<<< HEAD

    };

    this && this.conversations.set(id, updatedConversation);

    return updatedConversation;
  }
  async deleteConversation(id: string): Promise<boolean> {

    const conversation = this && this.conversations.get(id);
    if (!conversation) return false,


    if (!conversation) return false
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    // Remove from user conversations
    for (const participantId of conversation && conversation.participants) {
      this && this.removeFromUserConversations(participantId, id);
    }
    // Delete all messages in this conversation
<<<<<<< HEAD

    const messageIds = this && this.conversationMessages.get(id) || new Set();


    for (const messageId of messageIds) {
      this.messages.delete(messageId);
    }

    this && this.conversationMessages.delete(id);

    return this && this.conversations.delete(id);

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
    for (const messageId of messageIds) {
      this && this.messages.delete(messageId);
    }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
  async archiveConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD

    conversation.updatedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.conversations.set(id, conversation);

    conversation && conversation.isArchived = true;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD

    conversation.updatedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.conversations.set(id, conversation);

    conversation && conversation.isArchived = false;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD

    conversation.updatedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.conversations.set(id, conversation);

    conversation && conversation.isMuted = true;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this && this.conversations.get(id);
    if (!conversation) return false;
<<<<<<< HEAD

    conversation.updatedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.conversations.set(id, conversation);

    conversation && conversation.isMuted = false;
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(id, conversation);
    return true;
  }
  // Query methods
  async getMessagesByConversation(conversationId: string, limit: number = 50, offset: number = 0): Promise<Message[]> {
<<<<<<< HEAD

    const messageIds = this.conversationMessages.get(conversationId) |new Set()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    const sortedIds = Array.from(messageIds).sort((a, b) => {
      const msgA = this.messages.get(a);
      const msgB = this.messages.get(b);
      if (!msgA |!msgB) return 0;
      return new Date(msgA.sentAtIso).getTime() - new Date(msgB.sentAtIso).getTime();
    });
    const paginatedIds = sortedIds.slice(offset, offset + limit);
    return paginatedIds
      .map(id => this && this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined);
  }
  async getConversationsByUser(userId: string, includeArchived: boolean = false): Promise<Conversation[]> {
<<<<<<< HEAD

    const conversationIds = this && this.userConversations.get(userId) || new Set();
    const conversations = Array && Array.from(conversationIds)
      .map(id => this && this.conversations.get(id))

      .filter((conv): conv is Conversation => conv !== undefined);
    if (!includeArchived) {

      return conversations.filter(conv => !conv.isArchived)

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    }
    return conversations.sort((a, b) =>
      new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime()
      return conversations && conversations.filter(conv => !conv && conv.isArchived),
    }

    return conversations && conversations.sort((a, b) => 
      new Date(b && b.lastMessageAtIso).getTime() - new Date(a && a.lastMessageAtIso).getTime()
    );
  }
  async getUnreadMessageCount(userId: string): Promise<number> {
<<<<<<< HEAD

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    let count = 0;
    for (const conversationId of conversationIds) {

          count++

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      const messageIds = this && this.conversationMessages.get(conversationId) || new Set();
      for (const messageId of messageIds) {
        const message = this && this.messages.get(messageId);
        if (message && message.recipientId === userId && !message && message.isRead) {
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
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
          count++,
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
          count++,
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        }
      }
    }
    return count;
  }
<<<<<<< HEAD

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    const unreadMessages: Message[] = [];
    for (const conversationId of conversationIds) {

          unreadMessages.push(message)

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        }
      }
    }
    return unreadMessages.sort((a, b) =>
      new Date(a.sentAtIso).getTime() - new Date(b.sentAtIso).getTime()
    );
  }
  // Search methods
  async searchMessages(query: string, userId: string, limit: number = 20): Promise<MessageSearchResult[]> {
<<<<<<< HEAD

    const conversationIds = this && this.userConversations.get(userId) || new Set();

    const results: MessageSearchResult[] = [];
    for (const conversationId of conversationIds) {
      const conversation = this.conversations.get(conversationId);
      if (!conversation) continue;

        const queryLower = query.toLowerCase()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        if (body.includes(queryLower)) {
          const highlights = this.generateHighlights(message.body, query);
          const relevanceScore = this.calculateRelevanceScore(message.body, query);
          results.push({
            message
            conversation
            highlights
          });
        }
      }
    }
<<<<<<< HEAD

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
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {
<<<<<<< HEAD

    return this.threads.get(threadId) |null

    return this && this.threads.get(threadId) || null,
origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {

    if (!thread) return []

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    return thread.messages
      .map(id => this.messages.get(id))
    const thread = this && this.threads.get(threadId);
    if (!thread) return [],

    return thread && thread.messages
      .map(id => this && this.messages.get(id))
      .filter((msg): msg is Message => msg !== undefined)
      .sort((a, b) => new Date(a && a.sentAtIso).getTime() - new Date(b && b.sentAtIso).getTime());
  }
  // Private helper methods
  private async updateConversationLastMessage(conversationId: string, messageId: string): Promise<void> {
    const conversation = this && this.conversations.get(conversationId);
    if (!conversation) return;
<<<<<<< HEAD

    conversation.updatedAtIso = new Date().toISOString()

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    this.conversations.set(conversationId, conversation);

    conversation && conversation.lastMessageId = messageId;
    conversation && conversation.lastMessageAtIso = new Date().toISOString();
    conversation && conversation.updatedAtIso = new Date().toISOString(),
    this && this.conversations.set(conversationId, conversation);
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

      userConversations.delete(conversationId)

      userConversations && userConversations.delete(conversationId),
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
      userConversations && userConversations.delete(conversationId),
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

    let index = textLower.indexOf(queryLower)

    let index = textLower && textLower.indexOf(queryLower),
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
    let index = textLower && textLower.indexOf(queryLower),
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

    const textLower = text && text.toLowerCase();
    const queryLower = query && query.toLowerCase();
    
    let score = 0;
    const queryWords = queryLower && queryLower.split(/\s+/),

    
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

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      score += matches * (word.length / query.length);
      const matches = (textLower && textLower.match(new RegExp(word, 'g')) || []).length;
      score += matches * (word && word.length / query && query.length);
    }
    return score;
  }
<<<<<<< HEAD

    activeUsers: number

  }> {
    return {

      totalMessages: this && this.messages.size,
      totalConversations: this && this.conversations.size,
      totalThreads: this && this.threads.size,
      activeUsers: this && this.userConversations.size
    };

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  }
}
// Singleton instance
export const messagingStorage = new MessagingStorage();
// Main functions for external use
<<<<<<< HEAD
export async function createMessage(message: Omit<Message, 'id' | 'sentAtIso' | 'isRead' | 'isEdited' | 'isDeleted' | 'reactions'>): Promise<Message> {;
  return messagingStorage.createMessage(message);
}
export async function getMessage(id: string): Promise<Message | null> {

  return messagingStorage.getMessage(id)

  return messagingStorage && messagingStorage.getMessage(id),
origin/cursor/automate-test-improve-and-merge-code-382a
}
  return messagingStorage.getMessage(id)
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return messagingStorage && messagingStorage.updateMessage(id, updates);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}


export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {;

  return messagingStorage.updateMessage(id, updates);
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
}
export async function deleteMessage(id: string): Promise<boolean> {

  return messagingStorage.deleteMessage(id)

origin/cursor/expand-services-advertise-and-build-project-c28b
  return messagingStorage && messagingStorage.deleteMessage(id),
origin/cursor/automate-test-improve-and-merge-code-382a
}
export async function markAsRead(id: string): Promise<boolean> {

  return messagingStorage.markAsRead(id)

  return messagingStorage && messagingStorage.markAsRead(id),
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

}
  return messagingStorage && messagingStorage.getConversation(id),

export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {;

=======
}
export async function deleteMessage(id: string): Promise<boolean> {
  return messagingStorage && messagingStorage.deleteMessage(id),
}
export async function markAsRead(id: string): Promise<boolean> {
  return messagingStorage && messagingStorage.markAsRead(id),
}
export async function createConversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
  return messagingStorage && messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {
  return messagingStorage && messagingStorage.getConversation(id),
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  return messagingStorage.createConversation(conversation);
}
export async function getConversation(id: string): Promise<Conversation | null> {

  return messagingStorage.getConversation(id)

  return messagingStorage && messagingStorage.getConversation(id),
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

}

export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {;
  return messagingStorage.updateConversation(id, updates);
}

export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {;
  return messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}

export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {;

=======
}
export async function updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messagingStorage && messagingStorage.updateConversation(id, updates);
}
export async function getMessagesByConversation(conversationId: string, limit?: number, offset?: number): Promise<Message[]> {
  return messagingStorage && messagingStorage.getMessagesByConversation(conversationId, limit, offset);
}
export async function getConversationsByUser(userId: string, includeArchived?: boolean): Promise<Conversation[]> {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {

  return messagingStorage.getUnreadMessageCount(userId)

  return messagingStorage && messagingStorage.getUnreadMessageCount(userId),
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

}
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {
  return messagingStorage && messagingStorage.searchMessages(query, userId, limit);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
  return messagingStorage.getConversationsByUser(userId, includeArchived);
  return messagingStorage && messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)
}


export async function searchMessages(query: string, userId: string, limit?: number): Promise<MessageSearchResult[]> {;

  return messagingStorage.searchMessages(query, userId, limit);
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {
  Conversation,
  ConversationContext,
  InboxItem,
  Message,
  NewMessageInput,
  UserSummary,;
} from './types';

const DATA_DIR = path.join(process.cwd(), 'data', 'messaging');
const CONVERSATIONS_FILE = path.join(DATA_DIR, 'conversations.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

function ensureFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONVERSATIONS_FILE))
    fs.writeFileSync(CONVERSATIONS_FILE, '[]', 'utf8');
  if (!fs.existsSync(MESSAGES_FILE))
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8');
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf8');
  if (!fs.existsSync(UPLOADS_DIR))
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });

function readJson<T>(filePath: string): T {
  ensureFiles();
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;

function writeJson<T>(filePath: string, data: T): void {
  ensureFiles();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

export function getUserById(userId: string): UserSummary | undefined {
  const users = readJson<UserSummary[]>(USERS_FILE);
  return users.find(u => u.id === userId);

export function listUsers(): UserSummary[] {
  return readJson<UserSummary[]>(USERS_FILE);

export function listConversations(userId: string): InboxItem[] {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const users = readJson<UserSummary[]>(USERS_FILE);

  const items: InboxItem[] = conversations
    .filter(c => c.participants.includes(userId))
    .map(c => {
      const convMessages = messages
        .filter(m => m.conversationId === c.id)
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      const lastMessage = convMessages[convMessages.length - 1];
      const otherId = c.participants.find(p => p !== userId) as string;
      const other = users.find(u => u.id === otherId) || {
        id: otherId,
        name: 'User',
        role: 'client' as const,
      };
      const unreadCount = convMessages.filter(
        m => m.recipientId === userId && m.status !== 'read'
      ).length;
      return {
        conversation: c,
        otherParticipant: other,
        lastMessage,
        unreadCount,
      };
    })
    .sort((a, b) =>
      (b.conversation.lastMessageAt || '').localeCompare(
        a.conversation.lastMessageAt || ''
      )
    );

  return items;

export function getConversationById(
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
// Utility functions
export function createMessageData(
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
  if (changed) writeJson(MESSAGES_FILE, messages);

  // Update conversation unreadBy
  const conv = conversations.find(c => c.id === conversationId);
  if (conv) {
    conv.unreadBy = conv.unreadBy.filter(id => id !== userId);
    conv.lastMessageAt = now; // keep order fresh
    writeJson(CONVERSATIONS_FILE, conversations);
  }
ursor/fix-website-loading-errors-and-merge-6662
}
// Utility functions
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
}
}
// Utility functions
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function formatMessageTime(isoString: string): string {
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD

  const date = new Date(isoString);
  const now = new Date();

  const diffInHours = (now && now.getTime() - date && date.getTime()) / (1000 * 60 * 60);


  if (diffInHours < 1) {

    return 'Just now'

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
  const date = new Date(isoString);
  const now = new Date();
  if (diffInHours < 1) {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
<<<<<<< HEAD
    return date && date.toLocaleDateString();

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

<<<<<<< HEAD



ursor/fix-website-loading-errors-and-merge-6662
  }



origin/cursor/expand-services-advertise-and-build-project-c28b


function saveAttachmentIfProvided(
  base64?: string,
  name?: string
): string | undefined {
  if (!base64) return undefined;
  ensureFiles();
  try {
    const matches = base64.match(/^data:(.*?);base64,(.*)$/);
    const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');
    const ext = name?.split('.').pop() || 'bin';
    const filename = `${uuidv4()}.${ext}`;
    const filepath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filepath, buffer);
    return `/uploads/${filename}`;
  } catch (e) {
    return undefined;
  }

export function createOrGetConversation(
  senderId: string,
  recipientId: string,
  context?: ConversationContext
): Conversation {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const existing = conversations.find(
    c =>
      c.participants.includes(senderId) &&
      c.participants.includes(recipientId) &&
      JSON.stringify(c.context || {}) === JSON.stringify(context || {})
  );
  if (existing) return existing;

  const conv: Conversation = {
    id: uuidv4(),
    participants: [senderId, recipientId],
    context,
    lastMessageAt: new Date().toISOString(),
    unreadBy: [recipientId],
  };
  conversations.push(conv);
  writeJson(CONVERSATIONS_FILE, conversations);
  return conv;

export function sendMessage(input: NewMessageInput): {
  conversation: Conversation;
  message: Message;
} {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);

  let conversation: Conversation | undefined;
  if (input.conversationId) {
    conversation = conversations.find(c => c.id === input.conversationId);
  }
  if (!conversation) {
    conversation = createOrGetConversation(
      input.senderId,
      input.recipientId,
      input.context
    );
  }

  const attachmentUrl = saveAttachmentIfProvided(
    input.attachmentBase64,
    input.attachmentName
  );

  const message: Message = {
    id: uuidv4(),
    conversationId: conversation.id,
    senderId: input.senderId,
    recipientId: input.recipientId,
    body: input.body,
    linkUrl: input.linkUrl,
    attachmentUrl,
    createdAt: new Date().toISOString(),
    status: 'sent',
  };
  messages.push(message);
  writeJson(MESSAGES_FILE, messages);

  conversation.lastMessageAt = message.createdAt;
  if (!conversation.unreadBy.includes(input.recipientId)) {
    conversation.unreadBy.push(input.recipientId);
  }
  writeJson(CONVERSATIONS_FILE, conversations);

  return { conversation, message };
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  }
  // Cleanup methods;
  async clear_all (): Promise < void> {
    this.messages.clear ();
    this.conversations.clear ();
    this.threads.clear ();
    this.user_conversations.clear ();
    this.conversation_messages.clear ();
  }
  // Statistics;
  async get_stats (): Promise<{
    total_messages: number;
    total_conversations: number;
    total_threads: number;
    active_users: number,
  }> {
    return {
      total_messages: this.messages.size,
      total_conversations: this.conversations.size,
      total_threads: this.threads.size,
      active_users: this.user_conversations.size;
    }
  }
}
// Singleton instance;
export const messaging_storage = new MessagingStorage ();
;
// Main functions for external use;
export async function create_message (message: Omit < Message, 'id' | 'sentAtIso' | 'is_read' | 'is_edited' | 'is_deleted' | 'reactions'>): Promise < Message> {
  return messaging_storage.create_message (message);
}
export async function get_message (id: string): Promise < Message | null> {
  return messaging_storage.get_message (id),
}
export async function update_message (id: string, updates: Partial < Message>): Promise < Message | null> {
  return messaging_storage.update_message (id, updates);
}
export async function delete_message (id: string): Promise < boolean> {
  return messaging_storage.delete_message (id),
}
export async function markAsRead (id: string): Promise < boolean> {
  return messaging_storage.markAsRead (id),
}
export async function create_conversation (conversation: Omit < Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise < Conversation> {
  return messaging_storage.create_conversation (conversation);
}
export async function get_conversation (id: string): Promise < Conversation | null> {
  return messaging_storage.get_conversation (id),
}
export async function update_conversation (id: string, updates: Partial < Conversation>): Promise < Conversation | null> {
  return messaging_storage.update_conversation (id, updates);
}
export async function getMessagesByConversation (conversation_id: string, limit?: number, offset?: number): Promise < Message[]> {
  return messaging_storage.getMessagesByConversation (conversation_id, limit, offset);
}
export async function getConversationsByUser (user_id: string, include_archived?: boolean): Promise < Conversation[]> {
  return messaging_storage.getConversationsByUser (user_id, include_archived);
}
export async function getUnreadMessageCount (user_id: string): Promise < number> {
  return messaging_storage.getUnreadMessageCount (user_id),
}
export async function search_messages (query: string, user_id: string, limit?: number): Promise < MessageSearchResult[]> {
  return messaging_storage.search_messages (query, user_id, limit);
}
// Utility functions;
export function createMessageData (
  conversation_id: string,
  sender_id: string,
  recipient_id: string,
  body: string,
  additional_data?: Partial < Message>): Omit < Message, 'id' | 'sentAtIso' | 'is_read' | 'is_edited' | 'is_deleted' | 'reactions'> {
  return {
    conversation_id,
    sender_id,
    recipient_id,
    body,
    ...additional_data;
  }
}
export function createConversationData (
  participants: string[],
  additional_data?: Partial < Conversation>): Omit < Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'> {
  return {
    participants,
    lastMessageAtIso: new Date ().toISOString (),
    is_archived: false,
    is_muted: false,
    ...additional_data;
  }
}
export function generateMessageId (): string {
  return `msg_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
export function generateConversationId (): string {
  return `conv_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
}
export function formatMessageTime (iso_string: string): string {
  const date = new Date (iso_string);
  const now = new Date ();
  const diffInHours = (now.get_time () - date.get_time ()) / (1000 * 60 * 60);
;
  // Check condition
if ( {) {
  $2
}
    return 'Just now',
  } else // Check condition
if ( {) {
  $2
}
    return `${Math.floor (diffInHours)}h ago`;
  } else // Check condition
if ( { // 7 days) {
  $2
}
    return `${Math.floor (diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString ();
  }
}
  }


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
