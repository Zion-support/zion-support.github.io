import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  date: string;
  readingTime: string;
  href: string;
  featured?: boolean;
  tags: string[];
}

const ContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-automation-revolution-2025',
      title: 'The AI Automation Revolution: How 2025 is Transforming Business Operations',
      description: 'Discover how AI automation is revolutionizing business operations in 2025, with real-world case studies and implementation strategies.',
      category: 'AI & Automation',
      type: 'blog',
      date: '2025-01-17',
      readingTime: '8 min read',
      href: '/blog/ai-automation-revolution-2025',
      featured: true,
      tags: ['AI', 'Automation', 'Business Transformation', '2025']
    },
    {
      id: 'quantum-computing-business-guide-2025',
      title: 'Quantum Computing for Business: A Complete Implementation Guide 2025',
      description: 'Comprehensive guide to implementing quantum computing solutions in business operations, with practical examples and ROI analysis.',
      category: 'Quantum Computing',
      type: 'whitepaper',
      date: '2025-01-17',
      readingTime: '12 min read',
      href: '/resources/quantum-computing-business-guide-2025',
      featured: true,
      tags: ['Quantum Computing', 'Business Strategy', 'Technology Implementation', '2025']
    },
    {
      id: 'global-enterprise-ai-transformation-2025',
      title: 'Global Enterprise AI Transformation: $2.5 Billion ROI Success Story',
      description: 'How a Fortune 500 company achieved $2.5 billion in ROI through comprehensive AI transformation, reducing costs by 60% while increasing revenue by 40%.',
      category: 'Case Study',
      type: 'case-study',
      date: '2025-01-17',
      readingTime: '10 min read',
      href: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      featured: true,
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Success Story', '2025']
    }
  ];

  const categories = ['all', 'AI & Automation', 'Quantum Computing', 'Case Study', 'Resources', 'Blog'];
  const types = ['all', 'blog', 'whitepaper', 'case-study', 'guide', 'tutorial'];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'whitepaper': return '📄';
      case 'case-study': return '📊';
      case 'guide': return '📖';
      case 'tutorial': return '🎓';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'whitepaper': return 'bg-purple-500';
      case 'case-study': return 'bg-green-500';
      case 'guide': return 'bg-orange-500';
      case 'tutorial': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
      <Head>
        <title>Content Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive library of AI, quantum computing, and technology resources, case studies, and insights." />
        <meta property="og:title" content="Content Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive library of AI, quantum computing, and technology resources." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Discover cutting-edge insights, case studies, and resources
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Explore our comprehensive library of AI, quantum computing, and technology resources. 
              From implementation guides to success stories, find everything you need to stay ahead in the digital transformation era.
            </p>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Content</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group bg-slate-900/60 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ')}
                      </span>
                      {item.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{item.date}</span>
                      <span>{item.readingTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex gap-2">
                <label className="text-sm font-semibold text-slate-300 mr-2">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <label className="text-sm font-semibold text-slate-300 mr-2">Type:</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-white"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl">{getTypeIcon(item.type)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ')}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{item.date}</span>
                      <span>{item.readingTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Need Custom Content or Consulting?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our AI-powered content generation and expert consulting services can help you create 
              tailored resources for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors"
              >
                Get Custom Content
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContentShowcase;