import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Handshake, 
  Building, 
  Users, 
  Globe, 
  Award, 
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  Lightbulb,
  Target,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: Users },
    { id: 'technology', name: 'Technology', icon: Zap },
    { id: 'consulting', name: 'Consulting', icon: Lightbulb },
    { id: 'enterprise', name: 'Enterprise', icon: Building },
    { id: 'startup', name: 'Startup', icon: Rocket },
    { id: 'global', name: 'Global', icon: Globe }
  ];

  const partners = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      category: 'technology',
      description: 'Leading provider of enterprise software solutions and cloud infrastructure services.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'Technology Alliance',
      benefits: [
        'Joint product development',
        'Shared go-to-market strategies',
        'Technical integration support',
        'Co-marketing opportunities'
      ],
      successMetrics: {
        projects: 25,
        revenue: '$2.5M',
        clients: 150
      },
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Innovate Consulting Group',
      category: 'consulting',
      description: 'Strategic consulting firm specializing in digital transformation and AI implementation.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'Strategic Partnership',
      benefits: [
        'Joint consulting engagements',
        'Shared methodology development',
        'Client referral programs',
        'Thought leadership collaboration'
      ],
      successMetrics: {
        projects: 18,
        revenue: '$1.8M',
        clients: 85
      },
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Global Systems Inc.',
      category: 'enterprise',
      description: 'Fortune 500 company with global operations in manufacturing and logistics.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'Enterprise Partnership',
      benefits: [
        'Large-scale implementations',
        'Global expansion support',
        'Enterprise security solutions',
        'Custom development services'
      ],
      successMetrics: {
        projects: 42,
        revenue: '$8.2M',
        clients: 300
      },
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'StartupHub Ventures',
      category: 'startup',
      description: 'Venture capital firm and startup accelerator focused on AI and technology companies.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'Innovation Partnership',
      benefits: [
        'Startup investment opportunities',
        'Technology incubation programs',
        'Market validation support',
        'Strategic advisory services'
      ],
      successMetrics: {
        projects: 12,
        revenue: '$950K',
        clients: 45
      },
      featured: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'EuroTech Solutions',
      category: 'global',
      description: 'European technology company specializing in AI and machine learning solutions.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'International Partnership',
      benefits: [
        'European market expansion',
        'Cross-border collaboration',
        'Regulatory compliance support',
        'Local market expertise'
      ],
      successMetrics: {
        projects: 28,
        revenue: '$3.1M',
        clients: 120
      },
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'CloudFirst Technologies',
      category: 'technology',
      description: 'Cloud infrastructure and DevOps automation specialists.',
      logo: '/api/placeholder/200/100',
      partnershipType: 'Technology Alliance',
      benefits: [
        'Cloud migration support',
        'DevOps automation tools',
        'Infrastructure optimization',
        'Performance monitoring'
      ],
      successMetrics: {
        projects: 35,
        revenue: '$4.2M',
        clients: 200
      },
      featured: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const partnershipTypes = [
    {
      name: 'Technology Alliance',
      description: 'Joint product development and technical integration',
      icon: Zap,
      benefits: [
        'Shared technology roadmap',
        'API integration support',
        'Co-development opportunities',
        'Technical training programs'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Strategic Partnership',
      description: 'Long-term business collaboration and growth',
      icon: Handshake,
      benefits: [
        'Joint go-to-market strategies',
        'Shared customer base',
        'Revenue sharing models',
        'Strategic planning sessions'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise Partnership',
      description: 'Large-scale implementations and enterprise solutions',
      icon: Building,
      benefits: [
        'Enterprise-grade solutions',
        'Global deployment support',
        'Custom development services',
        'Dedicated support teams'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Innovation Partnership',
      description: 'Research, development, and innovation collaboration',
      icon: Lightbulb,
      benefits: [
        'Joint R&D initiatives',
        'Innovation labs',
        'Patent collaboration',
        'Academic partnerships'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through partner networks',
      icon: TrendingUp,
      metric: '40%',
      detail: 'Average revenue increase'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your reach into new geographic and vertical markets',
      icon: Globe,
      metric: '25+',
      detail: 'New markets accessed'
    },
    {
      title: 'Technology Innovation',
      description: 'Collaborate on cutting-edge technology development',
      icon: Rocket,
      metric: '15+',
      detail: 'Joint patents filed'
    },
    {
      title: 'Customer Success',
      description: 'Deliver better solutions through combined expertise',
      icon: Award,
      metric: '95%',
      detail: 'Customer satisfaction'
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business through strategic partnerships. Discover partnership opportunities and success stories."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our growing partner ecosystem and unlock new opportunities for growth, 
              innovation, and market expansion. Together, we can achieve more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Become a Partner
              </Link>
              <Link
                to="#partnership-types"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and how it can 
              accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-1">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-800/70 rounded-2xl p-8 hover:bg-slate-800/90 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the innovative companies that have joined our partner ecosystem
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  partner.featured 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-cyan-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800/70'
                }`}
              >
                {partner.featured && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Featured Partner
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-3">{partner.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full">
                        {partner.partnershipType}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{partner.successMetrics.projects}</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{partner.successMetrics.revenue}</div>
                    <div className="text-sm text-gray-400">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{partner.successMetrics.clients}</div>
                    <div className="text-sm text-gray-400">Clients</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No partners found</h3>
              <p className="text-gray-300">
                Try selecting a different category or contact us to become a partner.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Become a Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and success. 
              Our team is ready to help you get started.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Initial Consultation</h3>
                <p className="text-gray-300 text-sm">
                  Schedule a call to discuss partnership opportunities and alignment
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Partnership Planning</h3>
                <p className="text-gray-300 text-sm">
                  Develop a customized partnership strategy and roadmap
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Launch & Growth</h3>
                <p className="text-gray-300 text-sm">
                  Execute the partnership plan and scale together
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Partnership Discussion
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
              >
                Email Partnerships Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
