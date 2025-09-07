import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
import Button from '../components/Button';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      title: 'AI Solutions',
      description: 'Machine learning, natural language processing, computer vision, and AI-powered automation.',
      icon: '🤖',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, infrastructure management, and scalable cloud solutions.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Management', 'Auto-scaling', '24/7 Monitoring'],
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions, threat detection, and compliance management.',
      icon: '🔒',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $4,000/month'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS applications tailored to your business needs.',
      icon: '💼',
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard'],
      price: 'Starting at $8,000/month'
    },
    {
      title: 'DevOps & SRE',
      description: 'DevOps automation, site reliability engineering, and infrastructure optimization.',
      icon: '⚙️',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Performance Optimization'],
      price: 'Starting at $6,000/month'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      icon: '🚀',
      features: ['Process Automation', 'Legacy System Modernization', 'Data Migration', 'Change Management'],
      price: 'Starting at $10,000/month'
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-6">{service.price}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => console.log(`Contact about ${service.title}`)}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your current systems and identify opportunities for improvement.' },
              { step: '02', title: 'Planning', description: 'We create a detailed roadmap tailored to your business objectives.' },
              { step: '03', title: 'Implementation', description: 'We execute the solution with regular updates and transparent communication.' },
              { step: '04', title: 'Optimization', description: 'We continuously monitor and optimize for maximum performance and ROI.' }
            ].map((process, index) => (
              <Card key={index} className="text-center p-6 bg-slate-800/50 backdrop-blur-sm">
                <div className="text-4xl font-bold text-cyan-400 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;