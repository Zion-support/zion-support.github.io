import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter, 
  Calendar, 
  User,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Brain,
  Cpu,
  Shield,
  Zap,
  Rocket,
  TrendingUp,
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: FileText },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Zap },
    { id: 'business', name: 'Business Solutions', icon: TrendingUp },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI Autonomous Systems: The Future of Enterprise Operations',
      category: 'ai-ml',
      year: '2025',
      author: 'Dr. Sarah Chen',
      authorTitle: 'Chief AI Officer, Zion Tech Group',
      publishDate: '2025-01-15',
      readTime: '15 min read',
      description: 'Comprehensive analysis of how AI autonomous systems are transforming business operations, including case studies, implementation strategies, and ROI analysis.',
      abstract: 'This white paper explores the revolutionary impact of AI autonomous systems on enterprise operations. We examine real-world implementations, discuss technical architectures, and provide actionable insights for organizations looking to adopt these technologies.',
      keyInsights: [
        'AI autonomous systems can reduce operational costs by 40-60%',
        'Implementation timeline: 6-18 months for enterprise deployment',
        'ROI typically achieved within 12-24 months',
        'Critical success factors and common pitfalls'
      ],
      topics: ['AI Autonomous Systems', 'Business Process Automation', 'Machine Learning', 'Enterprise AI', 'ROI Analysis'],
      downloads: 1247,
      rating: 4.8,
      featured: true,
      fileSize: '2.4 MB',
      format: 'PDF',
      tags: ['AI', 'Business Automation', 'Enterprise', 'Research']
    },
    {
      id: 2,
      title: 'Quantum Computing in Financial Services: A Comprehensive Guide',
      category: 'quantum',
      year: '2024',
      author: 'Dr. James Wilson',
      authorTitle: 'Quantum Computing Lead, Zion Tech Group',
      publishDate: '2024-11-20',
      readTime: '20 min read',
      description: 'Deep dive into quantum computing applications in financial services, including risk modeling, portfolio optimization, and quantum-resistant cryptography.',
      abstract: 'This comprehensive guide explores the transformative potential of quantum computing in financial services. We cover quantum algorithms, implementation strategies, and the future of quantum finance.',
      keyInsights: [
        'Quantum computing can solve complex financial problems exponentially faster',
        'Quantum-resistant cryptography is essential for future security',
        'Implementation roadmap for financial institutions',
        'Risk assessment and compliance considerations'
      ],
      topics: ['Quantum Computing', 'Financial Services', 'Risk Modeling', 'Portfolio Optimization', 'Cryptography'],
      downloads: 892,
      rating: 4.7,
      featured: false,
      fileSize: '3.1 MB',
      format: 'PDF',
      tags: ['Quantum Computing', 'Finance', 'Risk Management', 'Technology']
    },
    {
      id: 3,
      title: 'Cybersecurity in the AI Era: Threats, Defenses, and Best Practices',
      category: 'cybersecurity',
      year: '2024',
      author: 'Alex Johnson',
      authorTitle: 'Security Compliance Director, Zion Tech Group',
      publishDate: '2024-09-15',
      readTime: '18 min read',
      description: 'Analysis of emerging cybersecurity threats in the AI era and comprehensive defense strategies for modern enterprises.',
      abstract: 'As AI technology advances, so do the sophistication of cyber threats. This white paper examines the evolving threat landscape and provides actionable defense strategies.',
      keyInsights: [
        'AI-powered attacks are becoming more sophisticated',
        'Zero-trust architecture is essential for modern security',
        'SOC2 compliance automation strategies',
        'Incident response best practices'
      ],
      topics: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Compliance', 'Incident Response'],
      downloads: 1156,
      rating: 4.9,
      featured: true,
      fileSize: '2.8 MB',
      format: 'PDF',
      tags: ['Cybersecurity', 'AI Security', 'Compliance', 'Best Practices']
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      category: 'cloud',
      year: '2024',
      author: 'David Kim',
      authorTitle: 'Cloud Architecture Lead, Zion Tech Group',
      publishDate: '2024-07-10',
      readTime: '22 min read',
      description: 'Comprehensive guide to designing and implementing cloud-native applications that scale automatically and handle high traffic loads.',
      abstract: 'This white paper provides a detailed roadmap for building cloud-native applications. We cover microservices architecture, containerization, and DevOps best practices.',
      keyInsights: [
        'Microservices architecture enables better scalability and maintainability',
        'Container orchestration with Kubernetes best practices',
        'DevOps automation and CI/CD pipelines',
        'Cost optimization strategies for cloud infrastructure'
      ],
      topics: ['Cloud Architecture', 'Microservices', 'DevOps', 'Scalability', 'Cost Optimization'],
      downloads: 743,
      rating: 4.6,
      featured: false,
      fileSize: '2.9 MB',
      format: 'PDF',
      tags: ['Cloud Computing', 'Architecture', 'DevOps', 'Scalability']
    },
    {
      id: 5,
      title: 'Digital Transformation: A Strategic Framework for Success',
      category: 'business',
      year: '2023',
      author: 'Dr. Robert Chen',
      authorTitle: 'Digital Transformation Consultant, Zion Tech Group',
      publishDate: '2023-12-05',
      readTime: '25 min read',
      description: 'Strategic framework for successful digital transformation initiatives, including change management, technology selection, and ROI measurement.',
      abstract: 'Digital transformation is more than just technology adoption. This white paper provides a comprehensive framework for successful transformation initiatives.',
      keyInsights: [
        'Change management is critical for transformation success',
        'Technology selection should align with business objectives',
        'ROI measurement and success metrics',
        'Common pitfalls and how to avoid them'
      ],
      topics: ['Digital Transformation', 'Change Management', 'Strategy', 'ROI', 'Technology Selection'],
      downloads: 1567,
      rating: 4.8,
      featured: true,
      fileSize: '3.5 MB',
      format: 'PDF',
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Business']
    },
    {
      id: 6,
      title: 'Emerging Technologies: What\'s Next in 2025 and Beyond',
      category: 'emerging-tech',
      year: '2023',
      author: 'Dr. Amanda Foster',
      authorTitle: 'Emerging Tech Analyst, Zion Tech Group',
      publishDate: '2023-10-20',
      readTime: '30 min read',
      description: 'Comprehensive analysis of emerging technologies that will shape the future, including quantum computing, AI consciousness, and advanced robotics.',
      abstract: 'This forward-looking white paper examines the technologies that will define the next decade. We provide insights into adoption timelines and business impact.',
      keyInsights: [
        'Quantum computing will reach commercial viability by 2027-2030',
        'AI consciousness research is advancing rapidly',
        'Advanced robotics will transform manufacturing and healthcare',
        'Investment opportunities in emerging tech sectors'
      ],
      topics: ['Emerging Technologies', 'Future Trends', 'Innovation', 'Technology Forecasting', 'Investment'],
      downloads: 1342,
      rating: 4.7,
      featured: false,
      fileSize: '4.2 MB',
      format: 'PDF',
      tags: ['Emerging Tech', 'Future Trends', 'Innovation', 'Forecasting']
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const categoryMatch = selectedCategory === 'all' || paper.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || paper.year === selectedYear;
    const searchMatch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && yearMatch && searchMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Access our comprehensive research papers, technical documents, and industry insights 
              to stay ahead of technology trends and make informed business decisions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedYear === year.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  {year.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Featured White Papers
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredWhitePapers.filter(paper => paper.featured).map((paper) => (
              <div key={paper.id} className="bg-gray-800/50 rounded-xl border border-cyan-500/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {paper.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      {paper.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{paper.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{formatDate(paper.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{paper.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Download className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        {paper.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-cyan-400 font-semibold">{paper.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    <Download className="w-5 h-5 mr-2 inline" />
                    Download White Paper
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            All White Papers
          </h2>
          
          {filteredWhitePapers.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No white papers found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms to see more white papers.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitePapers.filter(paper => !paper.featured).map((paper) => (
                <div key={paper.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        {paper.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="text-sm text-cyan-400 font-medium">
                        {paper.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{paper.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{formatDate(paper.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{paper.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-cyan-400">{paper.rating}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      <Download className="w-4 h-4 mr-2 inline" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Stay Informed with Our Research
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get notified about new white papers, research updates, and industry insights 
            to stay ahead of technology trends and make informed business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Research Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}