import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const services = [
    {
      title: "AI Content Hub Pro",
      description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
      icon: Brain,
      path: "/services/ai-content-hub-pro",
      category: "AI & Content Creation",
      price: "$2,999/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Multi-language Generation", "SEO Optimization", "Cross-platform Distribution"],
      features: ["GPT-4 Integration", "Real-time Analytics", "Brand Voice Consistency", "24/7 Support"]
    },
    {
      title: "AI Customer Service Automation",
      description: "Intelligent customer service automation that handles 80% of inquiries automatically.",
      icon: Brain,
      path: "/services/ai-customer-service-automation",
      category: "AI & Customer Service",
      price: "$1,899/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["24/7 Availability", "Multi-channel Support", "Human-like Interactions"],
      features: ["NLP Processing", "Sentiment Analysis", "CRM Integration", "Performance Analytics"]
    },
    {
      title: "AI Sales Intelligence Platform",
      description: "Advanced sales intelligence with AI-powered lead generation and market insights.",
      icon: TrendingUp,
      path: "/services/ai-sales-intelligence-platform",
      category: "AI & Sales Intelligence",
      price: "$2,499/mo",
      rating: 4.9,
      reviewCount: 123,
      highlights: ["Lead Scoring", "Market Analysis", "Sales Forecasting", "Competitor Intelligence"],
      features: ["AI-powered Insights", "CRM Integration", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      title: "AI Fintech Platform",
      description: "Comprehensive fintech platform with AI-powered risk assessment and fraud detection.",
      icon: Shield,
      path: "/services/ai-fintech-platform",
      category: "AI & Financial Technology",
      price: "$3,999/mo",
      rating: 4.9,
      reviewCount: 78,
      highlights: ["Risk Assessment", "Fraud Detection", "Compliance Monitoring", "Real-time Processing"],
      features: ["Machine Learning Models", "Regulatory Compliance", "API Integration", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scalable, intelligent software solutions designed to transform your business operations with AI, automation, and next-generation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              Get Started
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <Rocket className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our micro SAAS solutions can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServices;