export const messageChannelHandler = {
<<<<<<< HEAD
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
};
=======
  sendMessage: (message: string) => {
    // Implementation for sending messages
<<<<<<< HEAD
    // console.log('Sending message: ', message);
  }, receiveMessage: (_callback: (message: string) => void) => {
=======
    // eslint-disable-next-line no-console
    console.log('Sending message: ', message);
<<<<<<< HEAD
  }, receiveMessage: (_callback: (message: string) => void) => {
=======
  },
  receiveMessage: () => {
>>>>>>> main
>>>>>>> main
    // Implementation for receiving messages
    // eslint-disable-next-line no-console
    console.log('Setting up message receiver');
  }
};
>>>>>>> main
