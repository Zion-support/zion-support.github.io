import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  Star,
  Eye,
  Download,
  Play,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Mail as MailIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = {
    blog: {
      title: "Blog & Insights",
      description: "Latest industry trends and insights",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "The Future of AI in Business: 2027 Predictions",
          excerpt: "Discover how AI will transform business operations and create new opportunities in 2027.",
          author: "Zion Tech Group",
          date: "2024-01-15",
          readTime: "5 min read",
          tags: ["AI", "Business", "2027", "Predictions"],
          featured: true
        },
        {
          title: "Micro SAAS: The New Business Model Revolution",
          excerpt: "How micro SAAS solutions are disrupting traditional software markets and creating new opportunities.",
          author: "Zion Tech Group",
          date: "2024-01-10",
          readTime: "7 min read",
          tags: ["Micro SAAS", "Business Model", "Innovation"],
          featured: true
        },
        {
          title: "Cybersecurity Trends: What to Expect in 2027",
          excerpt: "Stay ahead of emerging cybersecurity threats with our comprehensive analysis of future trends.",
          author: "Zion Tech Group",
          date: "2024-01-05",
          readTime: "6 min read",
          tags: ["Cybersecurity", "Trends", "2027", "Security"],
          featured: false
        }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      description: "Real-world success stories",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          title: "How Company X Increased ROI by 500% with AI",
          excerpt: "A detailed case study showing how AI implementation transformed business operations.",
          company: "Fortune 500 Company",
          industry: "Manufacturing",
          results: "500% ROI increase",
          featured: true
        },
        {
          title: "Startup Success: From 0 to $1M in 6 Months",
          excerpt: "How a startup leveraged our micro SAAS solutions to achieve rapid growth.",
          company: "Tech Startup",
          industry: "SaaS",
          results: "$1M revenue in 6 months",
          featured: true
        }
      ]
    },
    whitePapers: {
      title: "White Papers",
      description: "In-depth research and analysis",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "AI in Healthcare: A Comprehensive Guide",
          excerpt: "Complete guide to implementing AI solutions in healthcare organizations.",
          author: "Zion Tech Group",
          pages: "45 pages",
          downloadCount: "2,500+",
          featured: true
        },
        {
          title: "Quantum Computing: Business Applications",
          excerpt: "Exploring the practical applications of quantum computing in business.",
          author: "Zion Tech Group",
          pages: "32 pages",
          downloadCount: "1,800+",
          featured: false
        }
      ]
    },
    webinars: {
      title: "Webinars",
      description: "Expert-led learning sessions",
      icon: Users,
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "AI Implementation Best Practices",
          excerpt: "Learn from industry experts about successful AI implementation strategies.",
          speaker: "Dr. Sarah Johnson",
          duration: "60 minutes",
          date: "2024-02-15",
          featured: true
        },
        {
          title: "Micro SAAS Success Stories",
          excerpt: "Real entrepreneurs share their journey building successful micro SAAS businesses.",
          speaker: "Mark Chen",
          duration: "45 minutes",
          date: "2024-02-20",
          featured: false
        }
      ]
    },
    documentation: {
      title: "Documentation",
      description: "Technical guides and APIs",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      items: [
        {
          title: "API Integration Guide",
          excerpt: "Complete guide to integrating our services with your existing systems.",
          version: "v2.1",
          lastUpdated: "2024-01-20",
          featured: true
        },
        {
          title: "Developer Documentation",
          excerpt: "Comprehensive technical documentation for developers.",
          version: "v1.8",
          lastUpdated: "2024-01-15",
          featured: false
        }
      ]
    },
    support: {
      title: "FAQ & Support",
      description: "Get help and answers",
      icon: HelpCircle,
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          title: "Getting Started Guide",
          excerpt: "Step-by-step guide to get started with our services.",
          category: "Getting Started",
          featured: true
        },
        {
          title: "Common Issues & Solutions",
          excerpt: "Quick solutions to frequently encountered problems.",
          category: "Troubleshooting",
          featured: false
        }
      ]
    }
  };

  const categories = [
    { id: 'all', name: 'All Resources', count: Object.values(resources).reduce((acc, cat) => acc + cat.items.length, 0) },
    ...Object.entries(resources).map(([key, cat]) => ({
      id: key,
      name: cat.title,
      count: cat.items.length
    }))
  ];

  const filteredResources = Object.entries(resources).flatMap(([key, category]) => {
    if (activeCategory !== 'all' && key !== activeCategory) return [];
    
    return category.items.map(item => ({
      ...item,
      categoryKey: key,
      category: category.title,
      icon: category.icon,
      color: category.color
    }));
  }).filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Resources | Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support materials."
        keywords="resources, blog, case studies, white papers, webinars, documentation, support, AI, technology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Resources
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Knowledge & Insights
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Access our comprehensive library of resources to stay informed about the latest trends, 
                learn from real success stories, and get the support you need.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={`${resource.categoryKey}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    {resource.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">{resource.excerpt}</p>

                  {/* Resource-specific details */}
                  {resource.author && (
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <User className="w-4 h-4" />
                      <span>{resource.author}</span>
                    </div>
                  )}
                  
                  {resource.date && (
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{resource.date}</span>
                    </div>
                  )}

                  {resource.readTime && (
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{resource.readTime}</span>
                    </div>
                  )}

                  {/* Tags */}
                  {resource.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {resource.categoryKey === 'blog' ? (
                      <Link
                        to="/blog"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                      >
                        Read More
                      </Link>
                    ) : resource.categoryKey === 'webinars' ? (
                      <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105">
                        <Play className="w-4 h-4 inline mr-2" />
                        Watch
                      </button>
                    ) : (
                      <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 hover:scale-105">
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </button>
                    )}
                    
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Resource Inquiry&body=Hi, I'm interested in learning more about your resources. Please provide more information."
                      className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl text-slate-400 mb-2">No resources found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Information?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our team of experts is ready to help you find the right resources and answer your questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                >
                  Call Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Resource Request&body=Hi, I'm looking for specific resources. Please help me find what I need."
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
