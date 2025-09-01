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
