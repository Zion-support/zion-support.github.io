import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, Users, Zap, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1 (555) 123-4567",
      availability: "24/7",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us an email and we'll respond quickly",
      contact: "support@zion.com",
      availability: "24/7",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Business Hours",
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
        <title>Support - Zion Website</title>
        <meta name="description" content="Get help and support for your AI solutions. Find answers, contact support, and access resources." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help and support for your AI solutions. Find answers, contact support, and access resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {channel.icon}
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

          <div className="space-y-4">
            {searchResults.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
