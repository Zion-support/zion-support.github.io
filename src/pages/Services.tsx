import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain,
  Shield,
  Cloud,
  Globe,
  Zap,
  Settings,
  Users,
  BarChart3,
  Lock,
  Server,
  Code,
  Database,
  Smartphone,
  Monitor,
  Network
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions to transform your business operations",
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      link: "/services/ai",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Automation", "Neural Networks"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance",
      icon: <Shield className="h-12 w-12 text-zion-purple" />,
      link: "/services/cybersecurity",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Compliance Management", "Incident Response", "Security Training"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation solutions for modern applications",
      icon: <Cloud className="h-12 w-12 text-zion-cyan" />,
      link: "/services/cloud",
      features: ["Cloud Migration", "DevOps Automation", "Container Management", "Infrastructure as Code", "Monitoring & Logging", "Cost Optimization"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation services",
      icon: <Globe className="h-12 w-12 text-zion-purple" />,
      link: "/services/transformation",
      features: ["Process Optimization", "Technology Strategy", "Change Management", "Legacy Modernization", "Digital Strategy", "Innovation Consulting"]
    }
  ];

  const specializedServices = [
    {
      title: "IT Infrastructure",
      description: "Robust and scalable IT infrastructure solutions",
      icon: <Server className="h-10 w-10 text-zion-cyan" />,
      link: "/services/infrastructure"
    },
    {
      title: "Software Development",
      description: "Custom software solutions and application development",
      icon: <Code className="h-10 w-10 text-zion-purple" />,
      link: "/services/software"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions",
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,
      link: "/services/analytics"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile application development",
      icon: <Smartphone className="h-10 w-10 text-zion-purple" />,
      link: "/services/mobile"
    },
    {
      title: "Network Security",
      description: "Comprehensive network security and monitoring solutions",
      icon: <Network className="h-10 w-10 text-zion-cyan" />,
      link: "/services/network"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and management services",
      icon: <Database className="h-10 w-10 text-zion-purple" />,
      link: "/services/database"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant technology solutions for healthcare organizations",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure financial technology solutions with regulatory compliance",
      icon: "💳"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 and smart manufacturing solutions",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "E-commerce and retail technology solutions",
      icon: "🛍️"
    },
    {
      title: "Education",
      description: "EdTech solutions for modern learning environments",
      icon: "🎓"
    },
    {
      title: "Government",
      description: "Secure government technology solutions and consulting",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-zion-blue-dark/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to transform your business and drive innovation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-zion-purple/30 text-zion-purple-light hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
=======
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  Rocket,
  Target
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Machine learning pipeline optimization',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics and forecasting',
        'AI-powered automation'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Cost reduction through automation',
        'Competitive advantage through AI'
      ],
      useCases: [
        'Customer service chatbots',
        'Predictive maintenance',
        'Fraud detection systems',
        'Recommendation engines',
        'Process automation'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.',
      icon: Shield,
      features: [
        'Threat detection and response',
        'Vulnerability assessment and management',
        'Security architecture design',
        'Incident response planning',
        'Compliance and audit support',
        'Security awareness training'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance',
        'Reduced security risks',
        'Enhanced customer trust'
      ],
      useCases: [
        'Enterprise security infrastructure',
        'Cloud security implementation',
        'Data protection and privacy',
        'Security operations center',
        'Compliance frameworks'
      ]
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions that enable modern applications and support business growth.',
      icon: Cloud,
      features: [
        'Cloud migration and strategy',
        'Multi-cloud architecture design',
        'DevOps and CI/CD implementation',
        'Container orchestration',
        'Serverless computing',
        'Cloud cost optimization'
      ],
      benefits: [
        'Scalability and flexibility',
        'Reduced infrastructure costs',
        'Improved performance and reliability',
        'Faster time to market'
      ],
      useCases: [
        'Application modernization',
        'Data center consolidation',
        'Disaster recovery solutions',
        'High-performance computing',
        'Global application deployment'
      ]
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation to modernize your business processes.',
      icon: Zap,
      features: [
        'Digital strategy development',
        'Process optimization and automation',
        'Legacy system modernization',
        'Change management consulting',
        'Digital workplace solutions',
        'Customer experience transformation'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Increased market competitiveness',
        'Future-ready business model'
      ],
      useCases: [
        'Business process automation',
        'Customer journey optimization',
        'Employee productivity tools',
        'Digital customer engagement',
        'Operational excellence programs'
      ]
    },
    {
      id: 5,
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to align your IT investments with business objectives and drive growth.',
      icon: Globe,
      features: [
        'Technology strategy and roadmap',
        'Architecture review and design',
        'Technology vendor selection',
        'Project management and delivery',
        'Performance optimization',
        'Technology risk assessment'
      ],
      benefits: [
        'Optimized technology investments',
        'Reduced project risks',
        'Improved technology alignment',
        'Enhanced decision making'
      ],
      useCases: [
        'Technology strategy development',
        'System architecture design',
        'Vendor evaluation and selection',
        'Project portfolio management',
        'Technology transformation planning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business success
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud infrastructure, we provide the expertise and solutions you need
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-zion-slate-dark">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <Award className="w-5 h-5 text-zion-purple mr-2" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                      <Rocket className="w-5 h-5 text-zion-cyan mr-2" />
                      Common Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-zion-slate-light/5 to-zion-cyan/5 rounded-2xl p-8 border border-zion-slate-light/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-dark mb-4">
                        Ready to Get Started?
                      </h4>
                      <p className="text-zion-slate-light mb-6">
                        Let's discuss how our {service.title.toLowerCase()} can transform your business
                      </p>
                      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
      {/* Main Services Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Our flagship services that drive business transformation and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple-light transition-colors font-medium"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
=======
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We combine deep expertise, innovative solutions, and unwavering commitment to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with deep expertise in cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully delivered hundreds of projects across diverse industries
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Results-Driven</h3>
              <p className="text-zion-slate-light">
                Focused on delivering measurable business outcomes and ROI
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Always exploring new technologies and approaches to solve complex challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology solutions can drive your success and accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
