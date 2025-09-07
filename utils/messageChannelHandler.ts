// Message channel handler for real-time communication
export interface MessageChannel {
  id: string;
  name: string;
  type: 'direct' | 'group' | 'broadcast';
  participants: string[];
  createdAt: string;
  lastMessageAt?: string;
}

export interface Message {
  id: string;
  channelId: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file' | 'system';
}

export class MessageChannelHandler {
  private channels: Map<string, MessageChannel> = new Map();
  private messages: Map<string, Message[]> = new Map();

  createChannel(name: string, type: MessageChannel['type'], participants: string[]): MessageChannel {
    const channel: MessageChannel = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      type,
      participants,
      createdAt: new Date().toISOString()
    };
    
    this.channels.set(channel.id, channel);
    this.messages.set(channel.id, []);
    
    return channel;
  }

  sendMessage(channelId: string, senderId: string, content: string, type: Message['type'] = 'text'): Message {
    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      channelId,
      senderId,
      content,
      timestamp: new Date().toISOString(),
      type
    };
    
    const channelMessages = this.messages.get(channelId) || [];
    channelMessages.push(message);
    this.messages.set(channelId, channelMessages);
    
    // Update last message timestamp
    const channel = this.channels.get(channelId);
    if (channel) {
      channel.lastMessageAt = message.timestamp;
    }
    
    return message;
  }

  getChannelMessages(channelId: string): Message[] {
    return this.messages.get(channelId) || [];
  }

  getChannels(): MessageChannel[] {
    return Array.from(this.channels.values());
  }

  getChannel(channelId: string): MessageChannel | undefined {
    return this.channels.get(channelId);
  }
}

// Simple message handler for basic functionality
export const messageChannelHandler = {
  sendMessage: (message: string) => {
    // Implementation for sending messages
    console.log('Sending message:', message);
  },
  receiveMessage: (callback: (message: string) => void) => {
    // Implementation for receiving messages
    console.log('Setting up message receiver');
  }
};

export default MessageChannelHandler;