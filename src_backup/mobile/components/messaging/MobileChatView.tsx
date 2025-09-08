<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/messaging/MobileChatView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import {
  Send
  PaperclipIcon
  ChevronLeft
  MoreVertical
  Video
  Phone
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
} from 'lucide-react
import { cn } from @/lib/utils'
import { useRouter } from 'next/router
import { toast } from sonner'
interface Message {
  id: string;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

interface Message {
  id: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/messaging/MobileChatView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  status?: 'sent | delivered' | 'read;

interface MobileChatViewProps {
  contact: {

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/ avatar';
import { Button } from '@/components/ui/ button';
import { Input } from '@/components/ui/ input';
import {
  Send,
  PaperclipIcon,
  ChevronLeft,
  MoreVertical,
  Video,
  Phone,
} from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_router } from 'next/router';
import { toast } from 'sonner';
interface Message {
  id: string;
  content: string;
  timestamp: string;
  is_me: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
interface MobileChatViewProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string;
  }
  messages: Message[];
  on_back: () => void;
  onSendMessage: (content: string) => void;
export /**
 * MobileChatView - Function description
 */
function MobileChatView() {
  const [new_message, setNewMessage] = useState ('');
  const router = use_router ();
  const handle_send = () =>: any {
    // Check condition
if (!== '') {) {
  $2
}
      onSendMessage (new_message);
      setNewMessage ('');




<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
  }
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      handle_send ();
    }

