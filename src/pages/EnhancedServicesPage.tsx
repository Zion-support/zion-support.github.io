import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle, Star, Zap, Shield, TrendingUp, Brain, Cloud, Lock } from 'lucide-react';

export const EnhancedServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Business Automation",
      description: "Transform your operations with intelligent automation that learns, adapts, and optimizes continuously.",
      features: [
        "40% cost reduction guaranteed",
        "90% error reduction",
        "24/7 autonomous operations",
        "Real-time decision making"
      ],
      price: "Starting at $5,000/month",
      cta: "Get Free AI Assessment",
      color: "blue",
      popular: true
    },
    {
      icon: Shield,
      title: "Blockchain Security Solutions",
      description: "Secure your data and transactions with immutable blockchain technology that ensures complete transparency.",
      features: [
        "100% data integrity",
        "Zero downtime guarantee",
        "Complete transparency",
        "Regulatory compliance"
      ],
      price: "Starting at $3,500/month",
      cta: "Secure Your Business",
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Scale your business with robust cloud solutions that provide unlimited growth potential and reliability.",
      features: [
        "99.9% uptime guarantee",
        "Unlimited scalability",
        "Global deployment",
        "24/7 monitoring"
      ],
      price: "Starting at $2,500/month",
      cta: "Scale Your Infrastructure",
      color: "green"
    },
    {
      icon: Zap,
      title: "Quantum Computing Solutions",
      description: "Prepare for the future with quantum computing solutions that solve complex problems impossible for traditional computers.",
      features: [
        "Exponential processing power",
        "Advanced cryptography",
        "Optimization algorithms",
        "Future-ready technology"
      ],
      price: "Starting at $10,000/month",
      cta: "Explore Quantum Future",
      color: "indigo"
    },
    {
      icon: Lock,
      title: "Cybersecurity & Compliance",
      description: "Protect your business with advanced cybersecurity solutions that defend against evolving threats.",
      features: [
        "360° threat protection",
        "Compliance automation",
        "Real-time monitoring",
        "Incident response"
      ],
      price: "Starting at $4,000/month",
      cta: "Protect Your Business",
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics & BI",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      features: [
        "Predictive analytics",
        "Real-time dashboards",
        "Machine learning insights",
        "Custom reporting"
      ],
      price: "Starting at $3,000/month",
      cta: "Unlock Your Data",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      green: "bg-green-600",
      indigo: "bg-indigo-600",
      red: "bg-red-600",
      orange: "bg-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Revolutionary Technology Services - Zion Tech Group"
        description="Transform your business with our cutting-edge AI, blockchain, cloud, and quantum computing solutions. Get guaranteed results and ROI."
        keywords="AI services, blockchain solutions, cloud infrastructure, quantum computing, cybersecurity, data analytics"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-600 bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">500+ Successful Implementations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary Technology Services for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI, blockchain, cloud, and quantum computing solutions. 
              Guaranteed results, proven ROI, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.3M+</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Revolutionary Services</h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive suite of cutting-edge technology solutions designed to transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${getColorClasses(service.color)} p-8 rounded-xl border hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`w-16 h-16 ${getIconColor(service.color)} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500">All-inclusive pricing</div>
                </div>
                
                <a 
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    service.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                      : `bg-white ${service.color === 'blue' ? 'text-blue-600 hover:bg-blue-50' : 
                          service.color === 'purple' ? 'text-purple-600 hover:bg-purple-50' :
                          service.color === 'green' ? 'text-green-600 hover:bg-green-50' :
                          service.color === 'indigo' ? 'text-indigo-600 hover:bg-indigo-50' :
                          service.color === 'red' ? 'text-red-600 hover:bg-red-50' :
                          'text-orange-600 hover:bg-orange-50'}`
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Our Guarantee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results Guaranteed</h3>
                <p className="text-green-100">We guarantee measurable results or your money back.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-green-100">Round-the-clock support from our expert team.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-green-100">500+ successful implementations worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Join 500+ companies that have already revolutionized their operations with Zion Tech Group's cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              ✓ Free assessment ✓ No commitment ✓ Results guaranteed ✓ 24/7 support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};