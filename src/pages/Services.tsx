import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
import Button from '../components/Button';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'development', name: 'Development', icon: '💻' }
  ];

  const services = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions to automate processes, gain insights, and drive intelligent decision-making.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants'],
      price: 'From $5,000/month'
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business and ensure maximum uptime and security.',
      features: ['AWS/Azure/GCP Migration', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'From $3,000/month'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data, systems, and digital assets from threats.',
      features: ['Penetration Testing', 'Security Audits', 'Threat Monitoring', 'Compliance Management'],
      price: 'From $2,500/month'
    },
    {
      id: 'development',
      title: 'Custom Development',
      description: 'Bespoke software development solutions designed specifically for your unique requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      price: 'From $4,000/month'
    },
    {
      id: 'ai',
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions to unlock insights from your data.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Machine Learning Models', 'Data Warehousing'],
      price: 'From $3,500/month'
    },
    {
      id: 'cloud',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and operations.',
      features: ['Process Automation', 'Legacy System Migration', 'Change Management', 'Training & Support'],
      price: 'From $6,000/month'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.id === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all sectors.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Main Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          layout
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-400">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Focus */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Rapid development and deployment of solutions to meet your timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and reliability in all our solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals with deep expertise in cutting-edge technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;