  const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ('Starting video call', {
      description: `Connecting with ${contact.name}...`,
    });
    // Navigate to video call page;
    router.push (`/call/${room_id}`);
  }
  const startAudioCall = () =>: any {
    const room_id = `mobile - audio-${contact.id}`;
    toast.success ('Starting audio call', {
      description: `Connecting with ${contact.name}...`,
    });
    // Navigate to video call page with audio - only flag;
    router.push (`/call/${room_id}?audio_only = true`);

  }
export function MobileChatView(): any ({;
  contact,;
  messages,;
  onBack,;
  onSendMessage,;
}: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState('');
  const router = useRouter();
  const handleSend = () => {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (newMessage && newMessage.trim() !== '') {;
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault();
      handleSend();
    }
  };

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success('Starting video call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page;
    router && router.push(`/call/${roomId}`);
  };

  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success('Starting audio call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page with audio-only flag;
    router && router.push(`/call/${roomId}?audioOnly=true`);
  };

  return (
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
<<<<<<< HEAD
    toast.success('Starting video call', {
=======
    toast.success("Starting video call", {
>>>>>>> origin/resolved-merge-conflicts
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  },
  
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
<<<<<<< HEAD
    toast.success('Starting audio call', {
=======
    toast.success("Starting audio call", {
>>>>>>> origin/resolved-merge-conflicts
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  },
  
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
  return (
    <div className='flex flex-col h-full pb-safe'>
      <header className='sticky top-0 z-10 bg-background border-b border-border'>
        <div className='flex items-center h-14 px-4'>
          <Button
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
<<<<<<< HEAD



=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">

            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
<<<<<<< HEAD
              <AvatarFallback>
                {contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
=======
>>>>>>> origin/resolved-merge-conflicts
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status |'Online'}
              </p>
            </div>
          </div>
          <div className='flex'>
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            aria-label='Go back'>;
            <ChevronLeft className='h-5 w-5' />;
          </Button>;

          <div className='flex items-center flex-1 gap-3 mx-2'>;
            <Avatar>;
              <AvatarImage src={contact && contact.avatar} alt={contact && contact.name} />;
              <AvatarFallback>;
                {contact && contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className='font-medium'>{contact && contact.name}</h3>;
              <p className='text-xs text-muted-foreground'>;
                {contact && contact.status || 'Online'}
              </p>;
            </div>;
          </div>;

          <div className='flex'>;

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Button
              variant='ghost'
              size='icon'
              onClick={startAudioCall}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              aria-label='Start audio call'>;
              <Phone className='h-5 w-5' />;
            </Button>;


<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}
              </p>
            </div>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


            </Button>
          </div>
        </div>
      </header>

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba




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
          </div>
        </div>
      </header>

<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              aria-label='Start video call'>;
              <Video className='h-5 w-5' />;
            </Button>;

            <Button variant='ghost' size='icon' aria-label='More options'>;
              <MoreVertical className='h-5 w-5' />;
    <div className='flex flex - col h - full pb - safe'>;
      <header className='sticky top - 0 z - 10 bg - background border - b border - border'>;
        <div className='flex items - center h - 14 px - 4'>;
          <Button;
            variant='ghost';
            size='icon';
            on_click={on_back}
            aria - label='Go back'          >;
            <ChevronLeft className='h - 5 w - 5' />;
          </Button>;
          <div className='flex items - center flex - 1 gap - 3 mx - 2'>;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>;
                {contact.name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className='font - medium'>{contact.name}</h3>;
              <p className='text - xs text - muted - foreground'>;
                {contact.status || 'Online'}
              </p>;
            </div>;
          </div>;
          <div className='flex'>;
            <Button;
              variant='ghost';
              size='icon';
              on_click={startAudioCall}
              aria - label='Start audio call'            >;
              <Phone className='h - 5 w - 5' />;
            </Button>;
            <Button;
              variant='ghost';
              size='icon';
              on_click={startVideoCall}
              aria - label='Start video call'            >;
              <Video className='h - 5 w - 5' />;
            </Button>;
            <Button variant='ghost' size='icon' aria - label='More options'>;
              <MoreVertical className='h - 5 w - 5' />;

            </Button>;
          </div>;
        </div>;
      </header>;

              'flex',
              message && message.isMe ? 'justify-end' : 'justify-start'
            )}>;
            <div
              className={cn(
<<<<<<< HEAD

                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                'max-w-[80%] rounded-2xl px-4 py-2'
                message.isMe
=======
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              )}            >
              <p>{message.content}</p>
              <div
                className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  'text-xs mt-1 flex justify-end',
                  message && message.isMe

                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}

      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
      
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
>>>>>>> origin/resolved-merge-conflicts
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
<<<<<<< HEAD
              'flex',
              message.isMe ? 'justify-end' : 'justify-start'
=======
              "flex",
              message.isMe ? "justify-end" : "justify-start"
>>>>>>> origin/resolved-merge-conflicts
            )}
          >
            <div 
              className={cn(
<<<<<<< HEAD
                'max-w-[80%] rounded-2xl px-4 py-2',
                message.isMe 
                  ? 'bg-primary text-primary-foreground rounded-tr-none' 
                  : 'bg-muted rounded-tl-none'
=======
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
>>>>>>> origin/resolved-merge-conflicts
              )}
            >
              <p>{message.content}</p>
              <div className={cn(
<<<<<<< HEAD
                'text-xs mt-1 flex justify-end',
                message.isMe ? 'text-primary-foreground/80' : 'text-muted-foreground'
=======
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
>>>>>>> origin/resolved-merge-conflicts
              )}>
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
<<<<<<< HEAD
    toast.success('Starting video call', {;
=======
    toast.success("Starting video call", {;
>>>>>>> origin/resolved-merge-conflicts
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page;
    router.push(`/call/${roomId}`);
  },;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
<<<<<<< HEAD
    toast.success('Starting audio call', {;
=======
    toast.success("Starting audio call", {;
>>>>>>> origin/resolved-merge-conflicts
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page with audio-only flag;
    router.push(`/call/${roomId}?audioOnly=true`);
  },;
  return (;
<<<<<<< HEAD
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
=======
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button;
            variant="ghost";
            size="icon";
            onClick={onBack}
            aria-label="Go back";
          >;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
          <div className="flex items-center flex-1 gap-3 mx-2">;
>>>>>>> origin/resolved-merge-conflicts
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
            </Avatar>;
            <div>;
<<<<<<< HEAD
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
=======
              <h3 className="font-medium">{contact.name}</h3>;
              <p className="text-xs text-muted-foreground">;
                {contact.status || "Online"}
              </p>;
            </div>;
          </div>;
          <div className="flex">;
            <Button;
              variant="ghost";
              size="icon";
              onClick={startAudioCall}
              aria-label="Start audio call";
            >;
              <Phone className="h-5 w-5" />;
            </Button>;
            <Button;
              variant="ghost";
              size="icon";
              onClick={startVideoCall}
              aria-label="Start video call";
            >;
              <Video className="h-5 w-5" />;
            </Button>;
            <Button variant="ghost" size="icon" aria-label="More options">;
              <MoreVertical className="h-5 w-5" />;
>>>>>>> origin/resolved-merge-conflicts
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>;
        {messages.map((message) => (;
<<<<<<< HEAD
=======
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages.map((message) => (;
<<<<<<< HEAD
=======
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



          <div;
            key={message.id} ;
            className={cn(;
              "flex",;
              message.isMe ? "justify-end" : "justify-start";
            )}
          >;
            <div;
              className={cn(;
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe;
                  ? "bg-primary text-primary-foreground rounded-tr-none";
                  : "bg-muted rounded-tl-none";
              )}
            >;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              <p>{message.content}</p>;
              <div;
                className={cn (
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';
                    : 'text - muted - foreground')}
              >;
}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState(");
  const router = null;
                message.isMe ? text-primary-foreground/80" : "text-muted-foreground
              )}>
origin/cursor/automate-test-improve-and-merge-code-2533
                {message.timestamp}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                {message.isMe && message.status && (;
                  <span className=ml-1">;


<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    {message.status === read' ? '✓✓ : ✓'}

              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/messaging/MobileChatView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ))}

      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />

          </Button>
          <Input
            value={newMessage}
<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

=======
<<<<<<< HEAD
=======

>>>>>>> origin/resolved-merge-conflicts
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />


      
<<<<<<< HEAD
      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
          </Button>
          <Input
            value={newMessage}
=======
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...
            className=flex-1'          />

          <Button
            size='icon
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? opacity-50' : '}
            aria-label=Send message'          >
            <Send className='h-5 w-5 />
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=Type a message...'
            className='flex-1          />

          <Button
            size=icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50 : '}
            aria-label='Send message          >
            <Send className=h-5 w-5' />
          </Button>
        </div>
      </div>;
    </div>;
  );
}
}
}
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...
            className=flex-1"
          />
          
          <Button
            size="icon
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? opacity-50" : "}
            aria-label=Send message"
          >
            <Send className="h-5 w-5 />
          </Button>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
      </div>;
    </div>;
  );
};
}
}
      
<<<<<<< HEAD
      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
=======
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />
>>>>>>> origin/resolved-merge-conflicts
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
<<<<<<< HEAD
            placeholder='Type a message...'
            className='flex-1'
          />
          
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'
=======
            placeholder="Type a message..."
            className="flex-1"
          />
          
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
>>>>>>> origin/resolved-merge-conflicts
          >
            <Send className="h-5 w-5" />

          </Button>
        </div>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

      </div>;

      <div className='sticky bottom-0 bg-background border-t border-border p-2>;
        <div className=flex items-center gap-2'>;
          <Button variant='ghost size=icon' aria-label='Attach file>;
            <PaperclipIcon className=h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}


            onChange={(e) => setNewMessage(e.target.value)}

            onKeyDown={handleKeyDown}

            className={!newMessage.trim() ? opacity-50" : "}
            aria-label=Send message"
          >
            <Send className='h-5 w-5' />



<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Button>
        </div>
      </div>
    </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD:src_backup/mobile/components/messaging/MobileChatView.tsx
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  )

<<<<<<< HEAD
=======
}
}
;
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className='sticky bottom - 0 bg - background border - t border - border p - 2'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='ghost' size='icon' aria - label='Attach file'>;
            <PaperclipIcon className='h - 5 w - 5' />;
          </Button>;
          <Input;
            value={new_message}
            on_change={e => setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...';
            className='flex - 1'          />;
          <Button;
            size='icon';
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? 'opacity - 50' : ''}
            aria - label='Send message'          >;
            <Send className='h - 5 w - 5' />;
          </Button>;
        </div>;
      </div>;
    </div>);
}

}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/messaging/MobileChatView.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
