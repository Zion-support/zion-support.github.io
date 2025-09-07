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

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Cutting-Edge Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Zion Tech Group, we offer a comprehensive suite of technology
            solutions designed to empower your business and drive innovation
            across all sectors.
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="DevOps & Automation"
            description="Streamline your development and operations with continuous integration, delivery, and automated workflows."
            icon="⚙️"
          />
          <ServiceCard
            title="Blockchain Solutions"
            description="Leverage decentralized technologies for secure transactions, smart contracts, and transparent operations."
            icon="🔗"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and data visualization."
            icon="📊"
          />
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-8">
            Why Choose Zion Tech Group for Your Services?
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <Card
              title="Expert Team"
              description="Our specialists are leaders in their respective fields."
            />
            <Card
              title="Tailored Solutions"
              description="Custom services designed to meet your unique business needs."
            />
            <Card
              title="Innovation Driven"
              description="Always at the forefront of technological advancements."
            />
            <Card
              title="Reliable Support"
              description="Dedicated 24/7 support to ensure seamless operations."
            />
            <Card
              title="Scalable & Secure"
              description="Solutions built for growth and robust security."
            />
            <Card
              title="Proven Track Record"
              description="Successful implementations across diverse industries."
            />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our expert
            services can drive your success.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={() => (window.location.href = '/contact')}
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
