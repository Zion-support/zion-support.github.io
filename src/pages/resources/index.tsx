import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  ArrowRight,
  Star,
  Calendar,
  Download,
  ExternalLink,
  Play,
  Zap,
  CheckCircle
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: 'Blog & Insights',
      description: 'Latest industry trends, technology insights, and expert analysis',
      icon: BookOpen,
      href: '/blog',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      items: [
        'AI Technology Trends',
        'Industry Insights',
        'Expert Interviews',
        'Technology News'
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementation results',
      icon: Target,
      href: '/case-studies',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Enterprise Transformations',
        'AI Implementation Success',
        'ROI Analysis',
        'Customer Stories'
      ]
    },
    {
      title: 'White Papers',
      description: 'In-depth research and analysis on emerging technologies',
      icon: FileText,
      href: '/white-papers',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      items: [
        'AI Research Papers',
        'Technology Analysis',
        'Industry Reports',
        'Best Practices'
      ]
    },
    {
      title: 'Webinars',
      description: 'Expert-led learning sessions and technology demonstrations',
      icon: Users,
      href: '/webinars',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      items: [
        'Live Demonstrations',
        'Expert Q&A Sessions',
        'Technology Deep Dives',
        'Industry Panels'
      ]
    },
    {
      title: 'Documentation',
      description: 'Technical guides, APIs, and implementation resources',
      icon: Code,
      href: '/docs',
      featured: false,
      color: 'from-orange-500 to-red-500',
      items: [
        'API Documentation',
        'Implementation Guides',
        'Technical Specifications',
        'Code Examples'
      ]
    },
    {
      title: 'FAQ & Support',
      description: 'Get help and answers to common questions',
      icon: HelpCircle,
      href: '/faq',
      featured: false,
      color: 'from-cyan-500 to-blue-500',
      items: [
        'Common Questions',
        'Troubleshooting',
        'Support Resources',
        'Contact Information'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Webinar',
      date: 'December 15, 2024',
      time: '2:00 PM EST',
      type: 'Webinar',
      featured: true
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'December 20, 2024',
      time: '10:00 AM EST',
      type: 'Workshop',
      featured: false
    },
    {
      title: 'Digital Transformation Summit',
      date: 'January 10, 2025',
      time: '9:00 AM EST',
      type: 'Conference',
      featured: true
    }
  ];

  const featuredDownloads = [
    {
      title: 'AI Implementation Guide 2024',
      description: 'Comprehensive guide to implementing AI solutions in your organization',
      type: 'PDF',
      size: '2.4 MB',
      featured: true
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential security practices for modern businesses',
      type: 'PDF',
      size: '1.8 MB',
      featured: false
    },
    {
      title: 'Digital Transformation Roadmap',
      description: 'Step-by-step roadmap for digital transformation success',
      type: 'PDF',
      size: '3.1 MB',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support resources."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of resources designed to help you stay ahead of the curve. 
              From expert insights to practical guides, we provide the knowledge you need to succeed.
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
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get Support
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
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by category to help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  resource.featured
                    ? 'border-purple-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-purple-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {resource.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={resource.href}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
                >
                  Explore {resource.title}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
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
              Join our live events, webinars, and workshops to learn from industry experts and stay updated on the latest trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className={`p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  event.featured
                    ? 'border-purple-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-purple-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {event.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs rounded-full font-medium">
                      <Star className="w-3 h-3" />
                      Featured Event
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Play className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Users className="w-4 h-4" />
                    {event.type}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Downloads
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our most popular resources and guides to accelerate your technology journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDownloads.map((download, index) => (
              <div
                key={download.title}
                className={`p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  download.featured
                    ? 'border-purple-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-purple-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {download.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs rounded-full font-medium">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {download.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {download.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">{download.type}</span>
                  <span className="text-sm text-gray-300">{download.size}</span>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you access the right resources 
              and get the support you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Our Team
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;