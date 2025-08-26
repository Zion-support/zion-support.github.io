import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Download, FileText, Calendar, User, Eye } from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity: Next-Generation Threat Detection",
      description: "Explore how artificial intelligence is revolutionizing cybersecurity with advanced threat detection and automated response systems.",
      category: "Cybersecurity",
      author: "Dr. Sarah Chen",
      date: "2024-12-01",
      downloads: 1247,
      views: 3891,
      fileSize: "2.4 MB",
      tags: ["AI", "Cybersecurity", "Threat Detection"]
    },
    {
      id: 2,
      title: "Green IT Implementation: Sustainable Technology Solutions",
      description: "Comprehensive guide to implementing environmentally conscious IT practices and reducing carbon footprint in enterprise environments.",
      category: "Green IT",
      author: "Michael Rodriguez",
      date: "2024-11-15",
      downloads: 892,
      views: 2156,
      fileSize: "1.8 MB",
      tags: ["Green IT", "Sustainability", "Enterprise"]
    },
    {
      id: 3,
      title: "Micro SaaS Architecture: Building Scalable Solutions",
      description: "Technical deep-dive into micro SaaS architecture patterns and best practices for building scalable, maintainable applications.",
      category: "Micro SaaS",
      author: "Alex Thompson",
      date: "2024-11-01",
      downloads: 1567,
      views: 4234,
      fileSize: "3.1 MB",
      tags: ["Micro SaaS", "Architecture", "Scalability"]
    },
    {
      id: 4,
      title: "5G Enterprise Solutions: Network Optimization Strategies",
      description: "Advanced strategies for optimizing 5G networks in enterprise environments with focus on performance and reliability.",
      category: "5G Solutions",
      author: "Dr. James Wilson",
      date: "2024-10-20",
      downloads: 734,
      views: 1892,
      fileSize: "2.7 MB",
      tags: ["5G", "Enterprise", "Network Optimization"]
    },
    {
      id: 5,
      title: "Data Privacy in AI Systems: Compliance and Best Practices",
      description: "Comprehensive overview of data privacy requirements and best practices for AI-powered systems in regulated industries.",
      category: "AI & Privacy",
      author: "Lisa Park",
      date: "2024-10-10",
      downloads: 1103,
      views: 2987,
      fileSize: "2.9 MB",
      tags: ["AI", "Privacy", "Compliance"]
    }
  ];

  const categories = ["All", "AI", "Cybersecurity", "Green IT", "Micro SaaS", "5G Solutions", "AI & Privacy"];

  return (
    <>
      <SEO 
        title="White Papers - Zion Tech Group Research & Insights" 
        description="Access our comprehensive collection of technical white papers covering AI, cybersecurity, green IT, and emerging technologies." 
        canonical="/white-papers" 
        url="https://ziontechgroup.com/white-papers"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Deep technical insights and research findings from our experts across AI, cybersecurity, 
              green IT, and emerging technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white hover:border-zion-cyan transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* White Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full mb-3">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <User className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(paper.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <FileText className="w-4 h-4" />
                    <span>{paper.fileSize}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-zion-slate-light text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{paper.views}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-blue-light/30 text-zion-slate-light text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download White Paper
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Updated with Latest Research
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Get notified when we publish new white papers and research findings. 
                Join our community of technology professionals and researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-3 bg-zion-blue-light/30 border border-zion-blue-light/50 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent flex-1 max-w-md"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
