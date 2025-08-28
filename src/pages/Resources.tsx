import React from 'react';
import { SEO } from '../components/SEO';
import { BookOpen, Target, FileText, Users, Code, HelpCircle, ArrowRight, Calendar, Download, Play, ExternalLink, Star, Clock, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      name: 'Blog & Insights',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI in 2024: The Year of Enterprise Adoption',
          excerpt: 'Discover how artificial intelligence is transforming enterprise operations and what to expect in the coming year.',
          author: 'Dr. Sarah Chen',
          date: '2024-01-15',
          readTime: '5 min read',
          tags: ['AI', 'Enterprise', 'Trends']
        },
        {
          title: 'Cybersecurity Best Practices for Remote Work',
          excerpt: 'Essential security measures to protect your organization in the era of distributed teams.',
          author: 'Mike Rodriguez',
          date: '2024-01-10',
          readTime: '7 min read',
          tags: ['Security', 'Remote Work', 'Best Practices']
        },
        {
          title: 'The Future of Quantum Computing in Business',
          excerpt: 'Exploring how quantum computing will revolutionize business processes and decision-making.',
          author: 'Dr. Alex Thompson',
          date: '2024-01-05',
          readTime: '8 min read',
          tags: ['Quantum Computing', 'Innovation', 'Technology']
        }
      ]
    },
    {
      name: 'Case Studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'TechCorp: 50% Cost Reduction with AI Automation',
          excerpt: 'How a Fortune 500 company achieved massive operational savings through intelligent process automation.',
          industry: 'Manufacturing',
          results: '50% cost reduction, 3x faster processes',
          tags: ['AI Automation', 'Cost Reduction', 'Manufacturing']
        },
        {
          title: 'HealthPlus: 30% Improvement in Diagnostic Accuracy',
          excerpt: 'Healthcare provider leverages AI to enhance patient care and diagnostic precision.',
          industry: 'Healthcare',
          results: '30% accuracy improvement, 40% faster diagnosis',
          tags: ['AI Healthcare', 'Diagnostics', 'Patient Care']
        },
        {
          title: 'StartupXYZ: 10x Faster Market Validation',
          excerpt: 'Early-stage startup accelerates growth with AI-powered analytics and automation.',
          industry: 'SaaS',
          results: '10x faster validation, 3x user engagement',
          tags: ['Startup', 'AI Analytics', 'Growth']
        }
      ]
    },
    {
      name: 'White Papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'The State of AI in Enterprise 2024',
          excerpt: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments.',
          author: 'Zion Tech Group Research Team',
          date: '2024-01-20',
          pages: '45 pages',
          tags: ['AI', 'Enterprise', 'Research']
        },
        {
          title: 'Cybersecurity Framework for Digital Transformation',
          excerpt: 'A comprehensive guide to securing your organization during digital transformation initiatives.',
          author: 'Security Experts Team',
          date: '2024-01-15',
          pages: '32 pages',
          tags: ['Security', 'Digital Transformation', 'Framework']
        }
      ]
    },
    {
      name: 'Webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: false,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'AI Implementation Strategies for SMBs',
          excerpt: 'Learn practical approaches to implementing AI solutions in small and medium businesses.',
          host: 'Dr. Emily Johnson',
          date: '2024-02-15',
          duration: '60 minutes',
          tags: ['AI', 'SMB', 'Implementation']
        },
        {
          title: 'Future of Cloud Computing and DevOps',
          excerpt: 'Explore emerging trends in cloud infrastructure and development operations.',
          host: 'Cloud Architecture Team',
          date: '2024-02-20',
          duration: '90 minutes',
          tags: ['Cloud', 'DevOps', 'Infrastructure']
        }
      ]
    },
    {
      name: 'Documentation',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'API Reference Guide',
          excerpt: 'Complete API documentation for all Zion Tech Group services and platforms.',
          version: 'v2.1.0',
          lastUpdated: '2024-01-20',
          tags: ['API', 'Documentation', 'Technical']
        },
        {
          title: 'Integration Best Practices',
          excerpt: 'Guidelines for integrating our services with your existing systems and workflows.',
          version: 'v1.5.0',
          lastUpdated: '2024-01-15',
          tags: ['Integration', 'Best Practices', 'Technical']
        }
      ]
    },
    {
      name: 'FAQ & Support',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: false,
      color: 'from-gray-500 to-slate-500',
      items: [
        {
          title: 'Getting Started Guide',
          excerpt: 'Step-by-step guide to get up and running with our services quickly.',
          category: 'Onboarding',
          tags: ['Getting Started', 'Onboarding', 'Guide']
        },
        {
          title: 'Common Issues & Solutions',
          excerpt: 'Troubleshooting guide for frequently encountered problems and their solutions.',
          category: 'Troubleshooting',
          tags: ['Troubleshooting', 'Support', 'Solutions']
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Strategy Workshop',
      date: '2024-02-25',
      time: '10:00 AM EST',
      description: 'Interactive workshop on developing AI strategies for your organization.',
      type: 'Workshop',
      spots: '25 remaining'
    },
    {
      title: 'Cybersecurity Roundtable',
      date: '2024-03-01',
      time: '2:00 PM EST',
      description: 'Expert discussion on emerging cybersecurity threats and defense strategies.',
      type: 'Roundtable',
      spots: '50 remaining'
    },
    {
      title: 'Digital Transformation Summit',
      date: '2024-03-15',
      time: '9:00 AM EST',
      description: 'Annual summit bringing together industry leaders to discuss digital transformation trends.',
      type: 'Summit',
      spots: '100 remaining'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of insights, case studies, technical guides, and learning resources 
              to accelerate your technology journey and stay ahead of industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Explore Resources
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Resource Library
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From industry insights to technical documentation, find everything you need to succeed with 
              modern technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.name}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  resource.featured 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-purple-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800'
                }`}
              >
                {resource.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{resource.name}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                
                <div className="space-y-4 mb-6">
                  {resource.items.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="border-l-2 border-slate-600 pl-4">
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 mb-2">{item.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags?.slice(0, 2).map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={resource.name === 'Blog & Insights' ? '/blog' : 
                      resource.name === 'Case Studies' ? '/case-studies' : 
                      resource.name === 'White Papers' ? '/white-papers' :
                      resource.name === 'Webinars' ? '/webinars' :
                      resource.name === 'Documentation' ? '/docs' : '/faq'}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  View All {resource.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live events, workshops, and webinars to learn from industry experts and network with peers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                    event.type === 'Roundtable' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-400">{event.spots}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest industry insights, case studies, and technology updates 
              delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Specific Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our team can create custom content, case studies, 
              or technical documentation tailored to your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Request Custom Content
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
