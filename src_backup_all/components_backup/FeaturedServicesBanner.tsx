import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const FeaturedServicesBanner: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Business Automation",
      description: "Automate workflows and boost productivity",
      features: ["Process Automation", "Predictive Analytics", "Smart Insights"],
      price: "Starting at $2,999/mo",
      popular: true
    },
    {
      icon: Shield,
      title: "Enterprise Security Suite",
      description: "Comprehensive cybersecurity protection",
      features: ["24/7 Monitoring", "Threat Detection", "Compliance Management"],
      price: "Starting at $4,999/mo",
      popular: false
    },
    {
      icon: Zap,
      title: "Cloud Infrastructure",
      description: "Scalable and reliable cloud solutions",
      features: ["99.9% Uptime", "Auto Scaling", "Global CDN"],
      price: "Starting at $1,999/mo",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            🔥 Limited Time Offer - Save 30%
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Choose from our most popular services and get started with a free consultation. 
            Limited time offer includes 30% discount on all packages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:bg-white/20 ${
                  service.popular ? 'border-yellow-400 ring-2 ring-yellow-400/50' : 'border-white/20'
                }`}
              >
                {service.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-yellow-400">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started Now
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎉 Special Bonus: Free Implementation Support
            </h3>
            <p className="text-white/90 mb-6">
              All packages include free setup, migration assistance, and 30 days of premium support. 
              Our experts will ensure a smooth transition with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
              >
                Claim Your Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesBanner;