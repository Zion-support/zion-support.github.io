import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Building2, 
  Users2, 
  TrendingUp, 
  Award,
  Star,
  Zap,
  Shield,
  Lightbulb
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
               {
             title: "Strategic Alliance",
             description: "Long-term partnerships focused on joint innovation and market expansion",
             icon: Users2,
             benefits: [
               "Joint product development",
               "Shared marketing initiatives",
               "Revenue sharing opportunities",
               "Exclusive market access"
             ]
           },
    {
      title: "Technology Partnership",
      description: "Collaborative development of cutting-edge technology solutions",
      icon: Zap,
      benefits: [
        "Co-innovation programs",
        "Technology licensing",
        "Joint IP development",
        "Technical expertise sharing"
      ]
    },
    {
      title: "Channel Partnership",
      description: "Distribution and sales partnerships for mutual market growth",
      icon: Globe,
      benefits: [
        "Expanded market reach",
        "Local market expertise",
        "Joint sales initiatives",
        "Training and certification"
      ]
    },
    {
      title: "Solution Partnership",
      description: "Integration partnerships for comprehensive customer solutions",
      icon: Building2,
      benefits: [
        "Seamless integration",
        "Joint go-to-market",
        "Customer success collaboration",
        "Technical support sharing"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "TechCorp Solutions",
      category: "Strategic Partner",
      description: "Leading provider of enterprise software solutions",
      logo: "TC"
    },
    {
      name: "InnovateLab",
      category: "Technology Partner",
      description: "Cutting-edge AI and machine learning research",
      logo: "IL"
    },
    {
      name: "Global Systems",
      category: "Channel Partner",
      description: "Worldwide technology distribution network",
      logo: "GS"
    },
    {
      name: "SecureNet",
      category: "Solution Partner",
      description: "Cybersecurity and compliance solutions",
      logo: "SN"
    },
    {
      name: "CloudWorks",
      category: "Technology Partner",
      description: "Cloud infrastructure and DevOps expertise",
      logo: "CW"
    },
    {
      name: "DataFlow",
      category: "Solution Partner",
      description: "Big data analytics and business intelligence",
      logo: "DF"
    }
  ];

  const partnerBenefits = [
    {
      title: "Market Expansion",
      description: "Access new markets and customer segments through our global network",
      icon: Globe
    },
    {
      title: "Innovation Support",
      description: "Collaborate on cutting-edge technology development and research",
      icon: Lightbulb
    },
    {
      title: "Revenue Growth",
      description: "Increase your revenue through joint sales and marketing initiatives",
      icon: TrendingUp
    },
    {
      title: "Technical Excellence",
      description: "Leverage our technical expertise and best practices",
      icon: Award
    },
    {
      title: "Brand Recognition",
      description: "Enhance your brand visibility through strategic partnerships",
      icon: Star
    },
    {
      title: "Risk Mitigation",
      description: "Share risks and costs in joint development projects",
      icon: Shield
    }
  ];

  const successStories = [
    {
      partner: "TechCorp Solutions",
      outcome: "Joint AI solution increased customer efficiency by 40%",
      metrics: "40% efficiency improvement, $2M+ revenue generated"
    },
    {
      partner: "InnovateLab",
      outcome: "Co-developed machine learning platform for healthcare",
      metrics: "Platform deployed in 50+ hospitals, 95% accuracy rate"
    },
    {
      partner: "Global Systems",
      outcome: "Expanded market presence across 15 new countries",
      metrics: "150% market growth, 200+ new enterprise customers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Join our ecosystem of innovative partners and together we'll transform industries, 
              accelerate growth, and create lasting value for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                Become a Partner
              </Link>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Models</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer various partnership models to suit different business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-zion-slate-light mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're proud to work with leading technology companies and organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 text-center border border-zion-blue-light/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">{partner.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-zion-cyan mb-3">{partner.category}</p>
                <p className="text-zion-slate-light text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and growing your business with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how our partnerships have delivered exceptional results for our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{story.partner}</h3>
                <p className="text-zion-slate-light mb-4">{story.outcome}</p>
                <p className="text-sm text-zion-cyan font-medium">{story.metrics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become a Partner?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and help us deliver innovative 
            solutions that transform businesses and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
