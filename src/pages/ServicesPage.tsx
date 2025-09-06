import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  BarChart3, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions and intelligent automation.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions and threat detection.",
      features: ["Threat Detection", "Data Protection", "Compliance", "Security Audits"],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scale your operations with robust, scalable cloud solutions and architecture.",
      features: ["Scalable Architecture", "High Availability", "Cost Optimization", "Migration Services"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Unlock insights from your data with powerful analytics and business intelligence.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Warehousing"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Build tailored software solutions that perfectly fit your business needs.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive BI solutions and reporting.",
      features: ["Dashboard Creation", "KPI Tracking", "Report Automation", "Data Mining"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    }
  ];

  const microSaaSProducts = [
    {
      title: "AI Customer Success Platform",
      description: "Automate customer success workflows with AI-powered insights and recommendations.",
      features: ["Customer Health Scoring", "Automated Workflows", "Predictive Analytics", "Integration Hub"],
      price: "Starting at $99/month"
    },
    {
      title: "Smart CRM Intelligence Suite",
      description: "Enhance your CRM with AI-driven insights, automation, and predictive analytics.",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "Performance Analytics"],
      price: "Starting at $149/month"
    },
    {
      title: "Intelligent Content Automation",
      description: "Create, optimize, and distribute content at scale with AI-powered automation.",
      features: ["Content Generation", "SEO Optimization", "Multi-channel Distribution", "Performance Tracking"],
      price: "Starting at $199/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of technology services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center text-${service.textColor.split('-')[1]}-600 font-semibold hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Micro SaaS Products */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Micro SaaS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use SaaS solutions that can be deployed quickly and scaled as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-semibold">Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-4">{product.price}</div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development and deployment with agile methodologies.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">Serving clients worldwide with local expertise.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of successful projects and satisfied clients.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Our Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;