<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React from 'react';
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Cpu, 
  Database, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
<<<<<<< HEAD
import { SEO } from "../components/SEOHead";
import { ALL_INNOVATIVE_SERVICES, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
=======
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
=======
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2

const ServicesPage = () => {
  const services = [
    {
      id: 'ai-analytics',
      title: 'AI & Analytics',
      description: 'Advanced artificial intelligence solutions and data analytics platforms',
      icon: <Brain className="w-8 h-8" />,
      path: '/services/ai',
      features: ['Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      priority: 'high'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: <Shield className="w-8 h-8" />,
      path: '/services/cybersecurity',
      features: ['Threat Detection', 'Incident Response', 'Security Audits', 'Compliance Management'],
      priority: 'high'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services',
      icon: <Cloud className="w-8 h-8" />,
      path: '/services/cloud',
      features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Serverless Architecture'],
      priority: 'high'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting and digital transformation',
      icon: <Users className="w-8 h-8" />,
      path: '/services/consulting',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'],
      priority: 'medium'
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions',
      icon: <Cpu className="w-8 h-8" />,
      path: '/quantum-technology',
      features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation', 'Research & Development'],
      priority: 'medium'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Services',
      description: 'Distributed ledger technology and smart contract development',
      icon: <Database className="w-8 h-8" />,
      path: '/blockchain-services',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Enterprise Blockchain'],
      priority: 'medium'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services',
      icon: <Globe className="w-8 h-8" />,
      path: '/digital-transformation',
      features: ['Process Digitization', 'Customer Experience', 'Data Strategy', 'Technology Integration'],
      priority: 'high'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      description: 'Custom software-as-a-service solutions',
      icon: <Zap className="w-8 h-8" />,
      path: '/micro-saas',
      features: ['Custom Applications', 'API Development', 'Scalable Architecture', 'User Management'],
      priority: 'medium'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise technology solutions',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/enterprise',
      features: ['Enterprise Architecture', 'System Integration', 'Legacy Modernization', 'Enterprise Security'],
      priority: 'high'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive innovation, enhance security, 
            and accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Priority Badge */}
              {service.priority === 'high' && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Priority
                  </span>
                </div>
              )}

              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Link
                to={service.path}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business. 
            Our team of experts is ready to provide personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
