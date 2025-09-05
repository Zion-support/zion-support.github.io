>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void;
};
export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
  }
};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
