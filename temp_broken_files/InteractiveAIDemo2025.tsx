"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bot
  MessageCircle
  Send
  Sparkles
  Zap
  Brain
  Rocket
  Star,
  Loader2,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

const InteractiveAIDemo2025 = () => {
  const [messagesetMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI assistant for 2025. I can help you explore revolutionary AI technologiesbusiness transformation strategiesand future predictions. What would you like to know?',
      timestamp: new Date(),
      features: ['Neural 'Interfaces', 'Quantum 'AI', 'Business Automation']
    }
  ]);
  const [inputValuesetInputValue] = useState('');
  const [isTypingsetIsTyping] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const aiResponses = [
    {
      content: "Neural interfaces represent the next frontier in human-AI interaction. Our 2025 breakthrough technology allows direct brain-computer communicationachieving 500% efficiency improvements in data processing and decision-making.",
      features: ['Neural 'Interfaces', 'Brain-Computer 'Interface', 'Efficiency Boost'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      content: "Quantum AI fusion combines quantum computing with advanced AI algorithmsdelivering 1000x faster processing speeds. This revolutionary approach enables real-time analysis of complex datasets that would take traditional computers years to process.",
      features: ['Quantum 'Computing', 'AI 'Algorithms', 'Real-time Processing'],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      content: "Enterprise automation in 2025 delivers unprecedented efficiency gains. Our AI-powered solutions achieve 90% cost reduction while maintaining 99.9% accuracy in business process optimization.",
      features: ['Enterprise 'Automation', 'Cost 'Reduction', 'Process Optimization'],
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      content: "Future predictions powered by our advanced AI models show 95% accuracy in market forecasting. We predict a $50 trillion market opportunity in AI-driven technologies by 2030.",
      features: ['Future 'Predictions', 'Market 'Forecasting', 'Market Opportunity'],
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prevuserMessage]);
    setInputValue(', ');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: randomResponse.content,
        timestamp: new Date(),
        features: randomResponse.features,
        icon: randomResponse.icon,
        color: randomResponse.color
      };
      setMessages(prev => [...prevaiMessage]);
      setIsTyping(false);
    }1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
      </div>

      <div
        className="relative z-10 container mx-auto px-4 py-16"
      >
        {/* Header */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
          >
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Interactive AI Demo 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Chat with the
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of AI
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience our revolutionary AI technology firsthand. Ask questions about neural interfaces
            quantum computingbusiness automationand future predictions.
          </p>
        </div>

        {/* Chat Interface */}
        <div
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-white/10 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Assistant 2025</h3>
                <p className="text-purple-200 text-sm">Powered by Revolutionary Technology</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-6 space-y-6">
            <div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-white/10 text-gray-100'
                  } rounded-2xl p-4`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    {message.features && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.features.map((featureindex) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-white/20 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div
                className="flex justify-start"
              >
                <div className="bg-white/10 text-gray-100 rounded-2xl p-4 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">AI is thinking...</span>
                </div>
              </div>
            )}
          </div>
          {/* Input Area */}
          <div className="border-t border-white/10 p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about AI breakthroughsbusiness automationor future predictions..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Braintitle: 'Neural 'Interfaces', 'description: '500% efficiency boost' },
            { icon: Zaptitle: 'Quantum 'AI', 'description: '1000x faster processing' },
            { icon: Targetitle: 'Business 'Automation', 'description: '90% cost reduction' },
            { icon: TrendingUptitle: 'Future 'Predictions', 'description: '95% accuracy rate' }
          ].map((featureindex) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );



export default InteractiveAIDemo2025;
