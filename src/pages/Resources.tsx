import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  BookOpen
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
  Tag
  TrendingUp
  Brain
  Shield
  Search
  Filter
  Bookmark
  Share2
  Eye
  Heart
  MessageCircle
  Zap
  Globe
  Rocket
  Cpu
  Database
  Network
  Lock
  Award
  BarChart3
  Leaf
  Building
  Cloud
  Server
  Target as TargetIcon
  Users as UsersIcon
  Code as CodeIcon
  HelpCircle as HelpCircleIcon
  Calendar as CalendarIcon
  Download as DownloadIcon
  Play as PlayIcon
  ExternalLink as ExternalLinkIcon
  Star as StarIcon
  Clock as ClockIcon
  User as UserIcon
  Tag as TagIcon
} from "lucide-react"
import { Link } from "react-router-dom"
export default function Resources() {
  const resources = [
  {
  na,
  m: e: 'Blog & Insights',ic,
  o: n: BookOpen,descripti,
  o: n: 'Latest industry trends and insights',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500',ite,
  m: s: [
  {
  tit,
  l: e: 'AI in 202,
  4: The Year of Enterprise Adoption',excer,
  p: t: 'Discover how artificial intelligence is transforming enterprise operations and what to expect in the coming year.',auth,
  o: r: 'Dr. Sarah Chen',da,
  t: e: '2024-01-15',readTi,
  m: e: '5 min read',ta,
  g: s: [['AIEnterprise', 'Trends'],
  ],
  },
  {
  tit,
  l: e: 'Cybersecurity Best Practices for Remote Work',excer,
  p: t: 'Essential security measures to protect your organization in the era of distributed teams.',auth,
  o: r: 'Mike Rodriguez',da,
  t: e: '2024-01-10',readTi,
  m: e: '7 min read',ta,
  g: s: [['SecurityRemote Work', 'Best Practices'],
  ],
  },
  {
  tit,
  l: e: 'The Future of Quantum Computing in Business',excer,
  p: t: 'Exploring how quantum computing will revolutionize business processes and decision-making.',auth,
  o: r: 'Dr. Alex Thompson',da,
  t: e: '2024-01-05',readTi,
  m: e: '8 min read',ta,
  g: s: [['Quantum ComputingInnovation', 'Technology'],
  ],
  },
  ],
  },
  {
  na,
  m: e: 'Case Studies',ic,
  o: n: Target,descripti,
  o: n: 'Real-world success stories',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-cyan-500',ite,
  m: s: [
  {
  tit,
  l: e: 'TechCor,
  p: 50% Cost Reduction with AI Automation',excer,
  p: t: 'How a Fortune 500 company achieved massive operational savings through intelligent process automation.',indust,
  r: y: 'Manufacturing',resul,
  t: s: '50% cost reduction, 3x faster processes'
          ta,
  g: s: [['AI AutomationCost Reduction', 'Manufacturing'],
  ],
  },
  {
  tit,
  l: e: 'HealthPlu,
  s: 30% Improvement in Diagnostic Accuracy',excer,
  p: t: 'Healthcare provider leverages AI to enhance patient care and diagnostic precision.',indust,
  r: y: 'Healthcare',resul,
  t: s: '30% accuracy improvement, 40% faster diagnosis'
          ta,
  g: s: [['AI HealthcareDiagnostics', 'Patient Care'],
  ],
  },
  {
  tit,
  l: e: 'StartupXY,
  Z: 10x Faster Market Validation',excer,
  p: t: 'Early-stage startup accelerates growth with AI-powered analytics and automation.',indust,
  r: y: 'SaaS',resul,
  t: s: '10x faster validation, 3x user engagement'
          ta,
  g: s: [['StartupAI Analytics', 'Growth'],
  ],
  },
  ],
  },
  {
  na,
  m: e: 'White Papers',ic,
  o: n: FileText,descripti,
  o: n: 'In-depth research and analysis',featur,
  e: d: false,col,
  o: r: 'from-green-500 to-emerald-500',ite,
  m: s: [
  {
  titl,
  e: 'The State of AI in Enterprise 2024',excer,
  p: t: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments.'
          auth,
  o: r: 'Zion Tech Group Research Team',da,
  t: e: '2024-01-20',pag,
  e: s: '45 pages',ta,
  g: s: [['AIEnterprise', 'Research'],
  ],
  },
  {
  tit,
  l: e: 'Cybersecurity Framework for Digital Transformation',excer,
  p: t: 'A comprehensive guide to securing your organization during digital transformation initiatives.',auth,
  o: r: 'Security Experts Team',da,
  t: e: '2024-01-15',pag,
  e: s: '32 pages',ta,
  g: s: [['SecurityDigital Transformation', 'Framework'],
  ],
  },
  ],
  },
  {
  na,
  m: e: 'Webinars',ic,
  o: n: Users,descripti,
  o: n: 'Expert-led learning sessions',featur,
  e: d: false,col,
  o: r: 'from-orange-500 to-red-500',ite,
  m: s: [
  {
  titl,
  e: 'AI Strategy Implementation',excer,
  p: t: 'Step-by-step guide to implementing AI strategies in your organization.',present,
  e: r: 'Dr. Sarah Chen',da,
  t: e: '2024-01-25',durati,
  o: n: '60 minutes',ta,
  g: s: [['AI StrategyImplementation', 'Leadership'],
  ],
  },
  {
  tit,
  l: e: 'Cloud Migration Best Practices',excer,
  p: t: 'Learn the essential steps for successful cloud migration projects.',present,
  e: r: 'Mike Rodriguez',da,
  t: e: '2024-01-30',durati,
  o: n: '45 minutes',ta,
  g: s: [['Cloud MigrationBest Practices', 'Infrastructure'],
  ],
  },
  ],
  },
  {
  na,
  m: e: 'Documentation',ic,
  o: n: Code,descripti,
  o: n: 'Technical guides and API references',featur,
  e: d: false,col,
  o: r: 'from-indigo-500 to-purple-500',ite,
  m: s: [
  {
  titl,
  e: 'API Integration Guide',excer,
  p: t: 'Complete guide to integrating with our AI services and platforms.',versi,
  o: n: 'v2.1',lastUpdat,
  e: d: '2024-01-20',ta,
  g: s: [['APIIntegration', 'Technical'],
  ],
  },
  {
  tit,
  l: e: 'SDK Documentation',excer,
  p: t: 'Comprehensive documentation for our software development kits.',versi,
  o: n: 'v1.5',lastUpdat,
  e: d: '2024-01-18',ta,
  g: s: [['SDKDevelopment', 'Technical'],
  ],
  },
  ],
  },
  {
  na,
  m: e: 'Support & Help',ic,
  o: n: HelpCircle,descripti,
  o: n: 'Get help when you need it',featur,
  e: d: false,col,
  o: r: 'from-yellow-500 to-orange-500',ite,
  m: s: [
  {
  titl,
  e: 'Knowledge Base',excer,
  p: t: 'Searchable database of common questions and solutions.',articl,
  e: s: '500+ articles',lastUpdat,
  e: d: '2024-01-22',ta,
  g: s: [['SupportHelp', 'Knowledge Base'],
  ],
  },
  {
  tit,
  l: e: 'Contact Support Team',excer,
  p: t: 'Get in touch with our expert support team for personalized assistance.',responseTi,
  m: e: '< 2 hours',availabili,
  t: y: '24/7',ta,
  g: s: [['SupportContact', 'Help'],
  ],
  },
  ],
  },
  ]

  const featuredResources = [
  {
  tit,
  l: e: 'Pricing Guide 2030',descripti,
  o: n: 'Comprehensive pricing for all our AI and technology services',hr,
  e: f: '/pricing-guide-2030',ty,
  p: e: 'Guide',featur,
  e: d: true,ic,
  o: n: TrendingUp
},
  {
  tit,
  l: e: 'AI Services Overview',descripti,
  o: n: 'Complete guide to our AI-powered technology solutions',hr,
  e: f: '/services',ty,
  p: e: 'Overview',featur,
  e: d: true,ic,
  o: n: Brain
},
  {
  tit,
  l: e: 'Security & Compliance',descripti,
  o: n: 'Enterprise security standards and compliance frameworks',hr,
  e: f: '/security',ty,
  p: e: 'Framework',featur,
  e: d: true,ic,
  o: n: Shield
},
  ]
  const upcomingEvents = [
  {
  tit,
  l: e: 'AI Technology Summit 2024',da,
  t: e: 'December 15, 2024'
      ti,
  m: e: '1,
  0:00 AM EST',ty,
  p: e: 'Virtual Event',hr,
  e: f: '/events/ai-summit-2024'
},
  {
  tit,
  l: e: 'Cybersecurity Workshop',da,
  t: e: 'December 20, 2024'
      ti,
  m: e: ',
  2:00 PM EST',ty,
  p: e: 'Workshop',hr,
  e: f: '/events/cybersecurity-workshop'
},
  {
  tit,
  l: e: 'Cloud Migration Webinar',da,
  t: e: 'January 10, 2025'
      ti,
  m: e: '1,
  1:00 AM EST',ty,
  p: e: 'Webinar',hr,
  e: f: '/events/cloud-migration-webinar'
},
  ]
  const quickLinks = [
  { na,
  m: e: 'Documentation', hr,
  e: f: '/docs', ty,
  p: e: 'Resource' },
  },
  { na,
  m: e: 'FAQ', hr,
  e: f: '/faq', ty,
  p: e: 'Support' },
  },
  { na,
  m: e: 'Case Studies', hr,
  e: f: '/case-studies', ty,
  p: e: 'Resource' },
  },
  { na,
  m: e: 'White Papers', hr,
  e: f: '/white-papers', ty,
  p: e: 'Resource' },
  },
  { na,
  m: e: 'Webinars', hr,
  e: f: '/webinars', ty,
  p: e: 'Resource' },
  },
  { na,
  m: e: 'Blog', hr,
  e: f: '/blog', ty,
  p: e: 'Resource' },
  },
  { na,
  m: e: 'Contact Support Team', hr,
  e: f: '/contact', ty,
  p: e: 'Support' },
  },
  { na,
  m: e: 'Knowledge Base', hr,
  e: f: '/knowledge-base', ty,
  p: e: 'Resource' },
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support materials to help you succeed with technology."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                <BookOpen className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of resources, insights, and tools to accelerate your 
              technology journey and stay ahead of the curve.
            </p>
            
            {/* Search Bar */},
  }
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, articles, guides..."
                  className="className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-500/50,
  focu: s:border-purple-500/50";"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg,
  hove: r:from-purple-600 hove,
  r:to-pink-600 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */},
  }
            <div className="grid grid-cols-2,
  m: d: grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
  { labe,
  l: 'Resources', val,
  u: e: '500+', ic,
  o: n: BookOpen },
  },
  { lab,
  e: l: 'Case Studies', val,
  u: e: '50+', ic,
  o: n: Target },
  },
  { lab,
  e: l: 'White Papers', val,
  u: e: '25+', ic,
  o: n: FileText },
  },
  { lab,
  e: l: 'Webinars', val,
  u: e: '100+', ic,
  o: n: Users },
  },
  ].map((stat, index) => (
  <motion.div
                  key={stat.label},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="text-center";"
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
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Resources */},
  }
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

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
  <motion.div
                key={resource.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700/50,
  hove: r: border-purple-500/50 transition-all duration-300,
  hove: r:scale-105";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hove,
  r:text-purple-400 transition-colors">
                  {resource.title},
  }
                </h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400 font-medium">{resource.type}</span>
                  <Link
                    to={resource.href},
  }
                    className="className="inline-flex items-center gap-2 text-purple-400,
  hove: r:text-purple-300 font-medium transition-colors";"
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

      {/* Resource Categories */},
  }
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

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {resources.map((category, index) => (
  <motion.div
                key={category.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group relative p-8 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300,
  hove: r:scale-105 border border-slate-700/50 hove,
  r:border-purple-500/50";"
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
                
                <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-purple-400 transition-colors">
                  {category.name},
  }
                </h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.items.slice(0, 2).map((item, idx) => (
  <div key={idx} className="p-3 rounded-lg bg-slate-700/50,
  hove: r:bg-slate-700 transition-colors">
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.excerpt}</p>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="className="inline-flex items-center gap-2 text-purple-400,
  hove: r:text-purple-300 font-medium transition-colors";"
                >
                  View All {category.name},
  }
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */},
  }
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

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
  <motion.div
                key={event.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700/50,
  hove: r: border-orange-500/50 transition-all duration-300,
  hove: r:scale-105";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hove,
  r:text-orange-400 transition-colors">
                  {event.title},
  }
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
                  to={event.href},
  }
                  className="className="inline-flex items-center gap-2 text-orange-400,
  hove: r:text-orange-300 font-medium transition-colors";"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */},
  }
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

          <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
  <motion.div
                key={link.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
              >
                <Link
                  to={link.href},
  }
                  className="className="block p-6 rounded-xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300,
  hove: r:scale-105 border border-slate-700/50,
  hove: r:border-purple-500/50 text-center group";"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hov,
  e: r:from-purple-500/30 group-hove,
  r:to-pink-500/30 transition-all duration-300">
                    {link.type === 'Resource' && <BookOpen className="w-6 h-6 text-purple-400" />},
  },
  {link.type === 'Support' && <HelpCircle className="w-6 h-6 text-pink-400" />},
  }
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hov,
  e: r:text-purple-400 transition-colors">
                    {link.name},
  }
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{link.type}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the latest resources, insights, and updates delivered directly to your inbox. 
                Never miss out on valuable content that can help your business grow.
              </p>
              
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-500/50,
  focu: s:border-purple-500/50";"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg,
  hove: r:from-purple-600,
  hove: r:to-pink-600 transition-all duration-300 transform hove,
  r:scale-105">
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

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is here to help you find the right resources for your specific needs. 
              Get personalized recommendations and expert guidance.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-purple-500/25";"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs"
                className="className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400,
  hove: r:bg-purple-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
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
