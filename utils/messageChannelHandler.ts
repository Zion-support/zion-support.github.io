<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export const messageChannelHandler = {
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
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
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
};
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
};
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
