/* eslint-disable */
 'I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.';'';''''
'Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.';';''''
'I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.';'';''''
'I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.';';''
'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.' ];
}) ;'
});''
//If Supabase function fails, try local API fallback if (!res.ok) {';''
  res = await fetch ('/api/kb-chat',  {';''
  method: 'POST', headers: {';''
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  messages: [...messages.map (m => ({;'
  role: m.role, content: m.message ;''
}) ), {';''
  role: 'user', content: text ;
}] ;'
}) ;''
}else if (res.body) {';''
  const botId = Date.now () .toString () + '-a';''
setMessages (prev => [...prev, {';''
  id: botId,  role: 'assistant', message: '' ;
}]);
const reader = res.body.getReader ();'
const decoder = new TextDecoder ();''
let done = false;';''
let buffer = '';';''
let accumulated = '';
while (!done) {;
  const result = await reader.read ();'
done = result.done;''
buffer += decoder.decode (result.value || new Uint8Array () );';''
const lines = buffer.split ('\n');
for (let i = 0, i < lines.length - 1,  i++) {;'
  let line = lines[i]?.trim ();''
if (!line) continue;';''
if (line.startsWith ('data:') ) {';''
  line = line.replace (/^data:\s*/, '');';''
if (line === '[DONE]') {;
  done = true;
break ;'
}try {;''
  const json = JSON.parse (line);';''
const token = json.choices?.[0]?.delta?.content || json.choices?.[0]?.text || '';
if (token) {;
  accumulated += token;
setMessages (prev => prev.map (m => m.id === botId ? {;
  ...m, message: accumulated ;
}: m) ) ;
}
}catch () {;
  //ignore parse errors ;'
}''
}';''
}buffer = lines[lines.length - 1] || '' ;
}'
}''
}catch (err) {';''
  logErrorToProduction ('Chatbot error:', {;
  data: err ;'
});''
//Provide a helpful fallback response instead of generic error const errorMsg: Msg = {';''
  id: Date.now () .toString () + '-e';';''
role: 'assistant';
message: fallbackResponse ;
};
setMessages (prev => [...prev, errorMsg]) ;
}finally {;
  setLoading (false);
setTyping (false) ;
}
};'
return (<Button onClick={;'''
  () => setOpen (true) ';''''
}> <MessageSquare className='h-5 w-5' /> </Button>) '';''''
}> <X className='h-5 w-5' /> </Button> </div> <ChatMessage role='assistant' message='Hi! I'm here to help you with questions about Zion. What can I assist you with today?' />) ;
}{;
  messages.map (m => (<ChatMessage key= {;
  m.id ;
}role= {;
  m.role ;
}message= {;
  m.message ;
}/>) ) ;
}) ;
}<div ref= {;
  endRef ;''
}/> </div> </div> </div>) ;''''
}''''''