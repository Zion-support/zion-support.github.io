import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Services",
      description: "Advanced artificial intelligence solutions for your business",
      href: "/services/ai-services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "IT Solutions",
      description: "Comprehensive information technology services",
      href: "/services/it-services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Micro software as a service applications",
      href: "/services/micro-saas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your business",
      href: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Cloud migration and management services",
      href: "/services/cloud-solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Mobile application development services",
      href: "/services/mobile-development"
    }
  ];

  const features = [
    "24/7 Support",
    "Enterprise Grade Security",
    "Scalable Solutions",
    "AI-Powered Automation",
    "Cloud-Native Architecture",
    "Real-time Analytics"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl mb-4 text-blue-100">
              AI, IT & Micro SaaS Solutions
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge technology solutions. 
              We provide AI services, IT solutions, and micro SaaS applications 
              to help you stay ahead in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-blue-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through innovative technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;