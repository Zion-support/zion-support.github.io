export type UserRole = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  content: string;
  userId: string;
  channelId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Channel {
  id: string;
  name: string;
  description?: string;
  type: 'public' | 'private' | 'direct';
  participants: string[];
  createdAt: string;
  updatedAt: string;
}