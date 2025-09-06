import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => (
  <>
    <SEOHead 
      title="Our Services - Zion Tech Group"
      description="Explore our comprehensive technology services including AI solutions, cybersecurity, and cloud infrastructure. Professional technology consulting and implementation."
      keywords="technology services, AI solutions, cybersecurity services, cloud infrastructure, IT consulting, digital transformation"
      canonicalUrl="https://ziontechgroup.com/services"
    />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[
          { title: "AI Solutions", description: "Machine learning, natural language processing, and computer vision solutions." },
          { title: "Cybersecurity", description: "Advanced security solutions and compliance to protect your digital assets." },
          { title: "Cloud Infrastructure", description: "Scalable cloud solutions and infrastructure management services." }
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card 
              title={service.title} 
              description={service.description}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
    </div>
  </>
);

export default ServicesPage;