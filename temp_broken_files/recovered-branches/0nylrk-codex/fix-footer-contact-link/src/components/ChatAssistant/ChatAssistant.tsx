 export interface Message {
  id: string;
role: 'user' | 'assistant';
message: string;
timestamp: Date;
read?: boolean 
}export interface ChatAssistantProps {
  isOpen: boolean;
onClose: () => void;
recipient: {
  id: string;
name: string;
avatarUrl?: string;
role?: string 
};
conversationId?: string;
initialMessages?: Message[];
onSendMessage: (message: string, conversationId?: string) => Promise<void>;
contextHeader?: ReactNode 
}export function ChatAssistant ({
  isOpen;
onClose;
recipient;
conversationId;
initialMessages = [];
onSendMessage;
contextHeader 
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]> (initialMessages);
const messagesEndRef = useRef<HTMLDivElement | null> (null);
if (initialMessages.length > 0) {
  //Send message to recipient via the provided handler await onSendMessage (message, conversationId) 
};
if (!isOpen) return null;
return () 
}</div> </div> <Button > <X className="h-5 w-5" /> </Button> </div> {
  contextHeader 
}</div>) 
}<p>Start a conversation with {
  recipient.name 
}</p> </div>) : (messages.map ( (msg) => (<ChatMessage key= {
  msg.id 
}role= {
  msg.role 
}message= {
  msg.message 
}/>) ) ) 
}<div ref= {
  messagesEndRef 
}/> </div> </div> </div> </div>) 
}