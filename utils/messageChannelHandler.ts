export const messageChannelHandler = {
  sendMessage: any(message: any)  => {},
  receiveMessage: any(callback: any)  => {},
};
export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
  }
};