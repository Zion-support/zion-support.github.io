export const messageChannelHandler = {
  sendMessage: (message: string) => {
    // Implementation for sending messages
    // eslint-disable-next-line no-console
    console.log('Sending message: ', message);
  },
  receiveMessage: (callback: (message: string) => void) => {
    // Implementation for receiving messages
    // Placeholder: immediately invoke callback in this mock
    // eslint-disable-next-line no-console
    console.log('Setting up message receiver');
    void Promise.resolve().then(() => callback('test-message'));
  },
};

