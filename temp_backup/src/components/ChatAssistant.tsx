import React, { useState } from 'react';
import { MessageCircle, X, Send  } from 'lucide-react';

const ChatAssistant: React.FC = () => {const [isOpen, setIsOpen] =;
  useState(false);
  const [message, setMessage] = useState('';
  const [messages, setMessages] = useState([;}
    {id: 1,text: "Hello! I'm your AI assistant. How can I help you today?",isBot: true,timestamp: new Date(}
}
  ])const handleSendMessage = (e.preventDefault()if (!message.trim());
  return;

const newMessage = {id: messages.length + 1,text: message,isBot: false,timestamp: new Date(,) => {
  return $3;}
}
}setMessages([...messages, newMessage])setMessage('')// Simulate bot response;"
    setTimeout(() => {const botResponse = {id: messages.length + 2,text: "Thank you for your message! Our team will get back to you soon. In the meantime, feel free to explore our services or contact us directly.",isBot: true,timestamp: new Date(}
}setMessages(prev => [...prev, botResponse])}, 1000);
  return (<>;
      {/* Chat Button */}
      <button;
        onClick={() = /> setIsOpen(!isOpen)}"
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center justify-center";"
        aria-label="Open chat assistant">
"
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>;
      {/* Chat Window */}"
      {isOpen && (<div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col" />;}
          {/* Header */}"
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between" />;
            <div />;"
              <h3 className="font-semibold" />AI Assistant</h3>;"
              <p className="text-sm opacity-90" />We're here to help!</p>;
            </div>;
            <button;
              onClick={() = /> setIsOpen(false)}"
              className="text-white hover:text-gray-200">
"
              <X className="w-5 h-5" />;
            </button>;
          </div>;
          {/* Messages */}"
          <div className="flex-1 p-4 overflow-y-auto space-y-4" />;
            {messages.map((msg) => (<div;}
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`} />

                <div;
                  className={`max-w-xs px-4 py-2 rounded-lg ${msg.isBot;
                      ? 'bg-gray-100 text-gray-800';}
                      : 'bg-blue-600 text-white';}
                  }`} />
"
                  <p className="text-sm" />{msg.text}</p>;"
                  <p className="text-xs opacity-70 mt-1" />;
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit'}
  minute: '2-digit';}
                    })}
                  </p>;
                </div>;
              </div>;
            ))}
          </div>;
          {/* Input */}"
          <form onSubmit={handleSendMessage} className="p-4 border-t" />;"
            <div className="flex space-x-2" />;
              <input;"
                type="text";
                value={message}
                onChange={(e) = /> setMessage(e.target.value)}"
                placeholder="Type your message...";"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm";
              />;
              <button;"
                type="submit";"
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors" />
"
                <Send className="w-4 h-4" />;
              </button>;
            </div>;
          </form>;
        </div>;
      )}
    </>;
  )}

export default ChatAssistant;"