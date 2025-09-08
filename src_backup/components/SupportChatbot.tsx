


;
}
    set_messages (prev => [...prev, user_msg])set_loading (true)set_typing (true)try {// Try the Supabase AI chat function first with streaming;
      let res = await fetch () {const [open, setOpen] = useState(false)const [messages, setMessages] = useState<Msg[]>([])const [loading, setLoading] = useState(false)const [typing, setTyping] = useState(false)const endRef = useRef<HTMLDivElement | null>(null)useEffect(() => {endRef.current?.scrollIntoView({ behavior: 'smooth' })}, [messages])const sendMessage = async (text: string) => {const userMsg: Msg = {id: Date.now().toString()role: 'user';
      message: text;
    }
    setMessages(prev => [...prev, userMsg])setLoading(true)setTyping(true)try {// Try the Supabase AI chat function first with streaming;
      let res = await fetch('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat';
        {method: 'POST';
          headers: {'Content-Type': 'application/json';
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
            Accept: 'text/event-stream';
          }
          body: JSON.stringify({stream: true;
            messages: [;
              ...messages.map(m => ({ role: m.role, content: m.message })){ role: 'user', content: text }
            ];
          })}
      )'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.';
],export function SupportChatbot() {const [open, setOpen] = useState(false),const [messages, setMessages] = useState<Msg[]>([]),const [loading, setLoading] = useState(false),const [typing, setTyping] = useState(false),const endRef = useRef<HTMLDivElement | null>(null),useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages]),const sendMessage = async (text: string) => {const userMsg: Msg = { id: Date.now().toString(), role: 'user', message: text },setMessages(prev => [...prev, userMsg]),setLoading(true),setTyping(true),try {// Try the Supabase AI chat function first with streaming;
      let res = await fetch('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat', {method: 'POST',headers: {'Content-Type': 'application/jsonAuthorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,Accept: 'text/event-stream';
        },body: JSON.stringify({stream: true,messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }];
        })}),// If Supabase function fails, try local API fallback;
      if () {res = await fetch('/api/kb-chat', {method: 'POST';
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({const message = null;
          data.message ||;
          data.choices?.[0]?.message?.content ||;
          data.choices?.[0]?.text ||;
          data.completion ||;
          '';
        const finalMsg = null;
          message.trim() ||;
          FALLBACK_RESPONSES[;
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)] |;
          'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.';
        setMessages(prev => [;
          ...prev;
          {id: Date.now().toString() + '-a';
            role: 'assistant';
            message: finalMsg;
          }
        ]) } else if (res.body) {const botId = Date.now().toString() + '-a';
        setMessages(prev => [;
          ...prev;


interface Msg {;
interface Msg {
  id: string;
        ])const reader = res.body.getReader()const decoder = new TextDecoder()let done = false;
        let buffer = '';
        let accumulated = '';
        while (!done) {const result = await reader.read()done = result.done;
          buffer += decoder.decode(result.value || new Uint8Array())const lines  = buffer.split('\n')for (let i = 0; i < lines.length - 1; i++) {let line = lines[i]?.trim()if (!line) continue;
            if (line.startsWith('data:')) {line = line.replace(/^data:\s*/, '')if (line === '[DONE]') {done = true;
                break;
              }
              try {const json = JSON.parse(line)const token = null;
                  json.choices?.[0]?.delta?.content ||;
                  json.choices?.[0]?.text ||;
                  '';
                if (token) {accumulated += token;
                  setMessages(prev =>;
                    prev.map(m =>;
                      m.id === botId ? { ...m, message: accumulated } : m;
                    ))interface Msg  {id: string;
  role: 'user' | 'assistant';


                      m.id === bot_id ? { ...m, message: accumulated } : m))accumulated += token,setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: accumulated } : m))}
              } catch (_) {// ignore parse errors;
              }
            }
          }
          buffer = lines[lines.length - 1] |'';
        }// ignore parse errors;
              }
            }
          }const final = null;
          accumulated.trim() ||;
          FALLBACK_RESPONSES[;
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)] |;
          'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.';
        setMessages(prev =>;
          prev.map(m => (m.id === botId ? { ...m, message: final } : m)))}
    } catch (err) {logErrorToProduction('Chatbot error:', { data: err })// Provide a helpful fallback response instead of generic error;
      const fallbackResponse =;
        FALLBACK_RESPONSES[;
          Math.floor(Math.random() * FALLBACK_RESPONSES.length)] |;
        'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.';
      const errorMsg: Msg = {id: Date.now().toString() + '-e';
        role: 'assistant';
        message: fallbackResponse;


            Math.floor (Math.random () * FALLBACK_RESPONSES.length)] ||;
          'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.';
            Math.floor (Math.random () * FALLBACK_RESPONSES.length)] ||;
          Im experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";


          prev.map (m => (m.id === bot_id ? { ...m, message: final } : m)))}
      setMessages(prev => [...prev, errorMsg])} finally {setLoading(false)setTyping(false)}
  if (!open) {onClick={() => setOpen(true)}
        size='icon';
        variant='outline';
        className='fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40';
        aria-label='Open help chat'      >;
        <MessageSquare className='h-5 w-5' />;
        const final = accumulated.trim() ||;
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || 'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.'),setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: final } : m))}
    } catch (err) {logErrorToProduction ('Chatbot error:', { data: err })// Provide a helpful fallback response instead of generic error;
      const fallback_response =;
        FALLBACK_RESPONSES[;
          Math.floor (Math.random () * FALLBACK_RESPONSES.length)] ||;
        'I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.';
      const error_msg: Msg = {id: Date.now ().to_string () + '-e',role: 'assistant',message: fallback_response}
      set_messages (prev => [...prev, error_msg])} finally {buffer = lines[lines && lines.length - 1] || '';
        }
        const final =;
          accumulated && accumulated.trim() ||;
          FALLBACK_RESPONSES[;
            Math && Math.floor(Math && Math.random() * FALLBACK_RESPONSES && FALLBACK_RESPONSES.length)] ||;
          'I'm experiencing technical difficulties. Please contact support@ziontechgroup && ziontechgroup.com for assistance.';
        setMessages(prev =>;
          prev && prev.map(m => (m && m.id === botId ? { ...m, message: final } : m));
        );

    }
      logErrorToProduction('Chatbot error:', { data: err }),


    <div className='fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40'>
      <div className='bg-zion-blue-dark p-2 flex justify-between items-center'>
        <span className='text-white font-medium'>Help Bot</span>
    <div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40>
      <div className=bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium>Help Bot</span>
        <Button

          variant='ghost'
          size='icon'
          className='text-white'
          onClick={() => setOpen(false)}
          aria-label='Close help bot'
        >
          <X className='h-5 w-5' />



  };
  if (!open) {;
          prev && prev.map(m => (m && m.id === botId ? { ...m, message: final } : m)))}
  },if (!open) {return (<Button;
        onClick={() => setOpen(true)}size='icon';
  }
  if (!open) {
          prev && prev.map(m => (m && m.id === botId ? { ...m, message: final } : m)))}
  },if (!open) {return (<Button;
        onClick={() => setOpen(true)}size=icon";


        {messages && messages.length === 0 && (<ChatMessage;
            role='assistant';
            message='Hi! I'm here to help you with questions about Zion. What can I assist you with today?';
          />;)}
        {messages && messages.map(m => (<ChatMessage key={m && m.id} role={m && m.role} message={m && m.message} />;
        ))}{typing && (<ChatMessage role='assistant' message='...' />;
        )}<div ref={endRef} />;
      </div>;
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>;
        <ChatInput onSend={sendMessage} disabled={loading} />;
      </div>;
    </div>;
  )<div ref={endRef} />;
      </div>;
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>;
        <ChatInput onSend={sendMessage} disabled={loading} />;
      </div>;
    </div>;
  )}catch () {//ignore parse errors ;}';
}buffer = lines[lines && lines.length - 1] || '' ;}catch (err) {';
  logErrorToProduction ('Chatbot error:', {data: err ;
})//Provide a helpful fallback response instead of generic error const errorMsg: Msg = {';
  id: Date && Date.now () .toString () + '-e';';
role: 'assistant';
message: fallbackResponse ;
}setMessages (prev => [...prev, errorMsg])}finally {setLoading (false)setTyping (false)}() => setOpen (true) ';
}> <MessageSquare className='h-5 w-5' /> </Button>) '';
}> <X className='h-5 w-5' /> </Button> </div> <ChatMessage role='assistant' message='Hi! I'm here to help you with questions about Zion. What can I assist you with today?' />)}{messages && messages.map (m => (<ChatMessagekey= {m && m.id;
}role= {m && m.role;
}message= {m && m.message;
}/>) )})}<divref= {endRef;
}/> </div> </div> </div>)}'';}
}set_loading (false)set_typing (false)}
  }
  // Check condition;
