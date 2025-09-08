export const messageChannelHandler = {
  sendMessage: (message: unknown) => {},
  receiveMessage: (callback: unknown) => {},
};
export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
  }
};