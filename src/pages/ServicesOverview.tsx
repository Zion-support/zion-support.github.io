import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  Users, 
  ShoppingCart, 
  MessageCircle, 
  BookOpen, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Database, 
  Network, 
  Smartphone, 
  Server,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      services: [
        'AI Business Intelligence',
        'Machine Learning Solutions',
        'Data Analytics & Visualization',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      href: '/ai-services'
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        'Cloud Migration & Strategy',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'Performance Optimization'
      ],
      href: '/cloud-devops'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Comprehensive security solutions for modern threats',
      services: [
        'Zero Trust Architecture',
        'Threat Detection & Response',
        'Security Audits & Compliance',
        'Penetration Testing',
        'Security Training',
        'Incident Response'
      ],
      href: '/cybersecurity'
    },
    {
      name: 'Digital Transformation',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'End-to-end digital transformation consulting',
      services: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Digital Workplace Solutions',
        'Innovation Labs'
      ],
      href: '/digital-transformation'
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      color: 'from-slate-600 to-gray-600',
      description: 'Robust and scalable IT infrastructure solutions',
      services: [
        'Network Design & Implementation',
        'Data Center Solutions',
        'Backup & Disaster Recovery',
        'IT Support & Maintenance',
        'Infrastructure Monitoring',
        'Performance Tuning'
      ],
      href: '/it-infrastructure'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      color: 'from-indigo-600 to-purple-600',
      description: 'Internet of Things and edge computing solutions',
      services: [
        'IoT Platform Development',
        'Edge Computing Solutions',
        'Sensor Integration',
        'Real-time Data Processing',
        'IoT Security',
        'Smart City Solutions'
      ],
      href: '/iot-edge'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with deep industry expertise',
      icon: Users
    },
    {
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions using latest technologies',
      icon: Lightbulb
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations',
      icon: CheckCircle
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI, cloud, cybersecurity, and digital transformation services."
        keywords="AI services, cloud solutions, cybersecurity, digital transformation, IT consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions to transform your business
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From AI-powered insights to secure cloud infrastructure
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.services.slice(0, 4).map((service, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                      {category.services.length > 4 && (
                        <li className="text-slate-400 text-sm flex items-center">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          +{category.services.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <a 
                    href={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our services can help you achieve your technology goals
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="/pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}