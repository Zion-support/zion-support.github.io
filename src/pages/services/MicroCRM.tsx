import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function MicroCRM() {
  // Data arrays
  const services = [
    {
      title: 'Contact Management',
      description: 'Organize and track customer information',
      icon: Users
    },
    {
      title: 'Sales Pipeline',
      description: 'Track deals and opportunities',
      icon: Target
    },
    {
      title: 'Task Management',
      description: 'Organize and prioritize tasks',
      icon: CheckCircle
    },
    {
      title: 'Reporting',
      description: 'Generate insights and analytics',
      icon: Target
    }
  ];

  const benefits = [
    'Improve customer relationships',
    'Increase sales efficiency',
    'Better task organization',
    'Data-driven insights',
    'Automated workflows',
    'Mobile accessibility'
  ];

  const useCases = [
    {
      industry: 'Local Services',
      description: 'Manage appointments and customers'
    },
    {
      industry: 'Retail',
      description: 'Track sales and inventory'
    },
    {
      industry: 'Consulting',
      description: 'Manage projects and clients'
    },
    {
      industry: 'Healthcare',
      description: 'Patient management and scheduling'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="MicroCRM - Lightweight Customer Relationship Management"
        description="Streamline your business with our lightweight CRM solution. Manage contacts, sales, and tasks efficiently without the complexity of enterprise systems."
        keywords={['MicroCRM', 'customer relationship management', 'sales pipeline', 'contact management', 'task management']}
      />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              MicroCRM
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Lightweight, powerful customer relationship management for growing businesses
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Essential CRM Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Everything you need to manage customer relationships without the complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose MicroCRM?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Simple, effective, and designed for businesses that want results without complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For Any Business
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From local services to healthcare, MicroCRM adapts to your industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using MicroCRM to improve customer relationships and boost sales
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

