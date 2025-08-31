import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  Shield, 
  BarChart3, 
  Cloud, 
  Zap, 
  Brain, 
  Lock,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Workflow,
  Target,
  Factory,
  DollarSign,
  ShoppingCart,
  Government,
  GraduationCap,
  Users,
  Rocket,
  Atom,
  Cpu,
  Network,
  Server
} from 'lucide-react';

const Solutions: React.FC = () => {
  const industrySolutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Transform your enterprise with AI-powered business intelligence, cloud infrastructure, and digital transformation services.',
      href: '/solutions/enterprise',
      features: ['AI Business Intelligence', 'Cloud Migration', 'Process Automation', 'Security & Compliance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'Revolutionize healthcare delivery with AI diagnostics, telemedicine platforms, and HIPAA-compliant systems.',
      href: '/solutions/healthcare',
      features: ['AI Diagnostics', 'Telemedicine', 'EHR Systems', 'HIPAA Compliance'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'Optimize manufacturing operations with IoT, predictive maintenance, and supply chain automation.',
      href: '/manufacturing-solutions',
      features: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain AI', 'Quality Control'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Solutions',
      description: 'Enhance financial services with AI-powered analytics, risk management, and compliance automation.',
      href: '/financial-solutions',
      features: ['AI Analytics', 'Risk Management', 'Compliance Automation', 'Fraud Detection'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShoppingCart,
      title: 'Retail Solutions',
      description: 'Transform retail with AI-powered customer insights, inventory management, and personalized experiences.',
      href: '/retail-solutions',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Omnichannel'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Government,
      title: 'Government Solutions',
      description: 'Modernize government services with secure, scalable, and compliant technology solutions.',
      href: '/government-solutions',
      features: ['Digital Services', 'Security & Compliance', 'Data Analytics', 'Process Automation'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const technologySolutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for business automation, analytics, and intelligent decision-making.',
      services: [
        'AI Business Intelligence',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Workflow Automation'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions with DevOps automation and infrastructure management.',
      services: [
        'Cloud Migration',
        'DevOps Automation',
        'Infrastructure as Code',
        'Multi-cloud Strategy',
        'Edge Computing',
        'Container Orchestration'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions ensuring compliance and protection against evolving threats.',
      services: [
        'Zero Trust Architecture',
        'SOC 2 Compliance',
        'Threat Detection',
        'Security Automation',
        'Data Protection',
        'Incident Response'
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Comprehensive data solutions for business intelligence and real-time analytics.',
      services: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Governance',
        'Machine Learning',
        'Predictive Modeling'
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Accelerated Innovation',
      description: 'Leverage cutting-edge technology to stay ahead of the competition and drive market leadership.'
    },
    {
      icon: Target,
      title: 'Measurable Results',
      description: 'Achieve quantifiable business outcomes with data-driven insights and performance metrics.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to our team of technology experts and ongoing support throughout your journey.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance ensuring your data and operations remain protected.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Industry Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tailored Solutions for
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers industry-specific solutions that address your unique challenges 
              and drive measurable business outcomes. From healthcare to manufacturing, we have the 
              expertise to transform your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique challenges and requirements 
              of different industries, ensuring maximum impact and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link to={solution.href}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Foundation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are built on cutting-edge technologies that provide 
              the foundation for digital transformation and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-300">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver measurable business value through innovative technology, 
              expert implementation, and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you implement the right solutions 
              to achieve your business objectives and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Solutions Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
