import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react;
import { Button } from "@/components/ui/button;
origin/cursor/automate-test-improve-and-merge-code-2533
import { Send } from lucide-react'
interface ChatInputProps {
  onSend: (message: string) => void
disabled?: boolean
}export function ChatInput ({
  onSend, disabled = false
}: ChatInputProps) {'
  const [message, setMessage] = useState ()
const inputRef = useRef<HTMLTextAreaElement> (null)
//Focus input when component mounts
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [ message, setMessage ] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {    // Focus input when component mounts
    inputRef.current?.focus() }, [])
    inputRef.current?.focus()
interface ChatInputProps {
import React, {;
  useState,;
  useRef,;
  useEffect,;
  FormEvent,;
  KeyboardEvent,;
} from 'react';
import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent} from react;
import { Button } from '@/components/ui/button';
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from react,
import { Button } from @/components/ui/button",


  onSend: (message: string) => void,
  disabled?: boolean
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react',
import { Button } from "@/components/ui/button,
import { Send } from lucide-react;


import { Send } from lucide-react
interface ChatInputProps {

  onSend: (message: string) => void,
  disabled?: boolean

interface ChatInputProps {;
origin/cursor/automate-test-improve-and-merge-code-2533

  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput(): any ({
  onSend, disabled = false ;
}: ChatInputProps) {';
  const [message, setMessage] = useState (');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {

  const [ message, setMessage ] = useState('),
  const inputRef = useRef<HTMLTextAreaElement>(null),

  useEffect(() => {    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();  }, []);
    inputRef && inputRef.current?.focus();



interface ChatInputProps {
  onSend: (message: string) => void,
  disabled?: boolean;
}



export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState(');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input when component mounts;
    inputRef && inputRef.current?.focus();

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from react';
import { Button } from @/components/ui/button";
import { Send } from 'lucide-react

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean}

export function ChatInput({ onSend, disabled;
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {
    if (e.key === Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim() && !disabled) {
        onSend(message);
setMessage(');
origin/cursor/automate-test-improve-and-merge-code-2533
export function ChatInput({ onSend, disabled = false }: ChatInputProps) {


  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus()
  }, [])}, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();    if (message && message.trim() && !disabled) {
      onSend(message);

    }
  }}
    }
  };
  }

return (
origin/cursor/automate-test-improve-and-merge-code-2533

  },

  return (

    <form on_submit={handle_submit} className='flex items - end gap - 2>;
import { Button  } from '@/components/ui/button;
import { Send  } from lucide-react';
interface ChatInputProps  {onSend: (message: string) => void;
disabled?: boolean;
}export function ChatInput ({onSend, disabled = false;
}: ChatInputProps) {';
  const [message, setMessage] = useState ()const inputRef = useRef<HTMLTextAreaElement> (null)//Focus input when component mounts;
export function ChatInput() {const [ message, setMessage ] = useState('')const inputRef = useRef<HTMLTextAreaElement>(null)useEffect(() => {    // Focus input when component mounts;
    inputRef.current?.focus() }, [])inputRef.current?.focus()interface ChatInputProps  {onSend: (message: string) => void,disabled?: boolean;
import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from react,import { Button } from "@/components/ui/button,import React, {useState,useRef,useEffect,FormEvent,KeyboardEvent} from 'react';
interface ChatInputProps  {onSend: (message: string) => void,disabled?: boolean;
interface ChatInputProps  {onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput(): any ({onSend, disabled = false ;
}: ChatInputProps) {;
  const [message, setMessage] = useState (')const inputRef = useRef<HTMLTextAreaElement> (null)//Focus input when component mounts ;
export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {const [ message, setMessage ] = useState('),const inputRef  = useRef<HTMLTextAreaElement>(null),useEffect(() => {    // Focus input when component mounts;
    inputRef && inputRef.current?.focus()}, [])inputRef && inputRef.current?.focus()interface ChatInputProps  {onSend: (message: string) => void,disabled?: boolean;
}export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {const [message, setMessage] = useState(')const inputRef  = useRef<HTMLTextAreaElement>(null)useEffect(() => {// Focus input when component mounts;
    inputRef && inputRef.current?.focus()interface ChatInputProps  {onSend: (message: string) => void,disabled?: boolean;
}export function ChatInput() {const [ message, setMessage ] = useState('),const inputRef = useRef<HTMLTextAreaElement>(null),useEffect(() => {// Focus input when component mounts;
    inputRef.current?.focus()}, [])const handleSubmit = (e: FormEvent<HTMLFormElement>) => {e && e.preventDefault()if (message && message.trim() && !disabled) {onSend(message)}export function ChatInput({ onSend, disabled;
    }
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>,) => {if (e.key === Enter' && !e.shiftKey) {e.preventDefault()if (message.trim() && !disabled) {onSend(message)setMessage(')}
    }
  }return (return (<form on_submit={handle_submit} className=flex items - end gap - 2'>;
      <textarea;
        ref={input_ref}
        className='flex - 1 min - h-[40px] max - h-[120px] px - 3 py - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent resize - none text - black placeholder:text - zion - slate - light';
        placeholder='Type your message...';
        value={message}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;

        disabled={!message.trim() |disabled}


        on_change={e => set_message (e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
      <Button;
        type='submit;
        className=bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}


  return (
    <form onSubmit={handleSubmit} className=flex items-end gap-2">
      <textarea
        ref={inputRef}
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus: outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light,
        placeholder=Type your message...",
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onChange={e => setMessage(e.target.value)}
origin/cursor/automate-test-improve-and-merge-code-2533

        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

      >
        <Send className="h-5 w-5 />



        className=flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light"
        placeholder="Type your message...
        value={message}
        onChange={(e) => setMessage(e.target.value)}

        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />

      <Button 
        type=submit" 
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center,
        disabled={!message.trim() || disabled}

      </Button>
    </form>
  )
}

        disabled={!message.trim() || disabled}

      >
        <Send className=h-5 w-5" />
      </Button>
    </form>
  )
}


        value={message}on_change={e => set_message (e.target.value)}        onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;

      <Button;
        type='submit;
        className=bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center'        on_change={(e) => set_message (e.target.value)}onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;disabled={!message.trim() |disabled}return (<form onSubmit={handleSubmit} className="flex items-end gap-2>;
      <textarea;
        ref={inputRef}
        className=flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light";
        placeholder="Type your message...;
        value={message}
        onChange={(e) => setMessage(e.target.value)}onChange={e => setMessage(e.target.value)}onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
        className=flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-black placeholder:text-zion-slate-light";
        placeholder="Type your message...;
        value={message}
        onChange={(e) => setMessage(e.target.value)}onKeyDown={handleKeyPress}
        rows={1}
        disabled={disabled}
      />;
      <Button;
        type=submit";
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center;
        disabled={!message.trim() || disabled}>;
        <Send className=h-5 w-5" />;
      </Button>;
    </form>;
  )}disabled={!message.trim() || disabled}>;
        <Send className="h-5 w-5 />;
      </Button>;
    </form>;
  )}<Button;
        type='submit;
        className=bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center';
        disabled={!message.trim () || disabled}      >;
        <Send className='h - 5 w - 5 />;
      </Button>;
    </form>)}
        disabled={!message.trim () || disabled}
      >;
        <Send className=h - 5 w - 5" />;
      </Button>;
    </form>);
}

<Button
        type=submit'
        className='bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center
        disabled={!message.trim() |disabled}      >
        <Send className=h-5 w-5' />
      </Button>
    </form>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
    </form>)}<Button;
        type='submit;
        className=bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center';
        disabled={!message.trim() |disabled}      >;
        <Send className='h-5 w-5' />;
      </Button>;
    </form>;
  )
