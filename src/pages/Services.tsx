import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Target,
  Lightbulb,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List,
  Atom,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  DollarSign
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '../data/nextGenInnovativeServices2025';
import { ADVANCED_INNOVATIVE_SERVICES_2026 } from '../data/advancedInnovativeServices2026';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      name: 'AI Services',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      services: [
        {
          name: 'AI Consciousness Simulator',
          description: 'Advanced AI consciousness research platform for understanding human-like intelligence',
          features: ['Neural network architecture', 'Consciousness modeling', 'Research tools', 'Analytics dashboard'],
          price: 'Starting at $50,000'
        },
        {
          name: 'Quantum Emotion Processor',
          description: 'Quantum-powered emotional intelligence for enhanced user experiences',
          features: ['Quantum algorithms', 'Emotion recognition', 'Sentiment analysis', 'Real-time processing'],
          price: 'Starting at $75,000'
        },
        {
          name: 'AI Autonomous Systems',
          description: 'Self-managing AI infrastructure for continuous optimization',
          features: ['Auto-scaling', 'Self-healing', 'Performance monitoring', 'Predictive maintenance'],
          price: 'Starting at $100,000'
        },
        {
          name: 'Neural Network Architect',
          description: 'Custom neural network design and optimization services',
          features: ['Custom architecture', 'Training optimization', 'Model deployment', 'Ongoing support'],
          price: 'Starting at $60,000'
        },
        {
          name: 'AI Ethics Framework',
          description: 'Ethical AI development tools and compliance solutions',
          features: ['Bias detection', 'Fairness metrics', 'Compliance reporting', 'Ethics training'],
          price: 'Starting at $40,000'
        },
        {
          name: 'Predictive Analytics',
          description: 'AI-powered business insights and forecasting',
          features: ['Data analysis', 'Trend prediction', 'Risk assessment', 'Business intelligence'],
          price: 'Starting at $35,000'
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
=======
        "AI-Powered Automation",
        "Data Science Consulting"
      ],
      benefits: [
        "Increase operational efficiency by up to 300%",
        "Reduce costs through intelligent automation",
        "Gain competitive advantage with AI insights",
        "Scale operations without proportional cost increase"
      ],
      link: "/services/ai"
    },
    {
      id: 'talent',
      title: "Tech Talent",
      description: "Access world-class developers, engineers, and IT professionals for your projects",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Full-Stack Developers",
        "DevOps Engineers",
        "Data Scientists",
        "UI/UX Designers",
        "Project Managers",
        "QA Engineers"
      ],
      benefits: [
        "Reduce hiring time by 70%",
        "Access global talent pool",
        "Flexible engagement models",
        "Proven track record of success"
      ],
      link: "/talent"
    },
    {
      id: 'equipment',
      title: "Equipment & Infrastructure",
      description: "High-performance technology infrastructure and hardware solutions for modern businesses",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Cloud Infrastructure",
        "High-Performance Computing",
        "Network Solutions",
        "Security Hardware",
        "Data Center Equipment",
        "IoT Devices"
      ],
      benefits: [
        "Optimize performance and reliability",
        "Reduce infrastructure costs",
        "Scale with business growth",
        "Enhanced security and compliance"
      ],
      link: "/equipment"
    },
    {
      id: 'consulting',
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology optimization",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Digital Strategy",
        "Technology Roadmap",
        "Process Optimization",
        "Change Management",
        "Risk Assessment",
        "Performance Audits"
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      link: "/consulting"
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      features: [
        "Security Audits",
        "Penetration Testing",
        "SOC2 Compliance",
        "Incident Response",
        "Security Training",
        "Threat Intelligence"
      ],
      benefits: [
        "Protect against cyber threats",
        "Achieve compliance standards",
        "Reduce security risks",
        "Build customer trust"
      ],
      link: "/services/cybersecurity"
    },
    {
      id: 'cloud',
      title: "Cloud Services",
      description: "Scalable cloud solutions and DevOps services for modern application development",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
  const benefits = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '500+ successful projects delivered with 99.9% client satisfaction'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ certified professionals with deep industry expertise'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 24/7 monitoring'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with our proven methodology and tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to drive innovation, 
              enhance security, and accelerate your digital transformation journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
=======
        "Monitoring & Logging",
        "Cost Optimization"
      ],
      pricing: 'Starting from $15,000',
      timeline: '4-8 weeks'
    },
    {
      id: 'cloud-migration',
      category: 'cloud',
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly migrate to the cloud with optimized performance and cost management.',
      icon: Cloud,
      features: [
        'Multi-cloud strategy',
        'Legacy system migration',
        'Performance optimization',
        'Cost management',
        'Disaster recovery setup'
      ],
      link: "/services/cloud"
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Lightbulb, value: '200+', label: 'Projects Completed' },
    { icon: Rocket, value: '40%', label: 'Average Cost Savings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive technology services designed to accelerate your business growth, 
            enhance efficiency, and drive digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
=======
      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Service Offerings</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Detailed breakdown of our services with features, pricing, and timelines to help you make informed decisions.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-zion-cyan/80">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-zion-cyan/80">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-zion-slate/50 rounded-xl p-6 border border-zion-cyan/20">
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                        <div className="text-zion-cyan/80 text-sm">Timeline: {service.timeline}</div>
                      </div>
                      
                      <button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                
                <p className="text-zion-cyan/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan/60 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our AI and technology solutions can drive your success and accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
              <Link 
                to="/about"
                className="group px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
=======
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Download Service Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
