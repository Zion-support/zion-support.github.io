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
=======
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
                      </button>
                    </div>
                  </div>
                </div>
=======
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
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Specialized Services</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Additional technology services to meet your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple-light transition-colors text-sm"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Tailored technology solutions designed for specific industry challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-zion-slate-light">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
=======
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
        </div>
      </section>
    </div>
  );
}
