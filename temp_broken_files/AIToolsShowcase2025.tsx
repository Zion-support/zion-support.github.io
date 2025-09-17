<<<<<<< HEAD:temp_broken_files/AIToolsShowcase2025.tsx
"use client";
'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain
  Zap
  Code
  BarChart3
  Shield
  Search
  MessageSquare
  Image
  Video
  FileText,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles
} from 'lucide-react';
interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  pricing: string;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}
const aiTools: AITool[] = [
  {
    id: '1',
    name: 'AI Code Assistant Pro',
    description: 'Advanced AI-powered code generation and debugging tool with real-time suggestions and error detection.',
    category: 'Development',
    icon: <Code className="w-8 h-8" />,
    features: ['Code 'Generation', 'Bug 'Detection', 'Performance 'Optimization', 'Documentation'],
    pricing: '$29/month',
    rating: 4.9,
    isNew: true,
    isPopular: true
  },
  {
    id: '2',
    name: 'Neural Analytics Dashboard',
    description: 'Comprehensive business intelligence platform powered by advanced neural networks.',
    category: 'Analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Predictive 'Analytics', 'Real-time 'Insights', 'Custom 'Dashboards', 'API Integration'],
    pricing: '$49/month',
    rating: 4.8,
    isPopular: true
  },
  {
    id: '3',
    name: 'Quantum Security Suite',
    description: 'Next-generation cybersecurity solution using quantum-resistant encryption algorithms.',
    category: 'Security',
    icon: <Shield className="w-8 h-8" />,
    features: ['Quantum 'Encryption', 'Threat 'Detection', 'Zero Trust 'Architecture', 'Compliance'],
    pricing: '$99/month',
    rating: 4.9,
    isNew: true
  },
  {
    id: '4',
    name: 'AI Content Generator',
    description: 'Multi-modal content creation tool for textimagesand video using cutting-edge AI models.',
    category: 'Content',
    icon: <FileText className="w-8 h-8" />,
    features: ['Text 'Generation', 'Image 'Creation', 'Video 'Editing', 'SEO Optimization'],
    pricing: '$39/month',
    rating: 4.7
  },
  {
    id: '5',
    name: 'Smart Search Engine',
    description: 'Semantic search solution with natural language processing and contextual understanding.',
    category: 'Search',
    icon: <Search className="w-8 h-8" />,
    features: ['Natural 'Language', 'Contextual 'Results', 'Voice 'Search', 'Multi-language'],
    pricing: '$19/month',
    rating: 4.6
  },
  {
    id: '6',
    name: 'AI Chat Assistant',
    description: 'Advanced conversational AI with emotional intelligence and multi-turn dialogue capabilities.',
    category: 'Communication',
    icon: <MessageSquare className="w-8 h-8" />,
    features: ['Emotional 'AI', 'Multi-'language', 'Voice 'Integration', 'Custom Training'],
    pricing: '$25/month',
    rating: 4.8,
    isPopular: true
  }
];
const categories = [', 'All', 'Development', 'Analytics', 'Security', 'Content', 'Search'Communication'];
};



export default function AIToolsShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [hoveredToolsetHoveredTool] = useState<string | null>(null);
  const [isVisiblesetIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }[]);
  const filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            New AI Tools 2025
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Tools
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transforming Industries
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI tools that are revolutionizing how we workcreateand innovate. 
            From development to analyticsecurity to content creation.
<<<<<<< HEAD:temp_broken_files/AIToolsShowcase2025.tsx
=======
          </p>
        </div>

>>>>>>> origin/merge-new-content-1757989975:src/components/AIToolsShowcase2025.tsx
        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
          ))}
<<<<<<< HEAD:temp_broken_files/AIToolsShowcase2025.tsx
=======
        </div>

>>>>>>> origin/merge-new-content-1757989975:src/components/AIToolsShowcase2025.tsx
        {/* Tools Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div>
            {filteredTools.map((toolindex) => (
              <div
                key={tool.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  {tool.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      NEW
                  )}
                  {tool.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      POPULAR
                  )}
                {/* Icon */}
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {tool.name}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tool.description}
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {tool.features.map((featureidx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                  ))}
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tool.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  <span className="text-sm text-gray-400">{tool.rating}</span>
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 group">
                    Try Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                {/* Hover Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    opacity: hoveredTool === tool.id ? 1 : 0
                  }}
                />
<<<<<<< HEAD:temp_broken_files/AIToolsShowcase2025.tsx
            ))}
=======
              </div>
            ))}
          </div>
        </div>

>>>>>>> origin/merge-new-content-1757989975:src/components/AIToolsShowcase2025.tsx
        {/* CTA Section */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our AI tools to boost productivity
              enhance creativityand drive innovation.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Start Free Trial
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                View All Tools
<<<<<<< HEAD:temp_broken_files/AIToolsShowcase2025.tsx
  );



export default AIToolsShowcase2025;
=======
import React from "react";

const function AIToolsShowcase2025() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function AIToolsShowcase2025() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
=======
              </button>
            </div>
          </div>
>>>>>>> origin/merge-new-content-1757989975:src/components/AIToolsShowcase2025.tsx
        </div>
      </div>
    </div>
  );
};

export default function AIToolsShowcase2025() {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/AIToolsShowcase2025.tsx
