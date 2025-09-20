import React, { useState, useRef, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronUp, ChevronDown } from 'lucide-react',

interface ChatMessage {
  id: string,
  type: 'user' | 'bot',
  content: string,
  timestamp: Date,
  isTyping?: boolean
}

interface AIChatbotProps {
  className?: string,
}

const AIChatbot: React.FC<AIChatbotProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false),
  const [isMinimized, setIsMinimized] = useState(false),
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: '1',
      type: 'bot' as const,
      content: 'Hello! I\'m Zion AI, your intelligent assistant. How can I help you today? I can help with:\n\n• AI & Quantum Computing Services\n• Business Solutions\n• Technical Support\n• Pricing Information\n• Service Comparisons',
      timestamp: new Date()
    }
  ]),
  const setMessagesTyped = setMessages as React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  const [inputValue, setInputValue] = useState(''),
  const [isTyping, setIsTyping] = useState(false),
  const messagesEndRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }),
  },

  useEffect(() => {
    scrollToBottom(),
  }, [messages]),

  // AI response simulation
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true),
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000)),
    
    const responses = [
      "That's a great question! Let me help you with that. Our AI solutions are designed to transform your business operations and drive innovation.",
      "I understand you're interested in our services. We offer cutting-edge AI, quantum computing, and autonomous solutions that can revolutionize your business.",
      "Excellent choice! Our quantum computing platform provides unprecedented computational power for complex problem-solving and optimization.",
      "I'd be happy to connect you with our team of experts. They can provide detailed information about our services and help you find the perfect solution.",
      "That's exactly what we specialize in! Our autonomous systems can streamline your operations and provide 24/7 intelligent monitoring.",
      "Great question! Our pricing is competitive and we offer flexible plans to meet your specific needs. Let me get you in touch with our sales team."
    ],
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)],
    
    // Add some context-aware responses
    let finalResponse = randomResponse,
    if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
      finalResponse = "Our pricing varies based on your specific needs. We offer flexible plans starting from $799/month. Would you like me to connect you with our pricing specialist?",
    } else if (userMessage.toLowerCase().includes('ai') || userMessage.toLowerCase().includes('artificial intelligence')) {
      finalResponse = "Our AI services include consciousness evolution, emotional intelligence, autonomous research, and predictive analytics. Each solution is designed to drive business transformation. Which area interests you most?",
    } else if (userMessage.toLowerCase().includes('quantum')) {
      finalResponse = "Our quantum computing solutions cover neural networks, cybersecurity, materials discovery, and financial intelligence. These cutting-edge technologies can solve problems that classical computers cannot. What specific quantum application are you exploring?",
    }
    
    return finalResponse,
  },

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return,

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    },

    setMessages([...messages, userMessage]),
    setInputValue(''),
    
    // Generate AI response
    const aiResponse = await generateAIResponse(userMessage.content),
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: aiResponse || 'I apologize, but I encountered an error. Please try again.',
      timestamp: new Date()
    },

    setMessages([...messages, botMessage]),
    setIsTyping(false),
  },

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      handleSendMessage()
    }
  },

  const quickReplies = [
    "Tell me about AI services",
    "Quantum computing pricing",
    "Business solutions",
    "Contact sales team",
    "Technical support"
  ],

  const handleQuickReply = (reply: string) => {
    setInputValue(reply),
    setTimeout(() => handleSendMessage(), 100),
  },

const AIChatbot: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIChatbot</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default AIChatbot,
