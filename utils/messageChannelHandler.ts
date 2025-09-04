<<<<<<< HEAD
export const messageChannelHandler = {
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
};
=======
type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void};

export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
  },
};
>>>>>>> 86e2a4cca918c6ff376b51aa8638f7a375ebfe57
