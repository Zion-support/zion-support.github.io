
  body: string;
  link_url?: string;
  attachmentBase64?: string;
  attachment_name?: string;
  context?: string;
  sentAtIso: string;
  readAtIso?: string;
  is_read: boolean;
  is_read: boolean;,
pr-12325
  is_edited: boolean;
  editedAtIso?: string;
  is_deleted: boolean;
  deletedAtIso?: string;
  replyToId?: string;
  reactions: Array<{


export interface Conversation {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;
  isMuted: boolean;
  createdAtIso: string;
  // TODO: Implement
}
  }>;
  // TODO: Implement
export interface Conversation {;

  // TODO: Implement
  id: string;,
  participants: string[];
  lastMessageAtIso: string;
  lastMessageId?: string;
  isArchived: boolean;,
  isMuted: boolean;
  createdAtIso: string;,
pr-12325
  updatedAtIso: string;
  metadata?: {
    title?: string;
    description?: string;
    type?: 'direct' | 'group' | 'support' | 'project';

export interface MessageThread {
  id: string;
  conversation_id: string;
  rootMessageId: string;
  messages: string[]; // message IDs
  createdAtIso: string;
}

  updatedAtIso: string

}
export interface MessageSearchResult {

  message: Message;
  conversation: Conversation;
  highlights: string[];
  relevance_score: number;
}

class MessagingStorage {
  private messages: Map<string, Message> = new Map();
  private conversations: Map<string, Conversation> = new Map();
  private threads: Map<string, MessageThread> = new Map();
  private user_conversations: Map<string, Set<string>> = new Map(); // user_id -> conversation_ids
  private conversation_messages: Map<string, Set<string>> = new Map(); // conversation_id -> message_ids

  // Message methods

    const new_message: Message = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sentAtIso: new Date().toISOString(),
      is_read: false,
      is_edited: false,
      is_deleted: false,
      reactions: []
    };
    this.messages.set(new_message.id, new_message);
    
    // Update conversation
    await this.updateConversationLastMessage(new_message.conversation_id, new_message.id);
    
    // Update user conversations
    this.addToUserConversations(new_message.sender_id, new_message.conversation_id);
    this.addToUserConversations(new_message.recipient_id, new_message.conversation_id);
    
    // Add to conversation messages
    this.addToConversationMessages(new_message.conversation_id, new_message.id);
    
