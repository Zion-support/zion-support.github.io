/* eslint-disable */
 interface Message {;
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void
}

export function MobileChatView({
  contact
  messages
  onBack
  onSendMessage
}: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState('')
  const router = useRouter()
  const handleSend = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage)
      setNewMessage('')
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Message {
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useRouter } from 'next/router',;
import { toast } from "sonner",;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
  sender?: string,;
  avatar?: string,;
  status?: 'sent' | 'delivered' | 'read';
}
;
interface MobileChatViewProps {;
  contact: {;
    id: string,;
    name: string,;
    avatar?: string,;
    status?: string;
  },;
  messages: Message[],;
  onBack: () => void,;
  onSendMessage: (content: string) => void;
}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState(""),
  const router = useRouter(),
  
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage),
      setNewMessage("")
;
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const router = useRouter(),;
  const handleSend = () => {;
  if (newMessage.trim () !== "") {;""
  onSendMessage (newMessage);";""
setNewMessage ("") > <Button > <ChevronLeft className="h-5 w-5"/> </Button> <div className="flex items-center flex-1 gap-3 mx-2"> <Avatar> <AvatarImage src= {;
  contact.avatar ;
}alt= {;
  contact.name ;"
}/> <AvatarFallback> {;""
  contact.name.charAt (0) .toUpperCase () ";""
}</AvatarFallback> </Avatar> <div> </p> </div> </div> <div className="flex"> <Button > <Phone className="h-5 w-5"/> </Button> <Button > <Video className="h-5 w-5"/> </Button> <Button variant=" ghost"size=" icon"aria-label=" More options"> <MoreVertical className="h-5 w-5"/> </Button> </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {;
  messages.map ( (message) => (<div key= {;
  message.id ;
}) ;
}> {;"
  message.timestamp ;"'"
}{";'"'"
  message.isMe && message.status && (<span className="ml-1"> {';''
  message.status === 'read' ? '✓✓' : '✓' ;"
}</span>) ;""
}</div> </div> </div>) ) ";"'"
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"aria-label=" Attach file"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) ;'"'"
}'"'"'"