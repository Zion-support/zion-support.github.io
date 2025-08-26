import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Lock, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Cpu,
  Database,
  Network,
  Code,
  Target,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const serviceCategories = [
  {
    id: 'ai-analytics',
    name: 'AI & Analytics',
    description: 'Transform your business with AI-powered insights and intelligent automation.',
    icon: Brain,
    href: '/services/ai-analytics',
    features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect your business with advanced threat detection and security solutions.',
    icon: Shield,
    href: '/services/cybersecurity',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Accelerate development and deployment with modern cloud infrastructure.',
    icon: Cloud,
    href: '/services/cloud-devops',
    features: ['Cloud Migration', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    description: 'Deploy intelligent IoT solutions with edge computing capabilities.',
    icon: Cpu,
    href: '/services/iot-edge',
    features: ['Edge Analytics', 'Device Management', 'Real-time Processing', 'Cloud Integration']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Leverage quantum computing for complex problem-solving and optimization.',
    icon: Rocket,
    href: '/services/quantum-computing',
    features: ['Quantum Algorithms', 'Optimization Tools', 'Simulation Platform', 'API Integration']
  },
  {
    id: 'blockchain',
    name: 'Blockchain Solutions',
    description: 'Build secure, transparent, and decentralized applications.',
    icon: Lock,
    href: '/services/blockchain',
    features: ['Smart Contracts', 'DeFi Platforms', 'Supply Chain', 'Digital Identity']
  },
  {
    id: 'digital-twin',
    name: 'Digital Twin',
    description: 'Create virtual replicas of physical systems for simulation and optimization.',
    icon: Globe,
    href: '/services/digital-twin',
    features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Simulation']
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description: 'Implement green technology solutions for environmental impact.',
    icon: Heart,
    href: '/services/sustainability',
    features: ['Green IT', 'Energy Optimization', 'Carbon Tracking', 'Sustainable Development']
  }
];

const itServices = [
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    description: 'Modernize your IT infrastructure with scalable and secure solutions.',
    icon: Network,
    href: '/it-services/infrastructure'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Transform your business processes with digital technologies.',
    icon: TrendingUp,
    href: '/it-services/digital-transformation'
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Expert guidance for your technology strategy and implementation.',
    icon: Users,
    href: '/it-services/consulting'
  },
  {
    id: 'onsite-support',
    name: 'Onsite Support',
    description: 'Professional IT support and maintenance services.',
    icon: Target,
    href: '/it-services/onsite-support'
  },
  {
    id: 'green-it',
    name: 'Green IT',
    description: 'Environmentally conscious IT solutions and practices.',
    icon: Heart,
    href: '/it-services/green-it'
  },
  {
    id: '5g-solutions',
    name: '5G Solutions',
    description: 'Leverage 5G technology for enhanced connectivity and performance.',
    icon: Zap,
    href: '/it-services/5g-solutions'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Get up and running quickly with our proven methodologies and pre-built solutions.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance built into every solution.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business, from startup to enterprise.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: '24/7 support and maintenance from our expert team worldwide.'
  }
];

export default function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Our Services | Zion Tech Group"
        description="Comprehensive technology solutions including AI, cybersecurity, cloud, IoT, quantum computing, and more. Transform your business with our expert services."
        canonical="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Comprehensive technology solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline px-8 py-3 text-lg"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver results that matter.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Technology Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Cutting-edge solutions that drive innovation and business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services & Solutions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive IT services to modernize your infrastructure and drive digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}