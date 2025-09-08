import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Code
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions including custom ML models, predictive analytics, and intelligent automation.',
      features: [
        'Custom AI Model Development',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'AI-Powered Automation',
        'Machine Learning Consulting'
      ],
      color: 'from-purple-500 to-indigo-600',
      href: '/services/ai-ml'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, DevOps automation, and cloud migration services for modern applications.',
      features: [
        'Cloud Migration & Strategy',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Multi-Cloud Solutions',
        'Performance Optimization'
      ],
      color: 'from-cyan-500 to-blue-600',
      href: '/services/cloud-devops'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, compliance, and security architecture.',
      features: [
        'Security Audits & Assessments',
        'Threat Detection & Response',
        'Compliance & Governance',
        'Security Architecture',
        'Penetration Testing',
        'Incident Response'
      ],
      color: 'from-red-500 to-orange-600',
      href: '/services/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Big data solutions, business intelligence, and data-driven insights to power your business decisions.',
      features: [
        'Big Data Processing',
        'Business Intelligence',
        'Data Warehousing',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling'
      ],
      color: 'from-emerald-500 to-green-600',
      href: '/services/data-analytics'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation to modernize your business operations.',
      features: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Technology Roadmapping',
        'Digital Maturity Assessment'
      ],
      color: 'from-amber-500 to-orange-600',
      href: '/services/digital-transformation'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Micro SaaS Solutions',
      description: 'Custom software-as-a-service applications designed to solve specific business problems efficiently.',
      features: [
        'Custom SaaS Development',
        'API Integration',
        'User Management Systems',
        'Subscription Billing',
        'Multi-tenant Architecture',
        'Scalable Backend Services'
      ],
      color: 'from-pink-500 to-rose-600',
      href: '/services/micro-saas'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: '15+ years of combined experience in cutting-edge technologies'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Proven Results',
      description: '500+ successful projects delivered across various industries'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Always at the forefront of emerging technologies and trends'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: '99.99% uptime guarantee and comprehensive support packages'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and technical requirements to create a tailored solution.'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive strategy and project roadmap aligned with your goals.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'We build your solution using industry best practices and rigorous testing protocols.'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support, maintenance, and optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to cloud infrastructure, we deliver cutting-edge technology services 
              that drive business growth and innovation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
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

      {/* Why Choose Us */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker',
              'Kubernetes', 'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'Redis'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and explore how our technology solutions can drive your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
