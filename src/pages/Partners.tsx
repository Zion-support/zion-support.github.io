import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Star,
  Heart,
  Lightbulb,
  TrendingUp,
  Building,
  Target,
  CheckCircle
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Technology Partners',
      description: 'Collaborate with leading technology providers to deliver comprehensive solutions.',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint go-to-market strategies',
        'Technical support and training',
        'Revenue sharing opportunities'
      ],
      examples: ['Microsoft', 'AWS', 'Google Cloud', 'Oracle']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Resell our solutions and expand your service portfolio.',
      benefits: [
        'Competitive margins and pricing',
        'Marketing and sales support',
        'Technical training and certification',
        'Dedicated partner success manager'
      ],
      examples: ['IT Consultants', 'System Integrators', 'VARs', 'MSPs']
    },
    {
      icon: Rocket,
      title: 'Strategic Partners',
      description: 'Long-term partnerships for joint innovation and market expansion.',
      benefits: [
        'Co-development of solutions',
        'Shared intellectual property',
        'Joint research initiatives',
        'Market expansion support'
      ],
      examples: ['Universities', 'Research Institutions', 'Industry Leaders']
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'Expand your reach with our global network and local expertise.',
      benefits: [
        'Local market knowledge',
        'Regulatory compliance support',
        'Cultural adaptation',
        'Multi-language support'
      ],
      examples: ['Regional IT Companies', 'Local Consultants', 'International Firms']
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: 'MS',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services.',
      year: '2020'
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      type: 'Technology Partner',
      description: 'Premier consulting partner for AWS cloud infrastructure and AI solutions.',
      year: '2019'
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      type: 'Technology Partner',
      description: 'Partner for Google Cloud AI and machine learning solutions.',
      year: '2021'
    },
    {
      name: 'Stanford University',
      logo: 'SU',
      type: 'Strategic Partner',
      description: 'Research collaboration in quantum computing and AI ethics.',
      year: '2022'
    },
    {
      name: 'Deloitte',
      logo: 'DL',
      type: 'Channel Partner',
      description: 'Global consulting partnership for enterprise digital transformation.',
      year: '2021'
    },
    {
      name: 'Accenture',
      logo: 'AC',
      type: 'Channel Partner',
      description: 'Strategic partnership for AI-powered business solutions.',
      year: '2020'
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our partnership network.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Collaborate on cutting-edge technology solutions and research initiatives.'
    },
    {
      icon: Users,
      title: 'Market Access',
      description: 'Leverage our global presence and industry expertise to reach new customers.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share risks and resources while expanding your business capabilities.'
    },
    {
      icon: Brain,
      title: 'Knowledge Sharing',
      description: 'Access to our technical expertise and industry best practices.'
    },
    {
      icon: Star,
      title: 'Brand Enhancement',
      description: 'Strengthen your market position through association with industry leaders.'
    }
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Discussion',
      description: 'Schedule a meeting to discuss partnership opportunities and alignment.',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Partnership Assessment',
      description: 'Evaluate strategic fit, capabilities, and market opportunities.',
      duration: '2-4 weeks'
    },
    {
      step: '3',
      title: 'Agreement Development',
      description: 'Negotiate terms and develop partnership agreement.',
      duration: '4-6 weeks'
    },
    {
      step: '4',
      title: 'Launch & Training',
      description: 'Execute partnership and provide necessary training and support.',
      duration: '2-3 weeks'
    },
    {
      step: '5',
      title: 'Growth & Optimization',
      description: 'Monitor performance and optimize partnership for mutual success.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Partnership Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join our global network of partners and together we can transform businesses 
            through innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Become a Partner
            </Link>
            <Link
              to="#partnerships"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnerships" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer various partnership models to meet different business needs and objectives
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partnership ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">{partner.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{partner.type}</p>
                  <span className="text-xs text-gray-400">Partner since {partner.year}</span>
                </div>
                <p className="text-gray-300 text-center">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple and transparent process to become our partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {partnershipProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Requirements</h2>
            <p className="text-xl text-gray-300">
              What we look for in our partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Essential Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Industry Expertise</h4>
                    <p className="text-gray-300 text-sm">Deep knowledge in your domain and market</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Quality Standards</h4>
                    <p className="text-gray-300 text-sm">Commitment to delivering excellence</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Customer Focus</h4>
                    <p className="text-gray-300 text-sm">Dedication to customer success</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Innovation Mindset</h4>
                    <p className="text-gray-300 text-sm">Openness to new technologies and approaches</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Preferred Qualities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Global Reach</h4>
                    <p className="text-gray-300 text-sm">International presence and capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Technical Excellence</h4>
                    <p className="text-gray-300 text-sm">Strong technical capabilities and certifications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Cultural Alignment</h4>
                    <p className="text-gray-300 text-sm">Shared values and business philosophy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Growth Potential</h4>
                    <p className="text-gray-300 text-sm">Capacity for scaling and expansion</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of successful partners and together we can achieve 
            extraordinary results for our clients and businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Partnership Discussion
            </Link>
            <Link
              to="/about"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;