export const messageChannelHandler = {
  sendMessage: (message: string) => {
    // Implementation for sending messages
<<<<<<< HEAD
    // console.log('Sending message: ', message);
  }, receiveMessage: (_callback: (message: string) => void) => {
=======
    // eslint-disable-next-line no-console
    console.log('Sending message: ', message);
  },
  receiveMessage: () => {
>>>>>>> main
    // Implementation for receiving messages
    // eslint-disable-next-line no-console
    console.log('Setting up message receiver');
  }
};