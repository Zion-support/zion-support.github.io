import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const Contact = () => {
  const departments = [
    {
      name: 'AI & Technology Solutions',
      email: 'ai@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'IT Infrastructure',
      email: 'infrastructure@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'Micro SaaS Services',
      email: 'saas@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ];

  const contactInfo = [
    {
      title: 'Phone',
      details: ['+1 302 464 0950'],
      icon: Phone,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Email',
      details: ['kleber@ziontechgroup.com'],
      icon: Mail,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown DE 19709', 'United States'],
      icon: MapPin,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI solutions, IT infrastructure, and micro SaaS services. Contact us today for a consultation."
        keywords="contact, Zion Tech Group, AI solutions, IT services, consultation"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Get in touch with our team of experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you transform your business with cutting-edge AI and technology solutions. 
              Let's discuss your needs and explore how we can work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 mx-auto mb-4`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{info.title}</h3>
                <div className="space-y-2 text-center">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ready to Get Started Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your technology needs and explore how our solutions can drive your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Contact Specific Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need to reach a specific team? Here are the direct contact details for our key departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href={`mailto:${dept.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${dept.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to implement cutting-edge AI and technology solutions. Contact us today and let's discuss how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="btn-futuristic-outline">
                <MessageCircle className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
