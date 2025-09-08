import React, { useState } from 'react';
import { BookOpen, Code, FileText, Video, Download, Search, ChevronRight, ExternalLink, Star, Clock, Users, Bookmark} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: <BookOpen className="w-5 h-5" />, count: 0 },
    { id: 'getting-started', name: 'Getting Started', icon: <BookOpen className="w-5 h-5" />, count: 12 },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" />, count: 28 },
    { id: 'guides', name: 'User Guides', icon: <FileText className="w-5 h-5" />, count: 45 },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-5 h-5" />, count: 23 },
    { id: 'examples', name: 'Code Examples', icon: <Code className="w-5 h-5" />, count: 67 },
    { id: 'reference', name: 'Reference', icon: <FileText className="w-5 h-5" />, count: 34 }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'recently-updated', label: 'Recently Updated' }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and first project',
      category: 'getting-started',
      type: 'guide',
      difficulty: 'beginner',
      readTime: '15 min',
      lastUpdated: '2025-01-20',
      views: 15420,
      rating: 4.9,
      featured: true,
      tags: ['onboarding', 'setup', 'first-steps']
    },
    {
      id: 2,
      title: 'API Authentication Guide',
      description: 'Step-by-step guide to API key management and authentication',
      category: 'api',
      type: 'guide',
      difficulty: 'intermediate',
      readTime: '25 min',
      lastUpdated: '2025-01-18',
      views: 8920,
      rating: 4.8,
      featured: true,
      tags: ['api', 'authentication', 'security']
    },
    {
      id: 3,
      title: 'AI Services Integration Tutorial',
      description: 'Learn how to integrate our AI services into your applications',
      category: 'tutorials',
      type: 'tutorial',
      difficulty: 'advanced',
      readTime: '45 min',
      lastUpdated: '2025-01-15',
      views: 6540,
      rating: 4.7,
      featured: false,
      tags: ['ai', 'integration', 'tutorial']
    },
    {
      id: 4,
      title: 'REST API Reference',
      description: 'Complete API reference with endpoints, parameters, and examples',
      category: 'api',
      type: 'reference',
      difficulty: 'intermediate',
      readTime: '60 min',
      lastUpdated: '2025-01-12',
      views: 12340,
      rating: 4.9,
      featured: true,
      tags: ['api', 'reference', 'endpoints']
    },
    {
      id: 5,
      title: 'Micro SaaS Platform Setup',
      description: 'Comprehensive guide to setting up your micro SaaS platform',
      category: 'guides',
      type: 'guide',
      difficulty: 'intermediate',
      readTime: '35 min',
      lastUpdated: '2025-01-10',
      views: 7890,
      rating: 4.6,
      featured: false,
      tags: ['micro-saas', 'platform', 'setup']
    },
    {
      id: 6,
      title: 'Python SDK Examples',
      description: 'Code examples and best practices for using our Python SDK',
      category: 'examples',
      type: 'examples',
      difficulty: 'intermediate',
      readTime: '30 min',
      lastUpdated: '2025-01-08',
      views: 5670,
      rating: 4.5,
      featured: false,
      tags: ['python', 'sdk', 'examples']
    }
  ];

  const featuredResources = [
    {
      title: 'Zion Tech Group Developer Portal',
      description: 'Access our comprehensive developer resources and tools',
      type: 'portal',
      link: 'https://developers.ziontechgroup.com',
      featured: true
    },
    {
      title: 'API Playground',
      description: 'Interactive API testing and exploration environment',
      type: 'tool',
      link: '/api-playground',
      featured: true
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      type: 'community',
      link: '/community',
      featured: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return 'Unknown';
    }
  };

  const filteredItems = documentationItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Update counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = documentationItems.length;
    } else {
      cat.count = documentationItems.filter(item => item.category === cat.id).length;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <BookOpen className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Documentation coming soon. We're building comprehensive guides and references.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Documentation;
