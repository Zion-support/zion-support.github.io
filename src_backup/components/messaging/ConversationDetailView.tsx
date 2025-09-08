


;
                    src = {activeConversation && activeConversation.context_data.image_url}
                    alt = {activeConversation && activeConversation.context_data.title || "Context"}const { user } = useAuth()const {activeConversation;
    activeMessages;
    sendMessage;
import React, { useState, useEffect, useRef } from 'react';
import { format   } from 'date-fns';
import { MessageSquare  } from 'lucide-react';
import { useMessaging   } from '@/context/MessagingContext';
import { Button   } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage   } from '@/components/ui/avatar';
import { AspectRatio   } from '@/components/ui/aspect-ratio';
import { useAuth   } from '@/hooks/useAuth';
import { MessageBubble   } from './MessageBubble';
import { DateDivider  } from './DateDivider';
export function ConversationDetailView() {const { user } = useAuth()const {activeConversation;
    activeMessages;
    sendMessage;loadMessages;
  } = useMessaging()const [messageText, setMessageText] = useState('')const messagesEndRef = null;
  return (<div className="flex-1 flex flex-col h-full">;
      {/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">;
        <div className="flex items-center gap-3">;
          <Avatar className="h-10 w-10 border border-zion-purple/20">;
            />;
            <AvatarFallback className="bg-zion-blue-dark text-white">;
              {activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>;
          </Avatar>;
          <div>;
            <div className="font-medium text-white">;
              {activeConversation.other_user.name}
            </div>;
            <div className="text-xs text-zion-slate">;
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Context information (if available) */}
      {hasContextData && (<div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">;
          <div className="text-sm text-zion-slate flex items-start gap-3">;
            {activeConversation.context_data && activeConversation.context_data.image_url && (<div className="w-16 h-16 flex-shrink-0">;
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">;
                  <img;
                    alt = {activeConversation.context_data.title || "Context"}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover";
                    loading="lazy";
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;
              <div className="font-medium text-white mb-1">;
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :;
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :;
                 'Regarding:'}
              </div>;
              <div className="text-zion-cyan font-medium">;
                {activeConversation.context_data && activeConversation.context_data.title}
              </div>;
              {activeConversation.context_data && activeConversation.context_data.description && (<div className="text-xs text-zion-slate mt-1 line-clamp-2">;
                  {activeConversation.context_data.description}
                </div>;
              )}
            </div>;
          </div>;
        </div>;
      )}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {groupedMessages.length === 0 ? (<div className="text-center text-zion-slate py-12">;
            <p>No messages yet. Start the conversation!</p>;
          </div>;
        ) : (groupedMessages.map((group, groupIndex,) => (<div key={group.date}>;
              <DateDivider date={new Date(group.date)} />;
              <div className="space-y-3">;
        )}
        <div ref={messagesEndRef} />;
      </div>;
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea;
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            ref={inputRef}
          />;
          <Button;
import { format  } from 'date-fns';


                    src = {activeConversation && activeConversation.context_data.image_url,}
                    alt = {activeConversation && activeConversation.context_data.title || "Context",}
                    src = {activeConversation && activeConversation.context_data.image_url}
                    alt = {activeConversation && activeConversation.context_data.title || "Context}

  const { user } = useAuth()
  const {
    activeConversation
    activeMessages
    sendMessage



export function ConversationDetailView() {const { user } = useAuth()const { currentConversation, sendMessage, messages, loading } = useMessaging()const [newMessage, setNewMessage] = useState('')const [isSending, setIsSending] = useState(false)const messagesEndRef  = useRef<HTMLDivElement>(null)const scrollToBottom = () => {messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}useEffect(() => {scrollToBottom()}, [messages])const handleSendMessage = async (e: React.FormEvent) => {e.preventDefault()if (!newMessage.trim() || !currentConversation) return;setIsSending(true)try {await sendMessage({content: newMessage,recipientId: currentConversation.participantId,conversationId: currentConversation.id})setNewMessage('')} catch (error) {console.error('Failed to send message:', error)} finally {setIsSending(false)}
  }if (!currentConversation) {return (<div className="flex items-center justify-center h-full">;
        <div className="text-center">;
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />;
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>;
          <p className="mt-1 text-sm text-gray-500">;
export function ConversationDetailView() {const { user } = useAuth()const { currentConversation, sendMessage, messages, loading } = useMessaging()const [newMessage, setNewMessage] = useState(')const [isSending, setIsSending] = useState(false)const messagesEndRef  = useRef<HTMLDivElement>(null)const scrollToBottom = () => {messagesEndRef.current?.scrollIntoView({ behavior: smooth' })}useEffect(() => {scrollToBottom()}, [messages])const handleSendMessage = async (e: React.FormEvent) => {e.preventDefault()if (!newMessage.trim() || !currentConversation) return;setIsSending(true)try {await sendMessage({content: newMessage,recipientId: currentConversation.participantId,conversationId: currentConversation.id})setNewMessage(')} catch (error) {console.error(Failed to send message:', error)} finally {setIsSending(false)}
  }if (!currentConversation) {return (<div className=flex items-center justify-center h-full">;
        <div className="text-center>;
          <MessageSquare className=mx-auto h-12 w-12 text-gray-400" />;
          <h3 className="mt-2 text-sm font-medium text-gray-900>No conversation selected</h3>;
          <p className=mt-1 text-sm text-gray-500">;
            Choose a conversation from the list to start messaging.;
          </p>;
        </div>;
      </div>;
    )}return (<div className="flex flex-col h-full">;
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-200">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={currentConversation.participant.avatar} />;
          <AvatarFallback>{currentConversation.participant.name.charAt(0)}
          </AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <h3 className="font-semibold text-gray-900">;
            {currentConversation.participant.name}
          </h3>;
          <p className="text-sm text-gray-500">;
            {currentConversation.participant.isOnline ? 'Online' : 'Offline'}
          </p>;
        </div>;
      </div>;
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {loading ? (<div className="flex items-center justify-center h-full">;
            <div className="text-center">;
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>;
              <p className="mt-2 text-sm text-gray-500">Loading messages...</p>;
            </div>;
          </div>;
        ) : messages.length === 0 ? (<div className="flex items-center justify-center h-full">;
            <div className="text-center">;
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />;
              <h3 className="mt-2 text-sm font-medium text-gray-900">No messages yet</h3>;
              <p className="mt-1 text-sm text-gray-500">;
                Start the conversation by sending a message.;
              </p>;
            </div>;
          </div>;
        ) : (messages.map((message, index) => {const isUserMessage = message.senderId === user?.id;
            const prevMessage = messages[index - 1];
            const showDateDivider = !prevMessage ||;
              format(new Date(message.timestamp), 'yyyy-MM-dd') !==;
              format(new Date(prevMessage.timestamp), 'yyyy-MM-dd')return (<div key={message.id}>;
                {showDateDivider && (<DateDivider date={message.timestamp} />;
                )}
                <MessageBubble;
                  message={message}
                  isUserMessage={isUserMessage}
                />;
              </div>;
            )}))}
        <div ref={messagesEndRef} />;
      </div>;
      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">;
        <form onSubmit={handleSendMessage} className="flex space-x-2">;
          <input;
            type="text";
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message...";
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
            disabled={isSending}
          />
          <Button

            type="submit"
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
:src/components/messaging/ConversationDetailView.tsx
            <AvatarImage
              src = {activeConversation.other_user.avatar_url,}
              alt = {activeConversation.other_user.name,}


:src/components/messaging/ConversationDetailView.tsx
            <div className="text-xs text-zion-slate">
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>


:src/components/messaging/ConversationDetailView.tsx
                    src = {activeConversation.context_data.image_url,}
                    alt = {activeConversation.context_data.title |"Context",}

              <div className="space-y-3">
              <div className=space-y-3">
:src/components/messaging/ConversationDetailView.tsx
                {group.messages.map((message,) => (
                  <MessageBubble
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>


:src/components/messaging/ConversationDetailView.tsx
            value = {messageText,}
            onChange = {(e,) => setMessageText(e.target.value),}
            onKeyDown = {handleKeyDown,}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref = {inputRef,}
          />
          <Button


:src/components/messaging/ConversationDetailView.tsx
      </div>;
    </div>;
  );
};


            type="submit";
            disabled={!newMessage.trim() || isSending}
          >;
            {isSending ? 'Sending...' : 'Send'}
            type="submit;
            disabled={!newMessage.trim() || isSending}
          >;
            {isSending ? 'Sending...' : 'Send'}
            {isSending ? 'Sending... : Send'}
          </Button>
        </form>
      </div>
    </div>
  );


:src/components/messaging/ConversationDetailView.tsx
    </div>;
  );
}
;


}'"
}"
          </Button>;
        </form>;
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea;
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            ref={inputRef}
          />;
          <Button;
            type="submit";
            className="bg-zion-purple hover: bg-zion-purple-dark text-white";
          >;Send;
          </Button>;
        </form>;
      </div>;
}</div>;
    </div>;
  )})<AvatarImage src= {activeConversation.other user.avatar url ;
}alt= {activeConversation.other user.name ;
}/> activeConversation.other user.user type === 'employer' ? 'Employer' : activeConversation.other user.user type === 'admin' ? 'Admin' : 'User' ;
}</div> </div> </div> </div> {activeConversation.context data && activeConversation.context data.image url && (<div className="w-16 h-16 flex-shrink-0" > <AspectRatio ratio= {1/1 ";
}className="rounded bg-zion-blue-dark/30 overflow-hidden" > <img /> </AspectRatio> </div>)}<div> {activeConversation.context data.description ;
}</div>)}</div> </div> </div>)}<p>No messages yet. Start the conversation!</p> </div>) : (groupedMessages.map ( (group, groupIndex) => (<div key= {group.date ;
}> <MessageBubble key= {message.id ;
}message= {message ;
}isUserMessage= {message.sender id === user?.id ;
}/>) )}</div> </div>) ) )}<div ref= {messagesEndRef ;
}/> </div> /> <Button > Send </Button> </form> </div> </div>)}'";

