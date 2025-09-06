 interface Message {
  id: string;
content: string;
timestamp: string;
isMe: boolean;
sender?: string;
avatar?: string;
status?: 'sent' | 'delivered' | 'read' 
}interface MobileChatViewProps {
  contact: {
  id: string;
name: string;
avatar?: string;
status?: string 
};
messages: Message[];
onBack: () => void;
onSendMessage: (content: string) => void 
}export function MobileChatView ({
  contact, messages, onBack, onSendMessage 
}: MobileChatViewProps) {
  const handleSend = () => {
  if (newMessage.trim () !== "") {
  onSendMessage (newMessage);
setNewMessage ("") contact.avatar 
}alt= {
  contact.name 
}/> <AvatarFallback> {
  contact.name.charAt (0) .toUpperCase () 
}</AvatarFallback> </Avatar> <div> </p> </div> </div> </Button> <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/> </Button> </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {
  messages.map ( (message) => (<div key= {
  message.id 
}) 
}> {
  message.timestamp 
}{
  message.isMe && message.status && (<span className="ml-1"> {
  message.status === 'read' ? '✓✓' : '✓' 
}</span>) 
}</div> </div> </div>) ) 
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) 
}