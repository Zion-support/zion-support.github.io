import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  Users,
  Building,
  Globe,
  Zap
} from 'lucide-react';

const GetStarted = () => {
  const [selectedService, setSelectedService] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [timeframe, setTimeframe] = useState('');

  const services = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and AI-powered solutions.',
      icon: Zap
    },
    {
      id: 'it-services',
      title: 'IT Infrastructure',
      description: 'Build robust, scalable IT foundations for your digital transformation.',
      icon: Building
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Accelerate development and operations with cloud-native solutions.',
      icon: Globe
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions.',
      icon: Users
    }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Business (201-1000 employees)' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)' }
  ];

  const timeframes = [
    { value: 'immediate', label: 'Immediate (This week)' },
    { value: 'month', label: 'Within a month' },
    { value: 'quarter', label: 'Within a quarter' },
    { value: 'year', label: 'Within a year' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your needs and goals.',
      icon: Phone
    },
    {
      number: '02',
      title: 'Assessment & Planning',
      description: 'We conduct a thorough assessment and create a customized roadmap.',
      icon: CheckCircle
    },
    {
      number: '03',
      title: 'Proposal & Agreement',
      description: 'Receive a detailed proposal and project agreement.',
      icon: Building
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Begin implementation with our expert team.',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Start Your Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Started Today
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's start your digital transformation journey together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selection Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Can We Help You With?
            </h2>
            <p className="text-xl text-gray-300">
              Select the primary service area that best matches your current needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-700 hover:border-cyan-500/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tell Us About Your Business
            </h2>
            <p className="text-xl text-gray-300">
              Help us understand your organization better to provide the most relevant solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-lg font-semibold text-white mb-4">
                Company Size
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companySizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setCompanySize(size.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      companySize === size.value
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <span className="text-white">{size.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-lg font-semibold text-white mb-4">
                Project Timeframe
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timeframes.map((time) => (
                  <button
                    key={time.value}
                    onClick={() => setTimeframe(time.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      timeframe === time.value
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <span className="text-white">{time.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth journey from initial consultation to successful implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Choose your preferred way to connect with us and begin your transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Schedule a Call',
                description: 'Book a convenient time for a detailed discussion about your needs.',
                icon: Phone,
                action: 'Schedule Call',
                href: '/contact'
              },
              {
                title: 'Send Message',
                description: 'Send us a detailed message about your project requirements.',
                icon: Mail,
                action: 'Send Message',
                href: '/contact'
              },
              {
                title: 'Book Consultation',
                description: 'Reserve a slot for a comprehensive consultation session.',
                icon: Calendar,
                action: 'Book Now',
                href: '/contact'
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>
                <a
                  href={option.href}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>{option.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Transform Your Business Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations that have already transformed their operations with our solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;