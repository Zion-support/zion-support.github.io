// Messaging storage utilities;
export interface Message {
  id: string;
  conversation_id: string;  sender_id: string;
  recipient_id: string;
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
    user_id: string;
    emoji: string;
    created_at: string,
  }>;
}
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
    type?: 'direct' | 'group' | 'support' | 'project';
    project_id?: string;
    tags?: string[],
  }
}
export interface MessageThread {
  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs;
  createdAtIso: string;
  updatedAtIso: string,
}
export interface MessageSearchResult {
  message: Message;
  conversation: Conversation;
  highlights: string[];
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
          count++,
        }
      }
    }
    return count;
  }
  async getUnreadMessagesByUser (user_id: string): Promise < Message[]> {
    const conversation_ids = this.user_conversations.get (user_id) || new Set ();
    const unread_messages: Message[] = [];
;
    for (const conversation_id of conversation_ids) {
      const message_ids = this.conversation_messages.get (conversation_id) || new Set ();
      for (const message_id of message_ids) {
        const message = this.messages.get (message_id);
        // Check condition
if ( {) {
  $2
}
          unread_messages.push (message),
        }
      }
    }
    return unread_messages.sort ((a, b) =>;
      new Date (a.sentAtIso).get_time () - new Date (b.sentAtIso).get_time ());
  }
  // Search methods;
  async search_messages (query: string, user_id: string, limit: number = 20): Promise < MessageSearchResult[]> {
    const conversation_ids = this.user_conversations.get (user_id) || new Set ();
    const results: MessageSearchResult[] = [];
;
    for (const conversation_id of conversation_ids) {
      const conversation = this.conversations.get (conversation_id);
      // Check condition
if (continue) {
  $2
}
      const message_ids = this.conversation_messages.get (conversation_id) || new Set ();
      for (const message_id of message_ids) {
        const message = this.messages.get (message_id);
        // Check condition
if (continue) {
  $2
}
        const body = message.body.toLowerCase ();
        const query_lower = query.toLowerCase (),
        if () {) {
  $2
}
          const highlights = this.generate_highlights (message.body, query);
          const relevance_score = this.calculateRelevanceScore (message.body, query);
;
          results.push ({
            message,
            conversation,
            highlights,
            relevance_score;
          });
        }
      }
    }
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
