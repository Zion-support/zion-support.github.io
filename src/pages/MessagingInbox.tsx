import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Mail, 
  Send, 
  Archive, 
  Trash2,
  Star,
  MoreVertical,
  Reply,
  Forward,
  Clock,
  User,
  MessageCircle
} from 'lucide-react';

interface Message {
  id: string;
  from: {
    name: string;
    email: string;
    avatar: string;
  };
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  category: 'inbox' | 'sent' | 'drafts' | 'archived' | 'spam';
  priority: 'low' | 'medium' | 'high';
}

export default function MessagingInbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('inbox');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading messages
    const loadMessages = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessages([
        {
          id: '1',
          from: {
            name: 'Sarah Chen',
            email: 'sarah.chen@techcorp.com',
            avatar: '/api/placeholder/40/40'
          },
          subject: 'Project Update - AI Implementation Phase 2',
          preview: 'Hi team, I wanted to share the latest progress on our AI implementation project. We\'ve successfully completed Phase 1 and are ready to move forward with Phase 2...',
          timestamp: '2 hours ago',
          isRead: false,
          isStarred: true,
          category: 'inbox',
          priority: 'high'
        },
        {
          id: '2',
          from: {
            name: 'David Kim',
            email: 'david.kim@innovate.ai',
            avatar: '/api/placeholder/40/40'
          },
          subject: 'Re: Partnership Discussion',
          preview: 'Thank you for the detailed proposal. I think we have a great opportunity to collaborate on this project. Let\'s schedule a call next week to discuss the details...',
          timestamp: '4 hours ago',
          isRead: true,
          isStarred: false,
          category: 'inbox',
          priority: 'medium'
        },
        {
          id: '3',
          from: {
            name: 'Emily Watson',
            email: 'emily.watson@quantumtech.com',
            avatar: '/api/placeholder/40/40'
          },
          subject: 'Quantum Computing Workshop Invitation',
          preview: 'We\'re hosting an exclusive workshop on quantum computing applications in enterprise environments. Given your expertise in this area, we\'d love to have you as a speaker...',
          timestamp: '1 day ago',
          isRead: true,
          isStarred: false,
          category: 'inbox',
          priority: 'low'
        },
        {
          id: '4',
          from: {
            name: 'Michael Rodriguez',
            email: 'michael.rodriguez@cybersec.com',
            avatar: '/api/placeholder/40/40'
          },
          subject: 'Security Audit Results',
          preview: 'The security audit of our infrastructure has been completed. I\'ve attached the detailed report with recommendations for improvements...',
          timestamp: '2 days ago',
          isRead: false,
          isStarred: false,
          category: 'inbox',
          priority: 'high'
        },
        {
          id: '5',
          from: {
            name: 'Alex Thompson',
            email: 'alex.thompson@startup.io',
            avatar: '/api/placeholder/40/40'
          },
          subject: 'Investment Opportunity Discussion',
          preview: 'I hope this message finds you well. I\'m reaching out because I believe there\'s a great opportunity for collaboration between our companies...',
          timestamp: '3 days ago',
          isRead: true,
          isStarred: true,
          category: 'inbox',
          priority: 'medium'
        }
      ]);
      
      setIsLoading(false);
    };

    loadMessages();
  }, []);

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.from.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = message.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  const unreadCount = messages.filter(m => !m.isRead && m.category === 'inbox').length;
  const starredCount = messages.filter(m => m.isStarred).length;

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      setMessages(prev => prev.map(m => 
        m.id === message.id ? { ...m, isRead: true } : m
      ));
    }
  };

  const handleStarToggle = (messageId: string) => {
    setMessages(prev => prev.map(m => 
      m.id === messageId ? { ...m, isStarred: !m.isStarred } : m
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/40';
      default: return 'bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light/40';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-zion-blue-dark rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 h-96 bg-zion-blue-dark rounded"></div>
              <div className="lg:col-span-2 h-96 bg-zion-blue-dark rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Messaging Inbox</h1>
          <p className="text-zion-slate-light">Manage your communications and stay connected with your network</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Message List */}
          <div className="lg:col-span-1">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-white">Messages</CardTitle>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                    {unreadCount} unread
                  </Badge>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zion-blue-light/10 border-zion-blue-light text-white placeholder:text-zion-slate-light"
                  />
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 w-full bg-zion-blue-light/10">
                    <TabsTrigger value="inbox" className="data-[state=active]:bg-zion-purple/20">
                      Inbox
                    </TabsTrigger>
                    <TabsTrigger value="sent" className="data-[state=active]:bg-zion-purple/20">
                      Sent
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Message List */}
                <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => handleMessageClick(message)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedMessage?.id === message.id
                          ? 'bg-zion-purple/20 border border-zion-purple/40'
                          : 'bg-zion-blue-light/10 hover:bg-zion-blue-light/20'
                      } ${!message.isRead ? 'border-l-4 border-l-zion-cyan' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={message.from.avatar} />
                          <AvatarFallback className="bg-zion-purple text-white">
                            {message.from.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium ${
                                message.isRead ? 'text-zion-slate-light' : 'text-white'
                              }`}>
                                {message.from.name}
                              </span>
                              <Badge 
                                variant="outline" 
                                size="sm" 
                                className={getPriorityColor(message.priority)}
                              >
                                {message.priority}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStarToggle(message.id);
                                }}
                                className={`p-1 h-6 w-6 ${
                                  message.isStarred ? 'text-yellow-400' : 'text-zion-slate-light'
                                }`}
                              >
                                <Star className="w-4 h-4" />
                              </Button>
                              <span className="text-xs text-zion-slate-light">
                                {message.timestamp}
                              </span>
                            </div>
                          </div>
                          
                          <div className={`text-sm font-medium mb-1 ${
                            message.isRead ? 'text-zion-slate-light' : 'text-white'
                          }`}>
                            {message.subject}
                          </div>
                          
                          <div className="text-xs text-zion-slate-light line-clamp-2">
                            {message.preview}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {filteredMessages.length === 0 && (
                    <div className="text-center py-8 text-zion-slate-light">
                      <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No messages found</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Message Content */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={selectedMessage.from.avatar} />
                          <AvatarFallback className="bg-zion-purple text-white">
                            {selectedMessage.from.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-white text-xl">
                            {selectedMessage.subject}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {selectedMessage.from.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {selectedMessage.from.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {selectedMessage.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                        <Reply className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                      <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                        <Forward className="w-4 h-4 mr-2" />
                        Forward
                      </Button>
                      <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-zion-slate-light leading-relaxed">
                      {selectedMessage.preview}
                    </p>
                    <p className="text-zion-slate-light leading-relaxed mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-zion-slate-light leading-relaxed mt-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-zion-blue-light/20">
                    <div className="flex items-center gap-4">
                      <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                        <Reply className="w-4 h-4 mr-2" />
                        Reply to Message
                      </Button>
                      <Button variant="outline" className="border-zion-blue-light text-zion-slate-light">
                        <Send className="w-4 h-4 mr-2" />
                        Mark as Read
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <MessageCircle className="w-16 h-16 text-zion-slate-light mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-white mb-2">Select a Message</h3>
                  <p className="text-zion-slate-light text-center">
                    Choose a message from the inbox to read and respond
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}