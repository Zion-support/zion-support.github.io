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
  featured: boolean;
  readTime: string;
  date: string;
  category: string;
}

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const NewContentPromoBanner = ({
  variant = 'default',
  maxItems = 4,
  autoRotate = true,
  rotationInterval = 5000
}: NewContentPromoBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: '13',
      title: 'Real-Time Agents 2025: Observability, Safety, and SLAs',
      description: 'Blueprints for production agents: telemetry, guardrails, incident response, and reliability engineering.',
      href: '/blog/ai-2025-realtime-agents-observability',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'Agents'
    },
    {
      id: '13',
      title: 'Operationalizing AI Governance 2025',
      description: 'Turn policies into practice with developer-first guardrails, risk-tiering, and policy-as-code.',
      href: '/blog/ai-2025-operationalizing-ai-governance',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Governance'
    },
    {
      id: '9',
      title: 'Generative AI Evaluation 2025: Reliable Metrics and Methods',
      description: 'Practical evaluation patterns for GenAI systems: offline metrics, human review, and production feedback loops.',
      href: '/blog/ai-2025-genai-evaluation',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Evaluation'
    },
    {
      id: '10',
      title: 'AI Governance 2025: Best Practices for Responsible AI',
      description: 'A concise playbook for practical AI governance across policy, risk, compliance, and engineering.',
      href: '/blog/ai-2025-ai-governance-best-practices',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Governance'
    },
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production Guide',
      description: 'Master production-ready RAG systems with advanced patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Advanced AI'
    },
    {
      id: '11',
      title: 'Trust & Safety Guardrails 2025: Practical Patterns',
      description: 'Design, evaluate, and enforce AI trust & safety guardrails with policy-as-code and runtime controls.',
      href: '/blog/ai-2025-trust-safety-guardrails',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'AI Safety'
    },
    {
      id: '12',
      title: 'Financial Services Copilots: 42% Faster Handling',
      description: 'Case study: Tier‑1 bank launched compliant AI copilots across ops, cutting handling time by 42%.',
      href: '/case-studies/ai-2025-financial-services-copilots',
      type: 'case-study',
      featured: true,
      readTime: '12 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '9',
      title: 'Foundation Models Cost Optimization 2025',
      description: 'Cut inference and training costs with quantization, distillation, caching, and smart routing in 2025 stacks.',
      href: '/blog/ai-2025-foundation-models-cost-optimization',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Optimization'
    },
    {
      id: '10',
      title: 'AI-Powered Customer Service: 90% Satisfaction',
      description: 'Case study: 90% CSAT and 60% cost reduction through AI assistants, deflection, and smart escalation.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      featured: true,
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      category: 'Case Study'
    },
    {
      id: '0',
      title: 'Edge AI Agents 2025: Running Autonomous Agents in Production',
      description: 'Architectures, safety, and observability for deploying autonomous agents on edge devices with low latency and high reliability.',
      href: '/blog/ai-2025-edge-agents-in-production',
      type: 'blog',
      featured: true,
      readTime: '21 min read',
      date: 'Sep 05, 2025',
      category: 'Edge AI'
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025',
      description: 'Explore how vision, voice, and text integration is revolutionizing human-computer interaction and AI applications.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      featured: true,
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      category: 'Multimodal AI'
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Discover quantum computing breakthroughs in machine learning, enabling exponential speedups for complex problems.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      featured: true,
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      category: 'Quantum AI'
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings and 300% productivity gains.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      featured: true,
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      category: 'Case Study'
    },
    {
      id: '5',
      title: 'Building Scalable AI Infrastructure',
      description: 'Learn how to design and implement AI infrastructure that scales with your business needs.',
      href: '/blog/scalable-ai-infrastructure',
      type: 'blog',
      featured: false,
      readTime: '20 min read',
      date: 'Jan 25, 2025',
      category: 'AI Infrastructure'
    },
    {
      id: '6',
      title: 'Enterprise AI Security Best Practices',
      description: 'Comprehensive guide to securing AI systems in enterprise environments.',
      href: '/blog/enterprise-ai-security',
      type: 'blog',
      featured: false,
      readTime: '18 min read',
      date: 'Jan 22, 2025',
      category: 'AI Security'
    },
    {
      id: '7',
      title: 'AI Customer Service: 90% Satisfaction',
      description: 'How an e-commerce company achieved 90% customer satisfaction with AI-powered service.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      featured: false,
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      category: 'Case Study'
    },
    {
      id: '8',
      title: 'AI in Healthcare: Trends and Opportunities',
      description: 'Explore the latest trends in AI healthcare applications and personalized medicine.',
      href: '/blog/ai-healthcare-trends-2025',
      type: 'blog',
      featured: false,
      readTime: '22 min read',
      date: 'Jan 18, 2025',
      category: 'AI Healthcare'
    }
  ];

  const displayedContent = variant === 'featured' 
    ? newContent.filter(item => item.featured).slice(0, maxItems)
    : newContent.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered && displayedContent.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayedContent.length, rotationInterval, currentIndex]);

  const nextSlide = () => {
    const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? displayedContent.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'whitepaper': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'minimal') {
    return (
      <section className="py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Content</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedContent.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (displayedContent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {variant === 'featured' ? 'Featured Content' : 'Latest Content'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {variant === 'featured' 
              ? 'Discover our most popular and impactful content, handpicked by our experts.'
              : 'Stay ahead with our latest insights, case studies, and technical guides.'
            }
          </p>
        </div>

        <div className="relative">
          {/* Main Content Display */}
          <div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-96">
              {displayedContent.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                    <div className="h-full flex items-center">
                      <div className="w-1/2 p-12">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{getTypeIcon(item.type)}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                            {item.type.replace('-', ' ').toUpperCase()}
                          </span>
                          {item.featured && (
                            <span className="ml-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-indigo-100 mb-6 line-clamp-3">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-indigo-200 mb-6">
                          <div className="flex items-center">
                            <span className="mr-2">⏱️</span>
                            {item.readTime}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🏷️</span>
                            {item.category}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        
                        <Link
                          href={item.href}
                          className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                        >
                          Read More
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                      
                      <div className="w-1/2 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <div className="text-8xl opacity-20">
                          {getTypeIcon(item.type)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            {displayedContent.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-6">
                <div className="flex justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-lg">◀</span>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-lg">▶</span>
                  </button>
                </div>
              </div>
            )}

            {/* Dots Indicator */}
            {displayedContent.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {displayedContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {item.readTime}
                    </div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromoBanner;