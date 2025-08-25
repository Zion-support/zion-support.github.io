import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Building, 
  Users, 
  Globe, 
  Star, 
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Zap
} from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that provide infrastructure and platforms",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      partners: [
        { name: "Microsoft Azure", logo: "/api/placeholder/120/60", tier: "Platinum", description: "Cloud infrastructure and AI services" },
        { name: "Amazon Web Services", logo: "/api/placeholder/120/60", tier: "Platinum", description: "Cloud computing and machine learning" },
        { name: "Google Cloud", logo: "/api/placeholder/120/60", tier: "Gold", description: "AI and data analytics platforms" },
        { name: "IBM", logo: "/api/placeholder/120/60", tier: "Gold", description: "Enterprise AI and quantum computing" }
      ]
    },
    {
      title: "Solution Partners",
      description: "Specialized solution providers that complement our offerings",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      partners: [
        { name: "Salesforce", logo: "/api/placeholder/120/60", tier: "Gold", description: "CRM and business automation" },
        { name: "Oracle", logo: "/api/placeholder/120/60", tier: "Silver", description: "Database and enterprise software" },
        { name: "SAP", logo: "/api/placeholder/120/60", tier: "Silver", description: "Enterprise resource planning" },
        { name: "ServiceNow", logo: "/api/placeholder/120/60", tier: "Silver", description: "IT service management" }
      ]
    },
    {
      title: "Channel Partners",
      description: "Resellers and distributors that help us reach new markets",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      partners: [
        { name: "TechCorp Solutions", logo: "/api/placeholder/120/60", tier: "Platinum", description: "North American distribution" },
        { name: "GlobalTech Partners", logo: "/api/placeholder/120/60", tier: "Gold", description: "European market expansion" },
        { name: "AsiaTech Alliance", logo: "/api/placeholder/120/60", tier: "Gold", description: "APAC region coverage" },
        { name: "Innovation Hub", logo: "/api/placeholder/120/60", tier: "Silver", description: "Startup ecosystem" }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Joint Go-to-Market",
      description: "Collaborative marketing and sales initiatives to reach new customers",
      icon: TrendingUp
    },
    {
      title: "Technology Integration",
      description: "Seamless integration between our solutions and partner platforms",
      icon: Network
    },
    {
      title: "Training & Certification",
      description: "Comprehensive training programs for partner teams",
      icon: Award
    },
    {
      title: "Revenue Sharing",
      description: "Attractive revenue sharing models for successful partnerships",
      icon: Star
    }
  ];

  const partnershipTiers = [
    {
      name: "Platinum",
      description: "Strategic partnerships with highest level of collaboration",
      benefits: [
        "Exclusive market access",
        "Joint product development",
        "Priority support and resources",
        "Highest revenue sharing rates",
        "Executive relationship management"
      ],
      requirements: [
        "Annual revenue commitment: $10M+",
        "Dedicated partnership team",
        "Joint marketing investment",
        "Regular strategic reviews"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Gold",
      description: "Established partnerships with significant business impact",
      benefits: [
        "Preferred partner status",
        "Joint go-to-market programs",
        "Enhanced technical support",
        "Competitive revenue sharing",
        "Quarterly business reviews"
      ],
      requirements: [
        "Annual revenue commitment: $5M+",
        "Certified technical team",
        "Marketing collaboration",
        "Quarterly performance reviews"
      ],
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Silver",
      description: "Growing partnerships with mutual business opportunities",
      benefits: [
        "Standard partner benefits",
        "Technical enablement",
        "Marketing support",
        "Standard revenue sharing",
        "Annual business reviews"
      ],
      requirements: [
        "Annual revenue commitment: $1M+",
        "Basic technical certification",
        "Marketing participation",
        "Annual performance reviews"
      ],
      color: "from-amber-600 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of technology leaders, solution providers, and channel partners 
            to deliver exceptional value to customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200">
              <span>Partner Portal</span>
            </button>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Partner Ecosystem
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We collaborate with industry leaders across technology, solutions, and channels 
              to create comprehensive value for our customers.
            </p>
          </div>
          
          <div className="space-y-16">
            {partnerCategories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIdx) => (
                    <div key={partnerIdx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                      <div className="text-center">
                        <div className="w-24 h-12 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{partner.name}</span>
                        </div>
                        <div className="mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            partner.tier === 'Gold' ? 'bg-gray-400/20 text-gray-400 border border-gray-400/30' :
                            'bg-amber-600/20 text-amber-400 border border-amber-600/30'
                          }`}>
                            {partner.tier}
                          </span>
                        </div>
                        <h4 className="font-semibold mb-2">{partner.name}</h4>
                        <p className="text-gray-400 text-sm">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive support and resources to help our partners succeed 
              and grow their business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the partnership level that best fits your business goals and commitment level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400">{tier.description}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Requirements</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((requirement, reqIdx) => (
                        <li key={reqIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Partner Ecosystem?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can work together to deliver exceptional value 
            to customers and grow our businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Partnership Discussion</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/partner-portal"
              className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              Partner Portal Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
