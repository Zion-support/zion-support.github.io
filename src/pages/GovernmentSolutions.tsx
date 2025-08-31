import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Building2, 
  Users, 
  Database, 
  Cloud, 
  Lock,
  Activity,
  CheckCircle,
  ArrowRight,
  Globe,
  FileText,
  Network
} from 'lucide-react';

const GovernmentSolutions: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Federal Compliance',
      description: 'FISMA, FedRAMP, and NIST compliance for government agencies'
    },
    {
      icon: Database,
      title: 'Secure Data Management',
      description: 'Classified and sensitive data handling with military-grade encryption'
    },
    {
      icon: Cloud,
      title: 'Government Cloud',
      description: 'FedRAMP-authorized cloud solutions for federal agencies'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Advanced cybersecurity frameworks for government networks'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous security monitoring and threat detection systems'
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital transformation for improved public service delivery'
    }
  ];

  const solutions = [
    {
      title: 'Cybersecurity Platform',
      description: 'Comprehensive security solutions meeting federal requirements',
      href: '/services/ai-cybersecurity-suite'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernization of government systems and processes',
      href: '/digital-transformation'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure cloud solutions for government workloads',
      href: '/cloud-solutions'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis for government decision making',
      href: '/services/ai-business-intelligence'
    }
  ];

  const benefits = [
    'Enhanced security and compliance with federal standards',
    'Improved operational efficiency and cost savings',
    'Better citizen engagement and service delivery',
    'Modernized infrastructure and technology stack',
    'Scalable solutions for agencies of all sizes',
    '24/7 monitoring and support services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Government
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure, compliant, and innovative technology solutions designed specifically 
              for federal, state, and local government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Government-First Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are built with government requirements in mind, ensuring 
              compliance, security, and scalability for public sector needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Government Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our specialized government technology solutions designed to 
              meet the unique requirements of public sector organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <a
                  href={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits for Government Agencies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the advantages of our government-focused technology solutions 
              designed to improve efficiency and service delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Government Agency?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our secure and compliant technology solutions can 
              transform your government operations and improve citizen services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
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

export default GovernmentSolutions;