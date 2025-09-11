import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const QUICK_REPLIES = [
  { id: 'hire', text: 'How do I hire?' },
  { id: 'match', text: 'How do I get matched?' },
  { id: 'billing', text: 'Billing help' },
];

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: 'Hi! How can I help you?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text || !text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content:
          data.message ||
          "Sorry, I couldn't process your request. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in AI chat:', error);
      toast({
        title: 'Communication Error',
        description: "We're having trouble connecting to our support service.",
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  return (
    <div className='flex flex-col h-full bg-zion-blue-dark border border-zion-blue-light rounded-lg'>
      <ScrollArea className='flex-1 p-4' ref={scrollAreaRef}>
        <div className='space-y-4'>
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-blue-light text-white'
                }`}
              >
                <p className='text-sm'>{message.content}</p>
                <p className='text-xs opacity-70 mt-1'>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className='flex justify-start'>
              <div className='bg-zion-blue-light text-white rounded-lg p-3'>
                <Loader2 className='h-4 w-4 animate-spin' />
              </div>
            </div>
          )}

          {messages.length === 1 && (
            <div className='px-4 py-3'>
              <p className='text-zion-slate-light text-sm mb-3'>
                Quick replies:
              </p>
              <div className='flex flex-wrap gap-2'>
                {QUICK_REPLIES.map(reply => (
                  <Button
                    key={reply.id}
                    variant='outline'
                    size='sm'
                    onClick={() => handleQuickReply(reply.text)}
                    className='text-zion-slate-light border-zion-blue-light hover:bg-zion-blue-light'
                  >
                    {reply.text}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className='border-t border-zion-blue-light p-4'>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus-visible:ring-zion-purple'
            disabled={isLoading}
          />
          <Button
            type='submit'
            size='icon'
            disabled={isLoading || !inputValue.trim()}
            className='bg-zion-cyan hover:bg-zion-cyan/80 text-white'
          >
            <Send className='h-4 w-4' />
          </Button>
        </form>
      </div>
    </div>
  );
}