if ( {) {$2;
}
        on_click={() => set_open (true)}
        size='icon';
        variant='outline';
        className='fixed bottom - 4 right - 20 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 40';
        aria - label='Open help chat'      >;
        <MessageSquare className='h - 5 w - 5' />;
      </Button>)}
  return (<div className='fixed bottom - 4 right - 20 bg - zion - blue w - 80 max - w-full rounded - lg shadow - xl flex flex - col z - 40'>;
      <div className='bg - zion - blue - dark p - 2 flex justify - between items - center'>;
        <span className='text - white font - medium'>Help Bot</span>;
        <Button;
          variant='ghost';
          size='icon';
          className='text - white';
          on_click={() => set_open (false)}
          aria - label='Close help bot'        >;
          <X className='h - 5 w - 5' />;
        </Button>;
      </div>;
      <div;
        className='flex - 1 overflow - y-auto p - 3 space - y-4';
        style={ max_height: '400px' }
      >;
        {messages.length === 0 && (<ChatMessage;
            role='assistant';
            message='Hi! I'm here to help you with questions about Zion. What can I assist you with today?';
          />)}
        {messages.map (m => (<ChatMessage key={m.id} role={m.role} message={m.message} />))}
        {typing && <ChatMessage role='assistant' message='...' />}
        <div ref={end_ref} />;
      </div>;
      <div className='p - 2 border - t border - zion - purple / 20 bg - zion - blue - dark / 30'>;
        <ChatInput on_send={send_message} disabled={loading} />;
      </div>;
    </div>)}catch () {//ignore parse errors;
}';
}buffer = lines[lines.length - 1] || '';
}catch (err) {';
  logErrorToProduction ('Chatbot error:', {data: err;
})//Provide a helpful fallback response instead of generic error const error_msg: Msg = {';
  id: Date.now () .to_string () + '-e';';
role: 'assistant';
message: fallback_response;
}
set_messages (prev => [...prev, error_msg])}finally {set_loading (false)set_typing (false)}
  () => set_open (true) ';
}> <MessageSquare className='h - 5 w - 5' /> </Button>) '';
}> <X className='h - 5 w - 5' /> </Button> </div> <ChatMessage role='assistant' message='Hi! I'm here to help you with questions about Zion. What can I assist you with today?' />);