    return new_message;
  }

  async get_message(id: string): Promise<Message | null> {
    return this.messages.get(id) || null;
  }

  async update_message(id: string, updates: Partial<Message>): Promise<Message | null> {
    const message = this.messages.get(id);
    if (!message) return null;
    const updated_message = { ...message, ...updates };
    this.messages.set(id, updated_message);
    return updated_message;
  }

    message.is_deleted = true;
    message.deletedAtIso = new Date().toISOString();
    this.messages.set(id, message);
    return true;
  }

  async markAsRead(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message || message.is_read) return false;
    message.is_read = true;
    message.readAtIso = new Date().toISOString();
    this.messages.set(id, message);
    return true;
  }

  async markAsUnread(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message || !message.is_read) return false;
    message.is_read = false;
    message.readAtIso = undefined;
    this.messages.set(id, message);
    return true;
  }

      user_id,
      emoji,
      created_at: new Date().toISOString()
    });
    this.messages.set(message_id, message);
    return true;
  }

  async remove_reaction(message_id: string, user_id: string): Promise<boolean> {
    const message = this.messages.get(message_id);
    if (!message) return false;
    message.reactions = message.reactions.filter(r => r.user_id !== user_id);
    this.messages.set(message_id, message);
    return true;
  }

  // Conversation methods
  async create_conversation(conversation: Omit<Conversation, 'id' | 'createdAtIso' | 'updatedAtIso'>): Promise<Conversation> {
    const new_conversation: Conversation = {
      ...conversation,
      id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString()
    };
    this.conversations.set(new_conversation.id, new_conversation);
    
    // Add to user conversations
    for (const participant_id of new_conversation.participants) {
      this.addToUserConversations(participant_id, new_conversation.id);
    }
    return new_conversation;
  }

  async get_conversation(id: string): Promise<Conversation | null> {
    return this.conversations.get(id) || null;
  }

  async update_conversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
    if (!conversation) return null;
    const updated_conversation = {
      ...conversation,
      ...updates,
      updatedAtIso: new Date().toISOString()
    };
    this.conversations.set(id, updated_conversation);
    return updated_conversation;
  }

  async delete_conversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    
    // Remove from user conversations
    for (const participant_id of conversation.participants) {
      this.removeFromUserConversations(participant_id, id);
    }

    for (const message_id of message_ids) {
      this.messages.delete(message_id);
    }
    this.conversation_messages.delete(id);
    
    return this.conversations.delete(id);
  }

  async archive_conversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isArchived = true;
    conversation.updatedAtIso = new Date().toISOString();
    this.conversations.set(id, conversation);
    return true;
  }

  async unarchive_conversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isArchived = false;
    conversation.updatedAtIso = new Date().toISOString();
    this.conversations.set(id, conversation);
    return true;
  }

  async mute_conversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = true;
    conversation.updatedAtIso = new Date().toISOString();
    this.conversations.set(id, conversation);
    return true;
  }

  async unmute_conversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = false;
    conversation.updatedAtIso = new Date().toISOString();
    this.conversations.set(id, conversation);
    return true;
  }

    }
    
    return conversations.sort((a, b) => 
      new Date(b.lastMessageAtIso).getTime() - new Date(a.lastMessageAtIso).getTime()
    );
  }

  async getUnreadMessageCount(user_id: string): Promise<number> {
    const conversation_ids = this.user_conversations.get(user_id) || new Set();
    let count = 0;
    
    for (const conversation_id of conversation_ids) {
      const message_ids = this.conversation_messages.get(conversation_id) || new Set();
      for (const message_id of message_ids) {

        }
      }
    }
    return count;
  }


  // Private helper methods
  private async updateConversationLastMessage(conversationId: string, messageId: string): Promise<void> {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) return;

    this.conversations.set(conversationId, conversation);
  }

  private addToUserConversations(userId: string, conversationId: string): void {
    if (!this.user_conversations.has(userId)) {
      this.user_conversations.set(userId, new Set());
    }
    this.user_conversations.get(userId)!.add(conversationId);
  }

  private removeFromUserConversations(userId: string, conversationId: string): void {
    const userConversations = this.user_conversations.get(userId);
    if (userConversations) {

    }
  }

  private addToConversationMessages(conversationId: string, messageId: string): void {
    if (!this.conversation_messages.has(conversationId)) {
      this.conversation_messages.set(conversationId, new Set());
    }
    this.conversation_messages.get(conversationId)!.add(messageId);
  }

  private generateHighlights(text: string, query: string): string[] {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    const highlights: string[] = [];

    while (index !== -1) {
      const start = Math.max(0, index - 20);
      const end = Math.min(text.length, index + query.length + 20);
      highlights.push(text.substring(start, end));
      index = textLower.indexOf(queryLower, index + 1);
    }
    return highlights;
  }

  private calculateRelevanceScore(text: string, query: string): number {

      score += matches * (word.length / query.length);
    }
    return score;
  }

}

// Singleton instance
export const messaging_storage = new MessagingStorage();

// Main functions for external use

}

export async function delete_message(id: string): Promise<boolean> {
  return messaging_storage.delete_message(id);
}

export async function markAsRead(id: string): Promise<boolean> {

}

export async function update_conversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
  return messaging_storage.update_conversation(id, updates);
}


}

export async function getConversationsByUser(user_id: string, include_archived?: boolean): Promise<Conversation[]> {
  return messaging_storage.getConversationsByUser(user_id, include_archived);
}

export async function getUnreadMessageCount(user_id: string): Promise<number> {
  return messaging_storage.getUnreadMessageCount(user_id);
}

export async function search_messages(query: string, user_id: string, limit?: number): Promise<MessageSearchResult[]> {
  return messaging_storage.search_messages(query, user_id, limit);
}

// Utility functions
export function createMessageData(


export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}


  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();
  }

