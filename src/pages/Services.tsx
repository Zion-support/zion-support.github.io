import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { UltimateServicesShowcase } from "@/components/UltimateServicesShowcase";
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Globe, 
  Zap, 
  Star, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Target,
  Award,
  Database
} from 'lucide-react';

export default function Services() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const categories = [
    {
      icon: Brain,
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI platforms and autonomous business solutions",
      color: "from-blue-600 to-purple-600",
      benefits: [
        "300% increase in business efficiency",
        "80% reduction in operational costs",
        "24/7 autonomous operation",
        "Predictive analytics and insights"
      ]
    },
    {
      icon: Database,
      title: "IT Infrastructure & Enterprise",
      description: "Enterprise-grade IT infrastructure and cloud solutions",
      color: "from-green-600 to-emerald-600",
      benefits: [
        "99.9% uptime guarantee",
        "Global infrastructure coverage",
        "Military-grade security",
        "Scalable cloud architecture"
      ]
    },
    {
      icon: Code,
      title: "Micro SAAS Solutions",
      description: "Innovative micro software-as-a-service solutions",
      color: "from-orange-600 to-red-600",
      benefits: [
        "Rapid deployment and setup",
        "Cost-effective pricing models",
        "Seamless integrations",
        "Continuous innovation updates"
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security and compliance standards"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across multiple time zones"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge technology and continuous innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Discover our comprehensive range of AI, IT infrastructure, and micro SAAS solutions designed to revolutionize your business operations."
        keywords="AI services, IT infrastructure, micro SAAS, autonomous systems, cloud computing, cybersecurity, Zion Tech Group services"
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, autonomous systems, 
              and enterprise-grade IT infrastructure. Leading the technological revolution.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8 inline-block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-white text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
                  <div className="text-sm text-zion-slate-light">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our services are organized into three main categories, each designed to address 
              specific business needs and drive innovation across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-8 bg-gradient-to-br ${category.color} rounded-xl text-white text-center transform transition-all duration-300 group-hover:scale-105`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg opacity-90 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Services Showcase */}
      <UltimateServicesShowcase />

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver 
              solutions that transform businesses and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our cutting-edge technology solutions. 
              Get started today with our special new customer offer.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎉 Special New Customer Offer
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Get 30% off your first 3 months on any service. 
                Plus, receive a free consultation and implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Claim Your Offer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
