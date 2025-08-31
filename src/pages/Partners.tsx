import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Building,
  ArrowRight,
  Star,
  CheckCircle,
  ExternalLink,
  Briefcase,
  Target
} from 'lucide-react';

const Partners = () => {
  const partnershipTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Technology Partners",
      description: "Integrate cutting-edge solutions and expand your technology portfolio",
      benefits: ["Joint product development", "Technical support", "Marketing collaboration"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Channel Partners",
      description: "Resell our solutions and earn competitive commissions",
      benefits: ["Exclusive territories", "Training & certification", "Sales support"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strategic Partners",
      description: "Collaborate on large-scale projects and market expansion",
      benefits: ["Joint ventures", "Shared resources", "Market access"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Solution Partners",
      description: "Build complementary solutions that enhance our platform",
      benefits: ["API access", "Technical integration", "Co-marketing"]
    }
  ];

  const existingPartners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      category: "Technology Partner",
      description: "Strategic partnership for Azure cloud solutions and AI services",
      year: "2023"
    },
    {
      name: "AWS",
      logo: "/images/partners/aws.png",
      category: "Cloud Partner",
      description: "Advanced cloud infrastructure and machine learning solutions",
      year: "2023"
    },
    {
      name: "IBM",
      logo: "/images/partners/ibm.png",
      category: "AI Partner",
      description: "Collaboration on quantum computing and enterprise AI",
      year: "2024"
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.png",
      category: "CRM Partner",
      description: "Integrated customer relationship management solutions",
      year: "2024"
    }
  ];

  const benefits = [
    {
      title: "Revenue Growth",
      description: "Access new markets and customer segments through our global network",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Technical Excellence",
      description: "Leverage our cutting-edge AI and technology expertise",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Market Expansion",
      description: "Enter new geographic markets with local support and expertise",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Innovation Hub",
      description: "Collaborate on breakthrough technologies and solutions",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full">
                <Handshake className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partnership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Opportunities
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join forces with Zion Tech Group to create innovative solutions, 
              expand your market reach, and drive mutual success in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
                <Briefcase className="mr-2 w-5 h-5" />
                View Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Models
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the partnership model that best fits your business goals 
              and growth strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg w-fit mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group 
              and how we can help accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join an elite network of technology leaders and innovators 
              who have chosen to partner with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {existingPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 w-32 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">{partner.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {partner.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {partner.name}
                </h3>

                <p className="text-gray-400 mb-4">
                  {partner.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    Partner since {partner.year}
                  </span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                    Learn More
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Become a Partner
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow our simple 4-step process to establish a successful 
              partnership with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Contact",
                description: "Reach out to discuss partnership opportunities and mutual goals"
              },
              {
                step: "02",
                title: "Evaluation",
                description: "We assess compatibility and potential for successful collaboration"
              },
              {
                step: "03",
                title: "Agreement",
                description: "Define partnership terms, responsibilities, and success metrics"
              },
              {
                step: "04",
                title: "Launch",
                description: "Begin collaboration with full support and resources"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's explore how we can work together to create innovative solutions 
            and drive mutual success in the technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Partnership Discussion
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <Target className="mr-2 w-5 h-5" />
              Partnership Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
