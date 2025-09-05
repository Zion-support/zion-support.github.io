<<<<<<< HEAD
>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
export const messageChannelHandler = {
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/main
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
};

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
};
=======
};
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/main
