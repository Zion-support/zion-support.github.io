import fs from 'fs';
import path from 'path';
import {_Conversation, _ConversationContext, _InboxItem, _Message, _NewMessageInput, _UserSummary} from './types';

const _DATA_DIR = path.join(process.cwd(), 'data', 'messaging');
const _CONVERSATIONS_FILE = path.join(DATA_DIR, 'conversations.json');
const _MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const _USERS_FILE = path.join(DATA_DIR, 'users.json');
const _UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

function ensureFiles() {_if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
  if (!fs.existsSync(CONVERSATIONS_FILE)) fs.writeFileSync(CONVERSATIONS_FILE, '[]', 'utf8');
  if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8');
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf8');
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, {_recursive: true});
}

function readJson<T>(_filePath: string): T {_ensureFiles();
  return JSON.parse(fs.readFileSync(filePath, _'utf8')) as T;}

function writeJson<T>(_filePath: string, _data: T): void {_ensureFiles();
  fs.writeFileSync(filePath, _JSON.stringify(data, _null, _2), _'utf8');}

export function getUserById(_userId: string): UserSummary | undefined {_const _users = readJson<UserSummary[]>(USERS_FILE);
  return users.find(_(u) => u.id === userId);}

export function listUsers(): UserSummary[] {_return readJson<UserSummary[]>(USERS_FILE);}

export function listConversations(_userId: string): InboxItem[] {_const _conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const _messages = readJson<Message[]>(MESSAGES_FILE);
  const _users = readJson<UserSummary[]>(USERS_FILE);

  const items: InboxItem[] = conversations
    .filter(_(c) => c.participants.includes(userId))
    .map(_(c) => {
      const _convMessages = messages
        .filter(_(m) => m.conversationId === c.id)
        .sort(_(a, _b) => a.createdAt.localeCompare(b.createdAt));
      const _lastMessage = convMessages[convMessages.length - 1];
      const _otherId = c.participants.find(_(p) => p !== userId) as string;
      const _other = users.find(_(u) => u.id === otherId) || {
        id: otherId, _name: 'User', _role: 'client' as const};
      const _unreadCount = convMessages.filter(_(m) => m.recipientId === userId && m.status !== 'read'
      ).length;
      return {_conversation: c, _otherParticipant: other, _lastMessage, _unreadCount};
    })
    .sort(_(a, _b) => (b.conversation.lastMessageAt || '').localeCompare(a.conversation.lastMessageAt || ''));

  return items;
}

export function getConversationById(_conversationId: string): Conversation | undefined {_const _conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  return conversations.find(_(c) => c.id === conversationId);}

export function getMessages(_conversationId: string): Message[] {_const _messages = readJson<Message[]>(MESSAGES_FILE);
  return messages
    .filter(_(m) => m.conversationId === conversationId)
    .sort(_(a, _b) => a.createdAt.localeCompare(b.createdAt));}

export function markAsRead(_conversationId: string, _userId: string): void {_const _conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const _messages = readJson<Message[]>(MESSAGES_FILE);
  const _now = new Date().toISOString();

  // Update message statuses
  let _changed = false;
  for (const m of messages) {
    if (m.conversationId === conversationId && m.recipientId === userId && m.status !== 'read') {
      m.status = 'read';
      changed = true;}
  }
  if (changed) writeJson(MESSAGES_FILE, messages);

  // Update conversation unreadBy
  const _conv = conversations.find(_(c) => c.id === conversationId);
  if (conv) {_conv.unreadBy = conv.unreadBy.filter(_(id) => id !== userId);
    conv.lastMessageAt = now; // keep order fresh
    writeJson(CONVERSATIONS_FILE, _conversations);}
}

function saveAttachmentIfProvided(_base64?: string, _name?: string): string | undefined {_if (!base64) return undefined;
  ensureFiles();
  try {
    const _matches = base64.match(/^data:(.*?);base64, _(.*)$/);
    const _buffer = Buffer.from(matches ? matches[2] : base64, _'base64');
    const _ext = name?.split('.').pop() || 'bin';
    const _filename = `${uuidv4()}.${_ext}`;
    const _filepath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filepath, buffer);
    return `/uploads/${_filename}`;
  } catch (e) {_return undefined;}
}

export function createOrGetConversation(_senderId: string, _recipientId: string, _context?: ConversationContext): Conversation {_const _conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const _existing = conversations.find(_(c) => c.participants.includes(senderId) && c.participants.includes(recipientId) && JSON.stringify(c.context || {}) === JSON.stringify(context || {})
  );
  if (existing) return existing;

  const conv: Conversation = {_id: uuidv4(), _participants: [senderId, _recipientId], _context, _lastMessageAt: new Date().toISOString(), _unreadBy: [recipientId]};
  conversations.push(conv);
  writeJson(CONVERSATIONS_FILE, conversations);
  return conv;
}

export function sendMessage(_input: NewMessageInput): {_conversation: Conversation; message: Message} {_const _conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const _messages = readJson<Message[]>(MESSAGES_FILE);

  let conversation: Conversation | undefined;
  if (input.conversationId) {
    conversation = conversations.find(_(c) => c.id === input.conversationId);}
  if (!conversation) {_conversation = createOrGetConversation(input.senderId, _input.recipientId, _input.context);}

  const _attachmentUrl = saveAttachmentIfProvided(input.attachmentBase64, input.attachmentName);

  const message: Message = {_id: uuidv4(), _conversationId: conversation.id, _senderId: input.senderId, _recipientId: input.recipientId, _body: input.body, _linkUrl: input.linkUrl, _attachmentUrl, _createdAt: new Date().toISOString(), _status: 'sent'};
  messages.push(message);
  writeJson(MESSAGES_FILE, messages);

  conversation.lastMessageAt = message.createdAt;
  if (!conversation.unreadBy.includes(input.recipientId)) {_conversation.unreadBy.push(input.recipientId);}
  writeJson(CONVERSATIONS_FILE, conversations);

  return {_conversation, _message};
}