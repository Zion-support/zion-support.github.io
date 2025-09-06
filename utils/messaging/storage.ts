<<<<<<< HEAD
// Messaging storage utilities
export interface Message {
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
    tags?: string[]
  }
}
export interface MessageThread {
  id: string;
  conversationId: string;
  rootMessageId: string;
  messages: string[]; // message IDs
  createdAtIso: string;
  updatedAtIso: string
}
export interface MessageSearchResult {
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
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
  async deleteMessage(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message) return false;
    message.isDeleted = true;
    message.deletedAtIso = new Date().toISOString()
    this.messages.set(id, message);
    return true;
  }
  async markAsRead(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message |message.isRead) return false;
    message.isRead = true;
    message.readAtIso = new Date().toISOString()
    this.messages.set(id, message);
    return true;
  }
  async markAsUnread(id: string): Promise<boolean> {
    const message = this.messages.get(id);
    if (!message |!message.isRead) return false;
    message.isRead = false;
    message.readAtIso = undefined
    this.messages.set(id, message);
    return true;
  }
  async addReaction(messageId: string, userId: string, emoji: string): Promise<boolean> {
    const message = this.messages.get(messageId);
    if (!message) return false;
    // Remove existing reaction from this user
    message.reactions = message.reactions.filter(r => r.userId !== userId)
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
    message.reactions = message.reactions.filter(r => r.userId !== userId)
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
    return this.conversations.get(id) |null
  }
  async updateConversation(id: string, updates: Partial<Conversation>): Promise<Conversation | null> {
    const conversation = this.conversations.get(id);
    if (!conversation) return null
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
    if (!conversation) return false
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
    conversation.updatedAtIso = new Date().toISOString()
    this.conversations.set(id, conversation);
    return true;
  }
  async unarchiveConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isArchived = false;
    conversation.updatedAtIso = new Date().toISOString()
    this.conversations.set(id, conversation);
    return true;
  }
  async muteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = true;
    conversation.updatedAtIso = new Date().toISOString()
    this.conversations.set(id, conversation);
    return true;
  }
  async unmuteConversation(id: string): Promise<boolean> {
    const conversation = this.conversations.get(id);
    if (!conversation) return false;
    conversation.isMuted = false;
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
    const conversationIds = this.userConversations.get(userId) |new Set();
    const conversations = Array.from(conversationIds)
      .map(id => this.conversations.get(id))
      .filter((conv): conv is Conversation => conv !== undefined);
    if (!includeArchived) {
      return conversations.filter(conv => !conv.isArchived)
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
          count++
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
      thread.updatedAtIso = new Date().toISOString()
      this.threads.set(threadId, thread);
    }
    return true;
  }
  async getThread(threadId: string): Promise<MessageThread | null> {
    return this.threads.get(threadId) |null
  }
  async getThreadMessages(threadId: string): Promise<Message[]> {
    const thread = this.threads.get(threadId);
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
    conversation.lastMessageId = messageId;
    conversation.lastMessageAtIso = new Date().toISOString();
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
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();
    let score = 0;
    const queryWords = queryLower.split(/\s+/)
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
    activeUsers: number
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
  return messagingStorage.getMessage(id)
}
export async function updateMessage(id: string, updates: Partial<Message>): Promise<Message | null> {
  return messagingStorage.updateMessage(id, updates);
}
export async function deleteMessage(id: string): Promise<boolean> {
  return messagingStorage.deleteMessage(id)
}
export async function markAsRead(id: string): Promise<boolean> {
  return messagingStorage.markAsRead(id)
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
  return messagingStorage.getConversationsByUser(userId, includeArchived);
}
export async function getUnreadMessageCount(userId: string): Promise<number> {
  return messagingStorage.getUnreadMessageCount(userId)
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
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  } else if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)}d ago`;
  } else {
    return date.toLocaleDateString();
  }
}
=======
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
}
}

export function getUserById(userId: string): UserSummary | undefined {
  const users = readJson<UserSummary[]>(USERS_FILE);
  return users.find(u => u.id === userId);
}
}

export function listUsers(): UserSummary[] {
  return readJson<UserSummary[]>(USERS_FILE);
}
}

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
}
}

export function getConversationById(
  conversationId: string
): Conversation | undefined {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  return conversations.find(c => c.id === conversationId);
}
}

export function getMessages(conversationId: string): Message[] {
  const messages = readJson<Message[]>(MESSAGES_FILE);
  return messages
    .filter(m => m.conversationId === conversationId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}
}

export function markAsRead(conversationId: string, userId: string): void {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const now = new Date().toISOString();

  // Update message statuses
  let changed = false;

  }
  if (changed) writeJson(MESSAGES_FILE, messages);

  // Update conversation unreadBy
  const conv = conversations.find(c => c.id === conversationId);
  if (conv) {
    conv.unreadBy = conv.unreadBy.filter(id => id !== userId);
    conv.lastMessageAt = now; // keep order fresh
    writeJson(CONVERSATIONS_FILE, conversations);
  }
}

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
}
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
}
}

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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
