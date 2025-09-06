


export const messageChannelHandler = {
  sendMessage: (message: string) => {},
  receiveMessage: (callback: (message: string) => void) => {},
  sendMessage: (message: any) => {},
  receiveMessage: (callback: any) => {},
type MessageHandler = {
  sendMessage: (message: unknown) => void;
  receiveMessage: (callback: (message: unknown) => void) => void;
export const messageChannelHandler: MessageHandler = {
  sendMessage: (_message) => {
    //
    //
      //