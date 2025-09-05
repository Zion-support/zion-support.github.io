import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Paperclip, 
  Mic, 
  MicOff, 
  Sparkles, 
  Clock,
  Settings,';
  HelpCircle';';
} from 'lucide-react';
interface ChatMessage {
  id: string;';
  content: string;';';
  sender: 'user' | 'bot';';
  timestamp: Dat e;';';
  type: 'text';';';
import {;
  MessageCircle,;
  X,;
  Send,;
  Bot,;
  User,;
  Paperclip,;
  Mic,;
  MicOff,;
  Sparkles,;
  Clock,;
  Settings,;
  HelpCircle;
  Settings,
  HelpCircle
} from 'lucide-react';
;
interface ChatMessage {;
  "id": "string;
  "content": string;
  "sender": 'user' | 'bot';
  "timestamp": Dat e;
  "type": 'text';
  "status": 'sent';
  metadata?: {;
interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Dat e;
  type: 'text';
  status: 'sent';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedServices?: string[];
    estimatedResponseTime?: number;
  "};
}
;
interface AIChatbotSystemProps {;
  showHeader?: "boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean;
;
}
export const AIChatbotSystem: Reac t.FC<AIChatbotSystemProps> = ({
  showHeader = true,
  showSettings = true,
  maxMessages = 50,
  autoScroll = true
}) => {';
  const [messages, setMessages] = useState<ChatMessage[]>([]);';';
"}
;
export const "AIChatbotSystem": "React.FC<AIChatbotSystemProps> = ({;
  showHeader = true",;
  showSettings = true,;
  maxMessages = 50,;
  autoScroll = true;
}) => {;
interface AIChatbotSystemProps {
  showHeader?: boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean;
}
export const AIChatbotSystem: React.FC<AIChatbotSystemProps> = ({
  showHeader = true,
  showSettings = true,
  maxMessages = 50,
  autoScroll = true
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<any>('');
  const [isTyping, setIsTyping] = useState<any>(false);
  const [isOpen, setIsOpen] = useState<any>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {';
      const welcomeMessage: ChatMessag e = {';';
        id: 'welcome',';';
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",';';
        sender: 'bot',';
        timestamp: new Date(),';';
        type: 'text',';';
        status: 'sent',
        metadata: {';
          confidence: 0.95,';';
          suggestions: ['Tell me about your services', 'Get a quote', 'Technical support', 'Contact information'],';';
          relatedServices: ['AI Consulting', 'Cloud Solutions', 'Digital Transformation'],
          estimatedResponseTime: 2
;
  // Sample welcome message;
  useEffect(() => {;
    if (isOpen && messages.length === 0) {;
      const welcomeMessage: ChatMessag e = {;
        id: 'welcome',;
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",;
        sender: 'bot',;
        timestamp: new Date(),;
        type: 'text',;
        status: 'sent',;
        metadata: {;
          confidence: 0.95,;
          suggestions: ['Tell me about your services', 'Get a quote', 'Technical support', 'Contact information'],;
          relatedServices: ['AI Consulting', 'Cloud Solutions', 'Digital Transformation'],;
          estimatedResponseTime: 2;
      const "welcomeMessage": "ChatMessag e = {;
        "id": 'welcome'",;
        "content": "Hello! I'm Zion AI, your intelligent assistant. I can help you "with": "\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?"",;
        "sender": 'bot',;
        "timestamp": "new Date()",;
        "type": 'text',;
        "status": 'sent',;
        "metadata": "{;
          "confidence": 0.95",;
          "suggestions": "['Tell me about your services'", 'Get a quote', 'Technical support', 'Contact information'],;
          "relatedServices": "['AI Consulting'", 'Cloud Solutions', 'Digital Transformation'],;
          "estimatedResponseTime": "2;
        "}
  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessag e = {
        id: 'welcome',
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        status: 'sent',
        metadata: {
          confidence: 0.95,
          suggestions: ['Tell me about your services', 'Get a quote', 'Technical support', 'Contact information'],
          relatedServices: ['AI Consulting', 'Cloud Solutions', 'Digital Transformation'],
          estimatedResponseTime: 2
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);
  // Auto-scroll to bottom
  useEffect(() => {';
    if (autoScroll && messagesEndRef.current) {';';
;
  // Auto-scroll to bottom;
  useEffect(() => {;
    if (autoScroll && messagesEndRef.current) {;
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      messagesEndRef.current.scrollIntoView({ "behavior": 'smooth' });
    }
  }, [messages, autoScroll]);
;
  // Simulate AI response;
  const simulateAIResponse = useCallback(async ("userInput": "string) => {;
    setIsTyping(true);
;
    // Simulate processing delay;
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    const responses = [
      {';
        content: "We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Our services help businesses automate processes, gain insights from data, and create intelligent applications.",';';
        suggestions: ['AI Consulting', 'Machine Learning', 'Data Analytics', 'Automation'],';';
        relatedServices: ['AI Solutions', 'Data Science', 'Process Automation']
      },
      {';
        content: "Our cybersecurity services include threat detection, vulnerability assessment, security audits, and compliance management. We help protect your digital assets with enterprise-grade security solutions.",';';
        suggestions: ['Security Assessment', 'Compliance', 'Threat Detection', 'Incident Response'],';';
        relatedServices: ['Cybersecurity', 'Compliance', 'Security Operations']
      },
      {';
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",';';
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],';';
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management']
    await new Promise(resolve => setTimeout(resolve", 1000 + Math.random() * 2000));
;
    const responses = [;
      {;
        "content": "We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Our services help businesses automate processes, gain insights from data, and create intelligent applications.",;
        "suggestions": "['AI Consulting'", 'Machine Learning', 'Data Analytics', 'Automation'],;
        "relatedServices": "['AI Solutions'", 'Data Science', 'Process Automation'];
      },;
      {;
        "content": "Our cybersecurity services include threat detection, vulnerability assessment, security audits, and compliance management. We help protect your digital assets with enterprise-grade security solutions.",;
        "suggestions": "['Security Assessment'", 'Compliance', 'Threat Detection', 'Incident Response'],;
        "relatedServices": "['Cybersecurity'", 'Compliance', 'Security Operations'];
      },;
      {;
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",;
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],;
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management'];
        "content": "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",;
        "suggestions": "['Strategy development'", 'Implementation process', 'Change management', 'ROI examples'],;
        "relatedServices": "['Digital Transformation'", 'Process Optimization', 'Change Management'];
  // Auto-scroll to bottom
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }
    );
    }
  }, [messages, autoScroll]);
  // Simulate AI response
  const simulateAIResponse = useCallback(async (userInput: string) => {
    setIsTyping(true);
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    const responses = [
      {
        content: "We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Our services help businesses automate processes, gain insights from data, and create intelligent applications.",
        suggestions: ['AI Consulting', 'Machine Learning', 'Data Analytics', 'Automation'],
        relatedServices: ['AI Solutions', 'Data Science', 'Process Automation']
      },
      {
        content: "Our cybersecurity services include threat detection, vulnerability assessment, security audits, and compliance management. We help protect your digital assets with enterprise-grade security solutions.",
        suggestions: ['Security Assessment', 'Compliance', 'Threat Detection', 'Incident Response'],
        relatedServices: ['Cybersecurity', 'Compliance', 'Security Operations']
      },
      {
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management']
      }
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
;
    const "botMessage": "ChatMessag e = {;
      "id": Dat e.now().toString()",;
      "content": "randomRespons e.content",;
      "sender": 'bot',;
      "timestamp": "new Date()",;
      "type": 'text',;
      "status": 'sent',;
      "metadata": "{;
        "confidence": 0.85 + Math.random() * 0.1",;
        "suggestions": "randomRespons e.suggestions",;
        "relatedServices": "randomRespons e.relatedServices",;
        "estimatedResponseTime": "1 + Math.random() * 2;
      "}
    const botMessage: ChatMessag e = {
      id: Dat e.now().toString(),
      content: randomRespons e.content,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      status: 'sent',
      metadata: {
        confidence: 0.85 + Math.random() * 0.1,
        suggestions: randomRespons e.suggestions,
        relatedServices: randomRespons e.relatedServices,
        estimatedResponseTime: 1 + Math.random() * 2
;
    const botMessage: ChatMessag e = {;
      id: Dat e.now().toString(),;
      content: randomRespons e.content,;
      sender: 'bot',;
      timestamp: new Date(),;
      type: 'text',;
      status: 'sent',;
      metadata: {;
        confidence: 0.85 + Math.random() * 0.1,;
        suggestions: randomRespons e.suggestions,;
        relatedServices: randomRespons e.relatedServices,;
        estimatedResponseTime: 1 + Math.random() * 2;
      }
    };
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  }, []);
;
  // Handle message submission;
  const handleSubmit = useCallback(async ("e": "React.FormEvent) => {;
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
;
    const "userMessage": ChatMessag e = {;
      "id": Dat e.now().toString()",;
      "content": "inputValu e.trim()",;
      "sender": 'user',;
      "timestamp": "new Date()",;
      "type": 'text',;
      "status": 'sent';
  // Handle message submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    const userMessage: ChatMessag e = {
      id: Dat e.now().toString(),
      content: inputValu e.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
      status: 'sent'
    };
';
    setMessages(prev => [...prev, userMessage]);';';
;
    const userMessage: ChatMessag e = {;
      id: Dat e.now().toString(),;
      content: inputValu e.trim(),;
      sender: 'user',;
      timestamp: new Date(),;
      type: 'text',;
      status: 'sent';
    };
;
    setMessages(prev => [...prev, userMessage]);
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    await simulateAIResponse(inputValue.trim());
  }, [inputValue, isTyping, simulateAIResponse]);
;
  // Handle suggestion click;
  const handleSuggestionClick = ("props": "any) => {;
    setInputValue(suggestion);
    "}, []);
;
  // Handle file upload;
  const handleFileUpload = useCallback(("e": "React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0];
    if (file) {;
      const "fileMessage": ChatMessag e = {;
        "id": Dat e.now().toString()",;
        "content": "`"Uploaded": ${file.name"}`,;
        "sender": 'user',;
        "timestamp": "new Date()",;
        "type": 'file',;
        "status": 'sent';
  // Handle suggestion click
  const handleSuggestionClick = (props: any) => {
    setInputValue(suggestion);
    }, []);
  // Handle file upload
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileMessage: ChatMessag e = {
        id: Dat e.now().toString(),
        content: `Uploaded: ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        type: 'file',
        status: 'sent'
    if (file) {;
      const fileMessage: ChatMessag e = {;
        id: Dat e.now().toString(),;
        content: `Uploaded: ${file.name}`,;
        sender: 'user',;
        timestamp: new Date(),;
        type: 'file',;
        status: 'sent';
      };
      setMessages(prev => [...prev, fileMessage]);
    }
  }, []);
  // Toggle voice input
  const toggleVoiceInput = useCallback(() => {
    setIsListening(!isListening);
    }, [isListening]);
;
  // Clear chat;
  const clearChat = ("props": "any) => {;
    setMessages([]);
  "};
;
  return (;
    <>;
  // Clear chat
  const clearChat = (props: any) => {
    setMessages([]);
  };
  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg "hover": "shado w-xl transition-all duration-300 "focus": outlin e-none "focus": rin g-2 "focus": rin g-cyan-500 "focus": rin g-offset-2 "focus": rin g-offset-gray-900";
        whileHover={{ "scale": 1.1 "}}
        whileTap={{ "scale": "0.95 "}}
        aria-label="Toggle AI chatbot";
      >;
        {isOpen ? <X className="w-6 h-6"  /> : "<MessageCircle className="w-6 h-6"  />"}
      </button>;
      {/* Chat Interface */}
      <AnimatePresence>;
        {isOpen && (;
          <motion.div;
            initial={{ "opacity": "0", "scale": "0.9", "y": "2 0 "}}
            animate={{ "opacity": "1", "scale": "1", "y": "0 "}}
            exit={{ "opacity": "0", "scale": "0.9", "y": "2 0 "}}
            transition={{ "duration": "0.3", "ease": 'easeOut' }}
            className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden";
          >;
            {/* Header */}
            {showHeader && (;
              <div className="p-4 bg-gray-800/50 border-b border-gray-700/50">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">;
                      <Bot className="w-4 h-4 text-white"  />;
                    </div>;
                    <div>;
                      <h3 className="text-white font-semibold">Zion AI Assistant;
                      <p className="text-xs text-gray-400">Online • 24/7 Available</p>;
                    </div>;
                  </div>;
                  <div className="flex items-center gap-2">;
                    {showSettings && (;
                      <button className="p-2 text-gray-400 "hover": "tex t-white transition-colors">;
                        <Settings className="w-4 h-4"  />;
                      </button>;
                    )"}
                    <button;
                      onClick={clearChat}
                      className="p-2 text-gray-400 hover: tex t-white transition-colors"
                    >
                      <HelpCircle className="w-4 h-4"  />
                    </button>
                  </div>
                </div>
                  </div>
  );
}
                      className="p-2 text-gray-400 hover: tex t-white transition-colors";
                      className="p-2 text-gray-400 "hover": "tex t-white transition-colors";
                    >;
                      <HelpCircle className="w-4 h-4"  />;
                    </button>;
                  </div>;
                </div>;
              </div>;
            )"}
;
        className="fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover: shado w-xl transition-all duration-300 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: rin g-offset-2 focus: rin g-offset-gray-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI chatbot"
      >
        {isOpen ? <X className="w-6 h-6"  /> : <MessageCircle className="w-6 h-6"  />}
      </button>
      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 2 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 2 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            {showHeader && (
              <div className="p-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white"  />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Zion AI Assistant
                      <p className="text-xs text-gray-400">Online • 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {showSettings && (
                      <button className="p-2 text-gray-400 hover: tex t-white transition-colors">
                        <Settings className="w-4 h-4"  />
                      </button>
                    )}
                    <button 
                      onClick={clearChat}
                      className="p-2 text-gray-400 hover: tex t-white transition-colors"
                    >
                      <HelpCircle className="w-4 h-4"  />
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 1 0 }}';
                  animate={{ opacity: 1, y: 0 }}';';
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}';
                >';';
                  initial={{ "opacity": "0", "y": "1 0 "}}
                  animate={{ "opacity": "1", "y": "0 "}}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'} rounded-lg p-3`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.metadata?.suggestions && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {message.metadata.suggestions.slice(0, 3).map((suggestion, index) => (
                          <button
                  initial={{ opacity: 0, y: 1 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >;
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'} rounded-lg p-3`}>;
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>;
                    {message.metadata?.suggestions && (;
                      <div className="mt-2 flex flex-wrap gap-1">;
                        {message.metadata.suggestions.slice(0, 3).map((suggestion, index) => (;
                          <button;
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-gray-700 "hover": "b g-gray-600 text-gray-300 px-2 py-1 rounded transition-colors";
                          >;
                            {suggestion"}
                          </button>;
                            className="text-xs bg-gray-700 hover: b g-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                          </div>
  );
}
                  </div>
                </motion.div>
                      </div>;
                    )}
                  </div>;
                </motion.div>;
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {/* Typing Indicator */}
              {isTyping && (;
                <motion.div;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex space-x-1">';
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>';';
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.1s'}}"}></div>';';
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.2s'}}"}></div>
                    </div>
                    <span className="text-sm text-gray-400">Zion AI is typing...</span>
                  </div>
                </motion.div>
                  initial={{ "opacity": "0 "}}
                  animate={{ "opacity": "1 "}}
                  className="flex justify-start";
                >;
                  <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">;
                    <div className="flex space-x-1">;
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>;
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ "animationDelay": '0.1s'}}"}></div>;
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ "animationDelay": '0.2s'}}"}></div>;
                    </div>;
                    <span className="text-sm text-gray-400">Zion AI is typing...</span>;
                  </div>;
                </motion.div>;
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.1s'}}"}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.2s'}}"}></div>
                    </div>
                    <span className="text-sm text-gray-400">Zion AI is typing...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef}  />
            </div>
            {/* Input Area */}
            <div className="p-4 border-t border-gray-700/50">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"></input>
                    value={inputValue}></input>
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about Zion Tech Group...";
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-cyan-500 "focus": borde r-transparent";
                    disabled={isTyping"}
                  />;
                </div>;
                    placeholder="Ask me anything about Zion Tech Group..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: borde r-transparent"
                    disabled={isTyping}
                  />
                </div>
                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-cyan-500 text-white rounded-lg "hover": "b g-cyan-600 transition-colors "disabled": opacit y-50 "disabled": curso r-not-allowed";
                  aria-label="Send message";
                >;
                  <Send className="w-4 h-4"  />;
                </button>;
              </form>;
              {/* Quick Actions */"}
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">;
                <div className="flex items-center gap-2">;
                  <Sparkles className="w-3 h-3"  />;
                  <span>Powered by Zion AI</span>;
                </div>;
                <div className="flex items-center gap-1">;
                  <Clock className="w-3 h-3"  />;
                  <span>24/7 Available</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
                  className="p-3 bg-cyan-500 text-white rounded-lg hover: b g-cyan-600 transition-colors disabled: opacit y-50 disabled: curso r-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4"  />
                </button>
              </form>
              {/* Quick Actions */}
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3"  />
                  <span>Powered by Zion AI</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3"  />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AIChatbotSystem;
</motion>
</motion>
</motion>
</motion>
</any>
</ChatMessage>';
</AIChatbotSystemProps>;';;';
;
export default AIChatbotSystem;
</motion>;
</motion>;
</motion>;
</motion>;
</any>;
</any>;
</any>;
</ChatMessage>;
</AIChatbotSystemProps>;
</any>
</any>
</ChatMessage>
</AIChatbotSystemProps>
import React,{ useState,useEffect,useRef,useCallback } from &apos;react&apos;; import { motion,AnimatePresence } from &apos;framer-motion&apos;; import { MessageCircle,X,Send,Bot,User,Paperclip,Mic,MicOff,Sparkles,Clock,Settings,HelpCircle&apos;;&apos;} from &apos;lucide-react&apos;; interface ChatMessage { id: string;&apos;; content: string;&apos;;&apos;; sender: &apos;user&apos; | &apos;bot&apos;;&apos;; timestamp: Dat e;&apos;;&apos;; type: &apos;text&apos;;&apos;;&apos;; status: &apos;sent&apos;; metadata?: {; confidence?: number; suggestions?: string[]; relatedServices?: string[]; estimatedResponseTime?: number}} ; interface AIChatbotSystemProps {; showHeader?: boolean; showSettings?: boolean; maxMessages?: number; autoScroll?: boolean} export const AIChatbotSystem: Reac t.FC<AIChatbotSystemProps> = ({ showHeader = true,showSettings = true,maxMessages = 50,autoScroll = true };) => { const [messages,setMessages] = useState<ChatMessage[]>([]); const [inputValue,setInputValue] = useState<any>(&quot;); const [isTyping,setIsTyping] = useState<any>(false); const [isOpen,setIsOpen] = useState<any>(false); const messagesEndRef = useRef<HTMLDivElement>(null); useEffect(() => { if (isOpen && messages.length === 0) { const welcomeMessage: ChatMessag e = { id: &apos;welcome&apos;,content: &quot;Hello! I&apos;m Zion AI,your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?&quot;,sender: &apos;bot&apos;,timestamp: new Date(),type: &apos;text&apos;,status: &apos;sent&apos;,metadata: { confidence: 0.95,suggestions: [&apos;Tell me about your services&apos;,&apos;Get a quote&apos;,&apos;Technical support&apos;,&apos;Contact information&apos;],relatedServices: [&apos;AI Consulting&apos;,&apos;Cloud Solutions&apos;,&apos;Digital Transformation&apos;],estimatedResponseTime: 2 } };; setMessages([welcomeMessage])} },[isOpen,messages.length]); useEffect(() => { if (autoScroll && messagesEndRef.current) { messagesEndRef.current.scrollIntoView({ behavior: &apos;smooth&apos; })} },[messages,autoScroll]); ; const simulateAIResponse = useCallback(async (userInput: string) => {; setIsTyping(true); ; await new Promise(resolve => setTimeout(resolve,1000 + Math.random() * 2000)); const responses = [ { content: &quot;We offer comprehensive AI solutions including machine learning,natural language processing,computer vision,and predictive analytics. Our services help businesses automate processes,gain insights from data,and create intelligent applications.&quot;,suggestions: [&apos;AI Consulting&apos;,&apos;Machine Learning&apos;,&apos;Data Analytics&apos;,&apos;Automation&apos;],relatedServices: [&apos;AI Solutions&apos;,&apos;Data Science&apos;,&apos;Process Automation&apos;] },{ content: &quot;Our cybersecurity services include threat detection,vulnerability assessment,security audits,and compliance management. We help protect your digital assets with enterprise-grade security solutions.&quot;,suggestions: [&apos;Security Assessment&apos;,&apos;Compliance&apos;,&apos;Threat Detection&apos;,&apos;Incident Response&apos;],relatedServices: [&apos;Cybersecurity&apos;,&apos;Compliance&apos;,&apos;Security Operations&apos;] },{ content: &quot;Digital transformation is our specialty! We help businesses modernize their technology stack,improve processes,and enhance customer experiences. Our approach includes strategy development,implementation,and change management.&quot;,suggestions: [&apos;Strategy development&apos;,&apos;Implementation process&apos;,&apos;Change management&apos;,&apos;ROI examples&apos;],relatedServices: [&apos;Digital Transformation&apos;,&apos;Process Optimization&apos;,&apos;Change Management&apos;] }; ]; ; const randomResponse = responses[Math.floor(Math.random() * responses.length)]; const botMessage: ChatMessag e = { id: Dat e.now().toString(),content: randomRespons e.content,sender: &apos;bot&apos;,timestamp: new Date(),type: &apos;text&apos;,status: &apos;sent&apos;,metadata: { confidence: 0.85 + Math.random() * 0.1,suggestions: randomRespons e.suggestions,relatedServices: randomRespons e.relatedServices,estimatedResponseTime: 1 + Math.random() * 2 } };; ; setMessages(prev => [...prev,botMessage]); setIsTyping(false)},[]); ; const handleSubmit = useCallback(async (e: React.FormEvent) => {; e.preventDefault(); if (!inputValue.trim() || isTyping) return; const userMessage: ChatMessag e = { id: Dat e.now().toString(),content: inputValu e.trim(),sender: &apos;user&apos;,timestamp: new Date(),type: &apos;text&apos;,status: &apos;sent&apos; };; setMessages(prev => [...prev,userMessage]);&apos;;&apos;; setInputValue(&quot;); ; await simulateAIResponse(inputValue.trim())},[inputValue,isTyping,simulateAIResponse]); ; const handleSuggestionClick = (props) => {; setInputValue(suggestion)},[]); ; const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {; const file = e.target.files?.[0]; if (file) { const fileMessage: ChatMessag e = { id: Dat e.now().toString(),content: `Uploaded: ${file.name}`,sender: &apos;user&apos;,timestamp: new Date(),type: &apos;file&apos;,status: &apos;sent&apos; };; setMessages(prev => [...prev,fileMessage])} },[]); ; const toggleVoiceInput = useCallback(() => {; setIsListening(!isListening)},[isListening]); ; const clearChat = (props) => {; setMessages([])}; ; return (; <>; {} <motion.button; onClick={() => setIsOpen(!isOpen)} className=&quot;fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover: shado w-xl transition-all duration-300 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: rin g-offset-2 focus: rin g-offset-gray-900&quot;; whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label=&quot;Toggle AI chatbot&quot;; >; {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <MessageCircle className=&quot;w-6 h-6&quot; />} </button>; {} <AnimatePresence>; {isOpen && (; <motion.div; initial={{ opacity: 0,scale: 0.9,y: 2 0 }} animate={{ opacity: 1,scale: 1,y: 0 }} exit={{ opacity: 0,scale: 0.9,y: 2 0 }} transition={{ duration: 0.3,ease: &apos;easeOut&apos; }} className=&quot;fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden&quot;; >; {} {showHeader && (; <div className=&quot;p-4 bg-gray-800/50 border-b border-gray-700/50&quot;>; <div className=&quot;flex items-center justify-between&quot;>; <div className=&quot;flex items-center gap-3&quot;>; <div className=&quot;w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center&quot;>; <Bot className=&quot;w-4 h-4 text-white&quot; />; </div>; <div>; <h3 className=&quot;text-white font-semibold&quot;>Zion AI Assistant; <p className=&quot;text-xs text-gray-400&quot;>Online • 24/7 Available</p>; </div>; </div>; <div className=&quot;flex items-center gap-2&quot;>; {showSettings && (; <button className=&quot;p-2 text-gray-400 hover: tex t-white transition-colors&quot;>; <Settings className=&quot;w-4 h-4&quot; />; </button>; )} <button; onClick={clearChat} className=&quot;p-2 text-gray-400 hover: tex t-white transition-colors&quot; > <HelpCircle className=&quot;w-4 h-4&quot; /> </button> </div> </div> </div> )} {} <div className=&quot;flex-1 overflow-y-auto p-4 space-y-4&quot;>; {messages.map((message) => (; <motion.div; key={message.id} initial={{ opacity: 0,y: 1 0 }} animate={{ opacity: 1,y: 0 }} className={`flex ${message.sender === &apos;user&apos; ? &apos;justify-end&apos; : &apos;justify-start&apos;}`} >&apos;; <div className={`max-w-[80%] ${message.sender === &apos;user&apos; ? &apos;bg-cyan-500 text-white&apos; : &apos;bg-gray-800 text-white&apos;} rounded-lg p-3`}> <p className=&quot;text-sm whitespace-pre-wrap&quot;>{message.content}</p> {message.metadata?.suggestions && ( <div className=&quot;mt-2 flex flex-wrap gap-1&quot;> {message.metadata.suggestions.slice(0,3).map((suggestion,index) => ( <button key={index} onClick={() => handleSuggestionClick(suggestion)} className=&quot;text-xs bg-gray-700 hover: b g-gray-600 text-gray-300 px-2 py-1 rounded transition-colors&quot;; >; {suggestion} </button>; ))} </div> )} </div> </motion.div> ))} ; {} {isTyping && (; <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=&quot;flex justify-start&quot; > <div className=&quot;flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg&quot;> <divclassName=&quot;flex space-x-1&quot;> <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot;></div>&apos;; <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot; style=&quot;{{{ animationDelay: &apos;0.1s&apos;}}&quot;}></div>&apos;; <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot; style=&quot;{{{ animationDelay: &apos;0.2s&apos;}}&quot;}></div> </div> <span className=&quot;text-sm text-gray-400&quot;>Zion AI is typing...</span> </div> </motion.div> )} ; <div ref={messagesEndRef} />; </div>; {} <div className=&quot;p-4 border-t border-gray-700/50&quot;>; <form onSubmit={handleSubmit} className=&quot;flex items-center gap-2&quot;>; <div className=&quot;flex-1 relative&quot;>; <input; type=&quot;text&quot;></input>; value={inputValue}></input>; onChange={(e) => setInputValue(e.target.value)} placeholder=&quot;Ask me anything about Zion Tech Group...&quot;; className=&quot;w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: borde r-transparent&quot;; disabled={isTyping} />; </div>; {} <button; type=&quot;submit&quot;; disabled={!inputValue.trim() || isTyping} className=&quot;p-3 bg-cyan-500 text-white rounded-lg hover: b g-cyan-600 transition-colors disabled: opacit y-50 disabled: curso r-not-allowed&quot;; aria-label=&quot;Send message&quot;; >; <Send className=&quot;w-4 h-4&quot; />; </button>; </form>; {} <div className=&quot;flex items-center justify-between mt-3 text-xs text-gray-500&quot;>; <div className=&quot;flex items-center gap-2&quot;>; <Sparkles className=&quot;w-3 h-3&quot; />; <span>Powered by Zion AI</span>; </div>; <div className=&quot;flex items-center gap-1&quot;>; <Clock className=&quot;w-3 h-3&quot; />; <span>24/7 Available</span>; </div>; </div>; </div>; </motion.div>; )} </AnimatePresence>; </>; )}; export default AIChatbotSystem; </motion> </HTMLInputElement> </HTMLDivElement> </any> </ChatMessage> </AIChatbotSystemProps>;&apos;;&apos;;
const React,{ useState,useEffect,useRef,useCallback } from "react"; import { motion,AnimatePresence } from "framer-motion"; import { MessageCircle,X,Send,Bot,User,Paperclip,Mic,MicOff,Sparkles,Clock,Settings,HelpCircle";"
  "} from "lucide-react"; interface ChatMessage { id: string;"
  "; content: string;"
  ";"
  "; sender:"
  "user" | "bot";"
  "; timestamp: Dat e;"
  ";"
  "; type:"
  "text";"
  ";"
  "; status:"
  "sent"; metadata?: {; confidence?: number; suggestions?: string[]; relatedServices?: string[]; estimatedResponseTime?: number}} ; interface AIChatbotSystemProps {; showHeader?: boolean; showSettings?: boolean; maxMessages?: number; autoScroll?: boolean} export const AIChatbotSystem: Reac t.FC<AIChatbotSystemProps> = ({ showHeader = true,showSettings = true,maxMessages = 50,autoScroll = true };) => { const [messages,setMessages] = useState<ChatMessage[]>([]); const [inputValue,setInputValue] = useState<any>("
  "); const [isTyping,setIsTyping] = useState<any>(false); const [isOpen,setIsOpen] = useState<any>(false); const messagesEndRef = useRef<HTMLDivElement>(null); useEffect(() => { if (isOpen && messages.length === 0) { const welcomeMessage: ChatMessag e = { id:"
  "welcome",content:"
  "Hello! I"m Zion AI,your intelligent assistant. I can help you with:\n\n Information about our services\n Technical support and guidance\n Project inquiries and quotes\n General questions about Zion Tech Group\n\nHow can I assist you today?",sender:"
  "bot",timestamp: new Date(),type:"
  "text",status:"
  "sent",metadata: { confidence: 0.95,suggestions: ["
  "Tell me about your services","
  "Get a quote","
  "Technical support","
  "Contact information"],relatedServices: ["
  "AI Consulting","
  "Cloud Solutions","
  "Digital Transformation"],estimatedResponseTime: 2 } }; setMessages([welcomeMessage])} },[isOpen,messages.length]); useEffect(() => { if (autoScroll && messagesEndRef.current) { messagesEndRef.current.scrollIntoView({ behavior:"
  "smooth" })} },[messages,autoScroll]); ; const simulateAIResponse = useCallback(async (userInput: string) => {; setIsTyping(true); ; await new Promise(resolve => setTimeout(resolve,1000 + Math.random() * 2000)); const responses = [ { content:"
  "We offer comprehensive AI solutions including machine learning,natural language processing,computer vision,and predictive analytics. Our services help businesses automate processes,gain insights from data,and create intelligent applications.",suggestions: ["
  "AI Consulting","
  "Machine Learning","
  "Data Analytics","
  "Automation"],relatedServices: ["
  "AI Solutions","
  "Data Science","
  "Process Automation"] },{ content:"
  "Our cybersecurity services include threat detection,vulnerability assessment,security audits,and compliance management. We help protect your digital assets with enterprise-grade security solutions.",suggestions: ["
  "Security Assessment","
  "Compliance","
  "Threat Detection","
  "Incident Response"],relatedServices: ["
  "Cybersecurity","
  "Compliance","
  "Security Operations"] },{ content:"
  "Digital transformation is our specialty! We help businesses modernize their technology stack,improve processes,and enhance customer experiences. Our approach includes strategy development,implementation,and change management.",suggestions: ["
  "Strategy development","
  "Implementation process","
  "Change management","
  "ROI examples"],relatedServices: ["
  "Digital Transformation","
  "Process Optimization","
  "Change Management"] }; ]; ; const randomResponse = responses[Math.floor(Math.random() * responses.length)]; const botMessage: ChatMessag e = { id: Dat e.now().toString(),content: randomRespons e.content,sender:"
  "bot",timestamp: new Date(),type:"
  "text",status:"
  "sent",metadata: { confidence: 0.85 + Math.random() * 0.1,suggestions: randomRespons e.suggestions,relatedServices: randomRespons e.relatedServices,estimatedResponseTime: 1 + Math.random() * 2 } }; ; setMessages(prev => [.prev,botMessage]); setIsTyping(false)},[]); ; const handleSubmit = useCallback(async (e: React.FormEvent) => {; e.preventDefault(); if (!inputValue.trim() | isTyping) return; const userMessage: ChatMessag e = { id: Dat e.now().toString(),content: inputValu e.trim(),sender:"
  "user",timestamp: new Date(),type:"
  "text",status:"
  "sent" }; setMessages(prev => [.prev,userMessage]);"
  ";"
  "; setInputValue("
  "); ; await simulateAIResponse(inputValue.trim())},[inputValue,isTyping,simulateAIResponse]); ; const handleSuggestionClick = (props) => {; setInputValue(suggestion)},[]); ; const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {; const file = e.target.files?.[0]; if (file) { const fileMessage: ChatMessag e = { id: Dat e.now().toString(),content: `Uploaded: ${file.name}`,sender:"
  "user",timestamp: new Date(),type:"
  "file",status:"
  "sent" }; setMessages(prev => [.prev,fileMessage])} },[]); ; const toggleVoiceInput = useCallback(() => {; setIsListening(!isListening)},[isListening]); ; const clearChat = (props) => {; setMessages([])}; ; return (; <>; {} <motion.button; onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover: shado w-xl transition-all duration-300 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: rin g-offset-2 focus: rin g-offset-gray-900"; whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Toggle AI chatbot"; >; {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />} </button>; {} <AnimatePresence>; {isOpen && (; <motion.div; initial={{ opacity: 0,scale: 0.9,y: 2 0 }} animate={{ opacity: 1,scale: 1,y: 0 }} exit={{ opacity: 0,scale: 0.9,y: 2 0 }} transition={{ duration: 0.3,ease:"
  "easeOut" }} className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"; >; {} {showHeader && (; <div className="p-4 bg-gray-800/50 border-b border-gray-700/50">; <div className="flex items-center justify-between">; <div className="flex items-center gap-3">; <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">; <Bot className="w-4 h-4 text-white" />; </div>; <div>; <h3 className="text-white font-semibold">Zion AI Assistant; <p className="text-xs text-gray-400">Online 24/7 Available</p>; </div>; </div>; <div className="flex items-center gap-2">; {showSettings && (; <button className="p-2 text-gray-400 hover: tex t-white transition-colors">; <Settings className="w-4 h-4" />; </button>; )} <button; onClick={clearChat} className="p-2 text-gray-400 hover: tex t-white transition-colors" > <HelpCircle className="w-4 h-4" /> </button> </div> </div> </div> )} {} <div className="flex-1 overflow-y-auto p-4 space-y-4">; {messages.map((message) => (; <motion.div; key={message.id} initial={{ opacity: 0,y: 1 0 }} animate={{ opacity: 1,y: 0 }} className={`flex ${message.sender === "user" ? "justify-end" :"
  "justify-start"}`} >"; <div className={`max-w-[80%] ${message.sender === "user" ? "bg-cyan-500 text-white" :"
  "bg-gray-800 text-white"} rounded-lg p-3`}> <p className="text-sm whitespace-pre-wrap">{message.content}</p> {message.metadata?.suggestions && ( <div className="mt-2 flex flex-wrap gap-1"> {message.metadata.suggestions.slice(0,3).map((suggestion,index) => ( <button key={index} onClick={() => handleSuggestionClick(suggestion)} className="text-xs bg-gray-700 hover: b g-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"; >; {suggestion} </button>; ))} </div> )} </div> </motion.div> ))} ; {} {isTyping && (; <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start" > <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg"> <divclassName="flex space-x-1"> <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>"; <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay:"
  "0.1s"}}"}></div>"; <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay:"
  "0.2s"}}"}></div> </div> <span className="text-sm text-gray-400">Zion AI is typing.</span> </div> </motion.div> )} ; <div ref={messagesEndRef} />; </div>; {} <div className="p-4 border-t border-gray-700/50">; <form onSubmit={handleSubmit} className="flex items-center gap-2">; <div className="flex-1 relative">; <input; type="text"></input>; value={inputValue}></input>; onChange={(e) => setInputValue(e.target.value)} placeholder="Ask me anything about Zion Tech Group."; className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: borde r-transparent"; disabled={isTyping} />; </div>; {} <button; type="submit"; disabled={!inputValue.trim() | isTyping} className="p-3 bg-cyan-500 text-white rounded-lg hover: b g-cyan-600 transition-colors disabled: opacit y-50 disabled: curso r-not-allowed"; aria-label="Send message"; >; <Send className="w-4 h-4" />; </button>; </form>; {} <div className="flex items-center justify-between mt-3 text-xs text-gray-500">; <div className="flex items-center gap-2">; <Sparkles className="w-3 h-3" />; <span>Powered by Zion AI</span>; </div>; <div className="flex items-center gap-1">; <Clock className="w-3 h-3" />; <span>24/7 Available</span>; </div>; </div>; </div>; </motion.div>; )} </AnimatePresence>; </>; )}; export default AIChatbotSystem; </motion> </HTMLInputElement> </HTMLDivElement> </any> </ChatMessage> </AIChatbotSystemProps>;"
  ";"
  ";'"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect,useRef,useCallback } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { MessageCircle,X,Send,Bot,User,Paperclip,Mic,MicOff,Sparkles,Clock,Settings,HelpCircle';'} from 'lucide-react'; interface ChatMessage { id: string;'; content: string;';'; sender: 'user' | 'bot';'; timestamp: Dat e;';'; type: 'text';';'; status: 'sent'; metadata?: {; confidence?: number; suggestions?: string[]; relatedServices?: string[]; estimatedResponseTime?: number}} ; interface AIChatbotSystemProps {; showHeader?: boolean; showSettings?: boolean; maxMessages?: number; autoScroll?: boolean} export const AIChatbotSystem: Reac t.FC<AIChatbotSystemProps> = ({ showHeader = true,showSettings = true,maxMessages = 50,autoScroll = true };) => { const [messages,setMessages] = useState<ChatMessage[]>([]); const [inputValue,setInputValue] = useState<any>("); const [isTyping,setIsTyping] = useState<any>(false); const [isOpen,setIsOpen] = useState<any>(false); const messagesEndRef = useRef<HTMLDivElement>(null); useEffect(() => { if (isOpen && messages.length === 0) { const welcomeMessage: ChatMessag e = { id: 'welcome,content: "Hello! I'm Zion AI,your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",sender: 'bot,timestamp: new Date(),type: 'text,status: 'sent,metadata: { confidence: 0.95,suggestions: ['Tell me about your services,'Get a quote','Technical support','Contact information'],relatedServices: ['AI Consulting,'Cloud Solutions','Digital Transformation'],estimatedResponseTime: 2 } };; setMessages([welcomeMessage])} },[isOpen,messages.length]); useEffect(() => { if (autoScroll && messagesEndRef.current) { messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })} },[messages,autoScroll]); ; const simulateAIResponse = useCallback(async (userInput: string) => {; setIsTyping(true); ; await new Promise(resolve => setTimeout(resolve,1000 + Math.random() * 2000)); const responses = [ { content: "We offer comprehensive AI solutions including machine learning,natural language processing,computer vision,and predictive analytics. Our services help businesses automate processes,gain insights from data,and create intelligent applications.",suggestions: ['AI Consulting,'Machine Learning','Data Analytics','Automation'],relatedServices: ['AI Solutions,'Data Science','Process Automation'] },{ content: "Our cybersecurity services include threat detection,vulnerability assessment,security audits,and compliance management. We help protect your digital assets with enterprise-grade security solutions.",suggestions: ['Security Assessment,'Compliance','Threat Detection','Incident Response'],relatedServices: ['Cybersecurity,'Compliance','Security Operations'] },{ content: "Digital transformation is our specialty! We help businesses modernize their technology stack,improve processes,and enhance customer experiences. Our approach includes strategy development,implementation,and change management.",suggestions: ['Strategy development,'Implementation process','Change management','ROI examples'],relatedServices: ['Digital Transformation,'Process Optimization','Change Management'] }; ]; ; const randomResponse = responses[Math.floor(Math.random() * responses.length)]; const botMessage: ChatMessag e = { id: Dat e.now().toString(),content: randomRespons e.content,sender: 'bot,timestamp: new Date(),type: 'text,status: 'sent,metadata: { confidence: 0.85 + Math.random() * 0.1,suggestions: randomRespons e.suggestions,relatedServices: randomRespons e.relatedServices,estimatedResponseTime: 1 + Math.random() * 2 } };; ; setMessages(prev => [...prev,botMessage]); setIsTyping(false)},[]); ; const handleSubmit = useCallback(async (e: _React.FormEvent) => {; e.preventDefault(); if (!inputValue.trim() || isTyping) return; const userMessage: ChatMessag e = { id: Dat e.now().toString(),content: inputValu e.trim(),sender: 'user,timestamp: new Date(),type: 'text,status: 'sent' };; setMessages(prev => [...prev,userMessage]);';'; setInputValue("); ; await simulateAIResponse(inputValue.trim())},[inputValue,isTyping,simulateAIResponse]); ; const handleSuggestionClick = (props) => {; setInputValue(suggestion)},[]); ; const handleFileUpload = useCallback((e: _React.ChangeEvent<HTMLInputElement>) => {; const file = e.target.files?.[0]; if (file) { const fileMessage: ChatMessag e = { id: Dat e.now().toString(),content: `Uploaded: ${file.name}`,sender: 'user,timestamp: new Date(),type: 'file,status: 'sent' };; setMessages(prev => [...prev,fileMessage])} },[]); ; const toggleVoiceInput = useCallback(() => {; setIsListening(!isListening)},[isListening]); ; const clearChat = (props) => {; setMessages([])}; ; return (; <>; {} <motion.button; onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover: shado w-xl transition-all duration-300 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: rin g-offset-2 focus: rin g-offset-gray-900"; whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Toggle AI chatbot"; >; {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />} </button>; {} <AnimatePresence>; {isOpen && (; <motion.div; initial={{ opacity: 0,scale: 0.9,y: 2 0 }} animate={{ opacity: 1,scale: 1,y: 0 }} exit={{ opacity: 0,scale: 0.9,y: 2 0 }} transition={{ duration: 0.3,ease: 'easeOut' }} className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"; >; {} {showHeader && (; <div className="p-4 bg-gray-800/50 border-b border-gray-700/50">; <div className="flex items-center justify-between">; <div className="flex items-center gap-3">; <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">; <Bot className="w-4 h-4 text-white" />; </div>; <div>; <h3 className="text-white font-semibold">Zion AI Assistant; <p className="text-xs text-gray-400">Online • 24/7 Available</p>; </div>; </div>; <div className="flex items-center gap-2">; {showSettings && (; <button className="p-2 text-gray-400 hover: tex t-white transition-colors">; <Settings className="w-4 h-4" />; </button>; )} <button; onClick={clearChat} className="p-2 text-gray-400 hover: tex t-white transition-colors" > <HelpCircle className="w-4 h-4" /> </button> </div> </div> </div> )} {} <div className="flex-1 overflow-y-auto p-4 space-y-4">; {messages.map((message) => (; <motion.div; key={message.id} initial={{ opacity: 0,y: 1 0 }} animate={{ opacity: 1,y: 0 }} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`} >'; <div className={`max-w-[80%] ${message.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'} rounded-lg p-3`}> <p className="text-sm whitespace-pre-wrap">{message.content}</p> {message.metadata?.suggestions && ( <div className="mt-2 flex flex-wrap gap-1"> {message.metadata.suggestions.slice(0,3).map((suggestion,index) => ( <button key={index} onClick={() => handleSuggestionClick(suggestion)} className="text-xs bg-gray-700 hover: b g-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"; >; {suggestion} </button>; ))} </div> )} </div> </motion.div> ))} ; {} {isTyping && (; <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start" > <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg"> <divclassName="flex space-x-1"> <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>'; <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.1s'}}"}></div>'; <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="{{{ animationDelay: '0.2s'}}"}></div> </div> <span className="text-sm text-gray-400">Zion AI is typing...</span> </div> </motion.div> )} ; <div ref={messagesEndRef} />; </div>; {} <div className="p-4 border-t border-gray-700/50">; <form onSubmit={handleSubmit} className="flex items-center gap-2">; <div className="flex-1 relative">; <input; type="text"></input>; value={inputValue}></input>; onChange={(e) => setInputValue(e.target.value)} placeholder="Ask me anything about Zion Tech Group..."; className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-500 focus: borde r-transparent"; disabled={isTyping} />; </div>; {} <button; type="submit"; disabled={!inputValue.trim() || isTyping} className="p-3 bg-cyan-500 text-white rounded-lg hover: b g-cyan-600 transition-colors disabled: opacit y-50 disabled: curso r-not-allowed"; aria-label="Send message"; >; <Send className="w-4 h-4" />; </button>; </form>; {} <div className="flex items-center justify-between mt-3 text-xs text-gray-500">; <div className="flex items-center gap-2">; <Sparkles className="w-3 h-3" />; <span>Powered by Zion AI</span>; </div>; <div className="flex items-center gap-1">; <Clock className="w-3 h-3" />; <span>24/7 Available</span>; </div>; </div>; </div>; </motion.div>; )} </AnimatePresence>; </>; )}; export default AIChatbotSystem; </motion> </HTMLInputElement> </HTMLDivElement> </any> </ChatMessage> </AIChatbotSystemProps>;';';