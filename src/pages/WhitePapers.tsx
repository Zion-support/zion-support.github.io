

import React from 'react';
import { SEO } from '../components/SEO';
import { FileText, Download, Calendar, User, TrendingUp, Brain, Shield, Cloud, Rocket, Globe } from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: 'AI in Enterprise 2024: Transforming Business Operations',
      description: 'Comprehensive analysis of AI adoption trends, implementation strategies, and ROI metrics for enterprise organizations.',
      category: 'Artificial Intelligence',
      author: 'Zion Tech Group Research Team',
      date: 'January 2024',
      downloads: 1247,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Future: Next-Generation Computing Paradigm',
      description: 'Exploring the potential of quantum computing in solving complex business problems and accelerating innovation.',
      category: 'Emerging Technology',
      author: 'Dr. Sarah Chen',
      date: 'December 2023',
      downloads: 892,
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Framework: AI-Powered Threat Detection',
      description: 'Comprehensive guide to implementing AI-driven cybersecurity solutions for modern enterprise environments.',
      category: 'Cybersecurity',
      author: 'Michael Rodriguez',
      date: 'November 2023',
      downloads: 1563,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true
    },
    {
      id: 4,
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'How digital twin technology is revolutionizing industries from manufacturing to healthcare.',
      category: 'Digital Transformation',
      author: 'Dr. James Wilson',
      date: 'October 2023',
      downloads: 734,
      icon: Globe,
      color: 'from-green-500 to-blue-500',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud-Native Architecture: Building Scalable Solutions',
      description: 'Best practices for designing and implementing cloud-native applications and microservices.',
      category: 'Cloud Computing',
      author: 'Lisa Thompson',
      date: 'September 2023',
      downloads: 1102,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics Revolution: From Insights to Action',
      description: 'How advanced analytics and machine learning are driving data-driven decision making.',
      category: 'Data Analytics',
      author: 'David Kim',
      date: 'August 2023',
      downloads: 945,
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      featured: false
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Digital Transformation', 'Emerging Technology'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of industry research, technical insights, and thought leadership white papers on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container-responsive py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry Research & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive collection of white papers, research reports, and technical insights 
              covering the latest trends in AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-2" />
                <span>{whitePapers.length} White Papers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Download className="w-5 h-5 mr-2" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Updated Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured White Papers */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Research</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whitePapers.filter(wp => wp.featured).map((paper) => (
            <div key={paper.id} className="group relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${paper.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <paper.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full mb-3">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {paper.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {paper.date}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    {paper.downloads} downloads
                  </div>
                  <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:scale-105">
                    Download PDF
                    <Download className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All White Papers */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">All White Papers</h2>
          <div className="space-y-4">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${paper.color} rounded-lg flex items-center justify-center`}>
                    <paper.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{paper.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{paper.category}</span>
                      <span>•</span>
                      <span>{paper.author}</span>
                      <span>•</span>
                      <span>{paper.date}</span>
                      <span>•</span>
                      <span>{paper.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-lg transition-colors">
                  Download
                  <Download className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest Research</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new white papers and research reports. 
            Stay ahead of industry trends and technological advancements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
