import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { 
      name: 'AI Services', 
      href: '/services/ai-services', 
      description: 'Advanced artificial intelligence solutions for your business',
      icon: <Code className="w-8 h-8" />,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $2,999/month'
    },
    { 
      name: 'IT Services', 
      href: '/services/it-services', 
      description: 'Comprehensive information technology solutions',
      icon: <Database className="w-8 h-8" />,
      features: ['System Integration', 'Cloud Migration', 'Data Management', 'Infrastructure Support'],
      price: 'Starting at $1,999/month'
    },
    { 
      name: 'Micro SaaS', 
      href: '/services/micro-saas', 
      description: 'Micro software as a service applications',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard'],
      price: 'Starting at $999/month'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Advanced security solutions to protect your business',
      icon: <Shield className="w-8 h-8" />,
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $3,999/month'
    },
    { 
      name: 'Cloud Solutions', 
      href: '/services/cloud-solutions', 
      description: 'Cloud migration and management services',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Cloud Strategy', 'Migration Planning', 'Cost Optimization', '24/7 Monitoring'],
      price: 'Starting at $2,499/month'
    },
    { 
      name: 'Mobile Development', 
      href: '/services/mobile-development', 
      description: 'Mobile application development services',
      icon: <Globe className="w-8 h-8" />,
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      price: 'Starting at $4,999/project'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Enterprise Solutions",
      content: "Outstanding cybersecurity implementation. Our data has never been more secure.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden">
                <div className="p-8">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;