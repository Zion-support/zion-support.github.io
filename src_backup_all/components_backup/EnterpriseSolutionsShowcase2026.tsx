import React from 'react';
import Link from 'next/link';
import { Building2, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

const EnterpriseSolutionsShowcase2026: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise AI Platform",
      description: "Comprehensive AI solutions designed for large-scale enterprise operations and digital transformation.",
      features: ["Advanced Analytics", "Predictive Modeling", "Process Automation", "Real-time Insights"],
      href: "/services/enterprise-ai-platform"
    },
    {
      icon: Shield,
      title: "Cybersecurity Suite 2026",
      description: "Next-generation security solutions powered by AI and quantum-resistant encryption protocols.",
      features: ["Quantum Encryption", "AI Threat Detection", "Zero Trust Architecture", "Compliance Management"],
      href: "/services/cybersecurity-suite-2026"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence Hub",
      description: "Advanced analytics and business intelligence platform with real-time data processing capabilities.",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "Data Visualization"],
      href: "/services/business-intelligence-hub"
    },
    {
      icon: Users,
      title: "Digital Workforce Solutions",
      description: "AI-powered workforce management and collaboration tools for the modern enterprise.",
      features: ["AI Assistants", "Collaboration Tools", "Performance Analytics", "Remote Work Solutions"],
      href: "/services/digital-workforce-solutions"
    }
  ];

  const benefits = [
    {
      title: "40% Cost Reduction",
      description: "Average operational cost savings through AI automation"
    },
    {
      title: "300% Productivity Boost",
      description: "Measured improvement in team productivity and efficiency"
    },
    {
      title: "99.9% Uptime",
      description: "Guaranteed system reliability and availability"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support and monitoring"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Enterprise Solutions 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powering the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your enterprise with cutting-edge AI, advanced analytics, and next-generation security solutions 
            designed for the digital-first world of 2026.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={solution.href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results for Enterprise Clients</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our enterprise solutions have delivered measurable results across industries, 
              helping organizations achieve unprecedented levels of efficiency and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{benefit.title}</div>
                <div className="text-white opacity-90">{benefit.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Enterprise Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 max-w-4xl mx-auto">
              "Zion Tech Group's enterprise AI platform transformed our operations completely. 
              We've seen a 40% reduction in operational costs and a 300% increase in productivity. 
              The ROI has been exceptional."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">CTO, Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutionsShowcase2026;