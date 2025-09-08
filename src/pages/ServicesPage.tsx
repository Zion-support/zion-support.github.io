import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models',
      icon: '🤖',
      price: 'From $5,000',
      features: ['Custom AI Models', 'Machine Learning', 'Data Analysis', 'AI Integration']
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      icon: '🌐',
      price: 'From $3,000',
      features: ['React/Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'iOS and Android mobile applications',
      icon: '📱',
      price: 'From $4,000',
      features: ['React Native', 'Native Development', 'Cross-Platform', 'App Store Deployment']
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: '☁️',
      price: 'From $2,000',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Monitoring']
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions',
      icon: '🔒',
      price: 'From $3,500',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      id: 6,
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization',
      icon: '📊',
      price: 'From $2,500',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
        {/* Header */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs. From AI development to cloud infrastructure, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-blue-200 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-blue-200 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/contact?service=${service.title}`}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-2 px-4 rounded-lg text-center block transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServicesPage;