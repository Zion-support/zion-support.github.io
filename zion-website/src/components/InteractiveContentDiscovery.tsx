'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Icons removed to avoid dependency issues in this environment

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper';
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  featured: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

function InteractiveContentDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '11',
      title: 'Real-time AI Agents 2025: Observability, Guardrails, and SLOs',
      description: 'Blueprint for running real-time agents in production with telemetry, tracing, safety guardrails, and SLOs.',
      href: '/blog/ai-2025-realtime-agents-observability',
      type: 'blog',
      category: 'Observability',
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      tags: ['Agents', 'Observability', 'Tracing', 'SLOs', 'Safety'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '0',
      title: 'Edge AI Agents 2025: Running Autonomous Agents in Production',
      description: 'A practical guide to deploying and operating autonomous AI agents at the edge with strong guardrails and observability.',
      href: '/blog/ai-2025-edge-agents-in-production',
      type: 'blog',
      category: 'Edge AI',
      readTime: '21 min read',
      date: 'Sep 12, 2025',
      tags: ['Edge AI', 'Agents', 'Observability', 'Safety'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production-Ready Implementation Guide',
      description: 'Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      category: 'Advanced AI',
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      tags: ['RAG', 'AI Implementation', 'Production Systems', 'Vector Databases'],
      featured: true,
      difficulty: 'advanced'
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025: Vision, Voice, and Text Integration',
      description: 'Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      category: 'Multimodal AI',
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      tags: ['Multimodal AI', 'Computer Vision', 'Speech Recognition', 'NLP'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025: The Next Frontier of AI',
      description: 'Discover how quantum computing is revolutionizing machine learning, enabling exponential speedups in optimization, pattern recognition, and complex problem solving.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      tags: ['Quantum Computing', 'Machine Learning', 'Optimization', 'Quantum Algorithms'],
      featured: true,
      difficulty: 'advanced'
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing Revolution: $200M Success Story',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M in cost savings and 300% productivity gains through AI-powered autonomous manufacturing systems.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      category: 'Case Study',
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      tags: ['Manufacturing', 'Automation', 'Cost Savings', 'Productivity'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '5',
      title: 'Building Scalable AI Infrastructure: A Complete Guide',
      description: 'Learn how to design and implement AI infrastructure that scales with your business needs, from data pipelines to model deployment.',
      href: '/blog/scalable-ai-infrastructure',
      type: 'blog',
      category: 'AI Infrastructure',
      readTime: '20 min read',
      date: 'Jan 25, 2025',
      tags: ['Infrastructure', 'Scalability', 'DevOps', 'Cloud Computing'],
      featured: false,
      difficulty: 'intermediate'
    },
    {
      id: '6',
      title: 'Enterprise AI Security: Best Practices and Implementation',
      description: 'Comprehensive guide to securing AI systems in enterprise environments, covering data protection, model security, and compliance.',
      href: '/blog/enterprise-ai-security',
      type: 'blog',
      category: 'AI Security',
      readTime: '18 min read',
      date: 'Jan 22, 2025',
      tags: ['Security', 'Enterprise', 'Compliance', 'Data Protection'],
      featured: false,
      difficulty: 'advanced'
    },
    {
      id: '7',
      title: 'AI-Powered Customer Service: 90% Satisfaction Case Study',
      description: 'How a leading e-commerce company transformed customer service with AI, achieving 90% customer satisfaction and 60% cost reduction.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      category: 'Case Study',
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      tags: ['Customer Service', 'E-commerce', 'Satisfaction', 'Cost Reduction'],
      featured: false,
      difficulty: 'beginner'
    },
    {
      id: '8',
      title: 'The Future of AI in Healthcare: Trends and Opportunities',
      description: 'Explore the latest trends in AI healthcare applications, from diagnostic tools to personalized medicine and drug discovery.',
      href: '/blog/ai-healthcare-trends-2025',
      type: 'blog',
      category: 'AI Healthcare',
      readTime: '22 min read',
      date: 'Jan 18, 2025',
      tags: ['Healthcare', 'Medical AI', 'Diagnostics', 'Personalized Medicine'],
      featured: false,
      difficulty: 'intermediate'
    }
  ];

  const categories = ['all', 'Observability', 'Advanced AI', 'Multimodal AI', 'Quantum AI', 'AI Infrastructure', 'AI Security', 'AI Healthcare', 'Case Study'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const types = ['all', 'blog', 'case-study', 'webinar', 'whitepaper'];

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = contentItems;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by difficulty
      if (selectedDifficulty !== 'all') {
        filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
      }

      // Filter by type
      if (selectedType !== 'all') {
        filtered = filtered.filter(item => item.type === selectedType);
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedType]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'whitepaper': return '📄';
      default: return '📄';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery tool to find exactly what you're looking for. Filter by topic, difficulty, content type, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔎</span>
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                    setSelectedType('all');
                  }}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching content...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
                </h3>
                {filteredContent.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">✨</span>
                    Powered by AI Discovery
                  </div>
                )}
              </div>

              {filteredContent.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <div className="text-5xl text-gray-400 mx-auto mb-4">🔎</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                      setSelectedType('all');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{getTypeIcon(item.type)}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                          </div>
                          {item.featured && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{item.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <span className="mr-1">⏱️</span>
                              {item.readTime}
                            </div>
                            <div className="flex items-center">
                              <span className="mr-1">📊</span>
                              {item.category}
                            </div>
                          </div>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team creates custom content tailored to your specific needs. Let us know what topics you'd like to explore, and we'll create comprehensive resources just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Custom Content
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery;