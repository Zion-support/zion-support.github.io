import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Loader2,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Settings,
  HelpCircle,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  FileText,
  Image,
  Link,
  Download,
  Share2,
  RefreshCw,
  Star,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
  error?: string;
  metadata?: {
    suggestions?: string[];
    links?: Array<{ url: string; title: string }>;
    images?: Array<{ url: string; alt: string }>;
    files?: Array<{ name: string; url: string; size: string }>;
  };
  feedback?: 'positive' | 'negative' | null;
}

interface ChatAssistantProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'dark' | 'light' | 'auto';
  maxHeight?: string;
  welcomeMessage?: string;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
  enableFeedback?: boolean;
  autoExpand?: boolean;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  position = 'bottom-right',
  theme = 'dark',
  maxHeight = '600px',
  welcomeMessage = "Hello! I'm Zion, your AI assistant. I can help you with:\n\n🚀 AI & Technology Solutions\n💼 Business Intelligence\n☁️ Cloud & DevOps Services\n🔒 Cybersecurity & Compliance\n\nHow can I assist you today?",
  enableVoice = true,
  enableFileUpload = true,
  enableSuggestions = true,
  enableFeedback = true,
  autoExpand = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: welcomeMessage,
      timestamp: new Date(),
      metadata: {
        suggestions: [
          "Tell me about your AI services",
          "How can you help with digital transformation?",
          "What are your pricing options?",
          "Show me case studies"
        ]
      }
    }
  ]);
  const [inputValue, setIsInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(autoExpand);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if (enableVoice && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, [enableVoice]);

  // Handle speech recognition
  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  // Handle file upload
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setSelectedFiles(prev => [...prev, ...files]);
      
      // Add file message to chat
      const fileMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: `Uploaded ${files.length} file(s): ${files.map(f => f.name).join(', ')}`,
        timestamp: new Date(),
        metadata: {
          files: files.map(file => ({
            name: file.name,
            url: URL.createObjectURL(file),
            size: `${(file.size / 1024).toFixed(1)} KB`
          }))
        }
      };
      
      setMessages(prev => [...prev, fileMessage]);
    }
  }, []);

  // Handle file removal
  const removeFile = useCallback((index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  // Generate AI response
  const generateAIResponse = useCallback(async (userMessage: string, context?: any) => {
    setIsTyping(true);
    
    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      // Generate contextual response based on user input
      let response = '';
      let suggestions: string[] = [];
      
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
        response = "Our AI services include:\n\n🤖 **Machine Learning Solutions**\n📊 **Predictive Analytics**\n🔄 **Process Automation**\n🧠 **Natural Language Processing**\n\nWe help businesses leverage AI to gain competitive advantages and improve operational efficiency.";
        suggestions = ["Tell me more about ML", "What industries do you serve?", "Show me AI case studies"];
      } else if (lowerMessage.includes('cloud') || lowerMessage.includes('devops')) {
        response = "Our Cloud & DevOps expertise covers:\n\n☁️ **Multi-cloud Strategy**\n🐳 **Container Orchestration**\n🚀 **CI/CD Pipelines**\n📈 **Infrastructure as Code**\n\nWe help organizations modernize their infrastructure and accelerate software delivery.";
        suggestions = ["What cloud providers?", "DevOps best practices", "Migration strategies"];
      } else if (lowerMessage.includes('security') || lowerMessage.includes('cyber')) {
        response = "Our cybersecurity services include:\n\n🔒 **Threat Detection & Response**\n🛡️ **Vulnerability Assessment**\n📋 **Compliance & Governance**\n🔐 **Identity & Access Management**\n\nWe protect your digital assets with enterprise-grade security solutions.";
        suggestions = ["Security audit process", "Compliance frameworks", "Incident response"];
      } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
        response = "Our pricing is flexible and tailored to your needs:\n\n💼 **Consultation**: Free initial assessment\n🚀 **Implementation**: Project-based or subscription\n📊 **Support**: 24/7 monitoring and maintenance\n\nContact us for a personalized quote based on your requirements.";
        suggestions = ["Request a quote", "Schedule a demo", "View pricing tiers"];
      } else if (lowerMessage.includes('case study') || lowerMessage.includes('success')) {
        response = "Here are some recent success stories:\n\n🏥 **Healthcare Provider**: 40% reduction in operational costs\n🏭 **Manufacturing**: 60% improvement in production efficiency\n🏦 **Financial Services**: 99.9% uptime achieved\n\nWould you like me to share detailed case studies?";
        suggestions = ["Healthcare case study", "Manufacturing example", "Financial services success"];
      } else {
        response = "I'm here to help you with Zion Tech Group's comprehensive technology solutions. We specialize in:\n\n✨ **AI & Machine Learning**\n☁️ **Cloud & DevOps**\n🔒 **Cybersecurity**\n📊 **Data Analytics**\n💼 **Digital Transformation**\n\nWhat specific area would you like to explore?";
        suggestions = ["AI services", "Cloud solutions", "Security offerings", "Contact sales"];
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date(),
        metadata: { suggestions }
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // Update conversation history
      setConversationHistory(prev => [...prev, userMessage, response]);
      
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact our support team.",
        timestamp: new Date(),
        error: 'AI response generation failed'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  // Handle message submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && selectedFiles.length === 0) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim() || `Uploaded ${selectedFiles.length} file(s)`,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsInputValue('');
    setSelectedFiles([]);
    
    // Generate AI response
    await generateAIResponse(userMessage.content);
  }, [inputValue, selectedFiles, generateAIResponse]);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setIsInputValue(suggestion);
    inputRef.current?.focus();
  }, []);

  // Handle feedback
  const handleFeedback = useCallback((messageId: string, feedback: 'positive' | 'negative') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, feedback } : msg
    ));
    
    // Send feedback to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'chat_feedback', {
        feedback_type: feedback,
        message_id: messageId
      });
    }
  }, []);

  // Handle message actions
  const handleMessageAction = useCallback((action: string, message: Message) => {
    switch (action) {
      case 'copy':
        navigator.clipboard.writeText(message.content);
        break;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'Zion Tech Group Chat',
            text: message.content
          });
        }
        break;
      case 'download':
        if (message.metadata?.files) {
          message.metadata.files.forEach(file => {
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            link.click();
          });
        }
        break;
    }
  }, []);

  // Toggle chat state
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setIsMinimized(false);
      setIsExpanded(false);
    }
  }, [isOpen]);

  // Toggle minimize
  const toggleMinimize = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  // Toggle expand
  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Clear chat
  const clearChat = useCallback(() => {
    setMessages([{
      id: '1',
      type: 'assistant',
      content: welcomeMessage,
      timestamp: new Date(),
      metadata: {
        suggestions: [
          "Tell me about your AI services",
          "How can you help with digital transformation?",
          "What are your pricing options?",
          "Show me case studies"
        ]
      }
    }]);
    setConversationHistory([]);
  }, [welcomeMessage]);

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      default:
        return 'bottom-4 right-4';
    }
  };

  // Get theme classes
  const getThemeClasses = () => {
    if (theme === 'auto') {
      return 'dark:bg-gray-900 dark:text-white bg-white text-gray-900';
    }
    return theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  };

  if (isMinimized) {
    return (
      <div className={`fixed ${getPositionClasses()} z-50`}>
        <motion.button
          onClick={toggleMinimize}
          className="w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          className="w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`w-80 ${isExpanded ? 'h-96' : 'h-96'} ${getThemeClasses()} rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden`}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">Zion AI Assistant</span>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={toggleExpand}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title={isExpanded ? "Minimize" : "Expand"}
                >
                  <RefreshCw className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Minimize"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-zion-cyan text-white' : 'bg-gray-100 dark:bg-gray-800'} rounded-lg p-3`}>
                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    
                    {/* Message Metadata */}
                    {message.metadata && (
                      <div className="mt-2 space-y-2">
                        {/* Suggestions */}
                        {message.metadata.suggestions && enableSuggestions && (
                          <div className="flex flex-wrap gap-2">
                            {message.metadata.suggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="px-2 py-1 bg-zion-purple/20 text-zion-purple dark:text-zion-purple-light text-xs rounded hover:bg-zion-purple/30 transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        {/* Files */}
                        {message.metadata.files && (
                          <div className="space-y-1">
                            {message.metadata.files.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-white/10 dark:bg-gray-700/50 rounded p-2">
                                <span className="text-xs truncate">{file.name}</span>
                                <button
                                  onClick={() => handleMessageAction('download', message)}
                                  className="p-1 hover:bg-white/20 rounded"
                                >
                                  <Download className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Feedback */}
                    {enableFeedback && message.type === 'assistant' && (
                      <div className="flex items-center justify-end space-x-1 mt-2">
                        <button
                          onClick={() => handleFeedback(message.id, 'positive')}
                          className={`p-1 rounded transition-colors ${
                            message.feedback === 'positive' 
                              ? 'text-green-500 bg-green-500/20' 
                              : 'text-gray-400 hover:text-green-500'
                          }`}
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleFeedback(message.id, 'negative')}
                          className={`p-1 rounded transition-colors ${
                            message.feedback === 'negative' 
                              ? 'text-red-500 bg-red-500/20' 
                              : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-1">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm text-gray-500">Zion is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              {/* File Preview */}
              {selectedFiles.length > 0 && (
                <div className="mb-3 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded p-2">
                      <span className="text-xs truncate flex-1">{file.name}</span>
                      <button
                        onClick={() => removeFile(index)}
                        className="ml-2 p-1 hover:bg-red-500/20 text-red-500 rounded"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                {/* File Upload */}
                {enableFileUpload && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-500 hover:text-zion-cyan transition-colors"
                    title="Attach file"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                )}
                
                {/* Voice Input */}
                {enableVoice && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`p-2 transition-colors ${
                      isListening 
                        ? 'text-red-500 bg-red-500/20' 
                        : 'text-gray-500 hover:text-zion-cyan'
                    }`}
                    title={isListening ? 'Stop recording' : 'Start voice input'}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                )}
                
                {/* Text Input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setIsInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
                
                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim() && selectedFiles.length === 0}
                  className="p-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  title="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              
              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
              />
            </div>

            {/* Chat Footer */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <button
                onClick={clearChat}
                className="text-xs text-gray-500 hover:text-zion-cyan transition-colors"
              >
                Clear Chat
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-xs text-gray-500 hover:text-zion-cyan transition-colors"
              >
                Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
