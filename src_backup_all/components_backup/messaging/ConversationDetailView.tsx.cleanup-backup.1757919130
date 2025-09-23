
import React, { useState, useEffect, useRef } from 'react',
import { format } from 'date-fns',
import { MessageSquare } from 'lucide-react'
import { useMessaging } from '@/context/MessagingContext',
import { Button } from '@/components/ui/button',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import { AspectRatio } from '@/components/ui/aspect-ratio',
import { useAuth } from '@/hooks/useAuth',
import { MessageBubble } from './MessageBubble',
import { DateDivider } from './DateDivider',

export function ConversationDetailView() {
  const { user } = useAuth(),
  const { 
    activeConversation,
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging(),
  const [messageText, setMessageText] = useState(''),
  const messagesEndRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLTextAreaElement | null>(null),
  
  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id),
    }
    inputRef.current?.focus(),
  }, [activeConversation?.id, loadMessages]),
  
  useEffect(() => {
    scrollToBottom(),
  }, [activeMessages]),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }),
  },
  
  const send = async () => {
    if (!messageText.trim() || !activeConversation) return,

    await sendMessage(activeConversation.id, messageText),
    setMessageText(''),
    inputRef.current?.focus(),
  },

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(),
    await send()
  },

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      send()
    }
  },
  
  if (!activeConversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>
          <p className="mt-1 text-sm text-gray-500">
            Choose a conversation from the list to start messaging.
          </p>
        </div>
      </div>
    ),
  }
  
  // Group messages by date
  const groupedMessages: { date: string, messages: any[] }[] = [],
  
  activeMessages.forEach(message => {
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd'),
    const existingGroup = groupedMessages.find(group => group.date === messageDate),
    
    if (existingGroup) {
      existingGroup.messages.push(message),
    } else {
      groupedMessages.push({
        date: messageDate,
        messages: [message]
      }),
    }
  }),
  
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentConversation.participant.avatar} />
          <AvatarFallback>
            {currentConversation.participant.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {currentConversation.participant.name}
          </h3>
          <p className="text-sm text-gray-500">
            {currentConversation.participant.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      
      {/* Context information (if available) */}
      {hasContextData && (
        <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
            {activeConversation.context_data && activeConversation.context_data.image_url && (
              <div className="w-16 h-16 flex-shrink-0">
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                  <img
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            )}
            <div>
              <div className="font-medium text-white mb-1">
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className="text-zion-cyan font-medium">
                {activeConversation.context_data && activeConversation.context_data.title}
              </div>
              {activeConversation.context_data && activeConversation.context_data.description && (
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">
                  {activeConversation.context_data.description}
                </div>
              )}
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No messages yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start the conversation by sending a message.
              </p>
            </div>
          </div>
        ) : (

          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message,) => (
                  <MessageBubble
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;



      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                ))}
              </div>;
            </div>;
          ));





            return (
              <div key={message.id}>
                {showDateDivider && (
                  <DateDivider date={message.timestamp} />
                )}
                <MessageBubble
                  message={message}
                  isUserMessage={isUserMessage}
                />
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>



        <div ref={messagesEndRef} />;
      </div>;


      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
          />
          <Button
            type="submit"
            className="bg-zion-purple hover: bg-zion-purple-dark text-white"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
