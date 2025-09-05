<<<<<<< HEAD
<<<<<<< HEAD
export const messageChannelHandler = {
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
<<<<<<< HEAD
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},
type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void;
=======
export const messageChannelHandler = {;
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},,
>>>>>>> origin/automation-fixes
=======
>>>>>>> origin/automation/changelog
};
export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    // No-op: placeholder for message channel integration
  },
  receiveMessage: (_callback) => {
    // No-op: placeholder for message listener registration
  }
};
=======
type MessageHandler = { sendMessage: (message: unknown) => void; receiveMessage: (callback: (message: unknown) => void) => void}; export const messageChannelHandler: MessageHandler = { sendMessage: (_message) => { },receiveMessage: (_callback) => { },};
>>>>>>> origin/automation-improvements
