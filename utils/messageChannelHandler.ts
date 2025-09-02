export const messageChannelHandler = {
  sendMessage: (message: string) => {
    // Implementation for sending messages
    console.log('Sending message: ', message);
  },
<<<<<<< HEAD
  receiveMessage: (_callback: (message: string) => void) => {
    // Implementation for receiving messages
    console.log('Setting up message receiver');
  },
=======
  receiveMessage: (callback: (message: string) => void) => {
    // Implementation for receiving messages
    console.log('Setting up message receiver');
  }
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
};