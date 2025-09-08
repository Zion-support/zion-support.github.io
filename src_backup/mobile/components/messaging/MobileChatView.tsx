


import React, { useState } from "react,
import { Avatar, AvatarImage, AvatarFallback } from @/components/ui/avatar",
import { Button } from "@/components/ui/button,
import { Input } from @/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react
import { cn } from "@/lib/utils;
import { useRouter  } from next/router';
import { toast } from sonner";
import React, { useState } from 'react
import { Avatar, AvatarImage, AvatarFallback } from @/components/ui/avatar'
import { Button } from '@/components/ui/button
import { Input } from @/components/ui/input'
import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
} from 'lucide-react
import { cn } from @/lib/utils'
import { useRouter } from 'next/router
import { toast } from sonner'
interface Message {
  id: string;
origin/cursor/automate-test-improve-and-merge-code-2533

  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {



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


    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }





  }
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`
    toast.success('Starting video call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  }
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`
    toast.success('Starting audio call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  }
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
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`
    toast.success('Starting video call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  }
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`
    toast.success('Starting audio call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  }
    toast.success('Starting video call', {
    toast.success('Starting audio call', {




  return (
    <div className='flex flex-col h-full pb-safe'>
      <header className='sticky top-0 z-10 bg-background border-b border-border'>
        <div className='flex items-center h-14 px-4'>
          <Button




            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label='Go back'
          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          
          <div className='flex items-center flex-1 gap-3 mx-2'>

            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>
                {contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>

              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status |'Online'}
              </p>
            </div>
          </div>
          <div className='flex'>


              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>





              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
          <div className='flex'>
            <Button
              variant='ghost'
              size='icon'
              onClick={startAudioCall}
              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
          
          <div className="flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={startAudioCall}
              aria-label="Start audio call"
            >
              <Phone className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={startVideoCall}
              aria-label="Start video call"
            >
              <Video className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" aria-label="More options">
              <MoreVertical className="h-5 w-5" />



                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe


                'max-w-[80%] rounded-2xl px-4 py-2'
                message.isMe

                  'text-xs mt-1 flex justify-end'
                  message.isMe
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}
              >
      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

                {message.timestamp}
                {message.isMe && message.status && (
                  <span className='ml-1'>

      
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
              'flex',
              message.isMe ? 'justify-end' : 'justify-start'
                'max-w-[80%] rounded-2xl px-4 py-2',
                message.isMe 
                  ? 'bg-primary text-primary-foreground rounded-tr-none' 
                  : 'bg-muted rounded-tl-none'
                'text-xs mt-1 flex justify-end',
                message.isMe ? 'text-primary-foreground/80' : 'text-muted-foreground'
    toast.success('Starting video call', {;
    toast.success('Starting audio call', {;
    <div className='flex flex-col h-full pb-safe'>;
      <header className='sticky top-0 z-10 bg-background border-b border-border'>;
        <div className='flex items-center h-14 px-4'>;
          <Button;
            variant='ghost';
            size='icon';
            onClick={onBack}
            aria-label='Go back';
          >;
            <ChevronLeft className='h-5 w-5' />;
          </Button>;
          <div className='flex items-center flex-1 gap-3 mx-2'>;
              <h3 className='font-medium'>{contact.name}</h3>;
              <p className='text-xs text-muted-foreground'>;
                {contact.status || 'Online'}
              </p>;
            </div>;
          </div>;
          <div className='flex'>;
            <Button;
              variant='ghost';
              size='icon';
              onClick={startAudioCall}
              aria-label='Start audio call';
            >;
              <Phone className='h-5 w-5' />;
            </Button>;
            <Button;
              variant='ghost';
              size='icon';
              onClick={startVideoCall}
              aria-label='Start video call';
            >;
              <Video className='h-5 w-5' />;
            </Button>;
            <Button variant='ghost' size='icon' aria-label='More options'>;
              <MoreVertical className='h-5 w-5' />;
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>;
        {messages.map((message) => (;

          <div;
            key={message.id}
            className={cn (
              'flex',
              message.is_me ? 'justify - end' : 'justify - start')}
          >;
            <div;
              className={cn (
                'max - w-[80%] rounded - 2xl px - 4 py - 2',
                message.is_me;
                  ? 'bg - primary text - primary - foreground rounded - tr - none';
                  : 'bg - muted rounded - tl - none')}            >;


                    {message.status === read' ? '✓✓ : ✓'}

              </div>;
            </div>;
          </div>;




      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
          </Button>
          <Input
            value={newMessage}
      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
            placeholder='Type a message...'
            className='flex-1'
          />
          
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'


  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533
;
