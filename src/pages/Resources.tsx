import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { 
  BookOpen,
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  ArrowRight, 
  Calendar, 
  Download, 
  Play, 
  ExternalLink, 
  Star, 
  Clock, 
  User, 
  Tag,
  TrendingUp,
  Brain,
  Shield,
  Search,
  Filter,
  Bookmark,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  Zap,
  Globe,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Award,
  BarChart3,
  Leaf,
  Building,
  Cloud,
  Server,
  Target as TargetIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  HelpCircle as HelpCircleIcon,
  Calendar as CalendarIcon,
  Download as DownloadIcon,
  Play as PlayIcon,
  ExternalLink as ExternalLinkIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  User as UserIcon,
  Tag as TagIcon
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Resources() {
  const resources = [
    {
      name: 'Blog & Insights',icon: BookOpen,description: 'Latest industry trends and insights',featured: true,color: 'from-purple-500 to-pink-500',items: [
        {
          title: 'AI in 2024: The Year of Enterprise Adoption',excerpt: 'Discover how artificial intelligence is transforming enterprise operations and what to expect in the coming year.',author: 'Dr. Sarah Chen',date: '2024-01-15',readTime: '5 min read',tags: ['AIEnterprise', 'Trends']
        },
        {
          title: 'Cybersecurity Best Practices for Remote Work',excerpt: 'Essential security measures to protect your organization in the era of distributed teams.',author: 'Mike Rodriguez',date: '2024-01-10',readTime: '7 min read',tags: ['SecurityRemote Work', 'Best Practices']
        },
        {
          title: 'The Future of Quantum Computing in Business',excerpt: 'Exploring how quantum computing will revolutionize business processes and decision-making.',author: 'Dr. Alex Thompson',date: '2024-01-05',readTime: '8 min read',tags: ['Quantum ComputingInnovation', 'Technology']
        }
      ]
    },
    {
      name: 'Case Studies',icon: Target,description: 'Real-world success stories',featured: true,color: 'from-blue-500 to-cyan-500',items: [
        {
          title: 'TechCorp: 50% Cost Reduction with AI Automation',excerpt: 'How a Fortune 500 company achieved massive operational savings through intelligent process automation.',industry: 'Manufacturing',results: '50% cost reduction, 3x faster processes',
          tags: ['AI AutomationCost Reduction', 'Manufacturing']
        },
        {
          title: 'HealthPlus: 30% Improvement in Diagnostic Accuracy',excerpt: 'Healthcare provider leverages AI to enhance patient care and diagnostic precision.',industry: 'Healthcare',results: '30% accuracy improvement, 40% faster diagnosis',
          tags: ['AI HealthcareDiagnostics', 'Patient Care']
        },
        {
          title: 'StartupXYZ: 10x Faster Market Validation',excerpt: 'Early-stage startup accelerates growth with AI-powered analytics and automation.',industry: 'SaaS',results: '10x faster validation, 3x user engagement',
          tags: ['StartupAI Analytics', 'Growth']
        }
      ]
    },
    {
      name: 'White Papers',icon: FileText,description: 'In-depth research and analysis',featured: false,color: 'from-green-500 to-emerald-500',items: [
        {
          title: 'The State of AI in Enterprise 2024',excerpt: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments.',
          author: 'Zion Tech Group Research Team',date: '2024-01-20',pages: '45 pages',tags: ['AIEnterprise', 'Research']
        },
        {
          title: 'Cybersecurity Framework for Digital Transformation',excerpt: 'A comprehensive guide to securing your organization during digital transformation initiatives.',author: 'Security Experts Team',date: '2024-01-15',pages: '32 pages',tags: ['SecurityDigital Transformation', 'Framework']
        }
      ]
    },
    {
      name: 'Webinars',icon: Users,description: 'Expert-led learning sessions',featured: false,color: 'from-orange-500 to-red-500',items: [
        {
          title: 'AI Strategy Implementation',excerpt: 'Step-by-step guide to implementing AI strategies in your organization.',presenter: 'Dr. Sarah Chen',date: '2024-01-25',duration: '60 minutes',tags: ['AI StrategyImplementation', 'Leadership']
        },
        {
          title: 'Cloud Migration Best Practices',excerpt: 'Learn the essential steps for successful cloud migration projects.',presenter: 'Mike Rodriguez',date: '2024-01-30',duration: '45 minutes',tags: ['Cloud MigrationBest Practices', 'Infrastructure']
        }
      ]
    },
    {
      name: 'Documentation',icon: Code,description: 'Technical guides and API references',featured: false,color: 'from-indigo-500 to-purple-500',items: [
        {
          title: 'API Integration Guide',excerpt: 'Complete guide to integrating with our AI services and platforms.',version: 'v2.1',lastUpdated: '2024-01-20',tags: ['APIIntegration', 'Technical']
        },
        {
          title: 'SDK Documentation',excerpt: 'Comprehensive documentation for our software development kits.',version: 'v1.5',lastUpdated: '2024-01-18',tags: ['SDKDevelopment', 'Technical']
        }
      ]
    },
    {
      name: 'Support & Help',icon: HelpCircle,description: 'Get help when you need it',featured: false,color: 'from-yellow-500 to-orange-500',items: [
        {
          title: 'Knowledge Base',excerpt: 'Searchable database of common questions and solutions.',articles: '500+ articles',lastUpdated: '2024-01-22',tags: ['SupportHelp', 'Knowledge Base']
        },
        {
          title: 'Contact Support Team',excerpt: 'Get in touch with our expert support team for personalized assistance.',responseTime: '< 2 hours',availability: '24/7',tags: ['SupportContact', 'Help']
        }
      ]
    }
  ],

  const featuredResources = [
    {
      title: 'Pricing Guide 2030',description: 'Comprehensive pricing for all our AI and technology services',href: '/pricing-guide-2030',type: 'Guide',featured: true,icon: TrendingUp
    };
    {
      title: 'AI Services Overview',description: 'Complete guide to our AI-powered technology solutions',href: '/services',type: 'Overview',featured: true,icon: Brain
    },
    {
      title: 'Security & Compliance',description: 'Enterprise security standards and compliance frameworks',href: '/security',type: 'Framework',featured: true,icon: Shield
    }
  ];
  const upcomingEvents = [
    {
      title: 'AI Technology Summit 2024',date: 'December 15, 2024',
      time: '10:00 AM EST',type: 'Virtual Event',href: '/events/ai-summit-2024'
    };
    {
      title: 'Cybersecurity Workshop',date: 'December 20, 2024',
      time: '2:00 PM EST',type: 'Workshop',href: '/events/cybersecurity-workshop'
    },
    {
      title: 'Cloud Migration Webinar',date: 'January 10, 2025',
      time: '11:00 AM EST',type: 'Webinar',href: '/events/cloud-migration-webinar'
    }
  ];
  const quickLinks = [
    { name: 'Documentation', href: '/docs', type: 'Resource' };
    { name: 'FAQ', href: '/faq', type: 'Support' };
    { name: 'Case Studies', href: '/case-studies', type: 'Resource' };
    { name: 'White Papers', href: '/white-papers', type: 'Resource' };
    { name: 'Webinars', href: '/webinars', type: 'Resource' };
    { name: 'Blog', href: '/blog', type: 'Resource' };
    { name: 'Contact Support Team', href: '/contact', type: 'Support' },
    { name: 'Knowledge Base', href: '/knowledge-base', type: 'Resource' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support materials to help you succeed with technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                <BookOpen className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of resources, insights, and tools to accelerate your 
              technology journey and stay ahead of the curve.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, articles, guides..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Resources', value: '500+', icon: BookOpen };
                { label: 'Case Studies', value: '50+', icon: Target };
                { label: 'White Papers', value: '25+', icon: FileText },
                { label: 'Webinars', value: '100+', icon: Users }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these essential resources to get the most value from our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400 font-medium">{resource.type}</span>
                  <Link
                    to={resource.href}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    View Resource
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our resources organized by topic and type to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-purple-500/50"
              >
                {category.featured && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.items.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors">
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.excerpt}</p>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  View All {category.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live events and webinars to learn from industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">{event.type}</span>
                  </div>
                </div>
                
                <Link
                  to={event.href}
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find what you need quickly with these direct links to our most popular resources
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.href}
                  className="block p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-purple-500/50 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    {link.type === 'Resource' && <BookOpen className="w-6 h-6 text-purple-400" />}
                    {link.type === 'Support' && <HelpCircle className="w-6 h-6 text-pink-400" />}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{link.type}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest resources, insights, and updates delivered directly to your inbox. 
                Never miss out on valuable content that can help your business grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is here to help you find the right resources for your specific needs. 
              Get personalized recommendations and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
