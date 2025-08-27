import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOHead } from "@/components/SEOHead";
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
      <SEOHead 
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
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Server,
  Wifi,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Eye,
  Heart,
  ShoppingCart,
  Briefcase,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment"
      ],
      link: "/it-services/cybersecurity"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
      color: "from-zion-blue to-zion-cyan",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Management"
      ],
      link: "/it-services/infrastructure"
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-zion-cyan to-zion-blue",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ],
      link: "/it-services/development"
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-zion-purple to-zion-blue",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ],
      link: "/ai-services/predictive-analytics"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting",
      icon: Zap,
      color: "from-zion-blue to-zion-purple",
      services: [
        "Digital Strategy",
        "Process Automation",
        "Change Management",
        "Technology Assessment",
        "Digital Roadmap",
        "Implementation Support"
      ],
      link: "/it-services/digital-transformation"
    }
  ];
  const featuredServices = [
    {
      title: "AI Consciousness Simulator",
      description: "Advanced AI consciousness research platform for understanding human cognition",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      link: "/ai-services/consciousness-simulator"
    },
    {
      title: "Quantum Computing Suite",
      description: "Next-generation quantum computing solutions for complex problem solving",
      icon: Atom,
      color: "from-zion-purple to-zion-cyan",
      link: "/emerging-tech/quantum-computing"
    },
    {
      title: "Green IT Solutions",
      description: "Sustainable technology infrastructure for environmentally conscious businesses",
      icon: Heart,
      color: "from-zion-cyan to-zion-green",
      link: "/green-it"
    }
  ];
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Expert Engineers", icon: Users }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Our
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to drive innovation, enhance security, 
              and accelerate your business growth in the digital age.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge solutions that are transforming industries worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={category.link}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-zion-cyan">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss how we can help transform your business with our innovative technology solutions.
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Services;
