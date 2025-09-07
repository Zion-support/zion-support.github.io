import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  DollarSign, 
  Code, 
  HelpCircle, 
  ArrowUpRight,
  Download,
  Play,
  Calendar,
  Star,
  Clock,
  TrendingUp,
  Eye,
  Share2,
  Bookmark,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Shield,
  Lock,
  Database,
  Network,
  BarChart3,
  PenTool,
  Server,
  Smartphone,
  Truck,
  Gauge,
  GitFork,
  Award,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Resources: React.FC = () => {
  const resources = [
    {
      id: 'blog',
      title: 'Blog & Insights',
      description: 'Latest industry trends, technology insights, and thought leadership content',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'The Future of AI in Healthcare',
          excerpt: 'Exploring how artificial intelligence is revolutionizing patient care and medical diagnostics.',
          category: 'AI & Healthcare',
          readTime: '5 min read',
          date: '2024-01-15',
          featured: true
        },
        {
          title: 'Cybersecurity Trends 2024',
          excerpt: 'Stay ahead of emerging threats with our comprehensive security analysis.',
          category: 'Cybersecurity',
          readTime: '7 min read',
          date: '2024-01-10',
          featured: true
        },
        {
          title: 'Cloud Migration Best Practices',
          excerpt: 'Essential strategies for successful cloud adoption and migration.',
          category: 'Cloud Computing',
          readTime: '6 min read',
          date: '2024-01-05',
          featured: false
        }
      ]
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description: 'Real-world success stories and implementation results',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Healthcare Provider Digital Transformation',
          excerpt: 'How we helped a major hospital system reduce costs by 30% while improving patient outcomes.',
          category: 'Healthcare',
          results: '30% cost reduction',
          featured: true
        },
        {
          title: 'Manufacturing AI Implementation',
          excerpt: 'Smart factory transformation leading to 25% productivity increase.',
          category: 'Manufacturing',
          results: '25% productivity boost',
          featured: true
        },
        {
          title: 'Financial Services Security Upgrade',
          excerpt: 'Zero-trust security implementation for a leading bank.',
          category: 'Financial Services',
          results: '99.9% security uptime',
          featured: false
        }
      ]
    },
    {
      id: 'white-papers',
      title: 'White Papers',
      description: 'In-depth research and analysis on emerging technologies',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Ethics in Business',
          excerpt: 'Comprehensive guide to implementing responsible AI practices.',
          category: 'AI Ethics',
          pages: '25 pages',
          featured: true
        },
        {
          title: 'Quantum Computing Primer',
          excerpt: 'Understanding the fundamentals and business applications.',
          category: 'Quantum Computing',
          pages: '30 pages',
          featured: true
        },
        {
          title: 'Digital Transformation Framework',
          excerpt: 'Step-by-step approach to organizational transformation.',
          category: 'Digital Transformation',
          pages: '20 pages',
          featured: false
        }
      ]
    },
    {
      id: 'webinars',
      title: 'Webinars',
      description: 'Expert-led learning sessions and interactive presentations',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'AI Strategy Workshop',
          excerpt: 'Learn how to develop and implement an effective AI strategy.',
          category: 'Strategy',
          duration: '60 minutes',
          featured: true
        },
        {
          title: 'Cybersecurity Best Practices',
          excerpt: 'Essential security measures for modern organizations.',
          category: 'Security',
          duration: '45 minutes',
          featured: true
        },
        {
          title: 'Cloud Cost Optimization',
          excerpt: 'Strategies for reducing cloud infrastructure costs.',
          category: 'Cloud',
          duration: '50 minutes',
          featured: false
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation',
      description: 'Technical guides, APIs, and implementation resources',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'API Reference Guide',
          excerpt: 'Complete API documentation for all our services.',
          category: 'Technical',
          type: 'API Docs',
          featured: true
        },
        {
          title: 'Implementation Guide',
          excerpt: 'Step-by-step implementation instructions.',
          category: 'Technical',
          type: 'Guide',
          featured: true
        },
        {
          title: 'Troubleshooting Manual',
          excerpt: 'Common issues and their solutions.',
          category: 'Technical',
          type: 'Manual',
          featured: false
        }
      ]
    },
    {
      id: 'faq',
      title: 'FAQ & Support',
      description: 'Get help and answers to common questions',
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-500',
      items: [
        {
          title: 'Getting Started',
          excerpt: 'Frequently asked questions about getting started with our services.',
          category: 'General',
          questions: 15,
          featured: true
        },
        {
          title: 'Technical Support',
          excerpt: 'Technical questions and troubleshooting assistance.',
          category: 'Technical',
          questions: 25,
          featured: true
        },
        {
          title: 'Billing & Pricing',
          excerpt: 'Questions about our pricing and billing processes.',
          category: 'Billing',
          questions: 10,
          featured: false
        }
      ]
    },
    {
      id: 'pricing-guide-2025',
      title: 'Pricing Guide 2025',
      description: 'Complete pricing information and package details',
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      items: [
        {
          title: 'Service Packages',
          excerpt: 'Comprehensive overview of our service packages and pricing tiers.',
          category: 'Pricing',
          type: 'Guide',
          featured: true
        },
        {
          title: 'Custom Solutions',
          excerpt: 'Information about custom solution pricing and consultation.',
          category: 'Pricing',
          type: 'Guide',
          featured: true
        },
        {
          title: 'Enterprise Plans',
          excerpt: 'Enterprise-level pricing and volume discounts.',
          category: 'Pricing',
          type: 'Guide',
          featured: false
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2024',
      date: '2024-02-15',
      time: '10:00 AM EST',
      type: 'Virtual Conference',
      description: 'Join industry leaders for insights on AI innovation and business transformation.'
    },
    {
      title: 'Cybersecurity Workshop',
      date: '2024-02-20',
      time: '2:00 PM EST',
      type: 'Interactive Workshop',
      description: 'Hands-on cybersecurity training and best practices implementation.'
    },
    {
      title: 'Cloud Migration Webinar',
      date: '2024-02-25',
      time: '11:00 AM EST',
      type: 'Webinar',
      description: 'Learn about successful cloud migration strategies and implementation.'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Resources & Support | Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, and technical documentation."
        keywords="resources, blog, case studies, white papers, webinars, documentation, support, FAQ"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Resources
                </span>
                <br />
                <span className="text-white">& Support</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Access our comprehensive library of resources, insights, and support materials. 
                From technical documentation to industry insights, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Resources
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Knowledge & Resources
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Stay informed and empowered with our comprehensive collection of resources, 
                designed to help you succeed in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  id={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{resource.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {resource.items.slice(0, 2).map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-slate-700/30 rounded-lg p-3">
                        <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.excerpt}</p>
                        {item.category && (
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-cyan-400">{item.category}</span>
                            {item.featured && (
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group">
                      View All
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                    <span className="text-xs text-slate-400">
                      {resource.items.length} items
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join us for live events, workshops, and webinars to expand your knowledge 
                and connect with industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-slate-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Need Help? We're Here for You
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Our support team is ready to help you with any questions, technical issues, 
                  or guidance you need. Get in touch with us today.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <MapPin className="w-5 h-5 text-green-400 mr-3" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Contact Support
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quick Support Options</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer">
                    <HelpCircle className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">FAQ Center</h4>
                      <p className="text-sm text-slate-400">Find answers to common questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Live Chat</h4>
                      <p className="text-sm text-slate-400">Chat with our support team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer">
                    <Mail className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Email Support</h4>
                      <p className="text-sm text-slate-400">Send us a detailed message</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer">
                    <Phone className="w-6 h-6 text-orange-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Phone Support</h4>
                      <p className="text-sm text-slate-400">Call us for immediate assistance</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;
