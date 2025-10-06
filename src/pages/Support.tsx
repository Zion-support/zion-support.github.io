import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Video,
  Users,
  Zap,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs',
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      link: '/chat',
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community',
    },
    {
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      icon: Phone,
      link: 'tel:+1-800-123-4567',
    },
    {
      title: 'Email Support',
      description: "Send us an email and we'll respond quickly",
      icon: Mail,
      link: 'mailto:support@ziontech.com',
    },
  ];

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      questions: [
        {
          question: "What is Zion AI?",
          answer: "Zion AI is a comprehensive AI platform that helps businesses automate processes, gain insights, and scale operations using artificial intelligence.",
        },
        {
          question: "How do I get started?",
          answer: "You can get started by signing up for a free trial, scheduling a demo, or contacting our sales team for a personalized consultation.",
        },
      ],
    },
    {
      id: 'technical',
      name: 'Technical',
      questions: [
        {
          question: "What programming languages are supported?",
          answer: "We support Python, JavaScript, TypeScript, Java, C#, and Go. Our APIs are language-agnostic and work with any programming language.",
        },
        {
          question: "Is there an API available?",
          answer: "Yes, we provide comprehensive REST APIs and SDKs for all major programming languages to integrate with your existing systems.",
        },
      ],
    },
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? faqCategories.flatMap(cat => cat.questions)
    : faqCategories.find(cat => cat.id === selectedCategory)?.questions || [];

  const searchResults = filteredQuestions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta
          name='description'
          content='Get help and support for our AI solutions.'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>Support</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Get help and support for our AI solutions.
            </p>

            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  placeholder='Search for help...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {channel.description}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {channel.contact}
              </p>
              <p className="text-sm text-green-600 font-medium">
                {channel.availability}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'
              >
                <div className='flex items-center mb-4'>
                  <option.icon className='h-8 w-8 text-blue-600 mr-3' />
                  <h3 className='text-xl font-semibold'>{option.title}</h3>
                </div>
                <p className='text-gray-600 mb-6'>{option.description}</p>
                <Link
                  to={option.link}
                  className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
                >
                  Get Help <Zap className='h-4 w-4 ml-2' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
