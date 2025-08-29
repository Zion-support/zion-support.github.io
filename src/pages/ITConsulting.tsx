import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Database,
  Network,
  Shield,
  Cloud,
  Users,
  BarChart3,
  Globe,
  Zap,
  Code,
  Server,
  Lock,
  TrendingUp,
  Building,
  Target,
  Rocket,
  Brain,
  FileText,
  MessageSquare,
  Heart,
  Star,
  Sparkles
} from 'lucide-react';

const features = [
  {
    title: 'Strategic Technology Planning',
    description: 'Comprehensive technology roadmaps aligned with your business objectives and growth plans.',
    color: 'from-blue-500 to-cyan-500',
    icon: Target
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end guidance for modernizing your technology infrastructure and processes.',
    color: 'from-purple-500 to-pink-500',
    icon: Rocket
  },
  {
    title: 'Cloud Strategy & Migration',
    description: 'Expert guidance on cloud adoption, migration strategies, and optimization.',
    color: 'from-cyan-500 to-blue-500',
    icon: Cloud
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security assessments and compliance frameworks for your business.',
    color: 'from-red-500 to-orange-500',
    icon: Shield
  },
  {
    title: 'Data Analytics & BI',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    color: 'from-green-500 to-emerald-500',
    icon: BarChart3
  },
  {
    title: 'IT Infrastructure Optimization',
    description: 'Optimize your IT infrastructure for performance, scalability, and cost efficiency.',
    color: 'from-indigo-500 to-purple-500',
    icon: Server
  }
];

const consultingServices = [
  {
    title: 'Technology Assessment',
    description: 'Comprehensive evaluation of your current technology stack and recommendations for improvement.',
    icon: Cpu,
    features: ['Infrastructure analysis', 'Performance evaluation', 'Security assessment', 'Cost optimization']
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning for digital transformation initiatives and technology adoption.',
    icon: Brain,
    features: ['Technology roadmap', 'Digital maturity assessment', 'Innovation strategy', 'Change management']
  },
  {
    title: 'Cloud Consulting',
    description: 'Expert guidance on cloud architecture, migration, and optimization strategies.',
    icon: Cloud,
    features: ['Cloud strategy', 'Migration planning', 'Architecture design', 'Cost optimization']
  },
  {
    title: 'Security & Compliance',
    description: 'Comprehensive security assessments and compliance framework implementation.',
    icon: Shield,
    features: ['Security audit', 'Compliance framework', 'Risk assessment', 'Security policies']
  },
  {
    title: 'Data Strategy',
    description: 'Strategic planning for data management, analytics, and business intelligence.',
    icon: Database,
    features: ['Data governance', 'Analytics strategy', 'BI implementation', 'Data quality']
  },
  {
    title: 'IT Operations',
    description: 'Optimization of IT operations, processes, and service delivery.',
    icon: Server,
    features: ['Process optimization', 'Service delivery', 'Automation', 'Performance monitoring']
  },
  {
    title: 'Change Management',
    description: 'Strategic guidance for managing technology change and organizational transformation.',
    icon: Users,
    features: ['Change strategy', 'Training programs', 'Communication plans', 'Success metrics']
  },
  {
    title: 'Vendor Management',
    description: 'Expert guidance on technology vendor selection and relationship management.',
    icon: Building,
    features: ['Vendor evaluation', 'Contract negotiation', 'Performance monitoring', 'Risk management']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-purple-400 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with strategic technology guidance from industry experts.
              We help you navigate digital transformation and achieve sustainable competitive advantage.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.button
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Link
                to="/services"
                className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-3"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Consulting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert consultants bring decades of experience and deep industry knowledge to help you 
              make informed technology decisions and achieve your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to address your unique business
              challenges and drive measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert consultants help you navigate the complex world of technology 
              and achieve your business objectives with confidence.
            </p>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}