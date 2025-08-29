import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Award, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart,
  Linkedin,
  Github,
  Mail,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Atom,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle,
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  User,
  Tag,
  FileText,
  Image,
  Video,
  Search,
  Filter,
  ArrowRight,
  Eye,
  Clock as ClockIcon,
  Users as UsersIcon,
  BarChart3
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 'ai-enterprise-transformation-2024',
      title: 'AI-Powered Enterprise Transformation: A Comprehensive Guide for 2024',
      author: 'Dr. Sarah Chen, Chief AI Officer',
      date: '2024-12-01',
      category: 'Artificial Intelligence',
      summary: 'This comprehensive white paper explores the latest trends in AI-powered enterprise transformation, including practical implementation strategies, ROI analysis, and case studies from leading organizations.',
      topics: ['Machine Learning', 'Digital Transformation', 'ROI Analysis', 'Implementation Strategy'],
      readTime: '25 min read',
      downloads: '2,847',
      views: '15,234',
      featured: true,
      pdf: '/white-papers/ai-enterprise-transformation-2024.pdf',
      thumbnail: '/white-papers/ai-enterprise-transformation-2024.jpg',
      abstract: 'As artificial intelligence continues to evolve at an unprecedented pace, organizations worldwide are seeking to understand how to leverage these technologies for competitive advantage. This white paper provides a comprehensive analysis of current AI capabilities, implementation strategies, and measurable business outcomes.'
    },
    {
      id: 'quantum-computing-business-applications',
      title: 'Quantum Computing in Business: Practical Applications and Future Outlook',
      author: 'David Kim, Head of Quantum Computing',
      date: '2024-11-15',
      category: 'Quantum Computing',
      summary: 'Explore the practical applications of quantum computing in business, from optimization problems to cryptography, and understand the timeline for commercial adoption.',
      topics: ['Quantum Algorithms', 'Optimization', 'Cryptography', 'Business Applications'],
      readTime: '20 min read',
      downloads: '1,923',
      views: '8,456',
      featured: false,
      pdf: '/white-papers/quantum-computing-business-applications.pdf',
      thumbnail: '/white-papers/quantum-computing-business-applications.jpg',
      abstract: 'Quantum computing represents the next frontier in computational power, promising to solve problems that are currently intractable for classical computers. This paper examines the current state of quantum computing and its practical applications in business contexts.'
    },
    {
      id: 'zero-trust-cybersecurity-framework',
      title: 'Implementing Zero Trust Cybersecurity: A Strategic Framework for Modern Organizations',
      author: 'Alex Thompson, Head of Cybersecurity',
      date: '2024-10-28',
      category: 'Cybersecurity',
      summary: 'Learn how to implement a comprehensive zero-trust cybersecurity framework that protects your organization from modern threats while maintaining operational efficiency.',
      topics: ['Zero Trust', 'Cybersecurity', 'Network Security', 'Identity Management'],
      readTime: '30 min read',
      downloads: '3,156',
      views: '12,789',
      featured: false,
      pdf: '/white-papers/zero-trust-cybersecurity-framework.pdf',
      thumbnail: '/white-papers/zero-trust-cybersecurity-framework.jpg',
      abstract: 'In today\'s interconnected digital landscape, traditional perimeter-based security models are no longer sufficient. This white paper presents a comprehensive framework for implementing zero-trust cybersecurity principles in modern organizations.'
    },
    {
      id: 'edge-computing-iot-revolution',
      title: 'Edge Computing and IoT: Revolutionizing Data Processing and Analytics',
      author: 'Marcus Rodriguez, Chief Technology Officer',
      date: '2024-10-15',
      category: 'Edge Computing',
      summary: 'Discover how edge computing and IoT technologies are transforming data processing, enabling real-time analytics and reducing latency in critical applications.',
      topics: ['Edge Computing', 'IoT', 'Real-time Analytics', 'Data Processing'],
      readTime: '22 min read',
      downloads: '2,134',
      views: '9,876',
      featured: false,
      pdf: '/white-papers/edge-computing-iot-revolution.pdf',
      thumbnail: '/white-papers/edge-computing-iot-revolution.jpg',
      abstract: 'The proliferation of IoT devices and the need for real-time data processing have driven the adoption of edge computing technologies. This paper explores the technical foundations and business implications of this paradigm shift.'
    },
    {
      id: 'ai-ethics-responsible-development',
      title: 'AI Ethics and Responsible Development: Building Trust in Artificial Intelligence',
      author: 'Dr. Emily Watson, Chief AI Officer',
      date: '2024-09-30',
      category: 'AI Ethics',
      summary: 'Explore the critical importance of ethical AI development and learn practical approaches to building trustworthy, responsible AI systems.',
      topics: ['AI Ethics', 'Responsible AI', 'Trust', 'Transparency'],
      readTime: '28 min read',
      downloads: '2,567',
      views: '11,234',
      featured: false,
      pdf: '/white-papers/ai-ethics-responsible-development.pdf',
      thumbnail: '/white-papers/ai-ethics-responsible-development.jpg',
      abstract: 'As AI systems become more sophisticated and integrated into critical decision-making processes, the importance of ethical development practices cannot be overstated. This white paper provides a comprehensive framework for responsible AI development.'
    },
    {
      id: 'blockchain-enterprise-solutions',
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency to Business Transformation',
      author: 'Priya Patel, Head of Emerging Technologies',
      date: '2024-09-15',
      category: 'Blockchain',
      summary: 'Learn how blockchain technology is transforming enterprise operations, from supply chain management to digital identity and smart contracts.',
      topics: ['Blockchain', 'Supply Chain', 'Smart Contracts', 'Digital Identity'],
      readTime: '24 min read',
      downloads: '1,876',
      views: '7,654',
      featured: false,
      pdf: '/white-papers/blockchain-enterprise-solutions.pdf',
      thumbnail: '/white-papers/blockchain-enterprise-solutions.jpg',
      abstract: 'While blockchain technology first gained prominence through cryptocurrencies, its potential applications in enterprise environments are vast and transformative. This paper examines practical use cases and implementation strategies.'
    },
    {
      id: 'healthcare-ai-revolution',
      title: 'The AI Revolution in Healthcare: Improving Patient Outcomes and Operational Efficiency',
      author: 'Dr. Priya Patel, Head of Healthcare Technology',
      date: '2024-08-30',
      category: 'Healthcare Technology',
      summary: 'Explore how AI is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans and operational optimization.',
      topics: ['Healthcare AI', 'Medical Diagnostics', 'Personalized Medicine', 'Operational Efficiency'],
      readTime: '26 min read',
      downloads: '3,456',
      views: '14,567',
      featured: false,
      pdf: '/white-papers/healthcare-ai-revolution.pdf',
      thumbnail: '/white-papers/healthcare-ai-revolution.jpg',
      abstract: 'Artificial intelligence is transforming healthcare delivery in unprecedented ways, offering the potential to improve diagnostic accuracy, personalize treatment plans, and optimize operational efficiency. This paper examines current applications and future possibilities.'
    },
    {
      id: 'sustainability-green-it-solutions',
      title: 'Sustainability in IT: Green Computing Solutions for a Better Future',
      author: 'Sustainability Team, Zion Tech Group',
      date: '2024-08-15',
      category: 'Sustainability',
      summary: 'Discover how organizations can implement green IT solutions to reduce environmental impact while improving operational efficiency and cost savings.',
      topics: ['Green IT', 'Sustainability', 'Energy Efficiency', 'Environmental Impact'],
      readTime: '20 min read',
      downloads: '1,654',
      views: '6,789',
      featured: false,
      pdf: '/white-papers/sustainability-green-it-solutions.pdf',
      thumbnail: '/white-papers/sustainability-green-it-solutions.jpg',
      abstract: 'As environmental concerns become increasingly urgent, organizations must consider the environmental impact of their IT operations. This white paper provides practical strategies for implementing sustainable IT practices.'
    }
  ];

  const categories = [
    { name: 'All Categories', count: whitePapers.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Artificial Intelligence', count: whitePapers.filter(wp => wp.category === 'Artificial Intelligence').length, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', count: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, color: 'from-indigo-500 to-purple-500' },
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', count: whitePapers.filter(wp => wp.category === 'Edge Computing').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Ethics', count: whitePapers.filter(wp => wp.category === 'AI Ethics').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Blockchain', count: whitePapers.filter(wp => wp.category === 'Blockchain').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Healthcare Technology', count: whitePapers.filter(wp => wp.category === 'Healthcare Technology').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Sustainability', count: whitePapers.filter(wp => wp.category === 'Sustainability').length, color: 'from-emerald-500 to-teal-500' }
  ];

  const stats = [
    { number: '25+', label: 'White Papers Published', icon: FileText },
    { number: '50K+', label: 'Downloads', icon: Download },
    { number: '200K+', label: 'Views', icon: Eye },
    { number: '15+', label: 'Expert Authors', icon: UsersIcon },
    { number: '9', label: 'Categories', icon: Tag },
    { number: '30 min', label: 'Average Read Time', icon: ClockIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, and emerging technologies. Expert insights and research from industry leaders."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            White Papers & Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Deep insights and expert analysis on the latest trends in AI, quantum computing, cybersecurity, and emerging technologies. Download our comprehensive white papers to stay ahead of the curve.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#white-papers" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Browse White Papers
            </a>
            <a 
              href="/contact" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Custom Research
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Paper */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Featured White Paper
          </motion.h2>
          
          {whitePapers.filter(wp => wp.featured).map((whitePaper, index) => (
            <motion.div
              key={whitePaper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                      {whitePaper.category}
                    </span>
                    <span className="text-slate-400 text-sm">{whitePaper.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{whitePaper.title}</h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{whitePaper.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Abstract:</h4>
                    <p className="text-slate-300 leading-relaxed">{whitePaper.abstract}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {whitePaper.topics.map((topic) => (
                        <span 
                          key={topic}
                          className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6 text-slate-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{whitePaper.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>{whitePaper.downloads} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{whitePaper.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={whitePaper.pdf}
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <a 
                      href={`/white-papers/${whitePaper.id}`}
                      className="flex items-center space-x-2 border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      <span>Read Online</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Author</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">{whitePaper.author}</h5>
                        <p className="text-slate-400 text-sm">Expert in {whitePaper.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Paper Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Category:</span>
                        <span className="text-white">{whitePaper.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Published:</span>
                        <span className="text-white">{whitePaper.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Read Time:</span>
                        <span className="text-white">{whitePaper.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{category.name}</h3>
                <p className="text-slate-400 text-center">{category.count} papers</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section id="white-papers" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            All White Papers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitePapers.filter(wp => !wp.featured).map((whitePaper, index) => (
              <motion.div
                key={whitePaper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {whitePaper.category}
                  </span>
                  <span className="text-slate-400 text-sm">{whitePaper.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{whitePaper.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{whitePaper.summary}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {whitePaper.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{whitePaper.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{whitePaper.downloads}</span>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm">By {whitePaper.author}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={whitePaper.pdf}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    Download PDF
                  </a>
                  <a 
                    href={`/white-papers/${whitePaper.id}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    <span>Read Full Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Stay Informed with Our Research
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Get notified when we publish new white papers and research insights. Stay ahead of the technology curve with expert analysis from our team.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Subscribe to Updates
            </a>
            <a 
              href="/contact" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Custom Research
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
