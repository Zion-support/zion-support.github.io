import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Brain, Users, Shield, BarChart3, CheckCircle, ArrowRight, Star, TrendingUp, Clock, Target } from 'lucide-react';

export default function ComprehensiveServicesOverview() {
  const featuredServices = [
    {
      id: "ai-workflow-automation",
      title: "AI Workflow Automation",
      description: "Transform business processes with AI-powered workflow automation",
      price: "$299/month",
      path: "/services/ai-workflow-automation",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "ai-customer-intelligence",
      title: "AI Customer Intelligence",
      description: "Understand customers with AI-powered behavior prediction",
      price: "$199/month",
      path: "/services/ai-customer-intelligence",
      icon: Users,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "ai-security-compliance",
      title: "AI Security & Compliance",
      description: "Protect your business with AI-powered security",
      price: "$399/month",
      path: "/services/ai-security-compliance",
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      id: "ai-data-analytics",
      title: "AI Data Analytics",
      description: "Transform data into actionable insights",
      price: "$249/month",
      path: "/services/ai-data-analytics",
      icon: BarChart3,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete range of AI-powered micro SAAS services and solutions."
        keywords="AI services, micro SAAS, cybersecurity, IT infrastructure, business solutions"
        canonical="https://ziontechgroup.com/services/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Overview
            <span className="block text-3xl md:text-4xl text-cyan-400 mt-2">
              AI-Powered Solutions for Every Business Need
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI services and micro SAAS solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular AI-powered solutions that deliver immediate business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group border border-gray-600 hover:border-cyan-500/40"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>

                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 group flex items-center justify-center"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}