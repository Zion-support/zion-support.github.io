import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  BookOpen, 
  Brain, 
  Atom, 
  Shield, 
  Wifi, 
  Leaf, 
  Cloud, 
  BarChart3,
  Clock,
  Star,
  Filter,
  Search
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders",
    category: "Digital Transformation",
    date: "2025-01-10",
    author: "Dr. Sarah Chen",
    description: "This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.",
    topics: ["AI Strategy", "Digital Transformation", "Enterprise Leadership", "ROI Measurement"],
    downloadUrl: "#",
    isPremium: false,
    readTime: "45 min read",
    pageCount: 28,
    downloads: 1247,
    rating: 4.8
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
    pageCount: 35,
    downloads: 892,
    rating: 4.9
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
    pageCount: 22,
    downloads: 1563,
    rating: 4.7
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
    pageCount: 25,
    downloads: 1102,
    rating: 4.6
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
    pageCount: 30,
    downloads: 743,
    rating: 4.8
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
    pageCount: 20,
    downloads: 1341,
    rating: 4.7
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

const getCategoryIcon = (category) => {
  switch (category) {
    case 'AI & Machine Learning':
      return Brain;
    case 'Cybersecurity':
      return Shield;
    case 'Digital Transformation':
      return BarChart3;
    case 'Cloud & Infrastructure':
      return Cloud;
    case 'AI Ethics':
      return Atom;
    default:
      return FileText;
  }
};

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    // Update active state
    categories.forEach(cat => {
      cat.active = cat.name === categoryName;
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="text-gradient block">Papers</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              In-depth research and insights on cutting-edge technology topics. 
              Download our comprehensive white papers to stay ahead of industry trends.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <FileText className="w-4 h-4" />
                <span>{whitePapers.length} Papers Available</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Download className="w-4 h-4" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Star className="w-4 h-4" />
                <span>Expert Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      category.active
                        ? 'border-zion-cyan bg-zion-cyan text-white'
                        : 'border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              Showing {filteredWhitePapers.length} of {whitePapers.length} papers
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {paper.category}
                      </span>
                      {paper.isPremium && (
                        <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                          Premium
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{paper.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {paper.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.topics.slice(0, 3).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20"
                      >
                        {topic}
                      </span>
                    ))}
                    {paper.topics.length > 3 && (
                      <span className="px-2 py-1 bg-zion-blue-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20">
                        +{paper.topics.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-zion-slate-light text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4 text-zion-cyan" />
                        {paper.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-zion-cyan" />
                        {new Date(paper.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      {paper.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4 text-zion-cyan" />
                        {paper.pageCount} pages
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4 text-zion-cyan" />
                        {paper.downloads.toLocaleString()}
                      </span>
                    </div>
                    
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Informed with Our Research</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Get notified when we publish new white papers and research insights. 
              Stay ahead of technology trends and industry developments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Custom Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
