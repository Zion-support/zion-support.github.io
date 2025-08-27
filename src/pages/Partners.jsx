import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  Building,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate with leading tech companies to deliver cutting-edge solutions',
      icon: '🔧',
      benefits: ['Access to latest technologies', 'Joint product development', 'Shared marketing opportunities']
    },
    {
      title: 'Channel Partners',
      description: 'Expand your reach through our global network of resellers and distributors',
      icon: '🌐',
      benefits: ['Increased market presence', 'Revenue sharing programs', 'Training and certification']
    },
    {
      title: 'Strategic Partners',
      description: 'Form long-term alliances for mutual growth and market expansion',
      icon: '🤝',
      benefits: ['Joint ventures', 'Market expansion support', 'Shared R&D initiatives']
    },
    {
      title: 'Academic Partners',
      description: 'Partner with universities and research institutions for innovation',
      icon: '🎓',
      benefits: ['Research collaboration', 'Talent pipeline', 'Innovation programs']
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1634942537034-2531766767d9?w=200&h=200&fit=crop',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      year: '2020'
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
      category: 'Cloud Partner',
      description: 'World\'s most comprehensive cloud platform',
      year: '2021'
    },
    {
      name: 'Google Cloud',
      logo: 'https://images.unsplash.com/photo-1611162617213-2d3e1baee311?w=200&h=200&fit=crop',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning solutions',
      year: '2022'
    },
    {
      name: 'IBM',
      logo: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop',
      category: 'Enterprise Partner',
      description: 'Enterprise AI and quantum computing',
      year: '2021'
    },
    {
      name: 'Stanford University',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop',
      category: 'Academic Partner',
      description: 'Research collaboration in AI and technology',
      year: '2023'
    },
    {
      name: 'MIT',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',
      category: 'Research Partner',
      description: 'Innovation in emerging technologies',
      year: '2022'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through our global network'
    },
    {
      icon: Users,
      title: 'Network Expansion',
      description: 'Connect with industry leaders and potential customers worldwide'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Leverage our established brand and market presence'
    },
    {
      icon: Building,
      title: 'Resource Sharing',
      description: 'Access shared resources, expertise, and infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Partnerships</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join forces with Zion Tech Group to create innovative solutions, expand your market reach, 
            and drive technological advancement together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partnership <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the different ways we can collaborate to create mutual value and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-zion-slate-light mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Partner</span> With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the advantages of partnering with a forward-thinking technology company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join an elite network of technology leaders and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                    <p className="text-zion-cyan text-sm">{partner.category}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Partner since {partner.year}</span>
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Partner</span> With Us?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how we can create value together and drive innovation in the technology sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
