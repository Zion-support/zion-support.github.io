import React from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { FileText, Download, Calendar, User, Tag, ArrowRight, Search, Filter, BookOpen, Globe, Zap, Target, TrendingUp, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3, Link } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
      title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
      category: "Digital Transformation",
      date: "2025-01-10",
      author: "Dr. Sarah Chen",
      description: "This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
      topics: ["AI Strategy", "Digital Transformation", "Enterprise Leadership", "ROI Measurement"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "45 min read",
      pageCount: 28
    },
    {
      id: 2,
      title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
      category: "Cybersecurity",
      date: "2024-12-15",
      author: "Dr. James Wilson",
      description: "Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.",
      topics: ["Quantum Computing", "Cybersecurity", "Cryptography", "Threat Detection"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "60 min read",
      pageCount: 35
    },
    {
      id: 3,
      title: "Autonomous AI Systems: Ethical Considerations and Implementation Guidelines",
      category: "AI Ethics",
      date: "2024-11-20",
      author: "Dr. Emily Watson",
      description: "A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.",
      topics: ["AI Ethics", "Autonomous Systems", "Responsible AI", "Implementation"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "40 min read",
      pageCount: 22
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      category: "Cloud & Infrastructure",
      date: "2024-10-25",
      author: "David Kim",
      description: "Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.",
      topics: ["Cloud Architecture", "Scalability", "Resilience", "Cost Optimization"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "35 min read",
      pageCount: 25
    },
    {
      id: 5,
      title: "Machine Learning Operations (MLOps): Best Practices for Production AI",
      category: "AI & Machine Learning",
      date: "2024-09-30",
      author: "Marcus Rodriguez",
      description: "Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.",
      topics: ["MLOps", "Model Deployment", "Production AI", "Monitoring"],
      downloadUrl: "#",
      isPremium: true,
      readTime: "50 min read",
      pageCount: 30
    },
    {
      id: 6,
      title: "Zero-Trust Security Architecture: Implementation and Best Practices",
      category: "Cybersecurity",
      date: "2024-08-15",
      author: "Alex Thompson",
      description: "Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.",
      topics: ["Zero-Trust", "Security Architecture", "Implementation", "Best Practices"],
      downloadUrl: "#",
      isPremium: false,
      readTime: "30 min read",
      pageCount: 20
    }
  ];
  const categories = [
    { name: "All", count: 6, active: true },
    { name: "AI & Machine Learning", count: 2, active: false },
    { name: "Cybersecurity", count: 2, active: false },
    { name: "Digital Transformation", count: 1, active: false },
    { name: "Cloud & Infrastructure", count: 1, active: false },
    { name: "AI Ethics", count: 1, active: false }
  ];
  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === "All Categories" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Research & Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive research papers and technical documentation 
              to stay ahead of technology trends and industry insights.
            </p>
          </div>
      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {paper.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    {paper.downloads}
                  </div>
      </div>
    </>
  );
};
export default WhitePapers;
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};
export default $page;
