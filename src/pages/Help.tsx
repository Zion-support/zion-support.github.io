import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Users, 
  Settings,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Heart,
  Globe,
  ShoppingCart,
  Star,
  Building,
  Zap
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Quick Start Guide', href: '/help/quick-start', description: 'Get up and running in minutes' },
        { name: 'Account Setup', href: '/help/account-setup', description: 'Configure your account and preferences' },
        { name: 'First Project', href: '/help/first-project', description: 'Create your first project with Zion Tech' },
        { name: 'API Keys', href: '/help/api-keys', description: 'Generate and manage your API keys' }
      ]
    },
    {
      title: 'Core Services',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'AI Business Intelligence', href: '/help/ai-business-intelligence', description: 'AI-powered analytics and insights' },
        { name: 'Cloud DevOps', href: '/help/cloud-devops', description: 'Infrastructure and automation' },
        { name: 'Cybersecurity', href: '/help/cybersecurity', description: 'Security and compliance solutions' },
        { name: 'Digital Twin', href: '/help/digital-twin', description: 'Simulation and monitoring' },
        { name: 'IoT Edge', href: '/help/iot-edge', description: 'IoT and edge computing' },
        { name: 'Micro SaaS', href: '/help/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      title: 'Innovative Solutions',
      icon: Star,
      color: 'from-purple-600 to-pink-600',
      items: [
        { name: 'Innovative Services 2025', href: '/help/innovative-2025', description: 'Latest cutting-edge solutions' },
        { name: 'Revolutionary Services 2030', href: '/help/revolutionary-2030', description: 'Future-ready solutions' },
        { name: 'AI Sales Automation', href: '/help/ai-sales', description: 'Complete sales automation suite' },
        { name: 'AI Customer Support', href: '/help/ai-support', description: 'Intelligent support platform' }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      color: 'from-orange-600 to-red-600',
      items: [
        { name: 'Contact Support', href: '/contact', description: 'Get help from our team' },
        { name: 'Live Chat', href: '/help/live-chat', description: 'Chat with support agents' },
        { name: 'Community Forum', href: '/help/community', description: 'Connect with other users' },
        { name: 'Training Resources', href: '/help/training', description: 'Learn from our experts' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to integrate AI services into your workflow', category: 'AI Services', views: '2.3k' },
    { title: 'Setting up automated security monitoring', category: 'Cybersecurity', views: '1.8k' },
    { title: 'Optimizing cloud costs with FinOps', category: 'Cloud DevOps', views: '1.5k' },
    { title: 'Building your first digital twin', category: 'Digital Twin', views: '1.2k' },
    { title: 'Getting started with Micro SaaS solutions', category: 'Micro SaaS', views: '1.1k' }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      icon: MessageCircle,
      description: 'Chat with our support team',
      response: 'Usually responds in 2 minutes',
      href: '/help/live-chat'
    },
    {
      name: 'Email Support',
      icon: Mail,
      description: 'Send us a detailed message',
      response: 'Usually responds in 4 hours',
      href: '/contact'
    },
    {
      name: 'Phone Support',
      icon: Phone,
      description: 'Speak with our experts',
      response: 'Available 9 AM - 6 PM EST',
      href: 'tel:+13024640950'
    },
    {
      name: 'Community Forum',
      icon: Users,
      description: 'Get help from the community',
      response: 'Community-driven support',
      href: '/help/community'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      // console.log removed for production
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            Help Center{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Find answers to your questions and get the support you need.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Getting Started
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Learn how to get started with our services and solutions.
            </p>{" "}
            <span className="text-sm text-blue-600">Read Guide</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Technical Support
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Get help with technical issues and troubleshooting.
            </p>{" "}
            <span className="text-sm text-blue-600">Contact Support</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Documentation
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Browse our comprehensive documentation and guides.
            </p>{" "}
            <span className="text-sm text-blue-600">View Docs</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Help;
