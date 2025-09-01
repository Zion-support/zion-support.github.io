import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Rocket, 
  Atom, 
  Globe 
} from 'lucide-react';

const EnhancedNewServices2025 = () => {
  const enhancedServices = [
    {
      icon: Brain,
      title: "Enhanced AI Autonomous Research Assistant",
      description: "Advanced AI-powered research automation with enhanced capabilities",
      features: ["Multi-source data integration", "Advanced NLP processing", "Predictive analytics"],
      category: "AI & Machine Learning",
      priority: "high"
    },
    {
      icon: Atom,
      title: "Quantum AI Hybrid Platform",
      description: "Revolutionary quantum-classical computing integration",
      features: ["Quantum algorithms", "Hybrid optimization", "Quantum security"],
      category: "Quantum Computing",
      priority: "high"
    },
    {
      icon: Globe,
      title: "Global AI Orchestration Platform",
      description: "Worldwide AI service coordination and management",
      features: ["Multi-region deployment", "Global load balancing", "Compliance automation"],
      category: "Global Infrastructure",
      priority: "medium"
    },
    {
      icon: Shield,
      title: "Advanced Cybersecurity Suite",
      description: "Next-generation threat detection and prevention",
      features: ["AI-powered threat analysis", "Zero-trust architecture", "Real-time monitoring"],
      category: "Cybersecurity",
      priority: "high"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Scalable cloud infrastructure and services",
      features: ["Multi-cloud management", "Serverless architecture", "Auto-scaling"],
      category: "Cloud & DevOps",
      priority: "medium"
    },
    {
      icon: Rocket,
      title: "Digital Transformation Platform",
      description: "End-to-end business transformation solutions",
      features: ["Process automation", "Legacy modernization", "Change management"],
      category: "Digital Transformation",
      priority: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enhanced Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience our enhanced service portfolio with cutting-edge features and capabilities designed for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                    service.priority === 'high'
                      ? 'border-purple-200 hover:border-purple-400'
                      : 'border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    service.priority === 'high'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      service.priority === 'high'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our enhanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedNewServices2025;