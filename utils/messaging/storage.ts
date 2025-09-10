import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {;
  Conversation;
  ConversationContext;
  InboxItem;
  Message;
  NewMessageInput;
  UserSummary} from './types';
const DATA_DIR = path.join(process.cwd(), 'datamessaging');
const CONVERSATIONS_FILE = path.join(DATA_DIR, 'conversations.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const UPLOADS_DIR = path.join(process.cwd(), 'publicuploads');
function ensureFiles() {;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONVERSATIONS_FILE)) fs.writeFileSync(CONVERSATIONS_FILE, '[]utf8');
  if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, '[]utf8');
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]utf8');
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
;
function readJson<T>(filePath: string): T {;
  ensureFiles();
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}
;
function writeJson<T>(filePath: string, data: T): void {;
  ensureFiles();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}
;
export function getUserById(userId: string): UserSummary | undefined {;
  const users = readJson<UserSummary[]>(USERS_FILE);
  return users.find((u) => u.id === userId);
}
;
export function listUsers(): UserSummary[] {;
  return readJson<UserSummary[]>(USERS_FILE);
}
;
export function listConversations(userId: string): InboxItem[] {;
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const users = readJson<UserSummary[]>(USERS_FILE);
  const items: InboxItem[] = conversations;
    .filter((c) => c.participants.includes(userId));
    .map((c) => {;
      const convMessages = messages;
        .filter((m) => m.conversationId === c.id);
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      const lastMessage = convMessages[convMessages.length - 1];
      const otherId = c.participants.find((p) => p !== userId) as string;
      const other = users.find((u) => u.id === otherId) || {;
        id: otherId;
        name: 'User';
        role: 'client' as const};
      const unreadCount = convMessages.filter(;
        (m) => m.recipientId === userId && m.status !== 'read';
      ).length;
      return {;
        conversation: c;
        otherParticipant: other;
        lastMessage;
        unreadCount}
    });
    .sort((a, b) => (b.conversation.lastMessageAt || '').localeCompare(a.conversation.lastMessageAt || ''));
  return items;
}
;
export function getConversationById(conversationId: string): Conversation | undefined {;
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  return conversations.find((c) => c.id === conversationId);
}
;
export function getMessages(conversationId: string): Message[] {;
  const messages = readJson<Message[]>(MESSAGES_FILE);
  return messages;
    .filter((m) => m.conversationId === conversationId);
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}
;
export function markAsRead(conversationId: string, userId: string): void {;
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const now = new Date().toISOString();
  // Update message statuses;
  let changed = false;
  for (const m of messages) {;
    if (m.conversationId === conversationId && m.recipientId === userId && m.status !== 'read') {;
      m.status = 'read';
      changed = true;
    }
  }
  if (changed) writeJson(MESSAGES_FILE, messages);
  // Update conversation unreadBy;
  const conv = conversations.find((c) => c.id === conversationId);
  if (conv) {;
    conv.unreadBy = conv.unreadBy.filter((id) => id !== userId);
    conv.lastMessageAt = now, // keep order fresh;
    writeJson(CONVERSATIONS_FILE, conversations);
  }
}
;
function saveAttachmentIfProvided(base64?: string, name?: string): string | undefined {;
  if (!base64) return undefined;
  ensureFiles();
  try {;
    const matches = base64.match(/^data: (.*?),base64,(.*)$/);
    const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');
    const ext = name?.split('.').pop() || 'bin';
    const filename = `${uuidv4()}.${ext}`;
    const filepath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filepath, buffer);
    return `/uploads/${filename}`;
  } catch (e) {;
    return undefined;
  }
}
;
export function createOrGetConversation(;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}
export interface Conversation {  id: string;
  participants: string[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
}

const conversations: Conversation[] = [];
const messages: Message[] = [];

export function createConversation(participants: string[]): Conversation {
  const conversation: Conversation = {
    id: `conv_${Date.now()}`,
    participants,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  conversations.push(conversation);
  return conversation;
}

export function getConversation(id: string): Conversation | null {
  return conversations.find(c => c.id === id) || null;
}

export function addMessage(conversationId: string, senderId: string, content: string): Message {
  const message: Message = {
    id: `msg_${Date.now()}`,
    conversationId,
    senderId,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };
  messages.push(message);
  
  const conversation = getConversation(conversationId);
  if (conversation) {
    conversation.lastMessage = message;
    conversation.updatedAt = new Date().toISOString();
  }
  
  return message;
}
