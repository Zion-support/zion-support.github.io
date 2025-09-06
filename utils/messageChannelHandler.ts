// Message channel handler for real - time communication;
export class MessageChannelHandler {
  private channels: Map < string, MessageChannel> = new Map ();
;
  create_channel (id: string): MessageChannel {
    const channel = new MessageChannel ();
    this.channels.set (id, channel);
    return channel;
  }
  get_channel (id: string): MessageChannel | undefined {
    return this.channels.get (id);
  }
  remove_channel (id: string): boolean {
    return this.channels.delete (id);
  }
  broadcast (message: any, exclude_channel?: string): void {
    this.channels.for_each ((channel, id) => {
      // Check condition
if ( {) {
  $2
}
        channel.port1.post_message (message);
      }
    });
  }
}
export default MessageChannelHandler;
;