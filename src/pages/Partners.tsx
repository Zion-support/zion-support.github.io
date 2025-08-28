import React from 'react';
import { SEO } from '../components/SEO';
import { Handshake, Users, Globe, Building, Star, ArrowRight, CheckCircle, Award, Target, Zap, Shield, Cpu, Database, Server, Lock, Mail, Phone, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Co-marketing opportunities'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Collaborate on comprehensive business solutions',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Joint solution development',
        'Shared revenue opportunities',
        'Market expansion support',
        'Training and certification'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Competitive pricing and margins',
        'Sales and technical training',
        'Marketing materials and support',
        'Dedicated partner success manager'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic alliances and joint ventures',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Exclusive partnership agreements',
        'Joint investment opportunities',
        'Shared intellectual property',
        'Board-level collaboration'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.svg',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and enterprise software integration',
      year: '2020',
      achievements: ['Azure Gold Partner', 'Microsoft 365 Expert', 'Dynamics 365 Partner']
    },
    {
      name: 'AWS',
      logo: '/partners/aws.svg',
      type: 'Technology Partner',
      description: 'Advanced consulting partner specializing in cloud migration and optimization',
      year: '2019',
      achievements: ['AWS Advanced Consulting Partner', 'Migration Competency', 'Well-Architected Partner']
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.svg',
      type: 'Technology Partner',
      description: 'Partner for AI/ML solutions and data analytics on Google Cloud Platform',
      year: '2021',
      achievements: ['Google Cloud Partner', 'AI/ML Specialization', 'Data Analytics Partner']
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.svg',
      type: 'Solution Partner',
      description: 'Consulting partner for CRM implementation and custom development',
      year: '2018',
      achievements: ['Salesforce Consulting Partner', 'Platform Developer', 'Sales Cloud Expert']
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.svg',
      type: 'Technology Partner',
      description: 'Partner for database solutions and enterprise applications',
      year: '2020',
      achievements: ['Oracle Gold Partner', 'Database Specialization', 'Cloud Infrastructure Partner']
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.svg',
      type: 'Strategic Partner',
      description: 'Strategic alliance for AI solutions and enterprise consulting',
      year: '2019',
      achievements: ['IBM Business Partner', 'AI Solutions Partner', 'Watson Platform Expert']
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our partnership network',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Technical Excellence',
      description: 'Leverage our expertise in AI, cloud, and emerging technologies',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Market Access',
      description: 'Reach new customers and expand your market presence',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Innovation',
      description: 'Collaborate on cutting-edge solutions and stay ahead of the competition',
      icon: Star,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with Zion Tech Group's innovative technology solutions and strategic partnerships."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">
                <Handshake className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner With
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of technology partners, solution providers, and strategic allies. 
              Together, we can deliver innovative solutions that transform businesses and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Partner Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <h4 className="font-semibold text-indigo-400 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                  <span className="text-xs text-indigo-400 font-medium">{partner.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">Partner since {partner.year}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-indigo-400 text-sm">Achievements:</h4>
                  {partner.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <Award className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our partners have grown their businesses through collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                company: 'TechFlow Solutions',
                story: 'Increased revenue by 300% through our joint AI solutions and expanded into three new markets.',
                results: ['300% revenue growth', '3 new markets', '50+ new clients'],
                type: 'Solution Partner'
              },
              {
                company: 'CloudFirst Systems',
                story: 'Achieved AWS Advanced Consulting Partner status and grew their cloud practice by 400%.',
                results: ['AWS Advanced Partner', '400% practice growth', 'Enterprise client base'],
                type: 'Technology Partner'
              }
            ].map((story, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                  <span className="text-sm text-indigo-400 font-medium">{story.type}</span>
                </div>
                
                <p className="text-gray-300 mb-6">{story.story}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-indigo-400 text-sm">Key Results:</h4>
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partner Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access the tools and resources you need to succeed as a partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Partner Portal',
                description: 'Access your partner dashboard, resources, and tools',
                icon: Shield,
                color: 'from-blue-500 to-cyan-500',
                link: '/partner-portal'
              },
              {
                title: 'Training & Certification',
                description: 'Get certified on our solutions and technologies',
                icon: Award,
                color: 'from-green-500 to-emerald-500',
                link: '/training'
              },
              {
                title: 'Marketing Resources',
                description: 'Download marketing materials and campaign assets',
                icon: Target,
                color: 'from-purple-500 to-pink-500',
                link: '/marketing-resources'
              },
              {
                title: 'Technical Documentation',
                description: 'Access technical guides and integration resources',
                icon: Code,
                color: 'from-orange-500 to-red-500',
                link: '/docs'
              },
              {
                title: 'Sales Enablement',
                description: 'Get sales training and competitive intelligence',
                icon: Users,
                color: 'from-indigo-500 to-purple-500',
                link: '/sales-enablement'
              },
              {
                title: 'Support & Success',
                description: 'Access partner support and success resources',
                icon: Handshake,
                color: 'from-cyan-500 to-blue-500',
                link: '/support'
              }
            ].map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                
                <div className="inline-flex items-center gap-2 text-indigo-400 group-hover:text-indigo-300 font-medium transition-colors">
                  Access
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
              Let's build the future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
