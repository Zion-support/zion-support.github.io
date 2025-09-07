import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: '🤖',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to power your digital transformation.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Microservices']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      icon: '🌐',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: '📊',
      features: ['Business Intelligence', 'Data Visualization', 'ETL Pipelines', 'Real-time Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: '🔒',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age. 
            From AI and cloud infrastructure to web development and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;