// Message channel handler for real-time communication
export class MessageChannelHandler {
  private channels: Map<string, MessageChannel> = new Map();

  createChannel(id: string): MessageChannel {
    const channel = new MessageChannel();
    this.channels.set(id, channel);
    return channel;
  }

  getChannel(id: string): MessageChannel | undefined {
    return this.channels.get(id);
  }

  removeChannel(id: string): boolean {
    return this.channels.delete(id);
  }

  broadcast(message: any, excludeChannel?: string): void {
    this.channels.forEach((channel, id) => {
      if (id !== excludeChannel) {
        channel.port1.postMessage(message);
      }
    });
  }
}

export default MessageChannelHandler;
