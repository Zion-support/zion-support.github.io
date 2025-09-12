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
      id: '54',
      title: 'Knowledge Graph RAG in 2025: Hybrid Retrieval in Production',
      description: 'Hybrid retrieval that fuses vector search with knowledge graphs for factual, controllable RAG.',
      href: '/blog/ai-2025-knowledge-graph-rag',
      type: 'blog',
      category: 'RAG',
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      tags: ['RAG', 'Knowledge Graph', 'Entity Linking', 'Hybrid Retrieval'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '55',
      title: 'E2E Testing for AI Agents in 2025: Reliability at Scale',
      description: 'Task suites, tool correctness, safety policies, and observability for agent reliability.',
      href: '/blog/ai-2025-e2e-agent-testing',
      type: 'blog',
      category: 'Evaluation',
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      tags: ['Agents', 'Testing', 'Evaluation', 'CI'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '50',
      title: 'Machine Learning Model Optimization: Advanced Techniques',
      description: 'Hyperparameter tuning, compression, quantization, and serving patterns for faster, cheaper ML.',
      href: '/blog/ml-model-optimization',
      type: 'blog',
      category: 'Machine Learning',
      readTime: '24 min read',
      date: 'Sep 12, 2025',
      tags: ['Optimization', 'Quantization', 'Pruning', 'Distillation'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '51',
      title: 'AI Ethics and Responsible Development: A Framework',
      description: 'Practical framework for fairness, transparency, and accountability without slowing delivery.',
      href: '/blog/ai-ethics-framework',
      type: 'blog',
      category: 'AI Ethics',
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      tags: ['Ethics', 'Fairness', 'Transparency', 'Governance'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '52',
      title: 'Edge AI Deployment: Bringing Intelligence to the Edge',
      description: 'Deploy AI at the edge with optimized runtimes, secure updates, and hybrid routing.',
      href: '/blog/edge-ai-deployment',
      type: 'blog',
      category: 'Edge Computing',
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      tags: ['Edge', 'ONNX', 'TensorRT', 'IoT'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '53',
      title: 'AI in Financial Services: Risk Management Case Study',
      description: '40% fraud detection improvement and 25% fewer false positives with AI‑powered risk.',
      href: '/case-studies/ai-financial-risk-management',
      type: 'case-study',
      category: 'Case Study',
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      tags: ['Fraud', 'Graph', 'Risk', 'Financial Services'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '40',
      title: 'AI 2026 Outlook: Enterprise Agent Roadmap',
      description: 'Where enterprise AI agents are headed in 2026: architectures, SLAs, governance, and edge deployments.',
      href: '/blog/ai-2026-enterprise-agent-roadmap',
      type: 'blog',
      category: 'Strategy',
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      tags: ['Agents', 'Strategy', 'Governance', 'Edge'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '31',
      title: 'Agentic Vendor Management 2025: From Intake to Renewal',
      description: 'Automate diligence, negotiations, and renewals with agentic workflows and policy‑as‑code.',
      href: '/blog/ai-2025-agentic-vendor-management',
      type: 'blog',
      category: 'Operations',
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      tags: ['Operations', 'Compliance', 'Agents', 'Contracts'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '32',
      title: 'Agentic Vendor Management: 32% Faster Cycle Time',
      description: 'Case study: Automated intake, risk, and negotiation cut cycle times and exceptions.',
      href: '/case-studies/ai-2025-vendor-management-impact',
      type: 'case-study',
      category: 'Case Study',
      readTime: '9 min read',
      date: 'Sep 12, 2025',
      tags: ['Operations', 'Compliance', 'Policy-as-code'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '24',
      title: 'AI Supply Chain Resilience 2025: Forecasting, Orchestration, and Risk Controls',
      description: 'Resilient supply chains with AI: early signals, dynamic safety stock, and agent workflows.',
      href: '/blog/ai-2025-ai-supply-chain-resilience',
      type: 'blog',
      category: 'Advanced AI',
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      tags: ['Supply Chain', 'Forecasting', 'Optimization', 'Agents'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '25',
      title: 'AI Supply Chain Orchestration: 27% Expedited Costs Reduced, +6 pts OTIF',
      description: 'Case study: forecasting + optimization + exception agents reduced costs and boosted service.',
      href: '/case-studies/ai-2025-supply-chain-orchestration-impact',
      type: 'case-study',
      category: 'Case Study',
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      tags: ['Supply Chain', 'Optimization', 'Agents', 'OTIF'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '19',
      title: 'Data Quality for RAG in Production (2025)',
      description: 'Data curation, chunking, hybrid search, and evaluations to make RAG reliable and cost‑efficient.',
      href: '/blog/ai-2025-data-quality-rag',
      type: 'blog',
      category: 'RAG',
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      tags: ['RAG', 'Data Quality', 'Evaluations', 'Observability'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '21',
      title: 'AI Agents for IT Operations 2025: Incident Response and SLO Automation',
      description: 'AIOps agents automate triage, remediation, and SLO-aware throttling with policy-as-code.',
      href: '/blog/ai-2025-agents-for-it-ops',
      type: 'blog',
      category: 'Observability',
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      tags: ['AIOps', 'SRE', 'Runbooks', 'SLO'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '22',
      title: 'IT Ops Automation with AI Agents: 41% MTTR Reduction',
      description: 'Case study: Automated runbooks and intelligent triage reduced MTTR by 41% at a SaaS platform.',
      href: '/case-studies/ai-2025-it-ops-automation-impact',
      type: 'case-study',
      category: 'Case Study',
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      tags: ['AIOps', 'SRE', 'MTTR', 'Automation'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '13',
      title: 'LLM Observability 2025: Metrics, Traces, and Guardrails',
      description: 'End-to-end LLM observability: metrics, traces, evaluations, and runtime guardrails for reliable AI.',
      href: '/blog/llm-observability-2025',
      type: 'blog',
      category: 'Observability',
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      tags: ['Observability', 'Tracing', 'Evaluations', 'Guardrails'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '14',
      title: 'AI Retail Demand Forecasting: 32% Stockouts Reduction',
      description: 'Global retailer cut stockouts by 32% and waste by 18% with AI-driven forecasting.',
      href: '/case-studies/ai-2025-retail-demand-forecasting',
      type: 'case-study',
      category: 'Case Study',
      readTime: '12 min read',
      date: 'Sep 12, 2025',
      tags: ['Retail', 'Forecasting', 'Time Series', 'Inventory'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '12',
      title: 'Operationalizing AI Governance 2025',
      description: 'Practical frameworks to embed responsible AI into engineering, product, and operations without slowing delivery.',
      href: '/blog/ai-2025-operationalizing-ai-governance',
      type: 'blog',
      category: 'Governance',
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      tags: ['Governance', 'Risk', 'Compliance', 'Policy-as-code'],
      featured: true,
      difficulty: 'beginner'
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
      id: '13',
      title: 'Reinforcement Learning in Production: 2025 Patterns',
      description: 'Offline RL, simulators, safety constraints, and guardrails to ship RL safely.',
      href: '/blog/ai-2025-reinforcement-learning-production-patterns',
      type: 'blog',
      category: 'Advanced AI',
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      tags: ['Reinforcement Learning', 'Safety', 'Offline RL', 'Simulators'],
      featured: true,
      difficulty: 'advanced'
    },
    {
      id: '14',
      title: 'Evaluating LLM Agents in 2025: Methods, Metrics, and Tooling',
      description: 'Task success, tool correctness, policy adherence, and automated pipelines for agent eval.',
      href: '/blog/ai-2025-evaluation-llm-agents',
      type: 'blog',
      category: 'AI Safety',
      readTime: '22 min read',
      date: 'Sep 12, 2025',
      tags: ['Evaluation', 'Agents', 'Guardrails', 'Red Teaming'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '11',
      title: 'Trust & Safety Guardrails 2025: Practical Patterns',
      description: 'Practical patterns to design, evaluate, and enforce AI trust & safety guardrails across applications in 2025.',
      href: '/blog/ai-2025-trust-safety-guardrails',
      type: 'blog',
      category: 'AI Safety',
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      tags: ['AI Safety', 'Guardrails', 'Evaluation'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '12',
      title: 'Financial Services Copilots: 42% Faster Handling',
      description: 'Tier‑1 bank launched compliant AI copilots across ops, cutting handling time by 42% while meeting strict compliance.',
      href: '/case-studies/ai-2025-financial-services-copilots',
      type: 'case-study',
      category: 'Case Study',
      readTime: '12 min read',
      date: 'Sep 12, 2025',
      tags: ['Financial Services', 'Copilots', 'Compliance'],
      featured: true,
      difficulty: 'beginner'
    },
    {
      id: '9',
      title: 'Foundation Models Cost Optimization 2025',
      description: 'Reduce inference and training spend using quantization, distillation, caching, and dynamic routing.',
      href: '/blog/ai-2025-foundation-models-cost-optimization',
      type: 'blog',
      category: 'Optimization',
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      tags: ['Optimization', 'Inference', 'Quantization', 'Distillation'],
      featured: true,
      difficulty: 'intermediate'
    },
    {
      id: '10',
      title: 'AI-Powered Customer Service: 90% Satisfaction Case Study',
      description: 'Deflection flows, AI assistants, and smart escalation delivered 90% CSAT and a 60% cost reduction.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      category: 'Case Study',
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      tags: ['Customer Service', 'Automation', 'CSAT'],
      featured: true,
      difficulty: 'beginner'
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