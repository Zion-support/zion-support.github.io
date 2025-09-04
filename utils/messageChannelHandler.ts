<<<<<<< HEAD
type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void;
};

export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
<<<<<<< HEAD
    // no-op placeholder; wire to real transport as needed
  },
  receiveMessage: (_callback) => {
    // no-op placeholder; wire to real transport as needed
=======
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
>>>>>>> origin/merge-pr-11208
  },
=======
export const messageChannelHandler = {
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},
>>>>>>> origin/merge-pr-10614
};
