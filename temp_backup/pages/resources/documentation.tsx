import React from 'react';
<<<<<<< HEAD
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Code, 
  Search, 
  Download, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  Zap
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const DocumentationPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and integration guides',
      icon: <Code className="w-8 h-8" />,
      features: ['REST API Reference', 'SDK Documentation', 'Code Examples', 'Integration Guides'],
      href: '/resources/api',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Developer Guides',
      description: 'Step-by-step guides for developers and engineers',
      icon: <BookOpen className="w-8 h-8" />,
      features: ['Getting Started', 'Best Practices', 'Tutorials', 'Sample Projects'],
      href: '/resources/developer-guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'User Manuals',
      description: 'User-friendly guides for end users and administrators',
      icon: <Users className="w-8 h-8" />,
      features: ['User Interface Guide', 'Administration Guide', 'Troubleshooting', 'FAQ'],
      href: '/resources/user-manuals',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed technical specifications and architecture',
      icon: <FileText className="w-8 h-8" />,
      features: ['System Architecture', 'Data Models', 'Security Specifications', 'Performance Metrics'],
      href: '/resources/technical-specs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Integration Guides',
      description: 'Guides for integrating with third-party systems',
      icon: <Zap className="w-8 h-8" />,
      features: ['Third-party Integrations', 'Webhook Setup', 'Authentication', 'Data Mapping'],
      href: '/resources/integration-guides',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Release Notes',
      description: 'Detailed information about product updates and releases',
      icon: <Clock className="w-8 h-8" />,
      features: ['Version History', 'New Features', 'Bug Fixes', 'Migration Guides'],
      href: '/resources/release-notes',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const documentationFeatures = [
    {
      title: 'Comprehensive',
      description: 'Complete coverage of all features and functionality',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Up-to-Date',
      description: 'Always current with the latest product versions',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Searchable',
      description: 'Easy to find the information you need quickly',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Downloadable',
      description: 'Available in multiple formats for offline use',
      icon: <Download className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Documentation Pages', value: '1000+', icon: <FileText className="w-6 h-6" /> },
    { label: 'Code Examples', value: '500+', icon: <Code className="w-6 h-6" /> },
    { label: 'Languages', value: '10+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Monthly Updates', value: '50+', icon: <Clock className="w-6 h-6" /> }
  ];
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>documentation | Zion Tech Group</title>
        <meta name="description" content="documentation - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">documentation</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default documentation;
