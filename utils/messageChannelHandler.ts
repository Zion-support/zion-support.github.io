type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void;
};

export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // no-op placeholder; wire to real transport as needed
  },
  receiveMessage: (_callback) => {
    // no-op placeholder; wire to real transport as needed
  },
};
